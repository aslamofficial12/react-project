"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [landing, setLanding] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("/api/home")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch home page");
                }

                return res.json();
            })
            .then((data) => {
                console.log("API data:", data);
                setLanding(data);
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

    if (!landing) {
        return null;
    }

    return (
        <main className="products-section">

            {/* Header */}
            <div className="products-header">

                <span className="section-tag">
                    Home Page
                </span>

                <h1 className="page-title">
                    InternalName:{landing.internalName}
                </h1>

                <p className="section-subtitle">
                    {landing.heroBannerHeadline}
                </p>

            </div>

            {/* Hero Banner */}
            <section
                className="hero-banner"
                style={{
                    backgroundImage: landing.heroBannerImage
                        ? `url(${landing.heroBannerImage})`
                        : "none",
                }}
            >
                <h2
                    style={{
                        color: landing.heroBannerHeadlineColor,
                    }}
                >
                    {landing.heroBannerHeadline}
                </h2>
            </section>



            <div className="product-image-container">
                <span className="product-badge">
                    NEW
                </span>

                <img
                    src={`https:${landing.heroBannerImage}`}
                    alt={landing.heroBannerImage}
                    className="product-image"
                    style={{hieght:"400px",width:"800px"}}
                />
            </div>









        </main>
    );
}