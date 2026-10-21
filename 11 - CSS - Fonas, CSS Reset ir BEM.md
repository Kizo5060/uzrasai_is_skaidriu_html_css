---

tags:

- html-css
    
- konspektas
    

---




# 1. CSS fono savybės

CSS fonas (`background`) naudojamas nustatyti elemento fono spalvą, paveikslėlį, jo dydį, vietą ir kitus parametrus.

## Pagrindinės fono savybės

|Savybė|Paskirtis|Numatytoji reikšmė|
|---|---|---|
|`background-color`|Fono spalva|`transparent`|
|`background-image`|Fono paveikslėlis|`none`|
|`background-repeat`|Paveikslėlio kartojimas|`repeat`|
|`background-position`|Paveikslėlio pozicija|`0% 0%`|
|`background-size`|Paveikslėlio dydis|`auto`|
|`background-clip`|Iki kur piešiamas fonas|`border-box`|
|`background-attachment`|Fono elgesys slenkant|`scroll`|
|`background-origin`|Nuo kur pozicionuojamas fonas|`padding-box`|

**Numatytoji reikšmė (default)** – tai reikšmė, kurią naršyklė naudoja, jeigu patys nenurodome kitokios.

---

# 2. background-color – fono spalva

Naudojama elemento fono spalvai pakeisti.

```
section {
    background-color: green;
}

header {
    background-color: rgba(255, 255, 128, 0.5);
}

main {
    background-color: hsl(50, 33%, 25%);
}
```

## Spalvų užrašymo būdai

- `green` – spalvos pavadinimas.
    
- `#ff0000` – HEX spalvos kodas.
    
- `rgb(255, 0, 0)` – raudonos, žalios ir mėlynos spalvų reikšmės.
    
- `rgba(255, 0, 0, 0.5)` – RGB spalva su permatomumu.
    
- `hsl(50, 33%, 25%)` – atspalvis, sodrumas ir šviesumas.
    

Pavyzdys:

```
.box {
    background-color: #222222;
    color: white;
}
```

Dėžutė turės tamsų foną ir baltą tekstą.

---

# 3. background-image – fono paveikslėlis

Ši savybė leidžia naudoti paveikslėlį kaip elemento foną.

```
.box {
    background-image: url("img/fonas.jpg");
}
```

`url()` nurodo paveikslėlio vietą.

Svarbu, kad kelias būtų teisingas.

Pavyzdžiui, jeigu turime tokią struktūrą:

```
projektas/
├── index.html
├── css/
│   └── style.css
└── img/
    └── fonas.jpg
```

CSS faile reikėtų rašyti:

```
.box {
    background-image: url("../img/fonas.jpg");
}
```

`../` reiškia grįžimą vienu aplanku aukščiau.

> [!warning] Dažna klaida  
> Jeigu foninis paveikslėlis nerodomas, reikia patikrinti failo pavadinimą, plėtinį ir kelią nuo CSS failo.

## Keli paveikslėliai viename fone

Viename elemente galima naudoti kelis foninius paveikslėlius.

```
.box {
    background-image:
        url("img/pirmas.png"),
        url("img/antras.png");
}
```

Pirmasis paveikslėlis bus virš antrojo.

Tai naudinga, kai norime viename bloke turėti kelias dekoracijas.

---

# 4. CSS gradientai

Gradientas – tolygus perėjimas tarp kelių spalvų.

## linear-gradient

Linijinis gradientas – spalvos keičiasi tam tikra kryptimi.

```
.box {
    background-image: linear-gradient(to right, red, blue);
}
```

Spalva keičiasi iš kairės į dešinę.

Kitas pavyzdys:

```
.box {
    background: linear-gradient(to bottom, black, purple);
}
```

Spalva keičiasi iš viršaus į apačią.

## radial-gradient

Radialinis gradientas – spalvos pereina nuo centro į išorę.

```
.box {
    background-image: radial-gradient(red, blue);
}
```

**Skirtumas:**

- `linear-gradient` – linijinis spalvų perėjimas.
    
- `radial-gradient` – radialinis, nuo centro sklindantis perėjimas.
    

---

# 5. background-size – fono dydis

Naudojama nustatyti, kokio dydžio bus foninis paveikslėlis.

## auto

```
.box {
    background-size: auto;
}
```

