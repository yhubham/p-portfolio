/**
 * script.js
 * Portfolio — Shree Yadav
 *
 * Sections:
 * 1. Gallery Data Config  — edit this to add/remove images
 * 2. Gallery Renderer     — builds DOM from config
 * 3. Navbar               — scroll state + active section
 * 4. Mobile Menu          — hamburger toggle
 * 5. Scroll Animations    — IntersectionObserver for .reveal
 * 6. Lazy Image Loading   — IntersectionObserver for .card
 * 7. Custom Cursor        — mouse tracking + hover states
 * 8. Filter Bar           — category filtering
 * 9. Lightbox             — full-screen image viewer
 * 10. Stat Counter        — number count-up animation
 * 11. Hero Dot Field      — decorative floating dots
 * 12. Footer Year         — dynamic copyright year
 * 13. Back To Top         — scroll to top button
 * 14. Theme Toggle        — dark / light mode with localStorage
 * 15. Init                — wire everything together
 */

'use strict';

/* =========================================================
   1. GALLERY DATA CONFIG
   ---------------------------------------------------------
   To add new images: add a new object to the appropriate
   category's `images` array. Only this section needs editing.

   Fields:
     src   {string}  — relative path from index.html
     alt   {string}  — accessible alt text
     name  {string}  — displayed on hover overlay & lightbox
     cat   {string}  — filter key (must match filter-btn data-filter)
   ========================================================= */

