---
tags:
  - html
  - css
  - konspektas
  - pradedantiesiems
  - box-model
  - spalvos
tema: "CSS: dėžutės modelis, matavimo vienetai ir spalvos"
data: 2026-10-20
saltinis: "03. CSS – Dėžutės modelis, matavimo vienetai, spalvos (39 skaidrės)"
---

# 10 – CSS: dėžutės modelis, matavimo vienetai ir spalvos

> [!abstract] Apie temą
> Šiame konspekte pagal 39 paskaitos skaidres nagrinėjami CSS dėžutės modelis, elementų matmenys, turinio perpildymas, HTML šakninis elementas, CSS reikšmių tipai, absoliutūs ir santykiniai matavimo vienetai, spalvų formatai ir skaidrumas, rėmeliai, šešėliai bei skaidrėse pateiktos praktinės užduotys.

## Turinys

- [[#1. Dėžutės modelis (Box Model)]]
- [[#2. `box-sizing` – kaip skaičiuojami matmenys]]
- [[#3. `overflow` – kai turinys netelpa]]
- [[#4. HTML šakninis elementas ir elementų ryšiai]]
- [[#5. CSS savybių reikšmių tipai]]
- [[#6. Absoliutūs CSS matavimo vienetai]]
- [[#7. Santykiniai CSS matavimo vienetai]]
- [[#8. `em`, `rem` ir procentų skaičiavimo pavyzdžiai]]
- [[#9. CSS spalvų užrašymo būdai]]
- [[#10. Alfa kanalas – spalvų skaidrumas]]
- [[#11. `opacity` ir spalvos alfa kanalo skirtumas]]
- [[#12. Spalvų paletės ir šriftų deriniai]]
- [[#13. Rėmeliai – `border`]]
- [[#14. Šešėliai – `box-shadow`]]
- [[#15. Praktika pagal skaidres]]
- [[#16. Pagrindinių savybių atmintinė]]
- [[#17. Naudingos nuorodos]]

---

## 1. Dėžutės modelis (Box Model)

**Dėžutės modelis** – tai būdas, kuriuo naršyklė skaičiuoja ir atvaizduoja HTML elementui reikalingą vietą. Kiekvieną elementą galima įsivaizduoti kaip stačiakampę dėžutę.

Dėžutę sudaro keturios zonos (nuo vidaus į išorę):

1. **`content`** – turinys (tekstas, paveikslėlis ir pan.). `width` ir `height` nusako turinio arba visos dėžutės matmenis, priklausomai nuo `box-sizing`.
2. **`padding`** – vidinė paraštė: atstumas nuo turinio iki rėmelio.
3. **`border`** – rėmelis, supantis turinį ir `padding`.
4. **`margin`** – išorinė paraštė: tarpas aplink elementą, už rėmelio.

```text
margin (išorinė erdvė)
┌────────────────────────────────┐
│ border                         │
│  ┌──────────────────────────┐  │
│  │ padding                  │  │
│  │  ┌────────────────────┐  │  │
│  │  │ content            │  │  │
│  │  └────────────────────┘  │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

> [!important] Skirtumas
> `padding` ir `border` priklauso elemento dėžutei; `margin` yra už jos ribų ir naudojamas atstumui tarp elementų.

### Pavyzdys

**HTML:**

```html
<div class="dezute">Sveikas pasauli!</div>
```

**CSS:**

```css
.dezute {
    width: 200px;
    padding: 20px;
    border: 3px solid blue;
    margin: 30px;
    background-color: lightblue;
}
```

- Turinys yra `200px` pločio (naudojant numatytą `content-box`).
- Iki rėmelio iš abiejų pusių yra po `20px` vidinės paraštės.
- Rėmelio storis – `3px` iš abiejų pusių.
- Išoriniai tarpai – po `30px`.
- Dėžutės plotis **be margin**: `200 + 20 + 20 + 3 + 3 = 246px`.
- Užimamas horizontalus plotas **su abiem margin**, jei nėra kitų išdėstymo aplinkybių: `246 + 30 + 30 = 306px`.

### Kuris tarpas kam skirtas?

| Norima pakeisti | Savybė |
|---|---|
| Atstumą nuo teksto iki rėmelio | `padding` |
| Tarpą tarp atskirų blokų | `margin` |
| Rėmelio storį, spalvą, linijos tipą | `border` |
| Turinio plotį | `width` |
| Turinio aukštį | `height` |

---

## 2. `box-sizing` – kaip skaičiuojami matmenys

`box-sizing` nusako, ką apima nurodyti `width` ir `height`.

### `content-box` – numatytoji reikšmė

```css
.box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

`width: 200px` yra **tik turinio** plotis. Bendras dėžutės plotis: `200 + 40 + 10 = 250px` (be `margin`).

### `border-box` – dažnai patogesnis variantas

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

`width: 200px` dabar apima **turinį, vidines paraštes ir rėmelį**. Pats turinys gauna `200 - 40 - 10 = 150px` pločio.

| Savybė | `content-box` | `border-box` |
|---|---|---|
| Ką reiškia `width`? | Turinio plotį | Dėžutės plotį su `padding` ir `border` |
| Ar `padding` padidina bendrą plotį? | Taip | Ne, telpa į nurodytą plotį |
| Ar `margin` patenka į `width`? | Ne | Ne |

Dažnai visam puslapiui naudojama:

```css
* {
    box-sizing: border-box;
}
```

Šita taisyklė nustato visiems elementams lengviau numatomus dėžutės matmenis.

---

## 3. `overflow` – kai turinys netelpa

`overflow` nusako, ką daryti su turiniu, kuris išlenda už elemento ribų.

| Reikšmė | Veikimas |
|---|---|
| `visible` | Numatytasis variantas: perteklinis turinys gali matytis už dėžutės |
| `hidden` | Netelpantis turinys paslepiamas; kai kuriais atvejais slinkimas galimas programiškai |
| `scroll` | Sukuriamas slenkamas turinio plotas; slinkimo juostų rodymas priklauso ir nuo sistemos |
| `auto` | Slinkimo galimybė atsiranda, kai turinys netelpa |
| `clip` | Perteklinis turinys nukerpamas, nesukuriant slenkamo turinio ploto |

**HTML:**

```html
<div class="langas">
    Čia labai ilgas tekstas, kuris gali netilpti į mažą dėžutę.
    Čia labai ilgas tekstas, kuris gali netilpti į mažą dėžutę.
    Čia labai ilgas tekstas, kuris gali netilpti į mažą dėžutę.
</div>
```

**CSS:**

```css
.langas {
    width: 200px;
    height: 70px;
    border: 2px solid black;
    overflow: auto;
}
```

Kai tekstas nebetelpa į `70px` aukščio dėžutę, galima slinkti jos turinį.

### `overflow-x` ir `overflow-y`

```css
.langas {
    overflow-x: hidden;
    overflow-y: auto;
}
```

- `x` reiškia horizontalią kryptį.
- `y` reiškia vertikalią kryptį.

---

## 4. HTML šakninis elementas ir elementų ryšiai

**Šakninis elementas (root)** – aukščiausias HTML dokumento elementas, kuriame yra visa dokumento struktūra. Tai `<html>`.

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title>Pavyzdys</title>
</head>
<body>
    <div>
        <p>Tekstas <span>viduje</span></p>
    </div>
</body>
</html>
```

- `<html>` – šakninis elementas.
- `<head>` ir `<body>` – tiesioginiai `<html>` vaikai.
- `<div>` – `<body>` vaikas.
- `<p>` – `<div>` vaikas.
- `<span>` – `<p>` vaikas.

Šis ryšys svarbus CSS paveldėjimui ir santykiniams matavimo vienetams. Pavyzdžiui, `rem` remiasi šakniniu (`html`) šrifto dydžiu.

---

## 5. CSS savybių reikšmių tipai

Skaidrėse pateikiamos keturios naudingos reikšmių kategorijos: **skaitinės**, **procentinės**, **spalvos**, **funkcijos**.

### 5.1 Skaitinės

```css
h2, h3 {
    font-size: 20px;
    line-height: 1.5;
}
```

`font-size: 20px` nurodo šrifto dydį. `line-height: 1.5` nurodo eilutės aukščio daugiklį be matavimo vieneto: jei šriftas `20px`, eilutės aukštis yra `30px`.

### 5.2 Procentinės

```css
h2, h3 {
    font-size: 150%;
}
```

Šriftas bus 1,5 karto didesnis už tėvinio elemento apskaičiuotą šrifto dydį. Jei tėvo dydis `20px`, gausime `30px`.

### 5.3 Spalvos

```css
h2 {
    color: green;
}

h3 {
    color: #008000;
}
```

Abi reikšmės nusako žalią spalvą, tik skirtingu užrašymo būdu.

### 5.4 Funkcijos

```css
h2 {
    background-color: rgba(255, 0, 0, 0.5);
}

h3 {
    background-image: url("img/fonas.jpg");
}
```

- `rgba()` nustato spalvos komponentus ir alfa kanalą.
- `url()` nurodo naudojamo failo arba internetinio ištekliaus adresą.
- Santykinis `url("img/fonas.jpg")` CSS faile skaičiuojamas nuo **to CSS failo vietos**.

---

## 6. Absoliutūs CSS matavimo vienetai

Skaidrėse aptariami vienetai: `mm`, `cm`, `in`, `pt` ir `px`.

| Vienetas | Reikšmė | Naudojimas |
|---|---|---|
| `px` | CSS pikselis | Dažnas ekrano išdėstyme |
| `pt` | Taškas | Spaudos tipografijoje |
| `mm` | Milimetras | Spausdinant |
| `cm` | Centimetras | Spausdinant |
| `in` | Colis | Fiziniai dydžiai ir spaudos maketai |

```css
.kortele {
    width: 300px;
    border: 2px solid navy;
}

@media print {
    .kortele {
        width: 10cm;
    }
}
```

> [!note] CSS pikselis nėra tas pats, kas ekrano fizinis pikselis
> `px` yra naršyklės naudojamas loginis vienetas. Vienam CSS pikseliui ekrane gali atitikti keli fiziniai pikseliai.

### DPR – Device Pixel Ratio

DPR parodo santykį tarp **fizinių ekrano pikselių** ir **CSS pikselių**.

- DPR = 1 → vienam CSS pikseliui paprastai tenka 1 × 1 fizinių pikselių sritis.
- DPR = 2 → vienam CSS pikseliui paprastai tenka 2 × 2 fizinių pikselių sritis.

DPR priklauso nuo ekrano tankio bei mastelio nustatymų.

---

## 7. Santykiniai CSS matavimo vienetai

**Santykiniai vienetai** priklauso nuo tam tikro konteksto: šrifto dydžio, tėvinio elemento arba naršyklės peržiūros srities.

### `%` – procentai

```css
.tevas {
    width: 400px;
}

.vaikas {
    width: 50%;
}
```

Jei tėvinio elemento turinio plotis `400px`, vaiko `width: 50%` bus `200px` (esant įprastam išdėstymui).

### `em` – priklauso nuo šrifto dydžio

`font-size` savybei `em` skaičiuojamas pagal **tėvinio elemento** šrifto dydį. Kitoms savybėms, pavyzdžiui, `padding`, `em` paprastai remiasi paties elemento šrifto dydžiu.

```css
.tevas {
    font-size: 20px;
}

.vaikas {
    font-size: 2em;
}
```

Vaiko šriftas bus `40px`.

### `rem` – šakninio elemento šriftas

```css
html {
    font-size: 16px;
}

p {
    font-size: 2rem;
}
```

`2rem` = `2 × 16px` = **32px**. Jei tarpinis tėvinis elementas šriftą pakeičia, šio skaičiavimo tai nekeičia.

### `vw` – peržiūros srities plotis

`1vw` = **1 % naršyklės peržiūros srities pločio**.

```css
.hero {
    width: 50vw;
}
```

Jei peržiūros plotis `1200px`, elementas bus `600px` pločio.

### `vh` – peržiūros srities aukštis

`1vh` = **1 % peržiūros srities aukščio**.

```css
.hero {
    height: 50vh;
}
```

Jei peržiūros aukštis `800px`, elementas bus `400px` aukščio.

| Vienetas | Nuo ko priklauso? | Pavyzdys |
|---|---|---|
| `%` | Nuo konkrečios savybės atskaitos dydžio | `width: 50%` |
| `em` | Nuo šrifto dydžio (kontekstas priklauso nuo savybės) | `font-size: 2em` |
| `rem` | Nuo `<html>` šrifto dydžio | `font-size: 1.5rem` |
| `vw` | Nuo peržiūros srities pločio | `width: 50vw` |
| `vh` | Nuo peržiūros srities aukščio | `height: 50vh` |

### Kada ką naudoti?

- `px` – tiksliems kraštinių storiams ir kai reikia konkrečių dydžių.
- `%` – pločiams, kurie priklauso nuo tėvinio bloko.
- `rem` – nuosekliam šriftų dydžių ir tarpų masteliui.
- `em` – kai dydis turi keistis kartu su konkretaus elemento šriftu.
- `vw` / `vh` – kai dydį reikia susieti su naršyklės lango matmenimis.

---

## 8. `em`, `rem` ir procentų skaičiavimo pavyzdžiai

### Skaidrių pavyzdys: 1em ir 2em

```html
<main>
    <p class="pastraipa-1">Pastraipa 1em</p>
    <p class="pastraipa-2">Pastraipa 2em</p>
</main>
```

```css
main {
    font-size: 10px;
}

.pastraipa-1 {
    font-size: 1em;
}

.pastraipa-2 {
    font-size: 2em;
}
```

**Rezultatas:** pirma pastraipa `10px`, antra `20px`.

### Skaidrių pavyzdys: 1rem ir 2rem

```css
html {
    font-size: 10px;
}

main {
    font-size: 20px;
}

.pastraipa-1 {
    font-size: 1rem;
}

.pastraipa-2 {
    font-size: 2rem;
}
```

**Rezultatas:** pirma pastraipa `10px`, antra `20px`. `main` nustatytas `20px` čia nepakeičia `rem` bazės.

### Skaidrių pavyzdys: procentai `<header>` viduje

```html
<header>
    <h2>Lorem</h2>
    <h4>Lorem</h4>
    <h6>Lorem</h6>
</header>
```

```css
header {
    font-size: 2em;
    color: green;
}

h2 { font-size: 100%; }
h4 { font-size: 50%; }
h6 { font-size: 25%; }
```

Jei `<header>` tėvinio elemento šriftas yra `16px`, tai `<header>` šriftas bus `2 × 16 = 32px`. Tuomet:

| Elementas | Skaičiavimas | Dydis |
|---|---|---|
| `h2` | 100 % × 32px | **32px** |
| `h4` | 50 % × 32px | **16px** |
| `h6` | 25 % × 32px | **8px** |

**Pastaba:** `8px` gaunama tik esant nurodytai `16px` bazei. Skaidrėse paaiškintas procentų principas; kitokia bazė duos kitokius dydžius.

---

## 9. CSS spalvų užrašymo būdai

Skaidrėse rodomi spalvų pavadinimai, HEX, trumpasis HEX, RGB, procentiniai RGB ir papildomi spalvų modeliai.

### Pagrindiniai būdai

```css
p { color: red; }
p { color: #ff0000; }
p { color: #f00; }
p { color: rgb(255, 0, 0); }
p { color: rgb(100%, 0%, 0%); }
```

Visuose penkiuose pavyzdžiuose tai yra ta pati ryškiai raudona spalva.

### HEX – šešioliktainis kodas

`#RRGGBB` turi tris spalvų poras:

- `RR` – raudona.
- `GG` – žalia.
- `BB` – mėlyna.

Pavyzdžiai:

| HEX | Spalva |
|---|---|
| `#000000` | Juoda |
| `#ffffff` | Balta |
| `#ff0000` | Raudona |
| `#00ff00` | Žalia |
| `#0000ff` | Mėlyna |

Trumpas `#f00` atitinka `#ff0000`, nes kiekvienas simbolis pakartojamas du kartus.

### RGB

```css
p {
    color: rgb(255, 0, 0);
}
```

RGB komponentai tradicinėje skaitinėje sintaksėje yra nuo `0` iki `255`.

### Kiti skaidrėse parodyti formatai

| Formatas | Mintis |
|---|---|
| `HSL` | Atspalvis, sodrumas, šviesumas |
| `HWB` | Atspalvis, baltumo ir juodumo dalys |
| `LAB` | Spalvų erdvė, paremta šviesumu ir spalvų ašimis |
| `LCH` | Šviesumas, chroma (sodrumo pobūdžio dydis), atspalvis |
| `OKLCH` | Šiuolaikinė spalvų erdvė su šviesumo, chromos ir atspalvio parametrais |

```css
.antraste {
    color: hsl(0, 100%, 50%);
}
```

Ši reikšmė taip pat nurodo raudoną spalvą.

---

## 10. Alfa kanalas – spalvų skaidrumas

**Alfa kanalas (`alpha`)** nusako spalvos **nepermatomumą** nuo `0` iki `1`.

| Alfa | Reikšmė |
|---|---|
| `0` | Visiškai permatoma spalva |
| `0.5` | Pusiau permatoma spalva |
| `1` | Visiškai nepermatoma spalva |

### `rgba()` tradicinė sintaksė

```css
h2 {
    background-color: rgba(255, 0, 0, 0.5);
}
```

- `255` – raudona.
- `0` – žalia.
- `0` – mėlyna.
- `0.5` – pusė nepermatomumo.

### Alfa HEX kode

```css
p {
    color: #ff000080;
}
```

Pabaigos `80` atitinka maždaug 50 % nepermatomumą. Aštuonių skaitmenų HEX forma yra `#RRGGBBAA`.

### Tradicinė ir šiuolaikinė funkcijų sintaksė

```css
p {
    color: rgba(255, 0, 0, 0.5);
}

h2 {
    color: rgb(255 0 0 / 0.5);
}

h3 {
    color: hsla(0, 100%, 50%, 0.5);
}

h4 {
    color: hsl(0 100% 50% / 0.5);
}
```

Visos keturios reikšmės aprašo pusiau permatomą raudoną spalvą.

---

## 11. `opacity` ir spalvos alfa kanalo skirtumas

`opacity` keičia **viso elemento** nepermatomumą, o spalvos alfa kanalas keičia **tik atitinkamą spalvą**.

### `opacity` veikia visą elementą

```css
.kortele {
    background-color: red;
    color: white;
    opacity: 0.5;
}
```

Pusiau permatomas taps kortelės fonas **ir tekstas, rėmelis bei visas jos turinys**.

### Skaidrus tik fonas

```css
.kortele {
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
}
```

Pusiau permatoma tik raudona fono spalva, o baltas tekstas lieka įprastai nepermatomas.

> [!tip] Praktinis pasirinkimas
> Jei nori permatomo kortelės fono, bet ryškaus teksto – keisk `background-color` alfa kanalą, ne viso elemento `opacity`.

---

## 12. Spalvų paletės ir šriftų deriniai

**Spalvų paletė** – tarpusavyje derančių spalvų rinkinys. Skaidrėse rodomi pavyzdžiai, kaip spalvas galima paimti iš paveikslėlio ir panaudoti kuriant puslapio dizainą.

### Paletės sudarymo eiga

1. Pasirenkamas paveikslėlis arba pagrindinė spalva.
2. Iš jo išgaunamos kelios tarpusavyje derančios spalvos.
3. Pasirenkamos fono, teksto ir akcentų spalvos.
4. Patikrinama, kad tekstas būtų įskaitomas.

```css
body {
    background-color: #f2eee6;
    color: #18333e;
}

button {
    background-color: #287d80;
    color: white;
}
```

Skaidrėse nurodytos svetainės:

- [Adobe Color](https://color.adobe.com/) – spalvų paletės, „Extract from an Image“.
- [Fontpair](https://www.fontpair.co/) – šriftų deriniai.
- [Creative Bloq](https://www.creativebloq.com/) – dizaino pavyzdžiai ir straipsniai.

---

## 13. Rėmeliai – `border`

Rėmelis turi tris pagrindines dalis:

- `border-width` – storis;
- `border-style` – linijos tipas;
- `border-color` – spalva.

### Ilgoji forma

```css
p {
    border-width: 2px;
    border-style: solid;
    border-color: green;
}
```

### Trumpoji forma

```css
p {
    border: 2px solid green;
}
```

Abi taisyklės nurodo vienodą rėmelį.

### Atskiros kraštinės

```css
p {
    border-top: 3px solid red;
    border-right: 2px dashed blue;
    border-bottom: 1px dotted green;
    border-left: 4px solid black;
}
```

### Galimi linijų tipai

| Reikšmė | Reikšmė lietuviškai |
|---|---|
| `solid` | Vientisa linija |
| `dotted` | Taškuota linija |
| `dashed` | Brūkšniuota linija |
| `double` | Dviguba linija |
| `none` | Be rėmelio |

> [!important]
> Jei nustatytas tik `border-width`, bet nėra matomo `border-style`, rėmelis nebus rodomas. Pagal numatytuosius nustatymus rėmelio stilius yra `none`.

### Užapvalinti kampai – `border-radius`

```css
.kortele {
    border: 2px solid navy;
    border-radius: 15px;
}
```

`border-radius: 50%` ypač dažnai naudojamas apvalioms kvadratinėms profilio nuotraukoms.

---

## 14. Šešėliai – `box-shadow`

`box-shadow` prideda dėžutės šešėlį.

Bendra sandara:

```css
.box {
    box-shadow: 10px 5px 5px black;
}
```

Reikšmių reikšmės iš eilės:

1. `10px` – horizontalus poslinkis į dešinę (`offset-x`);
2. `5px` – vertikalus poslinkis žemyn (`offset-y`);
3. `5px` – suliejimo spindulys (`blur`);
4. `black` – šešėlio spalva.

### Su išplitimu (`spread`)

```css
.box {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
```

Ketvirtasis ilgis `1px` reiškia šešėlio išplitimą.

### Vidinis šešėlis

```css
.box {
    box-shadow: inset 5px 5px gold;
}
```

`inset` perkelia šešėlį į dėžutės vidų.

### Keli šešėliai

```css
.box {
    box-shadow: 3px 3px red, -10px 0 8px olive;
}
```

Šešėlius galima atskirti kableliais.

> [!note] Svarbu
> Jei viename selektoriuje kelis kartus parašytas `box-shadow` be kaskados ypatumų, laimės vėlesnė deklaracija. Norint matyti kelis šešėlius, reikia juos surašyti **vienoje deklaracijoje, atskyrus kableliais**.

---

## 15. Praktika pagal skaidres

Šiame skyriuje aprašytos **skaidrėse pateiktos užduočių sąlygos**, o ne tariamai jau atlikti darbai. Kai kurioms užduotims reikia atskirų pradinių HTML/CSS failų – jų šiame PDF nėra.

### Praktika 1 – stilizuota sentencija (32 skaidrė)

Užduotis: sukurti stilizuotą trumpą posakį ar sentenciją. Būtina naudoti vidines ir išorines paraštes, rėmelio savybes, centruoti tekstą ir bloką; papildomai galima panaudoti ikonėlę. Skaidrėje pavaizduotas „Keep Calm and Carry On“ plakato tipo variantas.

**Paprastas savarankiško mokymosi pavyzdys:**

```html
<div class="plakatas">
    <h1>KEEP CALM</h1>
    <p>AND LEARN CSS</p>
</div>
```

```css
.plakatas {
    width: 240px;
    margin: 40px auto;
    padding: 30px;
    border: 4px solid white;
    background-color: darkred;
    color: white;
    text-align: center;
}
```

`margin: 40px auto` padeda centruoti fiksuoto pločio bloką horizontaliai, o `text-align: center` centruoja jo viduje esantį tekstą.

### Praktika 2 – gyvūno, žmogaus arba personažo kortelė (33 skaidrė)

Kortelėje turi būti:

- antraštė;
- paveikslėlis;
- įdomus faktas;
- bendri bruožai;
- trumpas aprašymas.

Reikalavimai: kortelės plotis `300px`, aukštis pagal turinį, horizontalus centravimas, rėmelis, vidinės paraštės, pasirinktas Google šriftas, suderintos spalvos. Paryškinimui ir panašiam dekoravimui naudoti CSS savybes vietoj specialių HTML formatavimo žymių.

### Praktika 3 – kortelė su ikonėlėmis (34 skaidrė)

Pagal iliustraciją reikia naudoti vidines ir išorines paraštes, rėmelį ir ikonėles. Pavyzdyje rodoma balta kortelė su apvalia nuotrauka viršuje, tekstu, įvertinimo žvaigždutėmis ir šešėliu.

### Praktika 4 – sumuštinio iliustracija (35 skaidrė)

Duotas atskiras `indexSumustekas.html` failas (pačiame PDF failo kodo nėra). Reikia taikyti:

- `border-radius`;
- `border-style`;
- `box-shadow`.

Skaidrėje matomas stilizuotas daugiasluoksnis sumuštinis iš formų.

### Praktika 6 – registracijos formos stilizavimas (36 skaidrė)

Pateikiami atskiri pradiniai HTML ir CSS failai; formą reikia stilizuoti pagal skaidrėje parodytą dizainą. Pavyzdyje matoma registracijos forma su įvesties laukais, pasirinkimais ir žaliu registracijos mygtuku.

### Papildoma praktika – paveikslėlio rėmelis (38 skaidrė)

Užduotis: pritaikyti dekoratyvų **paveikslėlio rėmelį** aplink tekstinį bloką.

### Papildoma praktika – keturi susieti tinklalapiai (39 skaidrė)

Užduotis: sukurti keturis puslapius, sujungti juos tarpusavio nuorodomis ir sukurti klasę aktyviam puslapiui parodyti.

**Pavyzdys, kaip atrodo aktyvios nuorodos klasė:**

```html
<a href="index.html" class="aktyvus">Pradžia</a>
<a href="apie.html">Apie</a>
```

```css
.aktyvus {
    background-color: navy;
    color: white;
}
```

---

## 16. Pagrindinių savybių atmintinė

| CSS savybė | Kam naudojama |
|---|---|
| `width` | Pločio nustatymui |
| `height` | Aukščio nustatymui |
| `margin` | Išoriniam tarpui |
| `padding` | Vidiniam tarpui |
| `border` | Rėmeliui |
| `box-sizing` | Pločio ir aukščio skaičiavimo modeliui |
| `overflow` | Perteklinio turinio rodymui |
| `font-size` | Šrifto dydžiui |
| `line-height` | Eilutės aukščiui |
| `color` | Teksto spalvai |
| `background-color` | Fono spalvai |
| `background-image` | Fono paveikslėliui |
| `opacity` | Viso elemento nepermatomumui |
| `border-radius` | Kampų užapvalinimui |
| `box-shadow` | Šešėliams |

### Greiti skaičiavimo priminimai

- `content-box`: bendras plotis = `width + padding-left + padding-right + border-left + border-right`.
- `border-box`: į `width` jau įeina `padding` ir `border`.
- `1rem` = šakninio `<html>` šrifto dydis.
- `2rem` = du kartus šakninio elemento šrifto dydis.
- `1vw` = 1 % peržiūros srities pločio.
- `1vh` = 1 % peržiūros srities aukščio.
- `rgba(..., 0.5)` = pusiau permatoma **spalva**.
- `opacity: 0.5` = pusiau permatomas **visas elementas**.

---

## 17. Naudingos nuorodos

Šie mokymosi šaltiniai pateikti paskaitos skaidrėse:

- [Dėžės modelis – vaizdo medžiaga](https://www.youtube.com/watch?v=rIO5326FgPE)
- [Dėžės modelis – kartojimas](https://www.youtube.com/watch?v=WlGQdgy-M6w)
- [CSS matavimo vienetų kartojimas](https://www.youtube.com/watch?v=-GR52czEd-0)
- [Sąrašų stilizavimas](https://www.youtube.com/watch?v=jcThx0U066w)
- [Nuorodų stilizavimas](https://www.youtube.com/watch?v=sORF-Awir70)
- [Centravimas CSS](https://css-tricks.com/centering-css-complete-guide/)
- [Spalvų deriniai – Coolors](https://coolors.co/)
- [Spalvų paletės – Adobe Color](https://color.adobe.com/)
- [CSS `rem` vienetai](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)
- [Šriftų poros – Fontpair](https://www.fontpair.co/)

---

**Paskaitos šaltinis:** „Dėžutės modelis, matavimo vienetai, spalvos“, 39 skaidrės. Konspektas išlaiko skaidrių temų tvarką, papildomai išskleisdamas jų kodo pavyzdžius ir matmenų skaičiavimus. Praktikos sąlygos pateiktos atskirai nuo paaiškinamųjų pavyzdžių.
