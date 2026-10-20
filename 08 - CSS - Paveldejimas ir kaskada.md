---
tags: [html-css, konspektas]
---

# CSS – paveldėjimas ir kaskada

> [!info] Apie užrašus
> Struktūruoti mokymosi užrašai pagal pateiktą paskaitų medžiagą. Sąvokos paaiškintos su pavyzdžiais, kad būtų galima jas pritaikyti HTML ir CSS kode.

## CSS paveldėjimas, specifikacija ir kaskada

> [!info] Ką mokėmės
> Pagal TECHIN Paveldėjimas.pdf“ (11 skaidrių)**. Užrašai 

## 1. Kas yra CSS paveldėjimas?

**Paveldėjimas (inheritance)** – kai vaikinis HTML elementas automatiškai perima tam tikrą CSS savybę iš savo tėvinio elemento.

- **Tėvinis elementas** – tas, kurio viduje yra kitas elementas.
- **Vaikinis elementas** – tas, kuris įdėtas į tėvinį.
- Dažniausiai paveldimos **teksto ir šrifto** savybės.

**HTML:**
```html
<div>
  <p>Labas, aš esu div viduje.</p>
</div>
```

**CSS:**
```css
div {
  color: blue;
}
```

**Rezultatas:** `p` tekstas mėlynas, nors `p` taisyklės nerašėme. Jis paveldėjo `color` iš `div`.

> „Paveldėjimas – kai vaikinis elementas perima tam tikras CSS savybes iš tėvinio elemento, pavyzdžiui, teksto spalvą.“

### HTML šeimos medis (DOM)

```text
body
├── h1
├── p
│   ├── em
│   └── a
│       └── strong
└── ol
    ├── li
    ├── li
    └── li
```

Pavyzdžiui, `em` yra `p` vaikas, o `p` yra `body` vaikas. Paveldimos savybės gali ateiti per kelis protėvių lygius.

## 2. Kokios savybės paveldimos?

| Savybė | Paveldima automatiškai? | Kam naudojama? |
|---|---|---|
| `color` | Taip | Teksto spalva |
| `font-family` | Taip | Šriftas |
| `font-size` | Taip | Šrifto dydis |
| `font-weight` | Taip | Šrifto storis |
| `text-align` | Taip | Teksto lygiavimas |
| `line-height` | Taip | Eilučių aukštis |
| `margin` | Ne | Išoriniai tarpai |
| `padding` | Ne | Vidiniai tarpai |
| `border` | Ne | Rėmelis |
| `width`, `height` | Ne | Dydžiai |
| `background-color` | Ne | Fono spalva |
| `background-image` | Ne | Fono paveikslėlis |
| `display` | Ne | Elemento rodymo/išdėstymo tipas |
| `position` | Ne | Pozicionavimo būdas |
| `overflow` | Ne | Perteklinio turinio elgesys |
| `visibility` | Taip | Matomumas |
| `cursor` | Taip | Pelės žymeklio vaizdas |
| `list-style` | Taip | Sąrašo ženkliukų stilius |

**Svarbu:** 5 skaidrėje pažymima, kad „tekstinės savybės paveldimos“ tėra supaprastinimas. Kiekvienai konkrečiai savybei CSS specifikacijoje nurodyta `Inherited: yes` arba `Inherited: no`.

### Pavyzdys: kodėl fonas nepaveldimas?

```html
<div class="tevas">
  <p>Tekstas vaiko viduje</p>
</div>
```

```css
.tevas {
  color: white;
  background-color: darkblue;
  padding: 20px;
}
```

- `p` **paveldi baltą tekstą**.
- `p` automatiškai **nepaveldi `background-color`** ir `padding`.
- Tačiau `div` fonas **matomas už `p`**, jeigu pats `p` turi skaidrų foną. Tai nereiškia, kad fonas paveldėtas!

> [!warning] Dažna klaida
> „Vidinis tekstas turi mėlyną foną, vadinasi paveldėjo background.“ **Ne!** Tėvo fonas tiesiog matomas po skaidriu vaiko fonu.

