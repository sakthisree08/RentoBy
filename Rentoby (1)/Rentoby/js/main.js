// ── Navbar ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initSearch();
  initMobileMenu();
});

function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    nav.classList.toggle('nav-hidden', y > lastY && y > 200);
    lastY = y;
  }, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

// ── Scroll Animations (Intersection Observer) ────────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .zoom-in')
    .forEach(el => observer.observe(el));
}

// ── Search ───────────────────────────────────────────────────────────────────

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input) return;

  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => performSearch(input.value.trim(), results), 250);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      input.value = '';
      if (results) results.style.display = 'none';
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-bar') && results) {
      results.style.display = 'none';
    }
  });
}

function performSearch(query, container) {
  if (!container) return;
  if (!query) { container.style.display = 'none'; return; }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  if (!matches.length) {
    container.innerHTML = `<div class="search-empty">No results for "${query}"</div>`;
    container.style.display = 'block';
    return;
  }

  container.innerHTML = matches.map(p => `
    <div class="search-item" onclick="openProductModal(getProductById(${p.id}))">
      <img src="${p.image}" alt="${p.name}"
           onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&q=80'">
      <div>
        <div class="search-name">${p.name}</div>
        <div class="search-price">₹${p.buyPrice.toLocaleString('en-IN')}</div>
      </div>
    </div>`).join('');
  container.style.display = 'block';
}

// ── Product Card Renderer ────────────────────────────────────────────────────

function renderProductCard(product, mode = 'buy') {
  const isWished = Wishlist.has(product.id);
  const stars = renderStars(product.rating);
  const price = mode === 'buy'
    ? `₹${product.buyPrice.toLocaleString('en-IN')}`
    : `<span class="rent-from">From</span> ₹${product.rentPrices.monthly.toLocaleString('en-IN')}<span class="rent-period">/mo</span>`;

  return `
    <div class="product-card slide-up" data-id="${product.id}" data-category="${product.category}">
      <div class="card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="card-wish ${isWished ? 'wished' : ''}"
                onclick="toggleWishCard(event, ${product.id})"
                aria-label="Wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <span class="card-cat">${product.category.replace('-', ' ')}</span>
        <h3 class="card-name" onclick="openProductModal(getProductById(${product.id}),'${mode}')">${product.name}</h3>
        <div class="card-rating">${stars} <span class="rating-num">${product.rating}</span> <span class="rating-count">(${product.reviews})</span></div>
        <p class="card-desc">${product.description.slice(0, 70)}...</p>
        <div class="card-price">${price}</div>
        ${mode === 'rent' ? `
        <div class="rent-pills">
          <span>₹${product.rentPrices.daily}/day</span>
          <span>₹${product.rentPrices.weekly}/wk</span>
          <span class="active">₹${product.rentPrices.monthly}/mo</span>
        </div>` : ''}
        <div class="card-actions">
          <button class="btn-card-primary" onclick="Cart.add(getProductById(${product.id}),'${mode}','monthly')">
            ${mode === 'buy' ? 'Buy Now' : 'Rent Now'}
          </button>
          <button class="btn-card-cart" onclick="Cart.add(getProductById(${product.id}),'${mode}','monthly')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>`;
}

function toggleWishCard(event, productId) {
  event.stopPropagation();
  const product = getProductById(productId);
  if (!product) return;
  const isNow = Wishlist.toggle(product);
  const btn = event.currentTarget;
  btn.classList.toggle('wished', isNow);
  btn.querySelector('svg').setAttribute('fill', isNow ? 'currentColor' : 'none');
}

// ── Category Filter ──────────────────────────────────────────────────────────

function initCategoryFilter(containerId, gridId, mode = 'buy') {
  const container = document.getElementById(containerId);
  const grid = document.getElementById(gridId);
  if (!container || !grid) return;

  let active = 'all';

  function render(cat) {
    const prods = cat === 'all' ? PRODUCTS : getProductsByCategory(cat);
    grid.innerHTML = prods.map(p => renderProductCard(p, mode)).join('');
    initScrollAnimations();
  }

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      active = btn.dataset.cat;
      render(active);
    });
  });

  // Price filter
  const priceRange = document.getElementById('price-range');
  const priceLabel = document.getElementById('price-label');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      const max = parseInt(priceRange.value);
      if (priceLabel) priceLabel.textContent = `₹${max.toLocaleString('en-IN')}`;
      const prods = (active === 'all' ? PRODUCTS : getProductsByCategory(active))
        .filter(p => (mode === 'buy' ? p.buyPrice : p.rentPrices.monthly) <= max);
      grid.innerHTML = prods.map(p => renderProductCard(p, mode)).join('');
      initScrollAnimations();
    });
  }

  render(active);
}

// ── Smooth Scroll for anchor links ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
