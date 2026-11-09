# HTML struktūra ir semantika

HTML atsako už **puslapio turinį ir struktūrą**. CSS – už jo išvaizdą.

## Minimalus puslapis

```html
<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mano puslapis</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="#home">Pradžia</a>
      <a href="#about">Apie</a>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>

    <section id="about">
      <h2>Apie projektą</h2>
      <p>Integer eget nisi ac lorem facilisis aliquam.</p>
    </section>
  </main>

  <footer>
    <p>2026 – mokomasis puslapis</p>
  </footer>
</body>
</html>
```

## Kam reikalingos šios žymės?

| Žymė | Kam naudojama |
|---|---|
| `<header>` | Puslapio ar sekcijos viršus |
| `<nav>` | Navigacijos nuorodos |
| `<main>` | Pagrindinis puslapio turinys |
| `<section>` | Atskira teminė turinio dalis |
| `<article>` | Savarankiškas turinys, pvz., kortelė ar straipsnis |
| `<footer>` | Puslapio apačia |
| `<h1>`–`<h6>` | Antraščių hierarchija |
| `<p>` | Pastraipa |
| `<a>` | Nuoroda |
| `<img>` | Paveikslėlis |

**Kodėl tai svarbu?** Semantinės žymės padeda suprasti puslapio struktūrą ir žmonėms, ir naršyklei. Vien `div` viskam naudoti nereikia.

## Keli naudingi dalykai

- `class="card"` – klasei CSS rašome `.card`.
- `id="about"` – elementui CSS rašome `#about`; nuoroda `href="#about"` nukelia į tą vietą.
- `alt="Paveikslėlio aprašymas"` – trumpai apibūdina informacinį paveikslėlį; dekoratyviniam dažnai tinka `alt=""`.
- `href` – kur veda nuoroda; `src` – iš kur imamas paveikslėlis ar kitas išteklius.
- `viewport` – būtinas normaliam vaizdavimui telefone.

## Mažas pratimas

Sukurkite puslapį su `header`, `nav`, `main`, dviem `section` ir `footer`. Tik tada pradėkite CSS. Šią eigą rekomenduoja ir pateiktas TECHIN aprašas (9 psl.).
