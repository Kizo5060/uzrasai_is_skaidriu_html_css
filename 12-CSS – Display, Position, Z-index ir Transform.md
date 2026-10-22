# 

## 1. Display

`display` nustato, kaip elementas bus rodomas puslapyje.

- `block` – užima visą eilutės plotį.
    
- `inline` – užima tik tiek vietos, kiek reikia turiniui.
    
- `inline-block` – elementai gali būti vienoje eilutėje, bet galima nustatyti plotį ir aukštį.
    
- `none` – visiškai paslepia elementą ir jo vietą.
    
- `contents` – pašalina elemento dėžutę, bet palieka jo vaikus.
    
- `table`, `table-row`, `table-cell` – leidžia elementus išdėstyti kaip lentelę.
    
- `flow-root` – sukuria naują išdėstymo kontekstą, padeda tvarkyti `float`.
    
- `list-item` – elementas elgiasi kaip sąrašo punktas.
    

```
.box {
    display: inline-block;
    width: 10rem;
    height: 10rem;
}
```

### Display none ir visibility hidden

```
.box {
    display: none;
}
```

Elementas dingsta ir nebeužima vietos.

```
.box {
    visibility: hidden;
}
```

Elementas nematomas, bet jo vieta lieka.

## 2. Float

`float` leidžia priglausti elementą prie kairiojo arba dešiniojo krašto, o tekstas gali jį aptekėti.

```
img {
    float: left;
    margin-right: 1rem;
}
```

- `left` – prie kairiojo krašto.
    
- `right` – prie dešiniojo krašto.
    
- `none` – be float.
    

Elementas išeina iš įprasto srauto, bet vis tiek veikia aplinkinį tekstą.

## 3. Position

`position` nustato, kaip elementas pozicionuojamas puslapyje.

Pagrindinės reikšmės:

|Position|Ką daro|
|---|---|
|`static`|Įprasta elemento vieta|
|`relative`|Pastumia nuo pradinės vietos|
|`absolute`|Pozicionuoja pagal artimiausią pozicionuotą protėvį|
|`fixed`|Pririša prie naršyklės matomos srities|
|`sticky`|Slenkant prilimpa prie nustatytos ribos|

### Static

Numatytoji reikšmė.

```
.box {
    position: static;
}
```

`top`, `left`, `right`, `bottom` neveikia.

### Relative

Elementas juda nuo savo pradinės vietos.

```
.box {
    position: relative;
    top: 1rem;
    left: 1rem;
}
```

- `top: 1rem` – pastumia žemyn.
    
- `left: 1rem` – pastumia į dešinę.
    
- Elementas lieka dokumento sraute.
    
- Jo pradinė vieta lieka rezervuota.
    
- Kiti elementai nepasislenka užpildyti jo vietos.
    

### Absolute

Elementas pašalinamas iš įprasto dokumento srauto.

```
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 1rem;
    left: 1rem;
}
```

Svarbiausia:

- `absolute` orientuojasi pagal artimiausią pozicionuotą protėvį.
    
- Tėvui dažnai naudojame `position: relative`.
    
- Jeigu tokio protėvio nėra, orientuojasi pagal pradinį išdėstymo konteinerį.
    
- Elemento ankstesnė vieta neberezervuojama.
    
- Kiti elementai gali užimti jo vietą.
    

**Kodėl tėvui dedame relative?**

Kad vaikas su `absolute` galėtų pozicionuotis pagal tėvo kraštus.

### Fixed

Elementas lieka vienoje naršyklės matomos srities vietoje net slenkant puslapį.

```
.box {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}
```

Dažnai naudojamas mygtukams, pranešimams ar fiksuotoms juostoms.

### Sticky

Elementas iš pradžių juda kartu su puslapiu, o pasiekęs nustatytą ribą prilimpa.

```
header {
    position: sticky;
    top: 0;
}
```

Naudojamas, pavyzdžiui, navigacijos juostai.

## 4. Top, Right, Bottom, Left

Naudojami elemento padėčiai ar poslinkiui nustatyti.

```
.box {
    position: absolute;
    top: 2rem;
    right: 1rem;
}
```

Šiuo atveju elementas bus 2rem nuo viršaus ir 1rem nuo dešinio krašto.

Reikšmių veikimas priklauso nuo pasirinkto `position`.

## 5. Z-index

`z-index` nustato, kuris persidengiantis elementas bus aukščiau.

```
.box1 {
    position: absolute;
    z-index: 1;
}

.box2 {
    position: absolute;
    z-index: 2;
}
```

Jeigu elementai yra tame pačiame sluoksniavimo kontekste, `box2` bus virš `box1`.

- Didesnis `z-index` – aukštesnis sluoksnis.
    
- Mažesnis `z-index` – žemesnis sluoksnis.
    
- Numatytoji reikšmė yra `auto`.
    
