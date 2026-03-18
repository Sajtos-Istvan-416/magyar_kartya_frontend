import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Menu() {

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

            <div className='container'>

                {/* FŐ GRID */}
                <div className=" d-flex justify-content-center" >

                    <div className="d-flex flex-column mt-5">

                        {/* OSZLOP */}
                        <a href="/start"><button className="btn2">Huszonegy</button></a>
                        <a href="/start1"><button className="btn2">Makaó</button></a>
                        <a href="/start2"><button className="btn2">Zsír</button></a>
                        <a href="/start3"><button className="btn2">Fájer</button></a>
                        <a href="/start4"><button className="btn2">Snapszter</button></a>
                        <a href="/start5"><button className="btn2">Lórum</button></a>
                        <div className='d-flex'>
                            <a href="/scoreboard"><button className='btn4'>Pontszámok</button></a>
                            <a href="/options"><button className="btn4">Beállítások</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}