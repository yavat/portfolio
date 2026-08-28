['sl','sr'].forEach(id => {
  const el = document.getElementById(id);
  const n = Math.ceil(window.innerHeight / 27) + 14;
  for (let i = 0; i < n; i++) { const h = document.createElement('div'); h.className = 'sh'; el.appendChild(h); }
});

const cur = document.getElementById('cur');
document.addEventListener('mousemove', e => { cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px'; });
document.querySelectorAll('.wi, .dcard, a, .stag').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('big'));
  el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});

document.querySelectorAll('.wi[data-href]').forEach(card => {
  card.style.cursor = 'none';
  card.addEventListener('click', () => window.open(card.getAttribute('data-href'), '_blank'));
});

const lb = document.getElementById('lb');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-caption');
const lbClose = document.getElementById('lb-close');

document.querySelectorAll('.dcard[data-lightbox]').forEach(card => {
  card.addEventListener('click', () => {
    lbImg.src = card.getAttribute('data-lightbox');
    lbCap.textContent = card.getAttribute('data-caption') || '';
    lb.classList.add('open');
  });
});
lbClose.addEventListener('click', () => { lb.classList.remove('open'); lbImg.src = ''; });
lb.addEventListener('click', e => { if (e.target === lb) { lb.classList.remove('open'); lbImg.src = ''; } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { lb.classList.remove('open'); lbImg.src = ''; } });

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  obs.observe(el);
});

// Yavat Tavat — hover to play video
document.querySelectorAll('.dcard-video').forEach(card => {
  const video = card.querySelector('.yt-video');
  if (!video) return;
  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// ─── BTS SLIDER ───
(function() {
  const slides = document.getElementById('bts-slides');
  if (!slides) return;
  const dots = document.querySelectorAll('.bts-dot');
  const total = document.querySelectorAll('.bts-slide').length;
  let cur = 0;

  function go(n) {
    cur = (n + total) % total;
    slides.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  document.getElementById('bts-next').addEventListener('click', () => go(cur + 1));
  document.getElementById('bts-prev').addEventListener('click', () => go(cur - 1));
  dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.slide)));
})();
