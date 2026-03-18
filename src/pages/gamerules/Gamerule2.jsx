import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule2() {

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
                    <h1 className='cim'>Makaó</h1>
                    <a href="/start1"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Legyél az első, aki lerakja az összes lapját. A játék addig folytatódik, amíg egy játékosnak marad csak lapja.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Speciális kártyák:</h2>
                    <p className='cim'>Ász: a következő játékos kimarad, VII: a következő játékos két lapot húz fel,<br />
                        Felső: színkérő kártya, bármelyik lapra rátehető,
                        Makk alsó: a következő játékos 3 lapot húz fel</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Minden játékos öt lapot kap, és egy lap kerül középre. Az első játékosnak erre kell tennie egy színben vagy<br />
                        figurában megfelelő lapot, ha nem tud, húz a pakli tetejéről egyet. Azonos figurájú lapot 1-4 darabot is lerakhatsz egyszerre,<br />
                        de ha kettőt raksz le egyet húznod kell. Ha speciális kártyát raktak le előtted, csak arra megfelelő speciális kártyát rakhatsz.<br />
                        Ász letétele után kimaradsz, de ha van ászod, közbevághatsz (akár több lappal is). A felsővel új szín kérhető, erre csak a <br />
                        színben megfelelő lap rakható le, de több egyforma figura is megengedett. Kártyahúzó lapok, mint a hetes vagy amakk alsó tovább<br />
                        passzolható a megfelelő húzó lap lerakásával(akár több lappal is), ezzel növelve a húzandó lapok számát. Makk hetesre rárakható <br />
                        a makk alsó és ez oda-vissza működik. Ha nem tudsz rakni, húznod kell mégegyet</p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
