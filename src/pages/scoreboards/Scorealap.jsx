import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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
                        <Link to="/scoreboard1" className="btn4 menu-item" style={{ animationDelay: "0.1s" }}> Huszonegy</Link>
                        <Link to="/scoreboard4" className="btn4 menu-item" style={{ animationDelay: "0.2s" }} >Fájer</Link>
                        </div>
                        <div className='d-flex'>
                        <Link to="/scoreboard2" className="btn4 menu-item" style={{ animationDelay: "0.3s" }}>Makaó</Link>
                        <Link to="/scoreboard3" className="btn4 menu-item" style={{ animationDelay: "0.4s" }}>Zsír</Link>
                        </div>
                        <div className='d-flex'>
                        <Link to="/scoreboard5" className="btn4 menu-item" style={{ animationDelay: "0.5s" }}>Snapszter</Link>
                        <Link to="/scoreboard6" className="btn4 menu-item" style={{ animationDelay: "0.6s" }}>Lórum</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}