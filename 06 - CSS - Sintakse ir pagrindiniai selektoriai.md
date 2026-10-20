---
tags: [html-css, konspektas]
---

# CSS – sintaksė ir pagrindiniai selektoriai

> [!info] Apie užrašus
> Struktūruoti mokymosi užrašai pagal pateiktą paskaitų medžiagą. Sąvokos paaiškintos su pavyzdžiais, kad būtų galima jas pritaikyti HTML ir CSS kode.

## CSS sintaksė ir selektoriai

> [!info] Apie šiuos užrašus
> Konspektas paruoštas pagal TECHIN **„CSS Sintaksė ir Selektoriai“ (45 skaidrės)** ir papildomą **„Selectors Cheat Sheet“ (3 puslapiai, Web Dev Simplified)**. Pagrindinė pamoka paaiškinta iš eilės, o atmintinės temos sudėtos atskirame skyriuje. Paaiškinimai ir kodų pavyzdžiai pateikti paprastai, kad galėčiau pats pasitikrinti, ką reiškia kiekvienas selektorius.

## Turinys
- [[#1. Kas yra CSS?]]
- [[#2. Trys CSS rašymo būdai]]
- [[#3. Kaip veikia CSS prioritetai?]]
- [[#4. CSS taisyklės sintaksė]]
- [[#5. Paprasti selektoriai]]
- [[#6. Kombinatoriai – kas yra viduje arba šalia?]]
- [[#7. Class ir ID]]
- [[#8. Atributų selektoriai]]
- [[#9. Pseudo klasės]]
- [[#10. Pseudo elementai]]
- [[#11. Sąrašų parametrai]]
- [[#12. Nuorodų stilius]]
- [[#13. Teksto ir šrifto savybės]]
- [[#14. CSS komentarai ir validatorius]]
- [[#15. Kas yra Selectors Cheat Sheet?]]
- [[#16. Pilnas mažas praktinis pavyzdys]]

---
## 1. Kas yra CSS?

**CSS (Cascading Style Sheets)** – taisyklės, kurios nurodo, kaip HTML elementai turi **atrodyti** ir **išsidėstyti** puslapyje.

- **HTML** pasako, kas puslapyje yra: antraštė, tekstas, nuotrauka, lentelė.
- **CSS** pasako, kaip tai atrodo: spalva, dydis, fonas, šriftas, tarpai, rėmeliai.

```html
<h1>Mano puslapis</h1>
<p>Sveiki!</p>
```

```css
h1 {
    color: green;
}
p {
    font-size: 18px;
}
```

`h1` bus žalias, o pastraipos tekstas – 18 pikselių dydžio.

## 2. Trys CSS rašymo būdai

### 2.1 Inline CSS – tiesiai elemente

```html
<h1 style="color: red;">Antraštė</h1>
```

- `style="..."` parašomas HTML žymėje.
- Patogu labai greitai pakeisti vieną elementą.
- Kai stilių daug, HTML pasidaro sunkiau skaityti.

### 2.2 Internal CSS – puslapio `<style>` dalyje

```html
<head>
    <title>Bandymas</title>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

- CSS taisyklės yra pačiame HTML faile.
- Patogu vienam puslapiui arba pamokos bandymams.

### 2.3 External CSS – atskiras failas

**index.html**:
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**style.css**:
```css
body {
    background-color: lightgray;
}
```

- Vieną CSS failą galima prijungti prie kelių HTML puslapių.
- Taip lengviau tvarkyti didesnius projektus.
- `href` nurodo kelią iki CSS failo. Jei failas kitame aplanke, kelią reikia pakoreguoti.

> [!tip] Kada ką rinktis?
> Greitai vienam elementui – `style=""`; vienam bandomajam puslapiui – `<style>`; didesniam projektui – atskirą `style.css`.

## 3. Kaip veikia CSS prioritetai?

Kai kelios taisyklės nori pakeisti **tą pačią** savybę, naršyklė nusprendžia, kuri laimi. Tai ir yra CSS „cascading“ principas.

```html
<style>
    h1 {
        color: blue;
    }
</style>
<h1 style="color: red;">Labas</h1>
```

Šiuo atveju antraštė bus **raudona**, nes paprastas `style="color: red"` turi didesnį prioritetą nei `h1` taisyklė.

**Pradedančiajam naudinga tvarka paprastose situacijose:**

1. `style="..."` (inline) dažniausiai laimi prieš įprastas CSS taisykles.
2. ID `#antraste` paprastai stipresnis už klasę `.antraste`.
3. Klasė `.antraste` paprastai stipresnė už žymės selektorių `h1`.
4. Jei dvi vienodo specifiškumo taisyklės prieštarauja, dažniausiai laimi **vėliau aprašyta**.
5. Naršyklės numatytieji stiliai taikomi, kai jų neperrašo autoriniai CSS stiliai.

**Svarbu:** nėra taisyklės, kad vidinis CSS visada laimi prieš išorinį. Reikia žiūrėti į specifiškumą ir taisyklių eilės tvarką. Yra ir specialūs atvejai, pvz. `!important`, bet pradžioje svarbiausia suprasti aukščiau esantį pavyzdį.

## 4. CSS taisyklės sintaksė

```css
p {
    color: blue;
    font-size: 18px;
}
```

| Dalis | Ką reiškia? |
|---|---|
| `p` | **Selektorius** – kuriuos elementus pasirinkti |
| `{ ... }` | Taisyklių blokas |
| `color` | **Savybė** – ką keisti |
| `blue` | **Reikšmė** – į ką keisti |
| `color: blue;` | **Deklaracija** – savybė ir reikšmė |
| `;` | Atskiriamos deklaracijos |

Vienoje taisyklėje galima turėti daug deklaracijų.

```css
h2 {
    color: red;
    background-color: yellow;
    font-size: 24px;
}
```

**Selektorius – tai būdas nurodyti, KAM taikyti CSS.**

## 5. Paprasti selektoriai

### 5.1 Elemento / tipo selektorius

```css
p {
    color: blue;
}
```

Parenka **visus** `<p>` elementus. Jeigu bus 10 pastraipų, visos taps mėlynos (jei niekas stilių neperrašo).

### 5.2 Klasės selektorius `.`

HTML:
```html
<p class="svarbu">Svarbus tekstas</p>
<p>Paprastas tekstas</p>
```

CSS:
```css
.svarbu {
    color: red;
}
```

Raudonas bus tik elementas, turintis `class="svarbu"`.

### 5.3 ID selektorius `#`

HTML:
```html
<p id="virsus">Viršutinis tekstas</p>
<p id="apacia">Apatinis tekstas</p>
```

CSS:
```css
#virsus {
    color: blue;
}
#apacia {
    color: gray;
}
```

Viename HTML dokumente **tas pats ID neturi kartotis**. Paprastam stilių kartojimui dažniau naudok `class`.

### 5.4 Universalus selektorius `*`

```css
* {
    box-sizing: border-box;
}
```

Pasirenka visus elementus. Pamokos pavyzdyje:

```css
* {
    color: green;
}
```

Visi tekstiniai elementai gaus žalią teksto spalvą, nebent kita taisyklė ją pakeis.

### 5.5 Grupavimas – kablelis `,`

```css
h2, h3 {
    color: red;
}
```

**Ir `<h2>`, ir `<h3>`** bus raudoni. Kablelis reiškia „šitas **arba** šitas“.

### 5.6 Tik tam tikros žymės klasė

```css
p.komentaras {
    color: gray;
}
```

Pasirenka **tik `<p>` su klase `komentaras`**, o ne, pavyzdžiui, `<div class="komentaras">`.

## 6. Kombinatoriai – kas yra viduje arba šalia?

Žiūrėk ne tik į HTML žymę, bet ir **kur elementas yra kito elemento atžvilgiu**.

### 6.1 Palikuonis / Descendant – tarpas

```css
article p {
    color: red;
}
```

Pasirenka **visus `p`, kurie yra `article` viduje**, net jei jie įdėti giliau.

```html
<article>
    <div>
        <p>Šis raudonas</p>
    </div>
    <p>Ir šis raudonas</p>
</article>
<p>Šis nepasirinktas</p>
```

**Svarbu:** tarp `article` ir `p` yra **tarpas**, ne kablelis.

### 6.2 Tiesioginis vaikas / Direct Child – `>`

```css
article > p {
    color: red;
}
```

Pasirenka tik tokius `p`, kurie **tiesiogiai priklauso `article`**, be papildomo įdėto `div`.

```html
<article>
    <p>Raudonas</p>
    <div>
        <p>Ne dėl šios taisyklės</p>
    </div>
</article>
```

### 6.3 Gretimas brolinis elementas / Adjacent Sibling – `+`

```css
article + p {
    color: red;
}
```

Pasirenka **pirmą `p` iškart po `article`**, jei abu turi tą patį tėvinį elementą.

```html
<article>Turinys</article>
<p>Raudonas</p>
<p>Šis nepasirinktas</p>
```

Jeigu tarp `article` ir `p` įdėtume kitą elementą, tas `p` jau nebebūtų tiesioginis gretimas brolis.

### 6.4 Bendri vėlesni broliai / General Sibling – `~`

```css
article ~ p {
    color: red;
}
```

Pasirenka **visus vėliau einančius `p`**, kurie turi tą patį tėvinį elementą kaip `article`.

```html
<article>Turinys</article>
<p>Pirmas raudonas</p>
<h3>Antraštė</h3>
<p>Antras raudonas</p>
```

### 6.5 Trumpas keturių skirtumų palyginimas

| CSS | Paprastai reiškia |
|---|---|
| `div p` | Visi `p` **bet kuriame gylyje** `div` viduje |
| `div > p` | Tik **tiesioginiai** `div` vaikai `p` |
| `div + p` | Tik `p` **iškart po** `div` |
| `div ~ p` | Visi vėlesni to paties tėvo `p` |

> [!warning] Svarbi painiava
> `div p` ≠ `div, p` ≠ `div.p`.
> - Tarpas: `p` viduje `div`.
> - Kablelis: visi `div` **ir** visi `p`.
> - Taškas: `div` su klase `p`.

### 6.6 Tėvas, vaikas, palikuonis, brolis

```html
<main>
    <div>
        <p>Pirmas</p>
    </div>
    <p>Antras</p>
</main>
```

- `main` – tėvinis elementas `div` ir antrajam `p`.
- `div` – pirmojo `p` tėvas.
- Abu `p` yra `main` **palikuonys**, bet tik antrasis `p` yra **tiesioginis** `main` vaikas.
- `div` ir antrasis `p` yra **broliniai elementai**, nes jų tėvas tas pats (`main`).

## 7. Class ir ID

Vienas elementas gali turėti **kelias klases**:

```html
<span class="badge active">Active</span>
```

```css
.badge {
    padding: 6px;
    border-radius: 5px;
}
.active {
    background-color: lightgreen;
    color: darkgreen;
}
```

- `.badge` uždeda bendrą išvaizdą.
- `.active` suteikia konkrečią spalvą.
- Klasės pavadinimai `class="badge active"` atskiriami **tarpu**.
- CSS selektorius `.badge.active` (be tarpo) pasirinktų elementus, kurie turi **abi klases kartu**.
- `#id` rinkis unikalaus elemento identifikavimui, o pasikartojančiam dizainui patogiau klasės.

## 8. Atributų selektoriai

**Ši tema išsamiau parodyta papildomoje Selectors Cheat Sheet atmintinėje.**

| Selektorius | Reikšmė |
|---|---|
| `[required]` | Elementas turi `required` atributą |
| `[type="text"]` | `type` tiksliai lygus `text` |
| `[href^="https"]` | `href` **prasideda** `https` |
| `[href$=".pdf"]` | `href` **baigiasi** `.pdf` |
| `[href*="google"]` | `href` **turi** tekstą `google` bet kur |

```html
<input type="text" placeholder="Vardas" required>
<input type="password" placeholder="Slaptažodis">
```

```css
input[type="text"] {
    background-color: lightyellow;
}
input[required] {
    border: 2px solid green;
}
```

Pirmasis laukelis bus geltono fono ir žalio rėmelio. Antram tokios taisyklės netiks.

## 9. Pseudo klasės

**Pseudo klasė** nurodo elemento būseną arba padėtį. Rašoma **su vienu dvitaškiu `:`**.

### 9.1 Būsenos (Cheat Sheet, 2 p.)

| CSS | Kada taikoma? |
|---|---|
| `button:hover` | Užvedus pelę ant mygtuko |
| `input:focus` | Laukelis aktyvus (paspaustas arba pasirinktas su Tab) |
| `input:required` | Laukelis turi `required` |
| `input:checked` | Pažymėtas `radio` arba `checkbox` |
| `input:disabled` | Laukelis išjungtas (`disabled`) |

```css
button:hover {
    background-color: darkblue;
    color: white;
}
input:focus {
    border-color: blue;
}
```

### 9.2 Padėties pseudo klasės (Cheat Sheet, 3 p.)

| CSS | Ką pasirenka? |
|---|---|
| `li:first-child` | `li`, kuris yra **pirmas vaikas** |
| `li:last-child` | `li`, kuris yra **paskutinis vaikas** |
| `li:nth-child(2n)` | `li`, kuris yra lyginiu numeriu tarp **visų** tėvo vaikų |
| `li:nth-last-child(3)` | `li`, kuris yra trečias vaikas skaičiuojant **nuo galo** |
| `p:only-child` | `p`, kuris yra **vienintelis** savo tėvo vaikas |
| `p:first-of-type` | Pirmasis `p` tarp tėvo `p` elementų |
| `p:last-of-type` | Paskutinis `p` tarp tėvo `p` elementų |
| `p:nth-of-type(2n)` | Kas antras `p` tarp tėvo `p` elementų |
| `p:nth-last-of-type(2)` | Antras `p` nuo galo tarp `p` elementų |
| `p:only-of-type` | Vienintelis `p` tokio tipo tarp tėvo vaikų |
| `a:not(.c)` | Visi `a`, **neturintys** klasės `c` |

**Pvz. lentelės eilučių spalvoms:**

```css
tr:nth-child(even) {
    background-color: lightgray;
}
```

`even` reiškia lyginius, o `odd` – nelyginius vaikus.

**`nth-child` ir `nth-of-type` nesupainiok:** `nth-child` skaičiuoja visus tėvo vaikus, `nth-of-type` skaičiuoja tik konkrečios HTML žymės elementus.

## 10. Pseudo elementai

Cheat Sheet 2 puslapyje pateikiami `::before` ir `::after`. Jie žymimi **dviem dvitaškiais `::`**.

```css
p::before {
    content: "★ ";
}
p::after {
    content: " ✓";
}
```

Taip naršyklė vizualiai pridės simbolius prieš ir po pastraipos turinio.

- `::before` – prieš elemento turinį.
- `::after` – po elemento turinio.
- Kad būtų ką rodyti, dažniausiai reikia `content` savybės.
- Tai **ne tas pats**, kas ranka įrašyti papildomą HTML elementą.

## 11. Sąrašų parametrai

Pamokos skaidrėse išskirti trys CSS parametrai ir trys numeruoto sąrašo HTML atributai.

| Savybė / atributas | Paskirtis |
|---|---|
| `list-style-type` | Sąrašo ženkliukų rūšis |
| `list-style-position` | Ženkliuko vieta (`inside`, `outside`) |
| `list-style-image` | Paveikslėlis vietoje ženkliuko |
| `start` | Nuo kokio skaičiaus pradėti `<ol>` |
| `reversed` | Numeruoti atvirkščiai |
| `value` | Priskirti konkrečiam `<li>` numerį |

```html
<ol start="5">
    <li>HTML</li>
    <li value="9">CSS</li>
    <li>JavaScript</li>
</ol>
```

Rezultato numeriai: **5, 9, 10**.

```css
ul {
    list-style-type: square;
    list-style-position: inside;
}
```

`disc` – pilnas taškas, `circle` – tuščias, `square` – kvadratas, `none` – be ženkliukų.

## 12. Nuorodų stilius

Pamokoje pateiktos savybės: `color`, `cursor`, `text-decoration`, `background-color`.

```css
a {
    color: blue;
    text-decoration: none;
    background-color: lightyellow;
    cursor: pointer;
}

a:hover {
    color: red;
    text-decoration: underline;
}
```

- `color` – nuorodos teksto spalva.
- `cursor` – pelės žymeklio tipas.
- `text-decoration` – pvz., pabraukimas.
- `background-color` – fono spalva.
- `:hover` – pasikeitimas užvedus pelę.

## 13. Teksto ir šrifto savybės

### Tekstui

| CSS savybė | Ką daro? |
|---|---|
| `text-align` | Lygiuoja tekstą (`left`, `center`, `right`, `justify`) |
| `line-height` | Tarpai tarp teksto eilučių |
| `letter-spacing` | Tarpai tarp raidžių |
| `word-spacing` | Tarpai tarp žodžių |
| `text-indent` | Pirmos eilutės įtrauka |

### Šriftui ir išvaizdai

| CSS savybė | Ką daro? |
|---|---|
| `font-family` | Šriftas, pvz., Arial |
| `font-size` | Dydis, pvz., `18px` |
| `font-style` | Pvz., `italic` |
| `font-weight` | Storis, pvz., `bold` |
| `text-transform` | Didžiosios / mažosios raidės |
| `text-decoration` | Pabraukimas ir kitos dekoracijos |
| `color` | Teksto spalva |

```css
p {
    font-family: Arial;
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    letter-spacing: 1px;
}
```

## 14. CSS komentarai ir validatorius

CSS komentaras rašomas taip:

```css
/* Šis komentaras naršyklėje nesimato */
p {
    color: blue;
}
```

Tai ne HTML komentaras `<!-- ... -->` ir ne JavaScript `//` komentaras.

**CSS validatoriui** pamokoje siūlomas: https://jigsaw.w3.org/css-validator/

Į validatoriaus puslapį galima įkelti CSS ir patikrinti sintaksės klaidas. Validatorius nepatikrina, ar dizainas gražus – jis tikrina CSS taisyklių teisingumą.

### Pamokos praktinės užduotys

- Naudoti skirtingas selektorių kategorijas ir aprašyti CSS taisykles.
- Naudoti `background-color`, `color`, `font-size`, `border`, vėliau `padding`, `list-style-type`.
- Lyginti rezultatą su pateiktu pavyzdžiu.
- Patikrinti CSS per validatoriaus puslapį.
- Vienoje užduotyje naujus stilius rašyti į **kitą CSS failą**, neliečiant pradinio.

Pamokos pabaigoje pateikta nuoroda į Emmet: https://docs.emmet.io/cheat-sheet/ (tai **kodo rašymo trumpinių** atmintinė, o ne CSS selektorių sąrašas).

## 15. Kas yra Selectors Cheat Sheet?

**Cheat Sheet** reiškia **špargalkę / trumpą atmintinę**. Medžiagoje pateikta 3 puslapių PDF iš „Web Dev Simplified“, kad turėtum **vienoje vietoje CSS selektorių simbolius ir jų reikšmes**. Jo nereikia suprasti kaip naujos programavimo kalbos ar atskiros užduoties. Tai pagalbinė lentelė mokantis CSS.

### Ką rodo jo trys puslapiai?

**1 puslapis – Basic ir Combination:**
- `*` – visi elementai.
- `div` – visi `div`.
- `.c` – visi su klase `c`.
- `#i` – elementas su ID `i`.
- `div a` – `a` viduje `div`.
- `div > a` – tiesioginiai vaikai.
- `div ~ a` – vėliau einantys broliai.
- `div + a` – iškart po `div`.
- `div, a` – ir `div`, ir `a`.
- `div.c` – `div`, kuris dar turi klasę `c`.

**2 puslapis – Attribute, Pseudo Element, Pseudo Class State:**
- Atributai `[a]`, `[a="1"]`, `[a^="1"]`, `[a$="1"]`, `[a*="1"]`.
- `::before`, `::after`.
- `:hover`, `:focus`, `:required`, `:checked`, `:disabled`.

**3 puslapis – Pseudo Class Position/Other:**
- `:first-child`, `:last-child`, `:nth-child(...)`, `:nth-last-child(...)`, `:only-child`.
- `:first-of-type`, `:last-of-type`, `:nth-of-type(...)`, `:nth-last-of-type(...)`, `:only-of-type`.
- `:not(...)` – atrenka tai, kas neatitinka nurodytos sąlygos.

### Kaip skaityti jo schemas?

PDF dešinėje esantys **mėlyni pažymėti langeliai** parodo, **kuriems HTML elementams selektorius tinka**. Pilki / nepažymėti langeliai – kuriems netinka. Kairėje yra selektoriaus pavadinimas ir CSS rašymo būdas, viduryje – trumpas jo aprašymas.

> [!example] Pavyzdys
> Jei pamatysi `div > a`, žiūrėk į schemą: bus pasirinktos tik tos nuorodos, kurios yra tiesioginiai `div` vaikai, o ne nuorodos giliau įdėtame elemente.


## 16. Pilnas mažas praktinis pavyzdys

Šitą kodą gali įdėti į `index.html` ir pats keisti spalvas.

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title>CSS selektoriai</title>
    <style>
        body {
            font-family: Arial;
        }

        h1, h2 {
            color: darkblue;
        }

        .kortele {
            background-color: lightgray;
            padding: 15px;
        }

        .svarbu {
            color: red;
        }

        .kortele p {
            font-size: 18px;
        }

        input[required] {
            border: 2px solid green;
        }

        button:hover {
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <h1>Mano puslapis</h1>

    <div class="kortele">
        <h2>Informacija</h2>
        <p class="svarbu">Svarbus tekstas</p>
        <p>Paprastas tekstas</p>
    </div>

    <form action="#">
        <label for="vardas">Vardas:</label>
        <input type="text" id="vardas" name="vardas" required>
        <button type="submit">Siųsti</button>
    </form>
</body>
</html>
```

**Kas čia panaudota?**
1. `h1, h2` – abi antraštės tamsiai mėlynos.
2. `.kortele` – fonas ir tarpai aplink turinį.
3. `.svarbu` – svarbaus teksto spalva.
4. `.kortele p` – visos pastraipos kortelės viduje turi 18px šriftą.
5. `input[required]` – tik privalomas įvedimo laukelis žaliu rėmeliu.
6. `button:hover` – pasikeičia mygtuko fonas užvedus pelę.
