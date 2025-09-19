const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links){
  toggle.addEventListener('click', ()=>{
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
