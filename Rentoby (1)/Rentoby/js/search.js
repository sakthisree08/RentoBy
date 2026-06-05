// search.js — standalone search utilities (supplements main.js)

function highlightMatch(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(56,189,248,0.3);color:inherit;border-radius:2px">$1</mark>');
}

function fuzzySearch(query, products) {
  const q = query.toLowerCase();
  return products
    .map(p => {
      let score = 0;
      const name = p.name.toLowerCase();
      const cat  = p.category.toLowerCase();
      const desc = p.description.toLowerCase();
      if (name.startsWith(q))  score += 10;
      if (name.includes(q))    score += 6;
      if (cat.includes(q))     score += 4;
      if (desc.includes(q))    score += 2;
      return { product: p, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => r.product);
}