const GALLERY_CONFIG = {
  // ── BRAND ─────────────────────────────────────────────
  brand: {
    label: 'Brand',
    subCategories: [
      {
        label: 'Cerise',
        filterKey: 'brand',
        images: [
          { src: 'brand/cerise/6244337559228059990.jpg', alt: 'Cerise brand identity sheet 1', name: 'Cerise — Identity', cat: 'brand' },
          { src: 'brand/cerise/6244337559228059991.jpg', alt: 'Cerise brand identity sheet 2', name: 'Cerise — Typography', cat: 'brand' },
          { src: 'brand/cerise/6244337559228059992.jpg', alt: 'Cerise brand identity sheet 3', name: 'Cerise — Color System', cat: 'brand' },
        ],
      },
      {
        label: 'Crunx',
        filterKey: 'brand',
        images: [
          { src: 'brand/crunx/chips.jpg',              alt: 'Crunx chips product design', name: 'Crunx — Chips',   cat: 'brand' },
          { src: 'brand/crunx/crunx 2.jpg',            alt: 'Crunx brand visual 2',       name: 'Crunx — Visual', cat: 'brand' },
          { src: 'brand/crunx/crunx-Mockup-PSD.jpg',   alt: 'Crunx mockup presentation',  name: 'Crunx — Mockup', cat: 'brand' },
        ],
      },
      {
        label: 'Dragon Hunters',
        filterKey: 'brand',
        images: [
          { src: 'brand/dragon hunters/jersey bk.jpg',     alt: 'Dragon Hunters jersey back',    name: 'Dragon Hunters — Jersey Back',    cat: 'brand' },
          { src: 'brand/dragon hunters/jersey mockup.jpg', alt: 'Dragon Hunters jersey mockup',  name: 'Dragon Hunters — Jersey Mockup',  cat: 'brand' },
          { src: 'brand/dragon hunters/jersey.jpg',        alt: 'Dragon Hunters jersey front',   name: 'Dragon Hunters — Jersey',         cat: 'brand' },
        ],
      },
      {
        label: 'Mockup & Artboard',
        filterKey: 'brand',
        images: [
          { src: 'brand/mockup and artboard/01 Free Bus Stop Banner Mockup.jpg', alt: 'Bus stop banner mockup',         name: 'Bus Stop Banner',      cat: 'brand' },
          { src: 'brand/mockup and artboard/Artboard 1 br.jpg',                  alt: 'Artboard 1 brand revision',      name: 'Artboard 1 — BR',      cat: 'brand' },
          { src: 'brand/mockup and artboard/Artboard 1 mze.jpg',                 alt: 'Artboard 1 MZE design',          name: 'Artboard 1 — MZE',     cat: 'brand' },
          { src: 'brand/mockup and artboard/Artboard 2 br.jpg',                  alt: 'Artboard 2 brand revision',      name: 'Artboard 2 — BR',      cat: 'brand' },
          { src: 'brand/mockup and artboard/Artboard 2 mze.jpg',                 alt: 'Artboard 2 MZE design',          name: 'Artboard 2 — MZE',     cat: 'brand' },
          { src: 'brand/mockup and artboard/Magazine_Mockup 1.jpg',              alt: 'Magazine mockup presentation',   name: 'Magazine Mockup',      cat: 'brand' },
          { src: 'brand/mockup and artboard/Sm Mockup.jpg',                      alt: 'SM mockup design',               name: 'SM Mockup',            cat: 'brand' },
          { src: 'brand/mockup and artboard/br_Mockup_1.jpg',                    alt: 'Brand mockup 1',                 name: 'Brand Mockup 1',       cat: 'brand' },
          { src: 'brand/mockup and artboard/br_Mockup_3.jpg',                    alt: 'Brand mockup 3',                 name: 'Brand Mockup 3',       cat: 'brand' },
          { src: 'brand/mockup and artboard/roadside banner.jpg',                alt: 'Roadside banner design',         name: 'Roadside Banner',      cat: 'brand' },
          { src: 'brand/mockup and artboard/sm poster dv.jpg',                   alt: 'Social media poster DV',         name: 'SM Poster — DV',       cat: 'brand' },
        ],
      },
    ],
  },

  // ── CARDS ─────────────────────────────────────────────
  cards: {
    label: 'Cards',
    subCategories: [
      {
        label: null, // no sub-label, show directly
        filterKey: 'cards',
        images: [
          { src: 'cards/Artboard 2.png',           alt: 'Artboard 2 card design',         name: 'Artboard Card',      cat: 'cards' },
          { src: 'cards/BROCHURE DAy 8.jpg',       alt: 'Brochure design day 8',           name: 'Brochure Day 8',     cat: 'cards' },
          { src: 'cards/DAY 5.png',                alt: 'Card design day 5',               name: 'Design Day 5',       cat: 'cards' },
          { src: 'cards/divoria logo-01.jpg',      alt: 'Divoria logo design',             name: 'Divoria Logo',       cat: 'cards' },
          { src: 'cards/jewel poster ext png.png', alt: 'Jewel poster extended design',    name: 'Jewel Poster',       cat: 'cards' },
          { src: 'cards/mountains-01.jpg',         alt: 'Mountains illustration card',     name: 'Mountains',          cat: 'cards' },
        ],
      },
    ],
  },

  // ── ILLUSTRATION & LOGO ────────────────────────────────
  illustration: {
    label: 'Illustration & Logo',
    subCategories: [
      {
        label: null,
        filterKey: 'illustration',
        images: [
          { src: 'illustration and logo/6246589359041744689.jpg',  alt: 'Illustration work 1',              name: 'Illustration 01',        cat: 'illustration' },
          { src: 'illustration and logo/6246589359041744690.jpg',  alt: 'Illustration work 2',              name: 'Illustration 02',        cat: 'illustration' },
          { src: 'illustration and logo/6246589359041744691.jpg',  alt: 'Illustration work 3',              name: 'Illustration 03',        cat: 'illustration' },
          { src: 'illustration and logo/butterfly  with bg-01.jpg',alt: 'Butterfly illustration with bg',   name: 'Butterfly — BG',         cat: 'illustration' },
          { src: 'illustration and logo/butterfly logo with bg.jpg',alt:'Butterfly logo with background',  name: 'Butterfly Logo',         cat: 'illustration' },
          { src: 'illustration and logo/cartoons day 2-01.jpg',    alt: 'Cartoon illustration day 2',       name: 'Cartoons Day 2',         cat: 'illustration' },
          { src: 'illustration and logo/cherry-01.jpg',            alt: 'Cherry illustration',              name: 'Cherry',                 cat: 'illustration' },
          { src: 'illustration and logo/divoria logo-01.jpg',      alt: 'Divoria logo design',              name: 'Divoria Logo',           cat: 'illustration' },
          { src: 'illustration and logo/vector image jisso-01.jpg',alt: 'Vector illustration Jisso',        name: 'Jisso — Vector',         cat: 'illustration' },
        ],
      },
    ],
  },

  // ── POSTER ────────────────────────────────────────────
  poster: {
    label: 'Poster',
    subCategories: [
      {
        label: null,
        filterKey: 'poster',
        images: [
          { src: 'poster/6246589359041744687.jpg',              alt: 'Poster design 1',                   name: 'Poster 01',                cat: 'poster' },
          { src: 'poster/MAGAZINE 1.jpg',                       alt: 'Magazine cover design',              name: 'Magazine 1',               cat: 'poster' },
          { src: 'poster/MAGAZINE COVER DAY 9 (2).jpg',         alt: 'Magazine cover day 9',               name: 'Magazine Cover Day 9',     cat: 'poster' },
          { src: 'poster/MENU day 9.png',                       alt: 'Menu design day 9',                  name: 'Menu Day 9',               cat: 'poster' },
          { src: 'poster/MOVIE POSTER-01.jpg',                  alt: 'Movie poster design',                name: 'Movie Poster',             cat: 'poster' },
          { src: 'poster/NABRAS POSTER ext.png',                alt: 'Nabras poster extended',             name: 'Nabras Poster',            cat: 'poster' },
          { src: 'poster/day 7 cafe poster.jpg',                alt: 'Cafe poster day 7',                  name: 'Cafe Poster Day 7',        cat: 'poster' },
          { src: 'poster/interior poster-01.jpg',               alt: 'Interior design poster',             name: 'Interior Poster',          cat: 'poster' },
          { src: 'poster/movie poster using pen tool-01.jpg',   alt: 'Movie poster pen tool technique',    name: 'Movie Poster — Pen Tool',  cat: 'poster' },
        ],
      },
    ],
  },
};

