'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function Libre3PlusPage() {
  const [activeGettingStartedTab, setActiveGettingStartedTab] = useState(0);
  const [activeSensorTab, setActiveSensorTab] = useState(0);

  // Data for "Getting started with Libre 3 Plus" tabs
  const gettingStartedTabs = [
    {
      title: 'Preparing your skin',
      intro: 'To begin, select an area on the back of your upper arm and follow these steps:',
      steps: [
        {
          img: '/block2-tab1-Step1.webp',
          title: 'Step 1',
          desc: 'The back of the upper arm is the recommended and approved application site.',
        },
        {
          img: '/block2-tab1-Step2.webp',
          title: 'Step 2',
          desc: 'Use non-moisturising, fragrance-free soap to wash the area where you will apply your sensor.',
        },
        {
          img: '/block2-tab1-Step3.webp',
          title: 'Step 3',
          desc: 'Use an alcohol wipe to clean the site and then allow skin to fully air dry (do not blow on it).',
        },
      ],
    },
    {
      title: 'Applying the sensor',
      intro: 'Once you\'ve prepared the back of your upper arm, check and follow the sensor applicator instructions included with your sensor to prepare your sensor for application.',
      steps: [
        {
          img: '/block2-tab2-Step1.webp',
          title: 'Step 1',
          desc: 'Use an alcohol wipe to clean the site and then allow skin to fully air dry (do not blow on it).',
        },
        {
          img: '/block2-tab2-Step2.webp',
          title: 'Step 2',
          desc: 'Gently pull the sensor applicator away from your body. The sensor should now be attached to your skin.',
        },
        {
          img: '/block2-tab2-Step3.webp',
          title: 'Step 3',
          desc: 'Secure by pressing down gently with your finger around the edge. Secure by pressing down gently with your finger around the edge.',
        },
      ],
    },
    {
      title: 'Activating the sensor with your device',
      intro: 'Once your sensor is applied, it\'s time to pair it with the Libre app.¹²',
      subnote: 'Note: These instructions are for standalone sensor use. If you are using Libre 3 Plus sensors as part of an automated insulin delivery system (AID) please refer to the manufacturer\'s instructions on how to connect your sensor to the insulin delivery device.',
      steps: [
        {
          img: '/block2-tab3-Step1.webp',
          title: 'Step 1',
          desc: 'Press "Scan New Sensor" on the Libre app,¹² FreeStyle LibreLink app¹² or FreeStyle Libre 2 reader.',
        },
        {
          img: '/block2-tab3-Step2.webp',
          title: 'Step 2',
          desc: 'Hold your device near the sensor and slowly scan it.',
        },
        {
          img: '/block2-tab3-Step3.webp',
          title: 'Step 3',
          desc: 'You will hear a beep or feel a vibration upon activation.',
        },
        {
          img: '/block2-tab3-Step4.webp',
          title: 'Step 4',
          desc: 'The sensor can be used to check your glucose after 60 minutes.',
        },
      ],
    },
    {
      title: 'Removing and replacing the sensor',
      intro: 'Your device will alert you when it\'s time to replace your sensor. To remove it:',
      steps: [
        {
          img: '/block2-tab4-Step1.webp',
          title: 'Step 1',
          desc: 'Rub an adhesive remover or cotton ball soaked in baby oil around the outside of the sensor.',
        },
        {
          img: '/block2-tab4-Step2.webp',
          title: 'Step 2',
          desc: 'Pull the adhesive edge that fixes the sensor to your skin. Slowly remove in a single movement. All system components used, including the sensor, can be disposed of in accordance with the current local waste treatment practices.',
        },
        {
          img: '/block2-tab4-Step3.webp',
          title: 'Step 3',
          desc: 'When applying a new sensor, select a different site.',
        },
      ],
    },
  ];

  return (


    <>
    <div className="headernav">
            <nav className="breadcrumb">
                <span>🏠</span> &gt; <span>Libre App</span>
            </nav>
            </div>
    <main className="libre3plus-page">
      {/* 1. Hero Banner */}
      <section className="l3p-hero-banner">
        <div className="l3p-hero-bg">
          <Image
            src="/Hero-image.webp"
            alt="FreeStyle Libre 3 Plus"
            fill
            priority
            className="l3p-hero-img"
          />
        </div>
        <div className="l3p-hero-circle">
          <div className="l3p-hero-content">
            <h1>FreeStyle Libre 3 Plus.</h1>
            <p className="hero-subtext">
              The world's smallest sensor.<sup>85</sup> For Australians living with type 1 diabetes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Yellow Subsidy Banner */}
      <section className="l3p-yellow-subsidy-banner">
        <div className="l3p-container text-center">
          <h2>
            FreeStyle Libre 3 Plus is now available via type 1 NDSS subsidy as a standalone sensor (no AID required)!
          </h2>
          <div className="white-divider-center"></div>
          <p className="subsidy-desc">
            Users wishing to upgrade from another subsidised CGM (including the Libre 2 Plus) can now make an appointment with their authorised healthcare professional.
          </p>
          <button className="btn-dark pill-btn margin-bottom-md">
            Subsidy access and upgrade information
          </button>
          <p className="small-disclaimer-text">
            The Libre 3 Plus sensor will be powered by the new Libre app.¹² It will not be compatible with the currently available FreeStyle LibreLink App.¹² For people who prefer to use a reader, do not have a smartphone compatible with new Libre app, or are scanning the NovoPen® 6, the Libre 2 Plus sensor will remain available. (<a href="#compatibility">check your compatibility</a>).
          </p>
        </div>
      </section>

      {/* 3. Meet Libre 3 Plus Feature Card */}
      <section className="l3p-container l3p-meet-section">
        <h2 className="section-title text-center">Meet Libre 3 Plus</h2>
        <div className="meet-card-wrapper">
          <div className="meet-circle-img">
            <Image
              src="/ADC_Photo_FSL3_Sensor_Hand.webp"
              alt="Sensor on Finger"
              width={260}
              height={260}
              className="circle-sensor-img"
            />
          </div>
          <div className="meet-yellow-box">
            <p>
              The world's smallest CGM sensor<sup>85</sup> tracks your glucose levels in real-time, with zero finger pricks.<sup>10</sup>
            </p>
          </div>
        </div>

        {/* 4 Feature Icons Grid */}
        <div className="icon-features-grid">
          <div className="icon-feature-card">
            <Image src="/icon-coin.webp" alt="Coin Size" width={48} height={48} />
            <p>Ultra-compact and discreet: the same size as a $2 coin<sup>93</sup></p>
          </div>
          <div className="icon-feature-card">
            <Image src="/icon-bluetooth.webp" alt="Bluetooth" width={48} height={48} />
            <p>Improved Bluetooth connectivity<sup>96</sup></p>
          </div>
          <div className="icon-feature-card">
            <Image src="/icon-15days.webp" alt="15 Days" width={48} height={48} />
            <p>Extended 15-day wear time</p>
          </div>
          <div className="icon-feature-card">
            <Image src="/icon-applocator.webp" alt="Applicator" width={48} height={48} />
            <p>Easy, all-in-one applicator</p>
          </div>
        </div>
      </section>

      {/* 4. Why You'll Love Section */}
      <section className="l3p-container l3p-love-section">
        <h2 className="section-title text-center">Why you'll love the Libre 3 Plus sensor</h2>
        <div className="yellow-line"></div>

        <div className="love-grid">
          <div className="love-image">
            <Image
              src="/ADC_Pack_Sensor-FSL3P_Right_C.webp"
              alt="Libre 3 Plus Box"
              width={340}
              height={340}
            />
          </div>
          <div className="love-content">
            <ul className="bullet-list-styled">
              <li>The only CGM brand that takes a glucose reading every single minute<sup>85</sup></li>
              <li>No calibration required: accurate<sup>76</sup> and ready to use, right out of the box</li>
              <li>Free from IBOA and MBPA (common skin allergens)<sup>93</sup></li>
              <li>Automatic data backfill whenever the sensor reconnects with Libre app<sup>97</sup></li>
              <li>Outstanding accuracy.<sup>76</sup> Meets iCGM standards<sup>94</sup>, the highest industry standards for quality, accuracy and performance.<sup>94</sup></li>
            </ul>
            <button className="btn-dark pill-btn margin-top-sm">Available via NDSS Subsidy</button>
            <p className="small-link-text margin-top-xs">
              Living with type 2 or other diabetes? <a href="#purchase">Purchase the Libre 2 Plus here</a>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Powered by NEW Libre App */}
      <section className="l3p-container l3p-app-power-section">
        <h2 className="section-title text-center">
          Powered by the NEW Libre app<sup>12</sup>. Accurate,<sup>76</sup> reliable glucose readings, automatically updated every single minute.<sup>55</sup>
        </h2>

        <div className="app-power-grid">
          <div className="app-power-phone">
            <Image
              src="/Home_Screen_6.2MMOL_Detail_312x600.webp"
              alt="Libre App Screen"
              width={280}
              height={520}
            />
          </div>
          <div className="app-power-details">
            <h3>Libre app<sup>12</sup></h3>
            <ul className="bullet-list-styled">
              <li>A refreshed, intuitive design, making it easier to access the information you need.</li>
              <li>Expanded optional alarm features,<sup>86</sup> including predictive low glucose alarm, escalating alarms, and silent mode.<sup>87</sup></li>
              <li>Glucose readings right on your wrist with Apple Watch.<sup>88</sup></li>
              <li>Personalised insights and reports to track and celebrate your progress.</li>
            </ul>
            <div className="store-badges-flex">
              <img src="/app-store-badge.svg" alt="App Store" className="store-badge-img" />
              <img src="/app-store-png-logo-33123_copy_2x" alt="Google Play" className="store-badge-img" />
            </div>
            <div className="qr-box">
              <Image
                src="/Libre_app_AU_deeplink_QR_1.webp"
                alt="Scan QR"
                width={120}
                height={120}
              />
            </div>
            <a href="#compatibility" className="link-text">Check device compatibility</a>
            <br />
            <button className="btn-dark pill-btn margin-top-sm">Learn more about the Libre app</button>
          </div>
        </div>
      </section>

      {/* 6. Automated Insulin Delivery (AID) Options */}
      <section className="l3p-container l3p-aid-section">
        <h2 className="section-title text-center">Automated Insulin Delivery (AID) Options</h2>
        <div className="yellow-line"></div>
        <p className="section-desc text-center">
          The Libre 3 Plus sensor can be paired with these systems for Automated Insulin Delivery
        </p>

        {/* Omnipod 5 */}
        <div className="aid-card-grid">
          <div className="aid-card-text">
            <h3>Omnipod 5<sup>®</sup> System</h3>
            <div className="yellow-line-short"></div>
            <p>
              The Omnipod® 5 System and Libre 3 Plus sensor bring together the world's smallest sensor for both adult and paediatric patients<sup>85</sup>, and enhanced Bluetooth connectivity for a seamless Automated Insulin Delivery experience.
            </p>
            <button className="btn-dark pill-btn">Learn More</button>
            <p className="aid-fine-print margin-top-xs">
              Image for illustrative purposes only. Not real patient data. Pod shown without necessary adhesive. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod® 5 Controller is not waterproof.
            </p>
          </div>
          <div className="aid-card-image">
            <Image
              src="/OP5_POD_FSL3_Arrows_RGB-MMOL.webp"
              alt="Omnipod 5 System"
              width={320}
              height={260}
            />
          </div>
        </div>

        {/* myLoop System */}
        <div className="aid-card-grid margin-top-lg">
          <div className="aid-card-image">
            <Image
              src="/myLoop_integration_568x568.webp"
              alt="myLoop System Integration"
              width={340}
              height={300}
            />
          </div>
          <div className="aid-card-text">
            <h3>myLoop System</h3>
            <div className="yellow-line-short"></div>
            <p>
              Pair the accurate,<sup>76</sup> minute-by-minute glucose readings from your Libre 3 Plus sensor with the mylife CamAPS FX app, which adjusts insulin delivery on the mylife YpsoPump to help prevent low and high glucose levels.
            </p>
            <button className="btn-dark pill-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* 7. Which Libre Sensor is Right for Me? (Tabbed Comparison) */}
   {/* Which Libre Sensor is Right for Me? (Tabbed Comparison) */}
      <section className="l3p-container l3p-which-sensor-section">
        <h2 className="section-title text-center">Which Libre sensor is right for me?</h2>
        <p className="section-desc text-center">
          The Libre 2 Plus sensor and Libre 3 Plus sensor are both available in Australia. Use this easy guide to understand which sensor is right for you.
        </p>

        {/* Tab Selection Bar */}
        <div className="sensor-tabs-bar">
          <button
            className={`sensor-tab-btn ${activeSensorTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveSensorTab(0)}
          >
            FreeStyle Libre 3 Plus sensor
          </button>
          <button
            className={`sensor-tab-btn ${activeSensorTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveSensorTab(1)}
          >
            FreeStyle Libre 2 Plus sensor
          </button>
        </div>

        {/* Tab 0: FreeStyle Libre 3 Plus Sensor */}
        {activeSensorTab === 0 && (
          <div className="sensor-tab-content">
            <div className="sensor-content-grid">
              <div className="sensor-details">
                <h3>Available via NDSS subsidy for people living with type 1 diabetes</h3>
                <div className="yellow-line-short"></div>
                <ul className="bullet-list-styled">
                  <li>
                    Available as a standalone sensor (no AID required) with the all-new Libre app<sup>12</sup>...
                  </li>
                  <li>
                    ... or pair with your chosen automated insulin delivery (AID) system: myLoop System or Omnipod 5 System.
                  </li>
                  <li>
                    Not compatible with FreeStyle LibreLink<sup>12</sup>.
                  </li>
                  <li>
                    Not available for purchase via FreeStyleLibre.com.au
                  </li>
                </ul>
              </div>
              <div className="sensor-image">
                <Image
                  src="/Which_Sensor_L3P_540x540.webp"
                  alt="FreeStyle Libre 3 Plus Sensor User"
                  width={380}
                  height={380}
                  className="rounded-circle-img"
                />
              </div>
            </div>
            <p className="sensor-footer-text text-center">
              For people who prefer to use a reader, do not have a smartphone compatible with new Libre app, or are scanning the NovoPen® 6, the Libre 2 Plus sensor will remain available. (<a href="#compatibility" className="yellow-link">check your compatibility</a>).
            </p>
          </div>
        )}

        {/* Tab 1: FreeStyle Libre 2 Plus Sensor */}
        {activeSensorTab === 1 && (
          <div className="sensor-tab-content">
            <div className="sensor-content-grid reverse-layout">
              <div className="sensor-image">
                <Image
                  src="/Which_Sensor_L3P_540x540.webp" /* Or use Libre 2 Plus image if available */
                  alt="FreeStyle Libre 2 Plus Sensor User"
                  width={380}
                  height={380}
                  className="rounded-circle-img"
                />
              </div>
              <div className="sensor-details">
                <h3>
                  Available for people living with type 2 diabetes, or for people living with type 1 diabetes who are unable to use Libre 3 Plus sensors
                </h3>
                <div className="yellow-line-short"></div>
                <ul className="bullet-list-styled">
                  <li>
                    Available for purchase <a href="#purchase" className="yellow-link">here</a> for people living with type 2 diabetes.
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
          </div>
        )}
      </section>

      {/* 8. Getting Started with Libre 3 Plus (Interactive Tabbed Steps) */}
      <section className="l3p-container l3p-getting-started-section">
        <h2 className="section-title text-center">Getting started with Libre 3 Plus</h2>
        <div className="yellow-line"></div>
        <p className="section-desc text-center">
          Applying and starting your new sensor is simple and fuss-free. So, why wait another moment? Let's get started.
        </p>

        {/* Tab Buttons */}
        <div className="getting-started-tabs">
          {gettingStartedTabs.map((tab, idx) => (
            <button
              key={idx}
              className={`gs-tab-btn ${activeGettingStartedTab === idx ? 'active' : ''}`}
              onClick={() => setActiveGettingStartedTab(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Step Display */}
        <div className="gs-tab-display">
          <p className="gs-intro-text text-center font-weight-bold">
            {gettingStartedTabs[activeGettingStartedTab].intro}
          </p>
          {gettingStartedTabs[activeGettingStartedTab].subnote && (
            <p className="gs-subnote-text text-center">
              {gettingStartedTabs[activeGettingStartedTab].subnote}
            </p>
          )}

          <div className="gs-steps-grid">
            {gettingStartedTabs[activeGettingStartedTab].steps.map((step, idx) => (
              <div key={idx} className="gs-step-card">
                <div className="gs-step-img-wrapper">
                  <Image src={step.img} alt={step.title} width={150} height={150} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Guide Banner Block */}
         

<div className="gs-guides-footer-block">
  <div className="gs-guides-links">
    <p className="guides-heading">
      These guides and links will help you have the best experience with the Libre 3 Plus sensor
    </p>
    <ul className="guide-links-list">
      <li>
        <span className="circle-letter">A</span>
        <a href="#guide">The Complete Guide to Libre 3 Plus</a>
      </li>
      <li>
        <span className="circle-letter">B</span>
        <a href="#adhesion">Sensor Adhesion Guide</a>
      </li>
      <li>
        <span className="circle-letter">C</span>
        <a href="#support">Libre Product Support</a>
      </li>
    </ul>
  </div>

  {/* Large Yellow Video Banner Box */}
  <div className="gs-guides-yellow-video-card">
    <div className="yellow-card-circle-sensor">
      <Image
        src="/ADC_Photo_FSL3_Sensor_Hand.webp" /* Or /SensorApp_Video_Thumb_1.webp */
        alt="Sensor Video Thumbnail"
        width={100}
        height={100}
        className="sensor-thumb-img"
      />
      <span className="play-icon-overlay">▶</span>
    </div>
    <p className="yellow-card-text">
      How do I apply and remove my FreeStyle Libre 3 Plus sensor?
    </p>
  </div>
</div>




         
        </div>
      </section>

      {/* 9. Yellow Ecosystem Section (3 Cards) */}
      <section className="yellow-ecosystem-section">
        <div className="ecosystem-container">
          <div className="ecosystem-grid">
            {/* Card 1: Libre app */}
            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <Image
                  src="/Libre_App_Logo_-_website_logo_usage_1.webp"
                  alt="Libre app Icon"
                  width={100}
                  height={100}
                  className="ecosystem-icon"
                />
              </div>
              <h3>
                Libre app<sup className="sup-num">12</sup>
              </h3>
              <h4>Get the full picture</h4>
              <p>
                Get real-time glucose readings sent directly to your smartphone, and discover deep insights into your glucose data.
              </p>
              <button className="btn-dark pill-btn">Learn More</button>
            </div>

            {/* Card 2: LibreLinkUp */}
            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <Image
                  src="/LLU_4_Icon.webp"
                  alt="LibreLinkUp Icon"
                  width={100}
                  height={100}
                  className="ecosystem-icon"
                />
              </div>
              <h3>
                LibreLinkUp<sup className="sup-num">21</sup>
              </h3>
              <h4>Share with loved ones</h4>
              <p>
                Allow up to 20 family and friends to get your glucose readings in real time. Perfect for parents and caregivers.
              </p>
              <button className="btn-dark pill-btn">Learn More</button>
            </div>

            {/* Card 3: LibreView */}
            <div className="ecosystem-card">
              <div className="ecosystem-icon-wrapper">
                <Image
                  src="/connected.webp"
                  alt="LibreView Laptop Preview"
                  width={130}
                  height={90}
                  className="ecosystem-laptop-img"
                />
              </div>
              <h3>
                LibreView<sup className="sup-num">24</sup>
              </h3>
              <h4>Share with your healthcare team</h4>
              <p>
                Securely connect with your healthcare team so they can view your glucose data and tailor your treatment plan.
              </p>
              <button className="btn-dark pill-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Comprehensive Legal Footer */}
      <footer className="footer-disclaimers">
        <div className="footer-disclaimer-container">
          <p>
            The Omnipod 5 Automated Insulin Delivery System is indicated for use by individuals with Type 1 diabetes mellitus in persons 2 years of age and older. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod® 5 Controller is not waterproof.
          </p>
          <p>
            The Omnipod 5 Automated Insulin Delivery System is a single hormone insulin delivery system intended to deliver U 100 insulin subcutaneously for the management of type 1 diabetes in persons aged 2 and older requiring insulin. Refer to the Omnipod® 5 Automated Insulin Delivery System User Guide and <a href="#safety">www.omnipod.com/en-au/important/safety/information</a> for complete safety information including indications, contraindications, warnings, cautions, and instructions.
          </p>
          <p>
            Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
          </p>
          <p>
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          <p>
            Omnipod is a registered trademark of Insulet Corporation and used with permission. Other trademarks are the property of their respective owners.
          </p>
          <p>
            The mylife CamAPS FX App is used to manage glucose levels in people with type 1 diabetes (including type 1 diabetes pregnancy), aged 1 year and older, using a hybrid closed loop approach. Approved for people with type 1 diabetes aged two years and over when used in combination with FreeStyle Libre 3 Plus.
          </p>
          <p>
            mylife and YpsoPump are registered trademarks of Ypsomed AG in several countries. CamAPS is a registered trademark of CamDiab Ltd.
          </p>
          <p>
            The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG, Inc., and any use of such marks by Ypsomed is under license.
          </p>
          <p className="footer-version-code">ADC-2694371 v5.0</p>
        </div>
      </footer>
      <>
      <SubscribeForm /></>
    </main>
    </>
  );
}