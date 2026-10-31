import React from 'react';
import Image from 'next/image';
import './style.css';

export default function QualityMattersPage() {
  return (
    <>
    <main className="quality-page">
      {/* Breadcrumbs Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="breadcrumb-content">
          <span className="home-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Quality Matters</span>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-col">
            <h1 className="hero-title">
              Quality you can trust.
              <br />
              Confidence you can wear
              <br />
              every day.
            </h1>
          </div>
          <div className="hero-image-col">
            <div className="oval-image-wrapper">
              <Image
                src="/quality-matters_Desktop_.webp"
                alt="Woman outdoors wearing CGM sensor"
                width={500}
                height={500}
                priority
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hero Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          <h2 className="intro-heading">
            Libre CGMs meet the highest industry
            <br />
            standards for quality, accuracy and
            <br />
            performance<sup>84</sup>
          </h2>
          <div className="yellow-divider" />
          <p className="intro-description">
            Glucose readings influence everyday choices, from food and exercise
            to conversations with your healthcare professional. That is why the
            CGM you choose must be accurate and reliable.
          </p>
        </div>
      </section>

      {/* Feature Block 1: anzCGM Minimum Performance Standards (Text Left, Image Right) */}
      <section className="feature-block">
        <div className="feature-container">
          <div className="feature-text">
            <h2 className="feature-heading">
              anzCGM Minimum
              <br />
              Performance Standards
            </h2>
            <div className="yellow-divider align-left" />
            <p className="feature-paragraph">
              Developed independently by leading professional associations in
              Australia and New Zealand, the anzCGM Minimum Performance Standards
              define what good CGM accuracy, precision and performance should
              look like.<sup>#</sup>
            </p>
            <p className="feature-paragraph">
              This framework helps people with diabetes and healthcare
              professionals understand what to expect from a high-quality glucose
              sensor in both everyday use and clinical settings.
            </p>
            <p className="feature-paragraph">
              In Australia, not all registered CGMs currently meet anzCGM
              Standards.<sup>#</sup>
            </p>
          </div>
          <div className="feature-image">
            <Image
              src="/Quality_2Column_Image-1.webp"
              alt="Woman outdoors enjoying meal"
              width={500}
              height={380}
              className="card-img"
            />
          </div>
        </div>
      </section>

      {/* Feature Block 2: Full-featured, quality CGM (Image Left, Text Right) */}
      <section className="feature-block">
        <div className="feature-container">
          <div className="feature-image">
            <Image
              src="/Quality_2Column_Image-2.webp"
              alt="Active man wearing sensor outdoors"
              width={500}
              height={380}
              className="card-img"
            />
          </div>
          <div className="feature-text">
            <h2 className="feature-heading">
              Full-featured, quality CGM
              <br />
              with no compromises.<sup>^</sup>
            </h2>
            <p className="feature-paragraph">
              Libre CGM sensors do meet the anzCGM standards,<sup>*,^</sup>{" "}
              delivering accuracy you can rely on, data you can trust, and support
              when it matters most. With minute-by-minute glucose readings built
              on the quality that only Libre can deliver, you can manage your
              diabetes with confidence.
            </p>
            <p className="feature-paragraph font-bold">
              If you're unsure whether your current CGM meets the anzCGM Minimum
              Performance Standards, speak with your healthcare professional.
            </p>
          </div>
        </div>
      </section>

      {/* HITRUST Certified Yellow Banner */}
      <section className="hitrust-banner">
        <div className="hitrust-container">
          <div className="hitrust-badge-card">
            <Image
              src="/HITRUST-Assessment-Seals-r2.webp"
              alt="r2 HITRUST Certified Seal"
              width={240}
              height={100}
              className="hitrust-badge-img"
            />
          </div>
          <div className="hitrust-text-col">
            <h2 className="hitrust-heading">
              HITRUST<sup>®</sup> Certified, for
              <br />
              trusted data security<sup>†</sup>
            </h2>
            <p className="hitrust-description">
              We're committed to protecting your privacy and guarding the
              information you choose to share when using our products. Our
              digital tools and apps are HITRUST<sup>®</sup>-certified,<sup>†</sup>{" "}
              meeting the highest global standards for data security and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Card Section */}
     




<section className="questions-section">
      <div className="questions-card">
        <h2 className="questions-title">
          Before choosing a CGM, ask the questions that matter.
        </h2>
        <div className="yellow-divider" />

        <div className="content-grid">
          {/* Left Column: Round Image */}
          <div className="image-column">
            <div className="round-image-wrapper">
              <Image
                src="/whatis_Block2_1.webp"
                alt="Active man sitting outdoors using phone"
                width={450}
                height={450}
                className="round-img"
              />
            </div>
          </div>

          {/* Right Column: Checkmark List & Footer Text */}
          <div className="text-column">
            <ul className="questions-list">
              <li>
                <span className="check-circle">✓</span>
                <span>Does it meet the anzCGM Minimum Performance Standards?</span>
              </li>
              <li>
                <span className="check-circle">✓</span>
                <span>Is the sensor accurate and reliable?</span>
              </li>
              <li>
                <span className="check-circle">✓</span>
                <span>Is my personal data protected?</span>
              </li>
              <li>
                <span className="check-circle">✓</span>
                <span>Is there dedicated customer support?</span>
              </li>
              <li>
                <span className="check-circle">✓</span>
                <span>Is it backed by diabetes technology experience?</span>
              </li>
            </ul>

            <h3 className="bottom-heading">
              Because confident decisions start with trusted glucose readings.
            </h3>
          </div>
        </div>
      </div>
    </section>














      {/* Call To Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-icon-wrapper">
            <Image
              src="/ADC_Icon_Check.webp"
              alt="Checkmark icon"
              width={64}
              height={64}
              className="cta-icon-img"
            />
          </div>
          <h2 className="cta-title">Choose a CGM you can trust. Choose Libre.</h2>
          <button type="button" className="cta-button">
            Explore Libre systems
          </button>
        </div>
      </section>



















      {/* Disclaimers & Footnotes Footer */}
      <footer className="footnotes-section">
        <div className="footnotes-container">
          <p className="footnote-link">
            # https://www.diabetessociety.com.au/wp-content/uploads/2026/04/Ads-Adea-Adips-Anzsped-Nzssd-anzCGM-Minimum-Standards-April-2026.pdf.
            Accessed 21 April 2026.
          </p>
          <p className="footnote-link">
            ^ anzCGM evidence for on-market Libre sensors
          </p>
          <p className="footnote-item">
            * Current on-market Libre brand sensors in Australia and New Zealand. As
            of Apr 2026.
          </p>
          <p className="footnote-link">
            † Why the HITRUST certification is so broadly accepted
          </p>

          <div className="footnote-code">ADC-2654959 V3.0</div>
        </div>
      </footer>
    </main>
    </>
  );
}