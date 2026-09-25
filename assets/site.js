'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll('.publication').forEach(p => {
    p.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== p.dataset.kind;
    if (!p.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `Showing ${count} publications`;
}));
const dialog = document.querySelector('#image-dialog');
let lastFocus;
document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
  event.preventDefault(); lastFocus = link;
  document.querySelector('#dialog-image').src = link.href;
  document.querySelector('#dialog-image').alt = link.dataset.caption;
  document.querySelector('#image-caption').textContent = link.dataset.caption;
  document.querySelector('#image-original').href = link.href;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { if (lastFocus) lastFocus.focus(); });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.querySelectorAll('a').forEach(a => {
        const active = a.hash === '#' + entry.target.id;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
    }
  }), {rootMargin: '-10% 0px -65% 0px'});
  nav.querySelectorAll('a').forEach(a => {const section = document.querySelector(a.hash); if (section) observer.observe(section);});
}
