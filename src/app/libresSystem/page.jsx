"use client";

import React, { useState, useEffect } from "react";
import "./styles.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function FreeStyleLibrePage() {
  // =========================
  // API DATA
  // =========================
  const [landing, setLanding] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Slider state MUST be before any return
  const [currentSlide, setCurrentSlide] = useState(0);

  // =========================
  // FETCH API DATA
  // =========================
  useEffect(() => {
    setLoading(true);

    fetch("/api/libresystem")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch home page");
        }

        return res.json();
      })
      .then((data) => {
        console.log("API data:", data);
        setLanding(data);
      })
      .catch((error) => {
        console.error("Failed to fetch home page:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="products-section">
        <div className="loading">
          <div className="loader"></div>
          <p>Loading home page...</p>
        </div>
      </main>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (error) {
    return (
      <main className="products-section">
        <p>Error: {error}</p>
      </main>
    );
  }

  // =========================
  // WAIT FOR API DATA
  // =========================
  if (!landing) {
    return null;
  }

  // =========================
  // TESTIMONIALS
  // =========================
  const testimonials = [
    {
      id: 1,
      name: "Rachel, NSW",
      text:
        "I can't describe how amazing wearing a CGM makes my life. Thank you for assisting me to live my best life",
      image: "/Rachel_MFM_Block_1.webp",
    },
    {
      id: 2,
      name: "Shawn, NSW",
      text:
        "I have made the decision to prioritise my health and I see my monthly subscription as an investment in my future... I encourage anyone thinking about a subscription to seriously consider it - you are worth it",
      image: "/Shawn_MFM_Block_1.webp",
    },
    {
      id: 3,
      name: "Ron, Vic",
      text:
        "Using the FreeStyle LibreLink app has freed me up to do more active pursuits, and it's so convenient that the reading is available all of the time",
      image: "/Ron_MFM_Block_1.webp",
    },
  ];

  // =========================
  // SLIDER
  // =========================
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="pageContainer">

      {/* ==================================================
          1. HERO SECTION
      ================================================== */}
      <section className="heroSection">

        <div className="textCircle">

          <h1>
            {landing?.pageTitle}
          </h1>

          <div className="yellowDivider"></div>

          <p>
            {landing?.heroDescription}
          </p>

        </div>

        {landing?.heroImage && (
          <img
            src={landing.heroImage}
            alt={landing?.pageTitle}
            className="heroImage"
          />
        )}

      </section>


      {/* ==================================================
          2. WORLDWIDE SECTION
      ================================================== */}
      <section className="worldwideSection">

        <div className="butterflyIcon">
          <div className="yellowShape"></div>
        </div>

        <div className="worldwideText">

          <h2>
            {landing?.worldwideTitle}
          </h2>

          <div className="yellowDivider"></div>

          <p>
            {landing?.worldwideDescription}
          </p>

        </div>

        {landing?.worldwideImage && (
          <img
            src={landing.worldwideImage}
            alt={landing?.worldwideTitle}
            className="worldwideImage"
          />
        )}

      </section>


      {/* ==================================================
          3. WHAT IS CGM
      ================================================== */}
      <section className="cgmSection">

        <h2>
          {landing?.cgmTitle}
        </h2>

        <p>
          {landing?.cgmDescription}
        </p>

        <div className="cgmImages">

          <div className="imageCircle">

            <img
              src={landing?.cgmImage1}
              alt={landing?.cgmImage1Alt}
            />

          </div>

          <div className="arrow">
            &rarr;
          </div>

          <div className="imageCircle">

            <img
              src={landing?.cgmImage2}
              alt={landing?.cgmImage2Alt}
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          4. IMPACT SECTION
      ================================================== */}
      <section className="impactSection">

        <div className="impactText">

          <h2>
            {landing?.impactTitle}
          </h2>

          <div className="yellowDivider"></div>

          <p>
            {landing?.impactDescription}
          </p>

        </div>

        <div className="impactImage">

          <img
            src={landing?.impactImage}
            alt={landing?.impactImageAlt}
          />

        </div>

      </section>


      {/* ==================================================
          5. PATH TO PROGRESS
      ================================================== */}
      <section className="progressSection">

        <h2>
          {landing?.progressTitle}
        </h2>

        <div className="whiteDivider"></div>

        <p className="progressSub">
          {landing?.progressDescription}
        </p>

        <div className="stepsContainer">

          {/* STEP 1 */}
          <div className="stepCard">

            <div className="stepIcon">

              <img
                src={landing?.progressStep1Image}
                alt={landing?.progressStep1ImageAlt}
              />

            </div>

            <h3>
              {landing?.progressStep1Title}
            </h3>

            <p>
              {landing?.progressStep1Description}
            </p>

          </div>


          {/* STEP 2 */}
          <div className="stepCard">

            <div className="stepIcon">

              <img
                src={landing?.progressStep2Image}
                alt={landing?.progressStep2ImageAlt}
              />

            </div>

            <h3>
              {landing?.progressStep2Title}
            </h3>

            <p>
              {landing?.progressStep2Description}
            </p>

          </div>


          {/* STEP 3 */}
          <div className="stepCard">

            <div className="stepIcon">

              <img
                src={landing?.progressStep3Image}
                alt={landing?.progressStep3ImageAlt}
              />

            </div>

            <h3>
              {landing?.progressStep3Title}
            </h3>

            <p>
              {landing?.progressStep3Description}
            </p>

          </div>


          {/* STEP 4 */}
          <div className="stepCard">

            <div className="stepIcon">

              <img
                src={landing?.progressStep4Image}
                alt={landing?.progressStep4ImageAlt}
              />

            </div>

            <h3>
              {landing?.progressStep4Title}
            </h3>

            <p>
              {landing?.progressStep4Description}
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          6. DISCOVER SECTION
      ================================================== */}
      <section className="discoverSection">

        <h2>
          {landing?.discoverTitle}
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="discoverContainer">

          <div className="discoverImageCircle">

            <img
              src={landing?.discoverImage}
              alt={landing?.discoverImageAlt}
            />

          </div>


          <div className="discoverContent">

            <p>
              {landing?.discoverDescription}
            </p>

            <ul className="featureList">

              <li>
                <span>A</span>
                {landing?.discoverFeatureA}
              </li>

              <li>
                <span>B</span>
                {landing?.discoverFeatureB}
              </li>

              <li>
                <span>C</span>
                {landing?.discoverFeatureC}
              </li>

              <li>
                <span>D</span>
                {landing?.discoverFeatureD}
              </li>

              <li>
                <span>E</span>
                {landing?.discoverFeatureE}
              </li>

              <li>
                <span>F</span>
                {landing?.discoverFeatureF}
              </li>

            </ul>

            <button className="exploreBtn">
              {landing?.discoverButtonText}
            </button>

          </div>

        </div>

      </section>


      {/* ==================================================
          7. FEATURES TABLE
      ================================================== */}
      <section className="featuresTableSection">

        <h2>
          {landing?.featuresTitle}
        </h2>

        <div className="yellowDividerCenter"></div>

        <table className="featuresTable">

          <thead>

            <tr>

              <th></th>

              <th>

                <div
                  className="tableHeaderImg"
                  style={{
                    backgroundImage: `url(${landing?.featuresProductImage})`,
                  }}
                ></div>

                <h3>
                  {landing?.featuresProductName}
                </h3>

                <a href="#">
                  {landing?.featuresLearnMoreText}
                </a>

              </th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                How long can I wear it?
              </td>

              <td>
                Up to 15 days
              </td>
            </tr>

            <tr>
              <td>
                How small is it?
              </td>

              <td>
                35mm x 5mm
              </td>
            </tr>

            <tr>
              <td>
                What age is eligible for use?
              </td>

              <td>
                Age 2 and over
              </td>
            </tr>

          </tbody>

        </table>

      </section>


      {/* ==================================================
          8. CONNECTED CARE
      ================================================== */}
      <section className="connectedSection">

        <h2>
          Connected care with your loved ones and healthcare team
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="connectedGrid">

          <div className="card">

            <img
              src="/LibreView_image.webp"
              alt="Family"
            />

            <h3>
              Help loved ones support you on your journey with LibreLinkUp.
            </h3>

            <p>
              Share your glucose data securely with family, friends, and
              caregivers to give them peace of mind.
            </p>

            <a href="#">
              Learn More
            </a>

          </div>


          <div className="card">

            <img
              src="/LibreView_image.webp"
              alt="Healthcare team"
            />

            <h3>
              Share insights with your healthcare team with LibreView.
            </h3>

            <p>
              Securely share your glucose data with your healthcare team to
              enable richer conversations.
            </p>

            <a href="#">
              Learn More
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          9. HELPFUL RESOURCES
      ================================================== */}
      <section className="resourcesSection">

        <h2>
          Helpful Resources
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="resourcesGrid">

          <div className="resourceCard">

            <img
              src="/LibreView_image.webp"
              alt="Video Guides"
            />

            <h3>
              Video Guides
            </h3>

            <p>
              Check out our library of helpful videos that will help you have
              the best experience with the Libre 2 system.
            </p>

            <a href="#">
              Learn More
            </a>

          </div>


          <div className="resourceCard">

            <img
              src="/LibreView_image.webp"
              alt="Customer Care"
            />

            <h3>
              Customer Care
            </h3>

            <p>
              Talk to our friendly customer service team if you need any help.
              Opening hours: 8AM - 7PM AEDT Monday - Friday (Closed on public
              holidays).
            </p>

            <a href="#">
              Contact Us
            </a>

          </div>


          <div className="resourceCard">

            <img
              src="/LibreView_image.webp"
              alt="Getting started"
            />

            <h3>
              Getting started
            </h3>

            <p>
              See how easy it is to apply and use Libre 2 system for the first
              time and gain valuable insights into your glucose trends.
            </p>

            <a href="#">
              Learn the basics
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          10. TESTIMONIALS
      ================================================== */}
      <section className="testimonialsSection">

        <h2>
          Real experiences, shared by real people
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="testimonialSlider">

          <button
            className="sliderBtn prev"
            onClick={prevSlide}
          >
            &#10094;
          </button>


          <div className="testimonialContent">

            <div className="testimonialImage">

              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
              />

            </div>


            <div className="testimonialTextWrap">

              <div className="butterflyQuoteIcon"></div>

              <p className="quoteText">
                "{testimonials[currentSlide].text}"
              </p>

              <p className="quoteAuthor">
                {testimonials[currentSlide].name}
              </p>

            </div>

          </div>


          <button
            className="sliderBtn next"
            onClick={nextSlide}
          >
            &#10095;
          </button>

        </div>


        <div className="sliderDots">

          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}

        </div>

      </section>


      {/* ==================================================
          SUBSCRIBE
      ================================================== */}
      <section className="last">

        <div className="last">

          <SubscribeForm />

        </div>

      </section>

    </div>
  );
}
