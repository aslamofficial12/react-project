'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import ContactForm from '../../components/contactform/ContactForm';
import SubscribeForm from '../../components/SubscribeForm';

export default function ContactPage() {
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
    <div className="contact-page-container">
      {/* Header / Hero Section */}
{/* Header / Hero Section */}
      <header className="contact-header">
        <div className="header-content">
          <div className="title-area">
            <h1>Contact Us</h1>
            <div className="yellow-underline"></div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/My_Freestyle_Moments-Desktop_1.webp"
              alt="Freestyle Moments"
              width={350}
              height={350}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </header>

      {/* Sensor Support Banner Section */}
      <section className="sensor-support-section">
        <div className="sensor-card">
          <div className="sensor-illustration">
            <Image
              src="/gl-free-trial-young-man-pointing.webp"
              alt="Young man pointing"
              width={220}
              height={180}
            />
          </div>
          <div className="sensor-info">
            <h2>Need help with your sensor?</h2>
            <div className="small-yellow-underline"></div>
            <p>
              If your sensor has fallen off or you&apos;ve received a sensor error message, submit a sensor support request.
            </p>
            <button className="submit-request-btn">Submit Request</button>
          </div>
        </div>
      </section>

      {/* We're Here To Help Section */}
      <section className="help-section">
        <h2>We are here to help</h2> {/* or We're here to help */}
    
        <div className="small-yellow-underline"></div>
        <p className="help-subtitle">
          You can contact FreeStyle Customer Care by selecting an option below.
        </p>

        <div className="help-cards-grid">
          {/* Email Card */}
          <div className="help-card">
            <div className="card-icon-circle">
              <span className="dot-icon">✉</span>
            </div>
            <h3>Connect with us.</h3>
            <p className="card-desc">We can be reached via email.</p>
            <p className="card-contact-info">
              Email <a href="mailto:adc.cs.au@abbott.com">adc.cs.au@abbott.com</a>
            </p>
          </div>

          {/* Call Card */}
          <div className="help-card">
            <div className="card-icon-circle">
              <Image
                src="/Icon_Question_Mark_Lar.webp"
                alt="Question mark"
                width={28}
                height={28}
              />
            </div>
            <h3>Call us.</h3>
            <p className="card-desc">Opening hours: 8am 7pm AEDT Mon Fri<br />(closed on Public Holidays)</p>
            <p className="card-contact-info">
              Phone <span className="phone-number">1800 801 478</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="form-section-wrapper">
        

        <ContactForm />

        <SubscribeForm />
      </section>
    </div>
  );
}