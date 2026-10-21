"use client";

import React from "react";
import "./Recommendations.css";

const recommendationsData = [
  {
    image: "/Card_Image.webp",
    title: "Product Support",
    description: "We have all the information you need to have a great experience with the Libre 2 system, including videos, product manuals and FAQs.",
    linkText: "Access Support",
    linkHref: "#",
  },
  {
    image: "/you_might_like2.webp",
    title: "Getting started",
    description: "See how easy it is to apply and use the Libre 2 system for the first time and gain valuable insights into your glucose trends.",
    hasSup: true,
    linkText: "Learn The Basics",
    linkHref: "#",
  },
  {
    image: "/you_might_like3.webp",
    title: "Trial Libre 2 Plus for $15",
    titleSup: "52",
    description: "The $15 trial is the perfect way to experience the Libre 2 Plus sensor for the first time.",
    linkText: "Trial Here",
    linkHref: "#",
  },
];

export default function Recommendations() {
  return (
    <section className="recommendations-section">
      <div className="container text-center">
        <h2>You might also like:</h2>
        <div className="yellow-underline"></div>

        <div className="grid-3 recommendations-grid">
          {recommendationsData.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>
                {index === 1 ? (
                  <>Getting started</>
                ) : index === 2 ? (
                  <>Trial Libre 2 Plus<sup>52</sup> for $15</>
                ) : (
                  item.title
                )}
              </h3>
              <p>
                {index === 1 ? (
                  <>
                    See how easy it is to apply<sup>4,20</sup> and use<sup>4</sup> the Libre 2 system for the first time and gain valuable insights into your glucose trends.
                  </>
                ) : (
                  item.description
                )}
              </p>
              <a href={item.linkHref} className="link-blue">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}