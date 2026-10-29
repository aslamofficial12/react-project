"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./style.css";

export default function MobileCompatibilityPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="compatibility-container">
      {/* Full-bleed Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <Image 
            src="/MobileHeroDesktop_2_opt.webp" 
            alt="Mobile Compatibility Guides Header" 
            width={1920} 
            height={600} 
            className="hero-image" 
            priority 
          />

          <div className="hero-circle-badge">
            <h1>
              Mobile Compatibility Guides
            </h1>
            <p>
              Check these guides to ensure your phone is compatible with your
              Libre sensor
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="page-inner-content">
        {/* Intro Section */}
        <section className="intro-compatibility-section">
          <h2>
            The new Libre app<sup>12</sup> is now available for Libre 3 Plus and
            2 Plus sensor users!
          </h2>
          <p>
            The Libre app<sup>12</sup> combines the features you know and trust
            with breakthrough innovations designed around your needs. The
            FreeStyle Libre 3 Plus standalone (no AID required) sensor requires
            the Libre app<sup>12</sup>; it is not compatible with FreeStyle
            LibreLink<sup>12</sup>. Before upgrading to the Libre 3 Plus
            standalone sensor or downloading the Libre app<sup>12</sup>, please
            check that your smartphone is compatible.
          </p>
          <button className="btn-dark-pill">Libre app compatibility guide</button>
        </section>

        {/* Section 1: Libre 2 and Libre 2 Plus Guide */}
        <section className="compatibility-guide-section">
          <h2 className="guide-section-title">
            Mobile compatibility guide for Libre 2 and Libre 2 Plus users using
            FreeStyle LibreLink<sup>12</sup>
          </h2>
          <div className="yellow-divider"></div>

          <div className="guide-card-row">
            <Image 
              alt="FreeStyle Libre 2 Plus Sensor Pack" 
              className="guide-product-img" 
              height={180} 
              src="/FSL2_Pack_1.webp" 
              width={220} 
            />
            <Image 
              alt="QR Code for Libre 2 and 2 Plus Compatibility" 
              className="guide-qr-img" 
              height={160} 
              src="/Libre_2_and_2_Plus_compatibility_200x200.webp" 
              width={160} 
            />
          </div>

          <p className="guide-description">
            If your smartphone is not compatible with the new Libre app,<sup>12</sup>{" "}
            or if you are scanning the Novopen® 6, please continue to use
            FreeStyle LibreLink.<sup>12</sup> Scan this QR code with your
            smartphone, or simply click the link for FreeStyle LibreLink<sup>12</sup>{" "}
            compatibility guide.
          </p>

          <button className="btn-dark-pill">
            Libre 2 and Libre 2 Plus FreeStyle LibreLink Compatibility Guide
          </button>
        </section>

        {/* Section 2: Libre 3 Plus with myLoop System */}
        <section className="compatibility-guide-section">
          <h2 className="guide-section-title">
            Mobile compatibility guide for using Libre 3 Plus sensors as part of
            the myLoop system
          </h2>
          <div className="yellow-divider"></div>

          <div className="guide-card-row">
            <Image 
              alt="QR Code for Libre 3 Plus myLoop Compatibility" 
              className="guide-qr-img" 
              height={160} 
              src="/Libre_3_Plus_Mobile_Compatibilit_200x200.webp" 
              width={160} 
            />
            <Image 
              alt="FreeStyle Libre 3 Plus Sensor Pack" 
              className="guide-product-img" 
              height={180} 
              src="/ADC_Pack_Sensor-FSL3P_Right_Clea_1.webp" 
              width={220} 
            />
          </div>

          <p className="guide-description">
            Scan this QR code with your smartphone, or click the link for the
            Libre 3 Plus with myLoop system compatibility guide.
          </p>

          <button className="btn-dark-pill">
            Libre 3 Plus with myLoop system Compatibility Guide
          </button>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="faq-section">
          <div className="faq-header-row">
            <h2>Frequently Asked Questions</h2>
            <button className="expand-all-btn">Expand All</button>
          </div>
          <div className="yellow-divider"></div>

          <div className="faq-container">
            {/* FAQ Item 1 */}
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFaq(0)}
              >
                <span>
                  Why do I need to check the mobile compatibility guide before I
                  update my phone’s operating system (OS)?
                </span>
                <span className="faq-icon">{openFaq === 0 ? "−" : "+"}</span>
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  Compatibility guide lists mobile devices and Operating Systems
                  (OS) which have been tested and are compatible with FreeStyle
                  Libre apps and software. We recommend checking this guide
                  before installing a new OS version on your devices or before
                  using the app with a new phone. Use of an unsupported mobile
                  device or OS version may affect App security and
                  functionality.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFaq(1)}
              >
                <span>How often is the compatibility guide updated?</span>
                <span className="faq-icon">{openFaq === 1 ? "−" : "+"}</span>
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  We are committed to ensuring our users have the latest, most
                  stable experience. Popular devices and operating systems (OS)
                  are regularly tested to evaluate NFC scan performance, Bluetooth
                  connectivity, and app compatibility with sensors.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer / Disclaimers */}
        <footer className="compatibility-footer">
          <p>
            The mylife CamAPS FX App is used to manage glucose levels in people
            with type 1 diabetes (including type 1 diabetes pregnancy), aged 1
            year and older, using a hybrid closed-loop approach. Approved for
            people with type 1 diabetes aged two years and over when used in
            combination with FreeStyle Libre 3 Plus.
          </p>
          <p>
            mylife and Ypsopump are registered trademarks of Ypsopump AG in
            several countries. CamAPS is a registered trademark of CamDiab Ltd.
          </p>
          <div className="doc-code-right">ADC-2654794 V4.0</div>
        </footer>
      </div>
    </div>
  );
}