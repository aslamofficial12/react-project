import React from "react";
import Image from "next/image";
import "./style.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function MSACApplicationPage() {
  return (

    <>
    <main className="msac-page">


<nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="breadcrumb-container">
        <a href="/" className="home-link" aria-label="Home">
          <svg className="home-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <span className="breadcrumb-separator" aria-hidden="true">&gt;</span>
        <span className="breadcrumb-current">Have Your Say: Type 2 CGM Subsidy</span>
      </div>
    </nav>





      {/* Top Banner Section */}
      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-icon-col">
            {/* Using Next.js Image for local asset, or SVG fallback */}
            <Image
              src="/megaphone_bloke_banner.webp"
              alt="Megaphone with CGM sensor icon"
              width={220}
              height={200}
              priority
              className="banner-icon"
            />
          </div>
          <div className="banner-text-col">
            <h1 className="banner-title">
              Type 2 CGM subsidy: MSAC
              <br />
              Application 1786
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Article Section */}
      <section className="content-section">
        <article className="content-container">
          <h2 className="article-title">
            Abbott's MSAC Application 1786 - Continuous Glucose Monitoring (CGM) for
            Insulin-Requiring Type 2 Diabetes, Type 3c and Related Diabetes, and
            Gestational Diabetes Mellitus (GDM)
          </h2>

          <div className="article-body">
            <p>
              Abbott welcomes MSAC's recommendation to remove the age restriction
              for government-funded CGM access for Australians living with type
              3c diabetes and other types of diabetes that are similar to type
              1, an important step towards addressing unmet need and supporting
              more equitable access for this population.
            </p>

            <p>
              Abbott is encouraged by MSAC's recognition of the substantial
              unmet need among several priority groups for future consideration.
              Together with the nearly 8,000 submissions received through
              public consultation, this reinforces the importance of continuing
              efforts to expand access to CGM technology. Strong clinical
              evidence supports the use of CGM, with funded access already
              established in many countries.
            </p>

            <p>
              We acknowledge that <em>MSAC</em> has deferred its advice for the
              second time on NDSS subsidisation of the FreeStyle Libre CGM
              system for other priority populations, including people living with
              insulin-treated type 2 diabetes. The 2024 Parliamentary Inquiry
              into Diabetes recommended expanding subsidised CGM access to type
              2 diabetes requiring regular insulin, gestational diabetes, and
              insulin-dependent type 3c diabetes.
            </p>

            <p>
              Abbott remains committed to working with <em>MSAC</em>, the
              Australian Government, and the diabetes community to improve
              equitable access to CGM technology.
            </p>
          </div>

          <footer className="article-footer">
            <span className="doc-code">ADC-128491 V3.0</span>
          </footer>
        </article>
      </section>
    </main>
<SubscribeForm />
    </>
  );
}