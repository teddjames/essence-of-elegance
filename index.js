// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger menu
(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('primary-nav');

  function closeOnEscape(e) {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
      btn.focus();
    }
  }

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;

    if (!expanded) {
      document.addEventListener('keydown', closeOnEscape, { once: true });
    }
  });

  const mq = window.matchMedia('(min-width: 980px)');
  function syncForDesktop(e) {
    if (e.matches) {
      nav.hidden = false;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      nav.hidden = true;
    }
  }

  mq.addEventListener('change', syncForDesktop);
  syncForDesktop(mq);
})();
