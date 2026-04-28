import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { fajerstart, playerswap, botswap, result } from '../../game2';

export default function Game2() {

    const [hiba, setHiba] = useState('')
    const [uzenet, setUzenet] = useState('')

    const [hand, setHand] = useState([])
    const [table, setTable] = useState([])
    const [botHand, setBotHand] = useState([])

    const [selectedCard, setSelectedCard] = useState(null)

    const tema = localStorage.getItem("tema") || "theme-pink";

    useEffect(() => {
        document.body.className = tema;
    }, [tema]);

    // 🎮 JÁTÉK INDÍTÁS
    async function startGame() {
        setHiba('')
        setUzenet('')

        try {
            const data = await fajerstart()

            if (data.error) return setHiba(data.error)

            setHand(data.player.hand)
            setTable(data.table)
            setBotHand(data.bot.hand)

        } catch {
            setHiba("Backend hiba")
        }
    }

    // 🟢 PLAYER KÁRTYA KIVÁLASZTÁS
    function selectHandCard(index) {
        setSelectedCard(index)
    }

    // 🔁 CSERE AZ ASZTALLAL
    async function swapWithTable(tableIndex) {
        if (selectedCard === null) {
            return setHiba("Válassz egy lapot!")
        }

        try {
            const data = await playerswap(selectedCard, tableIndex)

            if (data.error) return setHiba(data.error)

            setHand(data.player.hand)
            setTable(data.table)

            setSelectedCard(null)

            // 🤖 BOT LÉPÉS
            const bot = await botswap()

            setBotHand(bot.bot.hand)
            setTable(bot.table)

        } catch {
            setHiba("Csere hiba")
        }
    }

    // 🏁 EREDMÉNY
    async function getFinalResult() {
        try {
            const data = await result()

            setUzenet(data.result)

            setHand(data.player.hand)
            setBotHand(data.bot.hand)

        } catch {
            setHiba("Eredmény hiba")
        }
    }

    return (
        <div className="app">

            {/* SAROK */}
            <img src={`/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
            <img src={`/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
            <img src={`/kepek/balalso-${tema}.png`} className="sarok bal-also" />
            <img src={`/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

            <div className="container text-center">

                {/* ÜZENET */}
                {hiba && <div className="hiba_uzi">{hiba}</div>}
                {uzenet && <div className="juzi">{uzenet}</div>}

                {/* 🤖 BOT */}
                <h4 className="mt-4">Bot</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {botHand.map((kartya, index) => (
                       <img
                       key={index}
                       src={`https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.png`}
                       className="kartya"
                        />
                    ))}
                </div>

                {/* 🟩 ASZTAL */}
                <h4 className="mt-4">Asztal</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {table.map((kartya, index) => (
                        <img
                        key={index}
                        src={`https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.png`}
                        className="kartya"
                            // ASZTAL
                            onClick={() => swapWithTable(index)}


                        />
                    ))}
                </div>

                {/* 🧍 PLAYER */}
                <h4 className="mt-4">Te</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {hand.map((kartya, index) => (
                       <img
                       key={index}
                       src={`https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.png`}
                       className="kartya"
                            onClick={() => selectHandCard(index)}
                            style={{
                                border: selectedCard === index ? "3px solid red" : "2px solid white",
                                cursor: "pointer"
                            }}
                        />
                    ))}
                </div>

                {/* GOMBOK */}
                <div className="mt-4 d-flex justify-content-center gap-3">
                    <button onClick={startGame} className="btn5">
                        Új játék
                    </button>

                    <button onClick={getFinalResult} className="btn btn-warning">
                        Eredmény
                    </button>
                </div>

            </div>
        </div >
    )
}