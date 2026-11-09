const navToggle = document.querySelector('#navToggle');
const navLinks = document.querySelector('#navLinks');
const reviewCard = document.querySelector('#reviewCard');
const reviewText = document.querySelector('#reviewText');
const reviewName = document.querySelector('#reviewName');
const reviewDetails = document.querySelector('#reviewDetails');
const reloadReview = document.querySelector('#reloadReview');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Uždaryti meniu' : 'Atidaryti meniu');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Atidaryti meniu');
  });
});

function randomReviewId() {
  return Math.floor(Math.random() * 10) + 1;
}

async function loadRandomReview() {
  const id = randomReviewId();
  reloadReview.disabled = true;
  reviewCard.setAttribute('aria-busy', 'true');
  reviewText.textContent = 'Loading review...';
  reviewName.textContent = 'Loading...';
  reviewDetails.textContent = `Demo review #${id}`;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const review = await response.json();
    if (typeof review.body !== 'string' || typeof review.name !== 'string') {
      throw new Error('Unexpected API response');
    }

    reviewText.textContent = `“${review.body}”`;
    reviewName.textContent = review.name;
    reviewDetails.textContent = review.email || `Demo review #${id}`;
  } catch (error) {
    reviewText.textContent = 'Could not load the demo review. Please try again.';
    reviewName.textContent = 'Review unavailable';
    reviewDetails.textContent = 'Network or API error';
    console.error('Review API error:', error);
  } finally {
    reviewCard.setAttribute('aria-busy', 'false');
    reloadReview.disabled = false;
  }
}

reloadReview.addEventListener('click', loadRandomReview);
loadRandomReview();
