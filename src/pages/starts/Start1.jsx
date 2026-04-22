import { useEffect } from "react";

export default function Start1() {

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
                    
                <h1 className="cim">Makaó</h1>
                
                    <div className=" d-flex justify-content-center" >

                        <div className="d-flex flex-column mt-5">

                            {/* OSZLOP */}
                            <button className="btn3">Mehet!</button>
                            <a href="/gamerule2"><button className="btn3">Játékszabály</button></a>
                            <label className="label2">Pontszám: 0 <img className="kep2" src="./kepek/kupa.png" alt="" /></label>
                            <a href="/menu"><button className="btn3">Főmenü</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}