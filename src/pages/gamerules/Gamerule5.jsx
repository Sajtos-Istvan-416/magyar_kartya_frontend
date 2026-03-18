import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule5() {

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
                    <h1 className='cim'>Snapszter</h1>
                    <a href="/start4"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Szerezz 66 pontot vagy legyen tiéd az utolsó ütés.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Lapok pont értékei:</h2>
                    <p className='cim'>Ász: 11, X: 10, Király: 4, Felső: 3, Alsó: 2</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Kártya kombinációk:</h2>
                    <p className='cim'>Egy kézben lévő király és felső azonos színből huszat ér, adu színben pedig negyvenet</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Osztás és Talon: A játékosok 5-5 lapot kapnak, egy lapot színével felfelé az asztalra tesznek (adu), a maradék a talon.<br />
                        A játék menete: Az osztó partnere kezdi. Színadás/ütéskényszer nincs a talon fogyásáig. Ütés után a győztes húz először a talonból.<br />
                        Talon lezárása (Takarás): Ha a talon elfogyott, vagy valaki a húzás előtt "betakarja" (lefelé fordítja) a talont, kötelező a színadás és az adu felülütése.<br />
                        A játék vége: Aki a 66 pontot eléri, megnyeri a leosztást. Ha az ellenfél nem ütött 33-at, 1 pontot, ha egyáltalán nem ütött (csendes snapszer), 2 pontot ér a győzelem.<br />
                        Snapszer bemondás: Az osztás után, de az első lap kijátszása előtt bemondható a 66 (snap), ha a játékos biztosra veszi a győzelmet, és az ellenfél nem üt semmit.</p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
