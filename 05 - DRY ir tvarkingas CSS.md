# DRY ir tvarkingas CSS

DRY – *Don't Repeat Yourself*, arba „nekartok savęs“. CSS atveju mintis paprasta: jei keli elementai turi tokias pačias savybes, nereikia jų perrašinėti kelis kartus.

## Blogiau: kartojame tą patį

```css
.header {
  color: white;
  background: #333;
  padding: 2rem;
}

.footer {
  color: white;
  background: #333;
  padding: 2rem;
}
```

## Geriau: bendrus stilius sujungiame

```css
.header,
.footer {
  color: white;
  background: #333;
  padding: 2rem;
}
```

Kablelis reiškia, kad ta pati taisyklė galioja **abiem selektoriams**.

## Kai dalis savybių skiriasi

```css
.button-primary,
.button-secondary {
  color: white;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
}

.button-primary { background: blue; }
.button-secondary { background: gray; }
```

Bendri dalykai viename bloke, skirtingi – atskirai. Tai dažna DRY užduotis.

## Dar vienas variantas – bendroji klasė

HTML:

```html
<a class="button button-primary" href="#contact">Susisiekti</a>
<a class="button button-secondary" href="#about">Plačiau</a>
```

CSS:

```css
.button {
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
}

.button-primary { background: blue; color: white; }
.button-secondary { background: #eee; color: #222; }
```

Šitaip lengviau plėsti didesnį projektą.

## Nepersistenkite trumpindami

DRY nereiškia, kad visas CSS turi tilpti į vieną eilutę. Skaityti ir taisyti turi būti patogu. Jei sujungus selektorius kodas pasidaro painus, kartais geriau palikti aiškius atskirus blokus.

> [!tip] Trumpai atsiskaitymo metu
> „Sujungiau pasikartojančias CSS savybes, kad nereikėtų to paties kodo rašyti keliose vietose. Skirtingus stilius palikau atskirai.“

DRY čia pateiktas kaip **papildomas gero CSS organizavimo pavyzdys**; PDF vertinimo lentelėje atskiro DRY punkto nėra.
