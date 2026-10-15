'use client';
import React, { useState } from 'react';
import './style.css';

// Define data for each category so content changes dynamically
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
                type: "video"
            },
            {
                title: "Frequently Asked Questions",
                text: "Detailed FAQ information for users of Libre app",
                linkText: "More Details",
                linkHref: "#faq",
                type: "faq"
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
                type: "banner-card",
                cardTitle: "Your Complete Guide to FreeStyle Libre 2 Plus",
                cardBg: "#ffc107"
            },
            {
                title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
                text: "Learn how to correctly prepare the skin & secure your sensor.",
                linkText: "Download Guide",
                linkHref: "#adhesion",
                type: "banner-card",
                cardTitle: "Sensor Adhesion Guide",
                cardBg: "#ffc107"
            },
            {
                title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
                text: "Learn how to correctly prepare the skin & secure your sensor.",
                linkText: "Download Guide",
                linkHref: "#adhesion",
                type: "banner-card",
                cardTitle: "Sensor Adhesion Guide",
                cardBg: "#ffc107"
            },
            {
                title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
                text: "Learn how to correctly prepare the skin & secure your sensor.",
                linkText: "Download Guide",
                linkHref: "#adhesion",
                type: "banner-card",
                cardTitle: "Sensor Adhesion Guide",
                cardBg: "#ffc107"
            },
            {
                title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
                text: "Learn how to correctly prepare the skin & secure your sensor.",
                linkText: "Download Guide",
                linkHref: "#adhesion",
                type: "banner-card",
                cardTitle: "Sensor Adhesion Guide",
                cardBg: "#ffc107"
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
            },
            {
                title: "Alarm Settings & Customization",
                text: "Learn how to configure real-time glucose alarms and target ranges.",
                linkText: "More Details",
                linkHref: "#alarms",
                type: "faq"
            },
            {
                title: "Alarm Settings & Customization",
                text: "Learn how to configure real-time glucose alarms and target ranges.",
                linkText: "More Details",
                linkHref: "#alarms",
                type: "faq"
            },
            {
                title: "Alarm Settings & Customization",
                text: "Learn how to configure real-time glucose alarms and target ranges.",
                linkText: "More Details",
                linkHref: "#alarms",
                type: "faq"
            },
            {
                title: "Alarm Settings & Customization",
                text: "Learn how to configure real-time glucose alarms and target ranges.",
                linkText: "More Details",
                linkHref: "#alarms",
                type: "faq"
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
            },
            {
                title: "LibreView Patient Account Guide",
                text: "Connect with your healthcare team and share your glucose data securely.",
                linkText: "Learn More",
                linkHref: "#libreview",
                type: "manual",
                manualTitle: "LibreView Manual",
                manualSub: "Cloud-based glucose management system"
            },
            {
                title: "LibreView Patient Account Guide",
                text: "Connect with your healthcare team and share your glucose data securely.",
                linkText: "Learn More",
                linkHref: "#libreview",
                type: "manual",
                manualTitle: "LibreView Manual",
                manualSub: "Cloud-based glucose management system"
            },
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
            },
            {
                title: "LibreLinkUp App User's Guide",
                text: "Monitor your loved ones' glucose readings remotely using the LibreLinkUp app.",
                linkText: "Download Guide",
                linkHref: "#linkup",
                type: "phone"
            },
            {
                title: "LibreLinkUp App User's Guide",
                text: "Monitor your loved ones' glucose readings remotely using the LibreLinkUp app.",
                linkText: "Download Guide",
                linkHref: "#linkup",
                type: "phone"
            },
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
            },

            {
                title: "FreeStyle Libre 2 User's Manual",
                text: "Comprehensive instructions on applying and wearing your FreeStyle Libre 2 sensor.",
                linkText: "Download Manual",
                linkHref: "#sensor2",
                type: "manual",
                manualTitle: "User's Manual",
                manualSub: "FreeStyle Libre 2 Sensor"
            },

            {
                title: "FreeStyle Libre 2 User's Manual",
                text: "Comprehensive instructions on applying and wearing your FreeStyle Libre 2 sensor.",
                linkText: "Download Manual",
                linkHref: "#sensor2",
                type: "manual",
                manualTitle: "User's Manual",
                manualSub: "FreeStyle Libre 2 Sensor"
            },
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
            },
            {
                title: "FreeStyle Libre 2 Reader Quick Start Guide",
                text: "Learn how to use your dedicated reader device to check glucose levels.",
                linkText: "Download Guide",
                linkHref: "#reader2",
                type: "manual",
                manualTitle: "Reader Quick Start",
                manualSub: "FreeStyle Libre 2 Reader"
            },
            {
                title: "FreeStyle Libre 2 Reader Quick Start Guide",
                text: "Learn how to use your dedicated reader device to check glucose levels.",
                linkText: "Download Guide",
                linkHref: "#reader2",
                type: "manual",
                manualTitle: "Reader Quick Start",
                manualSub: "FreeStyle Libre 2 Reader"
            },
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
    const currentCategoryData = categoryData[selectedCategory] || categoryData["Libre app"];

    return (
        <div className="supportContainer">
            {/* Top Header / Navigation Bar */}
            {/* <header className="topHeader">
        <div className="headerTopLinks">
          <div className="container">
            <span className="topLinkItem">Mobile Compatibility</span>
            <span className="topLinkItem">Libre Moments</span>
            <span className="topLinkItem">Important Safety Information</span>
            <div className="abbottLogo">Abbott</div>
          </div>
        </div>
        
        <div className="mainNav">
          <div className="container navFlex">
            <div className="brandLogo">
              <span className="butterflyIcon">🦋</span> Libre
            </div>
            <nav className="navLinks">
              <a href="#products">PRODUCTS ▾</a>
              <a href="#subscription">SUBSCRIPTION ▾</a>
              <a href="#subsidy">SUBSIDY AND ACCESS ▾</a>
              <a href="#discover">DISCOVER ▾</a>
              <a href="#support" className="activeNav">PRODUCT SUPPORT ▾</a>
              <a href="#libre3">LIBRE 3 PLUS ▾</a>
            </nav>
            <div className="navActions">
              <span className="trialBtn">$15 Trial</span>
              <span className="iconBtn">🔍</span>
              <span className="iconBtn">👤</span>
              <span className="cartBtn">🛒 <span className="cartBadge">0</span></span>
            </div>
          </div>
        </div>
      </header> */}

            {/* Breadcrumb Section */}
            <div className="breadcrumbBar">
                <div className="container">
                    <a href="/" className="homeIcon">🏠</a>
                    <span className="breadcrumbSeparator">›</span>
                    <span className="currentBreadcrumb">Product Support</span>
                </div>
            </div>

            {/* Yellow Banner Section */}
            <section className="yellowBanner">
                <div className="container">
                    <h1 className="bannerTitle">Support Center</h1>
                    <div className="bannerTabs">
                        <button className="tabBtn activeTab">Product info & manuals</button>
                        <button className="tabBtn">FAQ’s</button>
                        <button className="tabBtn">Video Guides</button>
                        <button className="tabBtn">Trouble Shooting</button>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <main className="mainContent">
                <div className="container contentGrid">

                    {/* Left Sidebar Category Selector */}
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

                    {/* Right Content Area */}
                    <div className="contentArea">
                        <h2 className="sectionMainTitle">
                            {currentCategoryData.title}
                            {currentCategoryData.sup && <sup className="supText">{currentCategoryData.sup}</sup>}
                        </h2>

                        {/* Dynamically Rendered Content Rows based on selected category */}
                        {currentCategoryData.items.map((item, index) => (
                            <div className="contentRow" key={index}>
                                <div className="infoBlock">
                                    <h3 className="contentTitle">{item.title}</h3>
                                    <div className="yellowUnderline"></div>
                                    <p className="contentText">{item.text}</p>
                                    <a href={item.linkHref} className="blueLink">{item.linkText}</a>
                                </div>
                                <div className="mediaBlock">
                                    {item.type === 'qr' && (
                                        <div className="qrPlaceholder">
                                            <div className="fakeQr">[ QR Code ]</div>
                                        </div>
                                    )}
                                    {item.type === 'manual' && (
                                        <div className="manualCard">
                                            <div className="manualBrand">🦋 Libre</div>
                                            <div className="manualCoverTitle">{item.manualTitle}</div>
                                            <p className="manualSub">{item.manualSub}</p>
                                        </div>
                                    )}
                                    {item.type === 'video' && (
                                        <div className="imageThumbnail">
                                            <div className="placeholderImgBg" style={{ background: '#d1e7dd' }}>
                                                <span>👨‍🦳 [Video Guide]</span>
                                            </div>
                                        </div>
                                    )}
                                    {item.type === 'faq' && (
                                        <div className="imageThumbnail">
                                            <div className="placeholderImgBg" style={{ background: '#f8d7da' }}>
                                                <span>👴 [FAQ Image]</span>
                                            </div>
                                        </div>
                                    )}
                                    {item.type === 'phone' && (
                                        <div className="phoneMockup">
                                            <div className="phoneScreen">
                                                <span className="glucoseVal">6.2</span>
                                                <div className="miniChart">📈</div>
                                            </div>
                                        </div>
                                    )}
                                    {item.type === 'banner-card' && (
                                        <div className="yellowPromoCard">
                                            <div className="promoTop">🦋 Libre 2 <span className="plusTag">PLUS</span></div>
                                            <div className="promoText">{item.cardTitle}</div>
                                            <div className="promoPhone">6.2</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            {/* Footer Disclaimer */}
            {/* <footer className="footer">
        <div className="container">
          <p className="adcCode">ADC-2698990 V1.0</p>
          <p className="disclaimerText">
            Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
          </p>
          <p className="disclaimerText">
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </footer> */}
        </div>
    );
}