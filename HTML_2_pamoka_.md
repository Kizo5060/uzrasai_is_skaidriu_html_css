# HTML – 2 pamoka: pagrindinės žymės ir CSS pradžia

> [!info] Apie pamoką
> Užrašai pagal TECHIN skaidres „Pagrindinės žymės (2 dalis), style 1“ (24 skaidrės). Pavyzdžiai parašyti paprastai, kad būtų galima iškart bandyti `index.html` faile.

## 1. Kas yra HTML?

**HTML** (*HyperText Markup Language*) – žymių kalba, kuria aprašome tinklalapio struktūrą: antraštes, tekstą, paveikslėlius, sąrašus ir t. t. Tai **ne programavimo kalba**. CSS naudojamas puslapio išvaizdai keisti.

## 2. Paveikslėlis – `<img>`

Paveikslėlį įdedame su `<img>`. Šis elementas neturi uždarymo žymės.

```html
<img src="katinas.jpg" alt="Gulintis katinas" width="200" height="150">
```

- `src` – paveikslėlio failas arba adresas.
- `alt` – tekstinis paveikslėlio aprašymas, svarbus prieinamumui ir jei paveikslėlis neužsikrauna. **Jį reikia nurodyti.**
- `width` – plotis, `height` – aukštis (HTML atributuose skaičiai be `px`).

Jei žinome paveikslėlio proporcijas, verta nurodyti abu matmenis: naršyklė iš anksto rezervuos vietą ir kraunantis puslapiui mažiau šokinės išdėstymas.

**Svarbu:** `<img>` pagal numatytąjį stilių yra *inline* tipo elementas, bet po jo įdėtas `<ol>` ar `<div>` vis tiek prasidės naujoje eilutėje, nes jie yra blokiniai.

## 3. Eilutės perkėlimas – `<br>`

`<br>` perkelia tekstą į naują eilutę ten, kur jį įrašome. Neturi uždarymo žymės.

```html
<p>Labas, pasauli!<br>Aš mokausi HTML.<br>Man patinka kurti puslapius.</p>
```

`<br>` tinka eilutės lūžiui tekste, bet ne dideliems tarpams tarp skirtingų elementų kurti.

## 4. Horizontali linija – `<hr>`

`<hr>` pažymi teminį turinio atskyrimą. Naršyklėje dažniausiai matome horizontalią liniją. Uždarymo žymės neturi.

```html
<h2>HTML</h2>
<p>Aprašo puslapio struktūrą.</p>
<hr>
<h2>CSS</h2>
<p>Keičia puslapio išvaizdą.</p>
```

## 5. HTML sąrašai

Pamokoje nagrinėti **nenumeruoti**, **numeruoti**, **aprašymų** ir **įdėtiniai** sąrašai.

### 5.1. Nenumeruotas sąrašas – `<ul>`

`<ul>` – sąrašo konteineris, `<li>` – vienas sąrašo punktas.

```html
<ul>
  <li>Kava</li>
  <li>Arbata</li>
  <li>Pienas</li>
</ul>
```

Markerio išvaizdą galima pakeisti su `list-style-type`:

```html
<ul style="list-style-type: square;">
  <li>Kava</li>
  <li>Arbata</li>
</ul>
```

| Reikšmė | Vaizdas |
|---|---|
| `disc` | Užpildytas skritulys |
| `circle` | Tuščias apskritimas |
| `square` | Kvadratėlis |
| `none` | Be markerio |

### 5.2. Numeruotas sąrašas – `<ol>`

```html
<ol>
  <li>Pirmas</li>
  <li>Antras</li>
  <li>Trečias</li>
</ol>
```

Pagal nutylėjimą gausime `1, 2, 3`. Numeravimo tipą galima pasirinkti:

| Atributas | Rezultatas |
|---|---|
| `type="1"` | 1, 2, 3 |
| `type="A"` | A, B, C |
| `type="a"` | a, b, c |
| `type="I"` | I, II, III |
| `type="i"` | i, ii, iii |

```html
<ol type="I">
  <li>Pirmas</li>
  <li>Antras</li>
</ol>
```

### 5.3. Aprašymų sąrašas – `<dl>`

