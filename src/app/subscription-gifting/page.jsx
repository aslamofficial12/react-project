'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function SubscriptionGiftingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const faqData = [
    {
      q: 'Can I switch an existing Subscribe and Save subscription to a Subscribe and Save gift option and keep my progress towards my next free order?',
      a: 'You cannot switch an existing subscription to a Subscribe and Save gift option. To change to a different subscription option you will first need to cancel your existing subscription plan. If this was a Subscribe and Save subscription you will lose your progress to your next 6th order being free.',
    },
    {
      q: 'I received a Subscribe and Save gift, can I make adjustments to the subscription plan?',
      a: 'Because The only person who can make adjustments to a subscription plan is the purchaser of the subscription. This is because the changes may have an impact on what the purchaser is paying for the subscription.',
    },
    {
      q: 'I have received a subscription as a gift but need to change my delivery address, how can I do this?',
      a: 'Please ask the person who gave you the gift to update the shipping details for the gift in their website profile. Alternatively, call FreeStyle Customer care on 1800 801 478 between 8am and 7PM, AEDT (closed on weekends and public holidays.)',
    },
    {
      q: 'Can I access NDSS subsidised pricing through this subscription?',
      a: 'You cannot access subsidised pricing through this subscription. Subsidised access to FreeStyle Libre 2 sensors is administered by the NDSS. To check eligibility and information on how to access the NDSS subsidy, visit www.SubsidyChecker.com.au.',
    },
    {
      q: 'If I cancel the subscription and then start a new one, will the previous orders count towards my sixth order being free?',
      a: 'Unfortunately the orders you have made in a previous, cancelled subscription will not count towards the order count of a new subscription. A better option may be to pause a subscription in case you wish to resume it at some point.',
    },
    {
      q: 'If I pause a subscription, once I\'ve resumed it, will the previous orders count towards my sixth order being free?',
      a: 'Yes, if you resume a paused subscription that was started as part of this subscription offer, all previous orders count towards the sixth order being free. If you resume a paused subscription that was commenced under a previous subscription offer the previous orders won\'t count towards your sixth order being free.',
    },
    {
      q: 'Is there a limit to the number of subscriptions I can gift?',
      a: 'There is no limit to the number of subscriptions you can gift.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleExpandAllToggle = () => {
    setExpandAll(!expandAll);
  };

  return (
     <>
    <main className="gifting-page">
      {/* Breadcrumb */}
      <nav className="gifting-breadcrumb">
        <div className="gifting-container">
          <span className="home-icon">🏠</span> &gt; <span>Freestyle Libre 2 Plus Subscribe And Save Gifting</span>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="gifting-hero">
        <div className="gifting-container hero-flex">
          <div className="hero-text-content">
            <h1>Subscription Gifting</h1>
            <p className="hero-subtext">Never pay shipping & every 6th order is free!</p>
            <a href="#terms" className="terms-link">Terms Apply</a>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-circle-mask">
              <Image
                src="/Hero_Banner-sub-desktop_1.webp"
                alt="Subscription Gifting Hero"
                width={520}
                height={520}
                priority
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="gifting-container intro-section text-center">
        <h2>Straight to their doorstep when they need it, and greater peace of mind for you.</h2>
        <div className="yellow-line-center"></div>
        <p className="intro-paragraph">
          We’ve simplified the process of gifting a subscription to your loved one, so they can benefit from continuous glucose monitoring, and you can save up to 20% on sensor purchases!<sup>51</sup>
        </p>
      </section>

      {/* 3. Yellow 4-Step Process Section */}
      <section className="yellow-process-section">
        <div className="gifting-container">
          <h2 className="text-center process-title">Turn someone’s small steps into big wins.</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-border-top"></div>
              <h3>Create an account</h3>
              <p>Create a website account for yourself so you can track and manage the subscription, including subscription payments.</p>
              <a href="#create-account" className="step-link">Create account</a>
            </div>

            <div className="process-step">
              <div className="step-border-top"></div>
              <h3>Add ‘Subscribe & Save Gift’ to cart</h3>
              <p>Once you’ve created your account, add the Subscribe and Save gift to your cart.</p>
              <a href="#add-to-cart" className="step-link">Add ‘Subscribe and Save Gift’ to cart</a>
            </div>

            <div className="process-step">
              <div className="step-border-top"></div>
              <h3>Choose frequency of deliveries</h3>
              <p>You’ll next be asked to select between a delivery every four or eight weeks.</p>
            </div>

            <div className="process-step">
              <div className="step-border-top"></div>
              <h3>Enter the recipient details</h3>
              <p>At checkout, enter the recipient’s email. After checkout, they’ll receive a welcome email about your gift!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Purchase Block */}
      <section className="gifting-container product-block-section text-center">
        <h2 className="product-block-title">
          Have you created a FreeStyleLibre.com.au account? Then you’re ready to give the gift of subscription!
        </h2>
        <div className="yellow-line-center"></div>
        <p className="product-block-desc">
          Click on <strong>'Select Frequency'</strong> in the below, you will then be asked to select between 4 week or 8 week delivery. Select your preference and you’ll be taken to checkout!
        </p>

        <div className="product-card-flex">
          <div className="product-image-container">
            <div className="gift-badge">
              <span>Gifted</span>
              <span>subscription</span>
            </div>
            <Image
              src="/Gifted_subscription_image.webp"
              alt="FreeStyle Libre 2 Plus Box and Sensors"
              width={340}
              height={260}
              className="product-img"
            />
          </div>

          <div className="product-info-text text-left">
            <h2>Subscribe and Save Gifted Subscription</h2>
            <div className="yellow-line-left"></div>
            <button className="btn-dark pill-btn">Select Frequency</button>
          </div>
        </div>
      </section>

      {/* 5. Yellow Banner Bar */}
      <section className="full-yellow-banner-bar text-center">
        <div className="refresh-icon-circle">↻</div>
        <h2>Never pay shipping & Every 6th order free!</h2>
      </section>

      {/* 6. Alternating Feature Grids */}
      <section className="gifting-container features-section">
        <h2 className="section-header-text text-center">Convenient and flexible, and the best gift you can give</h2>

        {/* Feature 1 */}
        <div className="feature-grid-row">
          <div className="feature-media">
            <Image
              src="/Mid-page1.webp"
              alt="Family smiling together"
              width={420}
              height={420}
              className="rounded-card-img"
            />
          </div>
          <div className="feature-content">
            <h2>Freedom and flexibility</h2>
            <div className="yellow-line-left"></div>
            <p>
              As the subscription purchaser you have full control over subscription management, including pausing, fast-forwarding or even cancelling the subscription if you need to.
            </p>
            <p>
              Payments are also only billed per delivery, so there are no big upfront costs to worry about.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-grid-row reverse-row margin-top-xl">
          <div className="feature-content">
            <h2>Keep track of your loved one’s glucose data with LibreLinkUp<sup>21</sup></h2>
            <p className="feature-sub-p">
              LibreLinkUp<sup>21</sup> is a companion app that allows up to 20 carers and loved ones to track your glucose data and alarms. It receives updated glucose readings every single minute, and you can set your own optional alarms.
            </p>
            <p className="feature-sub-p">
              Whether your loved one is at school, at work, out and about, or sleeping, you’ll have peace of mind, knowing their glucose levels at all times.
            </p>
          </div>
          <div className="feature-media">
            <Image
              src="/Mid-page2.webp"
              alt="Person stretching with sensor on arm"
              width={420}
              height={420}
              className="rounded-card-img"
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion Section */}
      <section className="gifting-container faq-section">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <div className="yellow-line-center"></div>

        <div className="expand-all-wrapper text-right">
          <button className="expand-all-btn" onClick={handleExpandAllToggle}>
            {expandAll ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = expandAll || openFaq === index;
            return (
              <div key={index} className="faq-item">
                <button className="faq-question-btn" onClick={() => toggleFaq(index)}>
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-bottom-divider"></div>
        <p className="version-code text-right">ADC-10752 V1.0</p>
      </section>


    </main>
    <SubscribeForm />

   </>
  );
}