import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, whoAmi } from '../api';
import { Link } from "react-router-dom";

export default function Admin() {

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

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <a href="/options"><button className="btn1" style={{ marginLeft: 50 }}>Vissza</button></a>
            <h1 className='cim'>ADMIN PANEL!!!</h1>

        </div>
    )
}