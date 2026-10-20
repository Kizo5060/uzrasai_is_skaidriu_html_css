---
tags: [html-css, konspektas]
---

# HTML – formos

> [!info] Apie užrašus
> Struktūruoti mokymosi užrašai pagal pateiktą paskaitų medžiagą. Sąvokos paaiškintos su pavyzdžiais, kad būtų galima jas pritaikyti HTML ir CSS kode.

## 04 – HTML formos (išsamus konspektas)

> [!info] Apie pamoką
> Konspektas pagal TECHIN **„Formos“ (31 skaidrė)**. Prie skaidrių medžiagos pridėti paprasti paaiškinimai, kodas ir užduoties pavyzdys. Pavyzdžius galima įklijuoti į `index.html` ir išbandyti naršyklėje.

## 1. Kam reikalingos HTML formos?

**Forma** skirta surinkti vartotojo įvestus duomenis, pavyzdžiui, vardą, el. paštą, slaptažodį arba pasirinkimus.

```html
<form>
    <label for="vardas">Vardas:</label>
    <input type="text" id="vardas" name="vardas">
</form>
```

- `<form>` – visos formos pradžia ir pabaiga; paprastai elgiasi kaip `block` elementas.
- `<input>` – įvedimo arba pasirinkimo laukelis.
- `<label>` – laukelio pavadinimas.
- `<textarea>` – didesnis laukelis tekstui.
- `<select>` – išskleidžiamas pasirinkimų sąrašas.
- `<option>` – vienas pasirinkimas sąraše.
- `<button>` – mygtukas.

**Svarbu:** vien HTML forma gali parodyti laukelius ir pateikti užklausą, tačiau be serverio kodo savaime nesukuria paskyros ir neišsaugo duomenų.

## 2. `action` – kur keliauja forma?

```html
<form action="action_page.php">
    <input type="text" name="vardas">
    <button type="submit">Siųsti</button>
</form>
```

`action` nurodo **adresą**, į kurį siunčiami formos duomenys paspaudus `submit`.

- `action="action_page.php"` – pateikiama į nurodytą failą / serverio adresą.
- `action=""` – pateikiama į dabartinio puslapio adresą.
- `action="#"` – dažnas mokomasis variantas, bet paspaudus mygtuką forma vis tiek gali būti pateikta ir adresas pasikeisti.

## 3. `autocomplete` – automatinis užpildymas

Naršyklė gali pasiūlyti anksčiau įrašytą vardą, paštą ir pan.

```html
<form autocomplete="on">
    <label for="email">El. paštas:</label>
    <input type="email" id="email" name="email" autocomplete="email">
</form>
```

- `autocomplete="on"` – leidžiamas automatinis užpildymas.
- `autocomplete="off"` – prašoma jo nesiūlyti, bet naršyklė kai kuriais atvejais gali nepaisyti.

## 4. `method`: GET ir POST

`method` nusako, **kaip siunčiami** formos duomenys. Jeigu nenurodytas, numatytasis metodas yra `GET`.

### GET

```html
<form action="" method="get">
    <input type="text" name="vardas" value="Egle">
    <button type="submit">Siųsti</button>
</form>
```

Po pateikimo adresas gali atrodyti taip:

```text
index.html?vardas=Egle
```

- `?` – nuo čia prasideda URL parametrai.
- `=` – atskiria parametro pavadinimą ir reikšmę.
- `&` – atskiria skirtingus parametrus.

Pavyzdys: `?vardas=Egle&pavarde=Petrauskaite`.

**GET netinka slaptažodžiams**, nes duomenys matomi URL adrese.

### POST

```html
<form action="action_page.php" method="post">
    <input type="text" name="vardas">
    <button type="submit">Siųsti</button>
</form>
```

POST duomenys siunčiami užklausos **body** dalyje, ne URL parametrais. Dažnai naudojamas registracijoms, prisijungimams ir duomenų keitimui. Vien POST savaime neužšifruoja duomenų – tikram saugumui reikalingas **HTTPS** ir serverio patikra.

