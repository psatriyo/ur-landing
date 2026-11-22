/**
 * UangRumah — client-side translations
 *
 * Markup:
 *   data-i18n="key.path"            → sets textContent
 *   data-i18n-html="key.path"       → sets innerHTML (trusted strings from /translations only)
 *   data-i18n-attr="attr:key;attr2:key2" → sets attributes (content, aria-label, placeholder, title…)
 *   data-amount="5240000"           → formats an IDR amount for the mockups (MYR for Bahasa Melayu)
 *
 * Language order: ?lang= → saved choice → browser language → English.
 * The inline <head> script picks the same language early to avoid a flash of English.
 */
(function () {
  'use strict';

  var LANGS = ['en', 'id', 'ms'];
  var STORAGE_KEY = 'uangrumah_language';
  var IDR_PER_MYR = 3700; // only used to show realistic ringgit amounts in the mockups
  var root = document.documentElement;
  var dict = window.translations || {};

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  function detect() {
    var fromHead = root.getAttribute('data-lang');
    if (LANGS.indexOf(fromHead) !== -1) return fromHead;
    return 'en';
  }

  function lookup(lang, key) {
    var parts = key.split('.');
    var node = dict[lang];
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : undefined;
  }

  function t(key, lang) {
    lang = lang || current;
    var value = lookup(lang, key);
    if (value === undefined && lang !== 'en') value = lookup('en', key);
    return value;
  }

  function formatAmount(idr, lang) {
    if (lang === 'ms') {
      var myr = idr / IDR_PER_MYR;
      return new Intl.NumberFormat('ms-MY', {
        style: 'currency', currency: 'MYR',
        minimumFractionDigits: myr >= 1000 ? 0 : 2, maximumFractionDigits: myr >= 1000 ? 0 : 2
      }).format(myr);
    }
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(idr);
  }

  function apply(lang) {
    var i, els, value;

    els = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < els.length; i++) {
      value = t(els[i].getAttribute('data-i18n'), lang);
      if (value !== undefined) els[i].textContent = value;
    }

    els = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < els.length; i++) {
      value = t(els[i].getAttribute('data-i18n-html'), lang);
      if (value !== undefined) els[i].innerHTML = value;
    }

    els = document.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < els.length; i++) {
      var pairs = els[i].getAttribute('data-i18n-attr').split(';');
      for (var p = 0; p < pairs.length; p++) {
        var bits = pairs[p].split(':');
        if (bits.length !== 2) continue;
        value = t(bits[1].trim(), lang);
        if (value !== undefined) els[i].setAttribute(bits[0].trim(), value);
      }
    }

    els = document.querySelectorAll('[data-amount]');
    for (i = 0; i < els.length; i++) {
      els[i].textContent = formatAmount(Number(els[i].getAttribute('data-amount')), lang);
    }

    root.lang = lang;
    root.setAttribute('data-lang', lang);

    els = document.querySelectorAll('[data-set-lang]');
    for (i = 0; i < els.length; i++) {
      els[i].setAttribute('aria-pressed', String(els[i].getAttribute('data-set-lang') === lang));
    }

    // Seasonal badge: hidden when its text is empty in the current language
    els = document.querySelectorAll('[data-season-badge]');
    for (i = 0; i < els.length; i++) els[i].hidden = !els[i].textContent.trim();

    root.classList.remove('i18n-pending');
    document.dispatchEvent(new CustomEvent('ur:langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    current = lang;
    store(lang);
    apply(lang);
    // Keep ?lang= in the address bar in sync when it was used to arrive here
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      }
    } catch (e) { /* ignore */ }
  }

  var current = detect();

  function init() {
    // A ?lang= link should stick for the rest of the visit
    try {
      if (new URLSearchParams(window.location.search).get('lang') === current) store(current);
    } catch (e) { /* ignore */ }

    apply(current);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-set-lang]') : null;
      if (!btn) return;
      e.preventDefault();
      setLang(btn.getAttribute('data-set-lang'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.URi18n = { t: t, setLang: setLang, get lang() { return current; } };
})();
