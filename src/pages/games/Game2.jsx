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
    const [gameStarted, setGameStarted] = useState(false)

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

            setGameStarted(true) // 👈 EZ FONTOS

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

            <div className="container">
                <div className="row">

                    <div className="vissza-gomb-wrapper">
                        <a href="/start3"><button className="btn1">Vissza</button></a>
                    </div>

                    <div className="col-12 mt-5 d-flex justify-content-center">
                        {hiba && <div className="hiba_uzi">{hiba}</div>}
                        {uzenet && <div className="juzi">{uzenet}</div>}
                    </div>

                    {/* BOT */}
                    <div className="col-12 text-center mt-4">
                        <h4 className="cim">Bot</h4>
                        <div className="kartyak-ter">
                            <div className="kartyak-ter">
                                {(gameStarted ? botHand : [1, 2, 3]).map((kartya, index) => (
                                    <img
                                        key={index}
                                        src={
                                            gameStarted && uzenet
                                                ? `https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.jpg`
                                                : `/kepek/pakli.png`
                                        }
                                        className="kartya"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ASZTAL */}
                    <div className="col-12 text-center mt-4">
                        <h4 className="cim">Asztal</h4>
                        <div className="kartyak-ter">
                            <div className="kartyak-ter">
                                {(gameStarted ? table : [1, 2, 3, 4]).map((kartya, index) => (
                                    <img
                                        key={index}
                                        src={
                                            gameStarted
                                                ? `https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.jpg`
                                                : `/kepek/pakli.png`
                                        }
                                        className="kartya"
                                        onClick={() => gameStarted && swapWithTable(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* JÁTÉKOS */}
                    <div className="col-12 text-center mt-4">
                        <h4 className="cim">Játékos</h4>
                        <div className="kartyak-ter">
                            <div className="kartyak-ter">
                                {(gameStarted ? hand : [1, 2, 3]).map((kartya, index) => (
                                    <img
                                        key={index}
                                        src={
                                            gameStarted
                                                ? `https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.id}.jpg`
                                                : `/kepek/pakli.png`
                                        }
                                        className="kartya"
                                        onClick={() => gameStarted && selectHandCard(index)}
                                        style={{
                                            border: selectedCard === index ? "3px solid red" : "2px solid white",
                                            cursor: gameStarted ? "pointer" : "default"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* GOMBOK */}
                    <div className="col-12 d-flex justify-content-center gap-3 mt-4 jatek-actions">
                        <button onClick={startGame} className="btn5">
                            Új játék
                        </button>

                        <button onClick={getFinalResult} className="btn1">
                            Eredmény
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}