/* =========================================================
   2. GALLERY RENDERER
   ========================================================= */

/**
 * Creates a single image card element.
 * @param {Object} image - image data from config
 * @param {number} index - global index for stagger delay
 * @returns {HTMLElement}
 */
function createCard(image, index) {
  const card = document.createElement('div');
  card.className = 'card lazy-hidden';
  card.dataset.cat = image.cat;
  card.dataset.index = index;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View ${image.name}`);

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  img.loading = 'lazy';
  img.decoding = 'async';

  const overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  overlay.innerHTML = `
    <button class="overlay-btn" aria-label="View full size — ${image.name}" tabindex="-1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    </button>
    <span class="overlay-name">${image.name}</span>
    <span class="overlay-cat">${image.cat}</span>
  `;

  card.appendChild(img);
  card.appendChild(overlay);
  return card;
}

/**
 * Builds and injects all gallery sections into the DOM.
 */
function buildGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  // Flat list for lightbox
  window._galleryItems = [];
  let globalIndex = 0;

  Object.entries(GALLERY_CONFIG).forEach(([key, category]) => {
    const section = document.createElement('section');
    section.className = 'gallery-category reveal fade-up';
    section.id = `cat-${key}`;
    section.setAttribute('aria-labelledby', `cat-heading-${key}`);

    // Category header
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <h3 class="category-title" id="cat-heading-${key}">${category.label}</h3>
      <span class="category-sub">${countImages(category)} works</span>
    `;
    section.appendChild(header);

    category.subCategories.forEach((sub) => {
      // Sub-category label if any
      if (sub.label) {
        const subHeader = document.createElement('p');
        subHeader.className = 'subcategory-title';
        subHeader.textContent = sub.label;
        section.appendChild(subHeader);
      }

      // Masonry grid
      const masonry = document.createElement('div');
      masonry.className = 'masonry';

      sub.images.forEach((image) => {
        const card = createCard(image, globalIndex);
        card.dataset.globalIndex = globalIndex;

        // Add to flat lightbox list
        window._galleryItems.push({ ...image, domIndex: globalIndex });
        globalIndex++;

        masonry.appendChild(card);
      });

      section.appendChild(masonry);
    });

    container.appendChild(section);
  });
}

