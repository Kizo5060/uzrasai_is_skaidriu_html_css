---
title: "07. CSS Flexbox – išsamus konspektas"
tags:
  - html
  - css
  - flexbox
  - frontend
  - mokslai
aliases:
  - Flexbox
  - CSS Flex
---





## Turinys

- [[#1. Prieš pradedant – HTML ir CSS esmė]]
- [[#2. Plotis – width, min-width, max-width]]
- [[#3. Kas yra Flexbox?]]
- [[#4. Kaip įjungti Flexbox?]]
- [[#5. Pagrindinė ir skersinė ašys]]
- [[#6. Numatytosios Flexbox reikšmės]]
- [[#7. Flex konteinerio savybės]]
- [[#8. Atskiro Flex elemento savybės]]
- [[#9. Pilni pavyzdžiai su HTML ir CSS]]
- [[#10. Prisitaikymas prie telefono ekrano]]
- [[#11. Trys praktinės užduotys iš skaidrių]]
- [[#12. Dažniausios klaidos]]
- [[#13. Trumpa atmintinė]]
- [[#14. Pasitikrink žinias]]
- [[#15. Naudingi šaltiniai]]

---

## 1. Prieš pradedant – HTML ir CSS esmė

**HTML** nusako, kokie elementai yra puslapyje: antraštės, tekstai, mygtukai, nuotraukos, nuorodos.

**CSS** nusako, kaip tie elementai atrodo ir kur jie stovi: spalvas, dydį, tarpus, išdėstymą.

Pavyzdžiui, HTML:

```html
<div class="container">
    <div class="box">Pirmas</div>
    <div class="box">Antras</div>
    <div class="box">Trečias</div>
</div>
```

CSS:

```css
.container {
    display: flex;
    gap: 1rem;
}

.box {
    padding: 1rem;
    background-color: lightblue;
}
```

**Kas čia vyksta, eilutė po eilutės?**

1. `<div class="container">` – išorinis elementas, arba **tėvinis konteineris**.
2. Trys `<div class="box">` – **tiesioginiai vaikiniai elementai**, esantys konteinerio viduje.
3. `.container` CSS faile reiškia: „surask visus elementus, turinčius klasę `container`“.
4. `display: flex;` – įjungia Flexbox tame konteineryje.
5. `gap: 1rem;` – palieka tarpus **tarp** jo vaikinių elementų.
6. `.box` – stilius visoms trims dėžutėms.
7. `padding: 1rem;` – vidinis tarpas tarp dėžutės krašto ir jos teksto.
8. `background-color: lightblue;` – šviesiai mėlyna dėžutės fono spalva.

**Rezultatas:** trys dėžutės išsidėsto vienoje eilėje (jei užtenka vietos), tarp jų yra tarpai.

### Ką reiškia `rem`?

`rem` – matavimo vienetas pagal šakninio (`html`) elemento šrifto dydį. Jei numatytasis dydis `16px`, tada:

| Reikšmė | Atitinka esant 16px šakniniam šriftui |
|---|---|
| `0.5rem` | 8px |
| `1rem` | 16px |
| `1.5rem` | 24px |
| `2rem` | 32px |

> [!tip] Esmė
> **Flexbox rašome ant tėvinio elemento**, kai norime išdėlioti jo tiesioginius vaikus. Atskirų vaikų augimo, mažėjimo ir eiliškumo savybes rašome **ant pačių vaikų**.

---

## 2. Plotis – `width`, `min-width`, `max-width`

*Skaidrė: PDF 3 puslapis.*

Prieš Flexbox mokomės kontroliuoti elemento plotį.

### `width` – pageidaujamas plotis

```css
.box {
    width: 20rem;
}
```

Elementui nustatomas `20rem` plotis. Tačiau Flexbox aplinkoje elementas **gali susitraukti**, jei to reikia ir jei leidžia `flex-shrink` bei kiti apribojimai. Todėl `width` ne visada reiškia, kad plotis bus visiškai nekintamas.

### `min-width` – mažiausias leistinas plotis

```css
.box {
    min-width: 10rem;
}
```

Dėžutė nebus siauresnė nei `10rem`, net jei aplink trūksta vietos. Tuomet turinys gali netilpti arba atsirasti horizontalus slinkimas.

### `max-width` – didžiausias leistinas plotis

```css
.box {
    width: 100%;
    max-width: 60rem;
}
```

Elementas bandys užimti 100% **tėvinio elemento turinio pločio**, bet neviršys `60rem`.

### Visos trys kartu

```css
.card {
    width: 80%;
    min-width: 15rem;
    max-width: 35rem;
}
```

- `width: 80%` – norimas plotis: 80% tėvinio elemento pločio.
- `min-width: 15rem` – neleisti susiaurėti mažiau nei 15rem.
- `max-width: 35rem` – neleisti išsiplėsti daugiau nei 35rem.

> [!warning] Kas, jei telefonas siauresnis nei `min-width`?
> Jei vaikiniam elementui uždėsi per didelį `min-width`, jis gali išlįsti už telefono ekrano ribų. Dažnai tinka `width: 100%; max-width: ...`, o kai kuriuose Flexbox maketuose vaikams praverčia `min-width: 0;`.

### `box-sizing: border-box`

Šis papildymas nėra atskira PDF tema, bet labai padeda praktiškai:

```css
* {
    box-sizing: border-box;
}
```

Su `border-box` nurodytas `width` apima ir **padding**, ir **border**. Be jo galutinis dėžutės išorinis plotis gali būti didesnis už nurodytą `width`.

---

## 3. Kas yra Flexbox?

*Skaidrė: PDF 4 puslapis.*

**Flexbox** (*Flexible Box Layout*) – CSS elementų išdėstymo sistema. Ją naudodami galime:

- sudėti elementus **horizontaliai** (viena eile);
- sudėti elementus **vertikaliai** (vienu stulpeliu);
- išlygiuoti juos į kairę, dešinę, centrą, viršų ar apačią;
- tvarkingai paskirstyti laisvą vietą;
- nustatyti, kurie elementai auga arba traukiasi.

### Ką reiškia „vienmatis“?

Flexbox daugiausia dirba su **viena pagrindine kryptimi vienu metu** – eilute (`row`) arba stulpeliu (`column`). Jei reikia tikro dviejų matmenų išdėstymo, kur savarankiškai valdome tiek eiles, tiek stulpelius, dažnai tinkamesnis **CSS Grid**.

**Paprastas palyginimas:**

- **Flexbox**: „Sudėliok šiuos tris mygtukus vienoje eilėje ir padėk į centrą“.
- **Grid**: „Padaryk kortelių lentelę iš trijų stulpelių ir kelių eilių“.

---

## 4. Kaip įjungti Flexbox?

*Skaidrė: PDF 5 puslapis.*

```css
.container {
    display: flex;
}
```

**`display: flex` rašome ant tėvo.** Nuo to momento jo **tiesioginiai vaikai** tampa *flex items*.

```html
<div class="container">
    <p>Pirmas vaikas</p>
    <p>Antras vaikas</p>
    <section>
        <p>Anūkas (ne tiesioginis container vaikas)</p>
    </section>
</div>
```

`container` Flexbox taisyklės tiesiogiai išdėsto du `<p>` ir vieną `<section>`. Vidinis `<section>` turimas `<p>` **netampa** išorinio konteinerio tiesioginiu flex elementu.

### `display: flex` ir `display: inline-flex`

```css
.a {
    display: flex;
}

.b {
    display: inline-flex;
}
```

- `flex` – išoriškai elementas elgiasi kaip blokinis flex konteineris; įprastai užima galimą eilutės plotį.
- `inline-flex` – išoriškai elgiasi kaip eilutėje esantis elementas, kurio viduje vis tiek veikia Flexbox.

**Svarbu:** abiem atvejais viduje esantys tiesioginiai vaikai išdėstomi pagal Flexbox taisykles.

---

## 5. Pagrindinė ir skersinė ašys

*Skaidrės: PDF 5 ir 7 puslapiai. Tai viena SVARBIAUSIŲ temų.*

Flexbox turi dvi ašis:

1. **Main axis** – pagrindinė ašis, kuria dėliojami vaikai.
2. **Cross axis** – skersinė ašis, statmena pagrindinei.

### Kai `flex-direction: row`

```text
                  MAIN AXIS →
┌────────────────────────────────┐
│                                │
│  [ 1 ]    [ 2 ]    [ 3 ]      │  ↕ CROSS AXIS
│                                │
└────────────────────────────────┘
```

- `justify-content` veikia **horizontaliai** (pagrindine ašimi).
- `align-items` veikia **vertikaliai** (skersine ašimi).

### Kai `flex-direction: column`

```text
                 MAIN AXIS ↓
┌────────────────────────────┐
│          [ 1 ]             │
│          [ 2 ]             │  ←→ CROSS AXIS
│          [ 3 ]             │
└────────────────────────────┘
```

- `justify-content` veikia **vertikaliai**.
- `align-items` veikia **horizontaliai**.

> [!danger] Dažniausia mokinių klaida
> **`justify-content` nereiškia „visada horizontaliai“, o `align-items` nereiškia „visada vertikaliai“.** Kryptis priklauso nuo `flex-direction`.

### Labai lengvas būdas atsiminti

**`justify-content` = išdėstymas ta kryptimi, kuria eina elementai.**

**`align-items` = lygiavimas statmenai tai krypčiai.**

---

## 6. Numatytosios Flexbox reikšmės

*Skaidrė: PDF 6 puslapis.*

Kai parašai tik:

```css
.container {
    display: flex;
}
```

Naršyklė jau turi numatytąsias savybių reikšmes:

```css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}
```

| Savybė | Numatytoji reikšmė | Ką reiškia? |
|---|---|---|
| `flex-direction` | `row` | Elementai eina eile |
| `flex-wrap` | `nowrap` | Nauja eilė automatiškai nesudaroma |
| `justify-content` | `flex-start` | Pradeda dėlioti nuo pagrindinės ašies pradžios |
| `align-items` | `stretch` | Elementai, jei tinkama, ištempiami skersine kryptimi |
| `align-content` | `stretch` | Ištempia flex eiles/stulpelius, kai jų yra kelios ir likę papildomos vietos |

**Pastaba:** `align-content` vienoje eilėje su `nowrap` praktiškai nepadės centruoti vaikų. Jis aktualus, kai yra **kelios flex eilės/stulpeliai** ir laisvos vietos skersine kryptimi.

---

## 7. Flex konteinerio savybės

*Skaidrė: PDF 8 puslapis. Šios savybės paprastai rašomos ant `.container`.*

### 7.1. `flex-direction` – kuria kryptimi eina elementai

```css
.container {
    display: flex;
    flex-direction: row;
}
```

Galimos reikšmės:

| Reikšmė | Paaiškinimas |
|---|---|
| `row` | Eilutė pagrindine rašymo kryptimi |
| `row-reverse` | Eilutė priešinga kryptimi |
| `column` | Stulpelis nuo viršaus žemyn, jei įprasta horizontali rašymo sistema |
| `column-reverse` | Stulpelis atvirkščia kryptimi |

Pavyzdys:

```css
.container {
    display: flex;
    flex-direction: column;
}
```

Išdėstymas:

```text
[Pirmas]
[Antras]
[Trečias]
```

**Svarbu:** `row-reverse` ar `column-reverse` tik pakeičia **vizualų išdėstymą**, bet ne HTML skaitymo ir klaviatūros fokusavimo tvarką. Neperversk svarbios navigacijos vien tik šia CSS savybe.

### 7.2. `justify-content` – išdėstymas per PAGRINDINĘ ašį

```css
.container {
    display: flex;
    justify-content: center;
}
```

| Reikšmė | Kas nutinka? |
|---|---|
| `flex-start` | Prie pagrindinės ašies pradžios |
| `flex-end` | Prie pagrindinės ašies pabaigos |
| `center` | Centre |
| `space-between` | Pirmas ir paskutinis kraštuose, likęs tarpas tarp elementų |
| `space-around` | Aplink kiekvieną elementą yra paskirstytas tarpas; kraštuose mažiau nei tarp dviejų |
| `space-evenly` | Vienodi tarpai tarp elementų ir abiejuose kraštuose |

**Kaip įsiminti pagal schemą** (kai `row`):

```text
flex-start:    [1][2][3]................
flex-end:      ................[1][2][3]
center:        ........[1][2][3]........
space-between: [1]........[2]........[3]
space-around:  ..[1]....[2]....[3]..
space-evenly:  ...[1]...[2]...[3]...
```

Čia taškai tik vaizduoja **laisvą tarpą**, ne tikslų pikselių skaičių.

### 7.3. `align-items` – lygiavimas per SKERSINĘ ašį

```css
.container {
    display: flex;
    align-items: center;
}
```

| Reikšmė | Ką daro? |
|---|---|
| `stretch` | Ištempia vaikus skersine kryptimi, kai tam leidžia dydžių taisyklės |
| `flex-start` | Prie skersinės ašies pradžios |
| `flex-end` | Prie skersinės ašies pabaigos |
| `center` | Centre per skersinę ašį |

**Pavyzdys: vertikalus centravimas vienoje eilėje**

```css
.container {
    display: flex;
    height: 15rem;
    align-items: center;
}
```

Elementai centruojami per konteinerio aukštį, **jei `flex-direction: row`**.

### 7.4. Centravimas abiem kryptimis

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20rem;
}
```

**Kodėl abi savybės?** Viena centruoja pagal pagrindinę ašį, kita pagal skersinę. `min-height` užtikrina, kad būtų vertikalios erdvės centravimui pamatyti.

### 7.5. `flex-wrap` – ar elementai gali persikelti

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

| Reikšmė | Ką daro? |
|---|---|
| `nowrap` | Elementai laikomi vienoje flex eilėje (jie gali trauktis arba išlįsti) |
| `wrap` | Kai trūksta vietos, elementai gali persikelti į naują eilę |
| `wrap-reverse` | Taip pat persikelia, bet eilių skersinė tvarka atvirkščia |

```text
nowrap:
[ 1 ][ 2 ][ 3 ][ 4 ]  → gali nebetilpti

wrap:
[ 1 ][ 2 ][ 3 ]
[ 4 ]
```

> [!note] Svarbu
> `wrap` negarantuoja, kad visi elementai būtinai persikels: tai priklauso nuo jų dydžių ir turimos vietos.

### 7.6. `align-content` – kelių eilių lygiavimas

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 25rem;
}
```

`align-content` paskirsto **visas flex eiles** per skersinę ašį. Skaidrėse pateikiamos reikšmės: `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

**Skirtumas nuo `align-items`:**

- `align-items` – kaip **elementai** lygiuojasi savo eilėje.
- `align-content` – kaip **kelios eilės** išdėstomos per viso konteinerio skersinę ašį.

### 7.7. `flex-flow` – trumpinys

Užuot rašęs:

```css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

Gali rašyti:

```css
.container {
    display: flex;
    flex-flow: row wrap;
}
```

Tai atitinka tas pačias dvi savybes.

### 7.8. `gap` – tarpai tarp elementų (papildomas paaiškinimas)

Nors PDF savybių sąraše `gap` atskirai neišskirtas, kasdienėje praktikoje tai vienas naudingiausių Flexbox įrankių.

```css
.container {
    display: flex;
    gap: 1rem;
}
```

`gap` sukuria tarpą tarp flex elementų, **ne tarp tėvo krašto ir elemento**. Tarpui nuo krašto naudok `padding`.

```css
.container {
    display: flex;
    gap: 1rem;
    padding: 2rem;
}
```

- `gap` – tarp vaikų.
- `padding` – tarp konteinerio vidinio krašto ir jo turinio.
- `margin` – išorinis tarpas aplink patį elementą.

Taip pat yra `row-gap` ir `column-gap`.

---

## 8. Atskiro Flex elemento savybės

*Skaidrė: PDF 9 puslapis. Šios savybės rašomos ant `.box` (vaiko), ne ant `.container`.*

### 8.1. `order` – vizualus eiliškumas

```css
.first {
    order: 2;
}

.second {
    order: 1;
}
```

Tas elementas, kurio `order` mažesnis, vizualiai pasirodo pirmiau. Pagal nutylėjimą visų `order: 0`.

**Pavyzdys:** jei HTML elementai A, B, C, bet A turi `order: 2`, B turi `order: 1`, C turi `order: 0`, jų vizuali tvarka bus C, B, A.

> [!warning] Prieinamumas
> `order` nekeičia tikrosios HTML skaitymo ir klaviatūros fokusavimo tvarkos. Svarbią loginę tvarką geriau pataisyti pačiame HTML.

### 8.2. `flex-grow` – kiek auga, kai laisvos vietos yra

```css
.box-a {
    flex-grow: 1;
}

.box-b {
    flex-grow: 2;
}
```

Jeigu yra likusios **laisvos vietos**, B gaus dvigubai didesnę tos papildomos vietos dalį nei A. **Tai nereiškia, kad galutinis B plotis visada dvigubai didesnis**: galutinis plotis priklauso ir nuo pradinių dydžių.

**Pavyzdys:** A ir B abu pradeda nuo 100px, o liko 300px laisvos vietos. A gauna 100px, B gauna 200px. Galutiniai pločiai būtų 200px ir 300px (supaprastintu atveju be kitų ribojimų).

### 8.3. `flex-shrink` – kiek susitraukia, kai trūksta vietos

```css
.box-a {
    flex-shrink: 1;
}

.box-b {
    flex-shrink: 0;
}
```

- A leidžiama trauktis.
- B su `flex-shrink: 0` netraukiamas dėl šios flex susitraukimo taisyklės.

**Atsargiai:** `flex-shrink` skaičiavimas atsižvelgia ne tik į nurodytą skaičių, bet ir į pradinį elemento dydį bei apribojimus. Pavyzdžiui, `2` ne visais atvejais reiškia „galutinis plotis bus perpus mažesnis“.

### 8.4. `flex-basis` – pradinis dydis pagrindine kryptimi

```css
.box {
    flex-basis: 15rem;
}
```

Tai bazinis dydis **pagrindinėje ašyje** prieš dalijant papildomą vietą ar apskaičiuojant traukimąsi.

- Kai `flex-direction: row`, dažniausiai kalbame apie pradinį **plotį**.
- Kai `flex-direction: column`, dažniausiai apie pradinį **aukštį**.
- `auto` – pradinį dydį nustato pagal dydžio savybes ir turinį.

### 8.5. `flex` – trumpinys iš trijų savybių

```css
.box {
    flex: 1 1 auto;
}
```

Eilės tvarka:

```text
flex: grow shrink basis;
       1     1    auto
```

Tas pats, kas:

```css
.box {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
```

**Numatytoji kiekvieno flex vaiko reikšmė** yra `flex: 0 1 auto;`, kaip nurodyta PDF.

Dažnai naudojama:

```css
.card {
    flex: 1;
}
```

Praktikoje `flex: 1` naudojama, kai norima, kad elementai proporcingai pasidalytų vietą; naršyklė paprastai išplečia tai į `1 1 0%`.

Arba:

```css
.card {
    flex: 1 1 15rem;
}
```

Kortelė pradeda nuo maždaug `15rem` pagrindinės krypties dydžio, bet prireikus gali augti ir trauktis.

### 8.6. `align-self` – vieno elemento individualus lygiavimas

```css
.container {
    display: flex;
    align-items: center;
    height: 15rem;
}

.special {
    align-self: flex-end;
}
```

Dauguma vaikų centruoti pagal skersinę ašį, o `.special` lygiuojasi prie jos pabaigos.

> [!tip] Svarbiausias skirtumas
> `align-items` – taisyklė **visiems vaikams** (tėvo CSS). `align-self` – išimtis **vienam vaikui** (to vaiko CSS).

---

## 9. Pilni pavyzdžiai su HTML ir CSS

### Pavyzdys A – trys kortelės eilutėje

Sukurk du failus tame pačiame aplanke: `index.html` ir `style.css`.

**index.html**

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox pavyzdys</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="cards">
        <article class="card">Pirma kortelė</article>
        <article class="card">Antra kortelė</article>
        <article class="card">Trečia kortelė</article>
    </main>
</body>
</html>
```

**style.css**

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.cards {
    display: flex;
    gap: 1rem;
    padding: 1rem;
}

.card {
    flex: 1;
    padding: 2rem;
    background-color: lightblue;
}
```

**Paaiškinimas:**

- `<main>` – pagrindinis puslapio turinys.
- `<article>` – savarankiškas turinio vienetas, pvz., kortelė; jei turinys nėra savarankiškas, tiktų ir `<div>`.
- `.cards { display: flex; }` – kortelės eina eilėje.
- `gap: 1rem` – tarpai tarp kortelių.
- `.card { flex: 1; }` – kortelės dalijasi laisva vieta.
- `padding` – kad tekstas nesiliestų prie krašto.

### Pavyzdys B – horizontaliai ir vertikaliai centruotas tekstas

**HTML**

```html
<div class="hero">
    <h1>Sveikas atvykęs</h1>
</div>
```

**CSS**

```css
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20rem;
    background-color: lightgray;
}
```

**Rezultatas:** antraštė atsiranda pilko stačiakampio centre. Tam nereikia nei `position: absolute`, nei rankinio pastūmimo su `margin-left`.

### Pavyzdys C – antraštė su logotipu kairėje ir nuorodomis dešinėje

**HTML**

```html
<header class="header">
    <nav class="navbar" aria-label="Pagrindinė navigacija">
        <a class="logo" href="#home">Mano puslapis</a>
        <div class="links">
            <a href="#home">Pradžia</a>
            <a href="#about">Apie</a>
            <a href="#contact">Kontaktai</a>
        </div>
    </nav>
</header>
```

**CSS**

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #18394a;
}

.logo,
.links a {
    color: white;
    text-decoration: none;
}

.links {
    display: flex;
    gap: 1.5rem;
}
```

**Kas labai svarbu?**

- `.navbar` turi **du tiesioginius vaikus**: `.logo` ir `.links`.
- `justify-content: space-between` pastumia vieną grupę į kairę, kitą – į dešinę.
- `.links` pats tampa **antru Flexbox konteineriu**, nes jame irgi yra `display: flex`.
- `align-items: center` sulygiuoja logotipą ir nuorodų grupę vertikaliai.

---

## 10. Prisitaikymas prie telefono ekrano

PDF 11–12 puslapiuose parodyti maketai, kuriuos reikia pritaikyti **skirtingiems ekranų pločiams**. Papildomai paaiškinu, kaip tai daroma.

### `@media` – taisyklė pagal ekraną

```css
.cards {
    display: flex;
    gap: 1rem;
}

.card {
    flex: 1;
}

@media (max-width: 40rem) {
    .cards {
        flex-direction: column;
    }
}
```

**Išverskime į žmonių kalbą:**

1. Įprastai kortelės yra eilėje.
2. Jei ekrano peržiūros sritis yra iki `40rem` pločio, įsijungia `@media` taisyklė.
3. `.cards` pakeičia kryptį į `column`.
4. Kortelės atsistoja **viena po kita**.

### Kitas būdas – savaime persirikiuojančios kortelės

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 15rem;
    min-width: 0;
}
```

- `wrap` leidžia kortelėms keliauti į kitą eilutę.
- `flex-basis: 15rem` nustato norimą pradinį plotį.
- `flex-grow: 1` leidžia kortelėms užimti likusią vietą.
- `min-width: 0` gali padėti su ilgu turiniu, kuris kitaip verstų flex elementą išsiplėsti.

> [!note] Kurį metodą pasirinkti?
> Jei nori **tiksliai nurodyti**, kada pasikeis maketas, naudok `@media`. Jei nori, kad kortelės persirikiuotų pagal turimą vietą, dažnai patogus `flex-wrap: wrap`.

---

## 11. Trys praktinės užduotys iš skaidrių

> [!info] Svarbu
> Toliau pateikti sprendimo **pavyzdžiai, sukurti mokymuisi**. Jie nėra dėstytojo pateikti oficialūs sprendimai. Originalių maketų išvaizdą gali palyginti su PDF 11–13 puslapiais.

### Praktika 1 (PDF 11 p.) – spalvotų blokų maketas

**Užduoties esmė iš skaidrės:** sukurti tinklalapio maketą su Flexbox ir pritaikyti jį keliems ekrano dydžiams. Paveikslėlyje matyti viršutinė juosta „Antraštė“, spalvotų blokų eilė, „Šoninis“ skyrius, dar viena spalvotų blokų eilė ir „Poraštė“.

**Paprastas mokomasis HTML**

```html
<header class="page-header">Antraštė</header>

<main>
    <section class="row-one">
        <div class="block one">Blokas 1</div>
        <div class="block two">Blokas 2</div>
        <div class="block three">Blokas 3</div>
        <div class="block four">Blokas 4</div>
    </section>

    <aside class="sidebar">Šoninis</aside>

    <section class="row-two">
        <div class="block two">Blokas 1</div>
        <div class="block three">Blokas 2</div>
        <div class="block four">Blokas 3</div>
    </section>
</main>

<footer class="page-footer">Poraštė</footer>
```

**CSS**

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.page-header,
.sidebar,
.page-footer {
    padding: 2rem;
    text-align: center;
    color: white;
    background-color: #06445c;
}

.row-one,
.row-two {
    display: flex;
}

.block {
    flex: 1;
    min-height: 8rem;
    padding: 1rem;
}

.one { background-color: #6d355b; }
.two { background-color: #fb6b85; }
.three { background-color: #ffad59; }
.four { background-color: #e9f2fb; }

@media (max-width: 40rem) {
    .row-one,
    .row-two {
        flex-direction: column;
    }
}
```

**Ką turėtum gebėti paaiškinti dėstytojui:**

- `row-one` ir `row-two` yra **Flexbox konteineriai**.
- Kiekvienas `.block` yra **Flexbox vaikas**.
- `flex: 1` leidžia blokams paskirstyti vietą.
- `@media` sumažėjus ekranui pakeičia blokus į stulpelį.
- Antraštė ir poraštė nebūtinai turi `display: flex`, nes jose šiuo atveju yra tik tekstas.

### Praktika 2 (PDF 12 p.) – nuotraukų galerija

**Užduoties esmė iš skaidrės:** maketas su viršuje esančiu tekstu ir keturiomis nuotraukomis, pritaikytas keliems ekranams.

**HTML**

```html
<main class="gallery-page">
    <h1>Some Of Our Work</h1>
    <p>Mūsų nuotraukų galerija</p>

    <section class="gallery">
        <img src="img/photo1.jpg" alt="Pirmas gamtos vaizdas">
        <img src="img/photo2.jpg" alt="Antras gamtos vaizdas">
        <img src="img/photo3.jpg" alt="Trečias gamtos vaizdas">
        <img src="img/photo4.jpg" alt="Ketvirtas gamtos vaizdas">
    </section>
</main>
```

**CSS**

```css
* {
    box-sizing: border-box;
}

.gallery-page {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
}

.gallery img {
    width: calc(50% - 0.5rem);
    height: 13rem;
    object-fit: cover;
}

@media (max-width: 40rem) {
    .gallery img {
        width: 100%;
    }
}
```

**Kaip tai veikia:**

- `.gallery` yra tėvas su `display: flex`.
- `flex-wrap: wrap` leidžia antrai porai nuotraukų pereiti žemyn.
- `width: calc(50% - 0.5rem)` – kiekviena nuotrauka užima maždaug pusę eilės, atėmus dalį tarpo.
- `object-fit: cover` – nuotrauka užpildo nustatytą lauką, gali būti apkerpama, bet neištampoma.
- `@media` – siaurame ekrane viena nuotrauka užima visą eilę.
- `src="img/photo1.jpg"` reiškia, kad turi turėti tikrus paveikslėlius aplanko `img` viduje, būtent tokiais pavadinimais.

### Praktika 3 (PDF 13 p.) – navigacijos juosta ant seno puslapio

**Užduoties esmė iš skaidrės:** papildyti ankstesnės „06-CSS“ temos 6 užduotį, sukurti `<nav>` juostą, logotipą ir nuorodas išdėlioti naudojant Flexbox.

**HTML**

```html
<header class="site-header">
    <nav class="site-nav" aria-label="Pagrindinė navigacija">
        <a class="site-logo" href="#home">Website Logo</a>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
</header>

<main id="home" class="hero">
    <h1>Responsive Page</h1>
    <p>Mano puslapio aprašymas</p>
    <a class="hero-button" href="#about">Learn more</a>
</main>
```

**CSS**

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.site-header {
    background-color: #173748;
}

.site-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.site-logo,
.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 1rem;
}

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 25rem;
    padding: 2rem;
    text-align: center;
    background-image: url("img/mountains.jpg");
    background-size: cover;
    background-position: center;
}

.hero-button {
    padding: 0.75rem 1.5rem;
    background-color: gold;
    color: black;
    text-decoration: none;
}

@media (max-width: 40rem) {
    .site-nav {
        flex-direction: column;
        gap: 1rem;
    }
}
```

**Kaip paaiškinti:**

1. `<nav>` semantiškai žymi puslapio navigaciją.
2. `display: flex` leidžia išdėlioti logotipą ir nuorodų grupę vienoje eilėje.
3. `justify-content: space-between` atskiria logotipą ir nuorodas į priešingus kraštus.
4. `align-items: center` sulygiuoja jų aukštį.
5. `.nav-links` su `display: flex` išdėsto pačias nuorodas eilėje.
6. `.hero` su `flex-direction: column` išdėsto antraštę, tekstą ir mygtuką vienas po kitu.
7. Telefone `@media` navigaciją paverčia stulpeliu.
8. `img/mountains.jpg` – tavo paties turimas foninis paveikslėlis.

---

## 12. Dažniausios klaidos

### Klaida 1 – `display: flex` įrašomas ant vaiko, nors norime išdėstyti visus vaikus

**Neteisinga, jei norime išdėstyti tris `.box`:**

```css
.box {
    display: flex;
}
```

**Teisinga:**

```css
.container {
    display: flex;
}
```

### Klaida 2 – `justify-content` neveikia, nes nėra laisvos vietos

Jei visi elementai užima visą pagrindinės ašies vietą, `space-between` nebeturi ką paskirstyti. Pirmiausia patikrink vaikų plotį, `flex`, `gap` ir konteinerio dydį.

### Klaida 3 – `align-items: center` nesukelia laukto vertikalaus centravimo

Dažnai konteinerio aukštis lygus turinio aukščiui, todėl nėra papildomos erdvės. Pabandyk `min-height: 15rem`, kai to reikia pagal dizainą.

### Klaida 4 – sumaišomos ašys

Jei `flex-direction: column`, `justify-content` veikia iš viršaus žemyn, o `align-items` – skersai. Visada pirmiausia paklausk: „Kokia mano pagrindinė ašis?“

### Klaida 5 – `align-content` naudojamas vienai eilutei

Vienos eilės elementams išlygiuoti naudok `align-items`. `align-content` skirtas flex eilių išdėstymui, kai jų yra kelios.

### Klaida 6 – `flex-wrap: wrap` pamirštas

Jei nori, kad kortelės persikeltų į kitą eilę, įrašyk `flex-wrap: wrap`. Kitaip jos bando likti toje pačioje flex eilėje.

### Klaida 7 – dideli `min-width` laužo mobilų maketą

Net gražus Flexbox puslapis gali netilpti telefone, jei kiekviena kortelė privalo būti bent `30rem` pločio.

### Klaida 8 – naudojami rankiniai tarpai vietoj Flexbox

Jei nori meniu nuorodas paskirstyti, nenaudok dešimčių `&nbsp;`, nereikalingų `<br>` ar atsitiktinio `margin-left`. Naudok `display: flex`, `gap`, `justify-content`.

### Klaida 9 – neteisingas CSS klasės selektorius

```html
<div class="box">Tekstas</div>
```

Taisyklingas CSS klasės selektorius:

```css
.box {
    color: red;
}
```

Taškas `.` reiškia **klasę**. Be taško `box` reikštų HTML elemento pavadinimą, kurio šiame pavyzdyje nėra.

### Klaida 10 – neprijungtas CSS failas

HTML `<head>` turi būti:

```html
<link rel="stylesheet" href="style.css">
```

Ir failas `style.css` turi būti teisingoje vietoje pagal `href` kelią.

---

## 13. Trumpa atmintinė

| Noriu padaryti... | Naudoju... | Kam rašau? |
|---|---|---|
| Įjungti Flexbox | `display: flex;` | Tėvui |
| Sudėti į eilę | `flex-direction: row;` | Tėvui |
| Sudėti į stulpelį | `flex-direction: column;` | Tėvui |
| Centruoti pagrindine ašimi | `justify-content: center;` | Tėvui |
| Centruoti skersine ašimi | `align-items: center;` | Tėvui |
| Padaryti tarpus tarp vaikų | `gap: 1rem;` | Tėvui |
| Leisti pereiti į kitą eilę | `flex-wrap: wrap;` | Tėvui |
| Paskirstyti kelias flex eiles | `align-content: space-between;` | Tėvui |
| Leisti vaikui augti | `flex-grow: 1;` | Vaikui |
| Uždrausti vaikui trauktis | `flex-shrink: 0;` | Vaikui |
| Duoti pradinį bazinį dydį | `flex-basis: 15rem;` | Vaikui |
| Pakeisti vizualią tvarką | `order: 2;` | Vaikui |
| Vieną vaiką lygiuoti kitaip | `align-self: flex-end;` | Vaikui |
| Nustatyti max plotį | `max-width: 60rem;` | Elementui |
| Reaguoti į ekraną | `@media (max-width: 40rem)` | CSS taisyklių blokui |

### Mini formulė, kurią verta išmokti mintinai

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
```

Ji sukuria **flex išdėstymą, centruoja abi ašis ir sudeda 1rem tarpus**. Atmink: matomas centravimo rezultatas priklauso nuo konteinerio dydžio ir vaikų užimamos vietos.

---

## 14. Pasitikrink žinias

Pirmiausia pabandyk atsakyti be užuominų.

1. Kur reikia rašyti `display: flex` – tėvui ar vaikui?
2. Ką reiškia `flex-direction: column`?
3. Kai kryptis `row`, kuri savybė centruoja **horizontaliai**?
4. Kai kryptis `column`, kuri savybė centruoja **horizontaliai**?
5. Kuo skiriasi `gap` ir `padding`?
6. Ką daro `flex-wrap: wrap`?
7. Kodėl `align-content` paprastai nepadeda vienoje eilėje?
8. Kur rašyti `flex-grow`?
9. Ką reiškia `flex: 1 1 15rem`?
10. Kuo skiriasi `align-items` ir `align-self`?
11. Kuo skiriasi `width`, `min-width`, `max-width`?
12. Kodėl reikia `@media`?
13. Kuri savybė padeda logotipą padėti kairėje, o nuorodų grupę – dešinėje?
14. Ar `order` pakeičia tikrą HTML elementų tvarką?
15. Kokį CSS parašytum, kad trys dėžutės būtų vienoje eilėje su `1rem` tarpu?

<details>
<summary><strong>Atsakymai – atsiversk tik pasitikrinęs</strong></summary>

1. Ant tėvo.
2. Vaikai išdėstomi stulpeliu.
3. `justify-content: center`.
4. `align-items: center`.
5. `gap` yra tarp vaikų, `padding` – tarp elemento vidinio krašto ir jo turinio.
6. Leidžia persikelti į naują flex eilę, kai trūksta vietos.
7. Jis valdo kelių flex eilių išdėstymą per skersinę ašį.
8. Ant vaiko.
9. `grow: 1`, `shrink: 1`, `basis: 15rem`.
10. `align-items` yra bendra tėvo taisyklė vaikams, `align-self` nustato vieno vaiko išimtį.
11. Pageidaujamas, mažiausias ir didžiausias leistinas plotis.
12. Kad pagal ekrano / peržiūros srities dydį būtų galima keisti stilius.
13. `justify-content: space-between` ant juos apimančio flex tėvo.
14. Ne, tik vizualią flex tvarką.
15. `.container { display: flex; gap: 1rem; }`.

</details>

### Mini praktika – be kopijavimo

- [ ] Sukurk `index.html` ir `style.css`.
- [ ] Padaryk konteinerį su 3 dėžutėmis.
- [ ] Sudėk dėžutes į eilę.
- [ ] Padaryk `1rem` tarpą.
- [ ] Visas dėžutes centruok vertikaliai `15rem` aukščio konteineryje.
- [ ] Pakeisk kryptį į `column` ir stebėk, kaip keičiasi ašys.
- [ ] Sudėk logotipą kairėje, nuorodas dešinėje.
- [ ] Pridėk taisyklę, kad mažame ekrane meniu išsidėstytų stulpeliu.

---

## 15. Naudingi šaltiniai

*PDF 10 ir 14 puslapiai pateikia mokymosi žaidimą ir papildomus šaltinius.*

- [Flexbox Froggy](https://flexboxfroggy.com/) – mokomasis žaidimas, kuriame savybes treniruojiesi dėliodamas varlytes.
- [A Complete Guide to Flexbox – CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – išsamus iliustruotas Flexbox vadovas.
- [Flexbox.help](https://flexbox.help/) – interaktyvus Flexbox savybių bandymas.
- [MDN – Basic concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) – papildomas paaiškinimas.

Skaidrėse taip pat minimas **CSS Flexbox kursas (vaizdo medžiaga)**, tačiau konkretaus patikrinamo URL pateiktame PDF tekste nėra, todėl čia jo neišgalvoju.

---

> [!success] Ką svarbiausia išsinešti iš visos temos?
> **1.** `display: flex` rašomas ant tėvo.  
> **2.** `flex-direction` nurodo pagrindinę kryptį.  
> **3.** `justify-content` tvarko elementus pagrindine ašimi.  
> **4.** `align-items` tvarko elementus skersine ašimi.  
> **5.** `gap` sudeda tarpus; `wrap` leidžia persikelti; `flex-grow`, `flex-shrink`, `flex-basis` valdo vaikų dydžius.  
> **6.** Kai maketas turi veikti telefone, svarstyk `flex-wrap` ir `@media`.
