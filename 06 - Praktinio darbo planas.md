# Praktinio darbo planas

Pats praktiškiausias būdas – eiti dalimis, nebandant iškart padaryti tobulo dizaino.

## 1. Supraskite pateiktą maketą

Prieš rašydami kodą pasižiūrėkite: kiek yra sekcijų, kokios spalvos, kur tekstai, nuotraukos, mygtukai, kiek stulpelių. Nuspręskite, nuo kurio ekrano dydžio pradėsite.

## 2. Susikurkite projektą

```text
mano-projektas/
├── index.html
├── style.css
└── images/
    └── hero.jpg
```

JS failas reikalingas tik tada, jei praktinėje užduotyje yra interaktyvumo reikalavimų. Vien HTML/CSS maketui jo nereikia.

## 3. Pirmiausia – HTML griaučiai

Pradėkite nuo `header`, `nav`, `main`, `section`, `footer`. Įdėkite tikrąjį arba demonstracinį tekstą ir reikalingas nuorodas. Sujunkite CSS failą.

## 4. Tada – bazinis CSS

```css
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; }
.container { width: min(100% - 2rem, 70rem); margin-inline: auto; }
```

## 5. Dėliokite pagrindinius blokus

Pirmiausia bendras plotis, fonai ir stulpeliai. Vėliau šriftai, tarpai, šešėliai, mygtukai. Jei kur nors užstringate, eikite prie aiškesnės dalies ir grįžkite vėliau – taip pat rekomenduoja TECHIN aprašas (9 psl.).

## 6. Tikrinkite responsive

Atidarykite puslapį per **Go Live**. Patikrinkite telefoną, planšetę ir kompiuterį. Naudokite `Inspect`, jei nesuprantate, kodėl stilius neveikia.

## 7. Paskutinis patikrinimas

- [ ] Nuorodos veikia.
- [ ] Nėra didelio horizontalaus slinkimo.
- [ ] Paveikslėliai kraunasi ir turi tinkamą `alt`.
- [ ] `style.css` tikrai prijungtas.
- [ ] Tarpai, spalvos ir šriftai panašūs į pateiktą maketą.
- [ ] Kodo dalys tvarkingai atskirtos, o klasių pavadinimai suprantami.
- [ ] Darbas prisegtas ir paspausta **Pateikti**.

## Kur daugiausia balų?

Pagal TECHIN 10 psl.:

| Praktinės dalies kriterijus | Balai |
|---|---:|
| HTML semantika ir struktūra | 3 |
| Atitikimas dizainui | 2,5 |
| Responsyvumas | 2 |
| CSS kokybė ir skaitomumas | 2,5 |
| **Iš viso** | **10** |

Nurodyta ir papildoma užduotis – **0,5 balo**. Jos turinys šiame PDF neaprašytas.
