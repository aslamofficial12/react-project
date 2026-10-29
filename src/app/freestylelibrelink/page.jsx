"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function FreeStyleLibrePage() {
  const [activeTab, setActiveTab] = useState("setup");

  // Dynamic tab content mapping with media assets
  const tabContents = {
    setup: {
      image: "/Get_Started_2_1.webp",
      text: "Download and set up FreeStyle LibreLink on your compatible Apple or Android smartphone in just a few simple steps.",
      showStoreBtns: true,
      showPdfLink: true,
    },
    alarms: {
      image: "/Get_Started_3_1.webp",
      text: "Optional glucose alarms notify you the minute your glucose goes too high or too low, so you can take immediate action. Alarms are easy to set up and fully customisable, so you can have peace of mind knowing you'll never miss a crucial moment.",
      showStoreBtns: false,
      showPdfLink: false,
    },
    interpreting: {
      image: "/Get_Started_4_1.webp",
      text: "Learn how to interpret your reading and what each element means. All elements of your reading combined give you a full picture of your glucose levels.",
      showStoreBtns: false,
      showPdfLink: false,
    },
    healthcare: {
      image: "/Digital_Tools_1_1.webp",
      text: "Automatically share your glucose data with your healthcare team, allowing them to use the insights from your data to personalise your treatment plan and optimise your consultations.",
      showStoreBtns: false,
      showPdfLink: false,
      linkText: "Learn more about LibreView",
    },
    lovedones: {
      image: "/connected.webp",
      text: "With LibreLinkUp, your loved ones and caregivers can remotely receive your real-time glucose readings, for peace of mind for you and for them, whether you're sleeping or out enjoying life.",
      showStoreBtns: false,
      showPdfLink: false,
      linkText: "Learn more about LibreLinkUp",
    },
  };

  return (
    <div className="freestyle-container">
      {/* Full-bleed Hero Section */}
      <section className="hero-section">
        {/* Top Hero Image Container with Overlay Circle */}
        <div className="hero-image-wrapper">
          <Image
            src="/LibreLink_-_DT_HeroV2.webp"
            alt="FreeStyle LibreLink Header Image"
            width={1920}
            height={600}
            className="hero-image"
            priority
          />

          {/* Overlay Circle Badge on the top left */}
          <div className="hero-circle-badge">
            <h2>
              FreeStyle LibreLink<sup>12</sup>
            </h2>
            <p>
              One app that allows you to easily monitor and share your glucose
              readings.
            </p>
          </div>
        </div>

        {/* Full-width Yellow Banner Content */}
        <div className="hero-yellow-banner">
          <h2 className="hero-notice">
            Please note: The all-new Libre app<sup>12</sup> is now available and
            is the recommended app for standalone Libre sensor use (not using
            AID). Please check your compatibility with Libre app before
            downloading it.
          </h2>

          {/* Center Divider Line */}
          <div className="yellow-center-line"></div>

          <p className="hero-subtext">
            IMPORTANT: If your smartphone is not compatible with Libre app, or
            if you are scanning the Novopen® 6, please use FreeStyle LibreLink
            with the Libre 2 Plus sensor for standalone sensor use.
          </p>

          <div className="hero-buttons">
            <button className="btn-dark">More about Libre app</button>
            <button className="btn-dark">Check your compatibility</button>
          </div>
        </div>
      </section>

      {/* Inner Main Content Area */}
      <div className="page-inner-content">
        {/* Main Product / Data Overview Section */}
        <section className="data-overview-section">
          <div className="phone-mockup-column">
            <Image
              src="/freestyle-libre-app-symbol---m-2x.webp"
              alt="Glucose Monitor Mobile App View"
              width={270}
              height={480}
              className="phone-mockup-image"
            />
          </div>

          <div className="details-column">
            <h2>See the complete picture of your glucose data</h2>
            <p className="important-note">
              <strong>IMPORTANT:</strong> Use FreeStyle LibreLink if your
              smartphone is not compatible with Libre app, or if you are scanning
              the Novopen® 6. Libre 3 Plus sensors will not work with FreeStyle
              LibreLink. <a href="#">Access the Libre App.</a>
            </p>

            <ul className="feature-list">
              <li>See your glucose in real-time, anytime.</li>
              <li>
                Be alerted the minute your glucose is too low or too high with
                optional alarms.
              </li>
              <li>
                Personalised reports for deeper insights into your glucose data
              </li>
              <li>Easy to connect with your loved ones and healthcare team.</li>
            </ul>

            <div className="store-buttons">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="store-badge"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="store-badge"
                />
              </a>
            </div>

            <a href="#" className="compatibility-link">
              Check device compatibility (PDF)
            </a>
          </div>
        </section>

        {/* Getting Started Interactive Tab Section */}
        <section className="tabs-section">
          <h2 className="section-title">
            Getting started with FreeStyle LibreLink
          </h2>
          <div className="yellow-divider"></div>

          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "setup" ? "active" : ""}`}
              onClick={() => setActiveTab("setup")}
            >
              Setting Up FreeStyle LibreLink
            </button>
            <button
              className={`tab-btn ${activeTab === "alarms" ? "active" : ""}`}
              onClick={() => setActiveTab("alarms")}
            >
              Optional Alarms
            </button>
            <button
              className={`tab-btn ${
                activeTab === "interpreting" ? "active" : ""
              }`}
              onClick={() => setActiveTab("interpreting")}
            >
              Interpreting Your Glucose Readings
            </button>
            <button
              className={`tab-btn ${
                activeTab === "healthcare" ? "active" : ""
              }`}
              onClick={() => setActiveTab("healthcare")}
            >
              Sharing with your Healthcare Team
            </button>
            <button
              className={`tab-btn ${
                activeTab === "lovedones" ? "active" : ""
              }`}
              onClick={() => setActiveTab("lovedones")}
            >
              Sharing with your Loved Ones
            </button>
          </div>

          <div className="tab-content-container">
            <div className="tab-media">
              <Image
                src={tabContents[activeTab].image}
                alt="Getting Started Visual Guide"
                width={500}
                height={300}
                className="tab-media-image"
              />
            </div>

            <div className="tab-info">
              <p>{tabContents[activeTab].text}</p>

              {tabContents[activeTab].showStoreBtns && (
                <div className="store-buttons">
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on App Store"
                      className="store-badge"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="store-badge"
                    />
                  </a>
                </div>
              )}

              {tabContents[activeTab].showPdfLink && (
                <a href="#" className="compatibility-link">
                  Check device compatibility (PDF)
                </a>
              )}

              {tabContents[activeTab].linkText && (
                <a href="#" className="text-link">
                  {tabContents[activeTab].linkText}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Connected Care Grid Banner Section */}
      {/* Full-bleed Connected Care Section */}
<section className="connected-care-section">
  <div className="connected-care-inner">
    <h2 className="section-title">
      Libre 2 Plus Apps and Connected Care
    </h2>
    <div className="yellow-divider"></div>

    <div className="care-grid">
      {/* Card 1 */}
      <div className="care-card">
        <h3>Libre app</h3>
        <div className="care-icon-box">
          <Image
            src="/Libre_App_Logo_-_website_logo_usage.webp"
            alt="Libre App Logo"
            width={70}
            height={70}
            className="care-icon"
          />
        </div>
        <h4>Get the full picture</h4>
        <p>
          Get real-time glucose readings sent directly to your smartphone, and
          discover deep insights into your glucose data.
        </p>
        <button className="btn-dark">Learn More</button>
      </div>

      {/* Card 2 */}
      <div className="care-card">
        <h3>LibreLinkUp</h3>
        <div className="care-icon-box">
          <Image
            src="/LLU_4_Icon.webp"
            alt="LibreLinkUp Icon"
            width={70}
            height={70}
            className="care-icon"
          />
        </div>
        <h4>Share with loved ones</h4>
        <p>
          Allow up to 20 family and friends to get your glucose readings in real
          time. Perfect for parents and caregivers.
        </p>
        <button className="btn-dark">Learn More</button>
      </div>

      {/* Card 3 */}
      <div className="care-card">
        <h3>LibreView</h3>
        <div className="care-icon-box">
          <Image
            src="/connected.webp"
            alt="LibreView Display"
            width={100}
            height={70}
            className="care-icon"
          />
        </div>
        <h4>Share with your healthcare team</h4>
        <p>
          Securely connect with your healthcare team so they can view your
          glucose data and tailor your treatment plan.
        </p>
        <button className="btn-dark">Learn More</button>
      </div>
    </div>
  </div>
</section>
        {/* Support Information Section */}
        <section className="support-section">
          <h2 className="section-title">Support information</h2>
          <div className="yellow-divider"></div>

          <div className="support-grid">
            <div className="support-card">
              <Image
                src="/Support_Icon_64x64_1.webp"
                alt="Mobile Compatibility Guide Icon"
                width={44}
                height={44}
                className="support-card-icon"
              />
              <h4>Mobile compatibility guide</h4>
              <p>
                Check your smartphone's compatibility with FreeStyle Libre 2
                Plus apps.
              </p>
              <button className="btn-dark">Compatibility Guide</button>
            </div>

            <div className="support-card">
              <Image
                src="/Support_Icon_64x64_1.webp"
                alt="Instruction Manuals Icon"
                width={44}
                height={44}
                className="support-card-icon"
              />
              <h4>FreeStyle LibreLink instruction manuals</h4>
              <p>Digital versions of the FreeStyle LibreLink manual.</p>
              <div className="pdf-links">
                <a href="#" className="text-link">
                  iOS (PDF)
                </a>
                <a href="#" className="text-link">
                  Android (PDF)
                </a>
              </div>
            </div>

            <div className="support-card">
              <Image
                src="/Support_Icon_64x64_1.webp"
                alt="Customer Care Icon"
                width={44}
                height={44}
                className="support-card-icon"
              />
              <h4>FreeStyle Customer Care</h4>
              <p>
                Available Monday to Friday between 8am and 7pm AEST (excluding
                Public Holidays).
              </p>
              <button className="btn-dark">Call 1800 801 478</button>
            </div>
          </div>

          <div className="disclaimer-text">
            <p>
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc., registered in the U.S. and other countries.
            </p>
            <p>
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
            <div className="doc-code">ADC-110857 V3.0</div>
          </div>
        </section>
      </div>
      <SubscribeForm />
    </div>
  );
}