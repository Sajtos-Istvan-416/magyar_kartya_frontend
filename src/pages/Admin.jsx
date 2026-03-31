import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, whoAmi } from '../api';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { deleteUser } from "../admin"

export default function Admin() {

    const [uzenet, setUzenet] = useState('')
    const [hiba, setHiba] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [tema, setTema] = useState(
        localStorage.getItem("tema") || "theme-pink"
    );

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
                if (data.error) {
                    setHiba(data.error)
                } else {
                    setUser(data)
                }
            } catch {
                setHiba("Nem sikerült lekérni a felhasználót")
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1500);
            }
        }
        loadUser()
    }, [])

    async function torles(user_id) {
        setUzenet('');
        setHiba('');

        try {
            const data = await deleteUser(user_id);

            if (data.error) {
                return setHiba(data.error);
            }

            setUzenet(data.message || 'Felhasználó törölve!');
            setUser(null);
        } catch {
            setHiba('Nem sikerült kapcsolódni a backendhez.');
        }
    }

    if (loading) return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center flex-column toltes">
            <div style={{ width: "4rem", height: "4rem" }} className=" m-3 spinner-border spinner-border-lg"></div>
            <div style={{ fontSize: 25 }} className='toltes'>Betöltés...</div>
        </div>
    )

    if (!user || user.role !== 'admin') {
        return <Navigate to='/menu' />
    }

    return (
        <div className="app">

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <a href="/options">
                <button className="btn1" style={{ marginLeft: 50 }}>Vissza</button>
            </a>

            <h1 className='cim'>ADMIN PANEL!!!</h1>

            <table className="scoreboard table container table-dark" style={{ textAlign: 'center', visibility: 50 }}>
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>FelhasználóNev</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Törlés</th>
                        <th>Szerkesztés</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center" key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><button onClick={ torles } style={{ background: 'red', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Törlés</button></td>
                        <td><button style={{ background: 'yellow', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Szerkesztés</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}