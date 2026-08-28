/* Mo Darrag — portfolio behaviour.
   Everything here is an enhancement: the page is complete without it. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* --- Theme --------------------------------------------------------- */

  var STORE_KEY = 'md-theme';

  function readStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  function writeStored(value) {
    try { localStorage.setItem(STORE_KEY, value); } catch (e) { /* private mode */ }
  }

  function currentTheme() {
    var stamped = root.getAttribute('data-theme');
    if (stamped) return stamped;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var stored = readStored();
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-theme-toggle]');
    if (!toggle) return;
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    writeStored(next);
    toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });

  /* --- Sticky header shadow ------------------------------------------ */

  var header = document.querySelector('.site-header');
  if (header) {
    var setStuck = function () {
      header.setAttribute('data-stuck', window.scrollY > 8 ? 'true' : 'false');
    };
    setStuck();
    window.addEventListener('scroll', setStuck, { passive: true });
  }

  /* --- Company logos -------------------------------------------------- */

  /* A logo that fails to load must never leave a broken-image icon in the
     row. Drop the <img>; the company name beside it carries the meaning on
     its own, which is also why the images are marked decorative. */
  function dropBrokenLogo(img) {
    if (!img || img.dataset.dropped) return;
    img.dataset.dropped = '1';
    img.remove();
  }

  // Failures that happen after this script runs. Error events don't bubble,
  // so listen in the capture phase.
  document.addEventListener('error', function (event) {
    var el = event.target;
    if (el && el.tagName === 'IMG' && el.classList.contains('companies__logo')) dropBrokenLogo(el);
  }, true);

  // Failures that already happened while the document was parsing.
  Array.prototype.forEach.call(document.querySelectorAll('.companies__logo'), function (img) {
    if (img.complete && img.naturalWidth === 0) dropBrokenLogo(img);
  });

  /* --- Reveal on scroll, and chart bars that grow when seen ----------- */

  /* Bars carry their real width inline, so they are correct with JS off.
     With JS on, CSS holds them at zero until they scroll into view. */
  var animated = document.querySelectorAll('.reveal, [data-width]');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(animated, function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  Array.prototype.forEach.call(animated, function (el) { observer.observe(el); });

  /* Failsafe: content must never stay invisible because an observer misfired.
     Off-screen elements revealing early costs nothing — nobody is looking. */
  window.setTimeout(function () {
    Array.prototype.forEach.call(animated, function (el) { el.classList.add('is-visible'); });
  }, 5000);

  /* --- Section highlighting in the nav ------------------------------- */

  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!navLinks.length) return;

  var sections = [];
  Array.prototype.forEach.call(navLinks, function (link) {
    var target = document.getElementById(link.getAttribute('href').slice(1));
    if (target) sections.push({ link: link, target: target });
  });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var match = sections.filter(function (s) { return s.target === entry.target; })[0];
      if (!match) return;
      if (entry.isIntersecting) {
        sections.forEach(function (s) { s.link.removeAttribute('aria-current'); });
        match.link.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (s) { spy.observe(s.target); });
})();
