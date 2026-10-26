# 



## Turinys

- [[#1. `alt` – alternatyvus paveikslėlio tekstas]]
- [[#2. Paveikslėlio dydis tėviniame elemente]]
- [[#3. `object-fit` – nuotraukos pritaikymas]]
- [[#4. CSS klasių pavadinimai – Naming Conventions]]
- [[#5. Nesemantiniai elementai – `div` ir `span`]]
- [[#6. Semantika – kas tai ir kam reikalinga]]
- [[#7. Pagrindiniai semantiniai elementai]]
- [[#8. Kiti naudingi semantiniai elementai]]
- [[#9. Kaip planuoti HTML puslapio karkasą]]
- [[#10. Praktika 1 – portfolio maketo semantinis karkasas]]
- [[#11. Praktika 2 – puslapio maketas su Flexbox]]
- [[#12. Dažnos klaidos ir painūs skirtumai]]
- [[#13. Klausimai kontroliniam su atsakymais]]
- [[#14. Savarankiškos užduotys]]
- [[#15. Trumpa atmintinė]]

---

## 1. `alt` – alternatyvus paveikslėlio tekstas

**Pagal skaidres 3–4.**

`alt` reiškia _alternative text_ – alternatyvų paveikslėlio tekstą. Jis rašomas `<img>` elemento viduje.

```
<img src="dog.jpg" alt="Rudas šuo bėga per pievą">
```

**Kam reikalingas `alt`?**

1. **Kai nuotrauka neužsikrauna.** Naršyklė gali parodyti alternatyvų tekstą.
2. **Prieinamumui (accessibility).** Ekrano skaitytuvas gali pasakyti, ką vaizdas reiškia žmogui, kuris jo nemato.
3. **SEO.** Alternatyvus tekstas padeda paieškos sistemoms geriau suprasti paveikslėlio turinį.

### Geras ir blogas `alt`

```
<!-- Per mažai informacijos -->
<img src="dog.jpg" alt="Paveiksliukas">

<!-- Per daug nereikalingų detalių -->
<img src="dog.jpg" alt="Labai mielas rudas šuo gražią vasaros dieną bėga per žalią pievą, pilną geltonų gėlių">

<!-- Aiškus, trumpas, prasmingas -->
<img src="dog.jpg" alt="Rudas šuo bėga per pievą">
```

Pats tikslas – **aprašyti svarbią vaizdo informaciją, o ne kiekvieną smulkmeną**. Tas pats paveikslėlis skirtinguose puslapiuose gali turėti skirtingą tinkamą `alt`, nes svarbu ir jo paskirtis.

### Kada `alt=""`?

Jeigu nuotrauka yra **tik puošmena** ir nesuteikia jokios papildomos informacijos:

```
<img src="decoration.png" alt="">
```

Tai **nėra tas pats**, kas visai nerašyti `alt`:

```
<img src="decoration.png">
```

Kai atributo nėra, ekrano skaitytuvas gali perskaityti failo pavadinimą ar kitą nereikalingą informaciją.

> [!tip] Kaip atsakyti dėstytojui?  
> `alt` – trumpas ir prasmingas paveikslėlio aprašymas. Jis svarbus prieinamumui, neužsikrovus nuotraukai ir SEO. Dekoracijoms rašome `alt=""`.

---

## 2. Paveikslėlio dydis tėviniame elemente

**Pagal skaidrę 5.**

_Tėvinis elementas_ – elementas, kurio viduje yra kitas elementas. Čia `.photo-box` yra `<img>` tėvas.

```
<div class="photo-box">
    <img src="landscape.jpg" alt="Kalnų kraštovaizdis">
</div>
```

### A atvejis – tėvas turi dydį, nuotraukai dydis nenustatytas

```
.photo-box {
    width: 20rem;
    height: 20rem;
}
```

Nuotrauka pagal nutylėjimą naudoja savo natūralius matmenis. Ji **nebūtinai užpildys** tėvinį elementą, gali būti mažesnė arba išlįsti už jo ribų.

### B atvejis – tėvas turi plotį ir aukštį, nuotrauka `width: 100%`

```
.photo-box {
    width: 20rem;
    height: 20rem;
}

.photo-box img {
    width: 100%;
}
```

Nuotrauka prisitaiko prie tėvo turinio pločio, bet jos aukštis paprastai išlaiko natūralias proporcijas, nes atskirai nenurodytas.

### C atvejis – tėvas turi tik plotį

```
.photo-box {
    width: 20rem;
}

.photo-box img {
    width: 100%;
}
```

Tėvo aukštis gali natūraliai prisitaikyti prie nuotraukos aukščio.

### O jeigu `height: 100%`?

```
.photo-box {
    width: 20rem;
    height: 15rem;
}

.photo-box img {
    width: 100%;
    height: 100%;
}
```

Nuotraukos elementas užima visą nurodytą plotį ir aukštį. **Jei jos pradinės proporcijos kitokios, vaizdas gali būti ištemptas.** Taip pat svarbu, kad procentinis aukštis galėtų būti apskaičiuotas pagal tėvinį elementą.

> [!important] Atsiminti  
> Vien `width: 100%` dažnai užtenka proporcingai nuotraukai. Jeigu nustatai ir plotį, ir aukštį, prireikia `object-fit`.

---

## 3. `object-fit` – nuotraukos pritaikymas

**Pagal skaidres 6–9.**

`object-fit` nustato, **kaip pati nuotrauka telpa `<img>` elemento srityje**. Dažnai taikomas `<img>` ir `<video>`.

Jo efektas aiškiausias, kai elementui nurodyti ir `width`, ir `height`, arba naudojamas `aspect-ratio`.

```
.anime-image {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
}
```

### Pagrindinės reikšmės

|Reikšmė|Ką daro?|Trūkumas / nauda|
|---|---|---|
|`fill`|Ištempia vaizdą per visą `<img>` sritį|Gali iškraipyti proporcijas; **numatytoji reikšmė**|
|`none`|Vaizdo nepritaiko pagal elemento dydį|Lieka natūralaus dydžio, dalis gali netilpti|
|`contain`|Sutalpina **visą** vaizdą, išlaiko proporcijas|Gali likti tuščių tarpų|
|`cover`|**Užpildo visą** sritį, išlaiko proporcijas|Gali nukirpti vaizdo kraštus|

### `cover` prieš `contain`

```
/* Kortelė: svarbiau užpildyti visą plotą */
.card-image {
    width: 14rem;
    height: 9rem;
    object-fit: cover;
}

/* Logotipas: svarbiau matyti visą vaizdą */
.logo-image {
    width: 10rem;
    height: 6rem;
    object-fit: contain;
}
```

**Kaip pasirinkti?**

- Profilio, kortelės ar galerijos nuotrauka – dažnai **`cover`**.
- Logotipas ar vaizdas, kurio visą turinį būtina matyti – **`contain`**.
- `fill` rinktis atsargiai, nes gali ištempti veidus arba objektus.
- `none` naudojamas, kai specialiai norime natūralaus dydžio vaizdo.

### Papildomas paaiškinimas: `object-position`

Ši savybė nėra atskirai nagrinėta pateiktose skaidrėse, bet naudinga kartu su `cover`:

```
.card-image {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    object-position: center top;
}
```

Tai gali išsaugoti svarbią viršutinę nuotraukos dalį, kai dalis vaizdo nukerpama.

> [!tip] Dėstytojo klausimas  
> Kuo skiriasi `cover` ir `contain`? **`cover` užpildo visą vietą ir gali nukirpti; `contain` parodo viską, bet gali palikti tuščių vietų.**

---

## 4. CSS klasių pavadinimai – Naming Conventions

**Pagal skaidres 10–14.**

_Naming conventions_ – susitarimai, kaip rašome kintamųjų, klasių ir kitų dalykų pavadinimus, kad kodą būtų lengviau skaityti.

### `camelCase` ir `kebab-case`

```
/* camelCase */
.redBox {
    border: 0.1rem solid red;
}

/* kebab-case */
.red-box {
    border: 0.1rem solid red;
}
```

- `camelCase` – naujas žodis prasideda didžiąja raide.
- `kebab-case` – mažosios raidės, tarp žodžių brūkšnelis.
- **Abu veikia**, bet skaidrėse CSS klasėms rekomenduojamas **`kebab-case`**.
- Svarbu pasirinkto stiliaus laikytis **nuosekliai visame projekte**.

### Kodėl geri pavadinimai svarbūs?

1. Pasako **elemento paskirtį**.
2. Pasako, **kurioje puslapio vietoje** jis naudojamas.
3. Padeda matyti **susijusius elementus**.

|Nelabai aišku|Aiškiau|Kodėl?|
|---|---|---|
|`.box1`|`.product-card`|Aišku, kad tai prekės kortelė|
|`.text2`|`.product-description`|Aišku, ką tekstas aprašo|
|`.red-button`|`.delete-button`|Paskirtis išlieka, net pakeitus spalvą|
|`.big-title`|`.page-title`|Pasako antraštės vaidmenį|
|`.left-menu`|`.sidebar-menu`|Nurodo puslapio sritį|

```
<article class="product-card">
    <h2 class="product-card-title">Kuprinė</h2>
    <p class="product-card-description">Juoda kuprinė kasdienai.</p>
    <button class="delete-button">Ištrinti</button>
</article>
```

> [!warning] Svarbu  
> Klasės pavadinimas **nesukuria HTML ryšio**. `.product-card-title` automatiškai nepriklauso `.product-card` – tai tik žmogui suprantamas pavadinimas. Tikrą tėvo ir vaiko santykį nustato HTML struktūra.

### Ką naudoti mūsų užduotyse?

Rinksimės prasmingus angliškus pavadinimus su brūkšneliais: `.services-section`, `.service-card`, `.gallery-section`, `.contact-form`, `.footer-links`.

---

## 5. Nesemantiniai elementai – `div` ir `span`

**Pagal skaidrę 15.**

Nesemantiniai reiškia, kad žymės **pačios nepasako turinio paskirties**.

### `<div>` – grupavimui

```
<div class="anime-card">
    <h2>Frieren</h2>
    <p>Anime apie kelionę ir prisiminimus.</p>
</div>
```

`div` pagal nutylėjimą yra **blokinis** (`display: block`) elementas. Jis naudingas grupavimui ir CSS išdėstymui, kai nėra tinkamesnio semantinio elemento.

### `<span>` – teksto daliai

```
<p>Man patinka <span class="anime-name">Frieren</span>.</p>
```

```
.anime-name {
    color: purple;
}
```

`span` pagal nutylėjimą yra **eilutinis** (`display: inline`) elementas.

**Skirtumas:** `div` įprastai sudaro atskirą bloką, `span` lieka teksto eilutėje. Abu galima stilizuoti per CSS.

> [!important] `div` nėra blogis  
> Per semantikos pamoką akcentuojame semantines žymes, bet realiuose projektuose `div` vis dar tinka išdėstymui, kai grupė neturi atskiros semantinės reikšmės.

---

## 6. Semantika – kas tai ir kam reikalinga

**Pagal skaidres 16–20.**

**Semantiniai elementai** – HTML žymės, kurios pačios nurodo, **ką reiškia jų viduje esantis turinys**.

Pavyzdys:

```
<!-- Vien pagal žymę paskirtis neaiški -->
<div class="site-header">Mano svetainė</div>

<!-- Žymė pasako, kad tai įvadinė sritis -->
<header>Mano svetainė</header>
```

### Kodėl naudojame semantiką?

- Programuotojui lengviau suprasti kodą.
- Aiškesnė puslapio struktūra.
- Ekrano skaitytuvai lengviau supranta puslapio sritis.
- Paieškos sistemos geriau interpretuoja turinį (SEO).

### Skirtumas tarp struktūros ir dizaino

HTML:

```
<aside>Susijusios naujienos</aside>
```

Tai **nereiškia**, kad elementas automatiškai bus dešinėje. `aside` žymi papildomą turinį; jo išdėstymą valdys CSS.

> [!tip] Atsakymas mokytojui  
> Semantika nurodo turinio **prasmę**, o CSS – **kaip jis atrodo ir kur išdėstytas**.

---

## 7. Pagrindiniai semantiniai elementai

**Pagal skaidres 17–21.**

|Žymė|Paskirtis|Pavyzdys|
|---|---|---|
|`<header>`|Puslapio arba skyriaus įvadinė dalis|Pavadinimas, hero, meniu|
|`<nav>`|Navigacijos nuorodų sritis|Svetainės meniu|
|`<main>`|Pagrindinis puslapio turinys|Paslaugos, galerija, kontaktai|
|`<section>`|Teminė turinio dalis|„Apie mane“|
|`<article>`|Savarankiškas turinys|Naujiena, įrašas, atskira publikacija|
|`<aside>`|Papildoma susijusi informacija|Papildomos nuorodos, šoninė informacija|
|`<footer>`|Puslapio arba skyriaus poraštė|Autorių teisės, papildomos nuorodos|
|`<figure>`|Savarankiškas vaizdas ar iliustracija|Galerijos kūrinys|
|`<figcaption>`|`figure` paaiškinimas|Nuotraukos pavadinimas|

### `header`, `main`, `footer` – pagrindinis karkasas

```
<body>
    <header>
        <h1>Mano svetainė</h1>
    </header>

    <main>
        <section>
            <h2>Naujienos</h2>
        </section>
    </main>

    <footer>
        <p>© 2026</p>
    </footer>
</body>
```

- `header` – įvadas.
- `main` – pagrindinis, šiam puslapiui būdingas turinys.
- `footer` – baigiamoji dalis.

Paprastai puslapyje naudojamas **vienas matomas `main`**. `header` ir `footer` gali būti ir atskiro straipsnio ar sekcijos viduje.

### `section` ir `article` – ne tas pats

**`section`** grupuoja turinį pagal temą:

```
<section class="news-section">
    <h2>Anime naujienos</h2>
</section>
```

**`article`** prasmingas savarankiškai:

```
<article class="news-article">
    <h2>Paskelbtas naujas anime sezonas</h2>
    <p>Trumpa naujiena...</p>
</article>
```

Vien tai, kad kažkas yra kortelės formos, **nereiškia, kad privalo būti `article`**. Jeigu tai savarankiškas informacinis vienetas, `article` tinka; kitaip gali tikti `div`.

### `nav` ir `ul` – diskusija iš paskaitos

**`nav`** nusako navigacijos **paskirtį**, o **`ul`** nusako nuorodų **sąrašo struktūrą**. Tai nėra konkuruojantys elementai: gali būti ir abu kartu.

```
<footer>
    <nav aria-label="Socialiniai tinklai">
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </nav>
</footer>
```

Bet ne kiekvienam mažam nuorodų sąrašui būtinas `nav`. Kai tiesiog rodome nuorodų sąrašą:

```
<footer>
    <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
    </ul>
</footer>
```

**Abu variantai gali būti tinkami pagal paskirtį.** `nav` nėra skirtas tik `header` ir nebūtinai turi būti svetainės viršuje.

### `figure` ir `figcaption`

```
<figure>
    <img src="cactus.jpg" alt="Kaktusas oranžiniame vazone">
    <figcaption>Kaktuso fotografija</figcaption>
</figure>
```

`figure` gali apimti ir daugiau nei vieną paveikslėlį. `figcaption` nėra privalomas kiekvienam `figure`, bet jei yra, jis paaiškina iliustraciją.

---

## 8. Kiti naudingi semantiniai elementai

**Pagal skaidrę 22.**

|Žymė|Kam skirta?|Paprastas pavyzdys|
|---|---|---|
|`<blockquote>`|Ilgesnei citatai iš kito šaltinio|Knygos ištrauka|
|`<q>`|Trumpai citatai sakinio viduje|Kieno nors žodžiai|
|`<time>`|Datai arba laikui|Data su `datetime`|
|`<address>`|Kontaktinei informacijai|Autoriaus ar organizacijos kontaktai|
|`<cite>`|Kūrinio pavadinimui nurodyti|Knygos ar filmo pavadinimas|
|`<code>`|Kodo fragmentui|HTML ar JS kodas tekste|

```
<p>Renginys vyks <time datetime="2026-11-10">lapkričio 10 d.</time>.</p>
<p>HTML elementas <code>&lt;main&gt;</code> žymi pagrindinį turinį.</p>
<blockquote>
    <p>Ilgesnė cituojamo teksto ištrauka.</p>
    <footer>Citatos autorius</footer>
</blockquote>
```

**Pastaba:** skaidrėje `<cite>` apibūdintas kaip šaltinių žymėjimas; tiksliau HTML elementas paprastai vartojamas **kūrinio pavadinimui** (pvz., knygai, filmui, straipsniui), o ne bet kokiam URL ar žmogaus vardui.

---

## 9. Kaip planuoti HTML puslapio karkasą

### Kodėl iš pradžių „griaučiai“?

Per praktiką mokytojas pasiūlė **pirma susidėlioti HTML žymes**, o ne iškart stilizuoti. Taip lengviau matyti:

1. Kur prasideda ir baigiasi pagrindinės sritys.
2. Kur yra teminės sekcijos.
3. Kur savarankiškas turinys, o kur tik išdėstymo grupė.
4. Kokie elementai reikalingi formoms, nuorodoms ir paveikslėliams.

### Darbo eiga

**1 žingsnis.** Atpažink `header`, `main`, `footer`.

**2 žingsnis.** Pagrindinį turinį padalink į temas (`section`).

**3 žingsnis.** Į sekcijas dėk prasmingus elementus – `h2`, `p`, `img`, `figure`, `form`, `a` ir kt.

**4 žingsnis.** Tik po to galvok apie išdėstymą ir CSS.

### Schema

```
body
├── header
│   └── įvadinė dalis / hero
├── main
│   ├── section: paslaugos
│   ├── section: apie žmogų
│   ├── section: galerija
│   └── section: kontaktai
└── footer
    ├── autorinių teisių tekstas
    └── socialinių nuorodų sąrašas
```

_Pastaba:_ „hero“ yra dizaino srities pavadinimas, o **ne atskira HTML žymė**. Priklausomai nuo konteksto, įvadinis hero gali būti `header` viduje arba kaip atskira `main` sekcija.

---

## 10. Praktika 1 – portfolio maketo semantinis karkasas

**Pagal 23 skaidrę ir paskaitoje aptartą Kailey maketą.** Užduotis – **tik HTML žymių karkasas**, panaudojant semantinius elementus. Kol kas nereikia CSS ir nereikia tikslaus dizaino.

### Ką matome makete?

**`header` – įvadinė sritis:**

- Kailey nuotrauka;
- „Hello, I am Kailey“ – pagrindinė antraštė (`h1`);
- trumpas pristatymas ir mygtukas / nuoroda.

**`main` – keturios temos:**

1. **Services** – „What things I am doing“: `h2`, trumpas `p`, keturios paslaugų kortelės (galima `article`, jei laikome savarankiškais paslaugų aprašymais); kiekvienoje yra ikonėlė, `h3`, `p`.
2. **About** – „A little more about Kailey“: `h2`, `img`, aprašymo `p`, galimos socialinės `a` nuorodos.
3. **Gallery** – „Selected Designs“: `h2`, trys `figure` su `img` (ir, jei reikia, `figcaption`).
4. **Contact** – „Get in touch“: `h2`, `form`, `label`, `input`, `textarea`, `button`; šalia – „Contact Info“ su kontaktiniu tekstu, gali būti `address`.

**`footer` – poraštė:**

- autorinių teisių tekstas (`p` arba `small`);
- penkios socialinių tinklų nuorodos – `ul` → `li` → `a`; jei laikome navigacine sritimi, galima sąrašą apgaubti `nav`.

### HTML pavyzdys: semantinis karkasas

Pavyzdys parodo galimą struktūrą. Antraštės ir paslaugų pavadinimai yra pagal matomą maketą arba supaprastinti, o paveikslėlių failai – vieta tavo būsimiems failams.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kailey Portfolio</title>
</head>
<body>
    <header>
        <img src="img/kailey.jpg" alt="Kailey portretas">
        <h1>Hello, I am Kailey</h1>
        <p>Welcome to my portfolio.</p>
        <a href="#about">Read More</a>
    </header>

    <main>
        <section class="services-section">
            <h2>What things I am doing</h2>
            <p>My services</p>

            <article class="service-card">
                <h3>Graphic Design</h3>
                <p>Graphic design projects.</p>
            </article>
            <article class="service-card">
                <h3>Photography</h3>
                <p>Photography projects.</p>
            </article>
            <article class="service-card">
                <h3>UI/UX Design</h3>
                <p>Interface design.</p>
            </article>
            <article class="service-card">
                <h3>Illustration</h3>
                <p>Illustration projects.</p>
            </article>
        </section>

        <section class="about-section" id="about">
            <h2>A little more about Kailey</h2>
            <img src="img/about.jpg" alt="Kailey nuotrauka">
            <p>About Kailey...</p>
        </section>

        <section class="gallery-section">
            <h2>Selected Designs</h2>
            <figure>
                <img src="img/design-1.jpg" alt="Spalvoti sausainiai">
            </figure>
            <figure>
                <img src="img/design-2.jpg" alt="Kaktusas vazone">
            </figure>
            <figure>
                <img src="img/design-3.jpg" alt="Puodelis iš viršaus">
            </figure>
        </section>

        <section class="contact-section">
            <h2>Get in touch</h2>
            <form>
                <label for="name">Name</label>
                <input id="name" name="name" type="text">

                <label for="email">Email</label>
                <input id="email" name="email" type="email">

                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>

            <section class="contact-info">
                <h3>Contact Info</h3>
                <address>Contact details</address>
            </section>
        </section>
    </main>

    <footer>
        <p>Copyright © 2017 Your Company | Design: Tooplate</p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Pinterest</a></li>
        </ul>
    </footer>
</body>
</html>
```

> [!important] Kodėl čia ne visur `div`?  
> Užduotis buvo apie **semantinį karkasą**, todėl parinktos žymės, atskleidžiančios turinio prasmę. Realiame puslapyje papildomas `div` dėl CSS nebūtų klaida.

### Kaip trumpai išaiškinti dėstytojui?

„Puslapį padalinau į `header`, `main` ir `footer`. `main` yra keturios teminės `section`: paslaugos, pristatymas, galerija ir kontaktai. Paslaugų kortelėse yra antraštės ir aprašymai, galerijoje – `figure` su `img`, kontaktuose – `form`, o `footer` yra tekstas ir socialinių nuorodų sąrašas.“

---

## 11. Praktika 2 – puslapio maketas su Flexbox

**Pagal 24 skaidrę.**

Antroji užduotis skaidrėje suformuluota taip:

- Sukurti **tinklalapio maketą su Flexbox**.
- Naudoti **semantinius elementus**.
- Orientuotis pagal parodytus rezultato pavyzdžius.

Skaidrėje pateiktas vizualus maketo pavyzdys, bet **pilno HTML/CSS sprendimo ar tikslių matmenų PDF nėra**. Toliau – supaprastintas papildomas demonstracinis pavyzdys, ne oficialus užduoties atsakymas.

```
<body>
    <header>
        <h1>Travel World</h1>
    </header>

    <main>
        <section class="gallery-section">
            <h2>Photo Gallery</h2>

            <figure class="gallery-item">
                <img src="img/mountain.jpg" alt="Kalnai">
            </figure>
            <figure class="gallery-item">
                <img src="img/sea.jpg" alt="Jūra">
            </figure>
        </section>
    </main>

    <footer>
        <p>© 2026 Travel World</p>
    </footer>
</body>
```

```
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header, footer {
    text-align: center;
    padding: 2rem;
}

.gallery-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
}

.gallery-section h2 {
    width: 100%;
    text-align: center;
}

.gallery-item {
    margin: 0;
    width: 18rem;
}

.gallery-item img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
}
```

**Čia pasikartoja keli dalykai:** semantinės sritys, `kebab-case`, `alt`, `object-fit: cover` ir `display: flex`.

---

## 12. Dažnos klaidos ir painūs skirtumai

|Klaida / painiava|Kaip yra iš tikrųjų?|
|---|---|
|Visai nerašau `alt`|Svarbiems vaizdams rašome prasmingą `alt`, dekoracijoms – `alt=""`|
|`cover` viską parodys|Ne, dalis gali būti nukirpta|
|`contain` visada užpildys plotą|Ne, gali likti tuščių vietų|
|CSS klasę vadinu `.box1`|Geriau įvardyti pagal paskirtį, pvz., `.service-card`|
|`div` naudoti draudžiama|Ne, bet semantinei daliai geriau tinkama semantinė žymė|
|`<aside>` visada dešinėje|Ne, CSS nustato vietą|
|`<nav>` turi būti tik viršuje|Ne, gali būti ir poraštėje, jei tai navigacijos sritis|
|`<ul>` yra tas pats, kas `<nav>`|Ne, `ul` yra sąrašas, `nav` – navigacinė sritis|
|Kiekvienai kortelei būtinas `<article>`|Ne, tik kai tai savarankiškas turinys|
|`header` reiškia tik meniu|Ne, gali būti ir prisistatymo/įvadinė sritis|
|`hero` yra HTML žymė|Ne, tai dizaino dalies pavadinimas|
|`section` automatiškai išdėsto korteles|Ne, išdėstymą darome CSS|

---

## 13. Klausimai kontroliniam su atsakymais

**1. Kas yra `alt`?**  
Alternatyvus paveikslėlio tekstas, naudojamas prieinamumui, neužsikrovus nuotraukai ir SEO.

**2. Koks turi būti geras `alt`?**  
Trumpas, aiškus, prasmingas ir atitinkantis vaizdo paskirtį.

**3. Kada tinka `alt=""`?**  
Kai vaizdas tik dekoratyvinis ir neperduoda svarbios informacijos.

**4. Ką reiškia `width: 100%` prie `img`?**  
Nuotraukos elemento plotis prisitaiko prie tėvinio turinio srities pločio.

**5. Kas atsitinka nustačius kitokias `width` ir `height` proporcijas?**  
Be tinkamo pritaikymo vaizdas gali būti iškraipytas.

**6. Kuo skiriasi `object-fit: cover` ir `contain`?**  
`cover` užpildo ir gali nukirpti; `contain` rodo visą vaizdą, bet gali palikti tarpus.

**7. Kokia numatytoji `object-fit` reikšmė?**  
`fill`.

**8. Kuo skiriasi `camelCase` ir `kebab-case`?**  
`camelCase` naudoja didžiąsias raides naujiems žodžiams, `kebab-case` – brūkšnelius tarp mažosiomis raidėmis parašytų žodžių.

**9. Kuris būdas rekomenduojamas CSS klasėms?**  
`kebab-case`.

**10. Kodėl `.delete-button` aiškiau nei `.red-button`?**  
Nes pasako elemento paskirtį, kuri nepriklauso nuo spalvos.

**11. Kuo skiriasi `div` ir `span`?**  
`div` pagal nutylėjimą blokinis grupavimo elementas, `span` – eilutinis elementas teksto daliai.

**12. Kas yra HTML semantika?**  
Žymių naudojimas taip, kad jos pačios parodytų turinio prasmę ir paskirtį.

**13. Kokie trys pagrindiniai puslapio karkaso elementai?**  
`header`, `main`, `footer`.

**14. Kuo `main` skiriasi nuo `section`?**  
`main` yra bendras pagrindinis puslapio turinys, o `section` – atskira teminė jo dalis.

**15. Kuo `section` skiriasi nuo `article`?**  
`section` grupuoja turinį pagal temą, `article` reiškia savarankišką turinio vienetą.

**16. Kam skirtas `aside`?**  
Papildomai informacijai, susijusiai su aplinkiniu turiniu.

**17. Kuo skiriasi `nav` ir `ul`?**  
`nav` žymi navigacijos sritį, `ul` – netvarkingą (ne numeruotą) sąrašą. Galima naudoti kartu.

**18. Kam naudojame `figure`?**  
Savarankiškai iliustracijai, vaizdui arba keliems susijusiems vaizdams.

**19. Kam skirtas `figcaption`?**  
`figure` turinio paaiškinimui ar pavadinimui.

**20. Ar HTML semantinės žymės savaime kuria maketo dizainą?**  
Ne. Tam reikia CSS.

---

## 14. Savarankiškos užduotys

### Užduotis A – pataisyk `alt`

Nuspręsk, kaip perrašyti:

```
<img src="cat.jpg" alt="Nuotrauka">
<img src="line.png">
<img src="cat.jpg" alt="Labai labai graži katė sėdi ant labai gražios palangės šiltą vasaros dieną">
```

**Pasitikrinimas:** pirmai – konkretus trumpas katės aprašymas; antrai, jei tai tik puošmena, `alt=""`; trečiai – sutrumpink iki svarbios informacijos.

### Užduotis B – išsirink `object-fit`

- Profilio nuotrauka turi užpildyti 8rem × 8rem kvadratą → `cover`.
- Logotipas turi matytis visas 8rem × 8rem plote → `contain`.
- Tyčia nori rodyti nuotraukos natūralų dydį → `none`.

### Užduotis C – įvardyk klases

Sugalvok prasmingus `kebab-case` pavadinimus puslapio viršui, galerijos kortelei, jos pavadinimui ir kontaktų mygtukui.

Galimi variantai: `.site-header`, `.gallery-card`, `.gallery-card-title`, `.contact-submit-button`.

### Užduotis D – semantinis mini puslapis

Be CSS susidėk:

- `header` su `h1` ir meniu;
- `main` su dviem `section`;
- pirmoje – savarankišką `article`;
- antroje – `figure` su `img`;
- `footer` su `p` ir socialinių nuorodų sąrašu.

Pabaigoje mokėk paaiškinti **kodėl kiekvienai daliai pasirinkai tokią HTML žymę**.

---

## 15. Trumpa atmintinė

> [!summary] Vienu žvilgsniu
> 
> - `alt` – prasmingas alternatyvus vaizdo tekstas.
> - `alt=""` – kai paveikslėlis tik dekoracija.
> - `object-fit: cover` – užpildo, bet gali nukirpti.
> - `object-fit: contain` – sutalpina visą vaizdą, gali palikti tarpus.
> - CSS klasėms rekomenduojama `kebab-case` ir prasmingi pavadinimai.
> - `div` / `span` – nesemantiniai elementai.
> - `header` – įvadas, `main` – pagrindinis turinys, `footer` – poraštė.
> - `section` – tema, `article` – savarankiškas turinys.
> - `figure` – iliustracija, `figcaption` – jos paaiškinimas.
> - `nav` – navigacija, `ul` – sąrašas; jie gali būti kartu.
> - **Pirmiausia HTML karkasas → tada turinys → tada CSS.**