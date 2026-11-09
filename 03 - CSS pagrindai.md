# CSS pagrindai

CSS nusako, **kaip atrodo HTML elementai**. Verta išmokti ne visas savybes iš eilės, o tas, kurių labiausiai prireiks kuriant maketą.

## Kaip prijungti CSS?

HTML `<head>` dalyje:

```html
<link rel="stylesheet" href="style.css">
```

## Selektoriai

```css
p { color: #333; }
.card { background: white; }
#about { padding: 2rem; }
.card:hover { box-shadow: 0 0.5rem 1rem #0002; }
```

- `p` parenka visus pastraipų elementus.
- `.card` parenka visus elementus su klase `card`.
- `#about` parenka elementą su ID `about`.
- `:hover` pritaikomas užvedus pelę.

## Dėžutės modelis

Kiekvieną elementą galima įsivaizduoti kaip dėžutę:

- **content** – tekstas ar paveikslėlis;
- **padding** – tarpas *viduje*, tarp turinio ir krašto;
- **border** – kraštinė;
- **margin** – tarpas *išorėje*, nuo kitų elementų.

```css
* {
  box-sizing: border-box;
}

.card {
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
}
```

`border-box` reiškia, kad nurodytas elemento plotis jau apima jo `padding` ir `border`.

## Savybės, kurias verta pasikartoti

| Savybė | Reikšmė |
|---|---|
| `display` | Kaip elementas išdėstomas (`block`, `flex`, `grid` ir kt.) |
| `position` | Pozicionavimas (`relative`, `absolute` ir kt.) |
| `margin` | Išorinis tarpas |
| `padding` | Vidinis tarpas |
| `background` | Fonas |
| `border` | Kraštinė |
| `box-shadow` | Šešėlis |
| `object-fit` | Kaip paveikslėlis telpa savo rėme |
| `list-style` | Sąrašo žymekliai |
| `font-size` | Šrifto dydis |
| `line-height` | Eilučių aukštis |
| `text-align` | Teksto lygiavimas |

## `rem`, `%` ir `px`

```css
.container {
  width: 90%;
  max-width: 70rem;
  margin-inline: auto;
}

h1 { font-size: 2.5rem; }
```

`rem` priklauso nuo šakninio (`html`) šrifto dydžio; įprastai 1 rem yra 16 px, jei jo niekas nepakeitė. `%` priklauso nuo konteksto. `px` tinka, pavyzdžiui, plonai kraštinei.

## CSS kintamieji

```css
:root {
  --main-color: #6455d6;
  --space: 1.5rem;
}

.button {
  background: var(--main-color);
  padding: var(--space);
}
```

Spalvą pakeisite vienoje vietoje ir ji pasikeis visur, kur naudojamas kintamasis.

## Pseudoelementai

```css
.title::before {
  content: "★ ";
  color: orange;
}
```

`::before` ir `::after` leidžia pridėti dekoratyvinių elementų per CSS. Nenaudokite jų svarbiai informacijai, kuri turi būti HTML turinyje.

**Pagal PDF 11 psl.:** šios temos (įskaitant `align-content`) yra tarp akcentuojamų CSS savybių. `align-content` nereikia painioti su `align-items` – jų paskirtis skiriasi.
