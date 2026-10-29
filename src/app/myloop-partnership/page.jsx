'use client';

import React from 'react';
import Image from 'next/image';
import './style.css';

export default function MyLifeLoopSystemPage() {
  return (
    <main className="mylife-page">
      {/* Breadcrumb */}
      <nav className="mylife-breadcrumb">
        <div className="mylife-container">
          <span className="home-icon">🏠</span> &gt; <span>FreeStyle Libre 3 Plus | mylife Loop System</span>
        </div>
      </nav>

      {/* 1. Hero Section */}
      {/* 1. Hero & AID Intro Combined Section */}
     {/* 1. Hero & AID Intro Combined Section */}
      <section className="mylife-hero-section">
        <div className="mylife-hero-banner">
          <div className="mylife-hero-bg">
            <Image
              src="/ADC_PHOTO_FSL3_YPSO_Ball_Teen_.webp"
              alt="Teen playing sports with Libre 3 Plus sensor"
              fill
              priority
              className="hero-img"
            />
          </div>

          {/* Fixed Non-Cut Circle Card Container */}
          <div className="mylife-hero-circle">
            <div className="mylife-hero-content">
              <h1>
                Pair the NEW FreeStyle Libre 3 Plus sensor with the mylife Loop system
              </h1>
              <div className="yellow-line-short"></div>
              <p className="hero-subtext">Now available via NDSS Subsidy</p>
            </div>
          </div>
        </div>

        {/* Lower Row with Overlapping Butterfly and AID Intro Content */}
        <div className="mylife-container hero-bottom-row">
          <div className="butterfly-wrapper">
            <Image
              src="/Vector (1).webp"
              alt="Yellow Libre Butterfly Graphic"
              width={160}
              height={160}
              className="butterfly-img"
            />
          </div>

          <div className="aid-intro-content">
            <h2>A seamless automated insulin delivery (AID) system</h2>
            <div className="yellow-line-short"></div>
            <p>
              Pair the accurate<sup>76</sup> minute-by-minute glucose readings from your Libre 3 Plus sensor with the mylife CamAPS FX app, which adjusts insulin delivery on the mylife YpsoPump to help prevent low and high glucose levels.
            </p>
          </div>
        </div>
      </section>
      {/* 2. Seamless AID System Intro Section */}
      {/* <section className="mylife-container aid-intro-section">
        <div className="aid-intro-content">
          <h2>A seamless automated insulin delivery (AID) system</h2>
          <div className="yellow-line-short"></div>
          <p>
            Pair the accurate<sup>76</sup> minute-by-minute glucose readings from your Libre 3 Plus sensor with the mylife CamAPS FX app, which adjusts insulin delivery on the mylife YpsoPump to help prevent low and high glucose levels.
          </p>
        </div>
      </section> */}

      {/* 3. Single-App Setup with mylife Loop System */}
      <section className="mylife-container single-app-section">
        <h2 className="section-title">
          Single-app setup with the mylife Loop system and the Libre 3 Plus sensor
        </h2>

        <div className="single-app-grid">
          {/* Left Instructions Column */}
          <div className="single-app-instructions">
            <ul className="bullet-list-styled">
              <li>
                Use the mylife CamAPS FX app to start your Libre 3 Plus sensor. No calibration or manual code entry required.
              </li>
              <li>
                Based on accurate<sup>76</sup>, minute-to-minute sensor readings, the mylife CamAPS FX app adjusts insulin delivery on the mylife YpsoPump to prevent low and high glucose levels.
              </li>
              <li>
                The mylife Loop system for automated insulin delivery (AID) consists of the mylife CamAPS FX app and the mylife YpsoPump insulin pump.
              </li>
            </ul>

            <div className="support-links-group">
              <a href="#support" className="yellow-link">User support information</a>
              <a href="#compatibility" className="yellow-link">Mobile compatibility</a>
            </div>
          </div>

          {/* Right Diagram Column */}
          <div className="single-app-diagram">
            <Image
              src="/Ypso-LockUp-With-Arrows_1.webp"
              alt="mylife CamAPS FX app and mylife YpsoPump Integration Diagram"
              width={460}
              height={280}
              className="diagram-img"
            />
          </div>
        </div>
      </section>

      {/* 4. Subsidy Access & Switching Form Section */}
      <section className="mylife-container subsidy-access-section">
        <div className="subsidy-grid">
          {/* Yoga Lifestyle Photo */}
          <div className="subsidy-image-col">
            <Image
              src="/ADC_PHOTO_FSL3_YPSO_Woman_Yo.webp"
              alt="Woman performing yoga with Libre 3 Plus sensor"
              width={440}
              height={440}
              className="rounded-card-img"
            />
          </div>

          {/* Subsidy Info Content */}
          <div className="subsidy-content-col">
            <div className="subsidy-block">
              <h3>Accessing Libre 3 Plus if you are not already accessing the subsidy.</h3>
              <p>
                For everything you need to know to access the NDSS type 1 CGM subsidy, including eligibility and who can authorise access, visit SubsidyChecker.com.au .
              </p>
              <button className="btn-dark pill-btn">SubsidyChecker.com.au</button>
            </div>

            <div className="subsidy-block margin-top-lg">
              <h3>Switching to Libre 3 Plus from another CGM</h3>
              <p>
                Your authorised healthcare professional can submit an 'Update or ceasing access form' (sometimes referred to as a 'switch form') to the NDSS on your behalf. They can easily do this via an online portal, and access can be confirmed within minutes if all required information is supplied. The NDSS will notify you via email or letter when your updated access has been approved.
              </p>
              <button className="btn-dark pill-btn">Update or ceasing access form</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Software Version & Legal Fine Print Footer */}
      <footer className="footer-disclaimers">
        <div className="footer-disclaimer-container">
          <p className="version-number-text">Sensor Software Version Number - 1.4.2.30</p>
          <p>
            The mylife CamAPS FX App is used to manage glucose levels in people with type 1 diabetes (including type 1 diabetes pregnancy), aged 1 year and older, using a hybrid closed-loop approach. Approved for people with type 1 diabetes aged two years and over when used in combination with FreeStyle Libre 3 Plus.
          </p>
          <p>
            mylife and YpsoPump are registered trademarks of Ypsomed AG in several countries. CamAPS is a registered trademark of CamDiab Ltd.
          </p>
          <p>
            The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG, Inc., and any use of such marks by Ypsomed is under license.
          </p>
          <p className="footer-version-code text-right">ADC-121999 V3.0</p>
        </div>
      </footer>
    </main>
  );
}