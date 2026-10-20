---
tags: [html-css, konspektas]
---

# HTML – display, lentelės ir nuorodos

> [!info] Apie užrašus
> Struktūruoti mokymosi užrašai pagal pateiktą paskaitų medžiagą. Sąvokos paaiškintos su pavyzdžiais, kad būtų galima jas pritaikyti HTML ir CSS kode.

> [!info] Pamokos konspektas
> TECHIN. Išsamūs užrašai pagal skaidres su paprastais pavyzdžiais ir dažniausiomis klaidomis. Tinka kartojimui ir praktinėms užduotims.

## 1. Kas yra „by default“?

**By default** reiškia „pagal nutylėjimą“. Net kai nerašome jokio CSS, naršyklė HTML elementams pati priskiria tam tikrą išvaizdą. Tai vadinama **User Agent Stylesheet**.

Pavyzdžiai:

- `<h1>` pagal nutylėjimą yra didelė, paryškinta antraštė, kuri prasideda naujoje eilutėje.
- `<a>` nuoroda dažniausiai mėlyna ir pabraukta.
- `<p>` turi tarpus viršuje ir apačioje.
- `<ul>` turi sąrašo ženklelius ir įtrauką.

```html
<h1>Mano puslapis</h1>
<p>Paprastas tekstas.</p>
<a href="https://example.com">Nuoroda</a>
```

Nors neparašėme CSS, šie elementai jau atrodo skirtingai. Spalva ar šrifto dydis gali skirtis pagal naršyklę.

## 2. Savybė `display`

`display` nurodo, kaip HTML elementas išsidėsto puslapyje ir kaip išdėsto viduje esančius elementus.

### `display: block`

- Paprastai prasideda **naujoje eilutėje**.
- Pagal nutylėjimą užima visą laisvą tėvinio elemento plotį.
- Galima keisti `width`, `height`, `padding`, `margin`.
- Pavyzdžiai: `<div>`, `<p>`, `<h1>`, `<h2>`.

```html
<p style="background-color: lightblue;">Pirmas tekstas</p>
<p style="background-color: lightgreen;">Antras tekstas</p>
```

Abu tekstai bus vienas **po kitu**, nes `<p>` yra blokinis elementas.

### `display: inline`

- Elementas lieka toje **pačioje teksto eilutėje**, kol telpa.
- Užima tik reikalingą vietą.
- Įprastiems inline elementams `width` ir `height` neveikia.
- Vertikalūs `margin-top` ir `margin-bottom` neveikia kaip blokiniams elementams.
- Pavyzdžiai: `<a>`, `<span>`, `<strong>`.

```html
<p>Čia yra <span style="color: red;">raudonas</span> žodis.</p>
<p>Paspausk <a href="https://example.com">čia</a>.</p>
```

**Svarbu:** `<img>` irgi išsidėsto inline lygyje, bet yra specialus (replaced) elementas, todėl jam **veikia** `width` ir `height`. Dėl to nuotrauka gali būti didelė, nors ji nesukuria įprasto blokinio elemento.

### `display: inline-block`

Tai derinys: **inline išorėje + block dydžio valdymas**.

- Elementai gali stovėti vienoje eilutėje.
- Galima nustatyti plotį ir aukštį.
- Veikia `padding` ir `margin`.
- Jei nebetelpa, persikelia į kitą eilutę.

```html
<p style="display: inline-block; width: 150px; height: 100px; background-color: red;">Filmas 1</p>
<p style="display: inline-block; width: 150px; height: 100px; background-color: green;">Filmas 2</p>
<p style="display: inline-block; width: 150px; height: 100px; background-color: blue;">Filmas 3</p>
```

Čia trys `<p>` gali atsistoti greta, nors paprastai jie būtų vienas po kitu.

### Greitas palyginimas

| Savybė | `block` | `inline` | `inline-block` |
|---|---|---|---|
| Prasideda nauja eilute | Taip | Ne | Ne |
| `width`, `height` | Veikia | Paprastai ne | Veikia |
| Gali stovėti šalia | Ne (įprastai) | Taip | Taip |
| Pavyzdys | `<div>` | `<span>` | `<div style="display:inline-block">` |

> [!tip] Kaip įsiminti?
> `block` – vienas po kitu. `inline` – kaip žodžiai sakinyje. `inline-block` – kaip mažos dėžutės vienoje eilėje.

## 3. Naudingos CSS savybės

### `border-radius` – apvalūs kampai

```html
<div style="background-color: lightblue; padding: 15px; border-radius: 12px;">Dėžutė</div>
```

### `white-space` – tarpai ir naujos eilutės

- `normal` – įprastas teksto laužymas; keli tarpai dažniausiai sutraukiami į vieną.
- `nowrap` – automatiškai neperkelia teksto į kitą eilutę.
- `pre` – išlaiko tekste esančius tarpus ir eilučių lūžius.
- `pre-wrap` – išlaiko tarpus ir leidžia tekstui persikelti.

```html
<p style="white-space: nowrap;">Šis ilgas tekstas automatiškai nebus perkeltas.</p>
```

### `margin` ir `padding`

