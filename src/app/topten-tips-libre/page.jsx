"use client";

import { useEffect, useState } from "react";
import SubscribeForm from "../../components/SubscribeForm";
import "./styles.css";

export default function LibreTipsPage() {
  const [pageData, setPageData] = useState(null);
  const [tips2, setTips2] = useState([]);

  // Fetch Page API
  useEffect(() => {
    fetch("/api/freeStyleLibrePage")
      .then((response) => response.json())
      .then((data) => {
        console.log("PAGE API DATA:", data);
        setPageData(data);
      });
  }, []);

  // Fetch Tips API
  useEffect(() => {
    fetch("/api/freeStyleLibreTip")
      .then((response) => response.json())
      .then((data) => {
        console.log("TIP API DATA:", data);
        setTips2(data);
      });
  }, []);

  return (
    <div className="head">
    <div className="page-container">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        🏠 <span>&gt;</span>{" "}
        {pageData?.data?.[0]?.breadcrumbText}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{pageData?.data?.[0]?.pageTitle}</h1>
        </div>

        <div className="hero-image-container">
          <img
            src={pageData?.data?.[0]?.heroImage}
            alt={pageData?.data?.[0]?.heroImageAlt || "Hero"}
            className="hero-image"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>{pageData?.data?.[0]?.introTitle}</h2>
        <div className="yellow-divider"></div>
        <p>{pageData?.data?.[0]?.introText}</p>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        {tips2.map((tip, index) => (
          <div
            key={tip.tipNumber || index}
            className={`tip-row ${
              tip.imageLeft ? "" : "row-reverse"
            }`}
          >
            {/* Tip Image */}
            <div className="tip-image-wrapper">
              <img
                src={tip.image}
                alt={tip.imageAlt || tip.title}
                className="tip-img"
              />
            </div>

            {/* Tip Content */}
            <div className="tip-content">
              <h3>{tip.title}</h3>
              <div className="yellow-divider"></div>
              <p>{tip.description}</p>

              {tip.buttonText && (
                <a
                  href={tip.buttonLink || "#"}
                  className="dark-btn"
                >
                  {tip.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Text */}
      <div className="footer-note">
        <p>{pageData?.data?.[0]?.footerNote}</p>
      </div>

     

    </div>
     <section className="last">
        <SubscribeForm />
      </section>
    </div>
  );
}