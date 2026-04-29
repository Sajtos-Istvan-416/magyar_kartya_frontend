import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function GameB() {

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
                    
                    <div className="container text-center mt-5 fejlesztes">
                    
                            <h1 style={{marginTop:100}}> Fejlesztés alatt!</h1>

                            <h3 style={{margin:30}}>
                                Ez a játék jelenleg még készül.
                            </h3>

                            <h3 style={{margin:30}}>
                                Dolgozunk rajta, hogy minél hamarabb elérhető legyen minden funkció.
                            </h3>

                            <h3 style={{margin:30}}>
                                Kérjük, nézz vissza később!
                            </h3>
                            <a href="/menu"><button className="btn1">Vissza a főmenüre!</button></a>
                        </div>

                </div>
            </div>
        </div>
    );
}