**Margin** – tarpas **išorėje** (tarp elemento ir kitų elementų).  
**Padding** – tarpas **viduje** (nuo rėmelio iki turinio).

```html
<div style="margin: 20px; padding: 10px; border: 1px solid black;">Tekstas</div>
```

- `margin-inline` – išoriniai tarpai kairėje ir dešinėje (įprastu LT puslapio rašymo režimu).
- `padding-inline` – vidiniai tarpai kairėje ir dešinėje.
- `margin-block` – išoriniai tarpai viršuje ir apačioje.
- `padding-block` – vidiniai tarpai viršuje ir apačioje.

### `table-layout: fixed`

Skirtas lentelių stulpelių pločio skaičiavimui. Kartu su nurodytu lentelės pločiu stulpeliai dažniausiai paskirstomi pagal nustatytus pločius arba pirmą eilutę, o ne pagal visą turinį. **Tai nebūtinai reiškia visiškai vienodus stulpelius.**

```html
<table style="width: 100%; table-layout: fixed;">
```

## 4. HTML lentelės

Lentelės skirtos duomenims parodyti **eilutėmis ir stulpeliais**.

| Žymė | Ką daro |
|---|---|
| `<table>` | Sukuria lentelę |
| `<tr>` | Sukuria vieną eilutę |
| `<th>` | Antraštės langelis (dažniausiai paryškintas) |
| `<td>` | Paprastas duomenų langelis |
| `<caption>` | Lentelės pavadinimas |

### Paprasčiausia lentelė

```html
<table border="1">
    <tr>
        <th>Vardas</th>
        <th>Amžius</th>
    </tr>
    <tr>
        <td>Jonas</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Ona</td>
        <td>22</td>
    </tr>
</table>
```

**Kaip skaityti:** `<table>` yra visa lentelė, `<tr>` – viena horizontali eilutė, o kiekvienas `<th>` arba `<td>` – vienas langelis toje eilutėje.

`border="1"` – senesnis HTML atributas, bet tinka mokantis paprastų lentelių. Šiuolaikiniame kode rėmeliai dažniausiai kuriami CSS.

### Lentelės rėmeliai ir tarpai

```html
<style>
    table, th, td {
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
    }
    th, td {
        padding: 8px;
    }
</style>
```

- `border` – rėmelis.
- `border-collapse: collapse` – sujungia gretimus langelių rėmelius į vieną liniją.
- `border-spacing` – tarpai tarp langelių, kai rėmeliai nėra sulieti.
- `padding` – atitraukia tekstą nuo langelio kraštų.
- `margin` – veikia pačią lentelę, bet ne įprastus lentelės `<td>` / `<th>` langelius.

### `colspan` – stulpelių sujungimas

`colspan="2"` reiškia, kad **vienas langelis užims dviejų stulpelių vietą**.

```html
<table border="1">
    <tr>
        <th>Vardas</th>
        <th colspan="2">Telefonai</th>
    </tr>
    <tr>
        <td>Jonas</td>
        <td>111111</td>
        <td>222222</td>
    </tr>
</table>
```

Pirmoje eilutėje turime du langelius, tačiau antrasis užima **dviejų langelių plotį**. Antroje eilutėje yra trys atskiri langeliai.

### `rowspan` – eilučių sujungimas

`rowspan="2"` reiškia, kad **vienas langelis užims dviejų eilučių aukštį**.

```html
<table border="1">
    <tr>
        <th>Diena</th>
        <th>Pamoka</th>
    </tr>
    <tr>
        <td rowspan="2">Pirmadienis</td>
        <td>Matematika</td>
    </tr>
    <tr>
        <td>Anglų kalba</td>
    </tr>
</table>
```

**Dažna klaida:** kai parašome `rowspan="2"`, kitoje eilutėje **nebekuriame papildomo tos pačios vietos langelio**.

### `<caption>` – lentelės pavadinimas

```html
<table border="1">
    <caption>Mano pažymiai</caption>
    <tr><th>Dalykas</th><th>Pažymys</th></tr>
    <tr><td>Matematika</td><td>9</td></tr>
</table>
```

`<caption>` rašomas **lentelės viduje**, paprastai iškart po `<table>`.

### Pilnas tvarkaraščio pavyzdys

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title>Tvarkaraštis</title>
</head>
<body>
    <h1>Pamokų tvarkaraštis</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>Diena</th>
            <th>Dalykas</th>
            <th>Klasė</th>
            <th>Pastaba</th>
        </tr>
        <tr>
            <td rowspan="2" bgcolor="lightblue">Pirmadienis</td>
            <td bgcolor="lightgreen">Anglų kalba</td>
            <td rowspan="2" bgcolor="pink">10B</td>
            <td bgcolor="yellow">Testas</td>
        </tr>
        <tr>
            <td bgcolor="orange">Istorija</td>
            <td bgcolor="lightgray">Namų darbai</td>
        </tr>
        <tr>
            <td bgcolor="lightcoral">Antradienis</td>
            <td colspan="2" bgcolor="lightblue">Informatika</td>
            <td bgcolor="pink">Praktinis darbas</td>
        </tr>
    </table>