/** Count total images in a category */
function countImages(category) {
  return category.subCategories.reduce((acc, sub) => acc + sub.images.length, 0);
}

/* =========================================================
   3. NAVBAR
   ========================================================= */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll → add .scrolled class
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section tracking via IntersectionObserver
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

/* =========================================================
   4. MOBILE MENU
   ========================================================= */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

/* =========================================================
   5. SCROLL REVEAL ANIMATIONS
   ========================================================= */

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || 0, 10);
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          revealObserver.unobserve(el);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );

  reveals.forEach((el) => revealObserver.observe(el));
}

/* =========================================================
   6. LAZY IMAGE LOADING
   ========================================================= */

function initLazyLoad() {
  const cards = document.querySelectorAll('.card.lazy-hidden');

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const idx = parseInt(card.dataset.index || 0, 10);
          const staggerDelay = (idx % 8) * 60; // 0–420ms stagger per row

          setTimeout(() => {
            card.classList.remove('lazy-hidden');
            card.classList.add('lazy-visible');
          }, staggerDelay);

          cardObserver.unobserve(card);
        }
      });
    },
    { rootMargin: '100px 0px', threshold: 0.05 }
  );

  cards.forEach((card) => cardObserver.observe(card));
}

/* =========================================================
   7. CUSTOM CURSOR
   ========================================================= */

function initCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');

  if (!cursor || !cursorDot) return;

  // Show cursor only after first move
  let cursorActive = false;
  let mouseX = -100, mouseY = -100;
  let curX = -100, curY = -100;

  const showCursor = () => {
    if (!cursorActive) {
      cursorActive = true;
      cursor.classList.add('active');
      cursorDot.classList.add('active');
    }
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    showCursor();

    // Dot follows instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top  = `${mouseY}px`;
  });

  // Smooth cursor follow with rAF
  function animateCursor() {
    const ease = 0.12;
    curX += (mouseX - curX) * ease;
    curY += (mouseY - curY) * ease;
    cursor.style.left = `${curX}px`;
    cursor.style.top  = `${curY}px`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Hover states
  const addHoverClass = (cls) => () => cursor.classList.add(cls);
  const removeHoverClass = (cls) => () => cursor.classList.remove(cls);

  // Cards
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.card')) {
      cursor.classList.add('hover-card');
    } else if (e.target.closest('a, button, .filter-btn, .social-icon')) {
      cursor.classList.add('hover-link');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.card')) {
      cursor.classList.remove('hover-card');
    } else if (e.target.closest('a, button, .filter-btn, .social-icon')) {
      cursor.classList.remove('hover-link');
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorDot.classList.remove('active');
    cursorActive = false;
  });

  document.addEventListener('mouseenter', showCursor);
}

/* =========================================================
   8. FILTER BAR
   ========================================================= */

function initFilter() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // Update button states
    filterBar.querySelectorAll('.filter-btn').forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    // Show/hide categories and cards
    const categorySections = document.querySelectorAll('.gallery-category');

    if (filter === 'all') {
      categorySections.forEach((sec) => {
        sec.style.display = '';
        sec.querySelectorAll('.card').forEach((c) => c.classList.remove('filter-hidden'));
      });
    } else {
      categorySections.forEach((sec) => {
        const id = sec.id; // cat-brand, cat-cards, etc.
        const matches = id === `cat-${filter}` || id === `cat-${getConfigKey(filter)}`;

        if (matches) {
          sec.style.display = '';
          sec.querySelectorAll('.card').forEach((c) => c.classList.remove('filter-hidden'));
        } else {
          sec.style.display = 'none';
        }
      });
    }
  });
}

/** Maps filter button data-filter values to GALLERY_CONFIG keys */
function getConfigKey(filter) {
  const map = {
    brand: 'brand',
    cards: 'cards',
    illustration: 'illustration',
    poster: 'poster',
  };
  return map[filter] || filter;
}

