'use client';

import React from 'react';
import Image from 'next/image';
import './style.css';

export default function OmnipodPartnershipPage() {
  return (
    <main className="omnipod-page">
      {/* Breadcrumb */}
      <nav className="omnipod-breadcrumb">
        <div className="omnipod-container">
          <span className="home-icon">🏠</span> &gt; <span>Omnipod Partnership</span>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="op-hero-banner">
        <div className="op-hero-bg">
          <Image
            src="/OP5_Partnership_Lifestyle_1x1.webp"
            alt="Omnipod 5 Partnership Hero"
            fill
            priority
            className="hero-img"
          />
        </div>
        <div className="op-hero-circle">
          <div className="op-hero-content">
            <h1>FreeStyle Libre 3 Plus sensors and the Omnipod$^\circledR$ 5 System^</h1>
            <div className="yellow-line-left"></div>
            <h2>Seamless Automated Insulin Delivery (AID)</h2>
          </div>
        </div>
      </section>

      {/* 2. Intro Text & Dual CTA */}
      <section className="omnipod-container op-intro-section text-center">
        <p className="intro-main-text">
          The Omnipod$^\circledR$ 5 System and Libre 3 Plus sensor bring together the world's smallest sensor for both adult and paediatric patients<sup>85</sup>, and enhanced Bluetooth connectivity for a seamless Automated Insulin Delivery experience. To upgrade your NDSS type 1 CGM subsidy access to the Libre 3 Plus sensor, make an appointment with your healthcare professional.
        </p>
        <div className="cta-buttons-row">
          <button className="btn-dark pill-btn">NDSS Subsidy Access and Eligibility</button>
          <button className="btn-dark pill-btn">Learn about Libre 3 Plus</button>
        </div>
      </section>

      {/* 3. Single App Setup Section */}
      <section className="omnipod-container single-app-section">
        <div className="single-app-grid">
          <div className="single-app-text">
            <h2>Single App Setup with the Omnipod$^\circledR$ 5 System</h2>
            <div className="yellow-line-left"></div>
            <p>
              Patients use the Omnipod$^\circledR$ 5 App<sup>#</sup> to start the Libre 3 Plus sensor. This instantly connects the sensor to the Omnipod$^\circledR$ 5 System so it is ready for automated insulin delivery<sup>^</sup>.
            </p>
          </div>
          <div className="single-app-media">
            <Image
              src="/OP5_POD_FSL3_Arrows_RGB-MMOL.webp"
              alt="Single App Setup Flow"
              width={380}
              height={320}
            />
          </div>
        </div>
        <p className="image-disclaimer text-right">
          Image for illustrative purposes only. Not real patient data. Pod shown without necessary adhesive. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod$^\circledR$ 5 Controller is not waterproof.
        </p>
      </section>

      {/* 4. Optimising Connectivity Section */}
      <section className="omnipod-container connectivity-section">
        <h2 className="section-title text-center">Optimising connectivity between your Pod and your sensor</h2>
        <div className="yellow-line-center"></div>
        <p className="connectivity-sub text-center">
          Keeping both devices within 'line of sight' optimises their connectivity. Line of sight means the devices are worn in a way that they can "see" one another without your body blocking their communication.
        </p>

        <div className="connectivity-grid">
          {/* Left Column Cards */}
          <div className="connectivity-cards-col">
            <div className="conn-info-box">
              <div className="sensor-small-icon"></div>
              <h3>Libre 3 Plus sensor</h3>
              <p><span className="yellow-bullet"></span> Worn on the back of the upper arm</p>
            </div>

            <div className="conn-info-box">
              <div className="pod-small-icon"></div>
              <h3>Omnipod$^\circledR$ 5 Pod</h3>
              <p className="locations-title">Worn in one of the below locations:</p>
              <ol className="locations-list">
                <li><span>1</span> Same arm as sensor (at least 2.5cm / 1 inch apart)</li>
                <li><span>2</span> Back of the opposite arm</li>
                <li><span>3</span> Lower back, same side as sensor (adults)</li>
                <li><span>4</span> Upper buttock, same side as sensor</li>
                <li><span>5</span> Side of thigh, same side as sensor</li>
                <li><span>6</span> Front of thigh, same side as sensor (not pictured in diagram)</li>
                <li><span>7</span> Abdomen, same side as sensor (not pictured in diagram)</li>
              </ol>
            </div>
          </div>

          {/* Right Column Diagram */}
          <div className="connectivity-diagram-col">
            <div className="side-selectors">
              <span>Wearing devices on your left side</span>
              <span className="or-badge">OR</span>
              <span>Wearing devices on your right side</span>
            </div>
            <div className="body-diagram-wrapper">
              <Image
                src="/AUFSL1870_Omnipod_Body-A_.webp"
                alt="Body Placement Diagram for Omnipod and Sensor"
                width={420}
                height={480}
              />
            </div>
          </div>
        </div>
        <p className="image-disclaimer text-center margin-top-md">
          Pod shown without necessary adhesive. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod$^\circledR$ 5 Controller is not waterproof.
        </p>
      </section>

      {/* 5. Sharing Glucose Data using LibreLinkUp */}
      <section className="sharing-data-section">
        <div className="omnipod-container">
          <h2 className="section-title text-center">
            Sharing your glucose data using LibreLinkUp<sup>21</sup>
          </h2>
          <div className="yellow-line-center"></div>
          <div className="sharing-header-grid">
            <p className="sharing-intro-text">
              If you’re using Omnipod$^\circledR$ 5 with a Libre 3 Plus sensor, your loved ones and caregivers can see your glucose readings and alerts on the LibreLinkUp<sup>21</sup> app. Peace of mind for both of you - whether you’re catching some sleep or out living life! Follow these simple instructions to get connected.
            </p>
            <div className="cloud-sharing-img">
              <Image
                src="/CloudSharing_6_1mmol_OmniPod.webp"
                alt="Cloud sharing glucose data"
                width={320}
                height={200}
              />
            </div>
          </div>

          {/* Steps and Images Grid */}
          <div className="sharing-steps-container">
            {/* Step Block 1 & 2 */}
            <div className="sharing-step-row">
              <div className="sharing-step-text">
                <div className="dark-pill-header">For the Omnipod$^\circledR$ 5 Libre 3 Plus User</div>

                <div className="step-item">
                  <div className="step-num-badge">1</div>
                  <div>
                    <h3>Start linking from your Omnipod account</h3>
                    <ul>
                      <li>Go to <strong>Omnipod.com/en-au</strong> and log in to your account.</li>
                      <li>Tap <em>My Account</em>, then tap <em>Account Linking</em>.</li>
                      <li>Tap <em>Link</em> to allow data sharing with LibreView.<sup>24</sup></li>
                    </ul>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-num-badge">2</div>
                  <div>
                    <h3>Link your Omnipod ID to LibreView<sup>24</sup></h3>
                    <ul>
                      <li>Follow the prompts to create or log in to your LibreView<sup>24</sup> account.</li>
                      <li>Tap <em>Return to Account Linking</em> to return to your Omnipod account.</li>
                    </ul>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-num-badge">3</div>
                  <div>
                    <h3>Manage your LibreLinkUp Connections</h3>
                    <ul>
                      <li>On the Account Linking page, tap <em>Manage LibreLinkUp</em>.</li>
                      <li>Log in to your LibreView<sup>24</sup> account.</li>
                      <li>Tap <em>Add Connection</em>, enter your loved one or carer’s name and email, then tap <em>Invite Connection</em>.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sharing-step-image">
                <Image
                  src="/Omni_Child.webp"
                  alt="Child playing happily with sensor"
                  width={320}
                  height={320}
                  className="rounded-circle-img"
                />
              </div>
            </div>

            {/* Step Block 4 */}
            <div className="sharing-step-row reverse-row margin-top-xl">
              <div className="sharing-step-image">
                <Image
                  src="/Omni_Mom_Daughter.webp"
                  alt="Mother and daughter sharing moment"
                  width={320}
                  height={320}
                  className="rounded-circle-img"
                />
              </div>
              <div className="sharing-step-text">
                <div className="yellow-pill-header">For the loved one or caregiver</div>

                <div className="step-item">
                  <div className="step-num-badge">4</div>
                  <div>
                    <h3>Download and set up LibreLinkUp<sup>24</sup></h3>
                    <ul>
                      <li>Download LibreLinkUp<sup>21</sup> from the App Store or Google Play.</li>
                    </ul>
                    <div className="store-badges-row">
                      <Image src="/app-store-png-logo-33123_2x_1.webp" alt="App Store" width={120} height={40} />
                      <Image src="/app-store-png-logo-33123_copy_2x_1.webp" alt="Google Play" width={120} height={40} />
                    </div>
                    <div className="qr-container">
                      <Image src="/Omnipod-QRcode.webp" alt="QR Code" width={100} height={100} />
                    </div>
                    <ul>
                      <li>Create or log in to your LibreLinkUp<sup>21</sup> account – use the same email address used to invite you as a Connection.</li>
                      <li>Accept the Connection Request.</li>
                    </ul>
                  </div>
                </div>

                <div className="connection-success-box text-center">
                  <p>You can now view your Connection’s current glucose level, trend arrow and glucose graph.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Professional / Healthcare Support Banner */}
      <section className="omnipod-container healthcare-banner-section">
        <div className="healthcare-card-grid">
          <div className="healthcare-image">
            <Image
              src="/OP5_Partnership_Lifestyle_1x1.webp"
              alt="Healthcare support lifestyle"
              width={420}
              height={320}
              className="rounded-card-img"
            />
          </div>
          <div className="healthcare-content">
            <p className="healthcare-text">
              For more information about using the Libre 3 Plus sensor with the Omnipod$^\circledR$ 5 System, speak to your healthcare professional or visit the Omnipod website.^
            </p>
            <button className="btn-dark pill-btn">Omnipod.com/en-au</button>
          </div>
        </div>
        <p className="compatibility-note text-center">
          Please note - FreeStyle Libre 2 Plus remains compatible with the Omnipod 5, for support with the FreeStyle Libre 2 Plus sensor contact Libre customer care on <strong>1800 801 478</strong>, 8am-7pm, Mon-Fri (excluding public holidays).
        </p>
        <p className="upgrade-note text-center">
          To upgrade to the Libre 3 Plus sensor, make an appointment with your healthcare professional.
        </p>
      </section>













<section className="sharing-data-section">
  <div className="omnipod-container">
    <h2 className="section-title text-center">
      Sharing your glucose data using LibreLinkUp<sup>21</sup>
    </h2>
    <div className="yellow-line-center"></div>

    <div className="sharing-header-grid">
      <p className="sharing-intro-text">
        If you’re using Omnipod® 5 with a Libre 3 Plus sensor, your loved ones and caregivers can see your glucose readings and alerts on the LibreLinkUp<sup>21</sup> app. Peace of mind for both of you - whether you’re catching some sleep or out living life! Follow these simple instructions to get connected.
      </p>
      <div className="cloud-sharing-img">
        <Image
          src="/CloudSharing_6_1mmol_OmniPod.webp"
          alt="Cloud sharing glucose data"
          width={320}
          height={200}
        />
      </div>
    </div>

    {/* Integrated Single Wrapper for Overlay Look */}
    <div className="sharing-steps-wrapper">
      
      {/* --- SECTION 1: For Omnipod 5 User --- */}
      <div className="sharing-block block-dark">
        {/* Full Width Dark Banner */}
        <div className="full-width-banner banner-dark">
          <span>For the Omnipod® 5 Libre 3 Plus User</span>
        </div>

        <div className="block-content-grid">
          <div className="block-text-col">
            <div className="step-item">
              <div className="step-num-badge">1</div>
              <div>
                <h3>Start linking from your Omnipod account</h3>
                <ul>
                  <li>Go to <strong>Omnipod.com/en-au</strong> and log in to your account.</li>
                  <li>Tap <em>My Account</em>, then tap <em>Account Linking</em>.</li>
                  <li>Tap <em>Link</em> to allow data sharing with LibreView.<sup>24</sup></li>
                </ul>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num-badge">2</div>
              <div>
                <h3>Link your Omnipod ID to LibreView<sup>24</sup></h3>
                <ul>
                  <li>Follow the prompts to create or log in to your LibreView<sup>24</sup> account.</li>
                  <li>Tap <em>Return to Account Linking</em> to return to your Omnipod account.</li>
                </ul>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num-badge">3</div>
              <div>
                <h3>Manage your LibreLinkUp Connections</h3>
                <ul>
                  <li>On the Account Linking page, tap <em>Manage LibreLinkUp</em>.</li>
                  <li>Log in to your LibreView<sup>24</sup> account.</li>
                  <li>Tap <em>Add Connection</em>, enter your loved one or carer’s name and email, then tap <em>Invite Connection</em>.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="block-image-col">
            <div className="overlap-circle-frame">
              <Image
                src="/Omni_Child.webp"
                alt="Child playing on monkey bars"
                width={360}
                height={360}
                className="circle-img"
              />
            </div>
          </div>
        </div>
      </div>


      {/* --- SECTION 2: For Caregiver --- */}
      <div className="sharing-block block-yellow">
        {/* Full Width Yellow Banner */}
        <div className="full-width-banner banner-yellow">
          <span>For the loved one or caregiver</span>
        </div>

        <div className="block-content-grid">
          <div className="block-text-col">
            <div className="step-item">
              <div className="step-num-badge">4</div>
              <div>
                <h3>Download and set up LibreLinkUp<sup>24</sup></h3>
                <ul>
                  <li>Download LibreLinkUp<sup>21</sup> from the App Store or Google Play.</li>
                </ul>
                <div className="app-qr-row">
                  <div className="app-badges-col">
                    <img src="/app-store-badge.svg" alt="App Store" className="store-badge-img" />
                    <img src="/app-store-png-logo-33123_copy_2x" alt="Google Play" className="store-badge-img" />
                  </div>
                  <div className="qr-badge-wrapper">
                    <Image src="/Omnipod-QRcode.webp" alt="QR Code" width={85} height={85} />
                  </div>
                </div>
                <ul>
                  <li>Create or log in to your LibreLinkUp<sup>21</sup> account - use the same email address used to invite you as a Connection.</li>
                  <li>Accept the Connection Request.</li>
                </ul>
              </div>
            </div>

            <div className="connection-success-box text-center">
              <p>You can now view your Connection’s current glucose level, trend arrow and glucose graph.</p>
            </div>
          </div>

          <div className="block-image-col">
            <div className="overlap-circle-frame">
              <Image
                src="/Omni_Mom_Daughter.webp"
                alt="Mother and daughter holding hands"
                width={360}
                height={360}
                className="circle-img"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


















      

      {/* 7. Comprehensive Disclaimers Footer */}
      <footer className="footer-disclaimers">
        <div className="footer-disclaimer-container">
          <p>^The FreeStyle Libre 2 Plus sensor and FreeStyle Libre 3 Plus sensor are authorised for use with the Omnipod$^\circledR$ 5 automated insulin delivery system. For use of the FreeStyle Libre 2 Plus sensors or FreeStyle Libre 3 Plus sensor with Omnipod$^\circledR$ 5, refer to the labelling provided with Omnipod$^\circledR$ 5.</p>
          <p># The Omnipod$^\circledR$ 5 App is available in the dedicated controller</p>
          <p>* An active Pod and paired FreeStyle Libre 3 Plus sensor or FreeStyle Libre 2 Plus sensor are required to switch to Automated mode. During sensor warm up, the Omnipod$^\circledR$ 5 System will be in Automated: Limited state. When warm up is complete and sensor glucose values are available, the Omnipod$^\circledR$ 5 System will enter Automated Mode, where the Pod uses sensor glucose values to make automated insulin dosing decisions every 5 minutes.</p>
          <p>The Omnipod 5 Automated Insulin Delivery System is indicated for use by individuals with Type 1 diabetes mellitus in persons 2 years of age and older. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod$^\circledR$ 5 Controller is not waterproof.</p>
          <p>The Omnipod 5 Automated Insulin Delivery System is a single hormone insulin delivery system intended to deliver U 100 insulin subcutaneously for the management of type 1 diabetes in persons aged 2 and older requiring insulin. Refer to the Omnipod$^\circledR$ 5 Automated Insulin Delivery System User Guide and <a href="#safety">www.omnipod.com/en-au/what-is-omnipod/omnipod-5</a> for complete safety information including indications, contraindications, warnings, cautions, and instructions.</p>
          <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.</p>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
          <p>Omnipod is a registered trademark of Insulet Corporation and used with permission. Other trademarks are the property of their respective owners.</p>
          <p className="footer-version-code text-right">ADC-2655075 V6.0</p>
        </div>
      </footer>
    </main>
  );
}