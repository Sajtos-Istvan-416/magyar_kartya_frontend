import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Scorealap() {

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
                        <h1 className='cim'>Pontszámok</h1>
                        <div className='justify-content-center d-flex mb-5 mt-5'>
                            <a href="/menu"><button className="btn1">Vissza</button></a>
                        </div>
                        <div className='d-flex'>
                            <a href="/scoreboard1"><button className="btn4">Huszonegy</button></a>
                            <a href="/scoreboard2"><button className="btn4">Makaó</button></a>
                        </div>
                        <div>
                            <a href="/scoreboard3"><button className="btn4">Zsír</button></a>
                            <a href="/scoreboard4"><button className="btn4">Fájer</button></a>
                        </div>
                        <div>
                            <a href="/scoreboard5"><button className="btn4">Snapszter</button></a>
                            <a href="/scoreboard6"><button className="btn4">Lórum</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}