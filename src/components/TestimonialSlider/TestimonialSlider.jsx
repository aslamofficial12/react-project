"use client";

import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    image: "/Ron_MFM_Block_1.webp",
    quote: "“Using the FreeStyle LibreLink app has freed me up to do more active pursuits, and it’s so convenient that the reading is available all of the time”",
    author: "Ron, Vic",
  },
  {
    image: "/Shawn_MFM_Block.webp",
    quote: "“I have made the decision to prioritise my health and I see my monthly subscription as an investment in my future… I encourage anyone thinking about a subscription to seriously consider it – you are worth it”",
    author: "Shawn, NSW",
  },
  {
    image: "/Rachel_MFM_Block.webp",
    quote: "“I can’t describe how amazing wearing a CGM makes my life. Thank you for assisting me to live my best life”",
    author: "Rachel, NSW",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentItem = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container text-center">
        <h2>Real experiences, shared by real people</h2>
        <div className="yellow-underline"></div>

        <div className="testimonial-wrapper">
          <button className="nav-arrow left" onClick={handlePrev} aria-label="Previous testimonial">
            &lt;
          </button>

          <div className="testimonial-content">
            <div className="author-photo">
              <img 
                src={currentItem.image} 
                alt={currentItem.author} 
              />
            </div>
            <div className="author-quote">
              <div className="butterfly-logo">🦋</div>
              <blockquote>{currentItem.quote}</blockquote>
              <div className="yellow-underline-small"></div>
              <h5>{currentItem.author}</h5>
              <div className="yellow-underline-small"></div>
            </div>
          </div>

          <button className="nav-arrow right" onClick={handleNext} aria-label="Next testimonial">
            &gt; <span className="next-text">NEXT</span>
          </button>
        </div>

        {/* Dynamic Slider Indicator Bars */}
        <div className="slider-indicators">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`line ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}