| GET | POST |
|---|---|
| Reikšmės URL parametruose | Reikšmės užklausos turinyje |
| Tinka paieškai / filtrams | Tinka registracijai / duomenų pateikimui |
| Netinka jautriems duomenims | Su HTTPS tinkamesnis jautriems duomenims |

## 5. `<input>` tipai (10, 12–15 ir 30 skaidrės)

`type` nusako, kokios paskirties bus laukelis.

| Kodas | Paskirtis |
|---|---|
| `type="text"` | Paprastas tekstas |
| `type="password"` | Slaptažodis (ekrane paslepia simbolius) |
| `type="email"` | El. paštas |
| `type="tel"` | Telefonas |
| `type="number"` | Skaičius |
| `type="radio"` | Vienas pasirinkimas iš grupės |
| `type="checkbox"` | Varnele pažymimas pasirinkimas |
| `type="submit"` | Formos pateikimo mygtukas |
| `type="reset"` | Grąžina pradinę formos būseną |
| `type="button"` | Paprastas mygtukas |
| `type="date"` | Datos pasirinkimas |
| `type="file"` | Failo pasirinkimas |
| `type="color"` | Spalvos pasirinkimas |
| `type="range"` | Slankiklis |

Paskutinės kelios eilutės – papildomi HTML5 tipai pasipraktikuoti.

### Paprastas tekstas

```html
<label for="vardas">Vardas:</label>
<input type="text" id="vardas" name="vardas">
```

### Slaptažodis

```html
<label for="slaptazodis">Slaptažodis:</label>
<input type="password" id="slaptazodis" name="slaptazodis">
```

`password` paslepia simbolius ekrane, bet **nėra duomenų šifravimas**.

## 6. `<label>`, `for` ir `id`

`label` pasako, **ką reikia įvesti**. Jis susiejamas su laukeliu, kai `for` ir `id` reikšmės vienodos.

```html
<label for="pavarde">Pavardė:</label>
<input type="text" id="pavarde" name="pavarde">
```

- `for="pavarde"` – prie kurio lauko priklauso užrašas.
- `id="pavarde"` – konkretaus elemento identifikatorius puslapyje.
- `name="pavarde"` – lauko pavadinimas, siunčiamas su forma.
- Paspaudus ant `label`, naršyklė nukreipia į atitinkamą lauką.

> `label` yra laukelio užrašas; `for` turi sutapti su to laukelio `id`.

## 7. `radio` – pasirinkti vieną variantą

```html
<input type="radio" id="vyras" name="lytis" value="vyras">
<label for="vyras">Vyras</label>

<input type="radio" id="moteris" name="lytis" value="moteris">
<label for="moteris">Moteris</label>
```

**Esminis dalykas:** abu mygtukai turi tą patį `name="lytis"`, todėl galima pasirinkti tik **vieną**.

- Pasirinkus vyrą: `lytis=vyras`.
- Pasirinkus moterį: `lytis=moteris`.
- Jei nieko nepasirenkame, ši grupė paprastai nesiunčia parametro.
- Norint iš anksto pažymėti, pridedama `checked`:

```html
<input type="radio" name="lytis" value="moteris" checked> Moteris
```

## 8. `checkbox` – varnelės

```html
<input type="checkbox" id="muzika" name="pomėgiai" value="muzika">
<label for="muzika">Muzika</label>

<input type="checkbox" id="sportas" name="pomėgiai" value="sportas">
<label for="sportas">Sportas</label>
```

Skirtingai nuo `radio`, **galima pažymėti abu**. Pažymėtų laukų reikšmės siunčiamos; nepažymėtų – ne.

```html
<input type="checkbox" id="taisykles" name="taisykles" value="sutinku" required>
<label for="taisykles">Sutinku su taisyklėmis</label>
```

`required` gali reikalauti pažymėti varnelę prieš pateikiant formą.

## 9. `<select>` ir `<option>`

```html
<label for="salis">Šalis:</label>
<select id="salis" name="salis">
    <option value="lt">Lietuva</option>
    <option value="de">Vokietija</option>
    <option value="pl">Lenkija</option>
</select>
```

