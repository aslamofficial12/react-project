"use client";
import React from 'react';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function OrderTrackingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission/tracking logic here
  };

  return (
    <>
      <div className="tracking-container">
        {/* Main Title */}
        <h1 className="tracking-title">Retrieve Order Tracking Information</h1>

        {/* Description / Instructions */}
        <p className="tracking-desc">
          For security reasons please enter some details related to your order so
          that we can provide tracking information.
        </p>

        <p className="tracking-desc note-text">
          Please note that items sent for dispatch may take 12-24 hours to appear
          in the tracking system. If the tracking system does not display your
          order yet, please check back again later.
        </p>

        <hr className="tracking-divider" />

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="tracking-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Order E-mail Address
            </label>
            <input type="email" id="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="orderId" className="form-label">
              Order ID
            </label>
            <input type="text" id="orderId" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="postcode" className="form-label">
              Order Ship Postcode
            </label>
            <input type="text" id="postcode" className="form-input" required />
          </div>

          <button type="submit" className="track-btn">
            Track Order
          </button>
        </form>

        {/* Document Code Footer */}
        <footer className="tracking-footer">
          <span>ADC-110852 V1.0</span>
        </footer>
      </div>
      <SubscribeForm />

    </>
  );
}