import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function Scoreboard2() {
    
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
                    <h1 className='cim'>Pontszámok(Makaó)</h1>
                    <a href="/scoreboard"><button className="btn1">Vissza</button></a>
                    <div className='vonal'></div>

                    <table className='scoreboard'>
                        <thead>
                            <tr>
                                <th>Hely</th>
                                <th>Játékos</th>
                                <th>Pont</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>első</td>
                                <td>150</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>második</td>
                                <td>120</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>harmadik</td>
                                <td>90</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>negyedik</td>
                                <td>70</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>ötödik</td>
                                <td>60</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>hatodik</td>
                                <td>46</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>hetedik</td>
                                <td>40</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>nyolcadik</td>
                                <td>26</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>kilencedik</td>
                                <td>25</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>tizedik</td>
                                <td>20</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}
