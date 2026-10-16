// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Filtres du portfolio
const filters = document.querySelectorAll('.filter');
const works = document.querySelectorAll('.work');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filters.forEach(b => b.setAttribute('aria-pressed', b === btn));
    works.forEach(w => { w.hidden = !(cat === 'all' || w.dataset.category === cat); });
  });
});
