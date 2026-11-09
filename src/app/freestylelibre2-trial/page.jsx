"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./style.css"; // Global stylesheet import
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";

export default function FreeStyleLibreTrialPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const handleExpandAllToggle = () => {
    setExpandAll(!expandAll);
  };

  const faqData = [
    {
      question: "Is shipping included in the cost of the $15 trial sensor.",
      answer:
        "Shipping is included in the cost of the $15 trial sensor, and applies to any location in Australia.",
    },
    {
      question: "What is the difference between the Libre 2 Plus experience packs?",
      answer:
        "The Libre 2 Plus sensors you receive with either experience pack are exactly the same. The only difference is in the materials and information we provide with your order to ensure you have the best experience with Libre 2 Plus possible.",
    },
    {
      question: "Who is eligible for this offer",
      answer:
        "This offer is open to new users who are indicated for Libre 2 Plus, and who have not purchased Libre 2 or Libre 2 Plus sensors from FreeStyleLibre.com.au previously. The Libre 2 Plus Flash Glucose Monitoring System Sensor ('Sensor'), when used with a compatible device, is indicated for measuring interstitial fluid glucose levels in people (age 2 and older) with diabetes mellitus, including pregnant women.",
    },
    {
      question: "I need assistance using Libre 2 Plus , what resources are available for me?",
      answer:
        "The Libre 2 Plus system is designed to be as easy as possible to apply and use. When you receive your Libre 2 Plus sensor, you will also receive training materials, including The Complete Guide to Libre 2 Plus and the Sensor Adhesion Guide. Further support is available on FreeStyleLibre.com.au, including helpful articles, videos and FAQ's.\nIf you need to talk to someone, our Customer Care team is available for you on 1800 801 478 from 9am to 7pm AEST, Monday to Friday, excluding public holidays.",
    },
    {
      question: "Can I get a FreeStyle Libre 2 reader with the offer?",
      answer:
        "The FreeStyle Libre 2 reader is not included in this offer. The FreeStyle LibreLink¹² app from Google Play or the Apple App store, free of charge. The FreeStyle Libre 2 reader can be purchased from the FreeStyle Libre 2 reader page.",
    },
    {
      question: "Is my phone compatible with the FreeStyle LibreLink¹² app?",
      answer:
        "To check if your phone is compatible with FreeStyle LibreLink¹², visit: https://www.freestylelibre.com.au/compatibility",
    },
  ];

  return (

    <>
     <div className="breadcrumbBar">
        <span className="homeIcon">🏠</span>
        <span className="breadcrumbSeparator">&gt;</span>
        <span className="breadcrumbText">FreeStyle Libre 2 Plus Trial</span>
      </div>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1 className="heroTitle">
            Ditch finger pricks<sup>10</sup> for just $15
          </h1>
          <button className="primaryBtn">Trial now</button>
          <p className="termsLink">Terms apply</p>
        </div>
        <div className="heroImageWrapper">
          <div className="heroImageCircle">
            <Image
              src="/My_Freestyle_Moments-Desktop.webp"
              alt="Couple smiling taking selfie"
              width={500}
              height={500}
              priority
              className="circleImg"
            />
          </div>
        </div>
      </section>
    
    
    
   
    <div className="container">
      {/* Top Breadcrumb Header */}
     

      {/* Intro Section */}
      <section className="introSection">
        <h2 className="mainHeading">
          Take charge of your glucose management, with effortless glucose monitoring
        </h2>
        <p className="subText">
          FreeStyle Libre 2 Plus is the continuous glucose monitoring (CGM) system that gives you real-time, accurate glucose readings, anytime, anywhere. It seamlessly fits into your life, giving you instant feedback on the impact of food, activity and medicine on your glucose levels, so you can make more informed decisions about your glucose management.
        </p>
      </section>

      {/* Experience Packs Selection */}
      <section className="experiencePacksSection">
        <h3 className="sectionHeading">
          Select the Experience Pack tailored for your diabetes type:
        </h3>
        <p className="sectionDesc">
          Choose the experience pack that matches your diabetes type to ensure you receive information and training materials that are relevant to you. The Libre 2 Plus sensor included in each pack is exactly the same.
        </p>

        <div className="packsGrid">
          {/* Pack 1 */}
          <div className="packCard">
            <div className="packImageContainer">
              <div className="typeBadge badgeOrange">
                <span>Type 1 diabetes</span>
              </div>
              <Image
                src="/T1_ExperiencePack_Opt.webp"
                alt="Type 1 Diabetes Experience Pack"
                width={320}
                height={260}
                className="packImg"
              />
            </div>
            <div className="packDetails">
              <h4>This pack includes:</h4>
              <ul>
                <li>1 x Libre 2 Plus sensor</li>
                <li>Education and training materials tailored to support people living with type 1 diabetes</li>
                <li>Information on how to access subsidised Libre 2 Plus through the NDSS</li>
              </ul>
              <p className="discountText">
                Discount will be applied during checkout <a href="#">Terms apply</a>
              </p>
              <button className="actionBtn">Register/Login To Continue</button>
            </div>
          </div>

          {/* Pack 2 */}
          <div className="packCard">
            <div className="packImageContainer">
              <div className="typeBadge badgeBlue">
                <span>Type 2, gestational or other diabetes</span>
              </div>
              <Image
                src="/T2_Gestational_Other_ExperiencePack.webp"
                alt="Type 2, Gestational or Other Diabetes Experience Pack"
                width={320}
                height={260}
                className="packImg"
              />
            </div>
            <div className="packDetails">
              <h4>This pack includes:</h4>
              <ul>
                <li>1 x Libre 2 Plus sensor</li>
                <li>Education and training materials tailored to support people living with type 2, gestational or any other type of diabetes</li>
                <li>Access to exclusive promotional offers</li>
              </ul>
              <p className="discountText">
                Discount will be applied during checkout <a href="#">Terms apply</a>
              </p>
              <button className="actionBtn">Register/Login To Continue</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Libre Section */}
      <section className="whyLibreSection">
        <h2 className="mainHeading">
          Why Libre is the #1 CGM used worldwide<sup>1</sup>
        </h2>

        {/* Column 1 */}
        <div className="twoColumnRow">
          <div className="textContent">
            <h3 className="rowTitle">Supports your continuous progress</h3>
            <div className="yellowUnderline"></div>
            <p>
              Libre 2 Plus provides deep insights into your glucose levels so you can easily track the progress you are making to your personal goals. Managing your glucose is a journey, and FreeStyle Libre 2 Plus is with you every step of the way.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/15Trial_2Column_1stImage.webp"
              alt="Man adjusting sensor on arm"
              width={400}
              height={300}
              className="roundedImg"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="twoColumnRow reverseRow">
          <div className="imageContent">
            <Image
              src="/15Trial_2Column_2ndImage.webp"
              alt="Father giving child piggyback ride"
              width={400}
              height={300}
              className="roundedImg"
            />
          </div>
          <div className="textContent">
            <h3 className="rowTitle">Helps gets the hard work done</h3>
            <div className="yellowUnderline"></div>
            <p>
              With the FreeStyle LibreLink<sup>12</sup> app, managing your glucose is easy. No more guesswork, just personalized insights to understand how your glucose responds to life's challenges.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="twoColumnRow">
          <div className="textContent">
            <h3 className="rowTitle">Connected data for collaborative care</h3>
            <div className="yellowUnderline"></div>
            <p>
              With the Libre 2 system's secure data sharing and remote monitoring, you and your loved ones can enjoy peace of mind with real-time glucose updates via the LibreLinkUp<sup>21</sup> app. Your healthcare team can also tailor your treatment plan using insights from LibreView<sup>24</sup>.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/15Trial_2Column_3rdImage.webp"
              alt="Family cooking together in kitchen"
              width={400}
              height={300}
              className="roundedImg"
            />
          </div>
        </div>
      </section>

      {/* Yellow Banner - App Info */}
      <section className="yellowBanner">
        <h2>
          With real-time glucose readings displayed directly on your phone<sup>55</sup>, stay informed and in charge of your glucose levels
        </h2>
        <div className="bannerUnderline"></div>

        <div className="bannerDevices">
          <Image
            src="/app-track.webp"
            alt="Phone, Watch and Sensor devices"
            width={450}
            height={250}
            className="bannerImg"
          />
        </div>

        <p className="appDownloadText">
          Download FreeStyle LibreLink<sup>12</sup> for Apple and Android devices.
        </p>
        <div className="appBadges">
          {/* Add app store badges if available */}
        </div>
        <p className="disclaimerText">
          Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
      </section>

      {/* Glucose Data At A Glance */}
      <section className="dataGlanceSection">
        <div className="twoColumnRow">
          <div className="textContent">
            <h2 className="rowTitle">Glucose data at a glance</h2>
            <div className="yellowUnderline"></div>
            <ol className="featuresList">
              <li>
                <strong>Trend Arrow</strong>
                <p>Shows you the direction your glucose is heading and how quickly it is changing.</p>
              </li>
              <li>
                <strong>Current Glucose Reading</strong>
                <p>Text-to-speech option, when enabled.</p>
              </li>
              <li>
                <strong>Glucose History</strong>
                <p>
                  The graph shows your glucose data for the past 8 hours. The shaded green ribbon is your customisable target range, so you can see how much time you have spent in range.
                </p>
              </li>
              <li>
                <strong>Add Note</strong>
                <p>
                  Track food, insulin use, exercise, and other events. An icon is added to the top of your graph to represent the type and time of the event.
                </p>
              </li>
            </ol>
          </div>
          <div className="imageContent">
            <Image
              src="/app-alarm.webp"
              alt="Glucose reading app view with numbered callouts"
              width={300}
              height={500}
              className="mobileAppImg"
            />
          </div>
        </div>
      </section>

      {/* Alarms and Reports Section */}
      <section className="alarmsAndReportsSection">
        {/* Alarms */}
        <div className="twoColumnRow">
          <div className="imageContent">
            <Image
              src="/app-report.webp"
              alt="Optional glucose alarms notification on phone and watch"
              width={420}
              height={320}
              className="featureImg"
            />
          </div>
          <div className="textContent">
            <h2 className="rowTitle">Optional glucose alarms</h2>
            <div className="yellowUnderline"></div>
            <p>
              Optional glucose alarms<sup>74</sup> inform you when your glucose levels go too high or too low, empowering you to make confident treatment decisions. Rest easy knowing you'll be alerted if your glucose drops too low, ensuring your safety even while you sleep. Plus, with notifications mirrored on compatible smartwatches, you can stay connected to your glucose levels effortlessly, enjoying life with greater peace of mind and convenience.
            </p>
          </div>
        </div>

        {/* Reports */}
        <div className="twoColumnRow reverseRow">
          <div className="textContent">
            <h2 className="rowTitle">Personalised reports</h2>
            <div className="yellowUnderline"></div>
            <p>
              See your progress and personal achievements with glucose reports in the FreeStyle LibreLink app<sup>12</sup>. The reports, like Estimated A1c and Time in Range, are easy to understand and help you manage your glucose levels better.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/app-report.webp"
              alt="Personalised glucose report interface"
              width={300}
              height={500}
              className="mobileAppImg"
            />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="ctaCenter">
          <button className="primaryBtn">Trial now for $15*</button>
          <p className="termsFootnote">
            *Available to new customers only. <a href="#">See full terms and conditions</a>.
          </p>
        </div>
      </section>


      <section>

        <TestimonialSlider />
      </section>

      {/* FAQ Section */}
      <section className="faqSection">
        <div className="faqHeader">
          <h2 className="faqTitle">Frequently Asked Questions</h2>
          <div className="yellowUnderlineCenter"></div>
          <button className="expandAllBtn" onClick={handleExpandAllToggle}>
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="accordionContainer">
          {faqData.map((faq, idx) => {
            const isOpen = expandAll || openFaq === idx;
            return (
              <div key={idx} className="faqItem">
                <button className="faqQuestion" onClick={() => toggleFaq(idx)}>
                  <span>{faq.question}</span>
                  <span className="accordionIcon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="docCode">ADC-107756 V4.0</div>
      </section>
    </div>
     </>
  );
}