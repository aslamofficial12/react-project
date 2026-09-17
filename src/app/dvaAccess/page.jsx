"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './styles.css'; // Make sure to import the CSS file

export default function DVALandingPage() {
  const [activeStep, setActiveStep] = useState(3);
  const [activeCardType, setActiveCardType] = useState('white');
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const faqs = [
    "I currently receive subsidised FreeStyle Libre 2 sensors from the DVA. Do I need to do anything to be upgraded to FreeStyle Libre 2 Plus sensors?",
    "If you think you should have a DVA White Card but you have not received it, what do you do?",
    "What if the DVA client has a White Card but doesn't have diabetes as an accepted condition?",
    "How often do I need to fill in this form to receive my regular order of FreeStyle Libre 2 Plus sensors?"
  ];

  const toggleFaq = (index) => {
    setExpandedFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleAllFaqs = () => {
    if (expandedFaqs.length === faqs.length) {
      setExpandedFaqs([]);
    } else {
      setExpandedFaqs(faqs.map((_, i) => i));
    }
  };

  return (
    <div className="dva-landing-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container container">
          <div className="hero-text-content">
            <h1 className="hero-title">
              DVA Access to<br />FreeStyle Libre 2<br />Plus
            </h1>
            <div className="hero-divider yellow-divider"></div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-circle">
              <span className="placeholder-text">
                [Image Placeholder: Two older men outdoors]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Update Section */}
      <section className="update-section">
        <div className="update-container container">
          <h2 className="update-title">
            Important Update: DVA Access to FreeStyle Libre 2 Plus sensors
          </h2>
          <p className="paragraph-text">
            We're pleased to share that FreeStyle Libre 2 Plus sensors are now available through the DVA subsidy. If you are currently accessing FreeStyle Libre 2 sensors through the DVA subsidy, you will be automatically upgraded to FreeStyle 2 Plus sensors and will start receiving them in your regular order.
          </p>
          <p className="paragraph-text">
            Your existing FreeStyle LibreLink app or FreeStyle Libre 2 reader is fully compatible with the FreeStyle Libre 2 Plus sensor; however, please make sure FreeStyle LibreLink has been updated to the most recent version.
          </p>
          <p className="paragraph-text">
            DVA members newly approved for the DVA subsidy will receive the FreeStyle Libre 2 Plus sensor.
          </p>
        </div>
      </section>

      {/* What You Need To Know Section */}
      <section className="info-section">
        <div className="info-container container">
          <h2 className="section-title-light">What you need to know.</h2>
          <div className="yellow-divider-center"></div>
          <p className="paragraph-text mb-6">
            The information on this page provides a step-by-step guide on how to apply for subsidised Department of Veterans' Affairs (DVA) access to FreeStyle Libre 2 for people living with type 1 or type 2 diabetes.
          </p>
          <p className="paragraph-text">
            Once approved, a regular order of FreeStyle Libre 2 sensors will be sent straight to the DVA member's home, every 3 months.
          </p>
        </div>
      </section>

      {/* Who Is Eligible Section */}
      <section className="eligible-section">
        <div className="eligible-container container">
          <div className="section-header-centered">
            <h2 className="section-title-uppercase">Who Is Eligible?</h2>
            <div className="yellow-divider-center"></div>
          </div>
          
          <div className="cards-grid">
            {/* Gold Card */}
            <div className="card-wrapper">
              <div className="card-visual card-visual-gold">
                 <div className="card-inner">
                    <div className="card-top">
                        <div className="card-gov-text">Australian Government<br/>Department of Veterans' Affairs</div>
                        <div className="card-type-text">
                           <div className="card-type-title">Veteran</div>
                           <div className="card-type-subtitle text-gray-800">All Conditions within Australia</div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-name">FIRSTNAME FAMILYNAME</div>
                        <div className="card-details text-gray-900">
                           File No. QSM12345<br/>
                           Card expires<br/>
                           or on recall  06/20
                        </div>
                    </div>
                 </div>
              </div>
              <div className="card-text-content">
                <h3 className="card-title">DVA Gold Card holders</h3>
                <p className="card-subtitle">
                  (includes family members of veterans who also hold a gold card)
                </p>
                <p className="card-desc">
                  DVA Gold Card members can send the below order form directly to one of the listed DVA contracted suppliers listed on the form.
                </p>
              </div>
            </div>

            {/* White Card */}
            <div className="card-wrapper">
              <div className="card-visual card-visual-white">
                 <div className="card-inner">
                    <div className="card-top">
                        <div className="card-gov-text">Australian Government<br/>Department of Veterans' Affairs</div>
                        <div className="card-type-text">
                           <div className="card-type-title">Veteran</div>
                           <div className="card-type-subtitle text-gray-500">Specific Conditions</div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-name">FIRSTNAME FAMILYNAME</div>
                        <div className="card-details text-gray-700">
                           File No. QSM12345<br/>
                           Card expires<br/>
                           or on recall  06/20
                        </div>
                    </div>
                 </div>
              </div>
              <div className="card-text-content">
                <h3 className="card-title">DVA White Card holders</h3>
                <p className="card-subtitle">
                  (with diabetes as a DVA accepted condition)
                </p>
                <p className="card-desc">
                  If you are a Veteran and are yet to have 'diabetes' as approved as an accepted condition, <span className="orange-link">applications can be made online</span>, or with assistance from an <span className="orange-link">Advocate</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Access Section */}
      <section className="access-section">
        <div className="access-container container">
          <h2 className="access-title">
            How to access FreeStyle Libre 2 Plus through the DVA
          </h2>
          <div className="white-divider-center"></div>
          
          {/* Segmented Controls */}
          <div className="step-controls">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`step-btn ${activeStep === step ? 'step-btn-active' : ''}`}
              >
                Step {step}
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="step-content-wrapper">
            {activeStep === 3 && (
              <div className="step-content fade-in-animation block-layout">
                <h3 className="step-title">3. Fill Out The Form</h3>
                <p className="step-desc">
                  Filling out the form is easy. In the 'order details', write FreeStyle Libre 2 Plus Sensor, and if a reader is required, write FreeStyle Libre 2 reader on a separate line, like in this picture:
                </p>
                
                <div className="table-wrapper">
                   <table className="dva-table">
                     <thead>
                       <tr className="table-header-row">
                         <th className="table-th-main" colSpan={4}>
                            Order details <span className="table-th-italic">(Health Provider to complete)</span>
                         </th>
                       </tr>
                       <tr className="table-subheader-row">
                         <th className="table-th th-col-1">DVA Item No.</th>
                         <th className="table-th th-col-2 text-center">Supplier's Product<br/>Catalogue No.</th>
                         <th className="table-th th-col-3">Description of diabetes product (e.g. brand, model)</th>
                         <th className="table-th th-col-4 text-center">Quantity<br/>(3 months<br/>supply)</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr className="table-body-row bg-blue-tint">
                         <td className="table-td"></td>
                         <td className="table-td"></td>
                         <td className="table-td font-bold-dark">FreeStyle Libre 2 Plus sensor</td>
                         <td className="table-td-no-border"></td>
                       </tr>
                       <tr className="table-body-row bg-blue-tint">
                         <td className="table-td"></td>
                         <td className="table-td"></td>
                         <td className="table-td font-semibold-gray">(optional) FreeStyle Libre 2 reader</td>
                         <td className="table-td-no-border"></td>
                       </tr>
                     </tbody>
                   </table>
                </div>
                
                <p className="important-note">
                  You do not have to fill out the DVA Item No.,<br/>
                  Supplier's Product Catalogue No., or Quantity
                </p>
              </div>
            )}
            
            {activeStep === 1 && (
              <div className="step-content fade-in-animation flex-center-layout">
                <h3 className="step-title">1. Consult Your Healthcare Professional</h3>
                <p className="step-desc">
                   Discuss with your doctor or diabetes educator to ensure FreeStyle Libre 2 Plus is right for you and get the necessary DVA forms.
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div className="step-content fade-in-animation flex-center-layout">
                <h3 className="step-title">2. Download the Required Form</h3>
                <p className="step-desc">
                   Obtain the official DVA order form for continuous glucose monitoring products from the DVA website or your healthcare provider.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Who To Send The Form To Section */}
      <section className="send-section">
        <div className="send-container container">
          <h2 className="send-title">Who To Send The Form To...</h2>
          <div className="yellow-divider-center-last"></div>
          <p className="send-subtitle">
            Remember - You can print this form to fill in manually and then fax it, or you can fill it in directly from your web browser and email it.
          </p>
          
          <div className="tab-controls">
            <button
              onClick={() => setActiveCardType('gold')}
              className={`tab-btn ${activeCardType === 'gold' ? 'tab-btn-active' : ''}`}
            >
              Gold Card Holders
            </button>
            <button
              onClick={() => setActiveCardType('white')}
              className={`tab-btn tab-btn-bordered ${activeCardType === 'white' ? 'tab-btn-active' : ''}`}
            >
              White Card Holders
            </button>
          </div>

          <div className="tab-content fade-in-animation">
            {activeCardType === 'white' && (
              <p className="tab-pane">
                If you are a White Card holder (with diabetes as a DVA accepted condition) - Send the completed form to <a href="mailto:rapgeneralenquiries@dva.gov.au" className="orange-link-bold">rapgeneralenquiries@dva.gov.au</a>. DVA will check to ensure the client has an accepted condition of diabetes. If approved DVA will forward the order directly to a DVA contracted supplier.
              </p>
            )}
            {activeCardType === 'gold' && (
              <p className="tab-pane">
                If you are a Gold Card holder - Send the completed form directly to one of the listed DVA contracted suppliers found on the form itself. They will process your order and dispatch your sensors.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="next-section">
        <div className="next-container container">
          <div className="section-header-centered mb-16">
            <h2 className="next-title">What happens next?</h2>
            <div className="white-divider-center"></div>
          </div>
          
          <div className="next-grid">
            <div className="next-card">
              <p>Once approved you will be sent a regular order of FreeStyle Libre 2 Plus sensors to your home every 3 months.</p>
            </div>
            <div className="next-card">
              <p>Your supply of sensors will continue until DVA or the contracted supplier are advised that the items are no longer required.</p>
            </div>
            <div className="next-card">
              <p>Further details can be found at <br/><a href="http://www.dva.gov.au/diabetes" className="orange-link mt-2 break-words inline-block">www.dva.gov.au/diabetes</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container container">
          <div className="section-header-centered mb-10">
            <h2 className="section-title-light">Frequently Asked Questions</h2>
            <div className="yellow-divider-center-mb"></div>
          </div>
          
          <div className="faq-controls">
            <button onClick={toggleAllFaqs} className="expand-btn">
              {expandedFaqs.length === faqs.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button onClick={() => toggleFaq(index)} className="faq-btn group">
                  <span className="faq-question">{faq}</span>
                  {expandedFaqs.includes(index) ? (
                    <Minus className="faq-icon" />
                  ) : (
                    <Plus className="faq-icon" />
                  )}
                </button>
                {expandedFaqs.includes(index) && (
                  <div className="faq-answer fade-in-down">
                    <p className="faq-answer-box">For more specific details regarding this query, please contact DVA directly, consult your healthcare provider, or refer to the official DVA guidelines.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}