// js/main.js

const toggle  = document.querySelector('.nav__toggle');
const links   = document.querySelector('.nav__links');
const overlay = document.querySelector('.nav__overlay');
const yearEl  = document.getElementById('year');

function applyMode() {
  const mobile = window.matchMedia('(max-width: 820px)').matches;

  if (mobile) {
    // Phone: no hamburger, no overlay, no open state
    if (links)   links.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    if (toggle)  toggle.style.display = 'none';
  } else {
    // Desktop: show toggle (even if you rarely use it)
    if (toggle)  toggle.style.display = '';
  }
}

applyMode();
window.addEventListener('resize', applyMode);

// Desktop toggle still works if you keep it around
if (toggle && links && overlay){
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    overlay.classList.toggle('is-open', open);
  });
}

if (yearEl) yearEl.textContent = new Date().getFullYear();

