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


            <img src={`/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
            <img src={`/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
            <img src={`/kepek/balalso-${tema}.png`} className="sarok bal-also" />
            <img src={`/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

            <div className='container'>

                {/* FŐ GRID */}
                <div className=" d-flex justify-content-center" >

                    <div className="d-flex flex-column mt-5">

                        {/* OSZLOP */}
                        <a href="/start"><button className="btn2 menu-item" style={{ animationDelay: "0.1s" }}>Huszonegy</button></a>
                        <a href="/start1"><button className="btn2 menu-item" style={{ animationDelay: "0.2s" }}>Makaó</button></a>
                        <a href="/start2"><button className="btn2 menu-item" style={{ animationDelay: "0.3s" }}>Zsír</button></a>
                        <a href="/start3"><button className="btn2 menu-item" style={{ animationDelay: "0.4s" }}>Fájer</button></a>
                        <a href="/start4"><button className="btn2 menu-item" style={{ animationDelay: "0.5s" }}>Snapszter</button></a>
                        <a href="/start5"><button className="btn2 menu-item" style={{ animationDelay: "0.6s" }}>Lórum</button></a>
                        <div className='d-flex menu-item' style={{ animationDelay: "0.8s" }}>
                            <a href="/scoreboard"><button className='btn4'>Pontszámok</button></a>
                            <a href="/options"><button className="btn4">Beállítások</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}