- `select` – išskleidžiamas sąrašas.
- `option` – atskiras pasirinkimas.
- `value="lt"` – siunčiama reikšmė, jeigu pasirinkta Lietuva.
- `selected` – iš anksto pasirinktas variantas.

```html
<option value="de" selected>Vokietija</option>
```

## 10. `<textarea>` – daugiau teksto

```html
<label for="zinute">Žinutė:</label>
<textarea id="zinute" name="zinute" rows="4" cols="30"></textarea>
```

Skirtingai nuo paprasto `<input>`, čia galima patogiai rašyti kelias eilutes. `rows` – matomų eilučių skaičius, `cols` – apytikslis plotis simboliais.

## 11. `<datalist>` – pasiūlymai rašant

```html
<label for="miestas">Miestas:</label>
<input type="text" id="miestas" name="miestas" list="miestai">
<datalist id="miestai">
    <option value="Vilnius">
    <option value="Kaunas">
    <option value="Alytus">
</datalist>
```

Renkantis / rašant naršyklė pasiūlys variantus. **Skirtumas nuo `select`:** paprastame `datalist` gali įrašyti ir kitą reikšmę, kurios sąraše nėra.

## 12. `submit`, `reset` ir paprastas `button`

```html
<button type="submit">Siųsti</button>
<button type="reset">Išvalyti</button>
<button type="button">Spausk</button>
```

- `submit` – pateikia formą.
- `reset` – **atstato pradines reikšmes** (nebūtinai išvalo viską).
- `button` – vienas pats nieko nedaro, dažnai naudojamas su JavaScript.

Tą patį galima rašyti su `input`:

```html
<input type="submit" value="Siųsti">
<input type="reset" value="Atstatyti">
```

## 13. Formos grupavimas

```html
<fieldset>
    <legend>Asmens duomenys</legend>
    <label for="vardas2">Vardas:</label>
    <input type="text" id="vardas2" name="vardas">
</fieldset>
```

- `<fieldset>` sugrupuoja susijusius formos laukus.
- `<legend>` užrašo grupės pavadinimą.
- Paprastas `<div>` irgi gali būti naudojamas laukams grupuoti, bet neturi tokios semantinės paskirties.

## 14. `name` ir `value` – labai svarbu!

```html
<input type="text" id="vardas3" name="vardas" value="Egle">
```

**Kaip skaityti:**

- `id="vardas3"` – identifikatorius HTML puslapyje.
- `name="vardas"` – **kokiu pavadinimu** išsiųsime duomenį.
- `value="Egle"` – **kokia pradinė reikšmė** jau įrašyta į laukelį.
- Jei vartotojas įrašo `Jonas`, bus siunčiama `vardas=Jonas`, o ne senoji reikšmė.

Radio pavyzdys:

```html
<input type="radio" name="lytis" value="vyras"> Vyras
<input type="radio" name="lytis" value="moteris"> Moteris
```

Čia `value` nurodo, **ką išsiųsti**, jei pažymėtas konkretus pasirinkimas. Vien užrašo `Vyras` šalia mygtuko neužtenka reikšmei nustatyti.

> [!important] Įsiminti
> **name = pavadinimas, value = reikšmė, id = identifikatorius, label = matomas užrašas.**

## 15. Kiti atributai

| Atributas | Ką daro? | Pavyzdys |
|---|---|---|
| `placeholder` | Pilka užuomina tuščiame laukelyje | `placeholder="Įveskite vardą"` |
| `required` | Reikalauja užpildyti / pasirinkti | `required` |
| `disabled` | Išjungia laukelį; jis nesiunčiamas | `disabled` |
| `size` | Tekstinio laukelio matomas plotis simboliais | `size="20"` |
| `maxlength` | Maksimalus įvedamų simbolių skaičius | `maxlength="30"` |
| `minlength` | Minimalus įvedamų simbolių skaičius | `minlength="3"` |
| `checked` | Pradžioje pažymi radio ar checkbox | `checked` |
| `pattern` | Tikrinimo šablonas (reguliarioji išraiška) | `pattern="[0-9]{4}"` |
| `min` | Mažiausia leistina reikšmė | `min="1"` |
| `max` | Didžiausia leistina reikšmė | `max="100"` |

