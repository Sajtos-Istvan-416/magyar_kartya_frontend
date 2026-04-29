# 🎮 Magyar Kártya Frontend
## 🗒️ Tartalomjegyzék

# Készítette:
**Sajtos István**

- [Bevezetés](#bevezetes)
- [A projektről](#aprojektrol)
- [Technológiák](#technologia)
- [Projekt szerkezet](#projektszerkezete)
- [Oldalak és működés](#oldalakesmukodes)
- [Játék működés](#jatekmukodes)
- [Felhasználói felület](#felhasznaloifelulet)
- [API kommunikáció](#apikommunikacio)
- [Fejlesztési lehetőségek](#fejlesztesilehetosegek)

---

## 🏪 Bevezetés

A projekt egy React alapú webalkalmazás, ahol lehet játszani magyar kártyajátékokkal böngészőben.

### A frontend feladata:

- 🎮 játékok megjelenítése
- 🧠 logika kezelése
- 🔗 backenddel való kommunikáció

---

## 📖 A projektről

A Magyar Kártya frontend célja egy modern, látványos és könnyen használható felület biztosítása,
 ahol a felhasználók különböző kártyajátékokat játszhatnak.

### A rendszer:

- több játékot tartalmaz
- minden játék külön komponensben van (csak 2 MÉG!)
- bot ellen játszható
- folyamatos játékélményt biztosít

---

## ⚙️ Technológiák

1. ⚛️ React (Vite)
2. 🟨 JavaScript (ES6)
3. 🎨 CSS
4. 📦 Bootstrap
5. 🔗 Fetch API

---

## 📁 Projekt szerkezet

```bash
src/
├── components/
│   ├── Input.jsx/
│   └── Table.jsx
├── pages/
│   ├── gamerules/
│   │   ├── Gamerule1.jsx
│   │   ├── Gamerule2.jsx
│   │   ├── Gamerule3.jsx
│   │   ├── Gamerule4.jsx
│   │   ├── Gamerule5.jsx
│   │   └── Gamerule6.jsx
│   ├── games/
│   │   ├── Game1.jsx
│   │   ├── Game2.jsx
│   │   └── Gameb.jsx
│   │
│   ├── scoreboards/
│   │   ├── Scorealap.jsx
│   │   ├── Scoreboard1.jsx
│   │   ├── Scoreboard2.jsx
│   │   ├── Scoreboard3.jsx
│   │   ├── Scoreboard4.jsx
│   │   ├── Scoreboard5.jsx
│   │   └── Scoreboard6.jsx
│   ├── starts/
│   │   ├── Start.jsx
│   │   ├── Start1.jsx
│   │   ├── Start2.jsx
│   │   ├── Start3.jsx
│   │   ├── Start4.jsx
│   │   └── Start5.jsx
│   ├── Admin.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Menu.jsx
│   ├── Options.jsx
│   └── Register.jsx
│
├── admin.js
├── api.js
├── game.js
├── game2.js
├── index.css
└── main.jsx
```

---

## 🧩 Oldalak és működés

#### 🎮 Menu
- játék kiválasztása
- navigáció külön játékokra
- téma betöltése

#### ⚙️ Options
- témaválasztás
- localStorage használata

#### 👤 Login / Register
- felhasználó kezelés
- autentikáció

#### 🏆 Scoreboard
- pontszámok megjelenítése, de egyfajta ranglistaként is szolgál (még fejleszéss alatt)

---

## 🃏 Játék működés

A játékok React state alapú működésűek.

#### 🔹 Használt state-ek:
- kartyaim → játékos lapjai
- dealer → osztó lapjai
- pontszam → játékos pont
- dealerPontszam → osztó pont
- hiba → hibaüzenet
- uzenet → eredmény

### 🎯 Fő funkciók

#### ▶️ Játék indítása

- startGame()
- fajerstart()

#### 🃏 Kártya húzás

- hit()

#### 🃏 Kártya csere

- playerswap()

#### ✋ Megállás

- stand()
- result()

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

## 🎨 Felhasználói felület

### Fő elemek:

- 🃏 dinamikus kártyák
- 🎴 pakli (kattintható)
- 🌸 sarok díszek
- 💬 üzenetek
- 🎴 gombok/linkek

### Extra funkciók:

1. 🎨 témaváltás (localStorage)
2. ⚡ animációk (animationDelay)

---

## 🔗 API kommunikáció

A frontend a backenddel kommunikál REST API-n keresztül.

##### Példa:
const data = await hit()
setKartyaim(data.playerCards)

---

#### 🖼️ Képek betöltése

https://nodejs303.dszcbaross.edu.hu/card_img/${kartya.card_img}

---

## 🚀 Fejlesztési lehetőségek

- 🎮 Multiplayer mód
- ✨ Animációk fejlesztése
- 📱 Mobil optimalizálás
- 🃏 Több játék
- 📌 Összefoglalás
- ⚛️ React alapú frontend
- 🎮 több játék kezelése
- 🎨 testreszabható UI
- 🔗 GitHub

---

# 👉 Frontend repository
- https://github.com/Sajtos-Istvan-416/magyar_kartya_frontend

---

# 👉 Backend repository
- https://github.com/magulyaaa/MAGYAR_KARTYA_BACKEND

---

# ☺ Oldal
- https://magyarkartya.netlify.app/menu
