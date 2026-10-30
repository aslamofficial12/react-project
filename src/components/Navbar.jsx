
"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  // NEW CHANGE: Store logged-in username
  const [username, setUsername] = useState("");

  // NEW CHANGE: Control profile dropdown
  const [showProfile, setShowProfile] = useState(false);

  // NEW CHANGE: Initialize Next.js router
  const router = useRouter();

  // NEW CHANGE: Read username when Navbar loads
  useEffect(() => {
    function checkLogin() {
      const storedUsername = sessionStorage.getItem("username");
      setUsername(storedUsername || "");
    }

    // NEW CHANGE: Check existing login
    checkLogin();

    // NEW CHANGE: Listen for login/logout changes
    window.addEventListener("auth-change", checkLogin);

    // NEW CHANGE: Clean up event listener
    return () => {
      window.removeEventListener("auth-change", checkLogin);
    };
  }, []);

  // UPDATED: Logout function
  // Logout happens only when the user clicks the Logout button
 







const handleLogout = async () => {
  try {
    // Get token and sessionId
    const token = sessionStorage.getItem("authToken");
    const sessionId = sessionStorage.getItem("sessionId");

    if (!token || !sessionId) {
      throw new Error("Token or Session ID missing.");
    }

    // Call Next.js logout API
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: sessionId,
      }),
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({}));

    console.log("Logout response:", data);

    if (!response.ok) {
      throw new Error(
        data.message || "Backend logout failed."
      );
    }

    // Clear session only after successful logout
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("sessionId");
    sessionStorage.removeItem("username");

    setUsername("");
    setShowProfile(false);

    window.dispatchEvent(new Event("auth-change"));

    router.push("/login");

  } catch (error) {
    console.error("Logout API error:", error);
    alert(error.message || "Logout failed.");
  }
};















  

  return (
    <header className="navbar-header">

      {/* TOP TIER */}
      <div className="top-navbar">
        <div className="top-left">
          <img src="/logo.webp" alt="Libre Logo" className="libre-logo" />
        </div>

        <div className="top-right">
          <div className="top-links">
            <a href="/">Mobile Compatibility</a>
            <a href="/">Libre Moments</a>
            <a href="/important-safety-information">
              Important Safety Information
            </a>
          </div>

          <div className="abbott-logo-container">
            <img src="/abbott-logo.webp" alt="Abbott" className="abbott-logo" />
          </div>
        </div>
      </div>

      {/* BOTTOM TIER */}
      <div className="bottom-navbar">
        <ul className="primary-menu">

          {/* 1. PRODUCTS MENU */}
          <li className="menu-item has-dropdown">
            <a href="/product">
              PRODUCTS <span className="chevron"></span>
            </a>

            <div className="mega-dropdown">
              <div className="mega-content-grid">

                <div className="mega-columns-wrapper">
                  <div className="mega-column">
                    <h4 className="mega-section-title">
                      CGM Sensors and Apps
                    </h4>

                    <div className="mega-items-row">
                      <a href="/freestyle-libre-2-plus-sensor" className="mega-item">
                        <div className="mega-img-wrap">
                          <img
                            src="/freestyle_librelink2_sensor_2x.webp"
                            alt="FreeStyle Libre 2 Plus sensor"
                          />
                        </div>
                        <span>FreeStyle Libre 2 Plus sensor</span>
                      </a>

                      <a href="/libreapp" className="mega-item">
                        <div className="mega-img-wrap">
                          <img
                            src="/Detailed-6_2mmol-No-Sensor-40pc_MMenu_212x436.webp"
                            alt="Libre app"
                          />
                        </div>
                        <span>Libre app</span>
                      </a>

                      <a href="/freestylereader" className="mega-item">
                        <div className="mega-img-wrap">
                          <img
                            src="/freestyle_libre2_reader.webp"
                            alt="FreeStyle Libre 2 Reader"
                          />
                        </div>
                        <span>FreeStyle Libre 2 Reader</span>
                      </a>
                    </div>
                  </div>

                  <div className="mega-column connected-care-col">
                    <h4 className="mega-section-title">Connected Care</h4>

                    <div className="mega-items-row">
                      <a href="/LibreLinkUpPage" className="mega-item">
                        <div className="mega-img-wrap">
                          <img
                            src="/Detailed-6_2mmol-No-Sensor-40pc_MMenu_212x436.webp"
                            alt="LibreLinkUp App"
                          />
                        </div>
                        <span>LibreLinkUp App</span>
                      </a>

                      <a href="/libreview" className="mega-item">
                        <div className="mega-img-wrap">
                          <img src="/libreview.webp" alt="LibreView" />
                        </div>
                        <span>LibreView</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mega-banner">
                  <div className="banner-left">
                    <img
                      src="/freestyle_librelink2_sensor_2x.webp"
                      alt="FreeStyle Libre 3 Plus"
                      className="banner-brand-logo"
                    />
                    <img
                      src="/freestyle_librelink2_sensor_2x.webp"
                      alt="Sensor"
                      className="banner-sensor-img"
                    />
                  </div>

                  <div className="banner-middle">
                    <p className="banner-highlight">Pair the NEW</p>
                    <p className="banner-title">
                      FreeStyle Libre 3 Plus sensor
                    </p>
                    <p className="banner-subtitle">
                      with the mylife Loop system
                    </p>
                  </div>

                  <div className="banner-right">
                    <img
                      src="/freestyle_librelink2_sensor_2x.webp"
                      alt="Libre 3 Box"
                      className="banner-box-img"
                    />
                    <div className="banner-action-group">
                      <span className="available-text">Available Now</span>

                      <Link href="/freestyle-libre-3-plus" className="ndss-btn">
                        Via NDSS subsidy
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </li>

          {/* 2. SUBSCRIPTION MENU */}
          <li className="menu-item has-dropdown">
            <a href="/subscription">
              SUBSCRIPTION <span className="chevron"></span>
            </a>

            <div className="mega-dropdown subscription-dropdown">
              <div className="mega-content-grid">
                <div className="sub-columns-container">

                  <div className="sub-save-section">
                    <h4 className="mega-section-title underline-title">
                      Subscribe & Save
                    </h4>

                    <div className="sub-cards-row">
                      <a href="/subscription" className="sub-card-item">
                        <div className="sub-img-container">
                          <span className="badge-circle">
                            EVERY<br /><strong>4</strong><br />WEEKS
                          </span>
                          <img src="/2Every8Weeks_S_S.webp" alt="2 sensors every 4 weeks" />
                        </div>
                        <span className="sub-card-label">
                          2 sensors every 4 weeks
                        </span>
                      </a>

                      <a href="/subscription" className="sub-card-item">
                        <div className="sub-img-container">
                          <span className="badge-circle">
                            EVERY<br /><strong>8</strong><br />WEEKS
                          </span>
                          <img src="/2Every8Weeks_S_S.webp" alt="2 sensors every 8 weeks" />
                        </div>
                        <span className="sub-card-label">
                          2 sensors every 8 weeks
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="sub-vertical-divider"></div>

                  <div className="sub-gift-section">
                    <h4 className="mega-section-title center-title">
                      Subscription Gifting
                    </h4>

                    <div className="sub-cards-row center-items">
                      <a href="/subscription-gifting" className="sub-card-item">
                        <div className="sub-img-container">
                          <span className="badge-circle gift-badge">
                            Gifted<br />subscription
                          </span>
                          <img src="/2Every8Weeks_S_S.webp" alt="Subscription Gifting" />
                        </div>
                        <span className="sub-card-label">
                          Subscription Gifting
                        </span>
                      </a>
                    </div>
                  </div>

                </div>

                <div className="mega-banner sub-promo-banner">
                  <div className="sub-banner-left">
                    <h3>
                      Subscribe & Save Up To 20%*<br />
                      On Sensor Purchases!
                    </h3>
                    <span className="terms-text">*Terms Apply</span>
                  </div>

                  <div className="sub-banner-center">
                    <img
                      src="/2Every8Weeks_S_S.webp"
                      alt="2 Sensors"
                      className="double-sensors-img"
                    />
                  </div>

                  <div className="sub-banner-right">
                    <p className="highlight-text">
                      2x Sensors every <br />
                      <span className="underline-accent">4 or 8 weeks</span>
                    </p>
                    <a className="subscribe-now-btn" href="/subscription">
                      Subscribe Now
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </li>

          {/* 3. SUBSIDY AND ACCESS MENU */}
          <li className="menu-item has-dropdown">
            <a href="#subsidy">
              SUBSIDY AND ACCESS <span className="chevron"></span>
            </a>

            <div className="dropdown subsidy-dropdown-menu">
              <div className="dropdown-header-title">
                Subsidy and Access
              </div>
              <ul className="dropdown-links-list">
                <li><a href="/subsidy">NDSS Subsidy</a></li>
                <li><a href="/dvaAccess">DVA Access</a></li>
                <li><a href="/allAccess">All Access Options</a></li>
              </ul>
            </div>
          </li>

          {/* 4. DISCOVER MENU */}
          <li className="menu-item has-dropdown">
            <a href="#discover">
              DISCOVER <span className="chevron"></span>
            </a>

            <div className="discover-mega-menu">
              <div className="discover-columns-wrapper">

                <div className="discover-column">
                  <h4 className="discover-title">All about Libre</h4>
                  <ul className="discover-links">
                    <li><a href="#">Getting Started With Libre</a></li>
                    <li><a href="#">What Is FreeStyle Libre 2 Plus</a></li>
                    <li>
                      <a href="/topten-tips-libre">
                        Top 10 Tips For New FreeStyle Libre 2 Plus Users
                      </a>
                    </li>
                    <li>
                      <a href="/difference-between-glucose-interstitial-glucose">
                        The Difference Between Blood Glucose & Sensor Glucose
                      </a>
                    </li>
                    <li><a href="#">Product Info And Manuals</a></li>
                    <li><a href="#">Video Guides</a></li>
                    <li><a href="#">AnzCGM - Quality Matters</a></li>
                  </ul>
                </div>

                <div className="discover-column">
                  <h4 className="discover-title">
                    Apps And Connected Care
                  </h4>
                  <ul className="discover-links">
                    <li><a href="/libreapp">Libre App</a></li>
                    <li><a href="/LibreLinkUpPage">LibreLinkUp</a></li>
                    <li><a href="/libreview">LibreView</a></li>
                    <li><a href="/freestylelibrelink">FreeStyle LibreLink</a></li>
                  </ul>
                </div>

                <div className="discover-column">
                  <h4 className="discover-title">Partnerships</h4>
                  <ul className="discover-links">
                    <li>
                      <a href="/myloop-partnership">
                        Pair Libre 3 Plus With The MyLoop System
                      </a>
                    </li>
                    <li>
                      <a href="/omnipod-partnership">
                        Omnipod® 5 Automated Insulin Delivery System (AID)
                      </a>
                    </li>
                    <li>
                      <a href="/novopen">NovoPen® 6 Smart Insulin Pen</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </li>

          {/* 5. PRODUCT SUPPORT MENU */}
          <li className="menu-item has-dropdown">
            <a href="#support">
              PRODUCT SUPPORT <span className="chevron"></span>
            </a>

            <div className="product-support-mega-menu">
              <div className="product-support-columns-wrapper">

                <div className="product-support-column">
                  <h4 className="product-support-title">Product Info</h4>
                  <ul className="product-support-links">
                    <li><a href="/support-center">Product Info And Manuals</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Video Guides</a></li>
                    <li><a href="#">Libre 2 Plus Mobile Compatibility</a></li>
                    <li><a href="#">Libre 3 Plus Mobile Compatibility</a></li>
                    <li><a href="#">Troubleshooting</a></li>
                  </ul>
                </div>

                <div className="product-support-column">
                  <h4 className="product-support-title">
                    Customer Service
                  </h4>
                  <ul className="product-support-links">
                    <li><a href="/Contact-us">Contact Support</a></li>
                    <li><a href="/orderTracker">Track Your Order</a></li>
                    <li>
                      <a href="/important-safety-information">
                        Safety Information
                      </a>
                    </li>
                    <li><a href="#">Sensor Replacement Request</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>

          {/* 6. LIBRE 3 PLUS MENU */}
          <li className="menu-item has-dropdown">
            <a href="#libre3">
              LIBRE 3 PLUS <span className="chevron"></span>
            </a>

            <div className="dropdown libre3-dropdown-menu">
              <ul className="dropdown-links-list">
                <li>
                  <a href="/freestyle-libre-3-plus">
                    FreeStyle Libre 3 Plus Sensor
                  </a>
                </li>
                <li>
                  <a href="/omnipod-partnership">
                    Pair Libre 3 Plus With The Omnipod® 5 Automated Insulin
                    Delivery System (AID)
                  </a>
                </li>
                <li>
                  <a href="/myloop-partnership">
                    Pair Libre 3 Plus With The Mylife Loop System
                  </a>
                </li>
                <li>
                  <a href="/Mobile-Compatibility">
                    Libre 3 Plus Mobile Compatibility
                  </a>
                </li>
              </ul>
            </div>
          </li>

        </ul>

        {/* RIGHT SIDE ACTIONS */}
        <div className="nav-actions">
          <button className="trial-btn">$15 Trial</button>

          <button className="icon-btn" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* NEW CHANGE: Profile wrapper */}
          <div className="profile-menu-wrapper">

            {/* UPDATED: Profile button checks login status */}
            <button
              className="icon-btn"
              aria-label="User Profile"
              aria-expanded={showProfile}
              onClick={() => {
                if (username) {
                  // NEW CHANGE: Toggle dropdown when logged in
                  setShowProfile((prev) => !prev);
                } else {
                  // NEW CHANGE: Navigate to login when not logged in
                  router.push("/login");
                }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            {/* NEW CHANGE: Show dropdown only when logged in */}
            {showProfile && username && (
              <div className="profile-dropdown">

                {/* NEW CHANGE: Display username */}
                <div className="profile-user">
                  <strong>{username}</strong>
                  <span>Logged in</span>
                </div>

                <div className="profile-divider"></div>

                {/* NEW CHANGE: Logout button */}
                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  <span>↪</span>
                  Logout
                </button>

              </div>
            )}
          </div>

          <button className="icon-btn cart-wrapper" aria-label="Cart">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
