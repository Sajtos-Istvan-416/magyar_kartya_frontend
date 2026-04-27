import 'bootstrap/dist/css/bootstrap.min.css'
import { hit } from '../../game'
import { stand } from '../../game';
import { useState } from "react";
import { startGame } from '../../game';
import { useEffect } from "react";

// ... A komponens eleje és a függvények változatlanok ...

export default function Game1() {
  
    // ... A state-ek és a függvények itt maradnak ...
  const [hiba, setHiba] = useState('')
  const [uzenet, setUzenet] = useState('')
  const [kartyaim, setKartyaim] = useState([])
  const [pontszam, setPontszam] = useState(0)
  const [dealer, setDealer] = useState([])
  const [dealerPontszam, setDealerPontszam] = useState(0)
  const [animPont, setAnimPont] = useState(false);
  const tema = localStorage.getItem("tema") || "theme-pink";

  async function huzas() {
    setHiba('')
    setUzenet('')
    try {
      const data = await hit()
      if (!data || data.error) {
        return setHiba(data?.error || "Hiba történt!")
      }
      console.log(data)
      setKartyaim(data.playerCards || [])
      setPontszam(data.playerScore || 0)
      setUzenet(data.result || '')
    } catch (err) {
      console.error(err)
      setHiba("Szerver hiba!")
    }
  }

  async function megall() {
    setHiba('')
    setUzenet('')
    try {
      const data = await stand()
      if (!data || data.error) {
        return setHiba(data?.error || "Hiba történt!")
      }
      setKartyaim(data.playerCards || [])
      setPontszam(data.playerScore || 0)
      setUzenet(data.result || '')
      setDealer(data.dealerCards || [])
      setDealerPontszam(data.dealerScore || 0)
    } catch (err) {
      console.error(err)
      setHiba("Szerver hiba!")
    }
  }

  async function start1() {
    setUzenet('');
    try {
      const data = await startGame();
      console.log(data);
      if (data.error) {
        return setHiba(data?.error);
      }
      setKartyaim(data.playerCards || [])
      setPontszam(data.playerScore || 0)
      setDealer(data.dealerCards || [])
      setDealerPontszam(data.dealerScore || 0)
      setUzenet(data?.message);
    } catch (err) {
      return setHiba('Nem sikerült kapcsolódni a backendhez.');
    }
  }

  useEffect(() => {
    document.body.className = tema;
  }, []);

  useEffect(() => {
    setAnimPont(true);
    setTimeout(() => setAnimPont(false), 200);
  }, [pontszam, dealerPontszam]);


  return (
    <div className="app">

      {/* SAROK DÍSZEK */}
      <img src={`/kepek/balfelso-${tema}.png`} className="sarok bal-felso" />
      <img src={`/kepek/jobbfelso-${tema}.png`} className="sarok jobb-felso" />
      <img src={`/kepek/balalso-${tema}.png`} className="sarok bal-also" />
      <img src={`/kepek/jobbalso-${tema}.png`} className="sarok jobb-also" />

      <div className="container">
        <div className="row">

          {/* <<< 1. MÓDOSÍTÁS: Wrapper a Vissza gomb köré >>> */}
          <div className="vissza-gomb-wrapper">
            <a href="/start"><button className="btn1">Vissza</button></a>
          </div>

          <div className="col-12 mt-5 jatek-ter mb-5">
            <div className="kartyak-ter">
              {dealer && dealer.map((kartya, index) => (
                <img
                  key={index}
                  src={`https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.card_img}`}
                  className="kartya"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
          <div className="col-12 mt-5 d-flex justify-content-center">
            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="juzi">{uzenet}</div>}
          </div>

          <div className="col-12 mt-5 jatek-ter mb-5">
            <div className="pakli-ter ">
              <div className="pakli-container">
                <img src="/kepek/pakli.png" className="pakli" alt="" />
                <img src="/kepek/pakli.png" className="pakli1" alt="" />
                <img src="/kepek/pakli.png" className="pakli2" alt="" />
                <img src="/kepek/pakli.png" className="pakli3" alt="" />
                <img
                  src="/kepek/pakli.png"
                  className="pakli4"
                  onClick={huzas}
                  alt=""
                />
              </div>
            </div>

            <div className="kartyak-ter">
              {kartyaim?.map((kartya, index) => (
                <img
                  key={index}
                  src={`https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.card_img}`}
                  alt={kartya.card_name}
                  className="kartya"
                />
              ))}
            </div>
          </div>

          {/* <<< 2. MÓDOSÍTÁS: Új 'jatek-actions' osztály hozzáadva >>> */}
          <div className="col-12 m-5 d-flex justify-content-between align-items-center jatek-actions">

            <div className={`pontszam ${animPont ? "frissult" : ""}`}>
              <div>Osztó: {dealerPontszam}</div>
              <div>Játékos: {pontszam}</div>
              <button onClick={megall} className='btn1'>Megállok</button>
            </div>

            <button onClick={start1} className="btn5">Játék indítása!</button>
          </div>

        </div>
      </div>
    </div >
  )
}