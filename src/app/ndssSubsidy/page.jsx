"use client";
import React, { useEffect, useState } from "react";
import SubscribeForm from "../../components/SubscribeForm";
import "./style.css";

export default function ndssSubsidy() {
    // State to track which tab is currently active ('full' or 'copay')
    const [activeTab, setActiveTab] = useState('full');

    // State to track active step in the 'How to gain access' section
    const [activeStep, setActiveStep] = useState(1);

    const [datas, setDatas] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();


 useEffect(() => {
        setLoading(true);

        fetch("/api/ndss2")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch home page");
                }

                return res.json();
            })
            .then((data) => {
                console.log("API data:", data);
                setDatas(data);
            })
            .catch((error) => {
                console.error("Failed to fetch home page:", error);
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

    if (!datas) {
        return null;
    }





    return (
        <>
            <div className="main">
                <section className="one">
                    <div className="headOne">
                        <div className="sect-one-right">
                            {/* <h2>Accessing the NDSS CGM subsidy for Australians living with type 1 diabetes </h2> */}
                            <h2>{datas.step3title}</h2>
                        </div>
                        <div className="sect-two-right">
                            <img src="Digital_Large_Transparent_Bknd_7.webp"></img>
                        </div>
                    </div>
                </section>


               

                <section className="two">
                    <div className="two-head">
                        <h1>FreeStyle Libre 3 Plus Webinar - 16th September 7pm AEST</h1>
                        <h1></h1>
                        <hr></hr>
                        <h2>Join the Libre team for a free online session to learn more about the world's smallest CGM sensor.</h2>

                        <h3><strong>What’s in store:</strong></h3>
                        <ul>
                            <li>Overview of the NEW Libre 3 Plus sensor</li>
                            <li>How to use as a standalone sensor with the NEW Libre app12</li>
                            <li>Available automated insulin delivery (AID) integrations</li>
                            <li>How to access Libre 3 Plus through the NDSS</li>
                        </ul>
                        <h3><strong>Who is this session for? </strong>This session is best suited for people living with type 1 diabetes.</h3>
                        <h3><strong>Date & Time:</strong> Wednesday 16 September, 7.00pm AEST.</h3>
                        <h3><strong>Where:</strong> Online; join from anywhere in Australia.</h3>
                        <h3><strong>Cost:</strong> Free</h3>

                        <div className="sect-one-head-button">
                            <button className="headbutton">Register Now</button>
                        </div>
                    </div>
                </section>

                <section className="three">
                    <div className="sect-three-head">
                        <div className="threeHead-left">
                            <h2>FreeStyle Libre 3 Plus will be available via Type 1 subsidy as a standalone sensor (no AID required) from 1st October 2026.</h2>
                            <hr></hr>
                            <h3>We're excited to announce that more Australians will soon have access to Libre 3 Plus, bringing the world's smallest sensor to even more people who rely on glucose monitoring every day.</h3>
                            <p>Powering the Libre 3 Plus sensor is the all-new Libre app¹², featuring a refreshed, intuitive design that makes it easier to access the information you need. The new Libre app¹² works with both Libre 2 Plus and Libre 3 Plus sensors, and is required if using the Libre 3 Plus.</p>
                            <p>For people who prefer to use a reader, do not have a compatible smartphone, or are scanning the NovoPen® 6, the Libre 2 Plus sensor will remain available through the NDSS. (check your compatibility)</p>
                            <p>Users wishing to upgrade from another subsidised CGM (including the Libre 2 Plus) can make an appointment with their authorised healthcare professional from 1st October 2026.</p>
                        </div>
                        <div className="threeHead-right">
                            <img src="SMALL_print_ready_5in_300dpi-ADC_PHOTO_FSL3_Cafe_Date_Global_0364_1 (1).webp"></img>
                        </div>
                    </div>
                    <div className="sect-three-button-head"><button>More about Libre 3 Plus</button><button>More about the Libre app</button></div>
                </section>

                <section className="four">
                    <div className="sect-four-head">
                        <h2>
                            The Omnipod® 5 system will soon become compatible with the Libre 3 Plus sensor.</h2>
                        <hr></hr>
                        <p>Libre 3 Plus sensor integration with the Omnipod® 5 Automated Insulin Delivery System will be available in Australia soon. Users wishing to upgrade from another subsidised CGM device to the Libre 3 Plus sensor for use with the Omnipod® 5 system will need to see their authorised healthcare professional once the integration is available.</p>
                        <p>More information on the date of availability will be announced soon. Sign up to our newsletter to be the first to receive updates.</p>
                    </div>
                </section>

                <section className="five">
                    <div className="sect-six-head">
                    </div>
                </section>

                <section className="six">
                    <div className="sixHead">
                        <div className="sixHeadRight first-product-content">
                            <img src="FSL3_Availability_options_v2-02 (1).webp"></img>

                            <h2 className="sixTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <button className="first-add-cart">add to cart</button>
                        </div>
                        <div className="sixHeadLeft">
                            <img src="FSL3_Availability_options_v2-02 (1).webp"></img>
                            <h2 className="sixTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <button className="first-add-cart">add to cart</button>
                        </div>
                        <div className="sixHeadLeft">
                            <img src="FSL3_Availability_options_v2-03 (1).webp"></img>
                            <h2 className="sixTitle">FreeStyle Libre 2 Plus Sensor</h2>
                            <button className="first-add-cart">add to cart</button>
                        </div>
                    </div>
                </section>

                <section className="seven">
                    <div className="seven-head">
                        <div className="seven-left">
                            <h2>How to switch to the FreeStyle Libre 2 Plus or Libre 3 Plus sensor from another device</h2>
                            <hr></hr>
                            <p>The Libre 2 Plus and Libre 3 Plus sensors are the latest innovations to the Libre system. To switch to these sensors from your current Libre sensor or to upgrade from a competitor device, follow these steps:</p>
                            <ol>
                                <li> Complete the following switch form Continuous and Flash Glucose Monitoring Access Form: Updating or Ceasing Access</li>
                                <li>Have your authorised diabetes healthcare professional sign the form.</li>
                                <li>Your healthcare professional can then lodge the form through the NDSS online portal, or it can be lodged by emailing it to info@ndss.com.au, or post it to GPO Box 9824 in your capital city.</li>
                            </ol>
                            <p>Once the form has been processed, you will receive a notification from the NDSS. Further information is available at ndss.com.au or by calling the NDSS Helpline on 1800 637 700.</p>
                            <button>CGM Switch Form</button>
                        </div>
                        <div className="seven-right">
                            <img src="SMALL_print_ready_5in_300dpi-ADC_PHOTO_FSL3_Cafe_Date_Global_0364_1 (1).webp"></img>
                        </div>
                    </div>
                </section>

                {/* <section className="eight">
                    <div className="eightHead">
                        <hr />
                        <div className="eight-button-head">
                            <button className="eight-button-one"></button><button className="eight-button-two"></button>
                        </div>
                        <h1>1. Make An Appointment</h1>
                        <p>Make an appointment with an authorised health practitioner, such as the following:</p>
                    </div>
                </section> */}

                <section className="eight">
                    <div className="eight-container">
                        <h2>New to the NDSS Type 1 CGM Subsidy? Here's how to gain access.</h2>
                        <hr className="white-line" />

                        {/* Tab Navigation */}
                        <div className="tabs-container">
                            <button
                                className={`tab ${activeStep === 1 ? 'active' : ''}`}
                                onClick={() => setActiveStep(1)}
                            >
                                Step 1
                            </button>
                            <button
                                className={`tab ${activeStep === 2 ? 'active' : ''}`}
                                onClick={() => setActiveStep(2)}
                            >
                                Step 2
                            </button>
                            <button
                                className={`tab ${activeStep === 3 ? 'active' : ''}`}
                                onClick={() => setActiveStep(3)}
                            >
                                Step 3
                            </button>
                        </div>

                        {/* Step 1 Content */}
                        {activeStep === 1 && (
                            <div className="tab-content fade-in">
                                <h3>1. Make An Appointment</h3>
                                <p className="tab-desc">
                                    Make an appointment with an authorised health practitioner, such as the following:
                                </p>

                                {/* List Grid */}
                                <div className="appointment-grid">
                                    <div className="grid-col left-col">
                                        <ul>
                                            <li>Endocrinologist</li>
                                            <li>Credentialled diabetes educator</li>
                                            <li>Diabetes Nurse Practitioner</li>
                                        </ul>
                                    </div>
                                    <div className="grid-col right-col">
                                        <ul>
                                            <li>Physician</li>
                                            <li>Paediatrician</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2 Content */}
                        {activeStep === 2 && (
                            <div className="tab-content fade-in" style={{ textAlign: "center" }}>
                                <h3>2. Review your eligibility</h3>
                                <p className="tab-desc" style={{ marginTop: "20px" }}>
                                    Review your Eligibility Criteria included on this page to understand if you fall into a category that is eligible for fully subsidised FreeStyle Libre 2 Plus sensors, or the co-pay subsidy.
                                </p>
                            </div>
                        )}

                        {/* Step 3 Content */}
                        {activeStep === 3 && (
                            <div className="tab-content fade-in" style={{ textAlign: "center" }}>
                                <h3>{datas.step3title}</h3>
                                {/* <p className="tab-desc" style={{ marginTop: "20px" }}>
                                    The form can be lodged through the NDSS online portal, by emailing it to info@ndss.com.au, or by post to GPO Box 9824 in your capital city.
                                </p> */}
                                <p className="tab-desc" style={{ marginTop: "20px" }}>
                                    {datas.step3description}
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* --- UPDATED INTERACTIVE ELIGIBILITY SECTION --- */}
                <section className="eligibility-section">
                    <div className="eligibility-container">

                        {/* Static Header */}
                        <div className="eligibility-header">
                            <h2>{datas.eligibilityTitle}</h2>
                            <hr className="yellow-divider" />
                            <p>
                                {/* Use this information to understand if you fall into a category that is eligible for fully
                                subsidised Libre sensors, or the co-pay subsidy. */}
                            {datas.eligibilityDescription}
                            </p>
                        </div>

                        {/* Interactive Tabs */}
                        <div className="main-tabs">
                            <button
                                className={`main-tab ${activeTab === 'full' ? 'active' : 'inactive'}`}
                                onClick={() => setActiveTab('full')}
                            >
                            {datas.fullSubsidyTabLabel}
                            </button>
                            <button
                                className={`main-tab ${activeTab === 'copay' ? 'active' : 'inactive'}`}
                                onClick={() => setActiveTab('copay')}
                            >
                                Co-Payment Subsidy
                            </button>
                        </div>

                        {/* --- CONTENT: FULL SUBSIDY (4-Column Layout) --- */}
                        {activeTab === 'full' && (
                            <div className="tab-content fade-in">
                                <div className="full-subsidy-header">
                                    <h3>{datas.fullSubsidyTitle}</h3>
                                    <span className="yellow-bar"></span>
                                    <p className="subsidy-main-text">
                                        {/* The following four categories are eligible for fully<br />
                                        subsidised access to Libre sensors */}
                                        {datas.fullSubsidyMainText}
                                    </p>
                                    <p className="subsidy-sub-text">
                                        {/* If you are not eligible for these subsidy types, you may be<br />
                                        eligible for the co-payment subsidy. */}
                                        {datas.fullSubsidySecondaryText}
                                    </p>
                                </div>

                                <div className="subsidy-grid">
                                    {/* Card 1 */}
                                    <div className="subsidy-card">
                                        <div className="card-img-wrap">
                                            <img src="Digital_Large_Transparent_Bknd_7.webp" alt="Type 1 diabetes: aged under 21" />
                                        </div>
                                        <h4>{datas.fullSubsidyCard1Title}</h4>
                                        
                                        <button className="learn-more-btn">{datas.fullSubsidyCard2ButtonText}</button>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="subsidy-card">
                                        <div className="card-img-wrap">
                                            <img src="Digital_Large_Transparent_Bknd_7.webp" alt="Type 1 diabetes: aged 21 years and older with valid concessional status" />
                                        </div>
                                        <h4>{datas.fullSubsidyCard2Title}</h4>
                                        <button className="learn-more-btn">{datas.fullSubsidyCard2ButtonText}</button>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="subsidy-card">
                                        <div className="card-img-wrap">
                                            <img src="Digital_Large_Transparent_Bknd_7.webp" alt="Type 1 diabetes: pregnancy planning" />
                                        </div>
                                        <h4>{datas.fullSubsidyCard3Title}</h4>
                                        <button className="learn-more-btn">{datas.fullSubsidyCard3ButtonText}</button>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="subsidy-card">
                                        <div className="card-img-wrap">
                                            <img src="Digital_Large_Transparent_Bknd_7.webp" alt="Conditions similar to type 1 diabetes: aged under 21 years" />
                                        </div>
                                        <h4>{datas.fullSubsidyCard4Title}</h4>
                                        <button className="learn-more-btn">{datas.fullSubsidyCard4ButtonText}</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- CONTENT: CO-PAYMENT SUBSIDY --- */}
                        {activeTab === 'copay' && (
                            <div className="tab-content fade-in">
                                <div className="content-header">
                                    <h3>{datas.coPaymentSubsidyTabLabel}</h3>
                                    <hr className="yellow-divider center" />
                                    <p className="content-subtitle">
                                        {/* <strong>The co-payment subsidy is available to those who are <br /> not eligible for a full NDSS subsidy.</strong> */}
                                        <strong>{datas.coPaymentSubsidyDescription} <br /> </strong>
                                        
                                    </p>
                                </div>

                                <div className="sub-nav">
                                    <button className="dark-btn active-pill">{datas.coPaymentNavigationLabel}</button>
                                </div>

                                <div className="info-split">
                                    <div className="info-left">
                                        <img src="/tennis-image.jpg" alt="Tennis player" className="info-image" />
                                    </div>
                                    <div className="info-right">
                                        {/* <p>
                                            The co-payment subsidy is available to Australians with type 1 diabetes who are not
                                            eligible for a full NDSS subsidy. The co-payment amount for each Libre 2 Plus or
                                            Libre 3 Plus sensor is $17.90 per box. You can order up to 3 months' supply (6 boxes)
                                            in one transaction, to ensure you always have a sensor on hand.
                                        </p> */}
                                        <p>
                                            {datas.coPaymentInformation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </section>

                <div className="info-page-container">
                    {/* --- Yellow Curved Banner --- */}
                    <section className="curved-yellow-banner">
                        <div className="banner-content">
                            <h2>{datas.nextStepsTitle}</h2>
                            <p>
                                {/* Once your application receives approval, you will receive a notification. Following this,
                                you may collect your designated sensors from an authorized distribution point, typically
                                a local pharmacy. To maintain a steady supply, you are permitted to order a maximum of
                                six sensors (a three-month allocation) per transaction. */}

                                {datas.nextStepsDescription}
                            </p>
                            <hr className="white-divider" />
                        </div>
                    </section>

                    {/* --- White Informational Section --- */}
                    <section className="white-info-section">
                        <div className="info-content">
                            <h2>
                                {/* Funding Application Updates – Supporting the <br className="desktop-only" />
                                Type 2 Insulin-Requiring Community */}
                                {datas.fundingUpdatesTitle}
                            </h2>
                            <hr className="yellow-divider" />
                            <p>
                                {/* We are actively collaborating with regulatory committees to broaden continuous glucose monitor
                                access for individuals managing type 2 diabetes with insulin. Recent parliamentary inquiries
                                have highlighted this demographic as a priority for subsidized access. Given that international
                                precedents already support funding for this group, we remain dedicated to advocating on behalf
                                of the diabetes community, their families, and caregivers. */}
                                {datas.fundingUpdatesDescription}
                            </p>
                        </div>
                    </section>
                </div>

                <section className="last">
                    <SubscribeForm />
                </section>

            </div>
        </>
    );
}