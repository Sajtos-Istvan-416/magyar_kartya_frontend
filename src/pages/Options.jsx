import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, whoAmi } from '../api';

export default function Options() {

    const [uzenet, setUzenet] = useState('')
    const [hiba, setHiba] = useState('')
    const [user, setUser] = useState('')
    console.log(user);

    const [tema, setTema] = useState(
        localStorage.getItem("tema") || "theme-pink"
    );

    useEffect(() => {
        document.body.className = tema;
        localStorage.setItem("tema", tema);
    }, [tema]);

    const navigate = useNavigate();

    // felhasználó lekérése
    useEffect(() => {

        async function loadUser() {

            try {

                const data = await whoAmi()
                console.log(data);
                if (data.error) {
                    return setHiba(data.error)
                }

                setUser(data)

            } catch (err) {

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

            if (data.error) {
                return setHiba(data.error);
            }

            setUzenet(data.message);

            setTimeout(() => navigate('/login'), 2000)

        } catch (err) {

            setHiba('Nem sikerült kapcsolódni a backendhez.');

        }

    }

    useEffect(() => {
        const tema = localStorage.getItem("tema") || "theme-pink";
        document.body.className = tema;
      }, []);

    return (

        <div className="app">
            {/* FŐ GRID */}

            <img src="./src/kepek/magyar_kartya-e1640775461287.jpg" className="kep" alt="" />

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <a href="/menu"><button className="btn1">Vissza</button></a>

            <div className="d-flex justify-content-center col-lg-12">

                <img className="rounded-circle border border-5 border-danger mx-5" style={{ width: 200 }} src="../src/kepek/user.jpg" alt="" />

                <div className='d-flex flex-column'>

                    <div className='d-flex justify-content-center'>
                        <h2 style={{maxWidth:40}} className='szoveg'>Név:</h2>
                        <div className='megjelenites d-flex justify-content-between'>
                            {user?.username}
                            <img src="./src/kepek/szerkesztes.svg" alt="" style={{ width: 25, height: 25,}} />
                        </div>
                    </div>

                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <h2 style={{maxWidth:40}} className='szoveg'>Email:</h2>
                            <div className='megjelenites d-flex justify-content-between'>
                                {user?.email}
                                <img src="./src/kepek/szerkesztes.svg" alt="" style={{ width: 25, height: 25,}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='d-flex justify-content-center'>


                <button className="btn1" onClick={onclick}>
                    Kijelentkezés
                </button>
                <button style={{marginLeft:200}} className="btn1">
                    Mentés!
                </button>
            </div>

            <div className="d-flex justify-content-center align-items-center" >

                <div className="d-flex justify-content-center align-items-center">
                    {/* témák */}
                    <h1 className="cim">Témák:</h1>

                    <button className="tema1" onClick={() => setTema("theme-pink")}></button>
                    <button className="tema2" onClick={() => setTema("theme-magenta")}></button>
                    <button className="tema3" onClick={() => setTema("theme-green")}></button>
                    <button className="tema4" onClick={() => setTema("theme-blue")}></button>

                </div>

            </div>

            <img src="./src/kepek/magyar_kartya-e1640775461287.jpg" className="kep1" alt="" />


        </div >
    )
}