# Dažnos klaidos ir pasitikrinimas

## Kodėl CSS neveikia?

**1. Neteisingai prijungtas failas.**

```html
<link rel="stylesheet" href="style.css">
```

Failas turi būti tinkamoje vietoje. Jei jis kitame aplanke, reikia nurodyti kelią, pvz. `css/style.css`.

**2. Sumaišyta klasė ir ID.**

```html
<section class="about" id="about"></section>
```

```css
.about { padding: 2rem; }
#about { background: #eee; }
```

**3. Praleistas kabliataškis, riestinis skliaustas arba blogai parašyta savybė.**

**4. Tą patį elementą vėlesnė taisyklė perrašo.** Tikrinkite `Inspect` / `Computed`.

## Kodėl telefone blogai atrodo?

- Elementui nustatytas per didelis fiksuotas plotis.
- Trijų stulpelių Grid neperjungtas į vieną stulpelį.
- Paveikslėlis neišsitenka.
- Pamirštas `viewport`.
- Navigacija netelpa į siaurą ekraną.

## Prieš pateikiant darbą

- [ ] Yra `<!DOCTYPE html>`, `html`, `head`, `body`.
- [ ] Yra `meta viewport`.
- [ ] Naudojamos semantinės žymės.
- [ ] Taisyklingi `href`, `src`, `alt`.
- [ ] CSS aiškiai suskirstytas.
- [ ] Panaudotas Flex arba Grid.
- [ ] Patikrintos kelios ekrano rezoliucijos.
- [ ] Pritaikytas `:hover`, jei to reikia dizainui.
- [ ] Jei naudojau sudėtingesnį sprendimą, galiu paaiškinti, kam jis skirtas.

## Pasitikrinkite save

1. Kuo skiriasi `margin` ir `padding`?
2. Kam naudojamas `box-sizing: border-box`?
3. Ką daro `display: flex` ir `justify-content`?
4. Kodėl `@media` reikalinga telefone?
5. Kuo skiriasi `.menu` ir `#menu`?
6. Kada naudoti `alt`?
7. Ką reiškia DRY CSS kode?

Atsakymus rasite susijusiuose užrašuose. Jei galite paaiškinti savais žodžiais – jau geras ženklas.