- `<dl>` – visas aprašymų sąrašas.
- `<dt>` – terminas (ką aiškiname).
- `<dd>` – termino paaiškinimas.

```html
<dl>
  <dt>HTML</dt>
  <dd>Tinklalapio struktūros žymės.</dd>
  <dt>CSS</dt>
  <dd>Tinklalapio išvaizdos taisyklės.</dd>
</dl>
```

### 5.4. Įdėtinis sąrašas

Vieno sąrašo punkto viduje galime turėti kitą sąrašą.

```html
<ul>
  <li>Kava</li>
  <li>Arbata
    <ul>
      <li>Juoda</li>
      <li>Žalia</li>
    </ul>
  </li>
  <li>Pienas</li>
</ul>
```

**Atsimink:** vidinį `<ul>` įdedame į atitinkamą `<li>`, o ne tiesiog po juo.

## 6. `<div>` – elementų grupavimas

`<div>` – tarsi dėžutė, į kurią sudedame kitus elementus. Pats savaime neturi konkrečios semantinės reikšmės. Pagal nutylėjimą tai **block** elementas: prasideda naujoje eilutėje ir paprastai užima visą galimą tėvinio elemento plotį.

```html
<div>
  <h2>Apie mane</h2>
  <p>Mokausi HTML.</p>
</div>
```

Naudinga, kai norime vienai elementų grupei pritaikyti foną, rėmelį ar tarpus.

## 7. Inline CSS ir `style` atributas

**Inline CSS** – kai stilių parašome tiesiog HTML žymėje, naudodami `style`.

```html
<h1 style="color: blue;">Mėlyna antraštė</h1>
```

CSS taisyklės forma: `savybė: reikšmė;`. Kelias savybes atskiriame kabliataškiais.

```html
<p style="color: white; background-color: black; font-size: 20px;">
  Baltas tekstas juodame fone.
</p>
```

**Nepainiok:** *inline elementas* (`<span>`, `<a>`) ir *inline CSS* (`style="..."`) yra du skirtingi dalykai.

## 8. Pagrindinės CSS savybės

| Savybė | Kam naudojama | Pavyzdys |
|---|---|---|
| `color` | Teksto spalva | `color: red;` |
| `background-color` | Fono spalva | `background-color: yellow;` |
| `width` | Plotis | `width: 200px;` |
| `height` | Aukštis | `height: 100px;` |
| `border` | Rėmelis | `border: 1px solid black;` |
| `padding` | Vidinis tarpas | `padding: 10px;` |
| `margin` | Išorinis tarpas | `margin: 20px;` |

### 8.1. Spalvos ir fonas

```html
<p style="color: red;">Raudonas tekstas</p>
<div style="background-color: yellow;">Geltonas fonas</div>
```

Spalvą galima rašyti pavadinimu (`red`), RGB (`rgb(228, 153, 13)`) arba HEX (`#e4990d`). RGB sudaro raudonos, žalios ir mėlynos spalvos kiekiai nuo 0 iki 255. Ši RGB pastaba papildomai paaiškina mūsų pamokoje kilusį klausimą.

### 8.2. Plotis ir aukštis

```html
<div style="width: 250px; height: 100px; background-color: lightblue;">
  Dėžutė
</div>
```

`width` – horizontalus dydis, `height` – vertikalus. `px` reiškia CSS pikselius. Įprastai `width` ir `height` nustato turinio srities matmenis, o `padding` ir `border` gali padidinti bendrą užimamą vietą.

### 8.3. Rėmeliai – `border`

- `border-color` – spalva.
- `border-width` – storis.
- `border-style` – tipas: `solid` (ištisinis), `dashed` (brūkšniuotas), `dotted` (taškuotas).

```html
<div style="border: 2px solid black;">Juodas rėmelis</div>
<p style="border: 3px dashed red;">Raudonas brūkšniuotas rėmelis</p>
```

`border: 2px solid black;` vienoje vietoje nurodo **storį + tipą + spalvą**.

### 8.4. Teksto išvaizda

