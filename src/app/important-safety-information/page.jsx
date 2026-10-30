import React from 'react';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function SafetyInformationPage() {
  return (
    <>
    <div className="safety-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <a href="/" className="home-icon" aria-label="Home">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">
          FreeStyle Libre Important Safety Information
        </span>
      </nav>

      {/* Main Title */}
      <h1 className="main-title">Important Safety Information</h1>

      <p className="intro-text">
        The safety instructions and operating procedures for the FreeStyle
        Libre 2 Flash Glucose Monitoring System and FreeStyle Libre 2 Plus
        Flash Glucose Monitoring System are fully detailed in the respective
        user manuals. Always review the user manual carefully and consult your
        healthcare provider before beginning continuous monitoring.
      </p>

      <p className="intro-text">
        Updated user manuals and system guidelines are available digitally. You
        can view official user guidelines and app instructions in the{' '}
        <a href="#app-link" className="inline-link">
          FreeStyle LibreLink
        </a>{' '}
        mobile application.
      </p>

      {/* SECTION 1: FreeStyle Libre 2 */}
      <section className="safety-section">
        <h2 className="section-heading">
          FreeStyle Libre 2 Flash Glucose Monitoring System
        </h2>

        <h3 className="sub-heading">Indications for Use</h3>
        <p className="section-body">
          The reader device and application are intended to measure interstitial
          fluid glucose levels in individuals (ages 4 and older) diagnosed with
          diabetes mellitus, including pregnant individuals. The system aims to
          replace standard fingerstick blood glucose measurements in routine
          diabetes management and support manual insulin administration.
        </p>

        <p className="section-body">
          For pediatric users (ages 4–12), system usage requires oversight by a
          caregiver aged 18 or older. The caregiver assists with applying,
          interpreting readings, and managing the sensor system.
        </p>

        <h3 className="sub-heading">Contraindications</h3>
        <p className="section-body">
          The continuous glucose sensor must be removed prior to undergoing
          Magnetic Resonance Imaging (MRI) procedures or automated insulin
          dosing integration unless explicitly specified by the manufacturer.
        </p>

        <h3 className="sub-heading">Warnings</h3>
        <ul className="bullet-list">
          <li>
            Do not ignore symptoms that indicate low or high blood glucose. If
            sensor readings or alarms do not align with physical symptoms,
            confirm your reading using a standard fingerstick blood glucose
            meter and consult a medical professional.
          </li>
          <li>
            Small components contained within the sensor packaging may present a
            choking hazard if swallowed.
          </li>
        </ul>
      </section>

      {/* SECTION 2: FreeStyle Libre 2 Plus */}
      <section className="safety-section">
        <h2 className="section-heading">
          FreeStyle Libre 2 Plus Flash Glucose Monitoring System
        </h2>

        <h3 className="sub-heading">Indications for Use</h3>
        <p className="section-body">
          When paired with compatible monitoring hardware, the sensor tracks
          interstitial glucose values in individuals (ages 2 and older) with
          diabetes. It replaces conventional blood glucose test strips for daily
          monitoring and dosing decisions under clinical supervision.
        </p>

        <p className="section-body">
          For young children (ages 2–12), a parent or designated adult guardian
          must supervise sensor application, monitoring, and reading
          interpretation.
        </p>

        <h3 className="sub-heading">Contraindications</h3>
        <p className="section-body">
          Always detach and dispose of the sensor prior to entering an MRI room
          or undergoing high-frequency radiological imaging.
        </p>

        <h3 className="sub-heading">Warnings</h3>
        <ul className="bullet-list">
          <li>
            Always verify uncharacteristic glucose alerts or unexpected low/high
            symptoms with a manual blood glucose strip test.
          </li>
          <li> Keep small components away from children to avoid ingestion risk.</li>
        </ul>
      </section>

      {/* SECTION 3: FreeStyle Libre 3 Plus */}
      <section className="safety-section">
        <h2 className="section-heading">
          FreeStyle Libre 3 Plus Flash Glucose Monitoring System
        </h2>

        <h3 className="sub-heading">Indications for Use</h3>
        <p className="section-body">
          Designed for continuous glucose monitoring in individuals aged 2 and
          above. System readings assist in tracking glucose trends and guide daily
          insulin treatment plans under professional healthcare advice.
        </p>

        <p className="section-body">
          Supervision by an adult caregiver is required for pediatric patients
          (ages 2–12) to ensure safe application, monitoring, and maintenance.
        </p>

        <h3 className="sub-heading">Warnings</h3>
        <p className="section-body">
          Pay attention to physical symptoms of hypoglycemia or hyperglycemia regardless of displayed sensor values. Perform a fingerstick test if symptoms persist or conflict with sensor readings.
        </p>

        <h3 className="sub-heading">Cautions and Important Safety Information</h3>
        <p className="section-body weight-medium">
          What the System has not been evaluated for:
        </p>

        <ul className="square-bullet-list">
          <li>
            The sensor has not been evaluated for use with other implanted medical devices such as pacemakers.
          </li>
          <li>
            The sensor has not been evaluated for use in persons on dialysis.
          </li>
          <li>
            The sensor has not been evaluated for use with critically ill patients.
          </li>
          <li>
            The sensor has not been evaluated for use in persons less than 2 years of age.
          </li>
        </ul>

        <div className="further-info-link">
          <a href="#libre3-info" className="highlight-link">
            Further Libre 3 Plus user information is available here.
          </a>
        </div>
      </section>

      {/* Document Footer Code */}
      <footer className="document-footer">
        <span>ADC-110853 V2.0</span>
      </footer>
  
    </div>

        <SubscribeForm />
</>
  );
}