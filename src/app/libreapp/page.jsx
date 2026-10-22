'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function LibreAppPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    const tabs = [
        {
            id: 'glucose',
            label: 'Glucose readings in real time',
            image: '/AUFSL2303_App_Highlights_Screen_Phone1_homescreen_SMALL.webp',
            points: [
                { letter: 'A', text: 'Current glucose reading' },
                { letter: 'B', text: 'Trend arrow indicates how glucose is changing' },
                { letter: 'C', text: 'Interactive glucose history trend line' },
                { letter: 'D', text: 'Sensor days remaining' },
            ],
        },
        {
            id: 'assist',
            label: 'Coming Soon: Libre Assist',
            image: '/AUFSL2303_App_Highlights_Screen_Phone2_Insights_SMALL.webp',
            title: 'Libre Assist: Take the Mystery out of meals.',
            subtitle: 'Coming Soon',
            points: [
                { letter: 'E', text: 'Snap a photo of your meal' },
                { letter: 'F', text: 'See the meal\'s predicted and actual impact on glucose levels' },
                { letter: 'G', text: 'Get personalised food suggestions to help lower glucose impact' },
            ],
        },
        {
            id: 'alarms',
            label: 'Expanded Optional Alarms',
            image: '/AUFSL2303_App_Highlights_Screen_Phone3_Alarms_SMALL.webp',
            points: [
                { letter: 'H', text: 'Silent mode lets you silence alarms for up to nine hours' },
                { letter: 'I', text: 'Optional glucose alarms alert you when your glucose is too high or too low, including predictive low alarm, powered by minute-to-minute readings.' },
                { letter: 'J', text: 'Signal Loss Alarm notifies you if the sensor disconnects from the app' },
            ],
        },
        {
            id: 'insights',
            label: 'Insights a tap away',
            image: '/AUFSL2303_App_Highlights_Screen_Phone4_LogBook_SMALL.webp',
            points: [
                { letter: 'K', text: 'Daily graph provides 24 hours of data.' },
                { letter: 'L', text: 'Add notes about medication and other factors affecting your glucose.' },
            ],
        },
        {
            id: 'reports',
            label: 'Reports bring data to life',
            image: '/AUFSL2303_App_Highlights_Screen_Phone_5_Insights_Report_SMALL.webp',
            points: [
                { letter: 'M', text: 'Time in Ranges reveals when sensor glucose readings are above, below, or within range.' },
                { letter: 'N', text: 'Average Glucose displays your average daily glucose levels so you can see your true progress, regardless of data outliers.' },
                { letter: 'O', text: 'Viewing your Low Glucose Events can help you understand the causes of hypoglycemia and avoid future events.' },
                { letter: 'P', text: 'Daily Patterns reveal personal trends over time and can help you make informed decisions that work for you.' },
                { letter: 'Q', text: 'GMI (glucose management indicator) estimates your A1C.' },
            ],
        },
    ];

    const videos = [
        {
            title: 'How do I understand my glucose readings?',
            description: "It's your glucose story... discover how to get the most out of your readings.",
            thumbnail: '/Video-Thumbnail-1.webp',
            thumbSmall: '/Video-Thumbnail-1 (1).webp',
            videoUrl: 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_1',
        },
        {
            title: 'How do I customize my Low and High Glucose Alarms?',
            description: 'Learn how to set up personalized alarm ranges.',
            thumbnail: '/Video-Thumbnail-2.webp',
            thumbSmall: '/Video-Thumbnail-2.webp',
            videoUrl: 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_2',
        },
        {
            title: 'How do I share my glucose data with my doctor?',
            description: "Sharing your glucose data with others is easy, we'll show you how.",
            thumbnail: '/Video-Thumbnail-3.webp',
            thumbSmall: '/Video-Thumbnail-3.webp',
            videoUrl: 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_3',
        },
        {
            title: 'How do I view my reports?',
            description: 'How do I view my reports?',
            thumbnail: '/Screen_Shot_2023-09-21_at_11.39_4.webp',
            thumbSmall: '/Screen_Shot_2023-09-21_at_11.39_4.webp',
            videoUrl: 'https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_4',
        },
    ];

    const currentVideo = videos[activeVideoIndex];

    return (
        <>

<div className="headernav">
            <nav className="breadcrumb">
                <span>🏠</span> &gt; <span>Libre App</span>
            </nav>
            </div>

         




            {/* Hero Banner Section with Circular Card Overlay */}
<section className="hero-banner-card">
  <div className="hero-bg-container">
    <Image
      src="/Libre_App_Hero_DT_1440x64 (1) og.webp"
      alt="The all-new Libre app hands holding smartphone"
      fill
      priority
      className="hero-bg-image"
    />
  </div>

  <div className="circle-card-overlay">
    <div className="circle-card-content">
      <span className="now-available-tag">Now Available!</span>
      <h2>
        The all-new Libre app<sup className="sup-num">12</sup>.
      </h2>
      <p className="tagline">Easy just got easier.</p>
    </div>
  </div>
</section>






        <main className="libre-container">
            {/* Breadcrumb Navigation */}
        

            {/* Top Bar Header Section */}
           

            {/* Yellow Notification Banner */}
            <section className="notice-banner">
                <div className="notice-banner-container">
                    <h2 className="notice-title">
                        Libre app<sup className="notice-sup">12</sup> is available for Libre 2 Plus and Libre 3 Plus sensors. Please check your smartphone’s compatibility before downloading.
                    </h2>

                    <div className="white-divider"></div>

                    <p className="notice-text">
                        IMPORTANT: Libre 3 Plus sensors are not be compatible with the FreeStyle LibreLink<sup className="notice-sup-sm">12</sup> app. If you do not have a smartphone that is compatible with the new Libre app, or wish to use a reader, the FreeStyle Libre 2 Plus sensor will remain available on the NDSS to use with FreeStyle LibreLink app or FreeStyle Libre 2 reader.
                    </p>

                    <div className="notice-buttons">
                        <a href="#compatibility" className="notice-btn notice-btn-dark">
                            Check your compatibility
                        </a>
                        <a href="#more-info" className="notice-btn notice-btn-dark">
                            More about Libre 3 Plus
                        </a>
                    </div>
                </div>
            </section>

            {/* App Highlights Overview */}
            <section className="section-container">
                <h2 className="section-title text-center">
                    Accurate,<sup>76</sup> reliable glucose readings, automatically updated every single minute.<sup>55</sup>
                </h2>
                <div className="yellow-line"></div>

                {/* Feature Row 1 */}
                <div className="feature-grid margin-bottom-lg">
                    <div className="phone-mockup-wrapper">
                        <Image
                            src="/Home_Screen_6.2MMOL_Detail_312x600_1.webp"
                            alt="Home Screen View"
                            width={312}
                            height={600}
                        />
                    </div>
                    <div className="feature-content">
                        <h3 className="heading-large">Libre app<sup>12</sup></h3>
                        <ul className="bullet-list">
                            <li>A refreshed, intuitive design, making it easier to access the information you need.</li>
                            <li>Expanded optional alarm features,<sup>86</sup> including predictive low glucose alarm, escalating alarms, and silent mode.<sup>87</sup></li>
                            <li>Glucose readings right on your wrist with Apple Watch.<sup>88</sup></li>
                            <li>Personalised insights and reports to track and celebrate your progress.</li>
                        </ul>
                        <div className="store-download-row">
                            <button className="store-badge app-store">App Store</button>
                            <button className="store-badge google-play">Google Play</button>
                        </div>
                        <a href="#compatibility" className="link-text">Check device compatibility</a>
                        <div className="qr-code-box">
                            <Image
                                src="/Libre_app_AU_deeplink_QR.webp"
                                alt="Scan QR Code"
                                width={120}
                                height={120}
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Row 2: Libre Assist */}
                <div className="feature-grid">
                    <div className="yellow-bg-card">
                        <Image
                            src="/Libre-assist-hero_1.webp"
                            alt="Libre Assist Food Scanner"
                            width={450}
                            height={450}
                        />
                    </div>
                    <div className="feature-content">
                        <h3 className="heading-large">
                            Libre Assist<sup>89</sup>: Take the mystery out of meals.<br />
                            <span className="highlight-text">Now Available!</span>
                        </h3>
                        <p className="small-text">
                            Please note - To access Libre Assist, update your Libre app to the latest version (Version 1.4.1), available now in the App Store and Google Play.
                        </p>
                        <div className="yellow-line-short"></div>
                        <p className="intro-text">
                            A first-of-its-kind feature of Libre app designed to take the mystery out of meals.
                        </p>

                        <ul className="badge-list">
                            <li><span className="circle-badge">A</span> Snap a photo of your meal</li>
                            <li><span className="circle-badge">B</span> See the meal's predicted and actual impact<sup>90</sup> on glucose levels</li>
                            <li><span className="circle-badge">C</span> Get personalised food suggestions to help lower glucose impact<sup>91</sup></li>
                        </ul>

                        <button className="btn-dark pill-btn">Libre assist</button>
                    </div>
                </div>
            </section>

            {/* Watch and Alarms Feature Cards */}
            <section className="section-container">
                {/* Apple Watch */}
                <div className="two-column-card">
                    <div className="image-center">
                        <Image
                            src="/Libre_watch_6.2MMOL.webp"
                            alt="Apple Watch Glucose Readings"
                            width={280}
                            height={320}
                        />
                    </div>
                    <div className="content-right">
                        <h2>Glucose readings right on your wrist with Apple Watch™</h2>
                        <div className="yellow-line-short"></div>
                        <p>
                            Check your glucose readings with a glance at your wrist, dismiss alarms on your watch or the Libre app with one tap.<sup>88</sup>
                        </p>
                    </div>
                </div>

                {/* Expanded Alarms */}
                <div className="two-column-card margin-top-lg">
                    <div className="image-center">
                        <Image
                            src="/app-banner1 (2).webp"
                            alt="User checking alarm options"
                            width={400}
                            height={350}
                            className="rounded-image"
                        />
                    </div>
                    <div className="content-right">
                        <h2>Expanded optional alarm features<sup>86</sup>, designed to fit into your day.</h2>
                        <ul className="badge-list">
                            <li>
                                <span className="circle-badge">A</span>
                                <div>
                                    <strong>Predictive alarms</strong>, powered by minute-to-minute readings.<sup>85</sup>
                                </div>
                            </li>
                            <li>
                                <span className="circle-badge">B</span>
                                <div>
                                    <strong>Silent mode</strong>, so you can silence alarms for up to 9 hours when you don't want to be disturbed.<sup>87</sup>
                                </div>
                            </li>
                            <li>
                                <span className="circle-badge">C</span>
                                <div>
                                    <strong>Escalating alarms</strong> that start discreetly and increase in volume over time.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Interactive Tabs Section */}
            <section className="section-container interactive-section">
                <h2 className="section-title text-center">Explore the new Libre app<sup>12</sup></h2>
                <div className="yellow-line"></div>

                {/* Tab Navigation */}
                <div className="tab-navigation">
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === idx ? 'active' : ''}`}
                            onClick={() => setActiveTab(idx)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Display Panel */}
                <div className="tab-panel">
                    <div className="phone-mockup-container">
                        <Image
                            src={tabs[activeTab].image}
                            alt={tabs[activeTab].label}
                            width={280}
                            height={560}
                        />
                    </div>

                    <div className="tab-details">
                        {tabs[activeTab].title && (
                            <h3>{tabs[activeTab].title}</h3>
                        )}
                        {tabs[activeTab].subtitle && (
                            <p className="subtitle">{tabs[activeTab].subtitle}</p>
                        )}

                        <ul className="badge-list">
                            {tabs[activeTab].points.map((pt, i) => (
                                <li key={i}>
                                    <span className="circle-badge">{pt.letter}</span>
                                    <span>{pt.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Video Gallery Section (First Design Style with YouTube Support) */}
            <section className="section-container video-section-v1">
                <h2 className="section-title text-center">More time living, less time worrying.</h2>
                <div className="yellow-line"></div>
                <p className="section-desc text-center">
                    With the all new Libre app<sup>12</sup>, it's easier than ever to find the readings, trends, and settings that support your diabetes management. Watch step-by-step videos to get the most out of the Libre app<sup>12</sup>.
                </p>

                <div className="video-main-layout">
                    {/* Left Video Player Pane */}
                    <div className="video-player-pane">
                        <h3 className="active-video-heading">{currentVideo.title}</h3>
                        <div className="video-screen-wrapper">
                            <iframe
                                src={currentVideo.videoUrl}
                                title={currentVideo.title}
                                className="video-iframe"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="video-caption-text">{currentVideo.description}</p>
                    </div>

                    {/* Right Playlist Cards Pane (Image 1 Style) */}
                    <div className="video-playlist-pane">
                        {videos.map((vid, idx) => (
                            <div
                                key={idx}
                                className={`playlist-box-card ${activeVideoIndex === idx ? 'selected' : ''}`}
                                onClick={() => setActiveVideoIndex(idx)}
                            >
                                <div className="playlist-box-thumb">
                                    <Image src={vid.thumbSmall} alt={vid.title} width={80} height={50} />
                                </div>
                                <div className="playlist-box-content">
                                    <h4>{vid.title}</h4>
                                    <p>{vid.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center margin-top-md">
                    <p className="disclaimer">Product images are for illustrative purposes only. Not real patient data.</p>
                    <button className="btn-dark pill-btn margin-top-sm">Libre app videos</button>
                </div>
            </section>

            {/* Support Cards Section */}
            <section className="section-container support-section">
                <h2 className="section-title text-center">Support information</h2>
                <div className="yellow-line"></div>

                <div className="support-cards-grid">
                    {/* Card 1 */}
                    <div className="support-card">
                        <div className="card-icon">📄</div>
                        <h3>Libre app FAQs</h3>
                        <p>Frequently Asked Questions about Libre app</p>
                        <button className="btn-dark pill-btn card-btn">Libre app FAQs ↗</button>
                    </div>

                    {/* Card 2 */}
                    <div className="support-card">
                        <div className="card-icon">📱</div>
                        <h3>Libre app instruction manuals</h3>
                        <p>Digital versions of the Libre app manuals.</p>
                        <a href="#libre2" className="support-link">For Libre 2 Plus users ↗</a>
                        <a href="#libre3" className="support-link">For Libre 3 Plus users ↗</a>
                    </div>

                    {/* Card 3 */}
                    <div className="support-card">
                        <div className="card-icon">
                            <Image src="/Support_Icon_64x64_1.webp" alt="Support Icon" width={50} height={50} />
                        </div>
                        <h3>FreeStyle Customer Care</h3>
                        <p>Available Monday to Friday between 8am and 7pm AEST (excluding Public Holidays).</p>
                        <button className="btn-dark pill-btn card-btn">Call 1800 801 478 ↗</button>
                    </div>
                </div>

                <div className="text-center margin-top-md">
                    <button className="btn-dark pill-btn">Libre Product Support</button>
                </div>

                <footer className="footer-legal">
                    <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.</p>
                    <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
                    <p className="right-align">ADC-2694372 v8.0</p>
                </footer>
            </section>

          
        </main>
         
            <div>
              
          <SubscribeForm />
            </div>
        </>
    );
}