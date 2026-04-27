import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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

                <div className="d-flex justify-content-center">

                    <div className="d-flex flex-column mt-5 menu-wrapper">

                        {/* 2. LÉPÉS: <a> helyett <Link>, href helyett to */}
                        <Link to="/start" className="btn2 menu-item" style={{ animationDelay: "0.1s" }}> Huszonegy</Link>
                        <Link to="/start3" className="btn2 menu-item" style={{ animationDelay: "0.2s" }} >Fájer</Link>
                        <Link to="/start1" className="btn2 menu-item" style={{ animationDelay: "0.3s" }}>Makaó</Link>
                        <Link to="/start2" className="btn2 menu-item" style={{ animationDelay: "0.4s" }}>Zsír</Link>
                        <Link to="/start4" className="btn2 menu-item" style={{ animationDelay: "0.5s" }}>Snapszter</Link>
                        <Link to="/start5" className="btn2 menu-item" style={{ animationDelay: "0.6s" }}>Lórum</Link>

                        <div className='menu-bottom menu-item justify-content-center d-flex' style={{ animationDelay: "0.7s" }}>
                            <Link to="/scoreboard" className='btn4'>Pontszámok</Link>
                            <Link to="/options" className="btn4">Beállítások</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}