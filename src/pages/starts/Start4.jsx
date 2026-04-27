import { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Start4() {

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
            <div className="container">

                <div className="row">

                    <h1 className="cim">Snapszter</h1>

                    <div className=" d-flex justify-content-center" >

                       <div className="d-flex flex-column mt-5 align-items-center">

                            {/* 2. Régi gombok cseréje Link komponensekre */}
                            <Link to="/gameB" className="btn3 menu-item">Mehet!</Link>
                            <Link to="/gamerule5" className="btn3 menu-item">Játékszabály</Link>
                            
                            <label className="label2">
                                Pontszám: 0 
                                <img className="kep2" src="./kepek/kupa.png" alt="Pontszám kupa" />
                            </label>

                            <Link to="/menu" className="btn3 menu-item">Főmenü</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}