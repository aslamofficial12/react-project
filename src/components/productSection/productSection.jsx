import React from "react";
import "./productSection.css";

const products = [
  {
    title: "FreeStyle LibreLink App",
    description:
      "With the FreeStyle LibreLink app, glucose data is sent straight to your phone, every single minute, with no scanning required.",
    subDescription:
      "Full of reports, information and insights, FreeStyle LibreLink is the ultimate way to monitor your glucose.",
    image: "/images/librelink-app.png",
    apps: true,
    fullWidth: true,
  },
  {
    title: "LibreView",
    description:
      "LibreView is a secure, cloud-based diabetes management system that gives you and your healthcare professionals clear, easy-to-understand reports from the FreeStyle Libre 2 system.",
    image: "/images/libreview.png",
  },
  {
    title: "LibreLinkUp App",
    description:
      "Available for iPhone and Android. With LibreLinkUp, get glucose readings sent to your phone from family and friends who use the FreeStyle LibreLink app. Ideal for parents and caregivers.",
    image: "/images/librelinkup.png",
    apps: true,
  },
];

function AppButtons() {
  return (
    <div className="app-buttons">
      <img
        src="/images/app-store.png"
        alt="Download on App Store"
      />

      <img
        src="/images/google-play.png"
        alt="Get it on Google Play"
      />
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div
      className={`product-card ${
        product.fullWidth ? "full-width-card" : ""
      }`}
    >
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-content">
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        {product.subDescription && (
          <p>{product.subDescription}</p>
        )}

        {product.apps && <AppButtons />}

        <button className="learn-btn">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className="products-section">
      <ProductCard product={products[0]} />

      <div className="bottom-grid">
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
      </div>
    </section>
  );
}