import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul id="nav-links" className={menuOpen ? "active" : ""}>
        <li><a href="#features">Features</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
}
