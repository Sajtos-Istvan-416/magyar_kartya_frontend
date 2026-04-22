import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule1() {

    const tema = localStorage.getItem("tema") || "theme-pink";

    useEffect(() => {
        document.body.className = tema;
    }, []);

    return (
        <div className="app">

            {/* SAROK DÍSZEK */}
            <img src={`/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
            <img src={`/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
            <img src={`/kepek/balalso-${tema}.png`} className="sarok bal-also" />
            <img src={`/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />
            {/* FŐ GRID */}
            <div className=" d-flex justify-content-center container" >

                <div className="d-flex flex-column mt-5 ">

                    {/* OSZLOP */}
                    <h1 className='cim'>Huszonegy</h1>
                    <a href="/start"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Érd el a legmagasabb pontszámot, az összes játékos közül 14 és 21 között.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Lapok pont értékei:</h2>
                    <p className='cim'>Ász: 11, X: 10, IX: 9,VIII: 8, VII: 7, Király: 4, Felső: 3, Alsó: 2</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Minden játékos egy lappal kezd. Lapokat kell kérned, és az összegeiket figyelned, ha már több pontod van, mint 14 megállhatsz,<br />
                        de ha több már mint 21 akkor besokalltál. A két ász a legnagyobb kombináció.</p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
