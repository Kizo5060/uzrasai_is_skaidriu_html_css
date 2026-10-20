---
tags: [html-css, konspektas]
---

# CSS – šriftai, ikonėlės ir vertikalus lygiavimas

> [!info] Apie užrašus
> Struktūruoti mokymosi užrašai pagal pateiktą paskaitų medžiagą. Sąvokos paaiškintos su pavyzdžiais, kad būtų galima jas pritaikyti HTML ir CSS kode.

## CSS šriftai, ikonėlės ir vertikalus lygiavimas


## 1. `vertical-align` – kas tai?

**`vertical-align`** – savybė, kuri lygiuoja elementą vertikaliai **teksto eilutėje** arba **lentelės langelyje**.

Veikia su:
- `inline` (pvz., `span`, `img`);
- `inline-block`;
- `table-cell` (pvz., `td`, `th`).

**Nenaudok `vertical-align: middle` tikėdamasis, kad jis centruos įprastą `div` viso puslapio viduryje.** Tam dažniausiai naudojame `flex` arba `grid`.

### Kodėl paveikslėlis ir tekstas nevienodame aukštyje?

Kai keli `inline` / `inline-block` elementai sudėti į vieną eilutę, naršyklė juos dėlioja į eilutės dėžutę (*line box*). Skaidrėse (3–7) parodytas paveikslas, teksto blokas ir širdutės ikonėlė: pakeitus lygiavimą, jie pasislenka vienas kito atžvilgiu.

### Vertikalus lygiavimas: `baseline`, `top`, `middle`, `bottom`

| Reikšmė | Ką daro | Kaip atsiminti |
|---|---|---|
| `baseline` | Lygiuoja pagal teksto bazinę liniją | „Pagal raides“ |
| `top` | Lygiuoja pagal eilutės viršutinę ribą | „Prie viršaus“ |
| `middle` | Lygiuoja su bazinės linijos ir mažųjų raidžių aukščio vidurio atskaitos tašku | „Per teksto vidurį“ |
| `bottom` | Lygiuoja pagal eilutės apatinę ribą | „Prie apačios“ |

> [!note] Tikslumo pastaba
> Skaidrėje `middle` apibūdinta kaip lygiavimas pagal teksto vidurį. Tai naudingas supaprastinimas, bet tai **ne tas pats**, kas absoliutus vertikalus centravimas bloke.

### Pilnas pradedančiojo pavyzdys

**index.html**
```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <title>Vertikalus lygiavimas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="eilute">
    <img src="kate.jpg" alt="Katė" width="120">
    <span>Labas, čia tekstas!</span>
  </div>
</body>
</html>
```

**style.css**
```css
.eilute img {
  vertical-align: middle;
}

.eilute span {
  vertical-align: middle;
}
```

Abu elementai lygiuojami eilutėje. `kate.jpg` turi būti tame pačiame aplanke, arba reikia pataisyti `src` kelią.


- **Ką daro `vertical-align`?** – Lygiuoja elementus vertikaliai eilutėje arba lentelės langelyje.
- **Ar veikia ant įprasto `display: block`?** – Ne taip, kaip dažnai tikimasi; įprastam bloko centravimui naudok `flex` ar `grid`.
- **Ką reiškia `baseline`?** – Teksto atskaitos (bazinė) linija.
- **Kuo skiriasi `top` ir `bottom`?** – Vienas lygiuoja prie viršaus, kitas prie apačios.

## 2. Naudingos CSS savybės

### `align-content`

Skaidrėje aprašyta, kad jis gali lygiuoti turinį `flex`, `grid`, o naujesniame CSS Box Alignment modelyje – tam tikrus įprastus blokus, jei yra laisvos vietos.

```css
.container {
  height: 200px;
  display: grid;
  align-content: center;
}
```

**Rezultatas:** grid turinys perkeliamas į konteinerio vertikalų vidurį (jei yra vietos).

**Nepainioti:** `align-content` ir `align-items` nėra tas pats.

### `aspect-ratio`

