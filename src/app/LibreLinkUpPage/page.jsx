'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import Recommendations from '../../components/Recommendations/Recommendations';

export default function LibreLinkUpPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = [
    {
      id: 0,
      title: 'Sending a connection request from Libre app',
      image: '/LLU5Mid-page_phone_screen.webp',
      intro: 'To invite someone to see your glucose readings if you are using Libre app¹²:',
      steps: [
        'Tap Profile.',
        'Tap Connected Apps.',
        'Tap Add Connection under LibreLinkUp²¹',
        "Enter the connection's information. Be sure to enter the email address linked to the connection's LibreLinkUp account.",
        'Tap Invite Connection.',
      ],
      footerNote: 'You can share your glucose readings from the Libre app¹² with up to 20 family members and friends.',
    },
    {
      id: 1,
      title: 'Sending a connection request from FreeStyle LibreLink',
      image: '/LLU_Webpage_Image_Updates.webp',
      intro: 'To invite someone to see your glucose readings, open up and log into your FreeStyle LibreLink¹², then:',
      steps: [
        'Open the navigation menu by tapping the "three lines" icon in the top-left corner.',
        'Tap Share or Connected Apps.',
        'Tap Connect or Manage for LibreLinkUp.²¹',
        'Tap Add Connection.',
        'Enter Connection Information. Enter the name and email address of the person that you want to share your glucose readings with.',
        'Tap Add.',
      ],
      footerNote: 'You can share your glucose readings from the FreeStyle LibreLink¹² app with up to 20 family members and friends.',
    },
    {
      id: 2,
      title: 'Accepting a connection request',
      image: '/LLU_Webpage_.webp',
      intro: 'For the family, friend or caregiver who wants to receive glucose information:',
      steps: [
        'Download and install LibreLinkUp²¹ on your smartphone.',
        "Tap 'Create Account' on the welcome screen and follow the prompts.",
        'Go to your email inbox to verify your account and complete setup.',
        'Return to LibreLinkUp²¹ and log in to your account',
        'If you have been sent an invitation, you will see a notification telling you that a user would like to share their glucose readings with you. Press Accept.',
      ],
      footerNote: 'You will now receive your connection’s glucose readings in the LibreLinkUp²¹ app. You do not need to have the LibreLinkUp²¹ app running to receive notifications from your connections. You can connect with up to 20 FreeStyle LibreLink¹² and Libre app users to see their glucose readings. You can also set customised glucose alarms for each connection.',
    },
  ];

  return (
    <div className="librelinkup-page">
      {/* 1. Hero Section */}
    {/* 1. Hero Section */}

    <div className="headernav">
            <nav className="breadcrumb">
                <span>🏠</span> &gt; <span>LibreLinkUpPage</span>
            </nav>
            </div>
     


<section className="llu-hero-banner">
  <div className="llu-hero-bg">
    <img
      src="/librelinkup_hero_desktop_with_LLU_lockup.webp"
      alt="LibreLinkUp Hero"
      className="hero-img"
    />
  </div>
  <div className="llu-hero-circle">
    <div className="llu-hero-content">
      <h1>
        LibreLinkUp<sup className="sup-num">21</sup>
      </h1>
      <p>
        LibreLinkUp<sup className="sup-num">21</sup> is the app that allows family, friends, or caregivers to share in your journey and help you achieve success.
      </p>
    </div>
  </div>
</section>










      {/* 2. Overview Feature Section */}
      <section className="llu-container llu-feature-section">
        <div className="llu-feature-grid">
          <div className="llu-feature-media">
           
            <div className="phones-preview">
              <Image
                src="/LLU_Webpage_ copy.webp"
                alt="LibreLinkUp App Mockups"
                width={320}
                height={320}
                className="mockup-img"
              />
            </div>
          </div>

          <div className="llu-feature-text">
            <h2>
              Share<sup className="sup-num">26</sup> your glucose readings with the ones who count.
            </h2>
            <p className="feature-intro">
              Perfect for loved ones, carers or friends, LibreLinkUp<sup className="sup-num">21</sup> provides a simple, safe, and secure way to share<sup className="sup-num">21</sup> your readings for greater peace of mind.
            </p>
            <ul className="feature-bullets">
              <li>Free and compatible with Libre app and FreeStyle LibreLink<sup className="sup-num">12</sup></li>
              <li>Libre app and FreeStyle LibreLink<sup className="sup-num">12</sup> users can invite up to 20 family members, friends, or caregivers to connect<sup className="sup-num">26</sup></li>
              <li>Once connected, LibreLinkUp<sup className="sup-num">21</sup> users get automatic<sup className="sup-num">26</sup> uploads of glucose readings, every single minute, and can set custom alarms for high or low glucose levels</li>
            </ul>

            {/* <div className="store-buttons-row">
              <a href="#app-store" className="store-btn">
                <img src="/app-store-badge.svg" alt="App Store" />
              </a>
              <a href="#google-play" className="store-btn">
                <img src="/app-store-png-logo-33123_copy_2x" alt="Google Play" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* 3. Interactive How to Connect Section */}
      <section className="llu-container llu-guide-section">
        <h2 className="guide-title text-center">
          How to Connect to LibreLinkUp<sup className="sup-num">21</sup>
        </h2>

        {/* Tab Buttons */}
        <div className="guide-tabs">
          {tabContents.map((tab) => (
            <button
              key={tab.id}
              className={`guide-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="guide-card">
          <div className="guide-card-grid">
            <div className="guide-card-image">
              <Image
                src={tabContents[activeTab].image}
                alt={tabContents[activeTab].title}
                width={320}
                height={340}
                className="guide-img"
              />
            </div>

            <div className="guide-card-steps">
              <p className="steps-intro">{tabContents[activeTab].intro}</p>
              <ol className="steps-list">
                {tabContents[activeTab].steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <p className="guide-card-footer">{tabContents[activeTab].footerNote}</p>
        </div>
      </section>

      {/* 4. Full-Width Yellow Share Progress Banner */}
      <section className="llu-yellow-banner">
        <div className="llu-yellow-inner">
          <div className="llu-yellow-grid">
            <div className="llu-yellow-media">
              <Image
                src="/LLU_Webpage_Image_Updates.webp"
                alt="Two phones sharing progress"
                width={320}
                height={260}
                className="yellow-img"
              />
            </div>
            <div className="llu-yellow-text">
              <h2>
                LibreLinkUp<sup className="sup-num">21</sup> lets you share<sup className="sup-num">26</sup> your progress.
              </h2>
              <div className="white-line-short"></div>
              <p>
                Invite your loved ones to remotely track your real-time glucose data and trends on their LibreLinkUp<sup className="sup-num">21</sup> app.
              </p>
              <div className="store-buttons-row">
                <a href="#app-store" className="store-btn">
                  <img src="/app-store-badge.svg" alt="App Store" />
                </a>
                <a href="#google-play" className="store-btn">
                  <img src="/app-store-png-logo-33123_copy_2x" alt="Google Play" />
                </a>
              </div>
              <p className="small-disclaimer">
                Each family member or caregiver you decide to add will need to download the LibreLinkUp<sup className="sup-num">21</sup> app to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* 5. Support Section */}
      <section className="llu-support-section text-center">
        <div className="headset-icon">🎧</div>
        <h2>We’re here to help.</h2>
        <p>Get all the support and guidance you need when you need it.</p>
        <button className="btn-dark pill-btn">Learn More</button>
      </section>


<div className="last"> <Recommendations /></div>
      
{/* 6. Legal Footer Section */}
      <footer className="llu-footer-legal">
        <div className="llu-container">
          <p>
            Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
          </p>
          <p>
            Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          <p className="llu-footer-version">ADC-110855 V4.0</p>
        </div>
      </footer>
      
    </div>

    
  );
}