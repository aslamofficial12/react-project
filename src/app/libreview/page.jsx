"use client"
import React from 'react';
import './style.css';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import Recommendations from '../../components/Recommendations/Recommendations';
import SubscribeForm from '../../components/SubscribeForm';

export default function LibreViewPage() {
  return (
    <div className="libreview-page">
      {/* 1. Split Hero Circle Section */}
      <section 
        className="lv-hero-section" 
        style={{ backgroundImage: `url('/LIbreView_Hero_-_Desktop.webp')` }}
      >
        <div className="lv-circle-card">
          <h1 className="lv-hero-title">
            LibreView<sup>24</sup>
          </h1>
          <div className="accent-line-yellow"></div>
          <p className="lv-hero-text">
            Get the complete glucose picture online with the FreeStyle Libre 2 system and LibreView<sup>24</sup>, a secure, cloud-based system that gives your healthcare practitioner clear, easy-to-understand reports.
          </p>
        </div>
      </section>

      {/* 2. Team Healthcare Progress Section */}
      <section className="lv-progress-section">
        <div className="lv-container">
          <div className="lv-two-col-grid">
            <div className="lv-grid-img-col">
              <img 
                src="/Sub_Hero_Image.webp" 
                alt="Healthcare team collaboration" 
                className="lv-feature-img" 
              />
            </div>
            <div className="lv-grid-text-col">
              <h2 className="lv-section-heading">
                When your healthcare team has your data, they can help you make progress.<sup>16, 17</sup>
              </h2>
              <div className="accent-line-yellow left"></div>
              <p className="lv-body-p">
                LibreView<sup>24</sup> provides a convenient way to share<sup>74</sup> insights with your healthcare team so you can have better conversations and make more informed decisions about your care together.<sup>16, 17</sup>
              </p>
              <ul className="lv-bullet-list">
                <li>
                  Automatically<sup>74</sup> uploads glucose data to a secure cloud-based system
                </li>
                <li>
                  Clear, easy-to-review reports<sup>17</sup> that show glucose patterns and trends
                </li>
                <li>
                  Free and compatible with FreeStyle LibreLink<sup>12</sup> and the FreeStyle Libre 2 reader.<sup>43</sup>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ready to Get Started Section */}
      <section className="lv-started-section">
        <div className="lv-container text-center">
          <h2 className="lv-center-title">Ready to get started?</h2>
          <div className="accent-line-yellow"></div>

          <div className="lv-started-card">
            <div className="lv-monitor-col">
              <img 
                src="/digital_large_72ppi-computer_monitor_libreview_hcp_report_1 copy.webp" 
                alt="LibreView Computer Monitor Preview" 
                className="lv-monitor-img" 
              />
            </div>
            <div className="lv-started-text-col">
              <h3 className="lv-card-title">LibreView</h3>
              <p className="lv-started-desc">
                It’s easy for healthcare professionals to set up LibreView<sup>24</sup>:
              </p>
              <p className="lv-started-steps">
                Visit <strong>LibreView.com</strong> and click "Sign up"<br />
                Download and follow the installation prompts<br />
                Follow the on-screen instructions to upload your data
              </p>
              <a 
                href="https://www.libreview.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="lv-btn-dark"
              >
                Visit Libreview.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Connecting with your Healthcare Team Section */}
      <section className="lv-connecting-section">
        <div className="lv-container text-center">
          <h2 className="lv-center-title">Connecting with your healthcare team</h2>
          <div className="accent-line-yellow"></div>
          
          <p className="lv-subtitle-text">
            First, create an account in FreeStyle LibreLink<sup>12</sup> or sign up online at <a href="https://www.libreview.com" target="_blank" rel="noopener noreferrer">LibreView.com</a>.
          </p>
          <p className="lv-subtitle-bold">
            Once you have an account, there are two options to connect with your provider:
          </p>

          <div className="lv-options-grid">
            {/* Option 1 */}
            <div className="lv-option-card">
              <div className="lv-option-img-frame">
                <img 
                  src="/Group_2117074442_1__1_1.webp" 
                  alt="Option 1: Enter Practice ID" 
                  className="lv-option-img" 
                />
              </div>
              <div className="lv-option-divider"></div>
              <h3 className="lv-option-title">Option 1: Enter Practice ID</h3>
              <p className="lv-option-desc">
                Ask your healthcare provider for their LibreView<sup>74</sup> Practice ID, enter the code into the field provided in your app or in your LibreView account online, and follow the prompts.
              </p>
            </div>

            {/* Option 2 */}
            <div className="lv-option-card">
              <div className="lv-option-img-frame">
                <img 
                  src="/Email_invitation_1.webp" 
                  alt="Option 2: Email invitation" 
                  className="lv-option-img" 
                />
              </div>
              <div className="lv-option-divider"></div>
              <h3 className="lv-option-title">Option 2: Email invitation</h3>
              <p className="lv-option-desc">
                Ask your healthcare provider to invite you to share<sup>74</sup> your data. Click Accept Invitation in the email, follow the prompts, and your glucose data will automatically be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <div className="lastsection">
      <Recommendations />
      </div>
      <SubscribeForm />
    </div>
  );
}