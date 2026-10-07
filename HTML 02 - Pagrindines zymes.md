# HTML – pagrindinės žymės ir struktūra

> Konspektas pagal TECHIN skaidres. Skirtas Obsidian ir greitam pasikartojimui.

---

# 1. Kas yra HTML?

**HTML** = **Hyper Text Markup Language**  
Lietuviškai: **hiperteksto žymėjimo kalba**.

HTML naudojamas:
- tinklalapiams kurti;
- puslapio struktūrai sudėti;
- turiniui aprašyti.

> **Svarbu:** HTML nėra programavimo kalba. Tai **žymėjimo kalba**.

HTML nurodo naršyklei **ką rodyti**, bet ne „kaip veikia programos logika“.

---

# 2. Kas yra hipertekstas?

**Hipertekstas** – tekstas, kuriame yra nuorodų (hipersaitų), vedančių į:
- kitą tekstą;
- kitą puslapį;
- paveikslėlį;
- vaizdo įrašą;
- kitą informaciją.

Skirtumas nuo knygos:
- knyga dažniausiai skaitoma iš eilės;
- hipertekste galima „šokinėti“ tarp susijusių informacijos dalių naudojant nuorodas.

---

# 3. HTML dokumentas

HTML failo plėtinys:

```text
.html
```

Pvz.:

```text
index.html
apie.html
kontaktai.html
```

## `index.html`

`index.html` dažniausiai yra pagrindinis / pradinis tinklapio failas.

Kai atidaroma svetainė, serveris pirmiausia ieško:

```text
index.html
```

Galima galvoti kaip apie svetainės **„namų duris“**.

---

# 4. HTML žymės

HTML sudarytas iš **žymių (tags)**.

Žymė nurodo naršyklei, kokios paskirties yra turinys.

Pvz.:

```html
<p>Čia yra pastraipa</p>
```

Čia:
- `<p>` – atidarymo žymė;
- `Čia yra pastraipa` – turinys;
- `</p>` – uždarymo žymė.

## Žymių raidžių dydis

HTML5 žymių pavadinimai nėra jautrūs didžiosioms / mažosioms raidėms:

```html
<P>Tekstas</P>
```

ir:

```html
<p>Tekstas</p>
```

veiks.

Tačiau rekomenduojama rašyti **mažosiomis raidėmis**:

```html
<p>Tekstas</p>
```

---

# 5. `<!DOCTYPE html>`

Kiekvieno HTML dokumento pradžioje rašoma:

```html
<!DOCTYPE html>
```

Tai:
- nurodo dokumento tipą;
- informuoja naršyklę apie HTML dokumentą;
- rašoma pirmoje failo eilutėje.

---

# 6. HTML5 dokumento struktūra

Bazinis HTML dokumentas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

## `<html>`

```html
<html> ... </html>
```

Žymi visą HTML dokumentą – jo pradžią ir pabaigą.

---

## `<head>`

```html
<head> ... </head>
```

Čia laikoma informacija apie puslapį, kuri dažniausiai tiesiogiai nematoma puslapio turinyje.

---

## `<title>`

```html
<title>Mano puslapis</title>
```

Naudojama puslapio pavadinimui.

Pavadinimas:
- matomas naršyklės kortelėje;
- gali būti naudojamas Bookmark / Favorites;
- svarbus paieškos sistemoms.

---

## `<body>`

```html
<body>
    ...
</body>
```

Čia rašomas pagrindinis matomas puslapio turinys:
- antraštės;
- tekstas;
- paveikslėliai;
- nuorodos;
- sąrašai;
- ir t. t.

---

# 7. Meta žymės

Meta žymės rašomos tarp:

```html
<head>
    ...
</head>
```

Jos pateikia informaciją apie HTML dokumentą.

## Koduotė

```html
<meta charset="UTF-8">
```

Nurodo simbolių koduotę.

`UTF-8` leidžia normaliai rodyti lietuviškas raides ir daug kitų simbolių.

---

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Padeda puslapiui teisingai prisitaikyti prie skirtingų ekranų.

---

## Aprašymas

```html
<meta name="description" content="Free Web tutorials on HTML and CSS">
```

Puslapio aprašymas.

---

## Raktažodžiai

```html
<meta name="keywords" content="HTML, Meta Tags, Metadata">
```

Paieškos raktažodžiai.

---

## Autorius

```html
<meta name="author" content="Vardas Pavardė">
```

Nurodo puslapio autorių.

---

# 8. HTML elemento konstrukcija

Paprastas elementas:

```html
<žymė>Turinys</žymė>
```

Elementas su atributu:

```html
<žymė atributas="reikšmė">Turinys</žymė>
```

Pvz.:

```html
<a href="kontaktai.html">Kontaktai</a>
```

---

# 9. Atributai

**Atributas** – papildoma informacija apie HTML žymę.

Atributas visada rašomas **atidarymo žymėje**.

Pvz.:

```html
<a href="apie.html">Apie mus</a>
```

