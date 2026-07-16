const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');

if (toggle && links) {
  const menuLinks = [...links.querySelectorAll('a')];
  const closeMenu = ({ restoreFocus = false } = {}) => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'メニューを開く');
    document.body.classList.remove('nav-open');
    if (restoreFocus) toggle.focus();
  };

  const openMenu = () => {
    links.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'メニューを閉じる');
    document.body.classList.add('nav-open');
    menuLinks[0]?.focus();
  };

  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-expanded') === 'true') closeMenu();
    else openMenu();
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (!links.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeMenu({ restoreFocus: true });
    if (event.key === 'Tab' && menuLinks.length) {
      const first = toggle;
      const last = menuLinks.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