Paveikslėlis išlaiko natūralų dydį.

## cover

```
.box {
    background-size: cover;
}
```

Paveikslėlis užpildo visą elementą.

Jeigu proporcijos nesutampa, dalis paveikslėlio gali būti nukirpta.

## contain

```
.box {
    background-size: contain;
}
```

Paveikslėlis visas sutalpinamas elemento viduje.

Gali likti neužpildytų vietų.

|Reikšmė|Rezultatas|
|---|---|
|`auto`|Natūralus paveikslėlio dydis|
|`cover`|Užpildo visą bloką, gali nukirpti dalį vaizdo|
|`contain`|Visas paveikslėlis matomas|

Pavyzdys:

```
.box {
    width: 25rem;
    height: 15rem;
    background-image: url("img/fonas.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

**Rezultatas:** foninis paveikslėlis užpildo bloką, yra centruotas ir nesikartoja.

---

# 6. background-clip – fono ribos

Nustato, iki kurios elemento dėžutės dalies piešiamas fonas.

Prisiminkime dėžutės modelį:

`Content → Padding → Border → Margin`

## border-box

```
.box {
    background-clip: border-box;
}
```

Fonas piešiamas ir po `border` sritimi.

## padding-box

```
.box {
    background-clip: padding-box;
}
```

Fonas piešiamas per turinį ir `padding`, bet ne po `border`.

## content-box

```
.box {
    background-clip: content-box;
}
```

Fonas piešiamas tik `content` srityje.

## text

```
.title {
    background: linear-gradient(red, blue);
    background-clip: text;
    color: transparent;
}
```

Gradientas matomas per tekstą.

|Reikšmė|Kur matomas fonas?|
|---|---|
|`border-box`|Iki išorinės rėmelio ribos|
|`padding-box`|Iki padding išorinės ribos|
|`content-box`|Tik turinio srityje|
|`text`|Teksto raidėse|

---

# 7. background-repeat – paveikslėlio kartojimas

Ši savybė nurodo, ar foninis paveikslėlis turi kartotis.

Pagal nutylėjimą naudojama:

```
background-repeat: repeat;
```

Galimos reikšmės:

|Reikšmė|Ką daro?|
|---|---|
|`repeat`|Kartoja horizontaliai ir vertikaliai|
|`no-repeat`|Nekartoja|
|`repeat-x`|Kartoja horizontaliai|
|`repeat-y`|Kartoja vertikaliai|
|`space`|Kartoja su tarpais|
|`round`|Kartoja koreguodamas paveikslėlio dydį|

Pavyzdys:

```
.box {
    background-image: url("img/tree.png");
    background-repeat: no-repeat;
}
```

Paveikslėlis bus rodomas vieną kartą.

---

# 8. background-position – fono pozicija

Nustato, kurioje elemento vietoje bus foninis paveikslėlis.

```
.box {
    background-position: center;
}
```

## Pozicijų reikšmės

```
background-position: center;
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: top right;
background-position: 100px 5px;
background-position: 100% 5%;
background-position: bottom 10px right 20px;
```

Naudojant dvi reikšmes paprastai nurodoma:

- Pirma – horizontali pozicija (X).
    
- Antra – vertikali pozicija (Y).
    

Pavyzdys:

```
.box {
    background-position: 50% 50%;
}
```

Tai reiškia, kad paveikslėlis centruojamas horizontaliai ir vertikaliai.

**Tas pats kaip:**

```
background-position: center;
```

> [!important] Svarbu  
> `background-position: center` centruoja foninį paveikslėlį, o ne tekstą.
> 
> Teksto horizontaliam centravimui naudojamas `text-align: center`.

---

# 9. background-attachment – fono elgesys slenkant

Nustato, kaip fonas elgiasi slenkant puslapį.

## scroll

```
body {
    background-attachment: scroll;
}
```

Numatytoji reikšmė. Fonas slenka kartu su puslapio elementu.

## fixed

```
body {
    background-attachment: fixed;
}
```

Fonas vizualiai išlieka toje pačioje vietoje slenkant puslapį.

Pavyzdys:

```
body {
    background-image: url("img/fonas.jpg");
    background-size: cover;
    background-attachment: fixed;
}
```

---

# 10. background-origin – fono pradžios sritis

Ši savybė nustato, nuo kurios elemento dėžutės srities pozicionuojamas foninis paveikslėlis.

|Reikšmė|Paskirtis|
|---|---|
|`padding-box`|Pozicionuoja pagal padding sritį|
|`border-box`|Pozicionuoja pagal border sritį|
|`content-box`|Pozicionuoja pagal content sritį|

Pavyzdys:

```
.box {
    background-image: url("img/fonas.jpg");
    background-origin: content-box;
}
```

**Skirtumas:**

- `background-origin` – nuo kurios srities skaičiuojama fono pozicija.
    
- `background-clip` – iki kurios srities fonas piešiamas.
    

---

# 11. Keli skirtingi fonai viename bloke

Galima vienam elementui priskirti kelis fonus ir kiekvienam nurodyti skirtingas savybes.

```
.box {
    background-image:
        url("img/dovana.png"),
        url("img/dovana.png");

    background-size:
        auto,
        auto;

    background-repeat:
        repeat-x,
        no-repeat;

    background-position:
        left top,
        right bottom;
}
```

**Kas vyksta?**

1. Pirmasis paveikslėlis kartojamas horizontaliai viršuje.
    
2. Antrasis paveikslėlis rodomas vieną kartą apačioje dešinėje.
    

Visos reikšmės surašomos tokia pačia tvarka kaip `background-image`.

---

# 12. Background shorthand – trumpasis užrašymas

CSS leidžia kelias fono savybes sujungti į vieną `background` deklaraciją.

## Ilgas variantas

```
section {
    background-color: #000;
    background-image: url("images/bg.gif");
    background-repeat: no-repeat;
    background-position: left top;
}
```

## Trumpas variantas

```
section {
    background: #000 url("images/bg.gif") no-repeat left top;
}
```

Abu variantai duoda tą patį rezultatą.

> [!note] Svarbu  
> `background` yra shorthand savybė. Ji gali iš naujo nustatyti ir kitas fono savybes, kurių nenurodėme.

---

# 13. CSS priešdėliai (prefixes)

Anksčiau skirtingos naršyklės CSS savybėms naudojo specialius priešdėlius.

|Priešdėlis|Naršyklės|
|---|---|
|`-webkit-`|Senesnės Safari ir Chrome|
|`-moz-`|Senesnės Firefox|
|`-ms-`|Senesnės Microsoft|
|`-o-`|Senesnės Opera|

Skaidrėse rodomi seni gradientų užrašymo būdai su priešdėliais.

Šiuolaikinėse naršyklėse įprastam gradientui paprastai pakanka:

```
.box {
    background: linear-gradient(to bottom, black, white);
}
```

---

# 14. CSS Reset – kas tai?

Naršyklės turi savo numatytuosius HTML elementų stilius.

Pavyzdžiui:

- `body` turi numatytuosius tarpus.
    
- `h1` turi savo šrifto dydį ir tarpus.
    
- `p` turi numatytuosius tarpus.
    
- `ul` turi sąrašo įtraukas.
    

Dėl šių skirtumų tas pats HTML ir CSS kodas skirtingose naršyklėse gali atrodyti nevienodai.

**CSS Reset** naudojamas panaikinti daugumai numatytųjų naršyklės stilių.

## Paprastas Reset pavyzdys

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Paaiškinimas:

- `*` – universalus selektorius, parenkantis visus elementus.
    
- `margin: 0` – pašalina išorinius tarpus.
    
- `padding: 0` – pašalina vidinius tarpus.
    
- `box-sizing: border-box` – elemento nurodytas plotis ir aukštis apima turinį, padding ir border.
    

Tai supaprastintas Reset pavyzdys, o ne visas CSS Reset failas.

---

# 15. CSS Reset ir Normalize.css skirtumai

Abu naudojami tam, kad svetainės išvaizda skirtingose naršyklėse būtų kuo nuoseklesnė.

## CSS Reset

Pašalina daug numatytųjų HTML elementų stilių.

Po Reset daug elementų reikia stilizuoti iš naujo.

## Normalize.css

Suvienodina naršyklių numatytųjų stilių skirtumus, tačiau išsaugo naudingus pradinius stilius.

|CSS Reset|Normalize.css|
|---|---|
|Pašalina daug numatytųjų stilių|Suvienodina naršyklių skirtumus|
|Leidžia kurti nuo švaraus pagrindo|Išlaiko daugiau pradinių stilių|
|Gali reikėti iš naujo stilizuoti elementus|Mažiau pakeičia natūralią elementų išvaizdą|

**Lengviausia prisiminti:**

- Reset – nuima numatytuosius stilius.
    
- Normalize – suvienodina jų skirtumus.
    

---

# 16. CSS Naming Conventions – klasių pavadinimai

Tai CSS klasių pavadinimų rašymo taisyklės.

Jos padeda suprasti:

1. Ką klasė daro.
    
2. Kur ji naudojama.
    
3. Kaip klasės susijusios tarpusavyje.
    

## Pavyzdys

```
.redBox {
    border: 1px solid red;
}
```

Šį pavadinimą galime parašyti aiškiau:

```
.red-box {
    border: 1px solid red;
}
```

Abu variantai veikia, tačiau `red-box` naudoja _kebab-case_ rašymo stilių.

### Kebab-case

Žodžiai rašomi mažosiomis raidėmis, atskiriami brūkšneliais.

Pavyzdžiai:

```
.main-menu {}
.user-profile {}
.red-button {}
.page-header {}
```

Tai vienas dažnai naudojamų CSS klasių pavadinimų stilių.

---

# 17. Tėvinio ir vaikinio elemento pavadinimai

Klasių pavadinimai gali parodyti, kokiam komponentui priklauso elementas.

Pavyzdys:

```
.post {
    margin: 2em 0;
}

