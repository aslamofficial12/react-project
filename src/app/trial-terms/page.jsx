import React from 'react';
import './style.css';
import SubscribeForm from '../../components/SubscribeForm';

export default function TrialPromotionPage() {
  return (
    <>
    <div className="promo-page-wrapper">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <a href="/" className="breadcrumb-home" aria-label="Home">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">
          Terms And Conditions: FreeStyle Libre 2 Plus $15 Sensor Trial
        </span>
      </nav>

      {/* Main Content Card */}
      <main className="promo-content-box">
        <h1 className="promo-heading">
          FreeStyle Libre 2 Plus $15 trial sensor promotion
        </h1>

        <ol className="promo-terms-list">
          <li>
            This promotion is being conducted by Abbott Australasia Pty Ltd (ABN 95 000 180 389) of 299 Lane Cove Road, Macquarie Park NSW 2113 (Abbott). This promotion commences on 1 April 2025 at 12:01am and ends on 31 December 2026 at 11:59pm (Promotion Period). By participating in this promotion, the customer agrees to be bound by these Terms and Conditions.
          </li>
          <li>
            This promotion comprises the following offer (Offer). New Customers can purchase one (1) FreeStyle Libre 2 Plus sensor for $15 one (1) time only from the promotional page www.freestylelibre.com.au/trial. There is no extra charge for shipping. The Offer is subject to the following:
          </li>
          <li>
            New Customers’ means individuals who have not previously purchased or accessed FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors from www.FreeStyleLibre.com.au. For the purposes of this promotion, Abbott may identify customers who have previously purchased or accessed FreeStyle Libre 2 products by their email address, billing address, shipping address, mobile phone number or any combination of these.
          </li>
          <li>
            This Offer is only available to Australian residents.
          </li>
          <li>
            Abbott reserves the right to: (a)Charge the full retail price for a FreeStyle Libre 2 Plus sensor ($102); or (b)cancel the Offer, if the person claiming the Offer is found by Abbott to have: (i) previously purchased or accessed more than one (1) FreeStyle Libre 2 sensor or FreeStyle Libre 2 Plus sensor for $15; or (ii)purchased multiple FreeStyle Libre 2 sensors or FreeStyle Libre 2 Plus sensors for $15 under different aliases, different email addresses or falsified identities.
          </li>
          <li>
            The Offer is only available online at www.freestylelibre.com.au. This Offer is not available in conjunction with any other Abbott promotion or offer, unless at Abbott’s discretion.
          </li>
          <li>
            In order to claim the offer, the purchaser must be registered and logged in to http://www.freestylelibre.com.au/.
          </li>
          <li>
            This promotion is not available to Abbott employees, healthcare professionals, or customers paying via direct deposit.
          </li>
          <li>
            Abbott may, in its sole discretion, modify these terms and conditions, the Offer, or the contents of any Offer at any time and any such modification will take effect when posted to this website.
          </li>
          <li>
            These terms and conditions do not limit or exclude any statutory provisions or statutory consumer rights under applicable law (including those under the Competition and Consumer Act 2010 (Cth)).
          </li>
          <li>
            Abbott does not guarantee that access to this website, the promotion or Offer will be uninterrupted or free from viruses, technical issues or malfunctions.
          </li>
          <li>
            If for any reason Abbott is not able to conduct with this promotion (or any part of it) as planned due to any circumstance beyond Abbott’s reasonable control, Abbott reserves the right, in its sole discretion, to cancel, terminate, suspend or postpone the promotion (or any part of it).
          </li>
          <li>
            To the maximum extent permitted by law, Abbott excludes all liability in respect of any loss, expense, damage, or injury suffered by any person arising out of or in connection with this promotion, including (but not limited to) accessing the promotion or any Offer.
          </li>
          <li>
            By participating in this promotion, customer agrees that Abbott its affiliates and service providers may use customer’s personal information to conduct this promotion and its business and to contact customer regarding his/her account on the website and the order placed. Personal information is collected, used, stored and handled by Abbott in accordance with its Privacy Policy available at http://www.freestylelibre.com.au/privacy_policy.
          </li>
          <li>
            These terms and conditions are governed by the laws of New South Wales, Australia.
          </li>
        </ol>

        <p className="promo-doc-code">ADC-110695 V2.0</p>
      </main>
      
    </div>
<SubscribeForm />
    </>
  );
}