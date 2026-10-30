"use client"
import React, { useState } from 'react';
import './style.css';
import EffortlessManagement from '../../components/EffortlessManagement/EffortlessManagement';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';

export default function Page() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="landing-container">
      {/* Top Utility Bar */}
      {/* <div className="utility-bar">
        <div className="utility-links">
          <a href="#mobile">Mobile Compatibility</a>
          <a href="#moments">Libre Moments</a>
          <a href="#safety">Important Safety Information</a>
        </div>
        <div className="utility-brand">
          <span className="abbott-logo">Abbott</span>
        </div>
      </div> */}

      {/* Main Navigation Bar */}

      {/* Hero Section */}
   <section 
  className="hero-section" 
  style={{ backgroundImage: `url('hero_banner_3plus.webp')` }}
>
  <div className="hero-content">
    <span className="hero-tag">NOW AVAILABLE!</span>
    <div className="hero-brand-title">
      <span className="sub-butterfly"></span>
      <span className="brand-name-lg">
        FreeStyle <strong>Libre 3</strong> <span className="plus-badge">PLUS</span>
      </span>
    </div>
    <h1 className="hero-headline">
      The world’s smallest sensor<sup>85</sup><br />
      For ALL Australians with type 1 diabetes
    </h1>
    <div className="hero-cta-group">
      <a href="#subsidy" className="btn-yellow">Subsidy Information</a>
      <a href="#more" className="btn-white-outline">More about the Libre 3 Plus</a>
    </div>
  </div>
