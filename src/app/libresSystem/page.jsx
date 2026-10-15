"use client";

import React, { useState, useEffect } from "react";
import "./styles.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function FreeStyleLibrePage() {
  // =========================
  // API DATA - LANDING
  // =========================
  const [landing, setLanding] = useState(null);

  // =========================
  // API DATA - SECOND CONTENT TYPE
  // =========================
  const [pageContent, setPageContent] = useState(null);

  // =========================
  // API DATA - THIRD CONTENT TYPE
  // TESTIMONIALS
  // =========================
  const [testimonials, setTestimonials] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // =========================
  // SLIDER STATE
  // =========================
  const [currentSlide, setCurrentSlide] = useState(0);

  // =========================
  // FETCH ALL 3 API DATA
  // =========================
  useEffect(() => {
    setLoading(true);

    Promise.all([
      // FIRST CONTENT TYPE
      fetch("/api/libresystem").then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch landing data");
        }

        return res.json();
      }),

      // SECOND CONTENT TYPE
      fetch("/api/libresystem2").then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch page content");
        }

        return res.json();
      }),

      // THIRD CONTENT TYPE - TESTIMONIALS
      fetch("/api/testimonial").then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        return res.json();
      }),
    ])
      .then(([landingData, contentData, testimonialData]) => {
        console.log("Landing API data:", landingData);
        console.log("Second Content Type data:", contentData);
        console.log("Testimonial API data:", testimonialData);

        setLanding(landingData);
        setPageContent(contentData);

        // =========================
        // FILTER ACTIVE TESTIMONIALS
        // active comes as STRING "true"
        // =========================
        const activeTestimonials = testimonialData
          .filter((item) => item.active === "true")
          .sort(
            (a, b) =>
              Number(a.sortOrder || 0) -
              Number(b.sortOrder || 0)
          );

        setTestimonials(activeTestimonials);
        setCurrentSlide(0);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // =========================
  // RESET SLIDE
  // =========================
  useEffect(() => {
    setCurrentSlide(0);
  }, [testimonials]);

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
  if (!landing || !pageContent) {
    return null;
  }

  // =========================
  // SLIDER
  // =========================
  const nextSlide = () => {
    if (testimonials.length === 0) return;

    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;

    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="pageContainer">

      {/* ==================================================
          1. HERO SECTION
      ================================================== */}
      {/* <section className="heroSection">

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

      </section> */}



<section className="heroSection">
  {landing?.heroImage && (
    <div className="heroImageWrap">
      <img
        src={landing.heroImage}
        alt={landing?.pageTitle}
        className="heroImage"
      />
    </div>
  )}

  <div className="textCircle">
    <h1>{landing?.pageTitle}</h1>
    <div className="yellowDivider"></div>
    <p>{landing?.heroDescription}</p>
  </div>
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
          SECOND CONTENT TYPE
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

                <a href={pageContent?.featuresLearnMoreUrl}>
                  Learn More
                </a>

              </th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                {pageContent?.feature1Name}
              </td>

              <td>
                {pageContent?.feature1Value}
              </td>
            </tr>

            <tr>
              <td>
                {pageContent?.feature2Name}
              </td>

              <td>
                {pageContent?.feature2Value}
              </td>
            </tr>

            <tr>
              <td>
                {pageContent?.feature3Name}
              </td>

              <td>
                {pageContent?.feature3Value}
              </td>
            </tr>

          </tbody>

        </table>

      </section>


      {/* ==================================================
          8. CONNECTED CARE
          SECOND CONTENT TYPE
      ================================================== */}
      <section className="connectedSection">

        <h2>
          {pageContent?.connectedCareTitle}
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="connectedGrid">

          {/* CONNECTED CARD 1 */}
          <div className="card">

            <img
              src={pageContent?.connectedCard1Image}
              alt={pageContent?.connectedCard1ImageAlt}
            />

            <h3>
              {pageContent?.connectedCard1Title}
            </h3>

            <p>
              {pageContent?.connectedCard1Description}
            </p>

            <a href={pageContent?.connectedCard1LinkUrl}>
              {pageContent?.connectedCard1LinkText}
            </a>

          </div>


          {/* CONNECTED CARD 2 */}
          <div className="card">
            <img
              src={pageContent?.connectedCard1Image}
              alt={pageContent?.connectedCard1ImageAlt}
            />

            {/* <img
              src="/LibreView_image.webp"
              alt="Healthcare team"
            /> */}

            <h3>hellow
              {pageContent?.connectedCard2Title}
              {/* Share insights with your healthcare team with LibreView. */}
            </h3>

            <p>
              {pageContent?.connectedCard2Description}
              {/* Securely share your glucose data with your healthcare team to
              enable richer conversations. */}
            </p>

            <a href="#">
              {pageContent?.connectedCard2LinkText}
              {/* Learn More welcome */}
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          9. HELPFUL RESOURCES
          SECOND CONTENT TYPE
      ================================================== */}
      <section className="resourcesSection">

        <h2>
          {pageContent?.resourcesTitle}
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="resourcesGrid">

          {/* RESOURCE 1 */}
          <div className="resourceCard">

            <img
              src={pageContent?.resource1Image}
              alt={pageContent?.resource1ImageAlt}
            />

            <h3>
              {pageContent?.resource1Title}
            </h3>

            <p>
              {pageContent?.resource1Description}
            </p>

            <a href={pageContent?.resource1LinkUrl}>
              {pageContent?.resource1LinkText}
            </a>

          </div>


          {/* RESOURCE 2 */}
          <div className="resourceCard">

            <img
              src={pageContent?.resource2Image}
              alt={pageContent?.resource2ImageAlt}
            />

            <h3>
              {pageContent?.resource2Title}
            </h3>

            <p>
              {pageContent?.resource2Description}
            </p>

            <a href={pageContent?.resource2LinkUrl}>
              {pageContent?.resource2LinkText}
            </a>

          </div>


          {/* RESOURCE 3 */}
          <div className="resourceCard">

            <img
              src={pageContent?.resource3Image}
              alt={pageContent?.resource3ImageAlt}
            />

            <h3>
              {pageContent?.resource3Title}
            </h3>

            <p>
              {pageContent?.resource3Description}
            </p>

            <a href={pageContent?.resource3LinkUrl}>
              {pageContent?.resource3LinkText}
            </a>

          </div>

        </div>

      </section>


      {/* ==================================================
          10. TESTIMONIALS
          THIRD CONTENT TYPE
      ================================================== */}
      <section className="testimonialsSection">

        <h2>
          {pageContent?.testimonialsTitle} 
        </h2>

        <div className="yellowDividerCenter"></div>

        <div className="testimonialSlider">

          <button
            className="sliderBtn prev"
            onClick={prevSlide}
          >
            &#10094;
          </button>


          {testimonials.length > 0 && (
            <div className="testimonialContent">

              <div className="testimonialImage">

                <img
                  src={testimonials[currentSlide]?.image || ""}
                  alt={testimonials[currentSlide]?.imageAltText || ""}
                />

              </div>

              <div className="testimonialTextWrap">

                <div className="butterflyQuoteIcon"></div>

                <p className="quoteText">
                  "{testimonials[currentSlide]?.testimonialText}"
                </p>

                <p className="quoteAuthor">
                  {testimonials[currentSlide]?.Name}
                </p>

              </div>

            </div>
          )}


          {testimonials.length === 0 && (
            <div className="testimonialContent">
              <p>No testimonials available.</p>
            </div>
          )}


          <button
            className="sliderBtn next"
            onClick={nextSlide}
          >
            &#10095;
          </button>

        </div>


        {/* SLIDER DOTS */}
        {testimonials.length > 0 && (
          <div className="sliderDots">

            {testimonials.map((testimonial, index) => (
              <span
                key={testimonial.id}
                className={`dot ${index === currentSlide ? "active" : ""
                  }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}

          </div>
        )}

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