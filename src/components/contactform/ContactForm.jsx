'use client';

import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    preferredContact: '---None---',
    productName: '---None---',
    supportType: '---None---',
    supportRequest: '',
    isRobot: false,
    agreePolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Contact Us Form</h2>
        <p>Complete this form to send us your enquiry.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-row three-cols">
          <div className="form-group">
            <label htmlFor="city">City/Town</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal/ZipCode</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="preferredContact">Preferred Contact Method</label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
          >
            <option value="---None---">---None---</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="productName">Product Name*</label>
            <select
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            >
              <option value="---None---">---None---</option>
              <option value="FreeStyle Freedom Lite">FreeStyle Freedom Lite</option>
              <option value="FreeStyle Libre 2">FreeStyle Libre 2</option>
              <option value="FreeStyle LibreLink">FreeStyle LibreLink</option>
              <option value="FreeStyle Optium Neo">FreeStyle Optium Neo</option>
              <option value="LibreLink Up">LibreLink Up</option>
              <option value="LibreView">LibreView</option>
              <option value="Other">Other</option>
              <option value="FreeStyle Libre 2 Plus Sensor">FreeStyle Libre 2 Plus Sensor</option>
              <option value="FreeStyle Libre 3 Plus Sensor">FreeStyle Libre 3 Plus Sensor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="supportType">Support Type*</label>
            <select
              id="supportType"
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
            >
              <option value="---None---">---None---</option>
              <option value="Complaint">Complaint</option>
              <option value="Enquiry">Enquiry</option>
              <option value="Suggestion">Suggestion</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="supportRequest">Please briefly describe your support request*</label>
          <textarea
            id="supportRequest"
            name="supportRequest"
            rows="5"
            value={formData.supportRequest}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group full-width">
          <label>Attach Files</label>
          <div className="file-upload-box">
            <button type="button" className="upload-btn">
              📤 Upload Files
            </button>
            <span className="drop-text">Or drop files</span>
          </div>
        </div>

        {/* Simulated reCAPTCHA Widget */}
        <div className="form-group full-width recaptcha-group">
          <div className="recaptcha-box">
            <label className="checkbox-label" htmlFor="isRobot">
              <input
                type="checkbox"
                id="isRobot"
                name="isRobot"
                checked={formData.isRobot}
                onChange={handleChange}
                required
              />
              I&apos;m not a robot
            </label>
            <div className="recaptcha-logo">
              <div className="recaptcha-spinner">🔄</div>
              <span>reCAPTCHA</span>
              <small>Privacy - Terms</small>
            </div>
          </div>
        </div>

        <div className="form-group full-width">
          <label className="checkbox-label policy-label" htmlFor="agreePolicy">
            <input
              type="checkbox"
              id="agreePolicy"
              name="agreePolicy"
              checked={formData.agreePolicy}
              onChange={handleChange}
              required
            />
            I have read and agreed to the <a href="#privacy" className="privacy-link">Privacy Policy</a>*
          </label>
        </div>

        <div className="form-submit-wrapper">
          <button type="submit" className="submit-btn">SUBMIT</button>
        </div>
      </form>

      <div className="form-footer-version">ADC-110697 V2.0</div>
    </div>
  );
}