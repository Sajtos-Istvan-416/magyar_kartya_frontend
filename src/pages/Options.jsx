import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, whoAmi } from '../api';
import { Link } from "react-router-dom";
import { userEdit } from "../admin"

export default function Options() {

    // ... A meglévő state-ek és függvények (useState, useEffect, stb.) maradnak ...
    // ... Nincs változás a return előtt ...

    const [uzenet, setUzenet] = useState('')
    const [hiba, setHiba] = useState('')
    const [user, setUser] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [errorAllUsers, setErrorAllUsers] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [tema, setTema] = useState(
        localStorage.getItem("tema") || "theme-pink"
    );
    const isAdmin = user?.role === 'admin'
    const navigate = useNavigate();

    useEffect(() => {
        document.body.className = tema;
        localStorage.setItem("tema", tema);
    }, [tema]);

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

    function handleEdit(user) {
        setSelectedUser(user)
        setUsername(user.username)
        setEmail(user.email)
        setRole(user.role)
        setIsEditing(true)
    }

    async function editUser(user_id) {
        const data = await userEdit(user_id, username, email, role)
        if (data.error) {
            return alert(data.error)
        }
        const freshUser = await whoAmi()
        setUser(freshUser)
        setIsEditing(false)
        alert('Sikeres módosítás')
    }

    useEffect(() => {
        async function loadUser() {
            try {
                const data = await whoAmi()
                if (data.error) return setHiba(data.error)
                setUser(data)
                setUsername(data.username)
                setEmail(data.email)
                setRole(data.role)
            } catch {
                setHiba("Nem sikerült lekérni a felhasználót")
            }
        }
        loadUser()
    }, [])

    return (
        <div className="app">

            <img src="/kepek/magyar_kartya-e1640775461287.jpg" className="kep" alt="" />

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            {/* <<< EZ A RÉSZ VÁLTOZOTT >>> */}
            <div className="vissza-gomb-wrapper">
                <a href="/menu">
                    {/* Az inline style innen el lett távolítva! */}
                    <button className="btn1">Vissza</button>
                </a>
            </div>
            {/* <<< EDDIG TART A VÁLTOZÁS >>> */}

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center col-lg-12">

                <img className="rounded-circle border border-5 border-danger mx-md-5 mb-3 mb-md-0"
                    style={{ width: "150px", maxWidth: "100%" }}
                    src="./kepek/user.jpg"
                    alt=""
                />

                <div>

                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        {/* A 'szoveg' osztályra már hatni fog a reszponzív CSS */}
                        <h2 className='szoveg'>Név:</h2>
                        {/* A 'megjelenites' osztályra már hatni fog a reszponzív CSS */}
                        <div className='megjelenites d-flex justify-content-between align-items-start'>
                            {isEditing ? (
                                <input
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            ) : (
                                <span>{user?.username}</span>
                            )}
                            <img
                                onClick={() => {
                                    console.log("CLICK");
                                    handleEdit(user);
                                }}
                                src="/kepek/szerkesztes.svg"
                                alt=""
                                style={{ width: 25, height: 25 }}
                            />
                        </div>
                    </div>

                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center'>
                        <h2 className='szoveg'>Email:</h2>
                        <div className='megjelenites d-flex justify-content-between align-items-start'>
                            {isEditing ? (
                                <input
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            ) : (
                                <span>{user?.email}</span>
                            )}
                            <img
                                onClick={() => {
                                    console.log("CLICK");
                                    handleEdit(user);
                                }}
                                src="/kepek/szerkesztes.svg"
                                alt=""
                                style={{ width: 25, height: 25, }}
                            />
                        </div>
                    </div>

                </div >
            </div>

            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4'>

                <button className="btn1" onClick={onclick}>
                    Kijelentkezés
                </button>

                <button
                    className="btn1"
                    onClick={() => selectedUser && editUser(selectedUser.user_id)}
                >
                    Mentés!
                </button>

            </div>

            {/* TÉMÁK - A 'tema' osztályokra már hatni fog a reszponzív CSS */}
            <div className="d-flex flex-wrap justify-content-center align-items-center text-center gap-2 mt-4">

                <h1 className="cim w-100">Témák:</h1>

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
                {isAdmin && <Link to='/admin' className='px-3 py-1 text-decoration m-4 rounded cim  fs-4'>Admin panel</Link>}
            </div>

            <img src="/kepek/magyar_kartya-e1640775461287.jpg" className="kep1" alt="" />
        </div>
    )
}