- Įprastam `position: static` elementui `z-index` neveikia.
    

`z-index` taip pat gali veikti `flex` ir `grid` elementams net be `position`.

## 6. Stacking Context

`stacking context` – atskira elementų sluoksniavimo aplinka.

**Root Stacking Context** – pagrindinis viso puslapio sluoksniavimo kontekstas.

Paprastas `stacking context` atsiranda elemento viduje, kai tam sudaromos CSS sąlygos.

Pavyzdžiui:

```
.parent {
    isolation: isolate;
}
```

Dabar tėvinis elementas turi savo atskirą sluoksniavimo kontekstą.

Svarbu:

- Vaikai sluoksniuojami savo konteksto viduje.
    
- Net labai didelis vaiko `z-index` nebūtinai iškels jį virš kito tėvinio elemento.
    
- Tėvinio sluoksniavimo konteksto vieta riboja jo vaikų sluoksniavimą.
    

## 7. Transform

`transform` leidžia vizualiai perkelti, pasukti, padidinti, sumažinti ar pakreipti elementą.

Jis nekeičia įprasto dokumento srauto.

### Translate – perkėlimas

```
.box {
    transform: translateX(2rem);
}
```

Pastumia 2rem į dešinę.

```
.box {
    transform: translateY(-2rem);
}
```

Pastumia 2rem į viršų.

```
.box {
    transform: translate(2rem, 1rem);
}
```

Pastumia 2rem į dešinę ir 1rem žemyn.

### Rotate – pasukimas

```
.box {
    transform: rotate(45deg);
}
```

Pasuka 45 laipsnių kampu.

- Teigiama reikšmė – pagal laikrodžio rodyklę.
    
- Neigiama – prieš laikrodžio rodyklę.
    

### Scale – dydžio keitimas

```
.box {
    transform: scale(1.2);
}
```

Elementas padidėja 1,2 karto.

```
.box {
    transform: scale(0.8);
}
```

Elementas sumažėja.

### Skew – pakreipimas

```
.box {
    transform: skew(15deg);
}
```

Pakreipia elementą.

### Transform ašys

- X – horizontali kryptis.
    
- Y – vertikali kryptis.
    
- Z – gylio kryptis.
    

Galima naudoti kelis veiksmus kartu:

```
.box {
    transform: translateX(2rem) rotate(30deg) scale(1.2);
}
```

Veiksmų eiliškumas turi reikšmę.

## 8. Elemento centravimas su Transform

Elementą galima centruoti naudojant `position` ir `transform`.

```
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

Kaip tai veikia:

1. `top: 50%` – elemento viršus perkeliamas iki tėvo aukščio vidurio.
    
2. `left: 50%` – elemento kairė pusė perkeliamas iki tėvo pločio vidurio.
    
3. `translate(-50%, -50%)` – elementas paslenkamas atgal per pusę savo pločio ir aukščio.
    

Taip elementas atsiduria tiksliai centre.

## 9. Transition ir Transform

`transition` leidžia CSS pakeitimams vykti palaipsniui.

```
.box {
    transition: transform 0.3s ease;
}

.box:hover {
    transform: scale(1.1);
}
```

Užvedus pelę elementas sklandžiai padidėja.

- `0.3s` – animacijos trukmė.
    
- `ease` – judėjimo greičio kitimas.
    
- `hover` – būsena, kai pelė yra virš elemento.
    

## 10. Praktinės užduotys iš skaidrių

### Tekstas ant nuotraukos

Reikia uždėti tekstą ant paveikslėlio.

```
<div class="container">
    <img src="img/4.jpg" alt="Nuotrauka">
    <p>Tekstas ant nuotraukos</p>
</div>
```

```
.container {
    position: relative;
    width: 20rem;
}

.container img {
    display: block;
    width: 100%;
}

.container p {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: white;
}
```

### Kitos užduotys

- Sukurti dizainą su persidengiančia nuotrauka ir tekstu.
    
- Sukurti puslapį su kalnų nuotrauka ir tekstu.
    
- Padaryti fiksuotą skaidrų `footer` su socialinių tinklų nuorodomis.
    
- Sukurti vertikalią laiko juostą (`Timeline`).
    

## Svarbiausia prisiminti

**Relative** – juda nuo savo vietos, bet ją išsaugo.

**Absolute** – išeina iš dokumento srauto ir orientuojasi pagal pozicionuotą protėvį.

**Fixed** – dažniausiai lieka pritvirtintas prie ekrano.

**Sticky** – prilimpa slenkant puslapį.

**Z-index** – valdo elementų sluoksniavimą.

**Stacking Context** – atskira sluoksniavimo aplinka.

**Transform** – vizualiai keičia elemento padėtį, dydį arba kampą.

**Transition** – leidžia pokyčius atlikti sklandžiai.