import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Gamerule3() {

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
                    <h1 className='cim'>Zsír</h1>
                    <a href="/start2"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <h2 className='cim'>A feladat:</h2>
                    <p className='cim'>Érd el a legmagasabb pontszámot az ászok és tizesek gyűjtésével.</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Lapok pont értékei:</h2>
                    <p className='cim'>Ász és X: 10 pont, IX VIII VII Király Felső és Alsó: nincs pontértékük</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Speciális kártya:</h2>
                    <p className='cim'>VII: ütni/fogni tudsz vele</p>
                    <div className='vonal'></div>

                    <h2 className='cim'>Játékmenet:</h2>
                    <p className='cim'>Osztás: Mindenki 4 lapot kap, a maradék a talon (húzópakli).
                        Hívás: Az első játékos kitesz egy tetszőleges lapot.<br />
                        Ütés: Ütni csak a hívottal azonos rangú lappal (pl. királyra királyt) vagy bármilyen hetessel lehet. A színek nem számítanak.<br />
                        Kör lezárása: Az ütésváltás addig tarthat, amíg a játékosok tudnak/akarnak ütőkártyát tenni. Az viszi a kört, aki az utolsó ütőlapot tette.<br />
                        Húzás: Az ütés után mindenki kiegészíti a lapjait 4-re a talonból. A következő kört az kezdi, aki az előzőt vitte. </p>
                    <div className='vonal'></div>

                </div>
            </div>
        </div>
    );
}
