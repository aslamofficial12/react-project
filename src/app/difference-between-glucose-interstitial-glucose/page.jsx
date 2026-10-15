"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function GlucoseComparisonPage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/interstitialGlucose");

        if (!response.ok) {
          throw new Error("Failed to fetch page content.");
        }

        const data = await response.json();

        // Handle either a direct object or an API response with a data property.
        const content = data?.data ?? data;

        if (!content || !content.heroHeading) {
          throw new Error("Page content is missing or invalid.");
        }

        setPageData(content);
      } catch (err) {
        console.error("Error fetching glucose comparison page:", err);
        setError(err.message || "Unable to load page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <p>Loading page content...</p>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <p>{error || "Page content is unavailable."}</p>
        </div>
      </div>
    );
  }

  // Support bullet points stored as JSON strings or arrays.
  const parseBulletPoints = (value) => {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    return [];
  };

  const bloodGlucoseBullets = parseBulletPoints(
    pageData.bloodGlucoseBulletPoints
  );

  const sensorSystemBullets = parseBulletPoints(
    pageData.sensorSystemBulletPoints
  );

  const trainCards = [
    {
      heading: pageData.stableCardHeading,
      description: pageData.stableCardDescription,
      image: pageData.stableCardImage,
      imageAlt: pageData.stableCardImageAlt,
    },
    {
      heading: pageData.risingCardHeading,
      description: pageData.risingCardDescription,
      image: pageData.risingCardImage,
      imageAlt: pageData.risingCardImageAlt,
    },
    {
      heading: pageData.fallingCardHeading,
      description: pageData.fallingCardDescription,
      image: pageData.fallingCardImage,
      imageAlt: pageData.fallingCardImageAlt,
    },
  ];

  return (
    <div className="page-wrapper">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>{pageData.heroHeading}</h1>

            <p>{pageData.heroDescription}</p>
          </div>

          <div className="hero-image-container">
            <div className="circle-image-mask">
              {pageData.heroImage && (
                <img
                  src={pageData.heroImage}
                  alt={
                    pageData.heroImageAlt ||
                    "Woman using a FreeStyle Libre glucose sensor"
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sensor vs Blood Glucose Section */}
      <section className="section train-section">
        <div className="container">
          <h2>{pageData.trainSectionHeading}</h2>

          <div className="intro-text">
            <p>{pageData.introParagraph1}</p>
            <p>{pageData.introParagraph2}</p>
            <p>{pageData.introParagraph3}</p>
          </div>

          <div className="train-grid">
            {trainCards.map((card, index) => (
              <div className="train-card" key={card.heading || index}>
                <div className="graphic-container">
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.imageAlt || card.heading || "Glucose levels"}
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="card-divider" />

                <h3>{card.heading}</h3>

                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comparison Section */}
      <section className="section comparison-section">
        <div className="container">
          <h2>{pageData.comparisonSectionHeading}</h2>

          <div className="comparison-grid">
            {/* Blood Glucose */}
            <div className="comparison-col">
              <h3>
                {pageData.bloodGlucoseHeading ||
                  "Traditional Blood Glucose Monitoring"}
              </h3>

              <p className="col-desc">
                {pageData.bloodGlucoseDescription}
              </p>




              {/* 
              
              
              
              
              
              
              
              
              */}




 <ul>
    {bloodGlucoseBullets.map((bullet, index) => (
      <li key={index}>
        {typeof bullet === "string"
          ? bullet
          : bullet.text || bullet.description || ""}
      </li>
    ))}

    <li>
      {pageData.option1}
      {/* A lancet is inserted to reach the blood in the capillary. */}
    </li>

    <li>
      {pageData.option2}
      {/* A finger prick only provides one measurement at one point in time. */}
    </li>

    <li>
      {pageData.option3}
      {/* Requires a whole kit: lancets (finger pricker), blood glucose strips, and blood glucose reader. */}
    </li>
  </ul>













            </div>

            {/* Sensor Glucose */}
            <div className="comparison-col">
              <h3>
                {pageData.sensorSystemHeading ||
                  "The FreeStyle Libre 2 Plus system"}
              </h3>

              <p className="col-desc">
                {pageData.sensorSystemDescription}
              </p>

              {/* {sensorSystemBullets.length > 0 && (
                <ul>
                  {sensorSystemBullets.map((bullet, index) => (
                    <li key={index}>
                      {typeof bullet === "string"
                        ? bullet
                        : bullet.text || bullet.description || ""}
                    </li>
                  ))}
                </ul>
              )} */}






<ul>
    {sensorSystemBullets.map((bullet, index) => (
      <li key={index}>
        {typeof bullet === "string"
          ? bullet
          : bullet.text || bullet.description || ""}
      </li>
    ))}

    <li>
      {pageData.option4}

    </li>

    <li>
      {pageData.option5}
      
    </li>

    <li>
      {pageData.option6}
      
    </li>
  </ul>


            </div>
          </div>
        </div>
      </section>

      {/* 4. Video Section */}
      <section className="section video-section">
        <div className="container">
          <h2>
            {pageData.videoSectionHeading ||
              "Glucose reading vs sensor reading"}
          </h2>

          <p className="section-subtitle">
            {pageData.videoSubtitle}
          </p>

          {pageData.videoUrl &&
            pageData.videoUrl !== "#" && (
              <div className="video-frame">
                <iframe
                  src={pageData.videoUrl}
                  title={
                    pageData.videoTitle ||
                    "How the glucose sensor measures glucose"
                  }
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}

          {pageData.documentReference && (
            <div className="doc-reference">
              {pageData.documentReference}
            </div>
          )}
        </div>
      </section>

      {/* 5. Subscribe Section */}
      <section className="last">
        <div className="lastsection">
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
}