.post-title {
    font-size: 2em;
    font-weight: normal;
}
```

- `.post` – visas įrašo blokas.
    
- `.post-title` – įrašo antraštė.
    

Kitas pavyzdys:

```
.tabs {
    border-bottom: 1px solid silver;
    text-align: center;
}

.tab {
    background: #e5e5e5;
    border: 1px solid silver;
    color: #666;
}
```

- `.tabs` – skirtukų grupė.
    
- `.tab` – vienas skirtukas.
    

**Svarbu:** vien pavadinimai nenustato HTML tėvo ir vaiko ryšio. Tikrą elementų hierarchiją nustato HTML struktūra.

---

# 18. BEM – kas tai?

BEM yra CSS klasių pavadinimų metodika.

Jos tikslas – padėti tvarkingiau organizuoti CSS kodą, lengviau suprasti elementų ryšius ir išvengti painiavos didesniuose projektuose.

**BEM reiškia:**

- **B – Block** (blokas).
    
- **E – Element** (elementas).
    
- **M – Modifier** (modifikatorius).
    

## Block – blokas

Blokas yra savarankiška puslapio dalis.

Pavyzdžiui:

```
.card {
    background-color: #222;
}
```

`.card` – visa kortelė.

## Element – elemento dalis

Elementas priklauso konkrečiam blokui.

BEM naudoja du apatinius brūkšnelius `__`.

```
.card__title {
    font-size: 2rem;
}
```

`.card__title` – kortelės antraštė.

Kiti pavyzdžiai:

```
.card__image {}
.card__description {}
.card__button {}
```

## Modifier – modifikatorius

Modifikatorius naudojamas, kai norime pakeisti bloko ar jo elemento išvaizdą arba būseną.

BEM naudoja du brūkšnelius `--`.

```
.card--featured {
    border: 2px solid gold;
}
```

`.card--featured` – išskirtinė kortelės versija.

Kitas pavyzdys:

```
.card__button--large {
    font-size: 1.5rem;
}
```

Tai didesnė kortelės mygtuko versija.

## BEM struktūra

|Tipas|Pavadinimas|Reikšmė|
|---|---|---|
|Block|`.card`|Visas blokas|
|Element|`.card__title`|Bloko dalis|
|Modifier|`.card--featured`|Bloko modifikacija|
|Modifier|`.card__button--large`|Elemento modifikacija|

> [!important] BEM taisyklė  
> `__` naudojamas elemento pavadinimui.
> 
> `--` naudojamas modifikatoriui.
> 
> Paprastas `-` naudojamas žodžiams atskirti.

---

# 19. BEM praktinis pavyzdys – kortelė

## HTML

```
<div class="card">
    <img class="card__image" src="img/anime.jpg" alt="Anime">

    <h2 class="card__title">Anime kortelė</h2>

    <p class="card__description">
        Tai trumpas kortelės aprašymas.
    </p>

    <a class="card__button" href="#">
        Skaityti daugiau
    </a>