| Savybė | Ką daro |
|---|---|
| `font-size` | Teksto dydis, pvz. `20px` |
| `font-family` | Šriftas, pvz. `Arial` |
| `font-weight` | Teksto storis, pvz. `bold` |
| `text-align` | Lygiavimas: `left`, `center`, `right` |
| `text-decoration` | Pabraukimas `underline`, užbraukimas `line-through`, panaikinimas `none` |

```html
<h2 style="font-size: 28px; text-align: center;">Antraštė centre</h2>
<p style="font-family: Arial; font-weight: bold;">Pastorintas tekstas</p>
<p style="text-decoration: underline;">Pabrauktas tekstas</p>
```

## 9. `<span>` – mažos teksto dalies pažymėjimas

`<span>` – **inline**, nesemantinis elementas. Jis nepradeda naujos eilutės ir paprastai užima tik tiek pločio, kiek reikia turiniui. Naudojamas, kai norime pakeisti tik vieną teksto dalį.

```html
<p>Man patinka <span style="color: red;">raudona</span> spalva.</p>
```

**Skirtumas:** `<div>` grupuoja didesnes turinio dalis ir yra block, o `<span>` tinka daliai teksto vienoje eilutėje.

## 10. `margin` ir `padding` – tarpai

Įsivaizduok dėžutę:

```text
        MARGIN (tarpas išorėje)
   +----------------------------+
   | BORDER (rėmelis)           |
   |   PADDING (vidinis tarpas) |
   |      TURINYS               |
   +----------------------------+
```

- **`margin`** – tarpas **už elemento ribų**, tarp jo ir kitų elementų.
- **`padding`** – tarpas **elemento viduje**, tarp turinio ir kraštinės.
- **`border`** – rėmelis tarp turinio / padding ir išorinio margin.

```html
<div style="border: 2px solid black; margin: 20px; padding: 15px;">
  Tekstas dėžutėje
</div>
```

Čia `margin: 20px` atitraukia dėžutę iš išorės, o `padding: 15px` atitraukia tekstą nuo rėmelio iš vidaus.

### 10.1. Tarpai pagal kryptį

| Savybė | Kryptis |
|---|---|
| `margin-top` | Viršus |
| `margin-right` | Dešinė |
| `margin-bottom` | Apačia |
| `margin-left` | Kairė |
| `padding-top` | Vidinis tarpas viršuje |
| `padding-right` | Vidinis tarpas dešinėje |
| `padding-bottom` | Vidinis tarpas apačioje |
| `padding-left` | Vidinis tarpas kairėje |

```html
<p style="margin-top: 10px; margin-bottom: 20px;">Tekstas</p>
<div style="padding-left: 25px;">Tekstas pastumtas nuo kairio krašto</div>
```

Trumpesnė forma:

```css
margin: 10px;                /* visos pusės */
margin: 10px 20px;           /* viršus/apačia, kairė/dešinė */
margin: 10px 20px 30px 40px; /* viršus, dešinė, apačia, kairė */
```

## 11. `margin collapsing` – vertikalių paraščių susiliejimas

Šita tema painesnė, todėl svarbiausia suprasti vieną mintį: **dviejų vertikalių margin tarpai kartais nesusideda, o susilieja**.

### 11.1. Tarp dviejų gretimų blokinių elementų

Tarkime:

```html
<p style="margin-bottom: 30px;">Pirmas</p>
<p style="margin-top: 20px;">Antras</p>
```

Galėtume tikėtis `30 + 20 = 50px`, bet įprasto blokinio išdėstymo atveju paraštės susilieja ir tarpas būna **30px** (didesnė reikšmė).

Skaidrėse rekomenduojama tarpus tarp tokių elementų valdyti viena kryptimi, pavyzdžiui, naudoti tik `margin-bottom`.

### 11.2. Tarp tėvinio ir vaikinio elemento

Kartais vidinio elemento `margin-top` susilieja su išorinio elemento parašte, todėl atrodo, kad visas išorinis blokas pasislinko.

```html
<div>
  <p style="margin-top: 30px;">Tekstas</p>
</div>
```

Norint to išvengti, tėviniam elementui galima pridėti `padding`, `border` arba `display: flow-root`:

```html
<div style="display: flow-root;">
  <p style="margin-top: 30px;">Tekstas</p>
</div>
```

