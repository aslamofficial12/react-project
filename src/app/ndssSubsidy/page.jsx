'use client';

import React, { useState } from 'react';
import './style.css';
import SubscribeForm from "../../components/SubscribeForm";

const faqData = [
  {
    question: 'How much do I need to pay for Libre sensors under co-payment?',
    answer: (
      <p>The co-payment per box of Libre 2 Plus or 3 Plus sensors is $17.90.</p>
    ),
  },
  {
    question:
      'How many subsidised Libre sensors will I be able to order at one time from an NDSS Access Point?',
    answer: (
      <p>
        A maximum of 3 months’ worth of sensors (6 sensors) can be ordered per
        transaction, so you can always have a sensor on hand. Please note,
        annual limits apply.
      </p>
    ),
  },
  {
    question:
      'Can I still access Libre 2 sensors via the NDSS after the release of the FreeStyle Libre 2 Plus sensor?',
    answer: (
      <p>
        As of 1 July 2026, FreeStyle Libre 2 sensors are no longer be available
        via the NDSS. If you were previously accessing Libre 2 sensors via the
        the NDSS subsidy, you have now been automatically upgraded to FreeStyle
        Libre 2 Plus.{' '}
        <a href="#more-info" className="inline-link">
          More information.
        </a>
      </p>
    ),
  },
  {
    question:
      'I’m currently accessing another subsidised CGM through the NDSS but wish to upgrade to Libre sensors, how do I do this?',
    answer: (
      <>
        <p>
          Your authorised healthcare professional can submit an ‘Update or
          ceasing access form’ (sometimes referred to as a ‘switch form’ to the
          NDSS on your behalf. They can easily do this via an online portal. The
          NDSS will notify you when your upgraded access has been approved. The
          switch form can be accessed here:{' '}
          <a href="#switch-form" className="inline-link">
            Switch Form
          </a>
        </p>
        <p>
          If you are planning to switch to Libre sensors, for a smooth
          transition we recommend ensuring you have two weeks’ supply of your
          current CGM product before the ‘switch form’ is submitted by your
          healthcare professional.
        </p>
      </>
    ),
  },
  {
    question:
      'I would like to use the Libre 2 reader with my Libre 2 Plus sensor. Can I get one?',
    answer: (
      <>
        <p>
          We recommend using the Libre 2 Plus sensor with the LibreLink12 app
          (free to download) - it enables the option of sharing glucose data and
          alarms in real-time with designated family and friends via the
          LibreLinkUp app. Users can also experience the ease of sharing of
          glucose reports and data with healthcare professionals via LibreView.
        </p>
        <p>
          To check your phone compatibility and download the free of charge
          LibreLink12 app please visit:{' '}
          <a
            href="https://www.freestylelibre.com.au/freestyle-librelink-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            www.freestylelibre.com.au/freestyle-librelink-app
          </a>
        </p>
        <p>
          If you are unable to use the LibreLink12 app, eligible users can
          request a complimentary Libre 2 reader at{' '}
          <a
            href="https://www.startmysensor.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            www.startmysensor.com.au
          </a>{' '}
          and follow the instructions on the page.
        </p>
      </>
    ),
  },
  {
    question:
      'I have Type 2 diabetes and am on insulin. Do I qualify for the newly expanded NDSS subsidy?',
    answer: (
      <p>
        The expanded subsidy is for people living with type 1 diabetes. We are
        committed to continuing to work with the Government to bring the subsidy
        to all insulin-requiring people with diabetes.
      </p>
    ),
  },
  {
    question: 'What does concessional mean? What cards are eligible?',
    answer: (
      <>
        <p>
          People with the following valid concessional types will be eligible
          for the initiative (if they also meet the other eligibility criteria):
        </p>
        <ul>
          <li>
            Commonwealth Seniors Health Card (as issued by DHS* or DVA**)
          </li>
          <li>
            Commonwealth Pensioner Concession Card (as issued by DHS or DVA)
          </li>
          <li>Commonwealth Health Care Card (as issued by DHS or DVA)</li>
          <li>DVA Gold Card</li>
          <li>DVA White Card</li>
          <li>Identifies as Aboriginal and/or Torres Strait Islander person</li>
        </ul>
        <p className="faq-footnote">
          *DHS Department of Human Services, now known as Services Australia
          <br />
          **DVA Department of Veterans’ Affairs
        </p>
        <p>
          Please refer to the NDSS website for full details on eligible
          concessional cards/eligibility criteria.
        </p>
      </>
    ),
  },
  {
    question:
      'Will my NDSS access point stock Libre sensors or will they need to be ordered in?',
    answer: (
      <p>
        Once approval is granted from the NDSS, we suggest you get in touch
        with your preferred NDSS access point / pharmacy as soon as possible to
        discuss supply arrangements. If the NDSS access point / pharmacy does
        not have Libre sensors in stock they will be able to order it, and have
        it delivered. Please consult with your local access point / pharmacy for
        more information.
      </p>
    ),
  },
  {
    question:
      'Now that I am on Libre sensors, can I still order test strips through the NDSS?',
    answer: (
      <p>
        After receiving NDSS approval for Libre sensors, current access to blood
        glucose test strips will remain unchanged. If you are using the Libre 2
        reader to scan your sensor, you can also use FreeStyle Optium Blood
        Glucose Test Strips to measure your blood glucose and FreeStyle Optium
        Blood ß-Ketone Test Strips to measure your blood ketones using the
        reader.
      </p>
    ),
  },
  {
    question:
      'Which ‘authorised healthcare professional’ can sign and submit my eligibility form?',
    answer: (
      <>
        <p>
          The NDSS lists Endocrinologists/Diabetologists, Credentialled Diabetes
          Educators, or physicians or nurse practitioners who specialise in
          diabetes as authorised healthcare professionals.
        </p>
        <p>
          <strong>Handy tip:</strong> Call your personal authorised healthcare
          professional to discuss and complete your eligibility forms. If you
          are looking for a Credentialled Diabetes Educator, visit{' '}
          <a
            href="https://www.adea.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            www.adea.com.au
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function NdssSubsidyPage() {
  // Interactive State for Stepper Tabs
  const [activeStep, setActiveStep] = useState(1);

  // Interactive State for Eligibility Tabs ('full' | 'copay')
  const [eligibilityTab, setEligibilityTab] = useState('full');

  // Interactive State for FAQ Accordion
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allExpanded =
    faqData.length > 0 && faqData.every((_, idx) => Boolean(openFaqs[idx]));

  const handleExpandAll = () => {
    if (allExpanded) {
      setOpenFaqs({});
    } else {
      const nextState = {};
      faqData.forEach((_, idx) => {
        nextState[idx] = true;
      });
      setOpenFaqs(nextState);
    }
  };

  return (

    <>
    <main className="ndss-page">
      {/* 1. HERO BANNER */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-circle-card">
            <h1>
              Accessing the NDSS CGM subsidy for Australians living with type 1
              diabetes
            </h1>
            <div className="accent-line yellow"></div>
          </div>

          <div className="hero-visual">
            {/* Concentric Signal Waves + Phone/Sensor Graphic */}
            <div className="signal-rings">
              <span className="ring r1"></span>
              <span className="ring r2"></span>
              <span className="ring r3"></span>
              <span className="ring r4"></span>
            </div>
            <div className="hero-device-mockup">
              <div className="sensor-disc">
                <div className="sensor-dot"></div>
              </div>
              <div className="phone-frame">
                <div className="phone-header">My Glucose</div>
                <div className="phone-green-bar">GLUCOSE IN RANGE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FREESTYLE LIBRE 3 PLUS ANNOUNCEMENT */}
      <section className="section-container announcement-section">
        <div className="two-col-grid align-center">
          <div className="text-col">
            <h2>
              FreeStyle Libre 3 Plus is now available via Type 1 subsidy as a
              standalone sensor (no AID required).
            </h2>
            <div className="accent-line yellow"></div>

            <p className="bold-lead">
              We&apos;re excited to announce that FreeStyle Libre 3 Plus, the
              world&apos;s smallest CGM sensor<sup>85</sup>, is now available to
              Australians accessing the NDSS type 1 CGM subsidy as a standalone
              sensor (no AID required).
            </p>

            <p>
              Powering the Libre 3 Plus sensor is the all-new Libre app
              <sup>17</sup>, featuring a refreshed, intuitive design that makes
              it easier to access the information you need. The new Libre app
              <sup>17</sup> works with both Libre 2 Plus and Libre 3 Plus
              sensors, and is required if using Libre 3 Plus sensors.
            </p>

            <p>
              For people who prefer to use a reader, do not have a compatible
              smartphone, or are scanning the NovoPen<sup>®</sup> 6, the Libre 2
              Plus sensor will remain available through the NDSS and can
              continue to be used with FreeStyle LibreLink<sup>12</sup>.{' '}
              <a href="#compatibility" className="orange-link">
                (check your compatibility)
              </a>
            </p>

            <p className="bold-lead">
              Users wishing to upgrade from another subsidised CGM (including the
              Libre 2 Plus) can now make an appointment with their authorised
              healthcare professional.
            </p>
          </div>

          <div className="image-col">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Smiling woman wearing FreeStyle Libre sensor on her arm"
              className="rounded-feature-img tall"
            />
          </div>
        </div>

        <div className="centered-btn-group">
          <a href="#libre-3-plus" className="btn-dark">
            More about Libre 3 Plus
          </a>
          <a href="#libre-app" className="btn-dark">
            More about the Libre app
          </a>
        </div>
      </section>

      {/* 3. OMNIPOD 5 & AID PAIRING */}
      <section className="section-container aid-section">
        <h2>
          Libre 3 Plus sensors can now pair with the Omnipod® 5 System for
          Automated Insulin Delivery (AID).
        </h2>
        <div className="accent-line yellow"></div>

        <p className="section-intro-text">
          The Omnipod® 5 System and Libre 3 Plus sensor bring together the
          world&apos;s smallest sensor for both adult and paediatric patients
          <sup>85</sup>, and enhanced Bluetooth connectivity<sup>96</sup> for a
          more seamless Automated Insulin Delivery experience. To upgrade your
          NDSS type 1 CGM subsidy access to the Libre 3 Plus sensor, make an
          appointment with your healthcare professional.
        </p>

        <div className="three-col-products">
          {/* Card 1 */}
          <div className="product-card">
            <div className="product-img-box">
              <div className="sensor-disc large">
                <div className="sensor-dot"></div>
              </div>
            </div>
            <h3>
              As a standalone sensor
              <br />
              (without an AID system)
            </h3>
            <a href="#standalone" className="btn-dark">
              Available Now
            </a>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <div className="product-img-box">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80"
                alt="myLoop System"
                className="device-thumb"
              />
            </div>
            <h3>With the myLoop System</h3>
            <a href="#myloop" className="btn-dark">
              Available Now
            </a>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <div className="product-img-box">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80"
                alt="Omnipod 5 System"
                className="device-thumb"
              />
            </div>
            <h3>With the Omnipod® 5 System</h3>
            <a href="#omnipod" className="btn-dark">
              Available Now
            </a>
            <span className="micro-caption">
              Pod shown without necessary adhesive.
            </span>
          </div>
        </div>
      </section>

      {/* 4. HOW TO SWITCH */}
      <section className="section-container switch-section">
        <div className="two-col-grid">
          <div className="image-col">
            <img
              src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&w=700&q=80"
              alt="Man scanning FreeStyle Libre sensor with smartphone"
              className="rounded-feature-img"
            />
          </div>

          <div className="text-col">
            <h2>
              How to switch to the FreeStyle Libre 2 Plus or Libre 3 Plus sensor
              from another device
            </h2>
            <div className="accent-line yellow"></div>

            <p>
              The Libre 2 Plus and Libre 3 Plus sensors are the latest
              innovations to the Libre system. To switch to these sensors from
              your current Libre sensor or to upgrade from a competitor device,
              follow these steps:
            </p>

            <ol className="switch-steps-list">
              <li>
                Complete the following switch form{' '}
                <a href="#switch-form" className="orange-link">
                  Continuous and Flash Glucose Monitoring Access Form: Updating
                  or Ceasing Access
                </a>
              </li>
              <li>
                Have your authorised diabetes healthcare professional sign the
                form.
              </li>
              <li>
                Your healthcare professional can then lodge the form through the
                NDSS online portal, or it can be lodged by emailing it to{' '}
                <a href="mailto:info@ndss.com.au" className="orange-link">
                  info@ndss.com.au
                </a>
                , or post it to GPO Box 9824 in your capital city.
              </li>
            </ol>

            <p>
              Once the form has been processed, you will receive a notification
              from the NDSS. Further information is available at ndss.com.au or
              by calling the NDSS Helpline on 1800 637 700.
            </p>

            <div className="left-btn-wrap">
              <a href="#cgm-switch-form" className="btn-dark">
                CGM Switch Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YELLOW BANNER: NEW TO NDSS TYPE 1 CGM SUBSIDY (INTERACTIVE 3 STEPS) */}
      <section className="yellow-stepper-banner">
        <div className="section-container text-center">
          <h2>
            New to the NDSS Type 1 CGM Subsidy? Here&apos;s how
            <br />
            to gain access.
          </h2>
          <div className="accent-line white centered"></div>

          {/* Step Tabs */}
          <div className="stepper-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeStep === 1}
              className={`step-tab ${activeStep === 1 ? 'active' : ''}`}
              onClick={() => setActiveStep(1)}
            >
              Step 1
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeStep === 2}
              className={`step-tab ${activeStep === 2 ? 'active' : ''}`}
              onClick={() => setActiveStep(2)}
            >
              Step 2
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeStep === 3}
              className={`step-tab ${activeStep === 3 ? 'active' : ''}`}
              onClick={() => setActiveStep(3)}
            >
              Step 3
            </button>
          </div>

          {/* Step Content */}
          <div className="step-panel">
            {activeStep === 1 && (
              <div>
                <h3 className="step-heading">1. Make An Appointment</h3>
                <p className="step-subtext">
                  Make an appointment with an authorised health practitioner,
                  such as the following:
                </p>

                <div className="practitioner-box">
                  <div className="practitioner-col">
                    <ul>
                      <li>Endocrinologist</li>
                      <li>Credentialled diabetes educator</li>
                      <li>Diabetes Nurse Practitioner</li>
                    </ul>
                  </div>
                  <div className="practitioner-col">
                    <ul>
                      <li>Physician</li>
                      <li>Paediatrician</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <h3 className="step-heading">2. Review your eligibility</h3>
                <p className="step-subtext">
                  Review your Eligibility Criteria included on this page to
                  understand if you fall into a category that is
                  <br />
                  eligible for fully subsidised FreeStyle Libre 2 Plus sensors,
                  or the co-pay subsidy.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <h3 className="step-heading">
                  3. Have your healthcare practitioner fill out and
                  <br />
                  lodge the correct form
                </h3>
                <p className="step-subtext">
                  The form can be lodged through the NDSS online portal, by
                  emailing it to info@ndss.com.au, or by
                  <br />
                  post to GPO Box 9824 in your capital city.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. ELIGIBILITY CRITERIA AND ACCESS FORMS (INTERACTIVE TABS) */}
      <section className="section-container eligibility-section text-center">
        <h2>Eligibility Criteria and Access Forms</h2>
        <div className="accent-line yellow centered"></div>

        <p className="eligibility-intro">
          Use this information to understand if you fall into a category that is
          eligible for fully
          <br />
          subsidised Libre sensors, or the co-pay subsidy.
        </p>

        {/* Tabs */}
        <div className="eligibility-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={eligibilityTab === 'full'}
            className={`elig-tab ${eligibilityTab === 'full' ? 'active' : ''}`}
            onClick={() => setEligibilityTab('full')}
          >
            Full Subsidy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={eligibilityTab === 'copay'}
            className={`elig-tab ${eligibilityTab === 'copay' ? 'active' : ''}`}
            onClick={() => setEligibilityTab('copay')}
          >
            Co-Payment Subsidy
          </button>
        </div>

        {/* Full Subsidy Content */}
        {eligibilityTab === 'full' && (
          <div className="eligibility-content">
            <h3>Full Subsidy</h3>
            <div className="accent-line yellow centered small"></div>

            <p className="bold-sub">
              The following four categories are eligible for fully
              <br />
              subsidised access to Libre sensors
            </p>
            <p className="muted-sub">
              If you are not eligible for these subsidy types, you may be
              <br />
              eligible for the co-payment subsidy.
            </p>

            <div className="four-col-cards">
              <div className="elig-card">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80"
                  alt="Type 1 diabetes aged under 21"
                />
                <h4>Type 1 diabetes: aged under 21</h4>
                <a href="#under-21" className="btn-dark">
                  Learn more
                </a>
              </div>

              <div className="elig-card">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
                  alt="Type 1 diabetes aged 21 years and older with valid concessional status"
                />
                <h4>
                  Type 1 diabetes: aged 21 years and older with valid
                  concessional status
                </h4>
                <a href="#concessional" className="btn-dark">
                  Learn more
                </a>
              </div>

              <div className="elig-card">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80"
                  alt="Type 1 diabetes pregnancy planning, pregnancy or immediately post-pregnancy"
                />
                <h4>
                  Type 1 diabetes: pregnancy planning, pregnancy or immediately
                  post-
                </h4>
                <a href="#pregnancy" className="btn-dark">
                  Learn more
                </a>
              </div>

              <div className="elig-card">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt="Conditions similar to type 1 diabetes aged under 21 years"
                />
                <h4>
                  Conditions similar to type 1 diabetes: aged under 21 years
                </h4>
                <a href="#similar-conditions" className="btn-dark">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Co-Payment Subsidy Content */}
        {eligibilityTab === 'copay' && (
          <div className="eligibility-content">
            <h3>Co-Payment Subsidy</h3>
            <div className="accent-line yellow centered small"></div>

            <p className="bold-sub">
              The co-payment subsidy is available to those who are
              <br />
              not eligible for a full NDSS subsidy.
            </p>

            <div className="copay-btn-wrap">
              <a href="#general-access" className="btn-dark">
                General access information
              </a>
            </div>

            <div className="copay-two-col">
              <div className="copay-img">
                <img
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80"
                  alt="Man playing tennis wearing FreeStyle Libre sensor"
                  className="rounded-feature-img"
                />
              </div>
              <div className="copay-text">
                <p>
                  The co-payment subsidy is available to Australians with type 1
                  diabetes who are not eligible for a full NDSS subsidy. The
                  co-payment amount for each Libre 2 Plus or Libre 3 Plus sensor
                  is $17.90 per box. You can order up to 3 months&apos; supply
                  (6 boxes) in one transaction, to ensure you always have a
                  sensor on hand.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>



<div className="info-page-container">
  {/* Yellow Banner: What happens next? */}
  <section className="curved-yellow-banner">
    <div className="banner-content">
      <h2>What happens next?</h2>
      <p>
        You will be notified by the NDSS once your application is approved. You
        can then access the Libre sensor you are authorised for from an NDSS
        access point (This is usually a community pharmacy). You can order up
        to 3 months&apos; supply (6 sensors) in one transaction to ensure you
        always have a sensor on hand.
      </p>
      <hr className="white-divider" />
    </div>
  </section>

  {/* White Section: Abbott's MSAC Application 1786 */}
  <section className="white-info-section">
    <div className="info-content">
      <h2>
        Abbott’s MSAC Application 1786 – funding for CGM Type 2 insulin-using
        diabetes population
      </h2>
      <hr className="yellow-divider" />
      <p>
        Abbott remains committed to working with MSAC, the Australian
        Government, and the diabetes community to improve equitable access to
        CGM technology.
      </p>
      <a href="#msac-updates" className="msac-cta-btn">
        Click here for the latest updates
      </a>
    </div>
  </section>
</div>














  <section className="section-container announcement-section">
        <div className="two-col-grid align-center">
          <div className="text-col">
            <h2>
             Customer Care
            </h2>
            <div className="accent-line yellow"></div>

            <p className="bold-lead">
             If you are still unsure what subsidy you may be eligible for, our customer care team is available to help.
            </p>

            <p>
              {/* Powering the Libre 3 Plus sensor is the all-new Libre app
              <sup>17</sup>, featuring a refreshed, intuitive design that makes
              it easier to access the information you need. The new Libre app
              <sup>17</sup> works with both Libre 2 Plus and Libre 3 Plus
              sensors, and is required if using Libre 3 Plus sensors. */}

              You can call us Mon - Fri between 8am and 7pm AEDT (excluding Public Holidays)
            </p>

            <p>
             1800 801 478
              
            </p>

            
          </div>

          <div className="image-col">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Smiling woman wearing FreeStyle Libre sensor on her arm"
              className="rounded-feature-img tall"
            />
          </div>
        </div>

     
      </section>








      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="section-container faq-section">
        <div className="faq-header-row">
          <h2>Frequently Asked Questions</h2>
          <button
            type="button"
            className="expand-all-btn"
            onClick={handleExpandAll}
          >
            {allExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
        <div className="accent-line yellow"></div>

        <div className="faq-list">
          {faqData.map((item, idx) => {
            const isOpen = Boolean(openFaqs[idx]);
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. LEGAL / REGULATORY DISCLAIMERS FOOTER */}
      <footer className="legal-footer-section">
        <div className="section-container">
          <hr className="legal-divider" />
          <div className="legal-text">
            <p>
              The FreeStyle Libre 2 Plus sensor and Libre 3 Plus sensor are
              authorised for use with the Omnipod<sup>®</sup> 5 automated
              insulin delivery system. For use of the FreeStyle Libre 2 Plus
              and Libre 3 Plus sensors with Omnipod<sup>®</sup> 5, refer to the
              labelling provided with Omnipod 5.
            </p>
            <p>
              The Omnipod 5 Automated Insulin Delivery System is indicated for
              use by individuals with Type 1 diabetes mellitus in persons 2
              years of age and older. The Pod has an IP28 rating for up to 7.6
              metres (25 feet) for 60 minutes. The Omnipod<sup>®</sup> 5
              Controller is not waterproof.
            </p>
            <p>
              The Omnipod 5 Automated Insulin Delivery System is a single
              hormone insulin delivery system intended to deliver U-100 insulin
              subcutaneously for the management of type 1 diabetes in persons
              aged 2 and older requiring insulin. Refer to the Omnipod
              <sup>®</sup> 5 Automated Insulin Delivery System User Guide and
              www.omnipod.com/en-au/what-is-omnipod/omnipod-5 for complete
              safety information including indications, contraindications,
              warnings, cautions, and instructions.
            </p>
            <p>
              The mylife CamAPS FX App is used to manage glucose levels in
              people with type 1 diabetes (including type 1 diabetes pregnancy),
              aged 1 year and older, using a hybrid closed-loop approach.
              Approved for people with type 1 diabetes aged two years and over
              when used in combination with FreeStyle Libre 3 Plus.
            </p>
            <p>
              mylife and YpsoPump are registered trademarks of Ypsomed AG in
              several countries. CamAPS is a registered trademark of CamDiab
              Ltd.
            </p>
          </div>
          <div className="doc-code">ADC-2654934 V12.0</div>
        </div>
      </footer>
    </main>
<SubscribeForm></SubscribeForm>
    </>
  );
}