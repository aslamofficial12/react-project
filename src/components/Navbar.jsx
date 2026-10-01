import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-header">
      {/* --- TOP TIER --- */}
      <div className="top-navbar">
        <div className="top-left">
          <img src="/logo.webp" alt="Libre Logo" className="libre-logo" />
        </div>

        <div className="top-right">
          <div className="top-links">
            <a href="/">Mobile Compatibility</a>
            <a href="/">Libre Moments</a>
            <a href="/">Important Safety Information</a>
          </div>
          {/* Added the missing Abbott logo container */}
          <div className="abbott-logo-container">
             <img src="/abbott-logo.webp" alt="Abbott" className="abbott-logo" />
          </div>
        </div>
      </div>

      {/* --- BOTTOM TIER --- */}
      <div className="bottom-navbar">
        {/* Navigation links must be wrapped in a ul for correct semantics */}
        <ul className="primary-menu">
          <li className="menu-item">
            <a href="#">PRODUCTS <span className="chevron"></span></a>
            <div className="dropdown">
              <a href="#">Product 1</a>
              <a href="#">Product 2</a>
              <a href="#">Product 3</a>
            </div>
          </li>

          <li className="menu-item">
            <a href="#">SUBSCRIPTION <span className="chevron"></span></a>
            <div className="dropdown">
              <a href="#">Product 4</a>
              <a href="#">Product 5</a>
              <a href="#">Product 6</a>
            </div>
          </li>

          <li className="menu-item">
            <a href="#">SUBSIDY AND ACCESS <span className="chevron"></span></a>
          </li>

          <li className="menu-item">
            <a href="#">DISCOVER <span className="chevron"></span></a>
          </li>

          <li className="menu-item">
            <a href="#">PRODUCT SUPPORT <span className="chevron"></span></a>
          </li>

          <li className="menu-item">
            <a href="#">LIBRE 3 PLUS <span className="chevron"></span></a>
          </li>
        </ul>

        {/* Right side actions group */}
        <div className="nav-actions">
          <button className="trial-btn">$15 Trial</button>
          
          <button className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <button className="icon-btn" aria-label="User Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
          
          <button className="icon-btn cart-wrapper" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}