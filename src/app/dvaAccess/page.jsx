"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import './styles.css'; 
import SubscribeForm from '../../components/SubscribeForm';

export default function DVALandingPage() {
  const [activeStep, setActiveStep] = useState(3);
  const [activeCardType, setActiveCardType] = useState('white');
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  
  const [dva1, setDva1] = useState();
  const [dva2, setDva2] = useState();
  const [faq, SetFaq] = useState();

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch("/api/dvaAccess").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch ndss2 data");
        return res.json();
      }),
      fetch("/api/dvaAccess2").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch ndss data");
        return res.json();
      }),
      fetch("/api/faq").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch ndss data");
        return res.json();
      })
    ])
      .then(([dva1, dva2, faq]) => {
        console.log("NDSS2 API data:", dva1);
        console.log("NDSS API data:", dva2);
        setDva1(dva1);
        setDva2(dva2);
        SetFaq(faq);
      })
      .catch((error) => {
        console.error("Failed to fetch API data:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="products-section">
        <div className="loading">
          <div className="loader"></div>
          <p>Loading home page...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-section">
        <p>Error: {error}</p>
      </main>
    );
  }

  // CORRECTED CONDITIONAL CHECK
  if (!dva1 || !dva2 || !faq) {
    return null;
  }

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


      





  
                <section className="one">

                    <div className="head">

                        <div className="right">
                            <h2>{datas.maintitle}</h2>
                            <h2>Options for Accessing FreeStyle<br></br> Libre 2 Plus</h2>
                            <h2>{datas.maintitle}</h2>

                            <p>There are multiple ways to access the FreeStyle Libre 2 system,<br></br> we'll help you find the best option.</p>

                            <div className="buttonhead">
                                <button>{datas.diabetesType1label}</button>
                                <button>{datas.diabetesType2label}</button>
                            </div>


                        </div>

                        <div className="left">
{/* 
                            <img src="Digital_Large_Transparent_Bknd_7_1_.webp" style={{ width: "700px", height: "500px", borderRadius: "500px" }} alt="image" /> */}


        <img src={`https:${datas.image1}`}
                                alt={datas.image1}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "500px" }} />


                        </div>
                    </div>

                </section>

      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container container">
          <div className="hero-text-content">
            <h1 className="hero-title">
                {dva1.title}
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
             {dva1.intro}
             {dva2.whiteCardTabLabel}
             {faq.faqTitle}
          </h2>
          <p className="paragraph-text">
            {dva1.infoTitle}
          </p>
          <p className="paragraph-text">
            {dva1.importantNote}
          </p>
          <p className="paragraph-text">
            {dva1.newMemberMessage}
          </p>
        </div>
      </section>

      {/* What You Need To Know Section */}
      <section className="info-section">
        <div className="info-container container">
          <h2 className="section-title-light">What you need to know.</h2>
          <div className="yellow-divider-center-hr"></div>
          <p className="paragraph-text mb-6">
             {dva1.intro}
          </p>
          <p className="paragraph-text">
            {dva1.regularOrderMessage}
           
          </p>
        </div>
      </section>

      {/* Who Is Eligible Section */}
      <section className="eligible-section">
        <div className="eligible-container container">
          <div className="section-header-centered">
            <h2 className="section-title-uppercase">{dva1.eligibleTitle}</h2>
            <div className="yellow-divider-center"></div>
          </div>
          
          <div className="cards-grid">
            {/* Gold Card */}
            <div className="card-wrapper">
              <div className="card-visual card-visual-gold">
                 <div className="card-inner">
                    <div className="card-top">
                        <div className="card-gov-text">{dva1.goldCardGovernmentText}</div>
                        <div className="card-type-text">
                           <div className="card-type-title">{dva1.goldCardTypeTitle}</div>
                           <div className="card-type-subtitle text-gray-800">{dva1.goldCardTypeSubtitle}</div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-name">{dva1.goldCardName}</div>
                        <div className="card-details text-gray-900">
                           {dva1.goldCardFileNo}<br/>
                           {dva1.goldCardExpiry}<br/>
                          
                        </div>
                    </div>
                 </div>
              </div>
              <div className="card-text-content">
                <h3 className="card-title">{dva1.goldCardTitle}</h3>
                <p className="card-subtitle">
                  {dva1.goldCardSubtitle}
                  {/* (includes family members of veterans who also hold a gold card) */}
                </p>
                <p className="card-desc">
                  {dva1.goldCardDescription}
                  
                 
                </p>
              </div>
            </div>

            {/* White Card */}
            <div className="card-wrapper">
              <div className="card-visual card-visual-white">
                 <div className="card-inner">
                    <div className="card-top">
                        <div className="card-gov-text">{dva1.whiteCardGovernmentText}</div>
                        <div className="card-type-text">
                           <div className="card-type-title">{dva1.whiteCardTypeTitle}</div>
                           <div className="card-type-subtitle text-gray-500">{dva1.whiteCardTypeSubtitle}</div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-name">{dva1.whiteCardName}</div>
                        <div className="card-details text-gray-700">
                           {dva1.whiteCardFileNo}<br/>
                           {dva1.whiteCardExpiry}<br/>
                           {/* or on recall  06/20 */}
                        </div>
                    </div>
                 </div>
              </div>
              <div className="card-text-content">
                <h3 className="card-title">{dva1.whiteCardTitle}</h3>
                <p className="card-subtitle">
                  ({dva1.whiteCardSubtitle})
                </p>
                <p className="card-desc">
                  {dva1.whiteCardDescription} 
                  {/* If you are a Veteran and are yet to have 'diabetes' as approved as an accepted condition, <span className="orange-link">applications can be made online</span>, or with assistance from an <span className="orange-link">Advocate</span>. */}
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
            {dva1.accessTitle}
            {/* How to access FreeStyle Libre 2 Plus through the DVA */}
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
                            {dva1.orderDetailsHeader} <span className="table-th-italic">({dva1.healthProviderLabel})</span>
                         </th>
                       </tr>
                       <tr className="table-subheader-row">
                         <th className="table-th th-col-1">{dva1.dvaItemNoHeader}</th>
                         <th className="table-th th-col-2 text-center">{dva1.supplierCatalogueNoHeader}</th>
                         <th className="table-th th-col-3">{dva1.descriptionHeader}</th>
                         <th className="table-th th-col-4 text-center">{dva1.quantityHeader}</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr className="table-body-row bg-blue-tint">
                         <td className="table-td"></td>
                         <td className="table-td"></td>
                         <td className="table-td font-bold-dark">{dva1.sensorProductName}</td>
                         <td className="table-td-no-border"></td>
                       </tr>
                       <tr className="table-body-row bg-blue-tint">
                         <td className="table-td"></td>
                         <td className="table-td"></td>
                         <td className="table-td font-semibold-gray">{dva1.readerProductName}</td>
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
          <h2 className="send-title">{dva1.sendTitle}</h2>
          <div className="yellow-divider-center-last"></div>
          <p className="send-subtitle">
            {dva1.sendDescription}
            {/* Remember - You can print this form to fill in manually and then fax it, or you can fill it in directly from your web browser and email it. */}
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
          

              {dva2.whiteCardTabLabel}
            </button>
          </div>

          <div className="tab-content fade-in-animation">
            {activeCardType === 'white' && (
              <p className="tab-pane">
                working
                {dva2.whiteCardSendMessage}
                {/* If you are a White Card holder (with diabetes as a DVA accepted condition) - Send the completed form to <a href="mailto:rapgeneralenquiries@dva.gov.au" className="orange-link-bold">rapgeneralenquiries@dva.gov.au</a>. DVA will check to ensure the client has an accepted condition of diabetes. If approved DVA will forward the order directly to a DVA contracted supplier. */}
              </p>
            )}
            {activeCardType === 'gold' && (
              <p className="tab-pane">
                {dva2.goldCardSendMessage}
                {/* If you are a Gold Card holder - Send the completed form directly to one of the listed DVA contracted suppliers found on the form itself. They will process your order and dispatch your sensors. */}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="next-section">
        <div className="next-container container">
          <div className="section-header-centered mb-16">
            <h2 className="next-title">{dva2.nextTitle}</h2>
            <div className="white-divider-center"></div>
          </div>
          
          <div className="next-grid">
            <div className="next-card">
              
              <p>{dva2.nextMessage1}</p>
            </div>
            <div className="next-card">

              <p>{dva2.nextMessage2}</p>
            </div>
            <div className="next-card">
              
              <p>{dva2.nextMessage3}<br></br> <a href={dva1.nextLink} className="orange-link mt-2 break-words inline-block">{dva2.nextLink}</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container container">
          <div className="section-header-centered mb-10">
            <h2 className="section-title-light">{faq.faqTitle}</h2>
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
                    <p className="faq-answer-box">{faq.faq1Answer}For more specific details regarding this query, please contact DVA directly, consult your healthcare provider, or refer to the official DVA guidelines.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="subscribeform">
            <SubscribeForm />
        </div>
      </section>
    </div>
  );
}