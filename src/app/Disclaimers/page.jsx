import React from 'react';
import "./style.css";

const disclaimersData = [
  { id: 1, text: 'Data on file, Abbott Diabetes Care, Inc. Data based on the number of users worldwide for FreeStyle Libre family of personal CGMs compared to the number of users for other leading personal CGM brands and based on CGM sales dollars compared to other leading personal CGM brands.' },
  { id: 3, text: 'Hilliard M. et al. Diabetes Technol The. 2019; 21(9): 493-498.', link: 'https://doi.org/10.1089/dia.2019.0142' },
  { id: 4, text: 'Haak, T. Diabetes Therapy (2017).', link: 'https://doi.org/10.1007/s13300-016-0223-6' },
  { id: 5, text: 'Alva S. et al. J Diabetes Sci Technol. 2022; 16(1): 70-77. DOI:', link: 'https://doi.org/10.1177/1932296820958754' },
  { id: 6, text: 'The views, opinions, and positions expressed by FreeStyle Libre systems users are theirs alone, and do not necessarily reflect the views, opinions, and positions of Abbott or any employee thereof. The views expressed should not be used for medical diagnosis or treatment or as a substitute for professional medical advice. Individual symptoms, situations and circumstances may vary.' },
  { id: 7, text: 'Fokkert M. et al. BMJ Open Diabetes Res Care. 2019; 7(1): e000809.', link: 'https://doi.org/10.1136/bmjdrc-2019-000809' },
  { id: 8, text: '60-minute warm-up required when applying the sensor.' },
  { id: 9, text: 'Sensor is water resistant in up to 1 meter (3 feet) of water. Do not immerse longer than 30 minutes.' },
  { id: 10, text: 'Finger pricks are required if your glucose readings and alarms do not match symptoms or expectations.' },
  { id: 12, text: 'The FreeStyle Libre systems apps are only compatible with certain mobile devices and operating systems. Please check', inlineLink: { url: 'https://www.freestylelibre.com.au/compatibility', text: 'www.freestylelibre.com.au/compatibility' }, postText: 'for more information about device compatibility before using the apps. Use of FreeStyle Libre systems apps requires registration with LibreView.' },
  { id: 15, text: 'Based on the reading frequency in Dexcom G7 CGM User Guide and Medtronic Guardian Connect System User Guide compared to readings every minute for FreeStyle Libre 2 and FreeStyle Libre 3 systems sensors. As of February 2025.' },
  { id: 16, text: 'Huang E. et al. Diabetes. 2022; 71(1): 73-LB.', link: 'https://doi.org/10.2337/db22-73-LB' },
  { id: 17, text: 'Unger J. et al. Postgrad Med. 2020; 132(4): 305-313.', link: 'https://doi.org/10.1080/00325481.2020.1744393' },
  { id: 18, text: 'Notifications will only be received when alarms settings are enabled and turned on and the sensor is within 6 meters unobstructed of the reading device.' },
  { id: 20, text: 'Campbell FM. et al. Pediatr Diabetes. 2018; 19: 1294– 1301.', link: 'https://doi.org/10.1111/pedi.12735' },
  { id: 21, text: 'The LibreLinkUp app is only compatible with certain mobile devices and operating systems. Please check www.librelinkup.com for more information about device compatibility before using the app. Use of LibreLinkUp requires registration with LibreView. Dosing decisions should not be made based on this device. The user should follow instructions on the continuous glucose monitoring system. This device is not intended to replace self-monitoring practices as advised by a physician.' },
  { id: 23, text: 'Based on the signal strength in Dexcom G6 CGM User Guide and Medtronic Guardian Connect System User Guide.' },
  { id: 24, text: 'The LibreView data management software is intended for use by both patients and healthcare professionals to assist people with diabetes and their healthcare professionals in the review, analysis, and evaluation of historical glucose meter data to support effective diabetes management. The LibreView software is not intended to provide treatment decisions or to be used as a substitute for professional healthcare advice.' },
  { id: 25, text: 'The user’s device must have internet connectivity for glucose data to automatically upload to LibreView.' },
  { id: 26, text: 'The user’s device must have internet connectivity for glucose data to automatically upload to LibreView and to transfer to connected LibreLinkUp app users.' },
  { id: 27, text: 'Evans M. et al. Diabetes Ther. 2022; 13(6): 1175-85.', link: 'https://doi.org/10.1007/s13300-022-01253-9' },
  { id: 28, text: 'Bolinder J. et al. The Lancet. 2016; 388(10057): 2254-2263.', link: 'https://doi.org/10.1016/S0140-6736(16)31535-5' },
  { id: 32, text: 'Cengiz E. et al. Diabetes Technol The. 2009; 11: S11-6.', link: 'https://doi.org/10.1089/dia.2009.0002' },
  { id: 38, text: 'Yaron M. et al. Diabetes Care. 2019; 42(7): 1178-1184.', link: 'https://doi.org/10.2337/dc18-0166' },
  { id: 39, text: 'Leelarathna L. et al. N Engl J Med. 2022; 387:1477-1487.', link: 'https://doi.org/10.1056/NEJMoa2205650' },
  { id: 43, text: 'The FreeStyle LibreLink and the FreeStyle Libre 2 reader have similar, but not identical features. Finger pricks are required for treatment decisions when your glucose alarms and readings from the system do not match symptoms or expectation.' },
  { id: 46, text: 'Glucose alarms will transfer to LibreLinkUp app users when users are connected and alarms are enabled on FreeStyle LibreLink app.' },
  { id: 47, text: 'The FreeStyle LibreLink app is designed to facilitate data sharing between patients and their healthcare providers and caregivers.' },
  { id: 48, text: 'All data transferred to LibreLinkUp is encrypted using industry-standard SSL/TLS to ensure that it remains private from malicious parties.' },
  { id: 49, text: 'FreeStyle Libre User\'s Manual' },
  { id: 51, text: 'Based on the daily cost of continuous usage of 12 sensors purchased through a FreeStyleLibre.com.au Subscribe & Save plan, compared to the daily cost of continuous usage of 12 sensors (and transmitters, where applicable) purchased directly from competitor CGM brands in Australia. As of Feb 2025.' },
  { id: 52, text: 'Available to new customers only. See full terms and conditions.' },
  { id: 53, text: 'NovoPen® 6 is a registered trademark owned by Novo Nordisk. The FreeStyle Libre Link app works with FreeStyle Libre 2 sensors and is compatible with NovoPen® 6.' },
  { id: 54, text: 'Compared to other on-market CGMs in Australia. As of February 2025.' },
  { id: 55, text: 'Glucose readings are automatically displayed in the FreeStyle LibreLink app when the sensor has been started with the app, and the smartphone and sensor are connected and in range. Optional scan to backfill up to 8 hours of data following a period of lost sensor connection.' },
  { id: 57, text: 'The Pod has an IP28 rating for up to 25 feet for 60 minutes. The Omnipod 5 Controller is not waterproof.' },
  { id: 58, text: 'The FreeStyle LibreLink app is only compatible with certain mobile devices and operating systems. Please check www.freestylelibre.com.au/compatibility for more information about device compatibility before using the app. Use of FreeStyle LibreLink requires registration with LibreView.' },
  { id: 59, text: 'Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.' },
  { id: 60, text: 'Google Play and the Google Play logo are trademarks of Google LLC.' },
  { id: 61, text: 'Compatible smartwatches are smartwatches that support notification mirroring. To receive alarms from the FreeStyle LibreLink app on your smartwatch, alarms must be turned ON, your phone and smartwatch must be connected, and your devices configured to deliver notifications.' },
  { id: 62, text: 'Lameijer A. et al. BMJ Open Diabetes Res Care. 2021; 9(1): e002124.', link: 'https://doi.org/10.1136/bmjdrc-2021-002124' },
  { id: 63, text: 'Glucose readings are automatically displayed in the FreeStyle LibreLink app when the sensor has been started with the app, and the smartphone and sensor are connected and in range. Optional scan to backfill up to 8 hours of data following a period of lost sensor connection. The FreeStyle LibreLink app is only compatible with certain mobile devices and operating systems. Please check www.freestylelibre.com.au/compatibility for more information about device compatibility before using the app. Use of FreeStyle LibreLink requires registration with LibreView.' },
  { id: 64, text: '3.9 mmol/L is the default Low Glucose Alarm level and can be set between 3.3-5.6 mmol/L.' },
  { id: 65, text: '13.3 mmol/L is the default High Glucose Alarm level and can be set between 6.7-22.2 mmol/L.' },
  { id: 66, text: 'Franceschi R. et al. Front Endocrinol (Lausanne). 2022; 13:907517.', link: 'https://doi.org/10.3389/fendo.2022.907517' },
  { id: 67, text: 'Beck RW. et al. J Diabetes Sci Technol. 2019; 13(4):614-626.', link: 'https://doi.org/10.1177/1932296818822496' },
  { id: 68, text: 'Roussel R. et al. Diabetes Care. 2021; 44(6):1368-1376.', link: 'https://doi.org/10.2337/dc20-1690' },
  { id: 69, text: 'Riveline JP. et al. Diabetes Technol Ther. 2022; 24(9):611-618.', link: 'https://doi.org/10.1089/dia.2022.0085' },
  { id: 70, text: 'Basu A. et al. J Diabetes Sci Technol. 2015; 9(1):63-68.', link: 'https://doi.org/10.1177/1932296814554797' },
  { id: 71, text: 'Kovatchev BP. et al. Diabetes Technol Ther. 2015; 17(3):177-186.', link: 'https://doi.org/10.1089/dia.2014.0272' },
  { id: 72, text: 'Forlenza GP. et al. Diabetes Technol Ther. 2017; 19(S3):S13-S20.', link: 'https://doi.org/10.1089/dia.2017.0034' },
  { id: 73, text: 'Seibold A. J Diabetes Sci Technol. 2021; 15(3):713-714.', link: 'https://doi.org/10.1177/1932296820984763' },
  { id: 74, text: 'To get glucose alarms on your phone, you must start the sensor with the FreeStyle LibreLink app. Notifications will only be received when alarms are turned on and the sensor is within 6 metres of the reading device. You must have override do not disturb settings enabled to receive alarms and alerts on your smartphone. See our compatibility guide here.' },
  { id: 75, text: 'At HbA1c ~7% or higher.' },
  { id: 76, text: 'Alva S. et al. J Diabetes Sci Technol. 2025;0(0).', link: 'https://doi.org/10.1177/19322968251329364' },
  { id: 77, text: 'Annual limits apply. If you exceed your annual product supply limit, you will be unable to order additional subsidised products through the NDSS.' },
  { id: 78, text: 'Kao K. et al. J Diabetes Sci Technol. 2022; 16(1):259-260.', link: 'https://doi.org/10.1177/19322968211044141' },
  { id: 79, text: 'Rebrin K. et al. J Diabetes Sci Technol. 2010; 4(5): 1087-1098.', link: 'https://doi.org/10.1177/193229681000400507' },
  { id: 80, text: 'Bailey T. et al. Diabetes Technol Ther. 2015; 17(11):787-794.', link: 'https://doi.org/10.1089/dia.2014.0378' },
  { id: 81, text: 'Ogawa W. et al. J Diabetes Invest. 2021; 12(1):82–90.', link: 'https://doi.org/10.1111/jdi.13327' },
  { id: 82, text: 'Sangave N.A. et al. Diabetes Spectr. 2019;32(4):378-384.', link: 'https://doi.org/10.2337/ds18-0069' },
  { id: 83, text: 'Cichon, M., et al. Int J Mol Sci. 2023, 24, 10697.', link: 'https://www.mdpi.com/1422-0067/24/13/10697' },
  { id: 84, text: 'Kong A.P. et al. Diabetes Ther. 2026.', link: 'https://doi.org/10.1177/15209156251411935' },
  { id: 85, text: 'Compared to other on-market CGMs. As of July 2026.' },
  { id: 86, text: 'Notifications will only be received when alarms settings are enabled and turned on and sensor is within 10 metres unobstructed of the reading device.' },
  { id: 87, text: 'Silent mode allows users to silence their signal loss and glucose alarms for up to nine hours. You will not hear your glucose and signal loss alarms even if you\'ve turned on Override Do Not Disturb but may still get the visual and vibratory notifications based on your phone\'s settings.' },
  { id: 88, text: 'The Libre app for smartwatches is only compatible with certain devices and operating systems. Please check our website for more information about device compatibility before using the app. Use of the Libre app requires registration with LibreView. The Libre app for smartwatches should not be used to make treatment decisions. Please follow the Libre app instructions on your smartphone. Glucose information and notifications will only be received when your smartphone is within range of your sensor and smartwatch. Notifications seen on your smartwatch are mirrored from the Libre app on your smartphone. You must enable the appropriate settings on your smartphone to receive alerts on your smartwatch.' },
  { id: 89, text: 'Libre Assist is a feature within Libre app that uses generative artificial intelligence to provide information on how foods could impact your glucose levels. Generative artificial intelligence may not always be accurate, and it should not be used to make treatment decisions.' },
  { id: 90, text: 'Predicted glucose impact is based on user-provided food data and may differ from actual impact, which depends on sensor readings and factors like activity or medication. For personalised advice, consult your healthcare provider.' },
  { id: 91, text: 'Personalised food suggestions are based on food preference information inputted by the user.' },
  { id: 92, text: 'Glucose readings are automatically displayed in the Libre app when the sensor has been started with the app, and the smartphone and sensor are connected and in range.' },
  { id: 93, text: 'Size for comparison only. The FreeStyle Libre 3 Plus sensor measures 21 x 2.9mm (without adhesive).' },
  { id: 94, text: 'www.freestylelibre.com.au/anzcgm-libre-evidence. Accessed 7 Jul 2026.' },
  { id: 95, text: 'Kong A.P. et al. Diabetes Ther. 2026. doi:10.1177/15209156251411935.' },
  { id: 96, text: 'Compared to the FreeStyle Libre 2 system.' },
  { id: 97, text: 'Andrikopoulos S. et al. Internal Medicine Journal (2026). doi:10.1111/imj.70586' }
];

export default function Disclaimer() {
  return (
    <main className="disclaimers-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/" className="home-link">
          <svg className="home-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </a>
        <span className="separator">&gt;</span>
        <span className="current-page">Disclaimers</span>
      </nav>

      {/* Main Page Title */}
      <h1 className="disclaimers-title">Disclaimers &amp; References</h1>
      <div className="yellow-underline"></div>

      {/* References List */}
      <ol className="reference-list">
        {disclaimersData.map((item) => (
          <li key={item.id} value={item.id} className="reference-item">
            <span>{item.text} </span>
            {item.inlineLink && (
              <>
                <a href={item.inlineLink.url} target="_blank" rel="noopener noreferrer" className="orange-link">
                  {item.inlineLink.text}
                </a>
                <span> {item.postText}</span>
              </>
            )}
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="orange-link">
                {item.link}
              </a>
            )}
          </li>
        ))}
      </ol>

      <footer className="document-footer">
        ADC-26102381 V1.0
      </footer>
    </main>
  );
}