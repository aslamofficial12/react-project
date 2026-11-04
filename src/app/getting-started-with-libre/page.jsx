"use client";

import React, { useState } from "react";
import "./style.css";

export default function LibrePage() {
  const [selectedSensor, setSelectedSensor] = useState("l3p");
  const [activeStepTab, setActiveStepTab] = useState(0);

  return (
    <div className="libre-page">
      {/* ----------------------------------------------------
          1. BREADCRUMB & HERO HEADER BANNER
      ---------------------------------------------------- */}
      <nav className="breadcrumb-container" aria-label="Breadcrumb">
        <div className="container">
          <ul className="breadcrumb-list">
            <li>
              <a href="#home" className="home-link" aria-label="Home">
                <svg className="home-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </a>
            </li>
            <li className="separator">&gt;</li>
            <li className="current">Getting Started With Libre Sensors</li>
          </ul>
        </div>
      </nav>

      <section className="hero-banner">
        <div className="hero-bg-wrapper">
          <div className="hero-content container">
            <div className="hero-text-col">
              <h1 className="hero-title">Getting Started with Libre</h1>
              <p className="hero-subtitle">
                Managing your glucose on your own terms is about to begin. Here, you'll discover how easy the Libre sensors are to apply, activate, and use.<sup>4,20</sup>
              </p>
            </div>
            <div className="hero-image-col">
              <div className="hero-circle-bg">
                <img
                  src="FSL2_FSL3_sensor_phone.webp"
                  alt="FreeStyle Libre 2 and 3 Sensors with Smartphone Glucose App"
                  className="hero-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }
                  }}
                />
                <div className="asset-fallback-hero" style={{ display: "none" }}>
                  <div className="mock-phone">
                    <div className="mock-app-screen">
                      <span className="app-val">
                        6.2<sup>↗</sup>
                      </span>
                      <span className="app-unit">mmol/L</span>
                      <div className="mock-graph"></div>
                    </div>
                  </div>
                  <div className="mock-sensors">
                    <div className="mock-sensor small"></div>
                    <div className="mock-sensor large"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. 'WHICH LIBRE SENSOR IS RIGHT FOR ME?' TABS
      ---------------------------------------------------- */}
      <section className="which-sensor-section container">
        <div className="section-header center">
          <h2>Which Libre sensor is right for me?</h2>
          <p className="section-desc">
            The Libre 2 Plus sensor and Libre 3 Plus sensor are both available in Australia. Use this easy guide to understand which sensor is right for you.
          </p>
        </div>

        <div className="tab-nav-wrapper">
          <button
            className={`tab-btn ${selectedSensor === "l3p" ? "active" : ""}`}
            onClick={() => setSelectedSensor("l3p")}
          >
            FreeStyle Libre 3 Plus
            <span className="tab-sub">sensor</span>
          </button>
          <button
            className={`tab-btn ${selectedSensor === "l2p" ? "active" : ""}`}
            onClick={() => setSelectedSensor("l2p")}
          >
            FreeStyle Libre 2 Plus
            <span className="tab-sub">sensor</span>
          </button>
        </div>

        <div className="tab-content-card">
          {selectedSensor === "l3p" ? (
            <div className="sensor-panel l3p-panel">
              <div className="panel-text">
                <h3>Available via NDSS subsidy for people living with type 1 diabetes</h3>
                <div className="yellow-underline"></div>
                <ul className="bullet-list">
                  <li>
                    Available as a standalone sensor (no AID required) with the all-new Libre app<sup>12</sup>...
                  </li>
                  <li>
                    ... or pair with your chosen automated insulin delivery (AID) system: myLoop System or Omnipod 5 System.
                  </li>
                  <li>
                    Not compatible with FreeStyle LibreLink<sup>12</sup>.
                  </li>
                  <li>Not available for purchase via FreeStyleLibre.com.au</li>
                </ul>
              </div>
              <div className="panel-image">
                <div className="circle-crop">
                  <img src="Which_Sensor_L3P_540x540.webp" alt="FreeStyle Libre 3 Plus Sensor and Box" />
                </div>
              </div>
            </div>
          ) : (
            <div className="sensor-panel l2p-panel">
              <div className="panel-image">
                <div className="circle-crop">
                  <img src="Which_Sensor_L2P_540x540.webp" alt="FreeStyle Libre 2 Plus Sensor User" />
                </div>
              </div>
              <div className="panel-text">
                <h3>
                  Available for people living with type 2 diabetes, or for people living with type 1 diabetes who are unable to use Libre 3 Plus sensors
                </h3>
                <div className="yellow-underline"></div>
                <ul className="bullet-list">
                  <li>
                    Available for purchase <a href="#here">here</a> for people living with type 2 diabetes.
                  </li>
                  <li>
                    Works with the all-new Libre app<sup>12</sup>, or FreeStyle LibreLink<sup>12</sup> if your phone is not yet compatible with Libre app.
                  </li>
                  <li>
                    Available via NDSS type 1 CGM subsidy for people who prefer to use a reader, do not have a smartphone compatible with the new Libre app, or are scanning the NovoPen® 6.
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="panel-footer-note">
            <p>
              For people who prefer to use a reader, do not have a smartphone compatible with new Libre app, or are scanning the NovoPen® 6, the Libre 2 Plus sensor will remain available. (
              <a href="#compatibility">check your compatibility</a>).
            </p>
            <div className="action-btn-row">
              <button className="primary-pill-btn">
                {selectedSensor === "l3p" ? "Learn more about Libre 3 Plus" : "Learn more about the Libre 2 Plus sensor"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. 'APPLYING AND ACTIVATING YOUR SENSOR' MULTI-TAB
      ---------------------------------------------------- */}
      <section className="steps-section container">
        <div className="section-header center">
          <h2>Applying and activating your sensor</h2>
          <div className="yellow-underline center-line"></div>
          <p className="section-desc">
            Applying and starting your new sensor is simple and fuss-free. So, why wait another moment? Let's get started.
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="steps-tab-nav">
          <button className={`step-tab ${activeStepTab === 0 ? "active" : ""}`} onClick={() => setActiveStepTab(0)}>
            Preparing your skin
          </button>
          <button className={`step-tab ${activeStepTab === 1 ? "active" : ""}`} onClick={() => setActiveStepTab(1)}>
            Applying the sensor
          </button>
          <button className={`step-tab ${activeStepTab === 2 ? "active" : ""}`} onClick={() => setActiveStepTab(2)}>
            Activating the sensor with your device
          </button>
          <button className={`step-tab ${activeStepTab === 3 ? "active" : ""}`} onClick={() => setActiveStepTab(3)}>
            Removing and replacing the sensor
          </button>
        </div>

        {/* Dynamic Step Content */}
        <div className="steps-tab-content">
          {/* TAB 1: PREPARING YOUR SKIN */}
          {activeStepTab === 0 && (
            <div className="step-pane">
              <p className="pane-intro-text text-center font-bold">
                Please note: application methods are different for Libre 2 Plus and Libre 3 Plus sensors. Always check the instructions provided with your sensor.
              </p>

              <div className="steps-grid grid-3">
                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab1-Step1.webp" alt="Step 1 - Back of upper arm" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 1</h4>
                  <p>The back of the upper arm is the recommended and approved application site.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab1-Step2.webp" alt="Step 2 - Wash area" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 2</h4>
                  <p>Use non-moisturising, fragrance-free soap to wash the area where you will apply your sensor.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab1-Step3.webp" alt="Step 3 - Alcohol wipe" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 3</h4>
                  <p>
                    Use an alcohol wipe to clean the site and then allow skin to fully air dry (do not blow on it). Note: Libre 2 and 2 Plus sensor boxes do not include alcohol wipes.
                  </p>
                </div>
              </div>

              <div className="pro-tips-block">
                <h5>Pro Tips:</h5>
                <ul>
                  <li>Do not use body lotion or cream where you'll apply the sensor, as they may leave an oily residue on your skin.</li>
                  <li>Body hair can interfere with sensor adhesion. Shave the application area if necessary.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: APPLYING THE SENSOR */}
          {activeStepTab === 1 && (
            <div className="step-pane">
              <p className="pane-intro-text text-center font-bold">
                Once you've prepared the back of your upper arm, check and follow the sensor applicator instructions included with your sensor. Libre 2 Plus and Libre 3 Plus sensor applicators work differently from each other.
              </p>

              <div className="steps-grid grid-3">
                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab2-Step1.webp" alt="Applying Step 1" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 1</h4>
                  <p>Place the sensor applicator over the prepared site and push down firmly.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab2-Step2.webp" alt="Applying Step 2" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 2</h4>
                  <p>Gently pull the sensor applicator away from your body. The sensor should now be attached to your skin.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab2-Step3.webp" alt="Applying Step 3" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 3</h4>
                  <p>Secure by pressing down gently with your finger around the edge.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ACTIVATING THE SENSOR WITH YOUR DEVICE */}
          {activeStepTab === 2 && (
            <div className="step-pane">
              <p className="pane-intro-text text-center">
                Once your sensor is applied, you need to pair it with your Libre app<sup>12</sup>, FreeStyle LibreLink app<sup>12</sup>, or FreeStyle Libre 2 reader (Libre 2 Plus sensors only).
              </p>

              <div className="steps-grid grid-4">
                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="Activating_new_sensor_step_1.webp" alt="Activating Step 1" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 1</h4>
                  <p>
                    Press “Scan New Sensor” on the Libre app,<sup>12</sup> FreeStyle LibreLink app<sup>12</sup> or FreeStyle Libre 2 reader.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab3-Step2.webp" alt="Activating Step 2" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 2</h4>
                  <p>Hold your device near the sensor and slowly scan it.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab3-Step3.webp" alt="Activating Step 3" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 3</h4>
                  <p>You will hear a beep or feel a vibration upon activation.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab3-Step4.webp" alt="Activating Step 4" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 4</h4>
                  <p>The sensor can be used to check your glucose after 60 minutes.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REMOVING AND REPLACING THE SENSOR */}
          {activeStepTab === 3 && (
            <div className="step-pane">
              <p className="pane-intro-text text-center font-bold">
                Your device will alert you when it's time to replace your sensor. To remove it:
              </p>

              <div className="steps-grid grid-3">
                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab4-Step1.webp" alt="Removing Step 1" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 1</h4>
                  <p>Rub an adhesive remover or cotton ball soaked in baby oil around the outside of the sensor.</p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab4-Step2.webp" alt="Removing Step 2" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 2</h4>
                  <p>Pull the adhesive edge that fixes the sensor to your skin. Slowly remove in a single movement.</p>
                  <p className="disposal-subtext">
                    All system components used, including the sensor, can be disposed of in accordance with the current local waste treatment practices.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-img-circle">
                    <img src="block2-tab4-Step3.webp" alt="Removing Step 3" />
                  </div>
                  <div className="step-card-divider"></div>
                  <h4>Step 3</h4>
                  <p>When applying a new sensor, select a different site.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ----------------------------------------------------
          4. VIDEO & RESOURCE GUIDE BLOCK
      ---------------------------------------------------- */}
      <section className="resources-section container">
        <div className="resource-row">
          <div className="resource-col text-col">
            <h4>For Libre 2 Plus users</h4>
            <ul className="guide-links">
              <li>
                <span className="badge-letter">A</span>
                <a href="#l2p-guide">Complete Guide to Libre 2 Plus</a>
              </li>
              <li>
                <span className="badge-letter">B</span>
                <a href="#l2p-adhesion">Sensor Adhesion Guide</a>
              </li>
            </ul>
          </div>
          <div className="resource-col video-col">
            <div className="video-thumb-card">
              <img src="Video_Thumb_-_Applying_FSL2_Sensor.webp" alt="Applying the FreeStyle Libre 2 sensor thumbnail" />
              <div className="play-overlay">
                <div className="play-button-icon">▶</div>
              </div>
            </div>
          </div>
        </div>

        <div className="resource-row margin-top">
          <div className="resource-col text-col">
            <h4>For Libre 3 Plus users</h4>
            <ul className="guide-links">
              <li>
                <span className="badge-letter">A</span>
                <a href="#l3p-guide">Complete Guide to Libre 3 Plus</a>
              </li>
              <li>
                <span className="badge-letter">B</span>
                <a href="#l3p-adhesion">Sensor Adhesion Guide</a>
              </li>
            </ul>
          </div>
          <div className="resource-col video-col">
            <div className="video-thumb-card">
              <img src="SensorApp_Video_Thumb.webp" alt="Applying Libre 3 Plus sensor thumbnail" />
              <div className="play-overlay">
                <div className="play-button-icon">▶</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. 'WE'RE HERE TO SUPPORT YOU' HERO CALLOUT BLOCK
      ---------------------------------------------------- */}
      <section className="support-hero-block">
        <div className="support-bg-container" style={{ backgroundImage: `url('block4-bg.webp')` }}>
          <div className="support-overlay-content container">
            <div className="support-card">
              <h2>We're here to support you.</h2>
              <div className="yellow-underline"></div>
              <p>
                The FreeStyle Customer Care team is available to provide you with personal assistance. Call us Monday to Friday between 8am and 7pm AEDT (excluding Public Holidays).
              </p>
              <a href="tel:1800801478" className="phone-pill-button">
                1800 801 478
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          6. 'YOU MIGHT ALSO LIKE:' 3-COLUMN CARD FOOTER SECTION
      ---------------------------------------------------- */}
      <section className="you-might-like-section container">
        <div className="section-header center">
          <h2>You might also like:</h2>
          <div className="yellow-underline center-line"></div>
        </div>

        <div className="cards-grid-3">
          <div className="recommend-card">
            <div className="card-image-box">
              <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" alt="Subscribe and Save" />
            </div>
            <div className="card-body">
              <h3>Subscribe and Save</h3>
              <p>
                With Subscribe and Save, get free shipping on all orders and every 6th order is completely free, saving you 20% off your sensor purchases!<sup>51</sup>
              </p>
              <a href="#subscribe" className="card-link">Subscribe and Save</a>
            </div>
          </div>

          <div className="recommend-card">
            <div className="card-image-box">
              <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" alt="Product support" />
            </div>
            <div className="card-body">
              <h3>Product support</h3>
              <p>
                Visit our product support pages for all the information you need to have the best experience with Libre, including videos, FAQs and more.
              </p>
              <a href="#support" className="card-link">Product Support</a>
            </div>
          </div>

          <div className="recommend-card">
            <div className="card-image-box">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" alt="Access Options" />
            </div>
            <div className="card-body">
              <h3>Access Options</h3>
              <p>
                There are many pathways to access Libre, depending on your circumstances, needs or diabetes type. Learn more about all the options here.
              </p>
              <a href="#access" className="card-link">Access Options</a>
            </div>
          </div>
        </div>

        <div className="legal-reference">
          <span>ADC-2654880 V3.0</span>
        </div>
      </section>
    </div>
  );
}