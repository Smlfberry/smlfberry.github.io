/* ══════════════════════════════════════════
   THE MISSING MIDWEST — main.js
   Scatter dot generation + scrollytelling
   ══════════════════════════════════════════ */

// ── SCATTER DOTS ─────────────────────────────
// Generates placeholder dots with a positive correlation trend
// Replace the container contents with your Plotly chart when ready
function makeDots(id, n, sized) {
  const c = document.getElementById(id);
  if (!c || c.dataset.done) return;
  c.dataset.done = '1';
  for (let i = 0; i < n; i++) {
    const d = document.createElement('div');
    const x = 7 + Math.random() * 86;
    const noise = (Math.random() - 0.5) * 18;
    const y = 87 - (x * 0.57 + noise);
    const sz = sized ? 5 + Math.random() * 10 : 6;
    d.style.cssText = `
      position:absolute; width:${sz}px; height:${sz}px; border-radius:50%;
      background:rgba(44,122,94,0.45); border:1px solid rgba(44,122,94,0.3);
      left:${x}%; top:${Math.max(4, Math.min(90, y))}%;
      transform:translate(-50%,-50%);
      transition:background 0.15s, transform 0.15s; cursor:pointer;
    `;
    d.addEventListener('mouseenter', () => {
      d.style.background = 'rgba(192,57,43,0.75)';
      d.style.transform = 'translate(-50%,-50%) scale(1.5)';
    });
    d.addEventListener('mouseleave', () => {
      d.style.background = 'rgba(44,122,94,0.45)';
      d.style.transform = 'translate(-50%,-50%) scale(1)';
    });
    c.appendChild(d);
  }
}

// ── SCROLLYTELLING ───────────────────────────
// Call initScrolly(containerId) on any page that has scrollytelling
const _observers = {};

function initScrolly(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const steps  = container.querySelectorAll('.step');
  const frames = container.querySelectorAll('.viz-frame');
  const dots   = container.querySelectorAll('.prog-dot');

  function activate(idx) {
    frames.forEach((f, i) => f.classList.toggle('active', i === idx));
    dots.forEach((d, i)   => d.classList.toggle('active', i === idx));
    steps.forEach((s, i)  => s.classList.toggle('active', i === idx));
  }
  activate(0);

  if (_observers[containerId]) _observers[containerId].disconnect();
  _observers[containerId] = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) activate(parseInt(e.target.dataset.step, 10));
    });
  }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });

  steps.forEach(s => _observers[containerId].observe(s));

  // click a dot to jump to that step
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const t = container.querySelector(`.step[data-step="${dot.dataset.s}"]`);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

// ── INIT ON LOAD ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // landing page scatter
  makeDots('sc-home', 65);
  // income page
  makeDots('sc-income', 45);
  // education page
  makeDots('sc-edu', 45);
  // findings page (sized dots = encode education)
  makeDots('sc-combined', 72, true);
  // init scrollytelling on whichever page is loaded
  initScrolly('scrolly-income');
  initScrolly('scrolly-edu');
});