```css
.foto {
  width: 300px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

**Rezultatas:** elemento plotis ir aukštis palaiko 16:9 proporciją, kai kiti dydžių apribojimai to neužgožia. `object-fit: cover` leidžia nuotraukai užpildyti dėžutę, prireikus ją apkerpant.

### `caret-color`

```css
input {
  caret-color: red;
}
```

Keičia **mirksinčio teksto įvedimo kursoriaus** spalvą – ne viso teksto!

### `accent-color`

```css
input {
  accent-color: rebeccapurple;
}
```

Gali pakeisti natyvių `checkbox`, `radio`, `range` ir `progress` valdiklių akcentinę spalvą (priklauso nuo naršyklės valdiklio).

### `filter`

```css
img {
  filter: brightness(120%) contrast(110%);
}
```

Pritaiko vaizdinius efektus. Skaidrėje minimi: `blur`, `brightness`, `contrast`, `drop-shadow`, `sepia`.

```css
img:hover {
  filter: grayscale(100%);
}
```

Nuotrauka užvedus pelę tampa pilkų atspalvių.

### `clamp()` – prisitaikantis šrifto dydis

```css
h1 {
  font-size: clamp(16px, 3vw, 40px);
}
```

| Dalis | Reikšmė |
|---|---|
| `16px` | mažiausias leidžiamas dydis |
| `3vw` | norimas dydis pagal naršyklės lango plotį |
| `40px` | didžiausias leidžiamas dydis |

**`vw`** reiškia procentinę naršyklės matomos srities pločio dalį: `1vw` = 1% pločio.

> „`clamp()` leidžia dydžiui augti ir mažėti pagal ekraną, bet neleidžia išeiti už nustatyto minimumo ir maksimumo.“

## 3. Šriftų šeimos – `font-family`

**Šrifto šeima** nurodo, kokiu raidžių stiliumi bus rodomas tekstas.

| Šeima | Kaip atrodo? | Kur naudoti? |
|---|---|---|
| `serif` | Raidės su mažomis „uodegėlėmis“ | Klasikinėms antraštėms, spaudai |
| `sans-serif` | Be uodegėlių | Daugeliui interneto svetainių |
| `monospace` | Kiekvienas simbolis vienodo pločio | Programavimo kodui |
| `cursive` | Primena ranka rašytą tekstą | Dekoracijoms |
| `fantasy` | Neįprastas dekoratyvus stilius | Akcentams |
| `system-ui` | Sistemos vartotojo sąsajos šriftas | Natūraliai sistemos išvaizdai |
| `emoji` | Sistemos emoji šriftai | Emoji |
| `math` | Matematiniai simboliai | Formulėms |
| `fangsong` | Kinų rašmenų tradicijų šriftų šeima | Rytų Azijos raštams |

**Pavyzdžiai skaidrėse:** Times New Roman / Georgia (`serif`), Arial / Helvetica (`sans-serif`), Courier New / Consolas (`monospace`).

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

Naršyklė išbandys `Arial`, tada `Helvetica`, o galiausiai pasirinks galimą `sans-serif` šriftą.

### Kuo skiriasi skirtingos OS?

Pagal skaidres numatytieji šriftai priklauso nuo naršyklės ir operacinės sistemos. Pvz., Windows ir macOS gali parinkti skirtingus `serif` / `sans-serif` / `monospace` šriftus. Todėl naudinga nurodyti šriftų grandinę arba įkelti žiniatinklio šriftą.


**Atsakymas:** „Naršyklė, operacinė sistema ir jos turimi šriftai.“

## 4. Google Fonts

**Google Fonts** – nemokama šriftų biblioteka. Gali naudoti šriftų storius, pasvirimus, kalbų simbolių rinkinius ir kintamuosius šriftus; skaidrėse aptariamos ir Google ikonėlės.

**Svetainė:** https://fonts.google.com/

### Žingsniai pagal skaidres

1. Atsidaryk Google Fonts ir išsirink šriftą.
2. Paspausk **Get font**.
3. Pasirinktų šriftų lange – **Get embed code**.
4. Nukopijuok sugeneruotas `<link>` eilutes.
5. Įklijuok jas į `index.html` **`<head>`**, prieš savo `style.css` nuorodą.
6. CSS faile nurodyk `font-family`.

### Pilnas paprastas pavyzdys

**index.html**
```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <title>Mano šriftas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Sveiki!</h1>
  <p>Šitas tekstas naudoja Roboto šriftą.</p>
</body>
</html>
```

**style.css**
```css
body {
  font-family: "Roboto", Arial, sans-serif;
}

h1 {
  font-weight: 700;
}

p {
  font-weight: 400;
}
```

### Kodėl rašome kelis šriftus?

```css
font-family: "Roboto", Arial, sans-serif;
```

- `Roboto` – pageidaujamas šriftas.
- `Arial` – atsarginis, jei pirmasis nėra pasiekiamas.
- `sans-serif` – bendrinė galutinė kategorija.

> [!warning] Dažna klaida
> Šriftas neįkeltas į `<head>`, tačiau į CSS įrašytas jo pavadinimas. Jei kompiuteryje tokio šrifto nėra, bus naudojamas atsarginis.

### Jei nėra interneto?

Google Fonts išorinė nuoroda gali nesuveikti. Kad šriftas būtų patikimai prieinamas be interneto, reikia turėti leistiną šrifto failą projekte ir prijungti jį per `@font-face`. Tai **papildoma informacija**, ne tiesiogiai šių skaidrių užduotis.

## 5. Ikonėlės – Material Symbols

**Material Symbols** – ikonėlių rinkinys, kuriame ikonėlės dažnai pateikiamos kaip specialaus šrifto simboliai.

### Kaip įdėti ikonėlę? Pagal skaidres

1. Google Fonts pasirink **Icons**.
2. Atsidaryk **Developer guide**.
3. Rask **Static font with Google Fonts**.
4. Nukopijuok pateiktą `<link>` ir įdėk į `<head>`.
5. HTML įrašyk `span` su klase `material-symbols-outlined`.
6. `span` turinyje parašyk ikonėlės pavadinimą, pvz., `home` ar `close`.

### Veikiantis pavyzdys

**index.html**
```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <title>Ikonėlės</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Mano ikonėlės</h1>
  <span class="material-symbols-outlined">home</span>
  <span class="material-symbols-outlined">favorite</span>
  <span class="material-symbols-outlined">close</span>