</div>
```

## CSS

```
.card {
    width: 20rem;
    padding: 1rem;
    background-color: #222;
    color: white;
    border-radius: 0.5rem;
}

.card__image {
    width: 100%;
}

.card__title {
    font-size: 1.5rem;
}

.card__description {
    color: #ccc;
}

.card__button {
    display: inline-block;
    padding: 0.75rem 1rem;
    background-color: purple;
    color: white;
    text-decoration: none;
}
```

### Kaip tai veikia?

- `.card` – visas kortelės blokas.
    
- `.card__image` – kortelės nuotrauka.
    
- `.card__title` – antraštė.
    
- `.card__description` – aprašymas.
    
- `.card__button` – mygtukas.
    

Visos klasės aiškiai parodo, kad priklauso kortelės komponentui.

---

# 20. BEM modifikatorių pavyzdys

Tarkime, turime įprastą mygtuką ir norime skirtingų jo versijų.

## HTML

```
<button class="button">Paprastas</button>

<button class="button button--large">
    Didelis
</button>

<button class="button button--danger">
    Ištrinti
</button>
```

## CSS

```
.button {
    padding: 0.5rem 1rem;
    background-color: blue;
    color: white;
    border: none;
}

.button--large {
    font-size: 1.5rem;
    padding: 1rem 2rem;
}