## 3. Specialios CSS reikšmės

| Reikšmė | Paaiškinimas | Paprastai |
|---|---|---|
| `inherit` | Paimti apskaičiuotą savybės reikšmę iš tėvinio elemento | „Paveldėk“ |
| `initial` | Grįžti prie CSS specifikacijos pradinės reikšmės | „Gamykliškai“ |
| `revert` | Grąžinti reikšmę pagal ankstesnę kaskados kilmę | „Kaip numatytas naršyklės stilius“ (dažnai) |
| `unset` | Paveldimoms savybėms = `inherit`, nepaveldimoms = `initial` | „Pagal savybės tipą“ |

### `inherit`

```css
div {
  border: 2px solid red;
}

p {
  border: inherit;
}
```

`border` paprastai nepaveldimas, bet `inherit` liepia `p` perimti tėvo rėmelio reikšmę. **Svarbu:** `p` turi būti to `div` viduje, kad perimtų būtent jo rėmelį.

### `initial`

```css
p {
  color: initial;
  margin: initial;
}
```

`color` grįžta prie specifikacijos pradinės reikšmės, o `margin` – prie `0`. Tai **nebūtinai tas pats**, kas naršyklės numatytasis `p` stilius.

### `revert`

```css
h1 {
  font-size: revert;
}
```

Padeda sugrąžinti anksčiau nustatytą kaskados kilmės stilių; praktikoje dažnai pamatysi naršyklės numatytąjį `h1` dydį.

### `unset`

```css
p {
  color: unset;   /* color paveldima, todėl = inherit */
  margin: unset;  /* margin nepaveldima, todėl = initial */
}
```


- **Kuo skiriasi `inherit` ir `initial`?** – `inherit` ima iš tėvo, `initial` ima CSS pradinę reikšmę.
- **Ar nepaveldimai savybei galima uždėti `inherit`?** – Taip.
- **Ką daro `unset`?** – Paveldimoms elgiasi kaip `inherit`, nepaveldimoms – kaip `initial`.
- **Ar `initial` ir `revert` vienodi?** – Ne. `initial` naudoja specifikacijos pradinę reikšmę, `revert` grąžina per kaskados kilmes.

## 4. Kas yra CSS specifikacija?

**Specifikacija** – oficialių dokumentų rinkinys, kuriame aprašyta:

- kokios CSS savybės egzistuoja ir ką daro;
- kokias reikšmes leidžiama naudoti;
- ar savybė paveldima – `Inherited: yes/no`;
- kokia jos pradinė reikšmė – `Initial value`;
- kuriems elementams taikoma – `Applies to`;
- kaip naršyklė apskaičiuoja reikšmę – `Computed value`.

Skaidrėje minimos organizacijos: **W3C** (CSS standartai) ir **WHATWG** (ypač HTML, DOM ir web API).

> [!question] Kodėl reikalinga specifikacija?
> Kad skirtingų naršyklių kūrėjai turėtų bendras taisykles ir HTML/CSS veiktų kuo vienodžiau.

## 5. CSS kaskada

**Kaskada (cascade)** – mechanizmas, kuris nusprendžia, kuri deklaracija laimi, jei keli stiliai nustato **tą pačią savybę tam pačiam elementui**.

Skaidrėje yra trys CSS kilmės:

1. **Browser / user agent CSS** – naršyklės numatytieji stiliai, pvz., `h1` didesnis tekstas.
2. **User CSS** – vartotojo nustatyti stiliai, pvz., prieinamumo įrankiais.
3. **Author CSS** – tavo parašyti stiliai.

### Author CSS būdai

**External** – atskiras failas:
```html
<link rel="stylesheet" href="style.css">
```

**Internal** – HTML dokumento `<head>` viduje:
```html
<style>
  p { color: blue; }
</style>
```

**Inline** – tiesiog HTML elemente:
```html
<p style="color: red;">Tekstas</p>
```