Čia:
- `a` – žymė;
- `href` – atributo pavadinimas;
- `"apie.html"` – atributo reikšmė;
- `Apie mus` – elemento turinys.

---

# 10. Tuščios žymės

Ne visos HTML žymės turi uždarymo žymę.

Žymės, į kurias nerašomas turinys, vadinamos **tuščiomis žymėmis**.

Pvz.:

```html
<br>
<hr>
<img>
```

Joms nereikia:

```html
</br>
</hr>
</img>
```

---

# 11. Pagrindinės HTML žymės

## Antraštė

```html
<h1>Antraštė</h1>
```

---

## Pastraipa

```html
<p>Pastraipa</p>
```

---

## Paveikslėlis

```html
<img src="foto.jpg" alt="Aprašymas">
```

---

## Nuoroda

```html
<a href="https://example.com">Nuoroda</a>
```

---

## Neužsakytas sąrašas

```html
<ul>
    <li>Pirmas</li>
    <li>Antras</li>
</ul>
```

---

## Sąrašo elementas

```html
<li>Elementas</li>
```

---

## Eilutės lūžis

```html
<br>
```

Perkelia tekstą į naują eilutę.

---

## Horizontalus skirtukas

```html
<hr>
```

Vizualiai atskiria turinio dalis.

---

# 12. Pastraipos `<p>`

```html
<p>Čia yra pastraipa.</p>
```

Pastraipos:
- automatiškai prisitaiko prie lango pločio;
- tekstas persikelia į kitą eilutę;
- kiekviena nauja pastraipa prasideda naujoje eilutėje;
- `<p>` yra **block-level** elementas.

---

# 13. Antraštės `<h1>` – `<h6>`

HTML turi 6 antraščių lygius:

```html
<h1>Antraštė 1</h1>
<h2>Antraštė 2</h2>
<h3>Antraštė 3</h3>
<h4>Antraštė 4</h4>
<h5>Antraštė 5</h5>
<h6>Antraštė 6</h6>
```

- `<h1>` – pagrindinė puslapio antraštė.
- `<h2>`, `<h3>` ir t. t. kuria turinio hierarchiją.

Svarbu puslapio struktūrai, prieinamumui ir SEO.

---

# 14. SEO

**SEO = Search Engine Optimization**

Tai svetainės tvarkymas taip, kad paieškos sistemos geriau suprastų jos turinį.

SEO padeda:
- aiškus `<title>`;
- logiškos `<h1>`, `<h2>` antraštės;
- prasmingas tekstas;
- prasmingos nuorodos;
- paveikslėlių `alt`;
- geras veikimas telefone;
- greitas puslapis;
- kokybiškas turinys.

---

# 15. Whitespace collapsing

HTML turi taisyklę:

**whitespace collapsing**

Tai reiškia, kad keli tarpai, TAB ar naujos eilutės dažniausiai naršyklėje suspaudžiamos į vieną tarpą.

Pvz.:

```html
<p>Labas       pasauli</p>
```

Naršyklėje bus panašiai:

```text
Labas pasauli
```

---

# 16. Paveikslėliai `<img>`

Pagrindinė forma:

```html
<img src="vaizdas.jpg" alt="tekstas">
```

Paveikslėlis iš aplanko:

```html
<img src="IMG/vaizdas.gif" alt="tekstas">
```

Paveikslėlis iš interneto:

```html
<img src="https://example.com/foto.jpg" alt="tekstas">
```

---

# 17. Pagrindiniai `<img>` atributai

## `src`

Nurodo paveikslėlio failo kelią:

```html
<img src="img/kebabas.png">
```

---

## `alt`

Alternatyvus tekstas:

```html
<img src="img/kebabas.png" alt="Kebabas">
```

`alt`:
- rodomas, jei paveikslėlis neužsikrauna;
- svarbus ekrano skaitytuvams;
- padeda SEO.

---

## `width`

Plotis:

```html
<img src="foto.jpg" width="300">
```

---

## `height`

Aukštis:

```html
<img src="foto.jpg" height="200">
```

---

## `title`

Tekstas, rodomas užvedus pelę:

```html
<img src="foto.jpg" title="Mano nuotrauka" alt="Nuotrauka">
```

---

# 18. Paveikslėlių failų pavadinimai

Paieškos sistemos gali skaityti ir paveikslėlių failų pavadinimus.

Geriau:

```text
dinozauras.jpg
```

negu:

```text
img8.png
```

Failo pavadinimas turėtų būti aiškus ir prasmingas.

---

# 19. Sąrašai

## Neužsakytas sąrašas `<ul>`

`ul` = **unordered list**

Sąrašas su taškais:

```html
<ul>
    <li>Obuolys</li>
    <li>Bananas</li>
    <li>Kriaušė</li>
</ul>
```

---

## Užsakytas sąrašas `<ol>`

`ol` = **ordered list**

Numeruotas sąrašas:

```html
<ol>
    <li>Pirmas</li>
    <li>Antras</li>
    <li>Trečias</li>
</ol>
```

---

