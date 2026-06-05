const PRODUCTS = [
  // ─── LIVING ROOM ───
  {
    id: 1, name: "Velvet Arc Sofa", category: "living-room",
    description: "3-seater luxury velvet sofa with solid oak legs and deep-cushion comfort.",
    buyPrice: 42999, rentPrices: { daily: 299, weekly: 1499, monthly: 3999 },
    rating: 4.8, reviews: 124,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    badge: "Bestseller"
  },
  {
    id: 2, name: "Power Recliner Chair", category: "living-room",
    description: "Electric recliner with USB charging ports, massage function, and premium faux leather.",
    buyPrice: 29999, rentPrices: { daily: 199, weekly: 999, monthly: 2499 },
    rating: 4.6, reviews: 87,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
  },
  {
    id: 3, name: "Marble Coffee Table", category: "living-room",
    description: "Italian marble top with gold-finish steel frame. Elevates any living space.",
    buyPrice: 18999, rentPrices: { daily: 149, weekly: 699, monthly: 1799 },
    rating: 4.7, reviews: 63,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80"
  },
  {
    id: 4, name: "Floating TV Unit", category: "living-room",
    description: "Wall-mounted walnut TV unit with cable management and LED underlight.",
    buyPrice: 16499, rentPrices: { daily: 129, weekly: 599, monthly: 1499 },
    rating: 4.5, reviews: 92,
    image: "https://images.unsplash.com/photo-1593766827703-d4f3e0d05f75?w=600&q=80"
  },
  {
    id: 5, name: "Industrial Bookshelf", category: "living-room",
    description: "5-tier iron and solid pine bookshelf with rustic finish.",
    buyPrice: 12999, rentPrices: { daily: 99, weekly: 449, monthly: 1099 },
    rating: 4.4, reviews: 45,
    image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=600&q=80"
  },
  {
    id: 6, name: "Mid-Century Side Table", category: "living-room",
    description: "Walnut veneer top with tapered legs, perfect as a nightstand or accent table.",
    buyPrice: 7499, rentPrices: { daily: 59, weekly: 279, monthly: 699 },
    rating: 4.3, reviews: 38,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80"
  },
  {
    id: 7, name: "Slim Console Table", category: "living-room",
    description: "Narrow hallway console with drawer storage and brass hardware.",
    buyPrice: 9999, rentPrices: { daily: 79, weekly: 349, monthly: 899 },
    rating: 4.5, reviews: 29,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    id: 8, name: "Tufted Ottoman", category: "living-room",
    description: "Button-tufted velvet ottoman with storage compartment inside.",
    buyPrice: 8999, rentPrices: { daily: 69, weekly: 299, monthly: 749 },
    rating: 4.6, reviews: 51,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
  {
    id: 9, name: "Wicker Lounge Chair", category: "living-room",
    description: "Natural rattan lounge chair with cushioned seat, boho-luxe aesthetic.",
    buyPrice: 14999, rentPrices: { daily: 119, weekly: 549, monthly: 1399 },
    rating: 4.7, reviews: 74,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80"
  },
  {
    id: 10, name: "Glass Display Cabinet", category: "living-room",
    description: "Tall glass-door display cabinet with LED interior lighting and lock.",
    buyPrice: 22499, rentPrices: { daily: 169, weekly: 799, monthly: 1999 },
    rating: 4.4, reviews: 33,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },

  // ─── BEDROOM ───
  {
    id: 11, name: "King Platform Bed", category: "bedroom",
    description: "Upholstered platform bed with tufted headboard and hidden storage drawers.",
    buyPrice: 54999, rentPrices: { daily: 399, weekly: 1899, monthly: 4799 },
    rating: 4.9, reviews: 212,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    badge: "Top Rated"
  },
  {
    id: 12, name: "6-Door Wardrobe", category: "bedroom",
    description: "Sliding mirror-door wardrobe with internal organizer system.",
    buyPrice: 38999, rentPrices: { daily: 279, weekly: 1299, monthly: 3299 },
    rating: 4.7, reviews: 145,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80"
  },
  {
    id: 13, name: "Vanity Dressing Table", category: "bedroom",
    description: "Hollywood-style mirror dressing table with LED bulbs and drawer organizers.",
    buyPrice: 19999, rentPrices: { daily: 149, weekly: 699, monthly: 1799 },
    rating: 4.6, reviews: 89,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80"
  },
  {
    id: 14, name: "Floating Bedside Table", category: "bedroom",
    description: "Wall-mounted nightstand with wireless charging pad and drawer.",
    buyPrice: 6999, rentPrices: { daily: 55, weekly: 249, monthly: 649 },
    rating: 4.5, reviews: 67,
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80"
  },
  {
    id: 15, name: "Chest of Drawers", category: "bedroom",
    description: "Solid oak 5-drawer chest with soft-close mechanism and dovetail joints.",
    buyPrice: 17499, rentPrices: { daily: 129, weekly: 599, monthly: 1499 },
    rating: 4.4, reviews: 44,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
  },
  {
    id: 16, name: "Teak Study Desk", category: "bedroom",
    description: "Compact teak wood study desk with cable hole and monitor shelf.",
    buyPrice: 14999, rentPrices: { daily: 109, weekly: 499, monthly: 1249 },
    rating: 4.3, reviews: 32,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80"
  },
  {
    id: 17, name: "Upholstered Bench", category: "bedroom",
    description: "End-of-bed storage bench with velvet cushion top.",
    buyPrice: 9499, rentPrices: { daily: 75, weekly: 329, monthly: 849 },
    rating: 4.5, reviews: 56,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80"
  },
  {
    id: 18, name: "Bamboo Ladder Shelf", category: "bedroom",
    description: "Eco-friendly bamboo ladder bookshelf, 5-tier with anti-tip wall anchor.",
    buyPrice: 8999, rentPrices: { daily: 69, weekly: 299, monthly: 749 },
    rating: 4.4, reviews: 41,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80"
  },
  {
    id: 19, name: "Canopy Bed Frame", category: "bedroom",
    description: "Iron-frame canopy bed with sheer curtain draping option, queen size.",
    buyPrice: 47999, rentPrices: { daily: 349, weekly: 1649, monthly: 4199 },
    rating: 4.8, reviews: 98,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    badge: "New"
  },
  {
    id: 20, name: "Compact Bunk Bed", category: "bedroom",
    description: "Space-saving bunk bed with safety rails and built-in staircase.",
    buyPrice: 29999, rentPrices: { daily: 219, weekly: 999, monthly: 2499 },
    rating: 4.6, reviews: 77,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },

  // ─── KITCHEN ───
  {
    id: 21, name: "Modular Kitchen Island", category: "kitchen",
    description: "Moveable kitchen island with marble countertop, storage & bar stool hooks.",
    buyPrice: 32999, rentPrices: { daily: 239, weekly: 1099, monthly: 2799 },
    rating: 4.7, reviews: 83,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    badge: "Popular"
  },
  {
    id: 22, name: "Wall Cabinet Set", category: "kitchen",
    description: "Set of 4 wall-mounted kitchen cabinets with soft-close hinges, gloss finish.",
    buyPrice: 24999, rentPrices: { daily: 179, weekly: 849, monthly: 2149 },
    rating: 4.5, reviews: 62,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80"
  },
  {
    id: 23, name: "Kitchen Utility Cart", category: "kitchen",
    description: "Stainless steel kitchen cart with 3 shelves and locking wheels.",
    buyPrice: 8999, rentPrices: { daily: 69, weekly: 299, monthly: 749 },
    rating: 4.4, reviews: 48,
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=600&q=80"
  },
  {
    id: 24, name: "Breakfast Bar Table", category: "kitchen",
    description: "High-top breakfast bar table with footrest rail, seats 4.",
    buyPrice: 14499, rentPrices: { daily: 109, weekly: 499, monthly: 1249 },
    rating: 4.6, reviews: 37,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
  },
  {
    id: 25, name: "Pantry Storage Unit", category: "kitchen",
    description: "Tall pantry cabinet with pull-out shelves and adjustable interior.",
    buyPrice: 19999, rentPrices: { daily: 149, weekly: 699, monthly: 1799 },
    rating: 4.3, reviews: 29,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"
  },
  {
    id: 26, name: "Under-Sink Cabinet", category: "kitchen",
    description: "Waterproof under-sink organizer cabinet with sliding doors.",
    buyPrice: 6499, rentPrices: { daily: 49, weekly: 219, monthly: 549 },
    rating: 4.4, reviews: 55,
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80"
  },
  {
    id: 27, name: "Spice Rack Tower", category: "kitchen",
    description: "Rotating 5-tier spice rack tower in stainless steel.",
    buyPrice: 3999, rentPrices: { daily: 29, weekly: 129, monthly: 329 },
    rating: 4.5, reviews: 88,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&q=80"
  },
  {
    id: 28, name: "Bar Stool Set (2)", category: "kitchen",
    description: "Set of 2 adjustable-height bar stools with leather seat pad.",
    buyPrice: 11999, rentPrices: { daily: 89, weekly: 399, monthly: 999 },
    rating: 4.6, reviews: 71,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
  {
    id: 29, name: "Pot Rack Overhead", category: "kitchen",
    description: "Ceiling-mount pot rack in matte black with hooks for 12 pots.",
    buyPrice: 7499, rentPrices: { daily: 59, weekly: 259, monthly: 649 },
    rating: 4.3, reviews: 22,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80"
  },
  {
    id: 30, name: "Kitchen Dining Bench", category: "kitchen",
    description: "Upholstered bench with storage, perfect for kitchen dining nooks.",
    buyPrice: 10999, rentPrices: { daily: 85, weekly: 379, monthly: 949 },
    rating: 4.4, reviews: 34,
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&q=80"
  },

  // ─── DINING ───
  {
    id: 31, name: "Extendable Dining Table", category: "dining",
    description: "8-seater solid oak extendable table, seats 6–10 people.",
    buyPrice: 47999, rentPrices: { daily: 349, weekly: 1649, monthly: 4199 },
    rating: 4.8, reviews: 156,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80",
    badge: "Bestseller"
  },
  {
    id: 32, name: "Upholstered Dining Chairs (Set of 4)", category: "dining",
    description: "Set of 4 cushioned dining chairs with metal legs in matte gold.",
    buyPrice: 22999, rentPrices: { daily: 169, weekly: 779, monthly: 1949 },
    rating: 4.6, reviews: 99,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80"
  },
  {
    id: 33, name: "Round Pedestal Table", category: "dining",
    description: "Marble-top round dining table with single pedestal base, seats 4.",
    buyPrice: 34999, rentPrices: { daily: 249, weekly: 1199, monthly: 2999 },
    rating: 4.7, reviews: 68,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    id: 34, name: "Sideboard Buffet", category: "dining",
    description: "Walnut sideboard with 4 doors and 2 drawers, perfect for dining storage.",
    buyPrice: 27999, rentPrices: { daily: 199, weekly: 949, monthly: 2399 },
    rating: 4.5, reviews: 43,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    id: 35, name: "Rustic Farm Table", category: "dining",
    description: "Reclaimed wood farmhouse dining table with bench seating, seats 8.",
    buyPrice: 39999, rentPrices: { daily: 289, weekly: 1349, monthly: 3399 },
    rating: 4.6, reviews: 54,
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80"
  },
  {
    id: 36, name: "Tulip Chair Set (2)", category: "dining",
    description: "Iconic tulip-style chair in glossy white, set of 2.",
    buyPrice: 15999, rentPrices: { daily: 119, weekly: 549, monthly: 1399 },
    rating: 4.7, reviews: 77,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
  },
  {
    id: 37, name: "Dining Hutch Cabinet", category: "dining",
    description: "2-piece hutch with glass-door top and solid wood base with drawers.",
    buyPrice: 31999, rentPrices: { daily: 229, weekly: 1099, monthly: 2749 },
    rating: 4.4, reviews: 36,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    id: 38, name: "Lazy Susan Table", category: "dining",
    description: "6-seater with rotating center plate, perfect for family-style dining.",
    buyPrice: 26999, rentPrices: { daily: 199, weekly: 899, monthly: 2299 },
    rating: 4.3, reviews: 21,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80"
  },
  {
    id: 39, name: "Bench Dining Set", category: "dining",
    description: "Table + 2 benches set in industrial pipe style for 6 people.",
    buyPrice: 34499, rentPrices: { daily: 249, weekly: 1149, monthly: 2899 },
    rating: 4.5, reviews: 48,
    image: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=600&q=80"
  },
  {
    id: 40, name: "Wine & Bar Cabinet", category: "dining",
    description: "Built-in wine rack cabinet with stemware holder and LED display lighting.",
    buyPrice: 22999, rentPrices: { daily: 169, weekly: 779, monthly: 1949 },
    rating: 4.6, reviews: 63,
    image: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=600&q=80"
  },

  // ─── OFFICE ───
  {
    id: 41, name: "Ergonomic Mesh Chair", category: "office",
    description: "Full lumbar support mesh chair with adjustable armrests and headrest.",
    buyPrice: 19999, rentPrices: { daily: 149, weekly: 699, monthly: 1799 },
    rating: 4.9, reviews: 342,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
    badge: "Top Rated"
  },
  {
    id: 42, name: "L-Shaped Executive Desk", category: "office",
    description: "L-shaped office desk with monitor riser, cable grommets, and drawer unit.",
    buyPrice: 28999, rentPrices: { daily: 209, weekly: 979, monthly: 2449 },
    rating: 4.7, reviews: 128,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80"
  },
  {
    id: 43, name: "Standing Desk Converter", category: "office",
    description: "Electric height-adjustable standing desk, memory presets, 150×75 cm.",
    buyPrice: 34999, rentPrices: { daily: 249, weekly: 1199, monthly: 2999 },
    rating: 4.8, reviews: 196,
    image: "https://images.unsplash.com/photo-1593766827703-d4f3e0d05f75?w=600&q=80",
    badge: "New"
  },
  {
    id: 44, name: "4-Shelf Bookcase", category: "office",
    description: "Solid pine office bookcase with open shelving, antique black finish.",
    buyPrice: 11999, rentPrices: { daily: 89, weekly: 399, monthly: 999 },
    rating: 4.5, reviews: 74,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80"
  },
  {
    id: 45, name: "Filing Cabinet (3-Drawer)", category: "office",
    description: "Metal 3-drawer filing cabinet with anti-tilt lock and label holders.",
    buyPrice: 9999, rentPrices: { daily: 75, weekly: 339, monthly: 849 },
    rating: 4.4, reviews: 55,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
  {
    id: 46, name: "Monitor Arm Desk", category: "office",
    description: "Clean-top desk with built-in dual monitor arm and under-desk drawer.",
    buyPrice: 24999, rentPrices: { daily: 179, weekly: 849, monthly: 2149 },
    rating: 4.6, reviews: 91,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=80"
  },
  {
    id: 47, name: "Office Sofa (2-Seater)", category: "office",
    description: "Professional 2-seater office sofa in premium dark blue fabric.",
    buyPrice: 29999, rentPrices: { daily: 219, weekly: 1049, monthly: 2649 },
    rating: 4.5, reviews: 49,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    id: 48, name: "Meeting Table (6-Seater)", category: "office",
    description: "Oval conference table with cable management tray, seats 6.",
    buyPrice: 44999, rentPrices: { daily: 329, weekly: 1549, monthly: 3899 },
    rating: 4.6, reviews: 38,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  },
  {
    id: 49, name: "Whiteboard Easel Stand", category: "office",
    description: "Magnetic dry-erase board on adjustable aluminum easel.",
    buyPrice: 7999, rentPrices: { daily: 59, weekly: 259, monthly: 649 },
    rating: 4.3, reviews: 27,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e23?w=600&q=80"
  },
  {
    id: 50, name: "Storage Credenza", category: "office",
    description: "Low-profile office credenza with locking doors and open center shelf.",
    buyPrice: 21999, rentPrices: { daily: 159, weekly: 749, monthly: 1899 },
    rating: 4.4, reviews: 42,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  }
];

const CATEGORIES = [
  {
    id: "living-room", label: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    icon: "🛋️", count: 10
  },
  {
    id: "bedroom", label: "Bedroom",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    icon: "🛏️", count: 10
  },
  {
    id: "kitchen", label: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    icon: "🍳", count: 10
  },
  {
    id: "dining", label: "Dining",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
    icon: "🍽️", count: 10
  },
  {
    id: "office", label: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: "💼", count: 10
  }
];

function getProductsByCategory(cat) {
  return cat ? PRODUCTS.filter(p => p.category === cat) : PRODUCTS;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}
