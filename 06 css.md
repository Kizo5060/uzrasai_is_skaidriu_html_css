---
tags:
  - css
  - html
  - programavimas
  - pradedantiesiems
aliases:
  - CSS selektoriai ir pseudo klasės
---

# 02. CSS – atributai, pseudo klasės, pseudo elementai ir specifiškumas

> [!info] Apie konspektą
> Užrašai parengti pagal Edgaro Laptevo 34 skaidrių medžiagą „02. CSS“. Paaiškinimai ir papildomi pavyzdžiai pateikti kuo paprasčiau pradedantiesiems. **Pagrindinės paskaitos temos:** selektorių kategorijos, atributų selektoriai, pseudo klasės, pseudo elementai, specifiškumas, `!important`, praktika. **Pastaba:** nors turinyje minimas paveldėjimas, pateiktose skaidrėse jis atskirai nedėstomas, todėl žemiau yra trumpas papildomas paaiškinimas.

## Turinys
- [[#1. Kas yra CSS ir selektorius?]]
- [[#2. Selektorių rūšys]]
- [[#3. Atributų selektoriai]]
- [[#4. Pseudo klasės]]
- [[#5. Struktūrinės pseudo klasės]]
- [[#6. Loginės pseudo klasės]]
- [[#7. Pseudo elementai]]
- [[#8. CSS specifiškumas – kuri taisyklė laimi?]]
- [[#9. !important]]
- [[#10. Paveldėjimas (papildomai)]]
- [[#11. Praktinės paskaitos užduotys]]
- [[#12. Dažniausios klaidos]]
- [[#13. Atmintinė prieš atsiskaitymą]]
- [[#14. Pasitikrink save]]

---

## 1. Kas yra CSS ir selektorius?

**HTML** nurodo, *kas yra puslapyje* (antraštė, mygtukas, įvesties laukas). **CSS** nusako, *kaip tai atrodo* (spalvos, dydžiai, tarpai, rėmeliai).

```html
<h1>Sveiki!</h1>
<p>Mano pirmas puslapis.</p>
```

```css
h1 {
    color: blue;
    font-size: 30px;
}

p {
    color: gray;
}
```

**CSS taisyklės dalys:**

- `h1` – **selektorius**: kurį HTML elementą keičiame.
- `{ ... }` – taisyklių blokas.
- `color` – **savybė** (ką keičiame).
- `blue` – **reikšmė** (į ką keičiame).
- `;` – užbaigia CSS deklaraciją.

> [!tip] Kaip prijungti CSS prie HTML?
> Į `index.html` elemento `<head>` vidų įrašyk:
> ```html
> <link rel="stylesheet" href="style.css">
> ```
> Abu failai turi būti tame pačiame aplanke, jeigu naudojamas `href="style.css"`.

## 2. Selektorių rūšys

Paskaitos 3 skaidrėje išvardytos **6 grupės**: paprasti selektoriai, kombinacijos, selektorių grupės, atributų selektoriai, pseudo klasės ir pseudo elementai.

### 2.1. Paprasti selektoriai (trumpas pakartojimas)

| Selektorius | Ką reiškia | Pavyzdys |
|---|---|---|
| `p` | visi `<p>` elementai | `p { color: red; }` |
| `.tekstas` | visi elementai su `class="tekstas"` | `.tekstas { color: blue; }` |
| `#vardas` | elementas su `id="vardas"` | `#vardas { color: green; }` |
| `*` | visi elementai | `* { box-sizing: border-box; }` |

**Svarbu:** CSS klasė rašoma su tašku (`.tekstas`), o ID – su grotelių ženklu (`#vardas`). HTML viduje taškų ir grotelių nerašome: `class="tekstas"`, `id="vardas"`.

### 2.2. Kombinacijos (papildomas paaiškinimas)

```html
<div>
    <p>Pirma pastraipa</p>
    <section><p>Antra pastraipa</p></section>
</div>
<p>Trečia pastraipa</p>
```

| CSS | Paaiškinimas |
|---|---|
| `div p` | bet kuris `p`, esantis `div` viduje (net ir giliau) |
| `div > p` | tik tiesioginis `div` vaikas `p` |
| `h2 + p` | `p`, einantis iš karto po `h2` tame pačiame lygyje |
| `h2 ~ p` | visi po `h2` einantys `p` tame pačiame lygyje |

### 2.3. Selektorių grupė

```css
h1, h2, h3 {
    color: navy;
}
```

**Kablelis** reiškia, kad tos pačios taisyklės taikomos visoms išvardytoms grupėms. Tai **ne tas pats**, kas tarpas: `h1 h2` reiškia `h2` elementą `h1` viduje.

---

## 3. Atributų selektoriai

HTML atributas – tai informacija pačioje atidaromojoje žymėje, pvz., `type="email"`, `href="..."`, `required`.

**Atributų selektorius** leidžia pasirinkti elementą pagal jo atributo buvimą arba reikšmę.

### 3.1. Tikslus atributas: `[type="text"]`

**HTML:**
```html
<form>
    <p>
        <label for="username">Username</label>
        <input type="text" id="username">
    </p>
    <p>
        <label for="email">Email</label>
        <input type="email" id="email">
    </p>
</form>
```

**CSS:**
```css
input[type="text"] {
    border: 1px solid green;
}

input[type="email"] {
    border: 1px solid red;
}
```

**Rezultatas:** teksto laukelis turės žalią rėmelį, el. pašto laukelis – raudoną. Tai paskaitos 4–5 skaidrių pavyzdys.

**Išskaidome:** `input` = norime tik įvesties laukų; `[type="email"]` = tik tokių, kurių `type` yra `email`.

### 3.2. Dažniausi atributų pasirinkimo būdai

| CSS | Reiškia | Pavyzdys |
|---|---|---|
| `[required]` | turi atributą `required` | privalomi laukai |
| `[type="email"]` | atributo reikšmė yra tiksliai `email` | el. pašto laukai |
| `[href^="https"]` | `href` **prasideda** `https` | HTTPS nuorodos |
| `[href$=".pdf"]` | `href` **baigiasi** `.pdf` | PDF failų nuorodos |
| `[href*="youtube"]` | `href` **turi** tekstą `youtube` bet kurioje vietoje | YouTube nuorodos |

> [!tip] Lengva atsiminti
> `^=` – **pradžia**; `$=` – **pabaiga**; `*=` – **yra kažkur viduje**.

**Pavyzdys:**
```html
<a href="https://example.com">Puslapis</a>
<a href="failai/uzduotis.pdf">Užduotis</a>
<a href="https://youtube.com/video">Video</a>
```

```css
a[href^="https"] { color: green; }
a[href$=".pdf"] { color: red; }
a[href*="youtube"] { font-weight: bold; }
```

Viena nuoroda gali atitikti **kelis selektorius vienu metu**. Pvz., YouTube nuorodai tiks ir pirmas, ir trečias selektorius.

**Pastaba:** tikrinamas atributo tekstas, o ne tai, kaip žmogui atrodo nuorodos pavadinimas.

---

## 4. Pseudo klasės

**Pseudo klasė** – CSS selektoriaus dalis, kuri parenka elementą pagal **būseną** ar **vietą HTML struktūroje**, nieko nekeičiant HTML kode. Ji rašoma su **vienu dvitaškiu** – `:`.

### 4.1. Vartotojo veiksmai

| Pseudo klasė | Kada veikia |
|---|---|
| `:hover` | pelės žymeklis užvestas ant elemento |
| `:active` | elementas aktyvinamas, pvz., spaudžiamas pelės mygtukas |
| `:focus` | elementas turi fokusą, pvz., į jį paspaudėme ar perėjome su Tab |

```html
<button>Paspausk mane</button>
<input type="text" placeholder="Įrašyk vardą">
```

```css
button:hover {
    background-color: orange;
}

button:active {
    background-color: red;
}

input:focus {
    border: 2px solid blue;
    outline: 2px solid lightblue;
}
```

**Kas vyksta?** Užvedus ant mygtuko jis oranžinis, spaudžiant – raudonas; pasirinkus lauką jis paryškinamas. `:hover` nereiškia paspaudimo!

### 4.2. Nuorodų būsenos

| Pseudo klasė | Ką pasirenka |
|---|---|
| `a:link` | dar neaplankytą nuorodą |
| `a:visited` | jau aplankytą nuorodą |
| `a:hover` | nuorodą su užvestu žymekliu |
| `a:active` | aktyvinamą (spaudžiamą) nuorodą |

```css
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: orange; }
a:active { color: red; }
```

> [!warning] Svarbus eiliškumas
> Paskaitoje akcentuojama nuorodų taisyklių tvarka: **LVHA** = `:link` → `:visited` → `:hover` → `:active`. Taip tos pačios svarbos taisyklės viena kitą mažiau trikdo.

### 4.3. Formos laukų būsenos

| Pseudo klasė | Ką reiškia |
|---|---|
| `:checked` | pažymėtas checkbox arba radio mygtukas |
| `:disabled` | išjungtas laukas / mygtukas |
| `:invalid` | reikšmė neatitinka HTML validavimo reikalavimų |
| `:required` | privalomas laukas |
| `:optional` | neprivalomas laukas |
| `:placeholder-shown` | rodomas įvesties lauko placeholder tekstas |
| `:in-range` | skaičius / data yra leidžiamose ribose |
| `:read-only` | elementas nekeičiamas naudotojo |

**HTML:**
```html
<input type="email" required placeholder="El. paštas">
<input type="number" min="1" max="10" value="5">
<input type="checkbox" checked>
<input type="text" value="Užrakintas" readonly>
<button disabled>Negalima spausti</button>
```

**CSS:**
```css
input:required { border: 2px solid orange; }
input:invalid { border-color: red; }
input:in-range { background-color: lightgreen; }
input:placeholder-shown { background-color: #f2f2f2; }
input:read-only { color: gray; }
input:checked { accent-color: green; }
button:disabled { opacity: 0.5; }
```

**Svarbus niuansas:** `:invalid` tikrina būtent HTML validavimo taisykles (pvz., el. pašto formatą, privalomą reikšmę). `:placeholder-shown` veikia tada, kai *placeholder iš tikrųjų matomas*, o ne vien dėl to, kad atributas yra parašytas.

---

## 5. Struktūrinės pseudo klasės

Jos pasirenka elementą pagal jo **poziciją tarp vieno tėvinio elemento vaikų** (DOM medis = HTML elementų struktūra).

### 5.1. `:first-child` ir `:last-child`

```html
<article>
    <p>Pirmoji pastraipa</p>
    <p>Antroji pastraipa</p>
</article>

<article>
    <h2>Antraštė</h2>
    <p>Pastraipa po antrašte</p>
</article>
```

```css
p:first-child {
    color: lime;
}
```

**Kuris tekstas bus žalias?** Tik pirmoji pirmo `article` pastraipa. Antro `article` pastraipa **nebus žalia**, nes pirmasis to `article` vaikas yra `h2`, o ne `p`. Tai paskaitos 10–11 skaidrių pavyzdys.

- `p:first-child` – `p`, kuris yra **pirmas iš visų savo tėvo vaikų**.
- `p:last-child` – `p`, kuris yra **paskutinis iš visų savo tėvo vaikų**.
- `p:only-child` – `p`, kuris yra **vienintelis savo tėvo vaikas**.

### 5.2. `:first-of-type` ir `:nth-of-type()`

```html
<div>
    <h2>Antraštė</h2>
    <p>Pirma pastraipa</p>
    <p>Antra pastraipa</p>
</div>
```

```css
p:first-child { color: red; }       /* Nė vienas p neatitinka */
p:first-of-type { color: green; }   /* Pirmoji pastraipa žalia */
p:nth-of-type(2) { color: blue; }  /* Antroji pastraipa mėlyna */
```

**Skirtumas:** `child` skaičiuoja **visus gretimus vaikus** (nepriklausomai nuo žymės); `of-type` skaičiuoja **to paties žymės tipo** elementus.

| Pseudo klasė | Reikšmė |
|---|---|
| `:first-child` | pirmas vaikas |
| `:last-child` | paskutinis vaikas |
| `:only-child` | vienintelis vaikas |
| `:nth-child(n)` | vaikas pagal numerį / formulę |
| `:first-of-type` | pirmasis tokio tipo elementas |
| `:last-of-type` | paskutinis tokio tipo elementas |
| `:nth-of-type(n)` | n-tasis tokio tipo elementas |
| `:only-of-type` | vienintelis to tipo elementas tarp savo tėvo vaikų |

### 5.3. `:nth-child()` – labai svarbu praktikai

```html
<ul>
    <li>Pirmas</li>
    <li>Antras</li>
    <li>Trečias</li>
    <li>Ketvirtas</li>
    <li>Penktas</li>
    <li>Šeštas</li>
</ul>
```

```css
li:nth-child(2) { color: red; }      /* Tik 2-as */
li:nth-child(even) { background: #eee; } /* 2, 4, 6... */
li:nth-child(odd) { font-weight: bold; } /* 1, 3, 5... */
li:nth-child(2n) { color: blue; }    /* 2, 4, 6... */
li:nth-child(3n + 2) { color: green; } /* 2, 5, 8, 11... */
```

**Formulė `an + b`:** `n` paeiliui įgauna 0, 1, 2, 3...; `a` reiškia žingsnį; `b` – poslinkį.

- `2n` → 2, 4, 6... (0-asis HTML vaikas neegzistuoja).
- `3n + 2` → 2, 5, 8, 11...
- `4n + 3` → 3, 7, 11, 15...

**Paprastas būdas:** „pradėk nuo 3-čio, tada kas 4-tą“ → `li:nth-child(4n + 3)`.

> [!warning] Atsargiai
> `:nth-child(3)` nereiškia „kas trečią“, o **tik trečią**. Kas trečią yra `:nth-child(3n)`.

---

## 6. Loginės pseudo klasės

Paskaitos 9 skaidrėje nurodytos `:not()`, `:is()`, `:where()` ir `:has()`.

| Sintaksė | Paprastai tariant |
|---|---|
| `:not(...)` | pasirink viską, **išskyrus** tai |
| `:is(...)` | elementas atitinka **bent vieną** iš variantų |
| `:where(...)` | panašu į `:is()`, bet **nesuteikia papildomo specifiškumo** |
| `:has(...)` | pasirink elementą, kuris **turi nurodytą vidinį / susijusį elementą** |

```html
<div class="kortele">
    <h2>Prekė</h2>
    <p>Aprašymas</p>
</div>
<p class="svarbu">Ypatinga žinutė</p>
<p>Paprastas tekstas</p>
```

```css
p:not(.svarbu) { color: gray; }
:is(h1, h2, h3) { font-family: Arial, sans-serif; }
:where(article, section) p { line-height: 1.5; }
.kortele:has(h2) { border: 1px solid blue; }
```

**Atsimink:** `:has(h2)` leidžia stilizuoti `.kortele`, jei jos viduje yra `h2`, o ne patį `h2`.

---

## 7. Pseudo elementai

**Pseudo elementas** leidžia keisti **elemento dalį** arba CSS pagalba **vizualiai pridėti turinį**, neįrašant jo tiesiogiai HTML. Paprastai rašomas su **dviem dvitaškiais** `::`.

### 7.1. Pseudo klasė ir pseudo elementas – ne tas pats

| Pseudo klasė `:` | Pseudo elementas `::` |
|---|---|
| elementas tam tikroje būsenoje / vietoje | dalis elemento arba sugeneruotas turinys |
| `button:hover` | `p::first-letter` |
| `input:focus` | `li::before` |

### 7.2. `::first-letter` – pirmoji raidė

```html
<p>Lorem ipsum dolor sit amet...</p>
<p>Labas rytas!</p>
```

```css
p::first-letter {
    color: red;
    font-size: 150%;
}
```

**Rezultatas:** kiekvienos pastraipos pirmoji raidė bus raudona ir didesnė. Paskaitos 14–15 skaidrių pavyzdys.

### 7.3. Kiti pseudo elementai

| Sintaksė | Ką daro |
|---|---|
| `::first-letter` | stilizuoja pirmąją raidę |
| `::first-line` | stilizuoja pirmą matomą teksto eilutę (priklauso nuo pločio) |
| `::placeholder` | stilizuoja pilką / pagalbinį tekstą lauke |
| `::before` | įterpia sugeneruotą turinį **prieš** elemento turinį |
| `::after` | įterpia sugeneruotą turinį **po** elemento turinio |

```html
<input placeholder="Įrašyk vardą">
<p>Ilgesnis tekstas, kuris gali persikelti į kitą eilutę...</p>
```

```css
input::placeholder { color: #888; }
p::first-line { font-weight: bold; }
```

### 7.4. `::before` su `content`

```html
<ul>
    <li>Atlikti namų darbus</li>
    <li>Pasikartoti CSS</li>
    <li>Pasimokyti HTML</li>
</ul>
```

```css
li::before {
    content: "NEW!";
    margin-right: 1em;
    background: #ddd;
    color: darkorchid;
}
```

**Rezultatas:** prieš kiekvieno sąrašo įrašo tekstą bus `NEW!`. Tai paskaitos 17–18 skaidrių pavyzdys.

- `content: "NEW!";` – tekstas, kurį įdedame.
- `margin-right: 1em;` – tarpas dešinėje; `1em` dažniausiai atitinka esamą šrifto dydį.
- `background: #ddd;` – šviesiai pilkas fonas.
- `color: darkorchid;` – violetinė teksto spalva.

```css
li::after {
    content: " ✓";
    color: green;
}
```

Ši taisyklė **po** kiekvieno įrašo pridės žalią varnelę.

> [!warning] `content` svarbu
> `::before` ir `::after` dažniausiai reikia `content` savybės, net jei ji tuščia: `content: "";`. Be jos sugeneruotas pseudo elementas įprastai nepasirodo. Tai vizualus turinys, todėl svarbių instrukcijų vien CSS turiniu geriau neperduoti.

---

## 8. CSS specifiškumas – kuri taisyklė laimi?

**Specifiškumas (specificity)** – taisyklės „svoris“, pagal kurį naršyklė padeda nuspręsti, kuris CSS aprašymas galios, kai kelios taisyklės nustato **tą pačią savybę tam pačiam elementui**.

### 8.1. Jeigu selektoriai vienodai stiprūs, laimi vėlesnis

```css
h2 { color: green; }
h2 { color: pink; }
```

**Rezultatas: rožinė**, nes abi taisyklės vienodai konkrečios, bet antra parašyta vėliau (paskaitos 19–20 skaidrės).

### 8.2. Konkretesnis selektorius nugali vėliau parašytą paprastesnį

```html
<article>
    <h2>Lorem</h2>
    <p>Lorem ipsum...</p>
</article>
```

```css
* { color: gray; }
article h2 { color: green; }
h2 { color: pink; }
```

**Rezultatas:** antraštė bus **žalia** – `article h2` yra konkretesnis nei `h2`, nors `h2` taisyklė parašyta vėliau. Kita pastraipa bus pilka (paskaitos 21–22 skaidrės).

### 8.3. Keturių dalių skaičiavimas

Mokomojoje medžiagoje naudojamas formatas **`inline, ID, klasės / atributai / pseudo klasės, HTML elementai / pseudo elementai`**.

| Tipas | Pavyzdžiai | Skaičiuojamas svoris |
|---|---|---|
| Inline stilius | `<p style="color:red">` | `1,0,0,0` |
| ID | `#main` | `0,1,0,0` |
| Klasė / atributas / pseudo klasė | `.box`, `[required]`, `:hover` | `0,0,1,0` |
| Žymės pavadinimas / pseudo elementas | `p`, `h2`, `::before` | `0,0,0,1` |
| Universalus `*` | `*` | `0,0,0,0` |

**Pavyzdžiai:**

| Selektorius | Specifiškumas | Kodėl |
|---|---|---|
| `.favorite` | `0,0,1,0` | 1 klasė |
| `ul#summer-drinks li` | `0,1,0,2` | 1 ID + 2 HTML žymės |
| `ul#summer-drinks li.favorite` | `0,1,1,2` | 1 ID + 1 klasė + 2 žymės |
| `p:hover` | `0,0,1,1` | 1 pseudo klasė + 1 žymė |
| `input[type="email"]` | `0,0,1,1` | 1 atributas + 1 žymė |

**Svarbiausia:** tai nėra paprasta suma – pirmiausia lyginame pirmą skaičių, paskui antrą, trečią ir ketvirtą. **Vienas ID yra svarbesnis už daug klasių**.

**Papildoma detalė pažengimui:** `:where()` turi 0 specifiškumą, o `:is()`, `:not()` ir `:has()` perima konkrečiausio vidinio selektoriaus specifiškumą. Tai reiškia, kad nėra teisinga tiesiog kiekvieną iš jų skaičiuoti kaip įprastą vieną pseudo klasę.

> [!important] Eiliškumas nėra vien tik specifiškumas
> Kai deklaracijos konfliktuoja, CSS taip pat atsižvelgia į taisyklių kilmę, `!important`, sluoksnius ir kitas kaskados taisykles. Pradedantiesiems čia svarbiausia: **toje pačioje svarbos kategorijoje** lyginamas specifiškumas, o jei jis vienodas – vėlesnė taisyklė.

---

## 9. `!important`

`!important` – specialus CSS žymuo, kuris **padidina konkrečios deklaracijos svarbą**.

```css
p { color: red !important; }
p { color: blue; }
```

Tekstas bus **raudonas**, nors mėlynas stilius parašytas vėliau.

**Rašoma po reikšmės ir prieš kabliataškį:** `color: red !important;`.

> [!warning] Nenaudok visur
> Paskaitoje `!important` pristatomas kaip stipraus prioriteto būdas (26–27 skaidrės). Bet tai **nėra absoliučiai už viską stipriau**: kelios `!important` taisyklės gali konfliktuoti, o kaskada turi daugiau taisyklių. Pradedantiesiems geriausia pirmiausia tvarkyti selektorius ir jų eiliškumą, o `!important` palikti išimtims.

---

## 10. Paveldėjimas (papildomai)

> [!note] Kodėl čia įtraukta?
> „Paveldėjimas“ įrašytas paskaitos turinyje (2 skaidrė), bet likusiose skaidrėse nėra išsamiai aiškinamas. Tai papildomas pradinis paaiškinimas.

**Paveldėjimas** reiškia, kad kai kurias CSS savybes vaikai gali perimti iš tėvinio elemento.

```html
<div class="blokas">
    <h2>Labas</h2>
    <p>Šis tekstas taip pat bus mėlynas.</p>
</div>
```

```css
.blokas {
    color: blue;
    font-family: Arial, sans-serif;
    border: 2px solid black;
}
```

- `color` ir `font-family` paprastai **paveldimos** (jeigu vaikui nenurodyta kita reikšmė).
- `border`, `margin` ir `padding` paprastai **nepaveldimos**.

**Svarbu:** jei `p` turi savo `color: red`, tas tekstas paprastai bus raudonas, nepaisant tėvo mėlynos spalvos.

---

## 11. Praktinės paskaitos užduotys

Paskaitos 29 skaidrėje nurodyta: **kiekvieną užduotį atlikti atskiruose HTML ir CSS failuose** (`01p`, `02p` ir t. t.) ir patikrinti CSS sintaksę [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input).

### 11.1. Pseudo elementai: pridėti žvaigždutę prie sąrašo (30 skaidrė)

**Užduotis:** `::before` pagalba prieš „To do“ sąrašo įrašus įterpti simbolį kaip tekstą.

**HTML (`index.html`):**
```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title>To do list</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>TO DO LIST</h2>
    <ul>
        <li>Susikurti darbų sąrašą</li>
        <li>Patikrinti pirmą punktą</li>
        <li>Pakartoti CSS</li>
        <li>Pailsėti</li>
    </ul>
</body>
</html>
```

**CSS (`style.css`):**
```css
li {
    list-style: none;
    margin-bottom: 12px;
}

li::before {
    content: "★ ";
    color: silver;
    margin-right: 5px;
}
```

**Ką išmokstame:** simbolio HTML nerašome, jis atsiranda per CSS `content`. `list-style: none` panaikina įprastą sąrašo ženklelį.

### 11.2. `nth-child()` ir `hover` (31 skaidrė)

**Užduoties sąlygos:**
1. Nuo 3-čio elemento, **kas 4-tas** pakeičia spalvą – 3, 7, 11...
2. Nuo 2-o elemento, **kas 3-čias** pakeičia spalvą **tik užvedus pelę** – 2, 5, 8, 11...

**HTML:**
```html
<ul>
    <li>Įrašas 1</li>
    <li>Įrašas 2</li>
    <li>Įrašas 3</li>
    <li>Įrašas 4</li>
    <li>Įrašas 5</li>
    <li>Įrašas 6</li>
    <li>Įrašas 7</li>
    <li>Įrašas 8</li>
    <li>Įrašas 9</li>
    <li>Įrašas 10</li>
    <li>Įrašas 11</li>
</ul>
```

**CSS:**
```css
/* Trečias, septintas, vienuoliktas... */
li:nth-child(4n + 3) {
    color: orange;
}

/* Antras, penktas, aštuntas... – tik užvedus */
li:nth-child(3n + 2):hover {
    color: blue;
}
```

**Kodėl?** `4n + 3` duoda 3, 7, 11. `3n + 2` duoda 2, 5, 8, 11. `:hover` įjungia antrą taisyklę tik užvedus pelę. 11-am įrašui galioja abi sąlygos, tačiau kai užvesta pelė, laimi antra taisyklė, nes jos selektorius konkretesnis.

### 11.3. Nuorodų formatavimas (32 skaidrė)

**Skaidrėje nurodyta:** duotas `indexNuorodos.html`; užduoties žingsniai pateikti paties HTML failo komentare, o CSS turi būti atskirame faile. Skaidrėje matomas vidaus nuorodos ir dviejų išorinių nuorodų vaizdas. **Tikslūs žingsniai nėra pateikti PDF**, todėl be papildomo `indexNuorodos.html` failo jų atkurti negalima.

**Papildomas mokomasis pavyzdys (ne tikslus originalo sprendimas):**
```html
<a href="#kontaktai">Vidinė nuoroda</a>
<a href="https://example.com">Išorinė nuoroda</a>
```

```css
a[href^="#"] { background: gold; }
a[href^="https"] { color: purple; }
a:hover { text-decoration: underline; }
```

### 11.4. Registracijos forma (33 skaidrė)

**Skaidrėje nurodyta:** duoti `index.html`, `style.css`, `rezultatas.png`. CSS komentaruose yra užduoties žingsniai. PDF matomas tik formos rezultatas: vardo, pavardės, naudotojo vardo, el. pašto, slaptažodžio, šalies ir mygtukų laukai. **Be pradinių failų neįmanoma žinoti visų tikslių sąlygų**.

**Treniruočių pavyzdys:**
```html
<form>
    <label for="email">El. paštas</label>
    <input id="email" type="email" required placeholder="Tavo el. paštas">
    <button type="submit">Siųsti</button>
    <button type="reset">Išvalyti</button>
</form>
```

```css
input[type="email"] { border: 1px solid pink; }
input:focus { outline: 2px solid hotpink; }
input:invalid { border-color: red; }
button:hover { background-color: lightpink; }
```

### 11.5. Papildoma užduotis – simboliai pagal nuorodos tekstą URL (34 skaidrė)

**Sąlyga:** prieš nuorodas, kurių URL turi `cv`, įterpti **♛**, o po nuorodų, kurių URL turi `darb`, įterpti **♞**. Skaidrėje minima, kad HTML pavyzdys pateiktas atskirame `Pseudo elementai.docx` faile; jo šiame PDF nėra.

```html
<a href="https://example.com/cv/mano">Mano CV</a>
<a href="https://example.com/darbai">Darbai</a>
<a href="https://example.com/apie">Apie mane</a>
```

```css
a[href*="cv"]::before {
    content: "♛ ";
}

a[href*="darb"]::after {
    content: " ♞";
}
```

**Paaiškinimas:** `[href*="cv"]` ieško raidžių `cv` **atributo `href` reikšmėje**, `::before` prideda simbolį prieš tekstą. `[href*="darb"]` ieško `darb`, `::after` prideda simbolį po teksto.

---

## 12. Dažniausios klaidos

| Klaida | Kodėl blogai | Kaip teisingai |
|---|---|---|
| `button::hover` | `hover` yra pseudo klasė | `button:hover` |
| `p:first-letter` | šiuolaikinėje sintaksėje pseudo elementui naudojami `::` | `p::first-letter` |
| `li:nth-child(3)` norint kas trečio | pasirenka tik 3-ią | `li:nth-child(3n)` |
| `input[type=email]` nieko nekeičia | `input` gali būti kitokio tipo arba nėra prijungtas CSS | patikrinti HTML ir `<link>` |
| `p:first-child` nesuveikia | prieš `p` yra, pavyzdžiui, `h2` | jei reikia pirmo `p`, naudoti `p:first-of-type` |
| `::before` nerodo ženklo | pamirštas `content` | `content: "★";` |
| `#menu` vietoje `.menu` | sumaišytas ID ir klasė | pagal HTML naudoti `#` arba `.` |
| `!important` prie kiekvienos savybės | sunku suprasti prioritetus ir taisyti CSS | naudoti tik išimtiniais atvejais |

---

## 13. Atmintinė prieš atsiskaitymą

> [!summary] Greitas kartojimas
> - **CSS selektorius** parenka elementą, kuriam taikomas stilius.
> - `.klase`, `#id`, `p` – klasė, ID, HTML žymė.
> - **Atributai:** `[type="email"]`, `^=` prasideda, `$=` baigiasi, `*=` turi tekstą.
> - **Pseudo klasės `:`:** `:hover`, `:active`, `:focus`, `:checked`, `:invalid`, `:first-child`, `:nth-child()`.
> - **Pseudo elementai `::`:** `::before`, `::after`, `::first-letter`, `::first-line`, `::placeholder`.
> - `::before` / `::after` dažniausiai naudojami su `content`.
> - `:nth-child(2n)` = lyginiai; `:nth-child(2n + 1)` = nelyginiai.
> - `:nth-child(4n + 3)` = 3, 7, 11...
> - `:nth-child(3n + 2)` = 2, 5, 8...
> - `:first-child` skaičiuoja **visus tėvo vaikus**, `:first-of-type` – to paties tipo.
> - **Specifiškumas:** inline > ID > klasės / atributai / pseudo klasės > žymės / pseudo elementai, kai lyginame vienodos kilmės ir svarbos deklaracijas.
> - Jei specifiškumas vienodas, paprastai laimi **vėliau parašyta** taisyklė.
> - `!important` kelia deklaracijos prioritetą, bet geriau juo nepiktnaudžiauti.

---

## 14. Pasitikrink save

**1.** Kuo skiriasi `.box` ir `#box`?

**2.** Ką pasirenka `input[type="password"]`?

**3.** Ką reiškia `a[href$=".pdf"]`?

**4.** Kuo skiriasi `button:hover` ir `button:active`?

**5.** Koks skirtumas tarp `p:first-child` ir `p:first-of-type`?

**6.** Kuriuos numerius parinks `li:nth-child(4n + 2)`?

**7.** Ką daro `p::first-letter`?

**8.** Kodėl `li::before { color: red; }` gali nieko neparodyti?

**9.** Kas laimės: `h2 { color: red; }` ar vėliau parašyta `h2 { color: blue; }`?

**10.** Kas konkretesnis: `h2` ar `.title`?

<details>
<summary>Pasitikrinti atsakymus (išskleisk Obsidian per skaitymo režimą, jei palaikoma)</summary>

1. `.box` ieško klasės, `#box` – ID.
2. `input`, kurio `type="password"`.
3. Nuorodas, kurių `href` baigiasi `.pdf`.
4. `hover` – užvestas žymeklis; `active` – aktyvinamas / spaudžiamas.
5. `first-child` – pirmas tarp visų tėvo vaikų; `first-of-type` – pirmas to paties žymės tipo.
6. 2, 6, 10, 14...
7. Stilizuoja pirmąją elemento teksto raidę.
8. Trūksta `content` deklaracijos.
9. Mėlyna, nes vienodo stiprumo taisyklė yra vėliau.
10. `.title`, nes klasės selektorius turi didesnį specifiškumą.

</details>

---

## Naudingos nuorodos

- [CSS atributų selektoriai – CSS-Tricks](https://css-tricks.com/almanac/selectors/a/attribute/)
- [CSS validatorius](https://jigsaw.w3.org/css-validator/#validate_by_input)
- [CSS `::before` ir `::after` – paskaitoje minimas gidas](https://www.codewall.co.uk/how-to-use-before-and-after-html-pseudo-elements-tutorial/)
- [HTML simboliai](https://www.htmlsymbols.xyz/star-symbols)
- [Paskaitoje pateiktas `nth-child` vaizdo paaiškinimas](https://www.youtube.com/shorts/ROHsYev5H2A)

**Susijusios Obsidian temos:** [[HTML pagrindai]] · [[CSS pagrindai]] · [[CSS dėžutės modelis]]
