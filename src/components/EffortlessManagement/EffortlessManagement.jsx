"use client";

import React, { useState } from "react";
import "./EffortlessManagement.css";

const cardsData = [
  {
    image: "/Card_Image.webp",
    title: "No more finger pricks.",
  },
  {
    image: "/you_might_like2.webp",
    title: "Real time glucose monitoring.",
  },
  {
    image: "/you_might_like3.webp",
    title: "Renewed peace of mind.",
  },
  {
    image: "/connected.webp",
    title: "Connected data for collaborative care.",
  },
  {
    image: "/Ron_MFM_Block_1.webp",
    title: "Be confident in your progress.",
  },
];

export default function EffortlessManagement() {
  const [activeButton, setActiveButton] = useState("What is the Libre system?");

  return (
    <section className="effortless-section">
      <div className="container text-center">
        <h2>Glucose management made effortless</h2>
        <div className="yellow-underline"></div>

        {/* Toggle Button */}
        <div className="effortless-toggle-wrapper">
          <button 
            className={`toggle-pill ${activeButton === "What is the Libre system?" ? "active" : ""}`}
            onClick={() => setActiveButton("What is the Libre system?")}
          >
            What is the Libre system?
          </button>
        </div>

        {/* 5 Cards Scrollable/Grid Layout */}
        <div className="effortless-grid">
          {cardsData.map((item, index) => (
            <div className="effortless-card" key={index}>
              <div className="effortless-img-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="card-gradient-overlay"></div>
                <div className="card-arrow-icon">&gt;</div>
              </div>
              <h4 className="effortless-card-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}