**Svarbu:** šis reiškinys susijęs su **vertikaliomis** `margin-top` ir `margin-bottom` paraštėmis įprastame blokiniame išdėstyme, ne su `padding` ar horizontaliomis paraštėmis. Ne kiekvienoje CSS išdėstymo situacijoje margin susilieja.

## 12. Internal CSS – stilius `<head>` viduje

Iki šiol stilius rašėme tiesiog elemente (`style="..."`). **Internal CSS** rašomas vienoje `<style>` žymėje, paprastai dokumento `<head>` dalyje.

```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <title>Mano puslapis</title>
  <style>
    body {
      background-color: powderblue;
    }

    h1 {
      color: blue;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Mano antraštė</h1>
  <p>Mano tekstas</p>
</body>
</html>
```

- `body { ... }` – taisyklė puslapio turiniui.
- `h1 { ... }` – visiems `h1` elementams.
- `p { ... }` – visiems `p` elementams.

**Skirtumas:** inline CSS tinka vienam konkrečiam elementui, o internal CSS patogu, kai tą pačią išvaizdą norime pritaikyti keliems elementams viename HTML faile.

## 13. Trumpa atmintinė prieš atsiskaitymą

| Žymė / savybė | Atsimink |
|---|---|
| `<img>` | Paveikslėlis; `src`, `alt`, `width`, `height` |
| `<br>` | Nauja teksto eilutė |
| `<hr>` | Teminis skirtukas / linija |
| `<ul>` | Sąrašas su markeriais |
| `<ol>` | Numeruotas sąrašas |
| `<li>` | Sąrašo punktas |
| `<dl>`, `<dt>`, `<dd>` | Terminas ir jo aprašymas |
| `<div>` | Block konteineris |
| `<span>` | Inline teksto dalis |
| `style="..."` | Inline CSS |
| `color` | Teksto spalva |
| `background-color` | Fonas |
| `width`, `height` | Plotis, aukštis |
| `border` | Rėmelis |
| `padding` | Tarpas viduje |
| `margin` | Tarpas išorėje |
| `font-size` | Šrifto dydis |
| `font-family` | Šriftas |
| `font-weight` | Šrifto storis |
| `text-align` | Lygiavimas |
| `text-decoration` | Pabraukimas / užbraukimas |
| `margin collapsing` | Vertikalios paraštės kartais susilieja |
| `<style>` | Internal CSS, dažniausiai `<head>` viduje |

## 14. Praktika – pabandyk pats

> [!todo] Užduotis 1 – paveikslėlis ir tekstas
> Sukurk `index.html`, įdėk `h1`, pastraipą ir paveikslėlį su `alt`, `width` bei `height`. Panaudok `<br>` vienai pastraipai padalyti į dvi eilutes.

> [!todo] Užduotis 2 – sąrašai
> Parašyk `ul` su trimis mėgstamais dalykais ir `ol type="I"` su trimis veiksmais. Viename sąrašo punkte sukurk vidinį sąrašą.

> [!todo] Užduotis 3 – stilius
> Sukurk `<div>` su antrašte ir pastraipa. Pritaikyk `background-color`, `border`, `padding` ir `margin`. Vieną žodį nuspalvink per `<span>`.

> [!todo] Užduotis 4 – internal CSS
> Perkelk antraštės ir pastraipos spalvas iš `style="..."` į `<style>` bloką `<head>` viduje.

### Klausimai sau

1. Kuo skiriasi `<ul>` ir `<ol>`?
2. Kam reikalingas `alt` atributas?
3. Kuo `<div>` skiriasi nuo `<span>`?
4. Kuo skiriasi `margin` ir `padding`?
5. Kodėl du vertikalūs margin ne visada susideda?
6. Kuo skiriasi inline CSS nuo internal CSS?
7. Kodėl po inline `<img>` sąrašas `<ol>` vis tiek prasideda naujoje eilutėje?

---

**Šaltinis:** TECHIN, „Pagrindinės žymės (2 dalis), style 1“, 24 skaidrės. Kai kurie paaiškinimai ir praktinės užduotys papildyti, kad būtų lengviau mokytis.
