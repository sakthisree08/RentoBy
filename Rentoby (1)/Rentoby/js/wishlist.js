// wishlist.js — additional wishlist helpers (core in cart.js)

function getWishlistProducts() {
  return Wishlist.getAll()
    .map(id => getProductById(id))
    .filter(Boolean);
}

function moveAllToCart(mode = 'buy') {
  const ids = Wishlist.getAll();
  ids.forEach(id => {
    const product = getProductById(id);
    if (product) Cart.add(product, mode, 'monthly');
  });
  localStorage.removeItem(Wishlist.KEY);
  Wishlist.updateBadge();
  document.dispatchEvent(new CustomEvent('wishlistUpdated'));
  showToast(`${ids.length} items moved to cart!`, 'success');
}