> [!important] Pastaba
> External, internal ir inline nėra trys atskiros CSS kilmės: visi yra **author CSS**. Įprastai inline deklaracijos turi didesnį specifiškumo prioritetą nei selektorių taisyklės, bet kaskadoje yra kitų kriterijų.

## 6. CSS specifiškumas – kaip atskirti laimėtoją?

*(Šioje paskaitoje kaskada remiasi specifiškumu; išplėstinius selektorių pavyzdžius darėte ankstesnėje temoje.)*

| Selektorius | Specifiškumas (inline, ID, klasės, elementai) |
|---|---|
| `p` | `0,0,0,1` |
| `article p` | `0,0,0,2` |
| `.tekstas` | `0,0,1,0` |
| `#main-p` | `0,1,0,0` |
| `style="color: red"` | `1,0,0,0` (mokomasis užrašymas) |

```css
article p {
  color: blue;
}

p {
  color: green;
}
```

`article` viduje esantis `p` bus **mėlynas**, nes `article p` specifiškesnis.

**11 klasių nepermuša vieno ID:** lyginamos kategorijos, o ne bendra sudėtis.

## 7. `!important` ir prioritetai

```css
p {
  color: red !important;
}

p {
  color: blue;
}
```

Tekstas bus **raudonas**, nes `!important` deklaracija aukštesnio svarbumo nei įprasta autoriaus deklaracija.

Skaidrėje pateikiama supaprastinta CSS kilmių ir `!important` hierarchija.

> [!warning] Svarbus patikslinimas prie 10 skaidrės
> Dešinės diagramos apačioje **sukeistas svarbių deklaracijų eiliškumas**: vartotojo `!important` yra stipresnis už svetainės kūrėjo `!important` (įprastomis sąlygomis). Naršyklės svarbios deklaracijos taip pat turi ypatingą prioritetą. `!important` nėra „dar vienas ID taškas“.


**Atsakymas:** „Ne. Reikia lyginti deklaracijų kilmę, svarbumą, sluoksnius ir kitus kaskados kriterijus.“

## 8. Moderni kaskada

Paskutinėje skaidrėje minimi šie kriterijai:

1. **Origin + importance** – iš kur stilius ir ar jis `!important`.
2. **Cascade layers (`@layer`)** – kuriame CSS sluoksnyje taisyklė.
3. **Specificity** – selektoriaus specifiškumas.
4. **Scoping proximity (`@scope`)** – taisyklės artumas apimties šakniai.
5. **Source order** – jei ankstesni kriterijai vienodi, dažniausiai laimi vėliau parašyta deklaracija.

> [!note] Pradedantiesiems
> Kol kas svarbiausia suprasti: **kilmė / svarbumas → specifiškumas → eilės tvarka**, nepamirštant, kad pažangūs `@layer` ir `@scope` gali pakeisti sprendimą. Paveldėjimas **nėra** papildomas specifiškumo lygis.

## 9. Mini praktika

### Užduotis A – paveldėjimas

```html
<div class="box">
  <p>Vienas</p>
  <span>Du</span>
</div>
```

```css
.box {
  color: purple;
  border: 3px solid orange;
  padding: 10px;
}
```

**Klausimas:** Ar `p` ir `span` perims tekstą, rėmelį ir padding?

**Atsakymas:** `color` – taip; `border` ir `padding` – ne.

### Užduotis B – `inherit`

```css
.box { border: 3px solid orange; }
.box p { border: inherit; }
```

**Klausimas:** Ar `p` dabar turi rėmelį? **Taip**, nes nurodėme `inherit`.

### Užduotis C – prioritetai

```html
<article>
  <p id="text">Labas</p>
</article>
```

```css
p { color: red; }
article p { color: green; }
#text { color: blue; }
```

**Atsakymas:** mėlynas, nes ID specifiškesnis.

### Užduotis D – paveldėjimas prieš tiesioginę taisyklę

```css
article { color: blue; }
p { color: orange; }
```

**Atsakymas:** `p` oranžinis. Tiesiogiai `p` pritaikyta deklaracija laimi prieš vien paveldėtą spalvą.
