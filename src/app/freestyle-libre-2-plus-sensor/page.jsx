"use client";

import React, { useState,useEffect } from "react";
import "./style.css";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Recommendations from "../../components/Recommendations/Recommendations";
import SubscribeForm from "../../components/SubscribeForm";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const[products,setProducts]= useState(null);

  // Product Image Gallery Slider State with exact filenames
  const images = [
    "/fsl2plus_box_and_sensor_clean.webp",
    "/fsl2p_angle_right.webp",
    "/fsl2p_pdp_image_1.webp",
    "/fsl2p_pdp_image_2.webp",
    "/fsl2p_pdp_image_3.webp",
    "/fsl2p_pdp_image_4.webp"
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


useEffect(() => {
  async function fetchProduct() {
    try {
      const url =
        "http://192.168.31.180:8081/api/get-product?productKey=freeStyle-libre-2-plus-sensor";

      console.log("1. API URL:", url);

      const response = await fetch(url);

      console.log("2. Response status:", response.status);

      const data = await response.json();

      console.log("3. API response data:", data);

      const productData = data.results?.[0];

      if (!productData) {
        console.error("Product not found in results:", data);
        return;
      }

      setProduct(productData);
    } catch (error) {
      console.error("API fetch error:", error);
    }
  }

  fetchProduct();
}, []);
  return (
    <>


    <main className="libre-page">
      {/* Breadcrumbs & Hero Title */}
      <div className="container">
        <nav className="breadcrumb">
          <a href="#">🏠</a> <span>&gt;</span> <span>FreeStyle Libre 2 Plus Sensor</span>
          <h1> welcome {products?.masterData.current.name["en-US"]}</h1>
        </nav>

        <section className="hero-header text-center">
          <h1>
            FreeStyle Libre 2 Plus: Accurate<sup>76</sup>, trusted quality in a 15-day Continuous Glucose Monitor (CGM)
          </h1>
          <p className="subtitle">
            For people living with type 1, type 2, gestational and all other types of diabetes. Subsidised for
            Australians living with type 1 diabetes (<a href="#">eligibility and access information</a>)
          </p>
          <div className="yellow-underline"></div>
        </section>

        {/* Product Section with Uniform Image Slider */}
        <section className="product-section">
          <div className="product-gallery">
            <div className="main-image">
              <img
                src={images[selectedImage]}
                alt="FreeStyle Libre 2 Plus Product View"
              />
            </div>
            <div className="thumbnails">
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`thumb ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={imgSrc} alt={`thumb-${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-details">
            <h2>FreeStyle Libre 2 Plus Sensor</h2>
            <div className="price">$102.00</div>
            <p className="description">
              <strong>Description: The Libre 2 Plus sensor provides up to 15-days of continuous glucose monitoring, with zero finger pricks!<sup>10</sup></strong>
            </p>
            <ul className="feature-bullets">
              <li>Accurate<sup>76</sup> real-time glucose readings delivered straight to your smartphone<sup>55</sup></li>
              <li>Optional alarms to alert you the minute glucose levels are too high or too low</li>
              <li>Meets anzCGM standards, the highest industry standards for quality, accuracy and performance (<a href="#">Learn more</a>)</li>
              <li>Option to pair with the Omnipod® 5 Automated Insulin Delivery System^ (<a href="#">Learn more</a>)</li>
            </ul>

            <div className="cart-actions">
              <div className="quantity-selector">
                <button type="button" onClick={decreaseQuantity}>-</button>
                <input type="text" value={quantity} readOnly />
                <button type="button" onClick={increaseQuantity}>+</button>
              </div>
              <button className="btn-dark add-to-cart">Add to Cart</button>
            </div>

            <p className="shipping-info">
              Shipping calculated during checkout. Spend $300 or more in a single order and receive free shipping on that order.
            </p>
            <p className="subscribe-promo">
              Save 20%<sup>51</sup> on sensor purchases with Subscribe and Save.
            </p>
            <button className="btn-dark btn-subscribe">Subscribe and Save Now</button>
          </div>
        </section>

        <div className="disclaimer-text">
          <p>Each box contains 1x FreeStyle Libre 2 Plus sensor, sensor applicator and instructions for use. <a href="#">Terms of sale</a></p>
          <p><strong>Always follow the directions for use. <a href="#">Read the warnings</a> before purchase.</strong></p>
          <p>This product is indicated for measuring interstitial fluid glucose levels in people (aged 2+) with diabetes mellitus.</p>
        </div>
      </div>

      {/* Subscribe Banner */}
      <section className="banner-gray">
        <div className="container text-center">
          <div className="icon-coins">🪙</div>
          <h2>Save 20%<sup>51</sup> with Subscribe & Save!</h2>
          <p>Subscribe and Save to get free shipping on every order, and every 6th order is completely free!</p>
          <button className="btn-dark">Subscribe & Save Now</button>
        </div>
      </section>

      {/* Yellow Feature Section */}
     {/* Yellow Feature Section - Only 1 Bottom Line */}
      <section className="banner-yellow">
        <div className="container text-center">
          <h2>Gain the knowledge to progress on your journey with more confidence.</h2>

          <div className="grid-3">
            {/* Card 1 */}
            <div className="yellow-card">
              <div className="circle-icon-wrapper">
                <div className="circle-icon">
                  <img src="/Vector_1_1.webp" alt="Real-time readings" />
                </div>
              </div>
              <div className="yellow-card-divider"></div>
              <h3>Real-time readings</h3>
              <p>
                Accurate<sup>76</sup>, real-time glucose readings with a quick glance at your smartphone<sup>55</sup>. No more finger pricks<sup>10</sup>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="yellow-card">
              <div className="circle-icon-wrapper">
                <div className="circle-icon">
                  <img src="/Vector_2_1.webp" alt="Optional alarms" />
                </div>
              </div>
              <div className="yellow-card-divider"></div>
              <h3>Optional alarms<sup>18</sup></h3>
              <p>
                Discreetly alerts you the minute glucose is too low or high, so you can have greater peace of mind.
              </p>
            </div>

            {/* Card 3 */}
            <div className="yellow-card">
              <div className="circle-icon-wrapper">
                <div className="circle-icon">
                  <img src="/Vector_3.webp" alt="Proven results" />
                </div>
              </div>
              <div className="yellow-card-divider"></div>
              <h3>Proven results</h3>
              <p>
                Shown to significantly lower HbA1c<sup>27,75</sup>, increase time in target glucose range<sup>39,20,81</sup>, and reduce hypos<sup>66,4,39</sup>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Curved Wave Shape */}
        <div className="banner-bottom-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Subsidy Section */}
      <section className="subsidy-section">
        <div className="container text-center">
          <div className="icon-coins">🪙</div>
          <h2>The Type 1 CGM Subsidy</h2>
          <p>Libre 2 Plus is subsidised for Australians living with type 1 diabetes. Eligibility criteria applies.</p>
          <button className="btn-dark">Learn More</button>
        </div>
      </section>

      {/* Getting Started Tabs Section */}
      {/* Dynamic Tabs Section with Custom Images per Tab */}
      <section className="tabs-section">
        <div className="container">
          <h2 className="text-center">Getting started with Libre 2 Plus</h2>
          <div className="yellow-underline"></div>

          {/* Navigation Tabs Header */}
          <div className="tabs-header">
            <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
              Preparing your skin
            </button>
            <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
              Applying the sensor
            </button>
            <button className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>
              Activating the sensor with your device
            </button>
            <button className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>
              Removing and replacing the sensor
            </button>
          </div>

          {/* TAB 1: Preparing your skin */}
          {activeTab === 0 && (
            <div className="tab-content">
              <p className="tab-notice text-center">
                <strong>Please note: application and starting steps are the same for Libre 2 and Libre 2 Plus sensors</strong>
              </p>

              <div className="grid-3 steps-grid">
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab1-Step1.webp" alt="Preparing step 1" />
                  </div>
                  <h4>Step 1</h4>
                  <p>The back of the upper arm is the recommended and approved application site.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab1-Step2.webp" alt="Preparing step 2" />
                  </div>
                  <h4>Step 2</h4>
                  <p>Use non-moisturising, fragrance-free soap to wash the area where you will apply your sensor.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab1-Step3.webp" alt="Preparing step 3" />
                  </div>
                  <h4>Step 3</h4>
                  <p>Use an alcohol wipe to clean the site and then allow skin to fully air dry (do not blow on it). Note: Libre 2 and 2 Plus sensor boxes do not include alcohol wipes.</p>
                </div>
              </div>

              <div className="pro-tips">
                <h4>Pro Tips:</h4>
                <ul>
                  <li>Do not use body lotion or cream where you'll apply the sensor, as they may leave an oily residue on your skin.</li>
                  <li>Body hair can interfere with sensor adhesion. Shave the application area if necessary.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: Applying the sensor */}
          {activeTab === 1 && (
            <div className="tab-content">
              <p className="tab-notice text-center">
                <strong>Once you’ve prepared the back of your upper arm, apply the sensor using the two-piece sensor applicator.</strong>
              </p>

              <div className="grid-3 steps-grid">
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab2-Step1.webp" alt="Applying step 1" />
                  </div>
                  <h4>Step 1</h4>
                  <p>Peel back and remove the lid from the sensor pack.</p>
                  <p>Unscrew the cap of the sensor applicator, you will hear a click. Align the line of the sensor applicator with the line on the sensor pack.</p>
                  <p>Place the sensor applicator over the prepared site and push down firmly.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab2-Step2.webp" alt="Applying step 2" />
                  </div>
                  <h4>Step 2</h4>
                  <p>Gently pull the sensor applicator away from your body. The sensor should now be attached to your skin.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab2-Step3.webp" alt="Applying step 3" />
                  </div>
                  <h4>Step 3</h4>
                  <p>Secure by pressing down gently with your finger around the edge.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Activating the sensor with your device */}
          {activeTab === 2 && (
            <div className="tab-content">
              <p className="tab-notice text-center">
                <strong>Once your sensor is applied, you need to pair it with your FreeStyle LibreLink app<sup>12</sup> or FreeStyle Libre 2 reader.</strong>
              </p>

              <div className="grid-4 steps-grid">
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab3-Step1_LibreLink_207x150.webp" alt="Activating step 1" />
                  </div>
                  <h4>Step 1</h4>
                  <p>Press “Scan New Sensor” on the FreeStyle LibreLink app<sup>12</sup> or FreeStyle Libre 2 reader.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab3-Step2.webp" alt="Activating step 2" />
                  </div>
                  <h4>Step 2</h4>
                  <p>Hold your device near the sensor and slowly scan it.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab3-Step3.webp" alt="Activating step 3" />
                  </div>
                  <h4>Step 3</h4>
                  <p>You will hear a beep or feel a vibration upon activation.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    {/* Reuse Step 3 graphic or butterfly icon for step 4 status */}
                    <img src="/block2-tab3-Step3.webp" alt="Activating step 4" />
                  </div>
                  <h4>Step 4</h4>
                  <p>The sensor can be used to check your glucose after 60 minutes.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Removing and replacing the sensor */}
          {activeTab === 3 && (
            <div className="tab-content">
              <p className="tab-notice text-center">
                <strong>Your device will alert you when it’s time to replace your sensor. To remove it:</strong>
              </p>

              <div className="grid-3 steps-grid">
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab4-Step1.webp" alt="Removing step 1" />
                  </div>
                  <h4>Step 1</h4>
                  <p>Rub an adhesive remover or cotton ball soaked in baby oil around the outside of the sensor.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab4-Step2.webp" alt="Removing step 2" />
                  </div>
                  <h4>Step 2</h4>
                  <p>Pull the adhesive edge that fixes the sensor to your skin. Slowly remove in a single movement.</p>
                  <p>All system components used, including the sensor, can be disposed of in accordance with the current local waste treatment practices.</p>
                </div>
                <div className="step-card">
                  <div className="step-img">
                    <img src="/block2-tab4-Step3.webp" alt="Removing step 3" />
                  </div>
                  <h4>Step 3</h4>
                  <p>When applying a new sensor, select a different site.</p>
                </div>
              </div>
            </div>
          )}

          {/* Download Guides Bottom Card */}
          <div className="download-guides-wrapper">
            <div className="download-links">
              <p>Download these handy guides for more useful information.</p>
              <a href="#" className="guide-item">
                <span className="badge">A</span> Complete Guide to Libre 2 Plus
              </a>
              <a href="#" className="guide-item">
                <span className="badge">B</span> Sensor Application Guide
              </a>
            </div>
            <div className="guide-card-preview">
              <img 
                src="/Video_Thumb_-_Applying_FSL2_Sensor.webp" 
                alt="Applying the FreeStyle Libre 2 sensor guide preview" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Banner Section */}
{/* Apps and Connected Care Section */}
      <section className="banner-yellow-app">
        <div className="container text-center">
          <h2>Libre 2 Plus Apps and Connected Care</h2>
          <div className="white-underline"></div>
          
          <div className="grid-3 app-grid">
            {/* Card 1: Libre app */}
            <div className="app-card">
              <h4>Libre app<sup>12</sup></h4>
              <div className="app-icon-wrapper">
                <img 
                  src="/Libre_App_Logo_-_website_logo_usage.webp" 
                  alt="Libre app logo" 
                  className="app-icon-img"
                />
              </div>
              <h5>Get the full picture</h5>
              <p>
                Get real-time glucose readings sent directly to your smartphone, and discover deep insights into your glucose data.
              </p>
              <button className="btn-dark">Learn More</button>
            </div>

            {/* Card 2: LibreLinkUp */}
            <div className="app-card">
              <h4>LibreLinkUp<sup>21</sup></h4>
              <div className="app-icon-wrapper">
                <img 
                  src="/LLU_4_Icon.webp" 
                  alt="LibreLinkUp icon" 
                  className="app-icon-img"
                />
              </div>
              <h5>Share with loved ones</h5>
              <p>
                Allow up to 20 family and friends to get your glucose readings in real time. LibreLinkUp<sup>21</sup> is perfect for parents and caregivers.
              </p>
              <button className="btn-dark">Learn More</button>
            </div>

            {/* Card 3: LibreView */}
            <div className="app-card">
              <h4>LibreView</h4>
              <div className="app-icon-wrapper">
                <img 
                  src="/connected.webp" 
                  alt="LibreView laptop preview" 
                  className="app-icon-img laptop-img"
                />
              </div>
              <h5>Share with your healthcare team</h5>
              <p>
                Securely connect with your healthcare team so they can view your glucose data and tailor your treatment plan.
              </p>
              <button className="btn-dark">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-section">
       





<TestimonialSlider />













      </section>
















      {/* Recommended Products */}
      <section className="recommendations-section">



<Recommendations />


      </section>

      {/* Footer Legal Disclaimer */}
      <footer className="footer-legal">
        <div className="container">
          <p>^The FreeStyle Libre 2 Plus sensor is authorised for use with the Omnipod® 5 automated insulin delivery system. For use of the FreeStyle Libre 2 Plus sensors with Omnipod® 5, refer to the labelling provided with Omnipod 5.</p>
          <p>The Omnipod 5 Automated Insulin Delivery System is indicated for use by individuals with Type 1 diabetes mellitus in persons 2 years of age and older. The Pod has an IP28 rating for up to 7.6 metres (25 feet) for 60 minutes. The Omnipod® 5 Controller is not waterproof.</p>
          <p>Omnipod is a registered trademark of Insulet Corporation and used with permission. Other trademarks are the property of their respective owners. The FreeStyle Libre 2 Plus sensor is authorised to work with the Omnipod 5 Automated Insulin Delivery System.</p>
          <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trademarks of Google LLC.</p>
          <div className="footer-code text-right">ADC-2654865 V7.0</div>
        </div>
      </footer>

      <SubscribeForm />
    </main>
    </>
  );
}