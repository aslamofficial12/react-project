import React from 'react';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function LibreMomentsPage() {
  return (
    <>
    <main className="libre-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <span className="home-icon">🏠</span> &gt; <span>Libre Moments</span>
      </nav>

      {/* Hero Video Section */}
      <section className="video-section">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/jgTBq-uzkl0"
            title="Rachael's Story | Libre Moments"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Hero Header Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Libre Moments</h1>
          <div className="accent-bar"></div>
          <p>
            Libre Moments is a place for you to share your story and celebrate the everyday triumphs and challenges of living with diabetes.
          </p>
          <p>
            Sometimes it can feel like the challenges outweigh the triumphs. Whatever they are, they are all moments that deserve to be shared.
          </p>
          <button className="btn-dark">Share Your Story</button>
        </div>
        <div className="hero-image">
          <img src="/29.webp" alt="Libre Moments Collage" />
        </div>
      </section>

      {/* What is Libre Moments Section */}
      <section className="info-section">
        <h2 className="section-title">What is Libre Moments?</h2>
        <div className="accent-bar center"></div>

        {/* Feature Row 1: David */}
        <div className="feature-row">
          <div className="feature-text">
            <h3>Moments are experiences</h3>
            <div className="accent-bar"></div>
            <blockquote>
              “I was asked what was on my arm whilst patrolling the surf one day last season. It actually empowered me to act as a role model to parents and kids that it's OK to be a type 1, and it should not and does not stop you from doing anything”.
            </blockquote>
            <p className="author">David, QLD</p>
          </div>
          <div className="feature-image">
            <img src="/David_Photo_MFM_1.webp" alt="David in surf patrol gear" />
          </div>
        </div>

        {/* Feature Row 2: Lyndal */}
        <div className="feature-row reverse">
          <div className="feature-image">
            <img src="/Lyndal_1.webp" alt="Lyndal wearing sensor" />
          </div>
          <div className="feature-text">
            <h3>Moments are empowering</h3>
            <div className="accent-bar"></div>
            <blockquote>
              “I like it when people ask me what my sensor is rather than stare at it, and politely say nothing. A conversation is always better and lets everyone know what help is available”.
            </blockquote>
            <p className="author">Lyndal, NSW</p>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="spotlight-section">
        <h2 className="section-title">Libre Moments in the spotlight!</h2>
        <div className="accent-bar center"></div>

        {/* Main Spotlight Story: Rachael */}
        <div className="spotlight-main">
          <div className="spotlight-image">
            <img src="/Rachael_2.webp" alt="Rachael showing her sensor at the gym" />
          </div>
          <div className="spotlight-text">
            <h3>How the Libre 2 System has helped Rachael feel more in control</h3>
            <div className="accent-bar"></div>
            <p>
              Rachael shares an inspiring story of resilience and perseverance, refusing to let type 2 diabetes stand in the way. With a little help from the Libre 2 System, she's made significant strides towards regaining control of her health and fitness.
            </p>
            <button className="btn-dark">Read More</button>
          </div>
        </div>

        {/* Community Grid */}
        <div className="community-grid">
          <div className="grid-card">
            <img src="/Sahara_1.webp" alt="Sahara" />
            <p className="quote">“Get involved with FreeStyle Libre and don't be ashamed of wearing it. I love when people ask about it!”</p>
            <p className="author">Sahara, WA</p>
          </div>

          <div className="grid-card">
            <img src="/Jackson_V2.0_1.webp" alt="Jackson" />
            <p className="quote">“I have not had any troubles with training, work, and everyday life. It has allowed me the opportunity to get on top of my diabetes.”</p>
            <p className="author">Jackson, NSW</p>
          </div>

          <div className="grid-card">
            <img src="/Paige_1.webp" alt="Paige" />
            <p className="quote">“I love having my devices on display. I love the freedom it gives me to live stress-free”.</p>
            <p className="author">Paige, QLD</p>
          </div>

          <div className="grid-card">
            <img src="/Mia_Gonzales.webp" alt="Mia" />
            <p className="quote">“Diabetes does not define you, do it for yourself!”</p>
            <p className="author">Mia, QLD</p>
          </div>

          <div className="grid-card">
            <img src="/Barry_Image_1.webp" alt="Barry" />
            <p className="quote">“I can make more positive decisions about my health”</p>
            <p className="author">Barry, NSW</p>
          </div>

          <div className="grid-card">
            <img src="/Naomi.webp" alt="Naomi" />
            <p className="quote">“The sensor 'identifies' me as a member of the club - I've met several friends because I sport the sensor on my arm.”</p>
            <p className="author">Naomi, VIC</p>
          </div>
        </div>
      </section>

      {/* Yellow Community Callout Banner */}
      <section className="community-banner">
        <div className="banner-content">
          <h2>Join our Libre Moments Community</h2>
          <p className="subtitle">Help us inspire others by sharing your own diabetes journey.</p>

          <div className="steps-container">
            <div className="step-card">
              <div className="icon-circle">
                <img src="/22.webp" alt="Share your story icon" />
              </div>
              <div className="step-divider"></div>
              <h3>Share your story</h3>
              <p>Fill out our quick and easy form to share your journey with us.</p>
            </div>

            <div className="step-card">
              <div className="icon-circle">
                <img src="/23.webp" alt="Inspire others icon" />
              </div>
              <div className="step-divider"></div>
              <h3>Inspire others</h3>
              <p>Your story could be featured in a social media post, an email, or right here on our website - helping others feel seen and supported.</p>
            </div>

            <div className="step-card">
              <div className="icon-circle">
                <img src="/26.webp" alt="Share your story social icon" />
              </div>
              <div className="step-divider"></div>
              <h3>Share your story</h3>
              <p>Follow us on social media and check out our blog to discover real stories from our community.</p>
            </div>
          </div>

          <div className="banner-cta">
            <h2>What are you waiting for?</h2>
            <p>Join our Libre Moments community and have your moments heard.</p>
            <button className="btn-dark">Share Your Moments</button>
          </div>
        </div>
      </section>
    </main>
    <SubscribeForm />

    </>
  );
}