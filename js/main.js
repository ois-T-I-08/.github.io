const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