/* =========================================================
   9. LIGHTBOX
   ========================================================= */

let currentLightboxIndex = -1;

function initLightbox() {
  const lightbox        = document.getElementById('lightbox');
  const lightboxClose   = document.getElementById('lightboxClose');
  const lightboxBackdrop= document.getElementById('lightboxBackdrop');
  const lightboxImg     = document.getElementById('lightboxImg');
  const lbTitle         = document.getElementById('lbTitle');
  const lbCat           = document.getElementById('lbCat');
  const lbPrev          = document.getElementById('lbPrev');
  const lbNext          = document.getElementById('lbNext');

  if (!lightbox) return;

  // Open lightbox when clicking a card
  document.getElementById('galleryContainer').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const idx = parseInt(card.dataset.globalIndex, 10);
    openLightbox(idx);
  });

  // Keyboard on cards
  document.getElementById('galleryContainer').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.card');
      if (card) {
        e.preventDefault();
        const idx = parseInt(card.dataset.globalIndex, 10);
        openLightbox(idx);
      }
    }
  });

  // Close
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // Navigation
  lbPrev.addEventListener('click', () => navigateLightbox(-1));
  lbNext.addEventListener('click', () => navigateLightbox(1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    const item = window._galleryItems[index];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lbTitle.textContent = item.name;
    lbCat.textContent   = item.cat;

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();

    // Update nav visibility
    lbPrev.style.display = index > 0 ? '' : 'none';
    lbNext.style.display = index < window._galleryItems.length - 1 ? '' : 'none';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    currentLightboxIndex = -1;
  }

  function navigateLightbox(direction) {
    const next = currentLightboxIndex + direction;
    if (next >= 0 && next < window._galleryItems.length) {
      openLightbox(next);
    }
  }
}

/* =========================================================
   10. STAT COUNTER ANIMATION
   ========================================================= */

function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => counterObserver.observe(el));
}

function animateCounter(el, target) {
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* =========================================================
   11. HERO DOT FIELD
   ========================================================= */

function initDotField() {
  const field = document.getElementById('dotField');
  if (!field) return;

  const DOT_COUNT = 24;
  const fragment  = document.createDocumentFragment();

  for (let i = 0; i < DOT_COUNT; i++) {
    const dot = document.createElement('div');
    const size = 2 + Math.random() * 4;
    const x    = 5 + Math.random() * 90;
    const y    = 5 + Math.random() * 90;
    const dur  = 4 + Math.random() * 8;
    const del  = Math.random() * 6;

    dot.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      border-radius: 50%;
      background: rgba(0,0,0,${0.06 + Math.random() * 0.1});
      animation: floatDot ${dur}s ${del}s ease-in-out infinite alternate;
      pointer-events: none;
    `;
    fragment.appendChild(dot);
  }

  field.appendChild(fragment);

  // Inject keyframe if not present
  if (!document.getElementById('dotKeyframe')) {
    const style = document.createElement('style');
    style.id = 'dotKeyframe';
    style.textContent = `
      @keyframes floatDot {
        0%   { transform: translateY(0) scale(1); opacity: 0.5; }
        100% { transform: translateY(-18px) scale(1.3); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* =========================================================
   12. FOOTER YEAR
   ========================================================= */

function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* =========================================================
   13. BACK TO TOP
   ========================================================= */

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =========================================================
   14. THEME TOGGLE — Dark / Light Mode
   ========================================================= */

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  // Sync aria-label to current state
  function syncLabel() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  syncLabel();

  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncLabel();

    // Brief icon spin animation
    btn.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
    btn.style.transform  = 'rotate(360deg) scale(1.1)';
    setTimeout(() => {
      btn.style.transform  = '';
    }, 400);
  });
}

/* =========================================================
   INIT — Wire everything together
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Build gallery first (DOM must exist before observers)
  buildGallery();

  // Wire up features
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initLazyLoad();
  initCursor();
  initFilter();
  initLightbox();
  initStatCounters();
  initDotField();
  initBackToTop();
  setFooterYear();
  initThemeToggle();
});
