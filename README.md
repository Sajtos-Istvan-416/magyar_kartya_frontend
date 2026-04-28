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
- pontszámok megjelenítése, de egyfajta ranglistaként is szolgál

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

#### 🃏 Kártya húzás

- hit()

#### ✋ Megállás

- stand()

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

# ☺ Oldal
- https://magyarkartya.netlify.app/menu
