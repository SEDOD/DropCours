const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const toast = document.querySelector('.toast');
const toastMessage = document.querySelector('[data-toast-message]');
let toastTimer;

function closeMenu() {
  body.classList.remove('menu-open');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

function showToast(message) {
  if (!toast || !toastMessage) return;
  window.clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }, 3600);
}

document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.toast));
});

document.querySelector('[data-year]')?.replaceChildren(String(new Date().getFullYear()));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
}
