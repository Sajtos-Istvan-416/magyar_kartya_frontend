## 🎮 Magyar Kártya Frontend
### 🗒️ Tartalomjegyzék
Bevezetés
A projektről
Technológiák
Projekt szerkezet
Oldalak és működés
Játék működés
Felhasználói felület
API kommunikáció
Fejlesztési lehetőségek

---

### 🏪 Bevezetés

A projekt egy React alapú webalkalmazás,
amely lehetővé teszi klasszikus magyar kártyajátékok játszását böngészőben.

#### A frontend feladata:

-🎮 játékok megjelenítése
-🧠 logika kezelése
-🔗 backenddel való kommunikáció
---

### 📖 A projektről

A Magyar Kártya frontend célja egy modern, látványos és könnyen használható felület biztosítása, ahol a felhasználók különböző kártyajátékokat játszhatnak.

#### A rendszer:

több játékot tartalmaz
minden játék külön komponensben van
bot ellen játszható
folyamatos játékélményt biztosít

---

### ⚙️ Technológiák
⚛️ React (Vite)
🟨 JavaScript (ES6)
🎨 CSS
📦 Bootstrap
🔗 Fetch API

---

## 📁 Projekt szerkezet
src/
├── pages/
│   ├── games/
│   │   ├── Game1.jsx
│   │   ├── Game2.jsx
│   │   └── Gameb.jsx
│   │
│   ├── scoreboards/
│   ├── starts/
│   ├── Admin.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Menu.jsx
│   ├── Options.jsx
│   └── Register.jsx
│
├── api.js
├── game.js
├── main.jsx
├── index.css

---

### 🧩 Oldalak és működés

#### 🎮 Menu
játék kiválasztása
navigáció külön játékokra
téma betöltése

---

#### ⚙️ Options
témaválasztás
localStorage használata

--- 

#### 👤 Login / Register
felhasználó kezelés
autentikáció

---

#### 🏆 Scoreboard
pontszámok megjelenítése

---

### 🃏 Játék működés

A játékok React state alapú működésűek.

🔹 Használt state-ek:
kartyaim → játékos lapjai
dealer → osztó lapjai
pontszam → játékos pont
dealerPontszam → osztó pont
hiba → hibaüzenet
uzenet → eredmény

---

## 🎯 Fő funkciók
#### ▶️ Játék indítása

startGame()

#### 🃏 Kártya húzás

hit()

#### ✋ Megállás

stand()

### 🔄 Működés folyamata 

Felhasználó kattint
↓
Frontend (React state)
↓
API hívás
↓
Backend válasz
↓
UI frissül

---

### 🎨 Felhasználói felület

#### Fő elemek:
🃏 dinamikus kártyák
🎴 pakli (kattintható)
🌸 sarok díszek
💬 üzenetek

---

#### Extra funkciók:
🎨 témaváltás (localStorage)
⚡ animációk (animationDelay)
🔄 pontszám animáció

---

## 🔗 API kommunikáció

A frontend a backenddel kommunikál REST API-n keresztül.

### Példa:
const data = await hit()
setKartyaim(data.playerCards)

---

### 🖼️ Képek betöltése

https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.card_img}

---

## 🚀 Fejlesztési lehetőségek
🎮 Multiplayer mód
✨ Animációk fejlesztése
📱 Mobil optimalizálás
🧠 State management (Redux)
🃏 Több játék

---

## 📌 Összefoglalás
⚛️ React alapú frontend
🎮 több játék kezelése
🔗 API alapú működés
🎨 testreszabható UI
🔗 GitHub

---

👉 Frontend repository
