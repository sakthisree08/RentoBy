# 🛋️ Rentoby — Premium Furniture Rental & Buying Platform

A fully responsive, dark-themed furniture e-commerce website built with pure **HTML5, CSS3, and Vanilla JavaScript**. No frameworks, no backend, no build tools required.

---

## 🚀 Quick Start

```bash
# 1. Clone or download the project
git clone https://github.com/yourusername/rentoby.git
cd rentoby

# 2. Open in browser (no server required)
open index.html
# OR on Windows:
start index.html
# OR serve locally with Python:
python -m http.server 8080
# Then visit http://localhost:8080
```

That's it. The entire website works by opening `index.html` in any modern browser.

---

## 📁 Project Structure

```
Rentoby/
├── index.html              ← Home page (hero, features, categories, testimonials)
├── pages/
│   ├── buy.html            ← Shop / buy furniture (50 products, filters, sidebar)
│   ├── rent.html           ← Rent furniture (daily/weekly/monthly plans)
│   ├── cart.html           ← Shopping cart with quantity management
│   ├── wishlist.html       ← Saved items / wishlist
│   ├── profile.html        ← User dashboard with slideshow & activity timeline
│   ├── about.html          ← Company story, team, mission & vision
│   └── help.html           ← FAQ accordion, contact support, live chat
├── css/
│   ├── style.css           ← Global styles (navbar, cards, modals, footer)
│   ├── animations.css      ← All keyframe & scroll animations
│   └── [page].css          ← Page-specific stubs (styles embedded in HTML)
├── js/
│   ├── products.js         ← 50-product dataset with Unsplash image URLs
│   ├── cart.js             ← Cart + Wishlist logic + Toast notifications + Modal
│   ├── main.js             ← Navbar, scroll animations, search, card renderer
│   ├── search.js           ← Fuzzy search utilities
│   ├── wishlist.js         ← Wishlist helper functions
│   └── profile.js          ← Profile data management
└── assets/
    └── images/
        └── image-links.txt ← All 60+ Unsplash image URLs used in the project
```

---

## ✨ Features

### 🏠 Home Page
- Full-width hero with luxury furniture background & gradient overlay
- Animated headline with gradient text
- "Rent Now" / "Buy Now" CTA buttons
- Stats bar (50K+ customers, 500+ products, 100+ cities, 4.9★)
- Features section (Affordable Rentals, Premium Furniture, Fast Delivery, Easy Returns)
- 5 category cards with hover zoom & explore button
- 3-step "How It Works" section
- 3 animated testimonial cards with real avatars
- Animated CTA banner
- Full footer with social icons and quick links

### 🛒 Buy Page
- Sidebar with category filter + price range slider + sort dropdown
- Top filter pill tabs
- 50 product cards with hover lift/glow effect
- Each card: image, badge, wishlist button, rating stars, price, description, Buy Now + Add to Cart
- URL param support (`?cat=bedroom` etc.)

### 🛋️ Rent Page
- Daily / Weekly / Monthly plan selector cards
- Same 50 products shown with rent prices
- Rent perks bar (Free Delivery, Zero Deposit, etc.)
- Per-product rent price pills

### 🛒 Cart Page
- Product list with real images, prices, mode badges (Buy/Rent)
- Quantity increase / decrease / remove buttons
- Auto-calculated subtotal
- Coupon code input (demo)
- Free delivery & assembly callouts
- Trust badges (SSL, free returns, free setup)
- "Proceed to Checkout" button (demo order placement)

### 💜 Wishlist Page
- Saved product cards with remove button
- Move to Buy Cart or Rent Cart buttons
- Empty state with CTAs

### 👤 Profile Page
- Background image slideshow (4 images, auto-cycling)
- Avatar with edit button
- Verified badge, Premium Member tag
- Live stats: Orders, Rentals, Wishlist count, Cart count
- Editable profile form (inline toggle)
- Animated activity timeline (5 events)
- Quick links panel (My Orders, Rentals, Addresses)
- Support links + Live Chat status

### ℹ️ About Page
- Fullscreen hero with gradient overlay
- 2-column story section with milestones
- Stats banner (50K+ customers, 4.9★, etc.)
- Mission & Vision cards with gradient top-border
- 6 core values grid
- 4-person team grid with hover overlay and social links
- Careers CTA

### ❓ Help Page
- Hero search bar (filters FAQs live)
- 7-category FAQ filter tabs (All, Renting, Buying, Returns, Payment, Delivery, Account)
- 12 accordion FAQ items (open/close on click)
- Contact panel: Phone, Email, Live Chat button
- Popular articles quick links
- Response promise card

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0f1e` |
| Card | `#1e293b` |
| Primary | `#38bdf8` (sky blue) |
| Secondary | `#8b5cf6` (violet) |
| Accent | `#f59e0b` (amber) |
| Text | `#f0f4ff` |
| Text Muted | `#94a3b8` |

**Fonts:** Syne (headings) + DM Sans (body) — loaded from Google Fonts

---

## 🔧 JavaScript Architecture

All state is persisted in **LocalStorage** with these keys:

| Key | Contents |
|---|---|
| `rentoby_cart` | Array of cart items `{key, id, name, image, mode, rentPeriod, price, qty}` |
| `rentoby_wishlist` | Array of product IDs |
| `rentoby_profile` | User profile object |

**Key functions:**
- `Cart.add(product, mode, period)` — add to cart
- `Cart.remove(key)` / `Cart.updateQty(key, qty)` — manage items
- `Wishlist.toggle(product)` — add or remove from wishlist
- `renderProductCard(product, mode)` — generate HTML for a product card
- `openProductModal(product, mode)` — open detail modal
- `showToast(message, type)` — show notification
- `initScrollAnimations()` — trigger Intersection Observer

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop (4-col grids, sidebar visible) |
| ≤ 1024px | Tablet (2-col grids, sidebar collapses) |
| ≤ 768px | Mobile (hamburger menu, 1-col stacks) |
| ≤ 480px | Small mobile (2-col product grid, compact cards) |

---

## 🌐 Browser Support

Works on all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📦 Dependencies

**None.** Zero npm packages, zero CDN scripts, zero build step.

Everything is vanilla HTML, CSS, and JavaScript.

---

## 🖼️ Images

All 60+ images are sourced from [Unsplash](https://unsplash.com) — free for commercial use.
Full list of URLs: `assets/images/image-links.txt`

---

## 📄 License

MIT — free to use, modify, and distribute.

---

*Built with ♥ — Rentoby 2025*
