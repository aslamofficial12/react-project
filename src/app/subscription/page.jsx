"use client";

import { useEffect, useState } from "react";
import SubscribeForm from "../../components/SubscribeForm";
import "./style.css";
import FAQ from "../../components/faq/Faq";

export default function Subscription() {
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscription = async () => {
            try {
                const response = await fetch("/api/subscription");

                if (!response.ok) {
                    throw new Error("Failed to fetch subscription page");
                }

                const data = await response.json();

                console.log("Subscription API data:", data);

                setSubscription(data);
            } catch (error) {
                console.error("Subscription fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscription();
    }, []);

    // Loading
    if (loading) {
        return (
            <main className="products-section">
                <div className="loading">
                    <div className="loader"></div>
                    <p>Loading subscription page...</p>
                </div>
            </main>
        );
    }

    // Error
    if (error) {
        return (
            <main className="products-section">
                <p>Error: {error}</p>
            </main>
        );
    }

    // No data
    if (!subscription) {
        return (
            <main className="products-section">
                <p>No subscription data found.</p>
            </main>
        );
    }

    return (
        <div className="mainCard">

            {/* ================= SECTION 1 ================= */}
            <section className="sectionOne">

                <div className="sectionOne-content">

                    {/* Contentful title */}
                    <h1>
                        {subscription.title}
                    </h1>

                    {/* You can add description from Contentful later */}
                    <p>
                        {subscription.titleParagraph}
                    </p>

                    <a href="#">
                        {subscription.termsApply}
                    </a>

                    <div className="buttonHead">

                        <button className="ButtonOne">
                            Purchase for My Self
                        </button>

                        <button className="ButtonTwo">
                            Purchase for My Gift
                        </button>

                    </div>
                </div>

                <div className="sectionOne-image">

                    <img
                        // src="/Subscription_Hero_Desktop.webp"
                        src={subscription.mainbanner}
                        alt="Subscription"
                    />

                </div>

            </section>


            {/* ================= SECTION 2 ================= */}
            <section className="sectionTwo">

                <h1 className="sectionTwo-title">{subscription.sectionTwoTitle}
                  
                </h1>

                <hr className="yellow-line" />

                <div className="subscription-cards">

                    {/* CARD 1 */}
                    <div className="subscription-card">

                      

                        <img src={subscription.sectionTwoImage4week} />

                        <div className="card-content">

                            <h2>
                              {subscription.sectionTwoImage4weekTitle}
                            </h2>

                            <hr />

                            <ul>

                                <li className="highlight">
                                    Perfect for uninterrupted glucose management.
                                </li>

                                <li>
                                    Perfect for uninterrupted glucose management.
                                </li>

                                <li>
                                    No lock-in contracts. Pause or cancel any time.
                                </li>

                                <li>
                                    You're in charge. Terms apply.
                                </li>

                            </ul>

                            <button className="subscribe-btn">
                                Subscribe
                            </button>

                        </div>

                    </div>


                    {/* CARD 2 */}
                    <div className="subscription-card">

                        <img
                            src={subscription.sectionTwoImage4week}
                            alt="8 weeks"
                        />

                        <div className="card-content">

                            <h2>
                             {subscription.sectionTwoImage8weekTitle}
                            </h2>

                            <hr />

                            <ul>

                                <li className="highlight">
                                    Flexible for your needs, upgrade anytime.
                                </li>

                                <li>
                                    Perfect for uninterrupted glucose management.
                                </li>

                                <li>
                                    No lock-in contracts. Pause or cancel any time.
                                </li>

                                <li>
                                    You're in charge. Terms apply.
                                </li>

                            </ul>

                            <button className="subscribe-btn">
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SECTION 3 ================= */}
            <section className="section-three">

                <div className="section-three-container-one">

                    <div className="section-three-con-image">

                        <img
                            src="/Icon_ADC_FSL_Phone_Sound_Vibration_YBL_RGB_4.webp"
                            alt="phone-vibration"
                        />

                    </div>

                </div>

                <div
                    style={{ marginBottom: "50px" }}
                    className="section-three-container-two"
                >

                    <h2 style={{ padding: "0px" }}>
                        Never pay shipping, ever.
                        <br />
                        &
                        <br />
                        Every 6th order free!
                    </h2>

                </div>

            </section>


            {/* ================= SECTION 4 ================= */}
            <section className="sectionFour">

                <h2
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "0px",
                        fontSize: "40px",
                        fontFamily: "poppins",
                    }}
                >
                {subscription.sectionFourTitle}
                </h2>

                <hr className="yellow-line" />

                <p
                    style={{
                        textAlign: "center",
                        fontSize: "25px",
                        marginTop: "0px",
                    }}
                >
                    {/* Unlock more value with Subscribe and Save */}
                    {subscription.sectionFourSubTitle}
                </p>

                <div className="main-section-four">

                    <div className="section-four-head">

                        <div className="section-four-right">

                            <img
                                style={{
                                    borderRadius: "10px",
                                    padding: "30px",
                                }}
                                className="image-right"
                                src="/SubscriptionF_BImageMiddle_opt.webp"
                                alt="Subscription benefits"
                            />

                        </div>

                        <div className="section-four-left">

                            <h1
                                style={{
                                    fontSize: "35px",
                                    marginTop: "60px",
                                }}
                            >
                                Need an extra sensor
                                <br />
                                before your next
                                <br />
                                delivery?
                            </h1>

                            <hr className="yellow-line-two" />

                            <p style={{ fontSize: "25px" }}>
                                Get a top-up sensor, delivered with free shipping,
                                <br />
                                with just a couple of clicks.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SECTION 5 ================= */}
            <section className="sectionFive">

                <div className="main-section-four">

                    <div className="section-four-head">

                        <div
                            className="section-four-right"
                            style={{ marginTop: "120px" }}
                        >

                            <h1
                                style={{
                                    fontSize: "35px",
                                    marginTop: "60px",
                                }}
                            >
                                Flexible options to suit your needs 
                            </h1>

                            <hr className="yellow-line-two" />

                            <p style={{ fontSize: "25px" }}>
                                Choose between the 4-week or 8-week
                                <br />
                                subscription option, whichever works best for
                                <br />
                                your needs and lifestyle.
                            </p>

                        </div>

                        <div className="section-four-left">

                            <img
                                style={{
                                    borderRadius: "10px",
                                    padding: "30px",
                                }}
                                className="image-right"
                                src={subscription.loyaltyImageTwo}
                                alt="Flexible subscription options"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FAQ ================= */}
            <section className="sectionSeven">

                <h2
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "0px",
                        fontSize: "40px",
                        fontFamily: "poppins",
                    }}
                >
                    Frequently asked question
                </h2>

                <hr className="yellow-line" />

                <div className="sectionSevenHead">
                    <FAQ />
                </div>

            </section>


            {/* ================= HELPFUL RESOURCES ================= */}
            <section className="section-six">

                <h2
                    style={{
                        fontSize: "40px",
                        textAlign: "center",
                    }}
                >
                    Helpful Resources
                </h2>

                <hr className="yellow-line" />

                <div className="section-six-main">

                    <div className="section-six-head">

                        <div
                            className="section-six-one"
                            style={{
                                width: "33%",
                                padding: "30px",
                            }}
                        >

                            <img
                                src={subscription.helpResourceImageOne}
                                alt="Support"
                                style={{
                                    width: "500px",
                                    height: "400px",
                                    padding: "40px",
                                }}
                            />

                            <div style={{ marginLeft: "40px" }}>

                                <h1 style={{ fontSize: "30px" }}>
                                    Support
                                </h1>

                                <p style={{ fontSize: "18px" }}>
                                    We have all the information you need to have
                                    a great experience with the Libre 2 system,
                                    including videos, product manuals and FAQs.
                                </p>

                                <a
                                    href="#"
                                    style={{
                                        color: "blue",
                                        fontSize: "20px",
                                    }}
                                >
                                    Access Support
                                </a>

                            </div>

                        </div>


                        <div
                            className="section-six-two"
                            style={{
                                width: "33%",
                                padding: "30px",
                            }}
                        >

                            <img
                                src={subscription.helpResourceImageTwo}
                                alt="Product Support"
                                style={{
                                    width: "500px",
                                    height: "400px",
                                    padding: "40px",
                                }}
                            />

                            <h1
                                style={{
                                    fontSize: "30px",
                                    marginLeft: "40px",
                                }}
                            >
                                Product Support
                            </h1>

                            <p
                                style={{
                                    fontSize: "18px",
                                    marginLeft: "40px",
                                }}
                            >
                                Find out all the available options to access
                                the Libre 2 system.
                            </p>

                            <a
                                href="#"
                                style={{
                                    color: "blue",
                                    marginLeft: "40px",
                                    fontSize: "20px",
                                    marginTop: "20px",
                                }}
                            >
                                Learn The Basics
                            </a>

                        </div>


                        <div
                            className="section-six-three"
                            style={{
                                width: "33%",
                                padding: "30px",
                            }}
                        >

                            <img
                                src={subscription.helpResourceImageThree}
                                alt="Access Options"
                                style={{
                                    width: "500px",
                                    height: "400px",
                                    padding: "40px",
                                }}
                            />

                            <h1
                                style={{
                                    fontSize: "30px",
                                    marginLeft: "40px",
                                }}
                            >
                                Access Options
                            </h1>

                            <p
                                style={{
                                    fontSize: "18px",
                                    marginLeft: "40px",
                                    marginTop: "10px",
                                }}
                            >
                                Getting started with the FreeStyle
                                <br />
                                Libre 2 system
                            </p>

                            <a
                                href="#"
                                style={{
                                    color: "blue",
                                    marginLeft: "40px",
                                    fontSize: "20px",
                                }}
                            >
                                All Access Option
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SUBSCRIBE FORM ================= */}
            <section className="section-five">

                <SubscribeForm />

            </section>

        </div>
    );
}
