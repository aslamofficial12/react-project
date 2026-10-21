'use client';

import React, { useState } from 'react';
import './style.css';

const categoryData = {
  "Libre app": {
    title: "Libre app",
    sup: "12",
    items: [
      {
        title: "Mobile Compatibility Guide",
        text: "Check to ensure your phone is compatible with Libre app",
        linkText: "Check Compatibility",
        linkHref: "#compatibility",
        type: "qr"
      },
      {
        title: "Libre app manual for Libre 2 Plus sensor users",
        text: "Online version of the Libre app manual - refer to this if you are using Libre 2 Plus sensors",
        linkText: "Download the manual",
        linkHref: "#manual-2",
        type: "manual",
        manualTitle: "App User's Manual",
        manualSub: "For use with FreeStyle Libre 2 sensor and FreeStyle Libre 2 Plus sensor"
      },
      {
        title: "Libre app manual for Libre 3 Plus sensor users",
        text: "Online version of the Libre app manual - refer to this if you are using Libre 3 Plus sensors",
        linkText: "Download the manual",
        linkHref: "#manual-3",
        type: "manual",
        manualTitle: "App User's Manual",
        manualSub: "For use with FreeStyle Libre 3 sensor, FreeStyle Libre 3 Plus sensor and Libre Select sensor"
      },
      {
        title: "Video Guides",
        text: "Video guides to help you get the most out of Libre app",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video",
        imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Frequently Asked Questions",
        text: "Detailed FAQ information for users of Libre app",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq",
        imgUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05d9e?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Libre app information page",
        text: "Your go to source for everything about the Libre app",
        linkText: "More Details",
        linkHref: "#app-info",
        type: "phone"
      }
    ]
  },
  "FreeStyle Libre 2 Plus sensor": {
    title: "FreeStyle Libre 2 Plus Sensor",
    sup: "",
    items: [
      {
        title: "Your Complete Guide to FreeStyle Libre 2 Plus",
        text: "An essential resource for all FreeStyle Libre 2 Plus users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "manual",
        manualTitle: "User's Guide",
        manualSub: "FreeStyle Libre 2 Plus Sensor System"
      },
      {
        title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
        text: "Learn how to correctly prepare the skin & secure your sensor.",
        linkText: "Download Guide",
        linkHref: "#adhesion",
        type: "manual",
        manualTitle: "Adhesion Guide",
        manualSub: "Skin Preparation & Care"
      }
    ]
  },
  "FreeStyle LibreLink": {
    title: "FreeStyle LibreLink",
    sup: "",
    items: [
      {
        title: "FreeStyle LibreLink App Setup & Getting Started",
        text: "Everything you need to know about setting up the FreeStyle LibreLink app on your smartphone.",
        linkText: "View Setup Guide",
        linkHref: "#setup",
        type: "manual",
        manualTitle: "Getting Started Guide",
        manualSub: "For iPhone and Android users"
      }
    ]
  },
  "LibreView": {
    title: "LibreView",
    sup: "",
    items: [
      {
        title: "LibreView Patient Account Guide",
        text: "Connect with your healthcare team and share your glucose data securely.",
        linkText: "Learn More",
        linkHref: "#libreview",
        type: "manual",
        manualTitle: "LibreView Manual",
        manualSub: "Cloud-based glucose management system"
      }
    ]
  },
  "LibreLinkUp": {
    title: "LibreLinkUp",
    sup: "",
    items: [
      {
        title: "LibreLinkUp App User's Guide",
        text: "Monitor your loved ones' glucose readings remotely using the LibreLinkUp app.",
        linkText: "Download Guide",
        linkHref: "#linkup",
        type: "phone"
      }
    ]
  },
  "FreeStyle Libre 2 Sensor": {
    title: "FreeStyle Libre 2 Sensor",
    sup: "",
    items: [
      {
        title: "FreeStyle Libre 2 User's Manual",
        text: "Comprehensive instructions on applying and wearing your FreeStyle Libre 2 sensor.",
        linkText: "Download Manual",
        linkHref: "#sensor2",
        type: "manual",
        manualTitle: "User's Manual",
        manualSub: "FreeStyle Libre 2 Sensor"
      }
    ]
  },
  "FreeStyle Libre 2 Reader": {
    title: "FreeStyle Libre 2 Reader",
    sup: "",
    items: [
      {
        title: "FreeStyle Libre 2 Reader Quick Start Guide",
        text: "Learn how to use your dedicated reader device to check glucose levels.",
        linkText: "Download Guide",
        linkHref: "#reader2",
        type: "manual",
        manualTitle: "Reader Quick Start",
        manualSub: "FreeStyle Libre 2 Reader"
      }
    ]
  }
};

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState("Libre app");
  const [activeTab, setActiveTab] = useState("Product info & manuals");

  const currentCategoryData = categoryData[selectedCategory] || categoryData["Libre app"];

  return (
    <div className="supportContainer">
      {/* Breadcrumbs Header */}
      <div className="breadcrumbBar">
        <div className="container">
          <a href="/" className="homeIcon" aria-label="Home">🏠</a>
          <span className="breadcrumbSeparator">›</span>
          <span className="currentBreadcrumb">Product Support</span>
        </div>
      </div>

      {/* Yellow Header Banner */}
      <section className="yellowBanner">
        <div className="container">
          <h1 className="bannerTitle">Support Center</h1>
          <div className="bannerTabs">
            {["Product info & manuals", "FAQ’s", "Video Guides", "Trouble Shooting"].map((tab) => (
              <button
                key={tab}
                className={`tabBtn ${activeTab === tab ? 'activeTab' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mainContent">
        <div className="container contentGrid">

          {/* Left Category Sidebar */}
          <aside className="sidebar">
            <h3 className="sidebarHeading">Select a Category</h3>
            <ul className="categoryList">
              {Object.keys(categoryData).map((catName) => (
                <li
                  key={catName}
                  className={`categoryItem ${selectedCategory === catName ? 'selectedCategory' : ''}`}
                  onClick={() => setSelectedCategory(catName)}
                >
                  {catName}
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Main Content */}
          <div className="contentArea">
            <h2 className="sectionMainTitle">
              {currentCategoryData.title}
              {currentCategoryData.sup && <sup className="supText">{currentCategoryData.sup}</sup>}
            </h2>

            {currentCategoryData.items.map((item, index) => (
              <div className="contentRow" key={index}>
                <div className="infoBlock">
                  <h3 className="contentTitle">{item.title}</h3>
                  <div className="yellowUnderline"></div>
                  <p className="contentText">{item.text}</p>
                  <a href={item.linkHref} className="blueLink">{item.linkText}</a>
                </div>

                <div className="mediaBlock">
                  {/* QR Code */}
                  {item.type === 'qr' && (
                    <div className="qrBox">
                      <svg className="qrSvg" viewBox="0 0 100 100">
                        <path d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z" fill="#000" />
                        <path d="M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z" fill="#000" />
                        <path d="M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z" fill="#000" />
                        <rect x="40" y="5" width="8" height="8" fill="#000" />
                        <rect x="52" y="15" width="8" height="8" fill="#000" />
                        <rect x="35" y="35" width="10" height="10" fill="#000" />
                        <rect x="50" y="40" width="10" height="10" fill="#000" />
                        <rect x="65" y="35" width="8" height="8" fill="#000" />
                        <rect x="40" y="60" width="8" height="12" fill="#000" />
                        <rect x="55" y="70" width="12" height="8" fill="#000" />
                        <rect x="75" y="55" width="10" height="10" fill="#000" />
                        <rect x="85" y="75" width="10" height="15" fill="#000" />
                      </svg>
                    </div>
                  )}

                  {/* PDF Manual Card */}
                  {item.type === 'manual' && (
                    <div className="manualCard">
                      <div className="manualHeader">
                        <svg className="butterflyIcon" viewBox="0 0 24 24" fill="#FFC20E">
                          <path d="M12 12c2.5-3.5 6-4 8-2s1 5.5-2 7-5.5.5-6-5zm0 0c-2.5-3.5-6-4-8-2s-1 5.5 2 7 5.5.5 6-5zm0 0c3.5 2.5 4 6 2 8s-5.5 1-7-2-.5-5.5 5-6zm0 0c-3.5 2.5-4 6-2 8s5.5 1 7-2 .5-5.5-5-6z" />
                        </svg>
                        <span className="brandName">Libre</span>
                      </div>
                      <div className="manualTitle">{item.manualTitle}</div>
                      <p className="manualSub">{item.manualSub}</p>
                    </div>
                  )}

                  {/* Video & FAQ Image Thumbnails */}
                  {(item.type === 'video' || item.type === 'faq') && (
                    <div className="imageThumbnail">
                      <img src={item.imgUrl} alt={item.title} className="thumbnailImg" />
                    </div>
                  )}

                  {/* Phone Screen Mockup */}
                  {item.type === 'phone' && (
                    <div className="phoneMockup">
                      <div className="phoneScreen">
                        <div className="phoneTopBar">
                          <span style={{ fontSize: '8px', color: '#888' }}>9:41</span>
                          <span style={{ fontSize: '8px', color: '#1a2b3c', fontWeight: 'bold' }}>Libre</span>
                        </div>
                        <div className="phoneValue">
                          <div className="glucoseNum">6.2</div>
                          <div className="glucoseUnit">mmol/L</div>
                        </div>
                        <svg className="trendGraph" viewBox="0 0 100 40">
                          <path d="M0 30 Q25 35 50 20 T100 15" fill="none" stroke="#28a745" strokeWidth="2.5" />
                        </svg>
                        <div className="phoneFooterNav">
                          <span>🏠</span>
                          <span>📊</span>
                          <span>⚙️</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Legal Disclaimers */}
            <div className="supportFooter">
              <div className="footerDocCode">ADC-2698990 V1.0</div>
              <p className="footerLegalText">
                Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
              </p>
              <p className="footerLegalText">
                Google Play and the Google Play logo are trademarks of Google LLC.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}