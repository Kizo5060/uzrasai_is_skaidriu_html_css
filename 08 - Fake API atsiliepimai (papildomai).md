# Fake API atsiliepimai – papildomas pavyzdys

> [!warning] Nepriskirkite PDF reikalavimams
> Pateiktame TECHIN HTML/CSS atsiskaitymo apraše **nėra reikalavimo naudoti JavaScript ar API**. Šis pavyzdys įtrauktas todėl, kad buvo atskirai nagrinėtas su demonstracine svetaine.

## Kas yra Fake API?

Tai testinė duomenų paslauga, iš kurios galima gauti pavyzdinių duomenų, kai neturime savo serverio. Čia naudojama `JSONPlaceholder` komentarų API. Tai **ne tikri klientų atsiliepimai**.

Adreso pavyzdys:

```text
https://jsonplaceholder.typicode.com/comments/1
```

Grąžintame objekte yra `name`, `email`, `body` ir kiti laukai.

## HTML

```html
<article>
  <h2>Demo atsiliepimas</h2>
  <p id="reviewText">Kraunama...</p>
  <strong id="reviewName"></strong>
  <button id="reloadReview" type="button">Kitas</button>
</article>
<script src="script.js" defer></script>
```

## JavaScript

```js
const reviewText = document.querySelector('#reviewText');
const reviewName = document.querySelector('#reviewName');
const reloadReview = document.querySelector('#reloadReview');

async function loadReview() {
  const id = Math.floor(Math.random() * 10) + 1;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    if (!response.ok) throw new Error('API klaida');

    const review = await response.json();
    reviewText.textContent = review.body;
    reviewName.textContent = review.name;
  } catch (error) {
    reviewText.textContent = 'Nepavyko įkelti komentaro.';
    reviewName.textContent = '';
    console.error(error);
  }
}

reloadReview.addEventListener('click', loadReview);
loadReview();
```

## Paaiškinimas paprastai

- `querySelector` suranda elementą puslapyje.
- `Math.random()` sugeneruoja atsitiktinį skaičių nuo 0 iki mažiau nei 1.
- `Math.floor(... * 10) + 1` padaro sveiką skaičių nuo 1 iki 10.
- `fetch()` siunčia HTTP užklausą.
- `await response.json()` iš atsakymo gauna JS objektą.
- `textContent` įrašo tekstą į puslapį.
- `try/catch` leidžia parodyti klaidą, kai API neatsako.

Išsamesnį pavyzdį rasite `Pavyzdinis puslapis` aplanke. API duomenų gavimui reikalingas internetas.