</body>
</html>
```

`bgcolor`, `cellpadding` ir `cellspacing` yra **senesni HTML atributai**. Mokymosi pavyzdžiuose juos gali sutikti, bet šiuolaikiškai spalvos ir tarpai tvarkomi CSS.

## 5. Elementų centravimas

Kartais reikia, kad lentelė, nuotrauka ar dėžutė būtų **per vidurį horizontaliai**.

### Lentelė per vidurį

```html
<table style="width: 50%; margin-left: auto; margin-right: auto;" border="1">
    <tr><td>Labas!</td></tr>
</table>
```

### `<div>` per vidurį

```html
<div style="width: 50%; margin-left: auto; margin-right: auto; border: 1px solid black;">
    Tekstas
</div>
```

### Nuotrauka per vidurį

```html
<img src="foto.jpg" alt="Nuotrauka" style="width: 300px; display: block; margin-left: auto; margin-right: auto;">
```

**Kodėl paveikslėliui reikia `display: block`?** Nes įprastas `<img>` išsidėsto kaip inline lygio elementas, o horizontalus `margin: auto` tokiu atveju jo necentruoja kaip blokinio elemento.

## 6. Nuorodos – `<a>`

HTML nuoroda kuriama su `<a>` ir atributu `href`.

```html
<a href="https://www.google.com">Google</a>
```

`href` nurodo, **kur nueisime paspaudę nuorodą**. Tekstas tarp `<a>` ir `</a>` yra tai, ką matome puslapyje.

### Absoliutus ir santykinis adresas

**Absoliutus URL** – visas adresas, pvz. `https://example.com/puslapis.html`.

**Santykinis URL** – kelias iki failo, skaičiuojamas nuo dabartinio HTML dokumento vietos, pvz. `pages/datos.html`.

### Tas pats aplankas

Jei abu failai guli greta:

```text
projektas/
├── index.html
└── kontaktai.html
```

```html
<a href="kontaktai.html">Kontaktai</a>
```

### Kitas aplankas viduje

```text
projektas/
├── index.html
└── pages/
    └── datos.html
```

Nuoroda iš `index.html`:

```html
<a href="pages/datos.html">Datos</a>
```

### Vienu aplanku atgal – `../`

Iš `pages/datos.html` norime grįžti į `index.html`:

```html
<a href="../index.html">Pradžia</a>
```

`../` reiškia **grįžti vienu aplanku aukščiau**. `../../` – dviem aplankais aukščiau.

### Kelias nuo svetainės šaknies – `/`

```html
<a href="/projektas/index.html">Pradžia</a>
```

Pradinis `/` reiškia kelią nuo **svetainės šakninio adreso**, o ne automatiškai nuo tavo projekto aplanko. Naudojant VS Code Live Server, reikia atsižvelgti, kuris aplankas paleistas kaip serverio šaknis.

## 7. Nuotraukų keliai – pagal mūsų praktinę užduotį

Tokia buvo aplankų struktūra:

```text
html/
├── img/
│   ├── ispanija.png
│   ├── poilsis.png
│   └── kreta.png
└── namudarbas/
    ├── index.html
    └── pages/
        ├── poilsines.html
        └── datos.html
```

**Iš `namudarbas/index.html` į paveikslėlį:**

```html
<img src="../img/ispanija.png" width="600" alt="Ispanija">
```

Iš `namudarbas/pages/poilsines.html` į paveikslėlį:

```html
<img src="../../img/poilsis.png" width="400" alt="Poilsis">
<img src="../../img/kreta.png" width="400" alt="Kreta">
```

**Kodėl `../../`?** Pirmasis `../` grąžina iš `pages` į `namudarbas`, antrasis – iš `namudarbas` į `html`, tada einame į `img`.

> [!warning] Jei nerodo paveikslėlio
> Patikrink failo vardą, jo plėtinį (`.png`, `.jpg`), didžiąsias raides ir aplankų struktūrą. `href` skirtas nuorodoms, o `src` – paveikslėlio šaltiniui.

### Trys susieti puslapiai

**`index.html`:**

```html
<a href="index.html">Paskutinė minutė</a>
<a href="pages/poilsines.html">Poilsinės kelionės</a>
<a href="pages/datos.html">Kelionių datos</a>
```

**`pages/poilsines.html`:**

```html
<a href="../index.html">Paskutinė minutė</a>
<a href="poilsines.html">Poilsinės kelionės</a>
<a href="datos.html">Kelionių datos</a>
```

Atkreipk dėmesį: nuorodos skiriasi priklausomai nuo **kurio failo** jas rašome.

## 8. Dar viena naudinga praktika: sąrašai

**`<ul>`** – sąrašas su ženkleliais. **`<ol>`** – numeruotas sąrašas. **`<li>`** – sąrašo punktas.

```html
<ul>
    <li>Matematika</li>
    <li>Lietuvių kalba</li>
</ul>

<ol>
    <li>Atidaryti VS Code</li>
    <li>Sukurti index.html</li>
    <li>Paleisti naršyklėje</li>
</ol>
```
