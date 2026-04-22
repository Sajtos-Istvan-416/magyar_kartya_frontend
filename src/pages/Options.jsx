import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, whoAmi } from '../api';
import { Link } from "react-router-dom";

export default function Options() {

    const [uzenet, setUzenet] = useState('')
    const [hiba, setHiba] = useState('')
    const [user, setUser] = useState('')

    const [tema, setTema] = useState(
        localStorage.getItem("tema") || "theme-pink"
    );
    const isAdmin = user?.role === 'admin'

    const navigate = useNavigate();

    // THEME APPLY
    useEffect(() => {
        document.body.className = tema;
        localStorage.setItem("tema", tema);
    }, [tema]);

    // USER LOAD
    useEffect(() => {
        async function loadUser() {
            try {
                const data = await whoAmi()
                if (data.error) return setHiba(data.error)
                setUser(data)
            } catch {
                setHiba("Nem sikerült lekérni a felhasználót")
            }
        }
        loadUser()
    }, [])

    async function onclick() {
        setUzenet('');
        setHiba('');

        try {
            const data = await logout();

            if (data.error) return setHiba(data.error);

            setUzenet(data.message);
            setTimeout(() => navigate('/login'), 2000)

        } catch {
            setHiba('Nem sikerült kapcsolódni a backendhez.');
        }
    }

    return (
        <div className="app">

            <img src="/kepek/magyar_kartya-e1640775461287.jpg" className="kep" alt="" />

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <a href="/menu"><button className="btn1" style={{ marginLeft: 50 }}>Vissza</button></a>

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center col-lg-12">

                <img className="rounded-circle border border-5 border-danger mx-md-5 mb-3 mb-md-0"
                    style={{ width: "150px", maxWidth: "100%" }}
                    src="./kepek/user.jpg"
                    alt=""
                />

                <div>

                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <h2 style={{ maxWidth: 40 }} className='szoveg'>Név:</h2>
                        <div className='megjelenites d-flex justify-content-between align-items-start'>
                            <span style={{ maxWidth: "85%", padding: 10 }}>
                                {user?.username}
                            </span>
                            <img
                                src="/kepek/szerkesztes.svg"
                                alt=""
                                style={{ width: 25, height: 25 }}
                            />
                        </div>
                    </div>

                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <h2 style={{ maxWidth: 40 }} className='szoveg'>Email:</h2>
                        <div className='megjelenites d-flex justify-content-between align-items-start'>
                            <span style={{ maxWidth: "85%", padding: 10 }}>
                                {user?.email}
                            </span>
                            <img
                                src="/kepek/szerkesztes.svg"
                                alt=""
                                style={{ width: 25, height: 25, }}
                            />
                        </div>
                    </div>

                </div >
            </div>

            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>

                <button className="btn1" onClick={onclick}>
                    Kijelentkezés
                </button>

                <button className="btn1">
                    Mentés!
                </button>

            </div>

            {/* TÉMÁK */}
            <div className="d-flex flex-wrap justify-content-center align-items-center text-center gap-2">

                <h1 className="cim">Témák:</h1>

                <button
                    className={`tema1 ${tema === "theme-pink" ? "active" : ""}`}
                    onClick={() => setTema("theme-pink")}
                />

                <button
                    className={`tema2 ${tema === "theme-magenta" ? "active" : ""}`}
                    onClick={() => setTema("theme-magenta")}
                />

                <button
                    className={`tema3 ${tema === "theme-green" ? "active" : ""}`}
                    onClick={() => setTema("theme-green")}
                />

                <button
                    className={`tema4 ${tema === "theme-blue" ? "active" : ""}`}
                    onClick={() => setTema("theme-blue")}
                />

            </div>

            <div className='d-flex justify-content-center align-itmes-cneter'>

            {isAdmin && <Link to='/admin' className='px-3 py-1 text-decoration m-4 rounded cim  fs-4'>Admin panel</Link>}</div>

            <img src="/kepek/magyar_kartya-e1640775461287.jpg" className="kep1" alt="" />

        </div>
    )
}