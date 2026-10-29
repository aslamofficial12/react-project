
"use client";

import SubscribeForm from "../../components/SubscribeForm";
import "./style.css";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Connect your compatible NovoPen device with the FreeStyle Libre system to bring insulin and glucose information together in one place.",
    image: "/Novopen_resized.webp",
    imageAlt: "NovoPen insulin pen",
    imageSide: "right",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Review your glucose patterns alongside insulin information to get a clearer picture of your daily diabetes management.",
    image: "/00_FreeStyleLibre2.webp",
    imageAlt: "FreeStyle Libre app logbook on a smartphone",
    imageSide: "left",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Share relevant diabetes information with your healthcare professional to support more informed conversations about your care.",
    image: "/Circle_1.webp",
    imageAlt: "Person using connected diabetes management technology",
    imageSide: "right",
  },
];

export default function NovoPenPage() {
  return (
    <main className="novopen-page">
      {/* Hero section */}
      <section className="np-hero">
        <div className="np-container np-hero-inner">
          <div className="np-hero-content">
            <span className="np-eyebrow">
              CONNECTED DIABETES MANAGEMENT
            </span>

            <h1>
              NovoPen and
              <br />
              App Integration
            </h1>

            <span className="np-title-line" />

            <p>
              Bring insulin information and glucose data together
              to support a more connected view of your diabetes
              management.
            </p>

            <a className="np-button" href="#how-it-works">
              Discover how it works
              <span aria-hidden="true"> →</span>
            </a>
          </div>

          <div className="np-hero-visual">
            <div className="np-circle np-hero-circle">
              <img
                src="/AUFSL1856_Retouching_Web.webp"
                alt="NovoPen and connected diabetes management"
                fetchPriority="high"
              />
            </div>
            <span className="np-circle-decoration" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="np-intro">
        <div className="np-container np-intro-grid">
          <div>
            <span className="np-eyebrow">A MORE CONNECTED VIEW</span>
            <h2>
              Your insulin and glucose data,
              <br className="np-desktop-break" />
              working together
            </h2>
            <span className="np-title-line" />
          </div>

          <div className="np-intro-copy">
            <p>
              Compatible NovoPen devices and the FreeStyle Libre
              system can help bring insulin dosing information
              and glucose readings into a more connected view,
              depending on your device, app, and region.
            </p>
            <p className="np-disclaimer">
              Device and app compatibility, availability, and
              integration features vary by country and product.
              Check the manufacturer's instructions to confirm
              whether your devices are compatible.
            </p>
          </div>
        </div>
      </section>

      {/* Yellow banner */}
      <section className="np-banner" id="how-it-works">
        <div className="np-container">
          <span className="np-banner-label">SIMPLE. CONNECTED. INFORMED.</span>
          <h2>3 easy steps for fully integrated data</h2>
          <p>
            Connect your devices, review your information, and
            share insights with your healthcare professional.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      <section className="np-steps">
        {steps.map((step) => (
          <article
            className={`np-feature np-feature-${step.number}`}
            key={step.number}
          >
            <div
              className={`np-container np-feature-inner ${
                step.imageSide === "left"
                  ? "np-feature-reverse"
                  : ""
              }`}
            >
              <div className="np-feature-content">
                <span className="np-step-number">
                  STEP {step.number}
                </span>

                <h2>{step.title}</h2>
                <span className="np-title-line" />

                <p>{step.description}</p>

                {step.number === "01" && (
                  <p className="np-feature-note">
                    Check device compatibility and follow the
                    setup instructions for your specific products.
                  </p>
                )}

                {step.number === "02" && (
                  <p className="np-feature-note">
                    Available information depends on your
                    compatible devices and app configuration.
                  </p>
                )}

                {step.number === "03" && (
                  <p className="np-feature-note">
                    Discuss your results with your healthcare
                    professional before making treatment changes.
                  </p>
                )}
              </div>

              <div className="np-feature-visual">
                <div
                  className={`np-circle np-feature-circle ${
                    step.number === "02" ? "np-phone-circle" : ""
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    loading="lazy"
                  />
                </div>
                <span className="np-feature-orbit" />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Vimeo video */}
      <section className="np-video-section">
        <div className="np-container np-video-inner">
          <span className="np-eyebrow">SEE IT IN ACTION</span>
          <h2>Discover connected diabetes management</h2>
          <span className="np-title-line np-title-line-center" />

          <p className="np-video-description">
            Watch the video to learn more about the integration
            and how compatible devices can work together.
          </p>

          <div className="np-video-frame">
            <iframe
              title="NovoPen and FreeStyle Libre integration video"
              src="https://player.vimeo.com/video/861465466?h=b36ea54cbb"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer disclaimer */}
      <footer className="np-footer">
        <div className="np-container">
          <span className="np-footer-accent" />
          <p>
            Always follow the instructions supplied with your
            devices and consult your healthcare professional
            for advice about your diabetes management.
          </p>
        </div>
      </footer>

      <SubscribeForm />
    </main>
  );
}