### `placeholder` ir `value` skirtumas

```html
<input type="text" placeholder="Įveskite vardą">
<input type="text" value="Egle">
```

`placeholder` **nėra siunčiama laukelio reikšmė**; tai tik užuomina. `value` jau yra pradinis turinys, kurį galima redaguoti.

### `required`

```html
<input type="email" name="email" required>
```

Naršyklė neleis įprastai pateikti tuščio lauko ir tikrins el. pašto formato pagrindus.

### `pattern`

```html
<input type="text" name="kodas" pattern="[0-9]{4}" title="Įveskite 4 skaitmenis">
```

Reikalauja keturių skaitmenų, jei laukelis užpildytas. Norint reikalauti įvesti, pridėk ir `required`.

### `min` ir `max`

```html
<input type="number" name="amzius" min="18" max="99">
```

Leidžiamos reikšmės nuo 18 iki 99.

## 16. Kaip veikia forma nuo pradžios iki galo?

1. Vartotojas atidaro puslapį ir užpildo laukelius.
2. Paspaudžia `submit`.
3. Naršyklė surenka siunčiamus laukų `name` ir dabartines jų reikšmes.
4. Pagal `method` ir `action` pateikia užklausą.
5. Serveris (jei yra) patikrina / apdoroja informaciją, prireikus išsaugo.
6. Serveris grąžina atsakymą.

**Pastaba:** laukelis be `name` dažniausiai **nebus įtrauktas į siunčiamus formos duomenis**.

## 17. Duomenų tikrinimas

**Client-side validation** – tikrinimas naršyklėje: `required`, `type="email"`, `minlength`, `pattern` ir pan. Padeda greitai pastebėti klaidas.

**Server-side validation** – duomenų tikrinimas serveryje, gavus užklausą. Būtinas saugumui, nes naršyklės tikrinimą galima apeiti.

> [!warning] Tikrinimas nėra tas pats, kas saugumas
> `required` ir `pattern` patogūs vartotojui, bet negali pakeisti serverio patikros.

## 18. Tvarkinga forma – pagrindinės taisyklės

- Kiekvienam laukui turėtų būti aiškus `label`.
- Susiek `for` su atitinkamu `id`.
- Pasirink teisingą `type` (`email`, `password`, `number` ir t. t.).
- Naudok `placeholder` tik kaip užuominą, ne vietoje `label`.
- Susijusius laukus grupuok su `fieldset` ir `legend`, kai tai prasminga.
- Nurodyk `name`, jeigu laukelio duomenis reikia pateikti.
- Radio grupės nariams duok tą patį `name`, bet skirtingus `value`.

## 19. Pilnas beginner registracijos formos pavyzdys

Šitas kodas panašus į praktinę pamokos užduotį: kreipinys, vardas, pavardė, paštas, telefonas, slaptažodis, šalis, sutikimas ir du mygtukai.

```html
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <title>Registracijos forma</title>
</head>
<body>
    <form action="#">
        <label>Kreipinys:</label>
        <div>
            <input type="radio" id="mr" name="title" value="mr">
            <label for="mr">Mr</label>
            <input type="radio" id="mrs" name="title" value="mrs">
            <label for="mrs">Mrs</label>
            <input type="radio" id="miss" name="title" value="miss">
            <label for="miss">Miss</label>
        </div>

        <p>
            <label for="first">Vardas:</label><br>
            <input type="text" id="first" name="first" placeholder="Įveskite vardą" required>
        </p>
        <p>
            <label for="last">Pavardė:</label><br>
            <input type="text" id="last" name="last" required>
        </p>
        <p>
            <label for="email">El. paštas:</label><br>
            <input type="email" id="email" name="email" required>
        </p>
        <p>
            <label for="phone">Telefonas:</label><br>
            <input type="tel" id="phone" name="phone">
        </p>
        <p>
            <label for="password">Slaptažodis:</label><br>
            <input type="password" id="password" name="password" required>
        </p>
        <p>
            <label for="country">Šalis:</label><br>
            <select id="country" name="country">
                <option value="china">China</option>
                <option value="lithuania">Lithuania</option>
                <option value="germany">Germany</option>
            </select>
        </p>
        <p>
            <input type="checkbox" id="terms" name="terms" value="yes" required>
            <label for="terms">Sutinku su <a href="#">taisyklėmis</a></label>
        </p>
        <button type="submit">Sign up</button>
        <button type="reset">Reset form</button>
    </form>
</body>
</html>
```

