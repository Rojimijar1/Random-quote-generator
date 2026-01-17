const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
];

const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const btn = document.getElementById('get-quote');

function getRandomQuote(){
  const i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

function showQuote(q){
  // Add a small fade animation by toggling a class
  quoteTextEl.classList.remove('show');
  // Slight delay to allow CSS transition
  setTimeout(() => {
    quoteTextEl.textContent = `“${q.text}”`;
    quoteAuthorEl.textContent = q.author ? `— ${q.author}` : '';
    quoteTextEl.classList.add('show');
  }, 80);
}

btn.addEventListener('click', () => {
  const q = getRandomQuote();
  showQuote(q);
});

// Optionally show a random quote on first load
window.addEventListener('DOMContentLoaded', () => {
  showQuote(getRandomQuote());
});