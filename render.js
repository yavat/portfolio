/* ============================================================
   RENDER — builds the cards from works-data.js
   You shouldn't need to edit this file. To change content,
   edit works-data.js instead.
   ============================================================ */

function renderFilmWorks() {
  const container = document.getElementById('film-grid');
  if (!container) return;

  SITE_DATA.filmWorks.forEach(item => {
    const card = document.createElement('div');
    card.className = 'wi ' + (item.size === 'wide' ? 'wide' : 'tall');
    if (item.href) card.setAttribute('data-href', item.href);
    if (item.lightbox) {
      card.setAttribute('data-lightbox', item.lightbox);
      card.setAttribute('data-caption', item.lightboxCaption || item.title);
    }

    let inner = `
      <div class="wthumb">
        <img src="${item.image}" alt="${item.alt}">
      </div>`;

    if (item.badge) {
      inner += `<div class="award-badge">${item.badge}</div>`;
    }
    if (item.showExternalIcon) {
      inner += `
      <div class="ext-btn">
        <svg viewBox="0 0 14 14" stroke-width="1.5"><path d="M3 11L11 3M11 3H6M11 3v5"/></svg>
      </div>`;
    }

    inner += `
      <div class="wover">
        <div class="wt">${item.category}</div>
        <div class="wn">${item.title}</div>
        <div class="wd">${item.description}</div>
        <div class="watch-cue">${item.cue}</div>
      </div>`;

    card.innerHTML = inner;
    container.appendChild(card);
  });
}

function renderDesignWorks() {
  const container = document.getElementById('design-grid');
  if (!container) return;

  SITE_DATA.designWorks.forEach(item => {
    const card = document.createElement('div');

    if (item.isVideo) {
      card.className = 'dcard dcard-video';
      card.innerHTML = `
        <div class="dthumb">
          <img src="${item.poster}" alt="${item.alt}" class="yt-poster">
          <video class="yt-video" src="${item.video}" muted loop playsinline preload="none"></video>
        </div>
        <div class="dcard-play-hint">▶ Hover to play</div>
        <div class="dcard-over">
          <div class="dcard-name">${item.name}</div>
          <div class="dcard-type">${item.typeLabel}</div>
        </div>`;
    } else {
      card.className = 'dcard';
      card.setAttribute('data-lightbox', item.lightbox);
      card.setAttribute('data-caption', item.caption);
      card.innerHTML = `
        <div class="dthumb">
          <img src="${item.image}" alt="${item.alt}">
        </div>
        <div class="dcard-over">
          <div class="dcard-name">${item.name}</div>
          <div class="dcard-type">${item.typeLabel}</div>
        </div>`;
    }

    container.appendChild(card);
  });
}

function renderBtsSlides() {
  const container = document.getElementById('bts-slides');
  const dotsContainer = document.getElementById('bts-dots');
  if (!container) return;

  SITE_DATA.btsSlides.forEach((slide, i) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'bts-slide';

    slide.forEach(photo => {
      const photoEl = document.createElement('div');
      photoEl.className = 'bts-photo';
      photoEl.innerHTML = `
        <img src="${photo.img}" alt="${photo.cap}">
        <div class="bts-cap">${photo.cap}</div>`;
      slideEl.appendChild(photoEl);
    });

    container.appendChild(slideEl);

    if (dotsContainer) {
      const dot = document.createElement('div');
      dot.className = 'bts-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('data-slide', i);
      dotsContainer.appendChild(dot);
    }
  });
}

renderFilmWorks();
renderDesignWorks();
renderBtsSlides();
