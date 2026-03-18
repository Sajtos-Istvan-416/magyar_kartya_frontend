import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Input from "../components/Input"
import { login } from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState(null);

  const [email, setEmail] = useState('')
  const [psw, setpsw] = useState('')

  const [hiba, setHiba] = useState('')
  const [uzenet, setUzenet] = useState('')

  async function onReg() {
    setHiba('');
    setUzenet('');

    if (!email || !psw) {
      return setHiba('Minden mezőt tölts ki!');
    }

    try {
      const data = await login(email, psw);

      if (data.error) {
        return setHiba(data.error);
      }

      setUzenet(data.message);

      setTimeout(() => navigate('/menu'), 2000)

    } catch (err) {
      return setHiba('Nem sikerült kapcsolódni a backendhez.');
    }
  }

  const tema = localStorage.getItem("tema") || "theme-pink";

  useEffect(() => {
    document.body.className = tema;
  }, []);

  return (
    <div className="app">

      {/* SAROK DÍSZEK */}
      <img src={`./src/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
      <img src={`./src/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
      <img src={`./src/kepek/balalso-${tema}.png`} className="sarok bal-also" />
      <img src={`./src/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

      <div className="container">

        <div className="content-wrapper">

          {/* BAL OLDAL */}
          <div className="form">
            <h1 className="cim">Bejelentkezés</h1>

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <Input label='E-mail' type='email' value={email} setValue={setEmail} placeholder='email.email@gmail.com' />

            <Input label='Jelszó' type='password' value={psw} setValue={setpsw} placeholder='******' />

            <button className="btn1" onClick={onReg}>
              Bejelentkezés
            </button>
            <div className="d-flex justify-content-center">
              <Link className="px-3 py-1 text-decoration-none rounded text-dark fs-5" to='/register'>Még nincs fiókom</Link></div>

          </div>

        </div>

      </div>
    </div>
  );
}