## Sąrašai gali būti įdėti vienas į kitą

```html
<ul>
    <li>
        Vaisiai
        <ul>
            <li>Obuolys</li>
            <li>Bananas</li>
        </ul>
    </li>
</ul>
```

Tai yra **nesting** – elementų įdėjimas vieno į kitą.

---

# 20. Teksto formatavimo žymės

## `<b>`

Pastorintas tekstas:

```html
<b>Tekstas</b>
```

---

## `<strong>`

Svarbus tekstas:

```html
<strong>Svarbu!</strong>
```

---

## `<i>`

Pasviręs tekstas:

```html
<i>Tekstas</i>
```

---

## `<em>`

Pabrėžiamas / akcentuojamas tekstas:

```html
<em>Tekstas</em>
```

---

## `<small>`

Mažesnis tekstas:

```html
<small>Mažas tekstas</small>
```

---

## `<sub>`

Pažemintas tekstas:

```html
H<sub>2</sub>O
```

Rezultatas: H₂O

---

## `<sup>`

Pakeltas tekstas / laipsnis:

```html
2<sup>2</sup>
```

Rezultatas: 2²

---

## `<ins>`

Įterptas / pabrauktas tekstas:

```html
<ins>Tekstas</ins>
```

---

## `<del>`

Išbrauktas tekstas:

```html
<del>Senas tekstas</del>
```

---

## `<mark>`

Pažymėtas tekstas:

```html
<mark>Svarbu</mark>
```

---

## `<u>`

Pabrauktas tekstas:

```html
<u>Tekstas</u>
```

---

# 21. Block-level ir inline elementai

## Block-level

Block elementai:
- prasideda naujoje eilutėje;
- užima visą galimą eilutės plotį;
- galima nustatyti `width` ir `height`;
- gali savyje turėti kitus block arba inline elementus.

Pvz.:

```html
<p>
<h1>
<ul>
<ol>
```

---

## Inline

Inline elementai:
- užima tik tiek vietos, kiek reikia turiniui;
- gali būti rodomi vienas šalia kito;
- traktuojami panašiai kaip tekstas.

Pvz.:

```html
<a>
<strong>
<em>
<span>
```

---

# 22. Parent ir Child

**Parent elementas** – elementas, kurio viduje yra kitas elementas.

**Child elementas** – elementas, esantis kito elemento viduje.

Pvz.:

```html
<ul>
    <li>Vienas</li>
</ul>
```

Čia:
- `<ul>` – parent;
- `<li>` – child.

Galima užrašyti:

```text
Parent > Child
```

---

# 23. Specialieji simboliai

HTML specialieji simboliai gali būti rašomi naudojant **HTML entities**.

Pvz. euro ženklas:

```html
&euro;
```

arba:

```html
&#8364;
```

arba:

```html
&#x20AC;
```

Visi gali parodyti:

```text
€
```

---

# 24. HTML komentarai

Komentarai naršyklėje nerodomi.

Sintaksė:

```html
<!-- Čia komentaras -->
```

Galima laikinai „išjungti“ kodą:

```html
<!--
<div>
    Šitas turinys nebus rodomas
</div>
-->
```

---

# 25. Live Server

**Live Server** – VS Code plėtinys, leidžiantis:
- paleisti HTML puslapį;
- iškart matyti rezultatą naršyklėje;
- automatiškai matyti pakeitimus.

Diegimas:
1. atidaryti **Extensions**;
2. `Ctrl + Shift + X`;
3. surasti **Live Server**;
4. įdiegti;
5. apačioje spausti **Go Live**.

---

# 26. Kodo formatavimas

Svarbu naudoti:
- įtraukas;
- tarpus;
- tvarkingą struktūrą.

VS Code formatavimas:

```text
Shift + Alt + F
```

Taip pat galima naudoti:

**Prettier – Code formatter**

---

# Greita špargalkė

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mano puslapis</title>
</head>
<body>

    <h1>Pagrindinė antraštė</h1>

    <p>Čia yra pastraipa.</p>

    <a href="https://example.com">Nuoroda</a>

    <img src="img/foto.jpg" alt="Nuotraukos aprašymas">

    <ul>
        <li>Vienas</li>
        <li>Du</li>
    </ul>

</body>
</html>
```

---

# Labai svarbu atsiminti

- HTML = **struktūra ir turinys**
- HTML nėra programavimo kalba
- pagrindinis failas = `index.html`
- pirmoje eilutėje = `<!DOCTYPE html>`
- matomas turinys = `<body>`
- puslapio pavadinimas = `<title>`
- pastraipa = `<p>`
- antraštės = `<h1>` – `<h6>`
- nuoroda = `<a>`
- paveikslėlis = `<img>`
- sąrašas = `<ul>` arba `<ol>`
- sąrašo punktas = `<li>`
- eilutės lūžis = `<br>`
- horizontalus skirtukas = `<hr>`
- paveikslėlio kelias = `src`
- paveikslėlio alternatyvus tekstas = `alt`
- komentaras = `<!-- ... -->`