</body>
</html>
```

**style.css**
```css
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-size: 48px;
  color: purple;
  line-height: 1;
  font-weight: normal;
  text-transform: none;
}
```

**Rezultatas:** namuko, širdies ir uždarymo ikonėlės, violetinės ir didesnės.

### Ką reiškia `.material-symbols-outlined` CSS?

- Taškas `.` prieš pavadinimą = **klasės selektorius**.
- Jis parenka elementus, turinčius `class="material-symbols-outlined"`.
- `font-size` gali keisti tokios ikonėlės dydį.
- `color` keičia tokios ikonėlės spalvą.

### Google bazinis CSS

Skaidrėje pateikta tipinė klasė su savybėmis:

```css
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  direction: ltr;
}
```

**Paaiškinimas eilutė po eilutės:**

| CSS | Kam reikalinga? |
|---|---|
| `font-family` | Naudoja būtent ikonėlių šriftą |
| `font-weight: normal` | Normalus simbolio storis |
| `font-style: normal` | Ne pasviręs |
| `font-size: 24px` | Numatytas dydis |
| `display: inline-block` | Leidžia tvarkyti kaip atskirą dėžutę teksto eilutėje |
| `line-height: 1` | Kompaktiškas eilutės aukštis |
| `letter-spacing: normal` | Normalus tarpas tarp raidžių/simbolių |
| `text-transform: none` | Nepaverčia ikonėlės pavadinimo didžiosiomis raidėmis |
| `white-space: nowrap` | Neperkelia į naują eilutę |
| `direction: ltr` | Kryptis iš kairės į dešinę |

> [!important] Kodėl kartais ikonėlė nepasikeičia?
> Pavyzdžiui, bendrinė taisyklė `p { text-transform: uppercase; }` arba šriftui skirta taisyklė gali sutrikdyti ikonėlės rodymą. Speciali klasė turi išlaikyti ikonėlių `font-family` ir `text-transform: none`. Perrašyti spalvą ir dydį galima, tačiau patikrink, kokia taisyklė laimi pagal CSS kaskadą.

### Dažnos klaidos

1. **Vietoje ikonėlės matai `home` tekstą.** Patikrink ikonėlių `<link>`, internetą ir klasės pavadinimą.
2. **Ikonėlė nepadidėja.** Patikrink `font-size`, klasę, ar CSS išsaugotas ir ar neužgožia kita taisyklė.
3. **Visame puslapyje nustačiau kitą šriftą ir ikonėlė dingo.** Ikonėlių klasei grąžink `font-family: "Material Symbols Outlined"`.
4. **Ikonėlė nesispalvina.** Keisk `color`, ne `background-color`, jei nori keisti patį simbolį.
5. **Ikonėlė netelpa su tekstu į eilutę.** Patikrink `vertical-align`, `line-height` ir `font-size`.

## 6. Kitos ikonėlės

Paskutinėje skaidrėje nurodyta **Font Awesome**: https://fontawesome.com/

Tai kitas būdas pridėti ikonėles į svetainę. **Pastaba:** šiose skaidrėse yra tik nuoroda, o ne išsami Font Awesome diegimo instrukcija.

## 7. Praktinė užduotis: šriftas + ikonos

Sukurk du failus – `index.html` ir `style.css`.

**index.html:**
```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <title>Mano puslapis</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Mano puslapis</h1>
  <p>Čia mokausi CSS šriftus ir ikonėles.</p>
  <span class="material-symbols-outlined">home</span>
  <span class="material-symbols-outlined">favorite</span>
</body>
</html>
```

**style.css:**
```css
body {
  font-family: "Roboto", Arial, sans-serif;
  margin: 20px;
}

h1 {
  font-size: clamp(24px, 4vw, 42px);
}

.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-size: 50px;
  color: steelblue;
  vertical-align: middle;
  text-transform: none;
}
```

**Patikrink:** pakeisk `50px` į `80px`; pakeisk `steelblue` į `red`; pažiūrėk, ar ikonėlės pasikeičia.

## 10. Atmintinė per 30 sekundžių

- `vertical-align` → inline elementų vertikalus lygiavimas.
- `font-family` → šrifto pasirinkimas; gale nurodyk bendrinę kategoriją.
- `Google Fonts` → įkeliame `<link>` į `<head>`, naudojame CSS.
- `Material Symbols` → `<span class="material-symbols-outlined">home</span>`.
- `font-size` → keičia ir šriftinės ikonėlės dydį.
- `color` → keičia ikonėlės spalvą.
- `text-transform: none` → svarbu, kad ikonėlių pavadinimai nebūtų keičiami.
- `aspect-ratio` → proporcija; `filter` → efektas; `clamp()` → dydžio ribos.

**Šaltinis:** TECHIN „Šriftai ir Ikonėlės.pdf“, 1–21 skaidrės. Techniniai paaiškinimai ir pavyzdžiai išplėsti mokymosi tikslu; kur įvardyta, pateiktos papildomos pastabos.
