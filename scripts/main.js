/**
 * UangRumah — shared page behaviour
 * Mobile menu, theme toggle, sticky header, reveal-on-scroll,
 * Help Center search, legal table of contents, footer year.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'uangrumah_theme';

  /* Theme ---------------------------------------------------------------- */
  function effectiveTheme() {
    var set = root.getAttribute('data-theme');
    if (set === 'dark' || set === 'light') return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function initTheme() {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode */ }
      });
    });
  }

  /* Mobile menu ---------------------------------------------------------- */
  function initMenu() {
    var btn = document.querySelector('[data-menu-toggle]');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      btn.querySelector('.i-open').style.display = open ? 'none' : '';
      btn.querySelector('.i-close').style.display = open ? '' : 'none';
      if (open) menu.removeAttribute('inert'); else menu.setAttribute('inert', '');
    }

    btn.addEventListener('click', function () { setOpen(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); btn.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) setOpen(false); });
  }

  /* Header shadow on scroll ---------------------------------------------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var ticking = false;
    function update() { header.classList.toggle('is-scrolled', window.scrollY > 8); ticking = false; }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* Reveal on scroll ----------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Help Center search (filters FAQ items) ------------------------------- */
  function initFaqSearch() {
    var input = document.getElementById('faq-search');
    if (!input) return;
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-faq] .faq-item'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('[data-faq] .faq-group'));
    var empty = document.getElementById('faq-empty');

    function normalize(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

    function run() {
      var q = normalize(input.value.trim());
      var shown = 0;
      items.forEach(function (item) {
        var match = !q || normalize(item.textContent).indexOf(q) !== -1;
        item.hidden = !match;
        if (match) shown++;
        if (q && match) item.open = true;
        if (!q) item.open = false;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector('.faq-item:not([hidden])');
      });
      if (empty) empty.classList.toggle('show', shown === 0);
    }

    input.addEventListener('input', run);
    document.addEventListener('ur:langchange', function () { if (input.value) run(); });
  }

  /* Legal page table of contents: highlight current section --------------- */
  function initToc() {
    var links = document.querySelectorAll('.toc a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          var a = map[entry.target.id];
          if (a) a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* Open a FAQ item when linked directly (#faq-…) ------------------------ */
  function openHashTarget() {
    if (!location.hash) return;
    var el = document.getElementById(location.hash.slice(1));
    if (el && el.tagName === 'DETAILS') el.open = true;
  }

  function initYear() {
    var y = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = y; });
  }

  function init() {
    initTheme();
    initMenu();
    initHeader();
    initReveal();
    initFaqSearch();
    initToc();
    initYear();
    openHashTarget();
    window.addEventListener('hashchange', openHashTarget);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
