const toggle  = document.querySelector('.nav__toggle');
const links   = document.querySelector('.nav__links');
const overlay = document.querySelector('.nav__overlay');

if (toggle && links && overlay){
  toggle.addEventListener('click', ()=>{
    const open = links.classList.toggle('is-open');
    overlay.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';  // NEW
  });

  overlay.addEventListener('click', ()=>{
    links.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';                     // NEW
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';                     // NEW
  });
});
