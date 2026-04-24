import 'bootstrap/dist/css/bootstrap.min.css'
import { hit } from '../../game'
import { stand } from '../../game';
import { useState } from "react";
import { startGame } from '../../game';
import { useEffect } from "react";

export default function Game2() {

    const [hiba, setHiba] = useState('')
    const [uzenet, setUzenet] = useState('')
    const [kartyaim, setKartyaim] = useState([])
    const [pontszam, setPontszam] = useState(0)
    const [dealer, setDealer] = useState([])
    const [dealerPontszam, setDealerPontszam] = useState(0)

    const [animPont, setAnimPont] = useState(false);

    async function huzas() {

        setHiba('')
        setUzenet('')

        try {

            const data = await hit()

            if (!data || data.error) {
                return setHiba(data?.error || "Hiba történt!")
            }

            console.log(data)

            setKartyaim(data.playerCards || [])
            setPontszam(data.playerScore || 0)

            setUzenet(data.result || '')

        } catch (err) {

            console.error(err)
            setHiba("Szerver hiba!")

        }
    }

    async function megall() {

        setHiba('')
        setUzenet('')

        try {

            const data = await stand()

            if (!data || data.error) {
                return setHiba(data?.error || "Hiba történt!")
            }

            setKartyaim(data.playerCards || [])
            setPontszam(data.playerScore || 0)
            setUzenet(data.result || '')
            setDealer(data.dealerCards || [])
            setDealerPontszam(data.dealerScore || 0)

        } catch (err) {

            console.error(err)
            setHiba("Szerver hiba!")

        }
    }

    async function start1() {
        setUzenet('');

        try {
            const data = await startGame();

            console.log(data);

            if (data.error) {
                return setHiba(data?.error);
            }
            setKartyaim(data.playerCards || [])
            setPontszam(data.playerScore || 0)
            setDealer(data.dealerCards || [])
            setDealerPontszam(data.dealerScore || 0)

            setUzenet(data?.message);

        } catch (err) {
            return setHiba('Nem sikerült kapcsolódni a backendhez.');
        }

    }

    const tema = localStorage.getItem("tema") || "theme-pink";

    useEffect(() => {
        document.body.className = tema;
    }, []);

    useEffect(() => {
        setAnimPont(true);
        setTimeout(() => setAnimPont(false), 200);
    }, [pontszam, dealerPontszam]);

    return (

        <div className="app">

            {/* SAROK DÍSZEK */}
            <img src={`/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
            <img src={`/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
            <img src={`/kepek/balalso-${tema}.png`} className="sarok bal-also" />
            <img src={`/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

            <div className="container">

                <div className="row">

                    <a href="/start3"><button className="btn1">Vissza</button></a>

                    <div className="col-12 mt-5 jatek-ter mb-5">

                        <div className="col-12 mt-5 d-flex justify-content-center">
                            {hiba && <div className="hiba_uzi">{hiba}</div>}
                            {uzenet && <div className="juzi">{uzenet}</div>}
                        </div>

                    </div>

                </div>

            </div >

        </div >
    )
}