.button--danger {
    background-color: red;
}
```

### Paaiškinimas

- `.button` – pagrindinis mygtukas.
    
- `.button--large` – didelio mygtuko modifikacija.
    
- `.button--danger` – pavojingo veiksmo mygtuko modifikacija.
    

HTML elementui priskiriama pagrindinė klasė ir reikalingas modifikatorius.

---

# 21. Praktinė užduotis Nr. 1 – trys paveikslėliai

**Užduotis iš skaidrių:** viename bloke įterpti tris foninius paveikslėlius.

Pavyzdys:

```
<div class="background-box"></div>
```

```
.background-box {
    width: 40rem;
    height: 25rem;

    background-image:
        url("img/pirmas.png"),
        url("img/antras.png"),
        url("img/trecias.jpg");

    background-position:
        left top,
        right bottom,
        center;

    background-size:
        8rem,
        8rem,
        cover;

    background-repeat:
        no-repeat,
        no-repeat,
        no-repeat;
}
```

### Kas vyksta?

- Pirmas paveikslėlis rodomas viršuje kairėje.
    
- Antras paveikslėlis rodomas apačioje dešinėje.
    
- Trečias paveikslėlis užpildo visą bloką.
    

Tai trys foniniai paveikslėliai viename HTML elemente.

---

# 22. Praktinė užduotis Nr. 2 – mygtukų klasės

**Užduotis iš skaidrių:** sukurti CSS klasių rinkinį mygtukams.

Reikia turėti:

- 3 spalvas.
    
- 3 dydžius.
    
- 3 formas.
    

## HTML

```
<button class="button button--blue button--small">
    Mažas
</button>

<button class="button button--green button--medium">
    Vidutinis
</button>

<button class="button button--red button--large button--rounded">
    Didelis
</button>
```

## CSS

```
.button {
    border: none;
    color: white;
    cursor: pointer;
}

/* Spalvos */

.button--blue {
    background-color: blue;
}

.button--green {
    background-color: green;
}

.button--red {
    background-color: red;
}

/* Dydžiai */

.button--small {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
}

.button--medium {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
}

.button--large {
    padding: 1rem 2rem;
    font-size: 1.25rem;
}

/* Formos */

.button--square {
    border-radius: 0;
}

.button--soft {
    border-radius: 0.5rem;
}

