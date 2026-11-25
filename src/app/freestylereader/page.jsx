"use client"
import React, { useState, useEffect } from "react";
import "./style.css";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description"); // 'description' or 'specifications'
  const [products, setProducts] = useState(null);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };



  useEffect(() => {
    async function fetchProduct() {
      try {
        const url =
          "/api/product?productKey=freeStyle-libre-2-plus-reader";

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch product");
        }

        const productData = data;

        if (!productData?.masterData?.current) {
          console.error("Product data is missing:", data);
          return;
        }

        setProducts(productData);

        // Store product ID in sessionStorage
        const productIdReader = productData.id;
        console.log("master data:", data.masterData)

        sessionStorage.setItem("productId reader", productIdReader);

        console.log("Stored Product ID freestyleReader :", productIdReader);
        console.log("total product details", data);

      } catch (error) {
        console.error("API fetch error:", error);
      }
    }

    fetchProduct();
  }, []);

  //  const current = products?.masterData?.current;
  //   const price =current.masterVariant.prices[0].value.centAmount / 100;
  //  if (!current) {
  //   return <p>Loading product details...</p>;
  // }



  // const current = products?.masterData?.current;

  // const price = current.masterVariant.prices[0].value.centAmount / 100;

  // if (!current) {
  //   return <p>Loading product details...</p>;
  // }
  const current = products?.masterData?.current;

  if (!current) {
    return <p>Loading product details...</p>;
  }

  const prices = current.masterVariant?.prices;

  if (!prices || prices.length === 0) {
    return <p>Price not available</p>;
  }

  const priceData = prices[0].value;

  const price =
    priceData.centAmount /
    Math.pow(10, priceData.fractionDigits);









  return (


    <div className="pdp-container">




      {/* Breadcrumb Navigation */}
      <nav className="pdp-breadcrumb">
        <a href="/" className="home-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <span className="separator">&gt;</span>

        <span className="current-page">{current.name["en-GB"] || "loading"} welcome</span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="pdp-main-grid">

        <div className="pdp-image-col">
          <div className="pdp-image-wrapper">
            <img
              src="/fsl2-r_result_6.2mmol_12hr_en_jpg.webp"
              alt="FreeStyle Libre 2 Reader"
              className="pdp-main-img"
            />
          </div>
        </div>

        {/* Right Column: Details and Purchase */}
        <div className="pdp-details-col">
          <h1 className="pdp-title">{current.name["en-GB"]}</h1>
          <div className="pdp-price">${price.toFixed(2)}</div>

          <div className="pdp-purchase-row">
            <div className="quantity-selector">
              <button
                type="button"
                className="qty-btn"
                onClick={handleDecrease}
              >
                −
              </button>
              <input
                type="text"
                className="qty-input"
                value={quantity}
                readOnly
              />
              <button
                type="button"
                className="qty-btn"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <button type="button" className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>

          <p className="pdp-note-text">
            <strong>Note:</strong> The Libre 2 reader works with both Libre 2
            sensors, and Libre 2 Plus sensors.
          </p>

          <p className="pdp-description-text">
            The Libre 2 reader displays the glucose data collected by the Libre
            2 or Libre 2 Plus sensor. An easy 1-second scan shows the current
            glucose reading, the latest 8 hours of glucose data and a trend
            arrow showing if glucose levels are going up, down or changing
            slowly.
          </p>

          <p className="pdp-description-text">
            Get glucose readings sent straight to your phone with the FreeStyle
            LibreLink<sup>12</sup> app. No more scanning. To get readings sent
            straight to your phone, you must start each sensor with the
            FreeStyle LibreLink<sup>12</sup> app. To ensure you have a
            compatible phone, check our{" "}
            <a href="#compatibility" className="pdp-link">
              compatibility guide
            </a>
            .
          </p>

          <h3 className="pdp-subheading">
            FreeStyle LibreLink<sup>12</sup>
          </h3>

          {/* Accordions */}
          <div className="pdp-accordion-group">
            {/* Description Tab */}
            <div className="accordion-item">
              <button
                type="button"
                className={`accordion-header ${openSection === "description" ? "active" : ""
                  }`}
                onClick={() => toggleAccordion("description")}
              >
                <span>Description</span>
                <span className="accordion-toggle-icon">
                  {openSection === "description" ? "−" : "+"}
                </span>
              </button>

              {openSection === "description" && (
                <div className="accordion-content">
                  <p>
                    The FreeStyle Libre 2 Flash Glucose Monitoring System is
                    indicated for measuring interstitial fluid glucose levels
                    in people (age 4 and older) with insulin-requiring diabetes
                    mellitus. The indication for children (age 4 - 17) is
                    limited to those who are supervised by a caregiver who is
                    at least 18 years of age.
                  </p>
                </div>
              )}
            </div>

            {/* Specifications Tab */}
            <div className="accordion-item">
              <button
                type="button"
                className={`accordion-header ${openSection === "specifications" ? "active" : ""
                  }`}
                onClick={() => toggleAccordion("specifications")}
              >
                <span>Specifications</span>
                <span className="accordion-toggle-icon">
                  {openSection === "specifications" ? "−" : "+"}
                </span>
              </button>

              {openSection === "specifications" && (
                <div className="accordion-content no-padding">
                  <table className="specifications-table">
                    <tbody>
                      <tr>
                        <td className="spec-label">Product Cms block</td>
                        <td className="spec-value">Please select block</td>
                      </tr>
                      <tr>
                        <td className="spec-label">Specifications</td>
                        <td className="spec-value"></td>
                      </tr>
                      <tr>
                        <td className="spec-label">Product List Description</td>
                        <td className="spec-value note-color">
                          Note: The FreeStyle Libre 2 reader works with both
                          FreeStyle Libre 2 sensors, and FreeStyle Libre 2 Plus
                          sensors.
                        </td>
                      </tr>
                      <tr>
                        <td className="spec-label">
                          Product Indication Statements
                        </td>
                        <td className="spec-value note-color">
                          The FreeStyle Libre 2 Flash Glucose Monitoring System
                          is indicated for measuring interstitial fluid glucose
                          levels in people (age 4 and older) with
                          insulin-requiring diabetes mellitus. The indication for
                          children (age 4 - 17) is limited to those who are
                          supervised by a caregiver who is at least 18 years of
                          age.
                        </td>
                      </tr>
                      <tr>
                        <td className="spec-label">Is Redirect</td>
                        <td className="spec-value">No</td>
                      </tr>
                      <tr>
                        <td className="spec-label">Is Mobile App</td>
                        <td className="spec-value">No</td>
                      </tr>
                      <tr>
                        <td className="spec-label">
                          Hide Redirect Button On Pdp
                        </td>
                        <td className="spec-value">No</td>
                      </tr>
                      <tr>
                        <td className="spec-label">Is Custom Bundle Layout</td>
                        <td className="spec-value">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Video Banner Section */}
      <section className="yellow-promo-section">
        <h2 className="promo-title">
          Now available - The Libre 2 Plus sensor
        </h2>
        <div className="promo-accent-line"></div>
        <p className="promo-description">
          The Libre 2 Plus is everything you love about the Libre 2 sensor and
          more. More wear time, better accuracy,<sup>76</sup> and for the first
          time in Australia, integration with authorised, compatible insulin
          pumps. Meet the latest innovation to the Libre 2 system.
        </p>

        <div className="promo-video-card">
          <img
            src="/Meet_FSL2P_Video_Thumb_3.webp"
            alt="Libre 2 Plus Sensor Video Preview"
            className="promo-thumb-img"
          />
        </div>

        <button type="button" className="promo-btn-dark">
          Libre 2 Plus
        </button>
      </section>
    </div>
  );
}