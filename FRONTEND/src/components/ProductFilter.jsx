import React, { useState } from "react";

const products = [
  { id: 1, name: "Web Dev", category: "TECH" },
  { id: 2, name: "Cooking", category: "LIFESTYLE" },
  { id: 3, name: "Painting", category: "ART" },
  { id: 4, name: "Guitar", category: "MUSIC" },
  { id: 5, name: "Yoga", category: "FITNESS" }
];

export default function ProductFilter() {
  const [filter, setFilter] = useState("ALL");

  const filteredProducts = products
    .filter((p) => filter === "ALL" || p.category === filter)
    .slice(0, 3);

  return (
    <div className="product-filter">
      <div className="filters">
        {["ALL", "TECH", "LIFESTYLE", "ART", "MUSIC", "FITNESS"].map((cat) => (
          <button
            key={cat}
            className="filter-link"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-box" data-category={p.category}>
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
