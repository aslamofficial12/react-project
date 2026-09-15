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
    const [dataTwo, setdataTwo] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);

        // Promise.all use panni rendu API-yum orey nerathula fetch panrom
        Promise.all([
            fetch("/api/ndss2").then((res) => {
                if (!res.ok) throw new Error("Failed to fetch ndss2 data");
                return res.json();
            }),
            fetch("/api/ndss").then((res) => {
                if (!res.ok) throw new Error("Failed to fetch ndss data");
                return res.json();
            })
        ])
            .then(([ndss2Data, ndssData]) => {
                console.log("NDSS2 API data:", ndss2Data);
                console.log("NDSS API data:", ndssData);
                setDatas(ndss2Data);
                setdataTwo(ndssData);
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

    if (!datas || !dataTwo) {
        return null;
    }

    return (
        <>
            <div className="main">
                <section className="one">
                    <div className="headOne">
                        <div className="sect-one-right">
                            {/* <h2>Accessing the NDSS CGM subsidy for Australians living with type 1 diabetes </h2> */}
                            <h2>{dataTwo.pageTitle}</h2>
                        </div>
                        <div className="sect-two-right">
                            {/* <img src="Digital_Large_Transparent_Bknd_7.webp"></img> */}


                            {/* <img src={`https:${dataTwo.heroimage}`}
                                alt={dataTwo.heroimage}
                                className="product-image"
                                // style={{ hieght: "400px", width: "800px" }}
                                style={{ width: "700px", height: "500px", borderRadius: "500px" }} /> */}

                            <img
                                src={`https:${dataTwo?.heroImage?.fields?.file?.url}`}
                                alt={dataTwo?.heroImage?.fields?.title || "Hero Image"}
                                className="product-image"
                                style={{ width: "700px", height: "500px", borderRadius: "500px" }}
                            />

                        </div>
                    </div>
                </section>


                <section className="two">
                    <div className="two-head">
                        <h1>{dataTwo.webinarTitle}</h1>
                        <h1></h1>
                        <hr></hr>
                        <h2>{dataTwo.webinarDescription}</h2>

                        <h3><strong>{dataTwo.webinarHighlightsTitle}</strong></h3>
                        <ul>
                            <li>Overview of the NEW Libre 3 Plus sensor</li>
                            <li>How to use as a standalone sensor with the NEW Libre app12</li>
                            <li>Available automated insulin delivery (AID) integrations</li>
                            <li>How to access Libre 3 Plus through the NDSS</li>
                        </ul>
                        <h3><strong>{dataTwo.webinarAudienceLabel}</strong>{dataTwo.webinarAudience}</h3>
                        <h3><strong>{dataTwo.webinarDateLabel}</strong>{dataTwo.webinarDate}</h3>
                        <h3><strong>{dataTwo.webinarLocationLabel}</strong> {dataTwo.webinarLocation}</h3>
                        <h3><strong>{dataTwo.webinarCostLabel}</strong> {dataTwo.webinarCost}</h3>

                        <div className="sect-one-head-button">
                            <button className="headbutton">{dataTwo.webinarButtonText}</button>
                        </div>
                    </div>
                </section>

                <section className="three">
                    <div className="sect-three-head">
                        <div className="threeHead-left">
                            <h2>{dataTwo.libre3PlusAvailabilityTitle}</h2>
                            <hr></hr>
                            <h3>{dataTwo.libre3PlusAvailabilityIntro}</h3>
                            <p>{dataTwo.libreAppDescription}</p>
                            <p>{dataTwo.libre2PlusReaderDescription}</p>
                            <p>{dataTwo.libreUpgradeDescription}</p>
                        </div>
                        <div className="threeHead-right">
                            <img src="SMALL_print_ready_5in_300dpi-ADC_PHOTO_FSL3_Cafe_Date_Global_0364_1 (1).webp"></img>

                               {/* <img
                                src={`https:${dataTwo?.heroImage?.fields?.file?.url}`}
                                alt={dataTwo?.heroImage?.fields?.title || "Hero Image"}
                                className="product-image"
                                style={{ width: "700px", height: "500px", borderRadius: "500px" }}
                            />
 */}






                        </div>
                    </div>
                    <div className="sect-three-button-head"><button>{dataTwo.libre3PlusButtonText}</button><button>{dataTwo.libreAppButtonText}</button></div>
                </section>

                <section className="four">
                    <div className="sect-four-head">
                        <h2>{dataTwo.omnipod5Title}
                        </h2>
                        <hr></hr>
                        <p>{dataTwo.omnipod5Description}</p>
                        <p>{dataTwo.omnipod5UpdateDescription} </p>
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

                            <h2 className="sixTitle">{dataTwo.product1title}</h2>
                            <button className="first-add-cart">{dataTwo.product1buttonText}</button>
                        </div>
                        <div className="sixHeadLeft">
                            <img src="FSL3_Availability_options_v2-02 (1).webp"></img>
                            <h2 className="sixTitle">{dataTwo.title}</h2>
                            <button className="first-add-cart">{dataTwo.buttonText}</button>
                        </div>
                        <div className="sixHeadLeft">
                            <img src="FSL3_Availability_options_v2-03 (1).webp"></img>
                            <h2 className="sixTitle">{dataTwo.title}</h2>
                            <button className="first-add-cart">{dataTwo.buttonText}</button>
                        </div>
                    </div>
                </section>

                <section className="seven">
                    <div className="seven-head">
                        <div className="seven-left">
                            <h2>{dataTwo.switchSensorTitle}</h2>
                            <hr></hr>
                            <p>{dataTwo.switchSensorDescription}</p>
                            <ol>
                                <li> Complete the following switch form Continuous and Flash Glucose Monitoring Access Form: Updating or Ceasing Access</li>
                                <li>Have your authorised diabetes healthcare professional sign the form.</li>
                                <li>Your healthcare professional can then lodge the form through the NDSS online portal, or it can be lodged by emailing it to info@ndss.com.au, or post it to GPO Box 9824 in your capital city.</li>
                            </ol>
                            <p>{dataTwo.switchSensorCompletionDescription}</p>
                            <button>{dataTwo.switchSensorButtonText}</button>
                        </div>
                        <div className="seven-right">
                            <img src="SMALL_print_ready_5in_300dpi-ADC_PHOTO_FSL3_Cafe_Date_Global_0364_1 (1).webp"></img>
                        </div>
                    </div>
                </section>

                <section className="eight">
                    <div className="eight-container">
                        <h2>{dataTwo.accessStepsTitle}</h2>
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
                                <h3>{dataTwo.step1Title}</h3>
                                <p className="tab-desc">{dataTwo.step1Description}

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
                                        {datas.fullSubsidyMainText}
                                    </p>
                                    <p className="subsidy-sub-text">
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
                                {datas.nextStepsDescription}
                            </p>
                            <hr className="white-divider" />
                        </div>
                    </section>

                    {/* --- White Informational Section --- */}
                    <section className="white-info-section">
                        <div className="info-content">
                            <h2>
                                {datas.fundingUpdatesTitle}
                            </h2>
                            <hr className="yellow-divider" />
                            <p>
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