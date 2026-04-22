import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule4() {

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
                    <h1 className='cim'>Fájer</h1>
                    <a href="/start3"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Érd el a legmagasabb pontszámot a lapok cserélgetésével.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Lapok pont értékei:</h2>
                    <p className='cim'>Ász: 11, X Király Felső és alsó: 10, IX: 9, VIII:8, VII: 7</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Kártya kombinációk:</h2>
                    <p className='cim'>Három ász: 33, Ász és két 10-et érő kártya egy színből: 31 (ezt hívják fájernek), Három egyforma figura: 30 + minél erősebb lapokból van <br />
                        döntetlen esetén az erősebb lapok nyernek, Három egyszínű lap: a lapok pontértékeinek összege(24-30), két ász:22, <br />
                        Egy ász és egy 10-et érő kártya egy színből: 21</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Minden játékos három lapot kap, és még három lapot teszünk középre. A kezdő játékos cserélhet egy lapot vagy következőt szólhat és a <br />
                        soron következő játékos jön. Cserélhetsz mindaddig egy lapot, amíg te vagy valaki nem passzol, ilyenkor a passzoló nem cserélhet és a <br />
                        többi játékosnak is csak egy lehetősége maradt erre. Következő bemondást minden játékos csak egyszer tehet meg, utána már <br />
                        csak cserélni vagy passzolni tud. Válassz ki egy lapot a sajátjaid közül és egyet a talonból, hogy kicseréld a két lapot.</p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
