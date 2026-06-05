// ── Cart Management ──────────────────────────────────────────────────────────

const Cart = {
  KEY: 'rentoby_cart',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  add(product, mode = 'buy', rentPeriod = 'monthly') {
    const items = this.getAll();
    const key = `${product.id}-${mode}-${rentPeriod}`;
    const existing = items.find(i => i.key === key);

    if (existing) {
      existing.qty += 1;
    } else {
      const price = mode === 'buy'
        ? product.buyPrice
        : product.rentPrices[rentPeriod];
      items.push({
        key, id: product.id, name: product.name,
        image: product.image, mode, rentPeriod,
        price, qty: 1, category: product.category
      });
    }
    this.save(items);
    showToast(`"${product.name}" added to cart!`, 'success');
  },

  remove(key) {
    const items = this.getAll().filter(i => i.key !== key);
    this.save(items);
    showToast('Item removed from cart.', 'info');
  },

  updateQty(key, qty) {
    if (qty < 1) { this.remove(key); return; }
    const items = this.getAll();
    const item = items.find(i => i.key === key);
    if (item) { item.qty = qty; this.save(items); }
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  total() {
    return this.getAll().reduce((s, i) => s + i.price * i.qty, 0);
  },

  count() {
    return this.getAll().reduce((s, i) => s + i.qty, 0);
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const c = this.count();
    badges.forEach(b => {
      b.textContent = c;
      b.style.display = c > 0 ? 'flex' : 'none';
    });
  }
};

// ── Wishlist Management ──────────────────────────────────────────────────────

const Wishlist = {
  KEY: 'rentoby_wishlist',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  save(ids) {
    localStorage.setItem(this.KEY, JSON.stringify(ids));
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('wishlistUpdated'));
  },

  toggle(product) {
    const ids = this.getAll();
    const idx = ids.indexOf(product.id);
    if (idx === -1) {
      ids.push(product.id);
      showToast(`"${product.name}" added to wishlist!`, 'heart');
    } else {
      ids.splice(idx, 1);
      showToast(`"${product.name}" removed from wishlist.`, 'info');
    }
    this.save(ids);
    return idx === -1;
  },

  has(id) {
    return this.getAll().includes(id);
  },

  remove(id) {
    const ids = this.getAll().filter(i => i !== id);
    this.save(ids);
  },

  count() {
    return this.getAll().length;
  },

  updateBadge() {
    const badges = document.querySelectorAll('.wishlist-badge');
    const c = this.count();
    badges.forEach(b => {
      b.textContent = c;
      b.style.display = c > 0 ? 'flex' : 'none';
    });
  }
};

// ── Toast Notification ───────────────────────────────────────────────────────

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '✓', info: 'ℹ', heart: '♥', error: '✕'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span><span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('visible'));

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ── Product Modal ────────────────────────────────────────────────────────────

function openProductModal(product, mode = 'buy') {
  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const isWished = Wishlist.has(product.id);
  const stars = renderStars(product.rating);

  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <div class="modal-grid">
        <div class="modal-image">
          <img src="${product.image}" alt="${product.name}"
               onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80'">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="modal-info">
          <span class="modal-category">${product.category.replace('-', ' ')}</span>
          <h2>${product.name}</h2>
          <div class="modal-rating">${stars} <span>${product.rating} (${product.reviews} reviews)</span></div>
          <p class="modal-desc">${product.description}</p>
          <div class="modal-pricing">
            <div class="price-tab ${mode === 'buy' ? 'active' : ''}" onclick="switchModalMode('buy','${product.id}')">Buy</div>
            <div class="price-tab ${mode === 'rent' ? 'active' : ''}" onclick="switchModalMode('rent','${product.id}')">Rent</div>
          </div>
          <div id="modal-price-section">
            ${mode === 'buy' ? `<div class="modal-price">₹${product.buyPrice.toLocaleString('en-IN')}</div>` : `
              <div class="rent-options-modal">
                <div class="rent-opt" onclick="selectRentPeriod(this,'daily')">Daily<br><strong>₹${product.rentPrices.daily}/day</strong></div>
                <div class="rent-opt active" onclick="selectRentPeriod(this,'weekly')">Weekly<br><strong>₹${product.rentPrices.weekly}/wk</strong></div>
                <div class="rent-opt" onclick="selectRentPeriod(this,'monthly')">Monthly<br><strong>₹${product.rentPrices.monthly}/mo</strong></div>
              </div>`}
          </div>
          <div class="modal-actions">
            <button class="btn-primary" onclick="modalAddCart(${product.id}, '${mode}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              Add to Cart
            </button>
            <button class="btn-wishlist ${isWished ? 'wished' : ''}" onclick="modalToggleWish(${product.id})">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>`;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  modal._currentProduct = product;
  modal._currentMode = mode;
  modal._selectedPeriod = 'monthly';

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  requestAnimationFrame(() => modal.classList.add('active'));
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
  document.body.style.overflow = '';
}

function switchModalMode(mode, productId) {
  const product = getProductById(productId);
  if (product) openProductModal(product, mode);
}

function selectRentPeriod(el, period) {
  document.querySelectorAll('.rent-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  const modal = document.getElementById('product-modal');
  if (modal) modal._selectedPeriod = period;
}

function modalAddCart(productId, mode) {
  const product = getProductById(productId);
  const modal = document.getElementById('product-modal');
  const period = modal ? modal._selectedPeriod || 'monthly' : 'monthly';
  if (product) Cart.add(product, mode, period);
}

function modalToggleWish(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const isNowWished = Wishlist.toggle(product);
  const btn = document.querySelector('.btn-wishlist');
  if (btn) {
    btn.classList.toggle('wished', isNowWished);
    btn.querySelector('svg').setAttribute('fill', isNowWished ? 'currentColor' : 'none');
  }
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  for (let i = full + (half ? 1 : 0); i < 5; i++) s += '☆';
  return `<span class="stars">${s}</span>`;
}

// Init badges on load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  Wishlist.updateBadge();
});