.button--rounded {
    border-radius: 2rem;
}
```

Taip galima sujungti skirtingas klases ir sukurti įvairius mygtukų variantus.

---

# 23. Dažniausios klaidos

## 1. Nerodo fono paveikslėlio

Galimos priežastys:

- Neteisingas failo kelias.
    
- Neteisingas paveikslėlio pavadinimas.
    
- Neteisingas failo plėtinys.
    
- Elementas neturi matomo aukščio.
    

## 2. Paveikslėlis kartojasi

Reikia naudoti:

```
background-repeat: no-repeat;
```

## 3. Paveikslėlis nėra centre

Reikia naudoti:

```
background-position: center;
```

## 4. Fonas neužpildo elemento

Dažnai padeda:

```
background-size: cover;
```

## 5. Fonas rodomas, bet tekstas necentruotas

`background-position` neveikia teksto.

Teksto horizontaliam centravimui:

```
text-align: center;
```

## 6. CSS klasės tampa neaiškios

Vietoje:

```
.box1 {}
.box2 {}
.red1 {}
```

Geriau naudoti prasmingus pavadinimus:

```
.card {}
.card__title {}
.card--featured {}
```

---

# 24. Svarbiausia prisiminti

|Sąvoka|Ką būtina žinoti?|
|---|---|
|`background-color`|Nustato fono spalvą|
|`background-image`|Įdeda foninį paveikslėlį|
|`background-size: cover`|Užpildo visą elementą|
|`background-size: contain`|Sutalpina visą paveikslėlį|
|`background-repeat: no-repeat`|Nekartoja paveikslėlio|
|`background-position: center`|Centruoja fono paveikslėlį|
|`background-attachment: fixed`|Fonas lieka vietoje slenkant|
|`background-clip`|Nustato fono piešimo ribas|
|`background-origin`|Nustato fono pozicionavimo sritį|
|`background`|Trumpasis fono savybių užrašymas|
|CSS Reset|Pašalina numatytuosius stilius|
|Normalize.css|Suvienodina naršyklių stilių skirtumus|
|Kebab-case|Žodžiai atskiriami `-`|
|BEM Block|Savarankiškas komponentas|
|BEM Element|Komponento dalis su `__`|
|BEM Modifier|Komponento variantas su `--`|

---

# 25. Klausimai pasitikrinimui

**1. Kuo skiriasi** `**cover**` **ir** `**contain**`**?**

`cover` užpildo visą elementą, o `contain` sutalpina visą paveikslėlį.

**2. Kaip padaryti, kad foninis paveikslėlis nesikartotų?**

Naudoti `background-repeat: no-repeat`.

**3. Kaip foninį paveikslėlį centruoti?**

Naudoti `background-position: center`.

**4. Ką reiškia** `**background-attachment: fixed**`**?**

Fonas vizualiai lieka toje pačioje vietoje slenkant puslapį.

**5. Kuo skiriasi** `**background-origin**` **ir** `**background-clip**`**?**

`origin` nurodo fono pozicionavimo sritį, o `clip` – jo piešimo ribas.

**6. Kam naudojamas CSS Reset?**

Kad būtų pašalinti numatytieji naršyklės stiliai.

**7. Kuo skiriasi CSS Reset ir Normalize?**

Reset panaikina daug pradinių stilių, Normalize suvienodina naršyklių skirtumus.

**8. Ką reiškia BEM?**

Block, Element, Modifier.

**9. Kuo skiriasi** `**__**` **ir** `**--**` **BEM metodikoje?**

`__` žymi bloko elementą, o `--` – modifikatorių.

**10. Ar** `**background-position: center**` **centruoja tekstą?**

Ne. Jis centruoja foninį paveikslėlį. Tekstui naudojamas `text-align: center`.

---

# 26. Naudingos nuorodos

- [MDN – CSS Backgrounds](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders)
    
- [MDN – keli foniniai paveikslėliai](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
    
- [BEM metodika](https://getbem.com/)
    
- [Normalize.css](https://necolas.github.io/normalize.css/)
    

### Vaizdo pamokos iš skaidrių

- [CSS Backgrounds](https://www.youtube.com/watch?v=zdubzXvqUyw&t=3s)
    
- [BEM](https://www.youtube.com/watch?v=MNPdifWAAa4)
    
- [CSS Reset](https://www.youtube.com/watch?v=L4wPV-K1lNI)
    

---

> [!success] Temos esmė  
> Šioje pamokoje svarbiausia išmokti valdyti CSS foną, suprasti naršyklių numatytųjų stilių skirtumus ir tvarkingai pavadinti CSS klases.
> 
> Praktikoje dažniausiai prireiks `background-image`, `background-size`, `background-position`, `background-repeat`, CSS Reset bei aiškios klasių struktūros pagal BEM.