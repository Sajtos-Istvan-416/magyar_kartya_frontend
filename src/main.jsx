import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Alap oldalak
import Register from "./pages/Register"
import Menu from "./pages/Menu"
import Login from './pages/Login'
import Options from './pages/Options'

// Indítások
import Start from './pages/starts/Start'
import Start1 from './pages/starts/Start1'
import Start2 from './pages/starts/Start2'
import Start3 from './pages/starts/Start3'
import Start4 from './pages/starts/Start4'
import Start5 from './pages/starts/Start5'

// Játékszabályok
import Gamerule6 from './pages/gamerules/Gamerule6'
import Gamerule5 from './pages/gamerules/Gamerule5'
import Gamerule4 from './pages/gamerules/Gamerule4'
import Gamerule3 from './pages/gamerules/Gamerule3'
import Gamerule2 from './pages/gamerules/Gamerule2'
import Gamerule1 from './pages/gamerules/Gamerule1'

// Pontszámok
import Scorealap from './pages/scoreboards/Scorealap'
import Scoreboard1 from './pages/scoreboards/Scoreboard1'
import Scoreboard2 from './pages/scoreboards/Scoreboard2'
import Scoreboard3 from './pages/scoreboards/Scoreboard3'
import Scoreboard4 from './pages/scoreboards/Scoreboard4'
import Scoreboard5 from './pages/scoreboards/Scoreboard5'
import Scoreboard6 from './pages/scoreboards/Scoreboard6'

// Játékok
import Game1 from './pages/games/Game1'


function App() {

  useEffect(() => {
    const tema = localStorage.getItem("tema") || "theme-pink";
    document.body.className = tema;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='menu' element={<Menu />} />
        <Route path='login' element={<Login />} />
        <Route path='options' element={<Options />} />
        <Route path='scoreboard' element={<Scorealap />} />
        <Route path='scoreboard1' element={<Scoreboard1 />} />
        <Route path='scoreboard2' element={<Scoreboard2 />} />
        <Route path='scoreboard3' element={<Scoreboard3 />} />
        <Route path='scoreboard4' element={<Scoreboard4 />} />
        <Route path='scoreboard5' element={<Scoreboard5 />} />
        <Route path='scoreboard6' element={<Scoreboard6 />} />
        <Route path='start' element={<Start />} />
        <Route path='start1' element={<Start1 />} />
        <Route path='start2' element={<Start2 />} />
        <Route path='start3' element={<Start3 />} />
        <Route path='start4' element={<Start4 />} />
        <Route path='start5' element={<Start5 />} />
        <Route path='gamerule1' element={<Gamerule1 />} />
        <Route path='gamerule2' element={<Gamerule2 />} />
        <Route path='gamerule3' element={<Gamerule3 />} />
        <Route path='gamerule4' element={<Gamerule4 />} />
        <Route path='gamerule5' element={<Gamerule5 />} />
        <Route path='gamerule6' element={<Gamerule6 />} />
        <Route path='game1' element={<Game1 />} />
      </Routes>
    </BrowserRouter>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)