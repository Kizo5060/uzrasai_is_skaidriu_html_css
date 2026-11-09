# Flex, Grid ir responsive

Kai maketas atrodo gerai kompiuteryje, bet telefone viskas sulenda – dažniausiai reikia pataisyti išdėstymą.

## Flex – elementams vienoje eilėje ar stulpelyje

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

- `justify-content` paskirsto vietą pagrindine ašimi.
- `align-items` lygiuoja elementus skersine ašimi.
- `gap` sukuria tarpus.
- `flex-direction: column` perkelia elementus į stulpelį.

## Grid – kortelėms, galerijoms ir blokų tinklui

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```

Čia trys vienodo pločio stulpeliai. Galima naudoti `minmax(0, 1fr)`, kai ilgas turinys trukdo stulpeliams susitraukti.

## Media queries

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

Rezultatas: dideliame ekrane 3 kortelės, siauresniame – 2, telefone – 1.

## Kad neišlįstų už ekrano

```css
.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}

img {
  max-width: 100%;
  height: auto;
}
```

## Kaip tikrinti?

1. Atidarykite naršyklėje puslapį.
2. `F12` → įrenginių peržiūra (telefono/planšetės simbolis).
3. Išbandykite apie **375 px**, **768 px**, **1440 px** ir didesnį plotį. Tai patogūs mokomieji dydžiai, ne konkrečios PDF nustatytos ribos.
4. Patikrinkite, ar nėra horizontalaus slinkimo, ar tekstas telpa, ar mygtukai paspaudžiami.

**Pagal PDF 10 psl.** responsyvumas vertinamas 2 balais. Svarbu ne konkretus `@media` skaičius, o tai, ar maketas tvarkingai prisitaiko.
