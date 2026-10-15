import React from 'react';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function GlucoseComparisonPage() {
  return (
    <div className="page-wrapper">
      {/* 1. Hero Header Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            {/* <nav className="breadcrumb">
              <span className="icon">🏠</span>
              <span className="arrow">&gt;</span>
              <span className="current">Difference Between Glucose &amp; Interstitial Glucose</span>
            </nav> */}
            <h1>The difference between blood glucose and sensor glucose</h1>
            <p>
              Here are a few important things for you to know about how your FreeStyle Libre sensor readings may differ from a finger prick blood test.
            </p>
          </div>
          <div className="hero-image-container">
            <div className="circle-image-mask">
              <img
                src="/Difference_Between_Glucose_Interstitial_Glucose_-_Hero_Banner_Mobile_.webp"
                alt="Woman using FreeStyle Libre sensor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Section */}
      

      {/* 3. Sensor vs Blood Glucose (Train Graphics Grid) */}
      <section className="section train-section">
        <div className="container">
          <h2>Sensor Glucose vs Blood Glucose</h2>
          <div className="intro-text">
            <p>
              Finger prick blood glucose readings and sensor glucose reading won't always match and in fact are likely to be different.
            </p>
            <p>
              That's because sensor glucose readings come from the interstitial fluid (ISF), a thin layer of fluid that surrounds the cells of the tissues below your skin, not from your blood.
            </p>
            <p>
              There is a 5 to 10 minute delay in ISF glucose response to changes in blood glucose.<sup>79</sup> Glucose readings on ISF have been proven to reliably reflect glucose levels.<sup>80</sup>
            </p>
          </div>

          <div className="train-grid">
            {/* Card 1: Stable */}
            <div className="train-card">
              <div className="graphic-container">
                <img src="/images/trend-stable.svg" alt="Glucose levels stable" />
              </div>
              <div className="card-divider" />
              <h3>When glucose levels remain stable..</h3>
              <p>
                ...the glucose levels recorded by the FreeStyle Libre 2 Plus sensor and blood glucose are similar, though not always exactly the same.
              </p>
            </div>

            {/* Card 2: Rising */}
            <div className="train-card">
              <div className="graphic-container">
                <img src="/images/trend-rising.svg" alt="Rapidly rising glucose levels" />
              </div>
              <div className="card-divider" />
              <h3>With rapidly rising glucose levels..</h3>
              <p>
                ...the glucose levels recorded by the FreeStyle Libre 2 Plus sensor may be lower than blood glucose levels.
              </p>
            </div>

            {/* Card 3: Falling */}
            <div className="train-card">
              <div className="graphic-container">
                <img src="/images/trend-falling.svg" alt="Rapidly falling glucose levels" />
              </div>
              <div className="card-divider" />
              <h3>For rapidly falling glucose...</h3>
              <p>
                ...the glucose levels recorded by the FreeStyle Libre 2 Plus sensor may be higher than the blood glucose levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="section comparison-section">
        <div className="container">
          <h2>How does the sensor reading compare with a blood glucose reading?</h2>
          <div className="comparison-grid">
            <div className="comparison-col">
              <h3>Traditional Blood Glucose Monitoring</h3>
              <p className="col-desc">Measures the glucose levels in the blood (capillary).</p>
              <ul>
                <li>A lancet is inserted to reach the blood in the capillary.</li>
                <li>A finger prick only provides one measurement at one point in time.</li>
                <li>Requires a whole kit: lancets (finger pricker), blood glucose strips, and blood glucose reader.</li>
              </ul>
            </div>

            <div className="comparison-col">
              <h3>The FreeStyle Libre 2 Plus system</h3>
              <p className="col-desc">
                Continuously measures the glucose levels in the interstitial fluid (ISF): the fluid between the cells under the skin.
              </p>
              <ul>
                <li>Glucose readings based on interstitial fluid have been shown to reliably reflect glucose levels.</li>
                <li>The sensor is painless to apply and wear, with zero finger pricks.<sup>12</sup></li>
                <li>The sensor takes a glucose reading every minute and automatically displays it on your phone.<sup>55</sup></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<section className="section video-section">
        <div className="container">
          <h2>Glucose reading vs sensor reading</h2>
          <p className="section-subtitle">
            Here’s a video tutorial to help show how blood glucose readings are different to sensor readings
          </p>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/placeholder"
              title="How the FreeStyle Libre 2 Plus sensor measures glucose"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="doc-reference">ADC-109230 V1.0</div>
        </div>
      </section>

      <section className="last">
        <div className="lastsection">
          <SubscribeForm />
        </div>
      </section>



    </div>
  );
}