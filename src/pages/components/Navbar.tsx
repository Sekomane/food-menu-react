// src/components/Navbar.tsx
import React from 'react';


export default function Navbar() {
  return (
    <header className="navbar">
      

<img src="/logo.png" alt="logo" className="logo-img" />
      <div className="logo">Premium restaurant</div>
      <nav className="nav-links">
        <button className="nav-link">Home</button>
        <button className="nav-link">Menu</button>
        <button className="nav-link">Pages</button>
        <button className="nav-link">Blog</button>
        <button className="nav-link">Contact Us</button>
      </nav>
      <div className="nav-actions">
        <button className="btn-secondary">👤</button>
        <div className="menu-icon">🛒</div>
      </div>
    </header>
  );
}