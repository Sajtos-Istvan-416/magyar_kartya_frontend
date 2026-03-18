import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule6() {

    const tema = localStorage.getItem("tema") || "theme-pink";

    useEffect(() => {
        document.body.className = tema;
    }, []);

    return (
        <div className="app">

            {/* SAROK DÍSZEK */}
            <img src={`./src/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
            <img src={`./src/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
            <img src={`./src/kepek/balalso-${tema}.png`} className="sarok bal-also" />
            <img src={`./src/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

            {/* FŐ GRID */}
            <div className=" d-flex justify-content-center container" >

                <div className="d-flex flex-column mt-5 ">

                    {/* OSZLOP */}
                    <h1 className='cim'>Lórum</h1>
                    <a href="/start5"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Tedd le az összes kézben lévő lapodat elsőként.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Lapok növekvő sorrendje:</h2>
                    <p className='cim'>VII, VIII, IX, X, Alsó, Felső, Király, Ász</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Minden játékos nyolc lapot kap. A kezdő játékos letesz egy lapot az asztalra. Minden formának megvan a maga oszlopa. <br />
                        A játék körbe megy, a következő játékos elkezdhet egy új oszlopot ugyan azzal a figurával, amivel az elsőt kezdték, <br />
                        vagy folytatja a meglévőt egy soron következő lappal, ha egyiket se tudja akkor kimarad. Az ász után a hetes következik és kezdődik a sor az elejéről.</p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