**Be CSS ir be JavaScript** – tik HTML. Tokia forma yra demonstracinė, nes `action="#"` nenurodo tikro registracijos serverio.

## 20. Dažniausios klaidos

**1. Radio leidžia pasirinkti abu:**

```html
<!-- Blogai – skirtingi name -->
<input type="radio" name="a" value="vyras">
<input type="radio" name="b" value="moteris">

<!-- Gerai – toks pat name -->
<input type="radio" name="lytis" value="vyras">
<input type="radio" name="lytis" value="moteris">
```

**2. Nėra radio reikšmės:**

```html
<!-- Geriau aiškiai nurodyti value -->
<input type="radio" name="lytis" value="vyras">
```

Jei `radio` neturi `value`, pasirinkus jį naršyklė paprastai siunčia `on`, o ne žodį „vyras“.

**3. Nesusietas label:**

```html
<!-- Blogai -->
<label for="vardas">Vardas</label>
<input id="kitas" name="vardas">

<!-- Gerai -->
<label for="vardas">Vardas</label>
<input id="vardas" name="vardas">
```

**4. `reset` neva turi viską išvalyti:** `reset` sugrąžina pradines reikšmes. Jei pradžioje yra `value="Egle"`, po `reset` vėl bus Egle.

**5. Norime naujos eilutės be `<br>`:** apgaubiame kiekvieną eilutę atskiru `<div>` – jis pagal nutylėjimą blokinis.

```html
<div><label for="v">Vardas:</label> <input id="v" name="v"></div>
<div><label for="p">Pavardė:</label> <input id="p" name="p"></div>
```

## 22. Pasitikrinimas savarankiškai

1. Kuo skiriasi `id`, `name` ir `value`?
2. Kodėl `label for="email"` turi atitikti `id="email"`?
3. Kodėl du `radio` pasirinkimai turi vienodą `name`?
4. Kas pasikeistų, jei `value="Egle"` pakeistume į `placeholder="Egle"`?
5. Koks mygtukas atstato pradines reikšmes?
6. Kodėl registracijos slaptažodžio nesiunčiame GET metodu?
7. Kaip padaryti, kad forma neleistų palikti tuščio el. pašto laukelio?
8. Ką daro `fieldset` ir `legend`?
9. Ką duoda `min`, `max`, `pattern`?
10. Ar vien `required` užtenka apsaugoti serverį nuo blogų duomenų?

<details>
<summary>Atsakymai (atskleisti Obsidian skaitymo režime)</summary>

1. `id` identifikuoja elementą; `name` yra duomens pavadinimas; `value` – reikšmė.
2. Kad užrašas susietųsi su reikiamu laukeliu.
3. Kad vienu metu būtų pasirinktas tik vienas iš grupės.
4. Laukelyje nebūtų pradinio teksto; būtų tik pilka užuomina.
5. `reset`.
6. Nes slaptažodis matytųsi URL.
7. `type="email" required`.
8. Grupuoja susijusius laukus ir suteikia grupei pavadinimą.
9. Apriboja reikšmę arba jos formatą.
10. Ne. Serveryje taip pat būtina validuoti duomenis.

</details>

## 23. Nuorodos iš paskutinės skaidrės

- [W3C HTML formų dokumentacija](https://www.w3.org/TR/html52/sec-forms.html)
- [MDN – HTML formų įvadas](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [MDN – Formų tikrinimas](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

---

**Esmė:** išmokdamas `form`, `input`, `label`, `name`, `value`, `radio`, `checkbox`, `select`, `submit`, `reset` ir `GET/POST`, jau suprasi pagrindinę šios pamokos dalį.
