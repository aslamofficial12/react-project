import React from 'react';
import './style.css';

export default function TermsOfSalePage() {
  return (
    <main className="terms-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/" className="home-link">
          <svg className="home-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <span className="separator">&gt;</span>
        <span className="current-page">Terms of Sale</span>
      </nav>

      {/* Main Page Title */}
      <h1 className="terms-title">Terms of Sale</h1>
      <div className="yellow-underline"></div>

      {/* Section 1: Terms and Conditions of Sale */}
      <section className="terms-section">
        <h2 className="section-heading">Terms and Conditions of Sale (“Terms”)</h2>
        <p>
          You can place orders for the purchase of the FreeStyle Libre products online through{' '}
          <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.freestylelibre.com.au
          </a>{' '}
          or through such other channels as Abbott may provide in the future (&quot;Purchase Channels&quot;). The Terms contained in this document apply to the purchase of FreeStyle Libre products ordered through all Purchase Channels and shall not be applicable for any purchase of FreeStyle Libre products from a third party. By using any of the Purchase Channels to purchase products you are indicating your acceptance to be bound by these Terms. These Terms form a legal contract for the purchase of the products and can only be amended with our consent. Any purchases that you make are subject to these Terms.
        </p>
        <p>
          The Purchase Channels are for the sale of Abbott products to customers who are resident in Australia and who are aged 18 or over. If you are not resident in Australia, please visit{' '}
          <a href="https://www.freestylelibre.com" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.freestylelibre.com
          </a>{' '}
          where you will be directed to the Abbott website in your country (if any) or advise the Abbott Customer Service Representative of this and you will be re-directed to an appropriate Customer Service Representative.
        </p>
        <p>
          FreeStyle Libre 2 Flash Glucose Monitoring System is intended for persons (age 4 and older) with insulin-requiring diabetes mellitus. The indication for children (age 4 - 17) is limited to those who are supervised by a caregiver who is at least 18 years of age.
        </p>
        <p>
          The FreeStyle Libre 2 Plus Flash Glucose Monitoring System Sensor (‘Sensor’), when used with a compatible device, is indicated for measuring interstitial fluid glucose levels in people (age 2 and older) with diabetes mellitus, including pregnant women. The Sensor and compatible device are designed to replace blood glucose testing in the self-management of diabetes, including dosing of insulin.
        </p>
        <p>
          The indication for children (age 2 - 12) is limited to those who are supervised by a caregiver who is at least 18 years of age. The caregiver is responsible for managing or assisting the child to manage the Sensor and compatible device and also for interpreting or assisting the child to interpret Sensor glucose readings.
        </p>
        <p>Please check with your Health Care Professional whether this product is suitable for you. Always read the label. Use only as directed.</p>
        <p>You are advised to print a copy of the Terms for reference.</p>
        <p className="meta-info">
          <strong>Effective Date of the Terms:</strong> 28 August 2017<br />
          <strong>Last Updated:</strong> 26 March 2025
        </p>
      </section>

      {/* Section 2: Other Applicable Terms */}
      <section className="terms-section">
        <h2 className="section-heading">Other Applicable Terms</h2>
        <p>
          The following documents also apply to your purchase of Abbott products through the Purchase Channels. Please read the Privacy Policy, Cookie Policy and Terms of Use available at{' '}
          <a href="https://www.myfreestyle.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.myfreestyle.com.au
          </a>
          , as they contain important information which applies to all purchases made through the Purchase Channels.
        </p>
        <ul className="bullet-list">
          <li>
            <strong>Privacy Policy.</strong> This sets out how Abbott processes the personal data that is collected from you through the Purchase Channels or which you provide to us.
          </li>
          <li>
            <strong>Terms of Use.</strong> This sets out how you are entitled to use the website{' '}
            <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au
            </a>
            .
          </li>
        </ul>
      </section>

      {/* Section 3: Your Account */}
      <section className="terms-section">
        <h2 className="section-heading">Your Account</h2>
        <p>In order to purchase sensors/reader(s) through the Purchasing Channels an account must be created. Creation of an account will include verification of your identity and the information that you provide must be accurate and complete.</p>
        <p>Access to any of the Purchase Channels may be withdrawn at any time.</p>
        <p>You are responsible for maintaining the confidentiality of passwords to prevent unauthorised access to your account. You agree to accept responsibility for all activities that occur under your account or using your password.</p>
        <p>You should take necessary steps to ensure that your password and account details are kept confidential and secure and you should inform Abbott immediately if you have any reason to believe that your password has become known to anyone else or if the password is being, or is likely to be, used in an unauthorised manner.</p>
      </section>

      {/* Section 4: Creating a Contract */}
      <section className="terms-section">
        <h2 className="section-heading">Creating a Contract</h2>
        <p>
          If you are placing an order through{' '}
          <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.freestylelibre.com.au
          </a>
          , the technical steps required to create a contract between you and Abbott are as follows:
        </p>
        <ul className="bullet-list">
          <li>
            You place an order for your products on{' '}
            <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au
            </a>{' '}
            by pressing the “Confirm &amp; Process Order” button at the end of the purchase process. You will be guided through the process of placing an order by the instructions on{' '}
            <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au
            </a>
            .
          </li>
        </ul>
        <p>Please take the time to read and check the details entered at each stage of the order process.</p>
        <p>After you place an order through the Purchase Channels, you will receive an email from Abbott acknowledging that your order has been received. Abbott’s acceptance of your order will take place when you receive an email that confirms that the products have been packed and are ready for dispatch. It is important that you enter a valid e-mail address, as invoices are automatically e-mailed to that address. Please ensure your e-mail address is accurate. Also check your spam or junk folder for undelivered invoices.</p>
        <p>The Contract between you and Abbott will only be formed when you receive the confirmation of ‘pack and ready for dispatch’ of the products from Abbott.</p>
      </section>

      {/* Section 5: Subscription Terms */}
      <section className="terms-section">
        <h2 className="section-heading">Subscription Terms</h2>
        <p>
          The supply of Abbott’s FreeStyle Libre products (“Products”) through a subscription placed on Abbott’s FreeStyle Libre website at{' '}
          <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.freestylelibre.com.au
          </a>{' '}
          (“Subscription”) is subject to the following terms and conditions (“Subscription Terms and Conditions”). When you place an order for Products by way of Subscription you agree to be bound by these Subscription Terms and Conditions. Your Subscription will be activated once your order is processed and your payment details verified and authorised.
        </p>
        <ol className="numbered-list" type="1">
          <li>Your Subscription will renew automatically at the date of your chosen frequency unless your Subscription is cancelled in accordance with these Subscription Terms and Conditions.</li>
          <li>
            It is your responsibility to ensure that all details you provide for your Subscription (including, but not limited to, contact details, Products, ordering frequency, payment details, payment method and delivery address) are correct and up-to-date. You can manage and make changes to these details online in the “My Account” section at{' '}
            <a href="https://www.freestylelibre.com.au/customer/account/login/" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au/customer/account/login/
            </a>
            , or you can call Abbott Diabetes Care customer service on 1800 801 478. Any changes must be notified and made at least 1 business day prior to your next scheduled Product order date for those changes to take effect for your next scheduled Product order. No credit or refund will be provided in respect of Products delivered or not delivered if changes are not notified within this time.
          </li>
          <li>If the payment method or details you have provided for your Subscription are incorrect or invalid or your payment is rejected or fails to be processed, Abbott will attempt to process payment again for the order on the next 3 scheduled order dates of your chosen frequency as provided in your Subscription. You will receive a notification if your payment is rejected or fails to be processed. If Abbott is unable to process your payment, your Subscription will be automatically cancelled.</li>
          <li>
            You may cancel your Subscription at any time in the “My Account” section of Abbott’s FreeStyle Libre website at{' '}
            <a href="https://www.freestylelibre.com.au/customer/account/login/" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au/customer/account/login/
            </a>
            , or you can call Abbott Diabetes Care customer service on 1800 801 478. Cancellation of your Subscription will take effect after 1 business day. Any cancellations made within 1 business day of the next scheduled Product order date will not cancel the immediate scheduled order but will only cancel your Subscription profile for future Product orders.
          </li>
          <li>Abbott reserves the right to cancel your Subscription if at any time it suspects that: (a) you or any person may be engaging in any misuse of your Subscription or unauthorised conduct in connection with Products ordered through your Subscription; or (b) you have not complied with these Subscription Terms and Conditions.</li>
          <li>Abbott reserves the right to change any promotions, product prices or packages in connection with your Subscription at any time.</li>
          <li>You acknowledge and agree that Abbott may send you promotional material or information on offers or benefits in connection with the Products or your Subscription.</li>
          <li>If you have not received an order of Products due through your Subscription, you must notify Abbott as soon as possible and no later than 3 days of the date the delivery was due.</li>
          <li>You must notify Abbott as soon as possible if: (a) you continue to receive deliveries of Products or if payments are being deducted after your Subscription has been cancelled; (b) if you believe you have been incorrectly billed for Products ordered through your Subscription; or (c) if you receive a delivery of Products which is incorrect in any way.</li>
          <li>Products ordered through Subscriptions are available for supply in Australia only.</li>
          <li>
            You acknowledge that these Subscription Terms and Conditions may be modified by Abbott from time to time, including but not limited to terms relating to cancellation and changes to your Subscription. Any changes to these Subscription Terms and Conditions will be notified on{' '}
            <a href="https://www.freestylelibre.com.au/terms-of-sale" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au/terms-of-sale
            </a>
            .
          </li>
          <li>You acknowledge and agree that your Subscription for Products is for your personal use only or the personal use of a person under 18 for whom you are authorised to purchase the Products. You agree and acknowledge that Subscriptions must not be used to obtain Products for any commercial purpose or to otherwise exploit Products, including on-selling of Products to any third party.</li>
          <li>
            You acknowledge and agree that personal information you provide in connection with a Subscription or when you place your order for Products through a Subscription will be collected and stored by Abbott and/or its affiliates or third party service providers and used for the purpose of managing your Subscription, communicating with you about your Subscription, any offers or benefits in connection with Subscriptions and providing you with promotional material and information in relation to the Products. Information on how Abbott handle’s your personal information is set out in our Privacy Policy at{' '}
            <a href="https://www.freestylelibre.com.au/privacy-policy" target="_blank" rel="noopener noreferrer" className="orange-link">
              www.freestylelibre.com.au/privacy-policy
            </a>
            .
          </li>
          <li>Abbott is not responsible or liable for any losses your may incur or suffer as a result of your failure to comply with these Subscription Terms and Conditions or for any mistakes you make in entering contact information, Product ordering or Subscription details, or where you have not updated your details or where you have not provided sufficient notice of a change in your details in accordance with these Subscription Terms and Conditions.</li>
          <li>To the extent permitted by law, Abbott is not liable to you for any loss or damage incurred by you in connection with your Subscription, whether direct, consequential, special, indirect or other loss or damage. To the extent permitted by law, Abbott’s maximum liability to you is limited to the total value of Products supplied to you through the Subscription over the previous twelve months.</li>
          <li>These Subscription Terms and Conditions are governed by the laws of New South Wales.</li>
        </ol>
      </section>

      {/* Section 6: Additional General Terms */}
      <section className="terms-section">
        <h2 className="section-heading">Amending These Terms</h2>
        <p>Without prejudice to your rights under applicable law, Abbott reserves the right to amend these Terms at any time and for any reason. These terms and conditions supersede any other pre-printed terms and conditions appearing elsewhere.</p>
        <p>If Abbott amends the Terms, the most recent version of the Terms will be posted online and will then apply to the purchase of products through the Purchase Channels.</p>
        <p>When these Terms are amended, we will state that these Terms have been amended and show the relevant date at the top of this page.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Language of Terms &amp; Contract</h2>
        <p>These Terms and any Contract are in English only.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Information About Abbott</h2>
        <p>These Purchase Channels are owned or operated by Abbott Australasia Pty Ltd. trading as Abbott Diabetes Care (ABN 95 000 180 389) whose address is 666 Doncaster Road, Doncaster VIC 3108, Australia.</p>
        <p>If you decide to purchase products through the Purchase Channels, you are purchasing products from Abbott Australasia Pty Ltd.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Contact Details - Abbott Customer Service</h2>
        <p>To contact Abbott please call our Customer Service line on 1800 801 478 (Australia toll-free number).</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Use of Images</h2>
        <p>Images of the FreeStyle Libre reader and sensor are for illustrative purposes only. The reader and sensors that you receive may vary from those images.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Software Requirements</h2>
        <p>In order to download your readings from the reader, your computer must meet the following minimum requirements. A Mac running OS X Mavericks with a dual-core 1.6 GHz (Intel Core i5 or later) processor and 2GB RAM; or a PC running Windows XP SP3 with a dual-core 2.53GHz processor and 2GB RAM.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Information Available on this Website</h2>
        <p>The information and content provided through the Purchase Channels does not constitute medical advice. You should consult your healthcare professionals for advice before you make any decisions relating to your treatment or care. To the maximum extent permitted by applicable law, Abbott disclaims all liability for any loss or damage which may be suffered by any person, whether suffered directly, indirectly, immediately or consequentially, and whether arising in contract, tort (including negligence) or otherwise which arises out of, or in connection with use of the Abbott Website or any treatment or care decisions which you make, except in the case of death or personal injury resulting from Abbott’s negligence.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Orders</h2>
        <p>All orders are subject to acceptance by Abbott. Abbott will provide you with an order acceptance or rejection notice as soon as reasonably possible.</p>
        <p>You will specify a delivery address within Australia.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Order Cancellation</h2>
        <p>
          Abbott has the right to cancel any accepted order prior to delivery in the event of any pricing error or any material error outside of Abbot’s control in connection with your order or other conditions published on the website{' '}
          <a href="https://www.freestylelibre.com.au" target="_blank" rel="noopener noreferrer" className="orange-link">
            www.freestylelibre.com.au
          </a>{' '}
          relevant for your order, or if any further verification of your credit conditions or records so warrants. If you have already made payment and your order is cancelled, Abbott will issue a refund or credit to your account.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Product Availability</h2>
        <p>The purchase of sensors/reader(s) through the Purchase Channels is subject to availability. Abbott will inform you as soon as possible if the product you have ordered is not available and Abbott will not process your order. If you have already paid for sensors/reader(s), you will be refunded in full. Abbott reserves the right to impose ordering restrictions on the number of products that can be ordered and the interval at which these products can be ordered.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Delivery</h2>
        <p>Your sensors/reader(s) will be delivered to you as soon as possible and in any event within 30 calendar days of Abbott accepting your order.</p>
        <p>The sensors/reader(s) will be delivered to you by a courier engaged by Abbott.</p>
        <p>You are responsible for the product when it is delivered to you.</p>
        <p>If you are not available when your order is delivered, your order will be returned to Abbott and you will receive a notification that your order could not be delivered. The courier will then either contact you to re-arrange delivery at a more suitable time or advise if there is an Australian post office pick up option.</p>
        <p>Abbott will deliver directly to the address specified in your order. It is your responsibility to ensure address details are correct; Abbott does not assume responsibility for undelivered orders caused by incorrectly entered addresses. Abbott is unable to deliver the same order to multiple addresses.</p>
        <p>When the Product is delivered to you, you shall check the contents of the package immediately as per the enclosed delivery document. If an item, or a product, is not delivered, is missing or the packaging is damaged on the outside, you are requested to contact the Abbott Customer Service line on 1800 801 478 within 7 business days from the date of dispatch or 48 hours from the date of receipt. If Abbott does not receive any communication from you within 14 calendar days from the date of dispatch it will be construed that the Product was delivered correctly.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Prices</h2>
        <p>The prices of the sensors/reader(s) will be as described through the relevant Purchase Channel from time to time. Abbott will take reasonable care to ensure that the product prices are correct at the time an order is placed.</p>
        <p>Prices for the sensors/reader(s) may change from time to time. Price changes will not affect any order which has been accepted by Abbott as set out above.</p>
        <p>The sensors/reader(s) satisfy the GST-free requirements under item 38 of Schedule 3 in the GST Act (i.e. glucose monitor), and therefore prices for these items do not include GST.</p>
        <p>The price of the sensors/reader(s) does not include delivery charges to you. You will be informed of the delivery charges when you make your purchase through the Purchase Channel.</p>
        <p>Delivery charges will be added to the total amount due once you have selected a delivery service.</p>
        <p><strong>Incorrect Prices.</strong> If you are charged an incorrect price, then either (a) where the product’s correct price is less than the price stated through the Purchase Channel, you will be charged the lower amount prior to the product being dispatched to you; or (b) where the product’s price is higher than the price stated through the Purchase Channel, Abbott will contact you by the method that you have indicated you prefer in accordance with the Privacy Policy in order for you to confirm that you either wish to proceed with the purchase or cancel the purchase. If Abbott is unable to contact you, your order will be cancelled and you will be notified in writing.</p>
        <p><strong>Special Offers.</strong> From time to time, Abbott may make special offers available through the Purchase Channel. Abbott will provide the terms of any special offers at the time of purchase. Any such terms incorporate these Terms in full. In the event of any conflict between these Terms and any special offers, these Terms shall prevail.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Payment Method</h2>
        <p>Abbott accepts most major credit cards for payment. The payment options are shown at the time of payment.</p>
        <p>Payment for your order and all applicable delivery charges is in advance. You will be charged for the sensors/reader(s) that you are purchasing when your order is dispatched to you by Abbott. The sensors/reader(s) will be owned by you when your payment has been processed in full.</p>
        <p>You confirm that you own the credit/debit card that is being used to make your purchase.</p>
        <p>All credit and debit card holders are subject to validation checks and authorisation by Abbott. If Abbott believes that the card used to pay for your order is being used fraudulently this will be reported to the relevant authorities. For more information about how Abbott treats personal data please refer to the Privacy Policy.</p>
        <p>If your card issuer refuses to authorise payment for your order we will be unable to dispatch the sensors/reader(s) to you and we will not be responsible for any delay or non-delivery. Abbott will not be informed of the reason for refusal and therefore is unable to inform you of the reason that your card issuer has refused payment.</p>
        <p>Abbott is not responsible for any card or bank charges issued by your card issuer as a result of processing payment for your order.</p>
        <p>Your account will record that payment has been taken by Abbott Australasia Pty Limited or Abbott Diabetes Care.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Cancellation, Refunds and Returns</h2>
        <p>Subject to the exceptions set out below, you have the right to cancel the contract for the purchase of products prior to order acceptance by Abbott. You can cancel the contract prior to order acceptance by Abbott by calling the Abbott Customer Service line on 1800 801 478.</p>
        <p>If you decide to cancel the contract as stated above, you should keep a record of the cancellation information provided to Abbott.</p>
        <p>FreeStyle Libre 2 Flash Glucose Monitoring System is intended for persons (age 4 and older) with insulin-requiring diabetes mellitus. The indication for children (age 4 - 17) is limited to those who are supervised by a caregiver who is at least 18 years of age.</p>
        <p>The FreeStyle Libre 2 Plus Flash Glucose Monitoring System Sensor (‘Sensor’), when used with a compatible device, is indicated for measuring interstitial fluid glucose levels in people (age 2 and older) with diabetes mellitus, including pregnant women. The Sensor and compatible device are designed to replace blood glucose testing in the self-management of diabetes, including dosing of insulin.</p>
        <p>Processing Refunds: If you are entitled to a refund, Abbott will process the refund as soon as possible and in any case within 14 business days after the day on which Abbott was informed that you wish to cancel the contract. The refund will be made on the credit or debit card used by you to pay.</p>
        <p>Abbott reserves the right to refuse to issue a refund or replacement product and to recover the cost of the return delivery from you in the event that the product is found to have suffered damage after delivery or has been misused or used other than in accordance with the instructions or if the problem is due to normal wear and tear.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Faulty Sensors/Reader(s)</h2>
        <p>In the unlikely event that either a sensor or the reader develops a fault prior to expiry (or within a period of two years for the reader, or three years if you have taken out an extended warranty as described below) from the date of delivery (other than due to normal wear and tear, failure to follow instructions, used outside of indication or misuse) or is damaged while it is being delivered, Abbott will replace the sensor or reader.</p>
        <p>Please contact the Abbott Customer Service line on 1800 801 478, who will be able to advise you on how to return faulty sensors/reader(s) to Abbott and obtain a replacement.</p>
        <p>If you return the reader to Abbott, please ensure that you erase any personal information that is stored on the reader completely before sending the reader back to Abbott.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Product Warranty</h2>
        <h3>Australian Consumer Law Prescribed Statement</h3>
        <p>Our Products come with guarantees that cannot be excluded under the Australian Consumer Law (“ACL”). You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the Products repaired or replaced if they fail to be of acceptable quality and the failure does not amount to a major failure.</p>
        <h3>Introduction</h3>
        <p>This Express Warranty is in addition to other rights or remedies that you may have under the ACL in relation to your Product. Nothing in this Warranty purports to modify or exclude the conditions, warranties, undertakings and other legal rights, under the Australian Competition and Consumer Act and other Australian laws.</p>
        <h3>Warranty</h3>
        <p>The reader is sold with a two year warranty and will be replaced by Abbott if it develops a fault during this two year period (other than due to normal wear and tear, failure to follow instructions use error or misuse, used outside of indication or unauthorised alteration). In the alternative, you may notify Abbott that you wish to receive a refund of the purchase price and delivery costs.</p>
        <p>If you agree to provide Abbott with your contact details, you will receive an additional one year’s warranty on the reader.</p>
        <p>This warranty is valid if the Reader is defective in material or workmanship, and it has been used only in accordance with the User‘s Manual. Abbott’s obligation is to replace the Reader free of charge with a same or alternative readers as determined by Abbott in its sole discretion. Your replacement may be a different model or type. This Warranty covers only the Reader, does not cover disposable accessories, extends only to the original purchaser, and is not assignable or transferable.</p>
        <p>If you need to make a warranty claim to Abbott you may contact our local Customer Service line on 1800 801 478. Abbott shall bear all costs associated with delivery of replacement readers to customer and the return of defective readers to the Customer Service team.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Liability</h2>
        <p>Abbott does not exclude or limit in any way its liability for:</p>
        <ul className="bullet-list">
          <li>a. Death or personal injury caused by Abbott’s negligence;</li>
          <li>b. Fraud or fraudulent misrepresentation;</li>
          <li>c. Defective products under the Australian Consumer Laws;</li>
          <li>d. any other matter in respect of which it would be illegal for Abbott to exclude, or attempt to exclude, our liability.</li>
        </ul>
        <p>To the extent permissible by law, Abbott excludes its liability for all other matters.</p>
        <p>Abbott is not liable to you where performance of any obligations is prevented or restricted by any circumstance or cause beyond our reasonable control.</p>
        <p>You are responsible for the ways in which you use the sensors and readers and Abbott does not accept any liability in this regard.</p>
        <p>You acknowledge and agree that all copyright, trade marks and all other intellectual property rights in all materials and/or content made available is owned at all times by Abbott.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Communications</h2>
        <p>If you would like to contact us please call the Abbott Diabetes Care Customer Service on 1800 801 478.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Transfer of Contract</h2>
        <p>Any Contract for the purchase of products made through the Purchase Channels is between Abbott and you. No other person shall have any rights to enforce any of its Terms. If you have purchased a product as a gift, the recipient of the gift will be entitled to the benefit of the warranty set out in these Terms.</p>
        <p>Abbott may transfer its rights and obligations under the Contract to another organisation. This will not affect your rights or our obligations under these Terms.</p>
        <p>All other transfers of rights and obligations must be agreed with Abbott in writing prior to the transfer taking place.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Interpretation of these Terms</h2>
        <p>Each of the paragraphs operates separately. If any court or authority finds that any of them are unlawful or unenforceable, the remaining paragraphs will continue in full force and effect.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Delay in Enforcement</h2>
        <p>If Abbott fails to insist that you perform any of your obligations under these Terms or is delayed in enforcing the Terms, this should not be interpreted as a waiver of the rights of Abbott under these Terms. You are still required to comply with these Terms irrespective of Abbott’s enforcement or otherwise. A default by you will only be waived if it is in writing, signed by Abbott.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Governing Law</h2>
        <p>These Terms and the Contract are governed by the laws of New South Wales, including any disputes or claims arising out of or in connection with them and the courts of New South Wales will have jurisdiction over any such dispute or claim.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">Filing</h2>
        <p>Abbott will not file a copy of this Contract.</p>
      </section>
    </main>
  );
}