</section>

      {/* Brand #1 CGM Section with Overlapping Butterfly */}
      <section className="cgm-banner-section">
        <div className="cgm-banner-inner">
          <div className="butterfly-overlap-wrapper">
            <div className="butterfly-graphic">
              <img src="/Vector (1).webp" alt="Butterfly graphic" />
            </div>
          </div>
          <div className="cgm-banner-text">
            <h2>The #1 CGM system worldwide</h2>
            <div className="accent-line-left"></div>
            <p>
              Empower your health journey. Real-time glucose insights, anytime, anywhere, with FreeStyle Libre.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Tab Switcher Section (Features & Quality Matters) */}
     
      {/* CGM Explanation Section */}
      <section className="bg-yellow cgm-explanation-section">
        <h2 className="section-title">What is Continuous Glucose Monitoring (CGM)?</h2>
        <p className="section-subtitle">
          A continuous glucose monitor (CGM) is a small sensor applied painlessly to the back of the upper arm that measures the glucose levels in interstitial fluid, replacing the need for finger pricks. The Libre 2 Plus and Libre 3 Plus CGM can be worn for up to 15 days, taking glucose readings every minute and sending them directly to your smartphone, giving you instant feedback on how food, exercise and medicine impact your glucose levels.
        </p>
        <div className="cgm-visual-row">
          <div className="circle-image-frame sensor-arm">
            <img src="/handcrop copy.png" alt="Sensor applied on arm" />
          </div>
          <span className="arrow-connector">➔</span>
          <div className="circle-image-frame app-screen">
            <img src="/FSL3_Availability_options_v2-02 (1).webp" alt="Availability options" />
          </div>
        </div>
      </section>

      {/* Effortless Management Component Section */}
      <EffortlessManagement />



 <div className="sensor-section-container">
        <div className="tab-switcher">
          <button 
            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`tab-btn ${activeTab === 'quality' ? 'active' : ''}`}
            onClick={() => setActiveTab('quality')}
          >
            Quality Matters
          </button>
        </div>

        {activeTab === 'features' ? (
          <section className="bg-yellow feature-deck-section">
            <h2 className="section-title">The sensor that is designed for you</h2>
            <div className="accent-line"></div>

            <div className="feature-grid-4">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <img src="Component_36_88px.webp" alt="Easy to use and comfortable to wear" className="feature-icon" />
                </div>
                <h4>Easy to use and comfortable to wear</h4>
                <p>Every aspect of the Libre family of sensors is designed to be easy to use, so you can spend less time thinking about glucose management and more time for yourself.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <img src="Component_36_88px-1.webp" alt="IBOA & MBPA Free" className="feature-icon" />
                </div>
                <h4>IBOA & MBPA Free[cite: 4]</h4>
                <p>The adhesive used in the Libre family of sensors is free from IBOA and MBPA[cite: 4], common allergens.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <img src="Component_36_88px-2.webp" alt="Waterproof" className="feature-icon" />
                </div>
                <h4>Waterproof[cite: 4]</h4>
                <p>The Libre family of sensors can be used while bathing, swimming[cite: 4], and exercising, so you can have uninterrupted enjoyment of the activities you love.</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <img src="Vector_1.webp" alt="Small & discreet" className="feature-icon" />
                </div>
                <h4>Small & discreet[cite: 4]</h4>
                <p>Small and discreet, the Libre 2 plus and Libre 3 Plus sensor are the only sensors in Australia with up to 15 days wear time[cite: 4].</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-yellow feature-deck-section">
            <h2 className="section-title">You can count on the quality of the Libre system</h2>
            <div className="accent-line"></div>

            <div className="feature-grid-3">
              <div className="feature-item">
                <h4>Proven Performance</h4>
                <p>The Libre family of sensors undergo extensive testing, from clinical trials to real-world studies with people like you, showing Libre systems are accurate<sup>5, 76</sup> and reliable.<sup>5, 27, 69</sup></p>
              </div>
              
              <div className="feature-item">
                <h4>Smart Quality Checks</h4>
                <p>Libre CGM sensors meet the anzCGM standards,^<sup>, 97</sup> delivering accuracy you can rely on, data you can trust, and support when it matters most. With minute-by-minute glucose readings built on the quality that only Libre can deliver, you can manage your diabetes with confidence.</p>
              </div>
              
              <div className="feature-item">
                <h4>HITRUST® Certified, for trusted data security†</h4>
                <p>We’re committed to protecting your privacy and guarding the information you choose to share when using our products. Our digital tools and apps are HITRUST® certified,† meeting the highest global standards for data security and privacy.</p>
              </div>
            </div>
          </section>
        )}
      </div>













      <TestimonialSlider />

      {/* App Showcase Section */}
      <section className="app-showcase-section">
        <div className="container text-center">
          <h2 className="section-title">The all-new Libre app is now available!</h2>
          <div className="yellow-underline"></div>

          <div className="app-showcase-content">
            <div className="app-text-col">
              <p>
                Stay connected to your glucose information with the all-new Libre app, featuring a refreshed, intuitive design, expanded optional alarms<sup>86</sup>, Apple Watch integration<sup>88</sup>, and personalised insights designed to help you make more confident everyday decisions.
              </p>
            </div>

            <div className="app-image-col">
              <img
                src="/Home_Screen_6.2_detail_screen_with_6.2_watch_430x500_2.webp"
                alt="Libre app smartphone and smartwatch preview"
                className="app-mockup-img"
              />
            </div>
          </div>

          <div className="app-btn-wrapper text-center">
            <a href="#app" className="btn-dark-pill">More about Libre app</a>
          </div>
        </div>
      </section>

      {/* Split Circle Hero Section */}
      <section 
        className="split-circle-section" 
        style={{ backgroundImage: `url('images.jpg')` }}
      >
        <div className="white-circle-card">
          <h2>Take the first step and trial Libre 2 Plus</h2>
          <div className="accent-line"></div>
          <button className="btn-yellow">Trial Now for $15*</button>
        </div>
      </section>

      {/* Accessing Libre Section */}
      <section className="accessing-libre-section">
        <h2 className="section-title">Accessing Libre</h2>
        <div className="accent-line"></div>
        <div className="accessing-grid">
          <div 
            className="access-hero-card"
            style={{ backgroundImage: `url('Accessing_FSL2_-01.webp')` }}
          >
            <div className="badge-pill">$15 Trial*</div>
            <p>The $15 trial is the perfect way to experience Libre 2 Plus for the first time[cite: 2].</p>
          </div>
          
          <div className="access-stacked-list">
            <div className="access-list-item">
              <div 
                className="thumb-box"
                style={{ backgroundImage: `url('Accessing_FSL2_-06.webp')` }}
              ></div>
              <div className="access-info">
                <p>Libre sensors are subsidised for Australians with type 1 diabetes (eligibility criteria apply)[cite: 2].</p>
                <a href="#" className="link-orange">Learn More</a>
              </div>
            </div>
            
            <div className="access-list-item">
              <div 
                className="thumb-box"
                style={{ backgroundImage: `url('Accessing_FSL2_-07_1.webp')` }}
              ></div>
              <div className="access-info">
                <p>Subscribe and Save to receive up to 20% off your Libre 2 Plus sensor purchases[cite: 2].</p>
                <a href="#" className="link-orange">Subscribe</a>
              </div>
            </div>
            
            <div className="access-list-item">
              <div 
                className="thumb-box"
                style={{ backgroundImage: `url('Accessing_FSL2_-08_1.webp')` }}
              ></div>
              <div className="access-info">
                <p>Find out all the available options to access the Libre system[cite: 2].</p>
                <a href="#" className="link-orange">All access options</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Help Footer Banner */}
      <section className="bg-yellow support-help-section">
        <h2 className="section-title">Need help?</h2>
        <p className="section-subtitle">
          Explore these handy resources to help you get started and get the most out of your Libre experience[cite: 1].
        </p>

        <div className="card-grid-2">
          <div className="support-card">
            <div>
              <div className="icon-circle">
                <img src="Logo_FS_YCH_RGB_1.webp" alt="Libre Customer Care Icon" className="support-icon" />
              </div>
              <h3>Libre Customer Care</h3>
              <p>Our expert team are here to address all your needs. Call us Monday to Friday between 8am and 7pm AEDT (excluding Public Holidays)[cite: 1].</p>
            </div>
            <a href="tel:1800801478" className="btn-dark">Call 1800 801 478 ↗</a>
          </div>

          <div className="support-card">
            <div>
              <div className="icon-circle">
                <img src="Icon_Question_Mark_Large_Light_Background_2_Color_4.webp" alt="Product Information Icon" className="support-icon" />
              </div>
              <h3>Product Information</h3>
              <p>Essential resources for all Libre users[cite: 1].</p>
            </div>
            <a href="#product-info" className="btn-dark">Product information ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}