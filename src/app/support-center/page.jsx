'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SubscribeForm from "../../components/SubscribeForm"
import './style.css';

// ------------------- 1. PRODUCT MANUALS DATA -------------------
const categoryData = {
  "Libre app": {
    title: "Libre app",
    sup: "12",
    items: [
      {
        title: "Mobile Compatibility Guide",
        text: "Check to ensure your phone is compatible with Libre app",
        linkText: "Check Compatibility",
        linkHref: "#compatibility",
        type: "qr"
      },
      {
        title: "Libre app manual for Libre 2 Plus sensor users",
        text: "Online version of the Libre app manual - refer to this if you are using Libre 2 Plus sensors",
        linkText: "Download the manual",
        linkHref: "#manual-2",
        type: "manual",
        manualTitle: "App User's Manual",
        manualSub: "For use with FreeStyle Libre 2 sensor and FreeStyle Libre 2 Plus sensor"
      },
      {
        title: "Libre app manual for Libre 3 Plus sensor users",
        text: "Online version of the Libre app manual - refer to this if you are using Libre 3 Plus sensors",
        linkText: "Download the manual",
        linkHref: "#manual-3",
        type: "manual",
        manualTitle: "App User's Manual",
        manualSub: "For use with FreeStyle Libre 3 sensor, FreeStyle Libre 3 Plus sensor and Libre Select sensor"
      },
      {
        title: "Video Guides",
        text: "Video guides to help you get the most out of Libre app",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video",
        imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Frequently Asked Questions",
        text: "Detailed FAQ information for users of Libre app",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq",
        imgUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05d9e?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Libre app information page",
        text: "Your go to source for everything about the Libre app",
        linkText: "More Details",
        linkHref: "#app-info",
        type: "phone"
      }
    ]
  },
  "FreeStyle Libre 2 Plus sensor": {
    title: "FreeStyle Libre 2 Plus Sensor",
    sup: "",
    items: [
      {
        title: "Your Complete Guide to FreeStyle Libre 2 Plus",
        text: "An essential resource for all FreeStyle Libre 2 Plus users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "promo-card-1",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2 Plus"
      },
      {
        title: "FreeStyle Libre 2 Plus Sensor Adhesion Guide",
        text: "Learn how to correctly prepare the skin for sensor application, and tips for keeping your sensor secure.",
        linkText: "More Details",
        linkHref: "#adhesion",
        type: "promo-card-2",
        cardTitle: "Sensor Adhesion Guide"
      },
      {
        title: "Video Guides",
        text: "Our comprehensive library of instructional and informative videos to help you get the most out of the FreeStyle Libre 2 system.",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "FreeStyle Libre 2 Plus Important Safety Information",
        text: "Important information to be aware of when using FreeStyle Libre 2 Plus.",
        linkText: "More Details",
        linkHref: "#safety",
        type: "safety-card"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2 Plus, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05d9e?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "FreeStyle Libre 2 Plus Sensor Purchase Page",
        text: "Purchase FreeStyle Libre 2 Plus sensors online.",
        linkText: "More Details",
        linkHref: "#purchase",
        type: "purchase-card"
      }
    ]
  },
  "FreeStyle LibreLink": {
    title: "FreeStyle LibreLink",
    sup: "12",
    items: [
      {
        title: "Mobile Compatibility Guide",
        text: "A comprehensive list of the smartphones and smartwatches that are compatible with FreeStyle LibreLink12.",
        linkText: "More Details",
        linkHref: "#compat",
        type: "compat-chart"
      },
      {
        title: "Your Complete Guide to FreeStyle Libre 2 Plus",
        text: "An essential resource for all FreeStyle Libre 2 Plus users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "promo-card-1",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2 Plus"
      },
      {
        title: "FreeStyle LibreLink12 iOS User Manual",
        text: "For users of compatible iOS devices.",
        linkText: "More Details",
        linkHref: "#ios-manual",
        type: "doc-preview",
        manualTitle: "App Symbols (iOS)"
      },
      {
        title: "FreeStyle LibreLink12 Android User Manual",
        text: "For users of compatible Android devices.",
        linkText: "More Details",
        linkHref: "#android-manual",
        type: "doc-preview",
        manualTitle: "App Symbols (Android)"
      },
      {
        title: "Video Guides",
        text: "Our comprehensive library of instructional and informative videos to help you get the most out of the FreeStyle Libre 2 system.",
        linkText: "More Details",
        linkHref: "#videos",
        type: "video-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05d9e?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "FreeStyle LibreLink12 App Information Page",
        text: "Download FreeStyle LibreLink12, for iOS and Android devices.",
        linkText: "More Details",
        linkHref: "#app-page",
        type: "yellow-app-brand"
      }
    ]
  },
  "LibreView": {
    title: "LibreView",
    sup: "24",
    items: [
      {
        title: "Your Complete Guide to FreeStyle Libre 2",
        text: "An essential resource for all FreeStyle Libre 2 users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "promo-card-1",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2 Plus"
      },
      {
        title: "How-to video instructions",
        text: "Our comprehensive library of instructional and informative videos.",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq-thumbnail",
        imgUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05d9e?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "LibreView24 product information page",
        text: "Information and access to LibreView24",
        linkText: "More Details",
        linkHref: "#libreview-info",
        type: "libreview-monitor"
      }
    ]
  },
  "LibreLinkUp": {
    title: "LibreLinkUp",
    sup: "",
    items: [

      {
        title: "Your Complete Guide to FreeStyle Libre 2",
        text: "An essential resource for all FreeStyle Libre 2 users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "banner-card",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2",
        cardBg: "#ffc107"
      },
      {
        title: "How-to video instructions",
        text: "Our comprehensive library of instructional and informative videos.",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq"
      },
      {
        title: "LibreLinkUp²¹ Product Information Page",
        text: "More information and download links for LibreLinkUp²¹",
        linkText: "More information",
        linkHref: "#app-info",
        type: "phone"
      }

    ]
  },



  "FreeStyle Libre 2 Sensor": {
    title: "FreeStyle Libre 2 Sensor",
    sup: "",
    items: [
      {
        title: "Your Complete Guide to FreeStyle Libre 2",
        text: "An essential resource for all FreeStyle Libre 2 users.",
        linkText: "More Details",
        linkHref: "#manual",
        type: "banner-card",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2",
        cardBg: "#ffc107"
      },
      {
        title: "FreeStyle Libre 2 Sensor Adhesion Guide",
        text: "Learn how to correctly prepare the skin for sensor application, and tips for keeping your sensor secure.",
        linkText: "More Details",
        linkHref: "#manual",
        type: "banner-card",
        cardTitle: "Sensor Adhesion Guide",
        cardBg: "#ffc107"
      },
      {
        title: "Video Guides",
        text: "Our comprehensive library of instructional and informative videos to help you get the most out of the FreeStyle Libre 2 system.",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video"
      },
      {
        title: "FreeStyle Libre 2 User Manual",
        text: "A digital version of the FreeStyle Libre 2 user manual.",
        linkText: "More Details",
        linkHref: "#manual",
        type: "manual",
        manualTitle: "User's Manual",
        manualSub: "FreeStyle Libre 2 Sensor"
      },
      {
        title: "FreeStyle Libre 2 Important Safety Information",
        text: "Important information to be aware of when using FreeStyle Libre 2.",
        linkText: "More Details",
        // linkHref: "#safety-info",
        linkHref: "#manual",
        type: "phone"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq"
      }
    ]
  },
  "FreeStyle Libre 2 Reader": {
    title: "FreeStyle Libre 2 Reader",
    sup: "",
    items: [

      {
        title: "Your Complete Guide to FreeStyle Libre 2",
        text: "An essential resource for all FreeStyle Libre 2 users.",
        linkText: "More Details",
        linkHref: "#guide",
        type: "banner-card",
        cardTitle: "Your Complete Guide to FreeStyle Libre 2",
        cardBg: "#ffc107"
      },
      {
        title: "FreeStyle Libre 2 Reader User Manual",
        text: "A digital version of the FreeStyle Libre 2 user manual.",
        linkText: "More Details",
        linkHref: "#reader-manual",
        type: "manual",
        manualTitle: "Reader User Manual",
        manualSub: "FreeStyle Libre 2 Reader"
      },
      {
        title: "Video Guides",
        text: "Our comprehensive library of instructional and informative videos to help you get the most out of the FreeStyle Libre 2 system.",
        linkText: "Watch Now",
        linkHref: "#videos",
        type: "video"
      },
      {
        title: "Frequently Asked Questions",
        text: "Covering all aspects of FreeStyle Libre 2, including products, digital health tools, subsidy, special offers and more.",
        linkText: "More Details",
        linkHref: "#faq",
        type: "faq"
      },
      {
        title: "FreeStyle Libre 2 Reader Purchase Page",
        text: "Purchase FreeStyle Libre 2 Reader online.",
        linkText: "More Details",
        linkHref: "#purchase-reader",
        type: "phone"
      }
    ]
  }
};

// ------------------- 2. FAQ CATEGORIES DATA -------------------
const faqCategoriesData = {
  "$15 Trial": [

    {
      q: "Is shipping included in the cost of the $15 trial sensor?",
      a: "Shipping is included in the cost of the $15 trial sensor, and applies to any location in Australia."
    },
    {
      q: "What is the difference between the FreeStyle Libre 2 Plus type 1 experience pack and the FreeStyle Libre 2 Plus type 2 experience pack?",
      a: "The FreeStyle Libre 2 Plus sensors you receive with both the FreeStyle Libre 2 Plus type 1 experience pack and the FreeStyle Libre 2 type 2 Plus experience pack are exactly the same. The difference between the type 1 pack and the type 2 pack are the materials and information we provide with your order to ensure you have the best experience with FreeStyle Libre 2 Plus as possible."
    },
    {
      q: "Who is eligible for this offer?",
      a: "This offer is open to new users who are indicated for FreeStyle Libre 2 Plus, and who have not purchased FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors from FreeStyleLibre.com.au previously. The FreeStyle Libre 2 Plus Flash Glucose Monitoring System Sensor (‘Sensor’), when used with a compatible device, is indicated for measuring interstitial fluid glucose levels in people (age 2 and older) with diabetes mellitus, including pregnant women."
    },
    {
      q: "I need assistance using FreeStyle Libre 2 Plus, what resources are available for me?",
      a: "The FreeStyle Libre 2 Plus system is designed to be as easy as possible to apply and use. When you receive your FreeStyle Libre 2 Plus sensor, you will also receive training materials including The Complete Guide to FreeStyle Libre 2 Plus and the Sensor Adhesion Guide. Further support is available on FreeStyleLibre.com.au, including helpful articles, videos and FAQ’s. If you need to talk to someone, our Customer Care team is available for you on 1800 801 478 from 8am to 7pm AEDT, Monday to Friday, excluding public holidays."
    },
    {
      q: "Can I get a FreeStyle Libre 2 reader with the offer?",
      a: "The FreeStyle Libre 2 reader is not included in this offer. The FreeStyle LibreLink app can be downloaded from Google Play or the Apple App Store, free of charge. The FreeStyle Libre 2 reader can be purchased from https://www.freestylelibre.com.au/freestyle-libre-2-reader.html"
    },
    {
      q: "Is my phone compatible with the FreeStyle LibreLink app?",
      a: "To check if your phone is compatible with FreeStyle LibreLink see the FreeStyle Libre 2 Plus compatibility guide."
    }

  ],
  "Subscribe and Save": [
    {
      q: "I have a subscription that I purchased prior to the introduction of this offer. Does my subscription automatically update to this subscription offer?",
      a: "If you have a subscription that commenced prior to the Subscribe and Save subscription offer, it will not automatically update to this offer. In order to receive the benefits of this offer you must purchase a new subscription. You may cancel your previous subscription at any time."
    },
    {
      q: "I have an existing subscription. Do my previous orders count towards receiving every 6th order free?",
      a: "Subscription orders received through previously existing subscription offers, such as the Subscription Introduction Offer, do not count towards receiving every 6th order free."
    },
    {
      q: "Can I access NDSS subsidised pricing through this subscription?",
      a: "You cannot access subsidised pricing through this subscription. The subsidised access to FreeStyle Libre 2 and FreeStyle Libre 2 Plus sensors is administered by the NDSS. To check eligibility and information on how to access the NDSS subsidy, visit www.SubsidyChecker.com.au ."
    },
    {
      q: "If I cancel my subscription but then start a new one, will my previous orders count towards my sixth order being free?",
      a: "Unfortunately the orders you have made in a previous, cancelled subscription will not count towards the order count of a new subscription. You can pause your subscription and resume it at any time without losing your progress to your free order."
    },
    {
      q: "If I pause my subscription, once I've resumed it, will my previous orders count towards my sixth order being free?",
      a: "Yes, if you resume a paused subscription that was started as part of this subscription offer, all previous orders count towards your sixth order being free. If you resume a paused subscription that was commenced under a previous subscription offer the previous orders won't count towards your sixth order being free."
    },
    {
      q: "Can I have multiple subscriptions running at the same time?",
      a: "You may have multiple subscription running at the same time. This may suit you if you have multiple people in the same household who use FreeStyle Libre 2 Plus."
    }
  ],
  "System Overview": [
    {
      q: "Does the FreeStyle Libre 2 or FreeStyle Libe 2 Plus need to be calibrated?",
      a: "No, the FreeStyle Libre 2 sensor is calibrated during the manufacturing process so you don't have to. The sensor is activated by scanning and then, after a 1 hour warm up period, it starts to record glucose readings."
    },
    {
      q: "Is interstitial fluid a suitable replacement for blood glucose testing?",
      a: "Interstitial fluid-based glucose readings are a reliable indicator of blood glucose levels. The average lag time of interstitial fluid (sensor) readings compared to blood glucose readings is approximately 2.1 minutes in children and 2.4 minutes in adults 5"
    },
    {
      q: "How is Continuous Glucose Monitoring different to Blood Glucose Monitoring (BGM)?",
      a: "Blood Glucose Monitoring provides users with a point-in-time glucose reading. The FreeStyle Libre 2 system not only provides a point-in-time glucose reading, but also provides the user with a complete picture of glucose variation over the last 8 hours and a trend arrow."
    },
    {
      q: "Can the FreeStyle Libre 2 Plus be used by children?",
      a: "The FreeStyle Libre 2 Plus Flash Glucose Monitoring System Sensor (‘Sensor’), when used with a compatible device, is indicated for measuring interstitial fluid glucose levels in people (age 2 and older) with diabetes mellitus, including pregnant women. The Sensor and compatible device are designed to replace blood glucose testing in the self-management of diabetes, including dosing of insulin. The indication for children (age 2 - 12) is limited to those who are supervised by a caregiver who is at least 18 years of age. The caregiver is responsible for managing or assisting the child to manage the Sensor and compatible device and also for interpreting or assisting the child to interpret Sensor glucose readings."
    },
    {
      q: "How should the FreeStyle Libre 2 system be stored?",
      a: "Both the reader and the sensor should be stored between 4°C and 25°C in a cool dry place away from direct sunlight."
    }
  ],


  "FreeStyle LibreLink": [
    {
      q: "What is the FreeStyle LibreLink mobile app?",
      a: "The FreeStyle LibreLink app enables you to receive automatic glucose readings, every single minute, straight to your smartphone, without the need to scan.\n\nWith the app you can:\n• View your current glucose reading, a trend arrow, which indicates how your glucose is changing, and the last 8 hours of glucose history\n• See glucose reports, including your Ambulatory Glucose Profile, which reveal trends and patterns\n• Add notes to track your food, insulin use, exercise, and other events\n• Connect to healthcare professionals and caregivers with LibreView and LibreLinkUp\n• Set optional alarms to alert you to high or low glucose events\n\nImportant: You must have a compatible iPhone or Android phone to install and use the app."
    },
    {
      q: "Do I still scan my sensor with my smartphone?",
      a: "As of the FreeStyle LibreLink update, you no longer need to scan your sensor to receive glucose readings. You only need to scan to start a new sensor, enter a glucose reading into your logbook, or backfill up to 8 hours' worth of data if your sensor has been disconnected from your phone."
    },
    {
      q: "How do I scan my FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensor with my phone?",
      a: "Android:\n\nAfter you've applied a FreeStyle Libre 2 or 2 plus sensor to the back of your upper arm, open the app and hold the back of your Android phone near (exact distance will vary by phone) the sensor to scan it. The size and location of the NFC antenna in Android phones varies by make and model, so you may have to move the phone around to find the best position for scanning the FreeStyle Libre 2 or 2 plus sensor.\n\nOnce you have found the optimal scan position, wait for the app to produce two distinct tones or vibrations before you move the phone away from the FreeStyle Libre 2 or 2 Plus sensor. The first tone indicates the phone's NFC has recognized the sensor. The second tone indicates the scan is complete.\n\niPhone:\n\nAfter you've applied a FreeStyle Libre 2 or 2 Plus ensor to the back of your upper arm, open the app and tap one of the scan buttons within the app to put the iPhone in a scan ready state. There are two types of scan buttons – a blue button on the Home screen and a gray icon in the top right corner of most screens. Hold the top edge of your iPhone near the sensor and do not move your iPhone until you hear a tone and/or feel a vibration, which indicates the scan is complete."
    },
    {
      q: "Can the app replace my FreeStyle Libre 2 reader?",
      a: "Yes. The app was developed using the same technology that is in the FreeStyle Libre 2 reader for receiving and processing glucose data, so it can also be used for routine monitoring. A finger prick test using a blood glucose meter is required if your symptoms do not match the system readings."
    },
    {
      q: "Can I use my FreeStyle Libre 2 reader and FreeStyle LibreLink app with the same sensor?",
      a: "Yes, it is possible to use both your FreeStyle Libre 2 reader and the FreeStyle LibreLink app with your FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensor. If using both devices with the Sensor, the FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensor will not stream real time glucose readings to the app. You will need to scan your sensor with the reader or FreeStyle LibreLink app to receive a glucose reading."
    },
    {
      q: "Do I have to remove the case on my phone to scan the sensor?",
      a: "You may or may not have to remove your phone case – it depends on the material that the case is made from, how thick the case is, and how well your phone's NFC antenna works. If your phone case is made from plastic or silicone or another non conductive material, you will probably be able to scan the sensor without removing the case. If the case is aluminum, metal or anything else that has a conductive surface, you may need to remove the case before scanning your sensor. The thickness of the case can also make a difference. If your case is very thick, it could prevent the phone from scanning the sensor."
    },
    {
      q: "Can my healthcare professional access my reports remotely e.g. over the internet or cloud?",
      a: "The FreeStyle LibreLink app will automatically sync your glucose data to LibreView, which is a secured cloud based solution and your healthcare professional will be able to access from any compatible internet connected device. Reports are also available when the reader is connected to a computer; you can send the pdf version of your reports to your healthcare professional via email (with your healthcare professional's permission)."
    },
    {
      q: "Which devices work with the FreeStyle LibreLink app?",
      a: "FreeStyle LibreLink Mobile compatibility guide can be found here: mobile compatibility guide."
    },
    {
      q: "Are there other apps available that are approved for use with FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors?",
      a: "No, the FreeStyle LibreLink app is the only app that has been tested by Abbott Diabetes Care to be compatible with FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors. The FreeStyle LibreLink was developed to ensure compliance with local regulations, including safety and performance requirements in accordance with the intended use. Any product that is intended to be compatible with FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors would also need to comply with these regulations as well."
    },
    {
      q: "What is near-field communication (NFC) and how do I know if my phone has it?",
      a: "NFC is the wireless communication technology that enables your FreeStyle Libre 2 and 2 Plus sensors to wirelessly transmit data to another device.\n\nFor Android users: Your Android phone must have NFC capabilities and NFC must be enabled. Many of the latest Android phones support NFC. Check your phone's manual or go to the phone's Settings menu and look for settings related to 'NFC', 'Connections', 'Sharing', or 'Wireless & Networks'.\n\nFor iPhone users: You must have an iPhone 8 or higher running iOS 15.5 or higher to utilize the NFC capability needed to scan the FreeStyle Libre 2 sensor."
    },
    {
      q: "Can the FreeStyle LibreLink app be used to make treatment decisions?",
      a: "Yes. People with diabetes can use FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensors with the app to better understand the impact of actions like food, exercise, and insulin based on their glucose levels. They can also make day to day therapy decisions when using the app with a FreeStyle Libre 2 or 2 Plus sensor, including insulin dosing decisions, based on guidance from their healthcare professional."
    }
  ],

  "Mobile Compatibility": [
    {
      q: "Where do I find the mobile compatibility guide?",
      a: "You can find the mobile compatibility guide at freestylelibre.com.au/compatibility."
    },
    {
      q: "What should I do if I am running an operating system or using a phone that is not listed on the compatibility guide?",
      a: "If you are using an operating system or phone that is not listed on the compatibility guide, it's important to note that some functionality such as glucose alarms and data sharing may not work on phones that have not been evaluated or have been deemed incompatible.\n\nWe recommend disabling automatic operating system updates on your mobile device."
    },
    {
      q: "I noticed that my mobile device is listed on the compatibility guide, but after looking at the phone manufacturer's website in my country, the phone model does not include NFC on my device. Does that mean that my phone is not compatible with the FreeStyle LibreLink app?",
      a: "Phones listed on the compatibility guide are regularly tested to evaluate NFC scan performance, Bluetooth connectivity, and app compatibility with Sensors.\n\nIt's important to confirm the phone specifications for the phone model(s) available in your country, as device manufacturers may have different specifications/configurations per country.\n\nIf the phone model available in your country does not have NFC, Bluetooth or meet the minimum operating system requirements, your phone will be deemed incompatible with the FreeStyle LibreLink app."
    },
    {
      q: "When will the FreeStyle LibreLink app be compatible with new operating systems?",
      a: "We are regularly evaluating and verifying compatibility with newer operating system versions with the FreeStyle LibreLink app. When a new operating system has been released by Android or Apple, our teams work as quickly as possible to verify and confirm compatibility."
    },
    {
      q: "I noticed that the compatibility guide does not include all the operating system minor releases provided by Apple and Android; does this mean that the minor releases are not compatible with the FreeStyle LibreLink app?",
      a: "Minor operating system updates generally maintain compatibility, but we recommend checking our guides for official updates."
    },
    {
      q: "I noticed that my device and/or operating system is no longer listed on the compatibility guide. Why was it removed?",
      a: "We regularly review and test devices and operating systems for compatibility with our apps to ensure devices and operating systems continue to be compatible.\n\nIn some cases, devices and operating systems may be removed from the compatibility guide for the following reasons, but are not limited to:\n\n• Operating system (OS) is no longer supported with security patches by Apple or Google\n• Device manufacture has discontinued support for the device\n• The device did not pass testing with updated or new features of the app\n• New app and/or sensor features implemented that are not supported by the hardware of the device"
    },
    {
      q: "I am using an operating system that is not listed on the compatibility guide. Can I downgrade my OS to a lower version that is listed on the compatibility guide?",
      a: "We recommend using an operating system that has been checked and confirmed for compatibility as listed on guides, before installing a new operating system version on your smartphone. Please check with Apple or Android support to confirm if you're able to downgrade your operating system."
    }
  ],

  "LibreLinkUp": [
    {
      q: "What is LibreLinkUp?",
      a: "LibreLinkUp is a free-to-download mobile app that allows parents and other caregivers to receive glucose readings from a loved one who uses the FreeStyle LibreLink app to obtain glucose readings from their FreeStyle Libre 2 or 2 Plus sensor.\n\nOnce you have installed the LibreLinkUp app and accepted an invitation to connect from a FreeStyle LibreLink user, you will receive their glucose information on your smartphone, every single minute from their FreeStyle Libre 2 or 2 Plus sensor.\n\nAs long as you have opened and signed in to the LibreLinkUp app at least once, you will receive notifications even if you have closed out of the app. The LibreLinkUp app does not need to be open or running for you to receive notifications; the notifications can be sent to your phone's lock screen.\n\nThe LibreLinkUp app allows caregivers to make connections with up to twenty (20) FreeStyle LibreLink users. Likewise, FreeStyle LibreLink users can share glucose information with up to twenty (20) LibreLinkUp connections."
    },
    {
      q: "Should I make medication or treatment decisions based on LibreLinkUp data?",
      a: "LibreLinkUp is not intended to provide data for treatment decisions.\n\nThe LibreLinkUp app is a secondary viewer that enables the sharing of glucose data for information only and is not intended as a substitute for the primary meter or viewer or the advice of a healthcare professional. Individuals using LibreLinkUp to receive information about persons with diabetes should always confirm the data received with the individual sending the data and consult a healthcare professional if they have any queries or concerns about diabetes management."
    },
    {
      q: "Can I send a LibreLinkUp invitation to my diabetes healthcare professional?",
      a: "LibreLinkUp is intended for parents, loved ones and other caregivers not for healthcare professionals. If you want your diabetes healthcare professional to have access to your FreeStyle LibreLink glucose readings, you may connect via www.LibreView.com. Please ask your diabetes healthcare professional for their LibreView account ID and add it to your LibreView account, or ask them to send you an email invitation directly from LibreView to be able to share your reports with them."
    },
    {
      q: "Is LibreLinkUp intended for clinical use or by clinicians?",
      a: "LibreLinkUp is intended for use by “loved ones” as an information-sharing service as described above. It is not intended to be used in a clinical setting by clinicians to monitor their patients."
    },
    {
      q: "What information is visible on LibreLinkUp?",
      a: "LibreLinkUp users can view glucose readings and the trend arrows which show the direction the glucose is heading.\n\nLibreLinkUp users will not receive:\n• 8-hour history or glucose graphs\n• Notes about insulin, food, etc.\n• In some instances, the trend arrow may not always appear with the reading."
    },
    {
      q: "Do I need an internet connection for LibreLinkUp?",
      a: "Yes. You need an internet connection to receive notifications from your FreeStyle LibreLink connections."
    },
    {
      q: "Can I silence notifications from the LibreLinkUp app temporarily?",
      a: "Yes. To turn off notifications:\n1. Go to the main screen of the LibreLinkUp app\n2. Press the bell icon\n3. Then press “ Turn Off Notifications” in the window. A line will appear through the bell icon.\n\nTo turn notifications back on, press the bell icon and follow the instructions on the screen."
    },
    {
      q: "How many FreeStyle LibreLink users can I follow with the LibreLinkUp app?",
      a: "The LibreLinkUp app allows caregivers to connect with up to twenty (20) FreeStyle Libre app users. Likewise, FreeStyle Libre app users can share glucose data with up to twenty (20) LibreLinkUp app users."
    },
    {
      q: "Why am I not getting notifications from LibreLinkUp?",
      a: "Look at the bell icon on the main screen of the app. If the bell icon has a line through it, then notifications for the app are turned off. To turn them on, tap on the bell icon and follow the instructions on the screen to turn notifications on.\n\nNote: If the bell icon has a line through it and when you select it you receive a message that notifications are turned off on your smartphone, go to the notifications settings on your smartphone's operating system. After confirming that notifications are turned on in your smartphone's operating system for the LibreLinkUp app, return to the home screen in the LibreLinkUp app and confirm that notifications are turned on by looking at the bell icon."
    },
    {
      q: "My Connection accidentally deleted me, how can I re-establish the connection?",
      a: "The FreeStyle LibreLink user needs to re-send a new invite from their FreeStyle LibreLink app to the Caregiver."
    },
    {
      q: "Will I receive sound notifications if my smartphone is set to “vibrate only” or “do not disturb”?",
      a: "You will not receive sound notifications for the LibreLinkUp app if your smartphone is set on “vibrate only” or “do not disturb”."
    },
    {
      q: "What do “HIGH” and “LOW” mean?",
      a: "“LOW” indicates a glucose reading lower than 2.2 mmol/L (40 mg/dL).\n\n“HIGH” indicates a glucose reading higher than 27.8 mmol/L (500 mg/dL).\n\nIf either of these readings are seen, the FreeStyle LibreLink user should check his/her blood glucose with a test strip. If they get a “LO” or “HI” result from a blood glucose meter, the FreeStyle LibreLink user should contact their healthcare professional immediately or follow their treatment plan as developed with their HCP."
    },
    {
      q: "Can I use the same LibreView account for FreeStyle LibreLink and LibreLinkUp?",
      a: "Yes, a personal LibreView account can be used to sign into FreeStyle LibreLink and LibreLinkUp."
    },
    {
      q: "Can I have both the FreeStyle LibreLink app and the LibreLinkUp app on the same phone?",
      a: "Yes. However, it is not required to have the LibreLinkUp app on your phone to share data from FreeStyle LibreLink. If you are using FreeStyle LibreLink to manage your own glucose levels and also want to view data from other people using FreeStyle LibreLink, you will need to install LibreLinkUp to see the glucose readings from your connections."
    },
    {
      q: "Is LibreLinkUp region-based, meaning, can I share my data across regions?",
      a: "Yes, the system is region-based. Connections within the system can only be created with other users in your region."
    },
    {
      q: "Upon receiving an invite via email from a FreeStyle LibreLink user, do I have the option to skip the sign-in process upon LibreLinkUp installation and do that later?",
      a: "No, you must create an account or sign into an existing account, then accept the invitation from the Freestyle LibreLink user before you can view their glucose data. The system has to recognize the connection, which is based on the email address of the person who was invited."
    },
    {
      q: "Is there any age limit for LibreLinkUp?",
      a: "Only user's 18+ can create an account in LibreLinkUp."
    },
    {
      q: "Upon creating a LibreView account via LibreLinkUp, will I be able to view my connections' glucose data in LibreView as well?",
      a: "No, the connection only applies to the FreeStyle LibreLink data shared via LibreLinkUp."
    },
    {
      q: "Is there a sign out option in LibreLinkUp?",
      a: "Yes, via the main menu in the LibreLinkUp app."
    },
    {
      q: "Upon un-installation and re-installation of LibreLinkUp, will I still be able to view the glucose readings from my existing connections?",
      a: "Yes, as long as you sign into the same account that your connections have shared with, the data from those connections will still be available in your new installation of LibreLinkUp."
    },
    {
      q: "When my phone (or the FreeStyle LibreLink user's phone) is reconnected to the network after being in a disconnected state for a while (e.g. long plane flight or low connectivity area) what will the notifications look like?",
      a: "The LibreLinkUp user should only see a notification for the latest glucose readings. The LibreLinkUp app, however, will be populated with all the readings that occurred while the phone was disconnected, just open the app to see the historical results."
    },
    {
      q: "If I change my account email for FreeStyle LibreLink or LibreLinkUp (or LibreView) will my connections be maintained?",
      a: "Yes, the system will recognize the account information change and maintain the connections even if the user's email address is changed."
    },
    {
      q: "Can I log into LibreLinkUp on multiple phones?",
      a: "Yes, and assuming notifications are turned on, you will receive notifications on all phones you are logged into."
    },
    {
      q: "As a parent/guardian who created an account for a child to use FreeStyle LibreLink (a “minor” account) – how can I connect with them using LibreLinkUp?",
      a: "If you used your own email address to create an account for a minor on FreeStyle LibreLink, you can still connect with that user through LibreLinkUp. Go through the same steps in FreeStyle LibreLink to invite a connection. The email address you enter to invite the connection should be your email address (the same one that already is logged into the FreeStyle LibreLink app). You'll get an email invitation, then follow the steps to install the LibreLinkUp app on the phone you'll be using. When you install the app, and log in with your existing account information, you'll see a notification indicating that you have been invited to connect with the minor. Accept the invitation to complete the connection."
    }
  ],





  "Data Management and LibreView": [
    {
      q: "What is LibreView and how does it work with the FreeStyle LibreLink app?",
      a: "LibreView is a cloud-based diabetes management system provided by Abbott. LibreView provides a secure repository for data from your FreeStyle LibreLink app, and allows you to easily share your glucose data with your healthcare professional or others, if you wish. Data is automatically uploaded to LibreView when your phone is connected to the Internet."
    },
    {
      q: "Why do I need to create a LibreView account to use the FreeStyle LibreLink app?",
      a: "LibreView is used to manage your account information and enables detailed reporting and data sharing. Once the app is installed and you accept the terms of use, you will need to create a LibreView account in order to start using the app. LibreView allows you to share your glucose data with your healthcare professional and other apps that connect with FreeStyle LibreLink app."
    },
    {
      q: "Is my data safe? What will Abbott do to protect patient data?",
      a: "Abbott and its partners comply with all applicable data protection and privacy laws in users' jurisdictions. Please read the End User License Agreement and Terms of Use or the Privacy Notice within the app or at freestylelibre.com.au to ensure that you are comfortable with the data handling practices that govern the use of the app and LibreView; otherwise, you should not install the app."
    },
    {
      q: "What happens if I lose or change my phone?",
      a: "If you lose your phone, download the app again on a compatible phone and sign in with your account information. If you have an active sensor and need to reinstall the app, when you sign into your existing account, you can continue using your active sensor until the end of its useful life. You will not be able to view historical data in the new installation of the app, but this data will be available in LibreView."
    },
    {
      q: "What should I do if I have questions about the app or my data?",
      a: "If you have any questions about the app or your data, including questions on how to close your LibreView account, please call us on 1800 801 478."
    }
  ],





  "The FreeStyle Libre 2 system and NovoPen® 6": [
    {
      q: "How do I obtain a NovoPen® 6?",
      a: "The NovoPen ® 6 is a Novo Nordisk product and is not sold or distributed by Abbott. Ask your healthcare professional about the NovoPen ® 6 or find your closest distributing pharmacy at novopen.pharmaprograms.com.au/locator"
    },
    {
      q: "What are the minimum system requirements for FreeStyle LibreLink app and NovoPen® 6?",
      a: "For compatibility information, please refer to the mobile compatibility guide."
    },
    {
      q: "How do I pair my NovoPen® 6 with the FreeStyle LibreLink app?",
      a: "From the FreeStyle LibreLink app:\n1. Open Menu and select Insulin pens\n2. Select Get Started\n3. Select Pen Type\n4. Scan the NovoPen ® 6 (for iPhone, press the scan button to scan)\n5. Verify the device was added, and Tap Next\n6. Select Insulin pen colour\n7. Select type of insulin\n8. Select Insulin brand\n9. Opt In or Decline to Novo Nordisk Data Privacy consent (this consent is not shown if user is a minor or using the app in account-less mode).\n10. Verify Setup is Complete and Tap Next"
    },
    {
      q: "How do I transfer insulin doses from NovoPen® 6 to FreeStyle LibreLink?",
      a: "For iPhone users:\n1. Tap the scan button. Your iPhone will display a \"Ready to Scan\" dialog indicating you can now scan your NovoPen ® 6 to transfer your insulin doses.\n2. Hold your NovoPen ® 6 against the top of your phone until the scan is complete.\n3. Do not move your phone or NovoPen ® 6 until you hear a tone and/or feel a vibration. This completes the scan.\n\nFor Android phone users:\n1. Open the App and hold your NovoPen ® 6 flat against the back of your phone.\n2. Hold the pen steady until the scan is complete.\n3. Do not move your phone or NovoPen ® 6 until you hear a tone and/or feel a vibration. This completes the scan."
    },
    {
      q: "Will FreeStyle LibreLink automatically detect prime/flow checks?",
      a: "NovoPen ® 6 does not register or show whether the number of units was a prime/flow check or an actual injection."
    },
    {
      q: "How do I indicate in FreeStyle LibreLink that a dose was a prime/flow check, and not an actual injection?",
      a: "To mark the dose as a prime/flow check:\n1. Go to the Edit Note screen (accessible by tapping on the insulin icon symbol on the home screen).\n2. Tap the blue pencil icon to edit.\n3. Tap the down arrow to change the dose from ‘Dose - I injected this dose’ to ‘Flow Check - I did not inject this insulin’.\n4. Tap Done to save the change."
    },
    {
      q: "Why do we use the word ‘Flow Check’ and not flow, prime, air shot, or test shot?",
      a: "There is no universally understood term. The NovoPen ® 6 Instructions for Use uses the term \"test the flow\"."
    },
    {
      q: "Will the doses that I have marked as prime/flow checks appear in LibreView?",
      a: "No, they will only be viewable in the FreeStyle LibreLink app."
    },
    {
      q: "Which reports in LibreView will display Insulin data from the NovoPen® 6?",
      a: "Insulin data from NovoPen ® 6 will be visible in LibreView reports everywhere that manually logged insulin doses appear:\n• Snapshot\n• Weekly Summary\n• Mealtime Patterns\n• Daily Log\n• Device Details"
    },
    {
      q: "Can I edit insulin doses from the Home Screen or Logbook?",
      a: "Yes. You can view and edit recent notes by tapping on the syringe icon on the Home Screen OR by opening the Logbook and tapping on each insulin dose to view or edit the details."
    },
    {
      q: "How do I edit an insulin dose I previously entered?",
      a: "Click on the blue pencil icon once you’ve tapped on the syringe icon from the Home Screen or the Logbook detail screen. You will then be able to edit the details about the insulin dose."
    },
    {
      q: "How do I edit an insulin dose and mark it as a prime/flow check?",
      a: "You can edit insulin doses from the Home Screen or Logbook by following the steps below.\n\nHome Screen:\n1. Tap on the syringe symbol(s) on the home screen to open the Edit Note screen\n2. Tap on the down arrow icon under Dose or Flow Check to edit the dose from a therapeutic dose to a Flow Check\n3. Tap Done\n\nLogbook:\n1. Tap the Settings Menu\n2. Tap Logbook\n3. Tap on an insulin dose from the Logbook to view/edit details\n4. Tap the blue pencil icon to edit details about the dose\n5. Tap on the down arrow icon under Dose or Flow Check to edit the dose from a therapeutic dose to a Flow Check\n6. Tap Done\n\nYou can also edit the insulin brand and add or edit any additional notes as needed."
    },
    {
      q: "I would like to customize the name of my NovoPen® 6 in the app, how can I do this?",
      a: "You can customize the name of your NovoPen ® 6 by following the steps below:\n1. Tap the FreeStyle LibreLink Settings Menu\n2. Tap Insulin Pens\n3. Tap on the gear icon next to the current pen name\n4. Tap Name and enter the new name for your insulin pen\n5. Tap Save\n6. The new name will be displayed in the app"
    },
    {
      q: "Can I change the colour of the NovoPen® 6 in the app?",
      a: "Yes, you can change the colour of the pen via the pen settings:\n1. Tap the FreeStyle LibreLink Settings Menu\n2. Tap Insulin pens\n3. Tap gear icon next to the current pen (to open pen settings)\n4. Tap Colour\n5. NovoPen ® 6 comes in Blue and Grey"
    },
    {
      q: "If I have only one NovoPen® 6 (i.e. for basal insulin), can I still add notes concerning my rapid insulin injection?",
      a: "Yes, you can add additional notes via the Logbook by tapping on the ‘Add Note’ button. You will be prompted to confirm the time of the note, then select your note type (Food, Rapid-Acting Insulin, Long-Acting Insulin or Exercise) and enter details about the note and tap Done."
    },
    {
      q: "Can I add notes regarding food and or sport activities related to my insulin dose made with my NovoPen® 6?",
      a: "Yes, you can add notes regarding food intake or exercise via the Edit Note screen by tapping on the syringe icon(s) on the Home screen or via the Logbook, by tapping on an insulin dose and the blue pencil icon to edit the insulin dose details."
    },
    {
      q: "Is it possible to set a date and time on the NovoPen® 6?",
      a: "The pen does not have the ability to set your time zone or display the current time. It does, however, show you how much time has passed since the last injection. The FreeStyle LibreLink app will capture a time stamp for when you scan the pen, which will be displayed in the logbook."
    },
    {
      q: "How can you tell the difference between insulin doses that came from the NovoPen® 6 vs a non-connected pen?",
      a: "Manually entered insulin doses will appear as a “Note” on the Logbook screen with a syringe symbol. Whereas doses transferred from the NovoPen ® 6 will display with the number of units injected and the syringe symbol."
    },
    {
      q: "Can a user change their data sharing preference for Novo Nordisk?",
      a: "Yes. If the user chooses to stop sharing data with Novo Nordisk, they can change their preferences in the About section of the Insulin Pen Settings. Navigate to ‘Novo Nordisk Data Privacy’ and press Decline. This will result in ADC (Abbott Diabetes Care) no longer sharing the pseudonymized data for this user with Novo Nordisk."
    },
    {
      q: "Will minors be prompted to Opt in or Decline the Novo Nordisk research consent when using the app?",
      a: "No. The Data Sharing consent screen will only appear when signed into an adult account."
    }
  ],

  "FreeStyle Libre 2 Reader": [
    {
      q: "Can the FreeStyle Libre 2 calculate a mealtime insulin dose?",
      a: "Yes, the system can calculate a suggested mealtime insulin dose when using the built-in blood glucose meter since it has a built-in insulin dose calculator function.\n\nPlease note that this feature only works when using the blood glucose test strip port and needs to be activated by a healthcare professional."
    },
    {
      q: "How does the FreeStyle Libre 2 calculate an insulin dose?",
      a: "The insulin calculator utilises settings entered into the insulin calculator during one of two setup modes (Easy or Advanced); this feature requires an understanding of the use of insulin and must be set up by a healthcare professional. Using the settings they enter, the glucose reading from the built-in blood glucose meter and carbohydrate information (in grams or servings) the user provides, the insulin calculator software in the reader calculates a suggested insulin dose."
    },
    {
      q: "Does the insulin calculator work with any type of insulin?",
      a: "No, the insulin calculator can assist you with calculating rapid-acting (meal-time or short-acting) insulin doses only. The insulin calculator must be set up by a healthcare professional."
    },
    {
      q: "What's the difference between the Easy and Advanced setup for insulin calculator?",
      a: "'Easy setup' is for users who use a fixed dose of rapid-acting insulin before meals. 'Advanced setup' is for users who count carbohydrates (in grams or servings) and/or use a correction factor to adjust doses of rapid-acting insulin at meals. The insulin calculator must be set up by a healthcare professional."
    },
    {
      q: "What is a Trend Arrow? How does it work? And what does it tell me?",
      a: "The FreeStyle Libre 2 Continuous Glucose Monitoring System offers a Trend Arrow with each glucose reading which tells you which way and how quickly glucose levels are changing. So, at any given time, you not only know what your glucose level is currently, but also which way it is heading. Depending on the direction of Trend Arrow, you can find out if your glucose levels are going up, down or staying steady, facilitating better decision-making."
    },
    {
      q: "Why does the system require a 1 hour warm up period?",
      a: "Abbott Diabetes Care is committed to making its products better for our users. After the insertion, the sensor and the body need to equilibrate (or settle). Therefore, we let the system equilibrate for 1 hour to make sure that it is providing accurate glucose readings."
    }
  ],


};

// ------------------- 3. VIDEO GUIDES DATA -------------------
const videoGuidesData = {
  "Get started with the Libre app": {
    title: "Get started with the Libre app",
    sup: "12",
    items: [
      {
        title: "Understanding the Libre app12 home screen",
        text: "A guide to the key features of the Libre app12 home screen",
        cardTitle: "Understanding your Home Screen"
      },
      {
        title: "Setting up optional alarms86 in Libre app12",
        text: "The Libre app has expanded optional alarm features, including predictive alarms, powered by minute-to-minute readings,55 silent mode, escalating alarms, and high and low glucose alarms.",
        cardTitle: "How to customise glucose alarms"
      },
      {
        title: "Viewing your glucose data on Apple Watch88",
        text: "Check your glucose readings with a glance at your wrist, dismiss alarms on your watch or the Libre app with one tap.88",
        cardTitle: "Viewing glucose readings on your watch via the Libre app"
      },
      {
        title: "Interpreting your glucose reading",
        text: "Learn how to interpret your reading and what each element means. All elements of your reading combined give you a full picture of your glucose levels.",
        cardTitle: "Understanding your glucose readings"
      },
      {
        title: "NEW silent mode with optional glucose alarms",
        text: "Learn all about the new silent mode87, so you can choose when you don't want to be disturbed.",
        cardTitle: "How to use Silent Mode with Glucose Alarms"
      },
      {
        title: "Libre app reports",
        text: "Learn about key reports and how to interpret them. Each report can quickly give you answers about how your glucose levels are tracking.",
        cardTitle: "How to view your glucose reports"
      },
      {
        title: "Sharing glucose data with your healthcare professional",
        text: "With Libre app12 it's easy to connect with your healthcare team so they can view your glucose data and tailor your treatment plan.",
        cardTitle: "How to share your glucose data with your doctor"
      }
    ]
  },
  "Get to know the FreeStyle Libre 2 system": {
    title: "Get to know the FreeStyle Libre 2 system",
    sup: "",
    items: [
      {
        title: "Introduction to the FreeStyle Libre 2 system",
        text: "Get an overview of the FreeStyle Libre 2 system.",
        cardTitle: "Introduction to the FreeStyle Libre 2 system"
      },
      {
        title: "Benefits of the FreeStyle Libre 2 system",
        text: "Explore the clinically proven benefits of the FreeStyle Libre 2 system and how it improves glucose management.",
        cardTitle: "Benefits of the FreeStyle Libre 2 system"
      },
      {
        title: "How does the sensor measure glucose?",
        text: "Learn how the FreeStyle Libre 2 system works, and understand why it's normal for sensor glucose readings to be slightly different to blood glucose readings.",
        cardTitle: "How does the sensor measure glucose?"
      },
      {
        title: "FAQs",
        text: "Answers to commonly asked questions such as travelling and medical procedures.",
        cardTitle: "FAQs"
      }
    ]
  },



  "Get started with the Freestyle Libre 2 system and FreeStyle LibreLink": {
    title: "Get started with the Freestyle Libre 2 system and FreeStyle LibreLink",
    sup: "",
    items: [



      {
        title: "Applying the FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensor",
        text: "How to correctly prepare and apply your sensor so that it sticks firmly. Plus, understand why sensor glucose readings won’t always match blood glucose readings.",
        cardTitle: "Applying the Sensor"
      },
      {
        title: "Setting up the FreeStyle LibreLink12 App",
        text: "Follow these simple steps to download and set up the FreeStyle LibreLink12 app on your phone, so you can monitor your glucose on the go.",
        cardTitle: "Setting up the FreeStyle LibreLink App"
      },
      {
        title: "Setting up alarms74 on the FreeStyle LibreLink12 app",
        text: "The FreeStyle Libre 2 system has three optional alarms74. Learn how to set them up on the FreeStyle LibreLink12 app",
        cardTitle: "Setting up Alarms in the App"
      },
      {
        title: "Interpreting your glucose reading",
        text: "Learn how to interpret your reading and what each element means. All elements of your reading combined give you a full picture of your glucose levels.",
        cardTitle: "Interpreting Glucose Readings"
      },
      {
        title: "Using the FreeStyle Libre 2 system to make informed decisions",
        text: "Learn how to interpret your reading and what each element means. All elements of your reading combined give you a full picture of your glucose levels.",
        cardTitle: "Making Informed Decisions"
      },
      {
        title: "Get tips on reviewing reports",
        text: "Learn about key reports and how to interpret them. Each report can quickly give you answers about how your glucose levels are tracking.",
        cardTitle: "Reviewing Reports"
      },
      {
        title: "Setting up alarms18 on your FreeStyle Libre 2 reader",
        text: "The FreeStyle Libre 2 system has three optional alarms.18 Learn how to set them up on the FreeStyle Libre 2 reader.",
        cardTitle: "Setting up Alarms on Reader"
      }


    ]
  },



  "Freestyle Libre 2 Digital Companion Tools": {
    title: "Freestyle Libre 2 Digital Companion Tools",
    sup: "",
    items: [


      {
        title: "LibreLinkUp21: the app for your loved ones",
        text: "Your loved ones and caregivers can remotely receive your real-time glucose readings, for peace of mind whether you’re sleeping or out enjoying life. Learn how to get set up in a few simple steps.",
        cardTitle: "LibreLinkUp App for Caregivers"
      },
      {
        title: "Securely share your glucose data with your healthcare professional",
        text: "Learn how to automatically share your glucose data with your healthcare professional, which they view in a secure system called LibreView24. These insights help them to personalise your treatment plan and optimise your consultations.",
        cardTitle: "Sharing Data via LibreView"
      },
      {
        title: "NovoPen® 653 integration with the FreeStyle LibreLink12 app",
        text: "Insulin doses and glucose data, all in one place. Learn how to set up and transfer your insulin data from the NovoPen® 653 insulin pen to the FreeStyle LibreLink12 app, no manual recording required.",
        cardTitle: "NovoPen 6 Integration"
      }


    ]
  },
  "The Freestyle Libre 2 system for children": {
    title: "The Freestyle Libre 2 system for children",
    sup: "",
    items: [
      {
        title: "Using the FreeStyle Libre 2 system with children",
        text: "Learn how the FreeStyle Libre 2 system can keep you informed on your child’s glucose levels, even when they are out and about.",
        cardTitle: "Using Libre 2 with Children"
      },
      {
        title: "Applying the FreeStyle Libre 2 or FreeStyle Libre 2 Plus sensor to a child",
        text: "See how easy it is for the sensor to be applied to a child in this step-by-step video.",
        cardTitle: "Applying Sensor to a Child"
      }

    ]
  },
  "LibreView Tutorials": {
    title: "LibreView Tutorials",
    sup: "",
    items: [
      {
        title: "What is LibreView24",
        text: "Get an overview of LibreView24 and how it works with the FreeStyle Libre 2 system.",
        cardTitle: "What is LibreView"
      },
      {
        title: "Get set up on LibreView24",
        text: "An easy step-by-step guide to help you set up your LibreView24 account. Plus, learn how to connect your account with your healthcare professional’s practice.",
        cardTitle: "Setting Up LibreView Account"
      },
      {
        title: "Creating and sharing reports",
        text: "Your LibreView24 account includes detailed and insightful glucose reports. Learn how to view and download them.",
        cardTitle: "Creating & Sharing Reports"
      }
    ]
  }
};

// ------------------- 4. TROUBLESHOOTING DATA -------------------
const troubleShootingSections = [
  {
    sectionTitle: "Reader Troubleshooting",
    hasIntroText: true,
    subSections: [
      {
        title: "Reader does not power on.",
        hasUnderline: true,
        items: [
          {
            q: "Reader does not power on after you press the Home Button or insert a test strip",
            a: "It may mean that the Reader battery is too low and you will need to charge the Reader. It may also mean that the Reader is outside of its operating temperature range. You need to move the Reader to a temperature between 10 °C and 45 °C and then try to power it on.\n\nIf the Reader still does not power on after trying these steps, contact Customer Service."
          }
        ]
      },
      {
        title: "Problems at the sensor application site.",
        hasUnderline: true,
        items: [
          {
            q: "The Sensor is not sticking to your skin.",
            a: "This may mean that the site is not free of dirt, oil, hair or sweat. Following the below steps may help:\n\n1. Remove the Sensor.\n2. Consider shaving and/or cleaning the site with soap and water.\n3. Follow the instructions in Applying and Starting Your Sensor sections"
          },
          {
            q: "Skin irritation at the Sensor application site",
            a: "This may be caused by seams or other constrictive clothing or accessories causing friction at the site. Ensuring that nothing rubs on the site will help.\n\nYou may be sensitive to the adhesive material. If the irritation is where the adhesive touches skin, contact your health care professional to identify the best solution."
          }
        ]
      },
      {
        title: "Problems starting your sensor or receiving sensor readings.",
        hasUnderline: true,
        items: [
          {
            q: "New Sensor Starting Up",
            a: "This may mean that Sensor is not ready to read glucose. Wait until the 60 minute Sensor start-up period has completed."
          },
          {
            q: "Scan Timeout",
            a: "This may mean that the Reader is not held close enough to the Sensor. Hold the Reader within 4 cm (1.5 inches) of the Sensor and bring the screen of the Reader close to the Sensor."
          },
          {
            q: "Sensor Ended",
            a: "This may mean the Sensor life has ended. Apply and start a new Sensor."
          },
          {
            q: "Signal Loss Alarm",
            a: "This means the sensor has not automatically communicated with the Reader in the last 20 minutes. Make sure the Reader is within 6 metres (20 feet) of the Sensor. Try scanning the Sensor to get a glucose reading. If the Signal Loss Alarm shows again after scanning your Sensor, contact Customer Service."
          },
          {
            q: "New Sensor Found",
            a: "This may mean you scanned a new Sensor before your previous Sensor ended. Your Reader can only be used with one Sensor at a time. If you start a new Sensor, you will no longer be able to scan your old Sensor. If you would like to begin using the new Sensor, select \"Yes\"."
          },
          {
            q: "Scan Error",
            a: "This may mean that the Reader was unable to communicate with the Sensor. Try scanning again.\n\nNote: You may need to move away from potential sources of electromagnetic interference."
          },
          {
            q: "Sensor Error",
            a: "This may mean that the system is unable to provide a glucose reading. Try scanning again in 10 minutes."
          },
          {
            q: "Glucose Reading Unavailable",
            a: "This may mean that the Sensor is not working properly. Try scanning again in 10 minutes."
          },
          {
            q: "Sensor Already in Use",
            a: "This may mean your Sensor was started by another Reader. A Sensor can only be scanned by the Reader that started it. Scan the Sensor again with the Reader that started it. Or, apply and start a new Sensor."
          },
          {
            q: "Check Sensor",
            a: "This may mean that your Sensor tip may not be under your skin. Try to start your Sensor again. If Reader displays \"Check Sensor\" again, your Sensor was not applied properly. Apply and start a new Sensor."
          },
          {
            q: "Replace Sensor",
            a: "This may mean the System has detected a problem with your Sensor. Apply and start a new Sensor."
          }
        ]
      },
      {
        title: "Problems Receiving Glucose Alarms",
        hasUnderline: true,
        items: [
          {
            q: "You may not have turned alarms on.",
            a: "Touch the Setting symbol and then select alarms."
          },
          {
            q: "The Sensor may not be connecting with your Reader, or there may be a problem with your Sensor or Reader.",
            a: "The Sensor must be within range (6 metres or 20 feet) of the Reader for you to receive alarms. Make sure that your are within this range. You will see the symbol of an alarm with a red line through it at the top of the Home screen when your Sensor is not communicating with the Reader. If the Signal Loss Alarm is on, you will be notified if there has been no communication for 20 minutes. Try scanning your Sensor. If the Signal Loss Alarm is on and shows again after scanning your Sensor, contact Customer Service."
          },
          {
            q: "Sounds/vibrations may be turned off.",
            a: "Check the Reader's sound and vibration settings to confirm sound/vibration are on."
          },
          {
            q: "You may have set an alarm level that is higher or lower than you expected.",
            a: "Confirm your alarm settings are appropriate."
          },
          {
            q: "You may have already dismissed this type of alarm.",
            a: "You will receive another alarm when a new low or high glucose episode starts."
          },
          {
            q: "Your Sensor may have ended.",
            a: "Replace your Sensor with a new one."
          },
          {
            q: "Your Reader battery may be dead.",
            a: "Charge your Reader with the included USB cable."
          }
        ]
      },
      {
        title: "Blood glucose or ketone error messages.",
        hasUnderline: true,
        items: [
          {
            q: "E-1",
            a: "The temperature is too hot or too cold for the Reader to work correctly. Follow the below steps:\n\n1. Move the Reader and test strips to a location where the temperature is within the test strip operating range. (See test strip instructions for use for the appropriate range).\n2. Wait for the Reader and test strips to adjust to the new temperature.\n3. Repeat the test using a new test strip.\n4. If the error reappears, contact Customer Service."
          },
          {
            q: "E-2",
            a: "Reader error. Follow the below steps:\n\n1. Turn off the Reader.\n2. Repeat the test using a new test strip.\n3. If the error reappears, contact Customer Service."
          },
          {
            q: "E-3",
            a: "Blood drop is too small. or Incorrect test procedure. or There may be a problem with the test strip. Follow the below steps:\n\n1. Review the testing instructions.\n2. Repeat the test using a new test strip.\n3. If the error reappears, contact Customer Service."
          },
          {
            q: "E-4",
            a: "The blood glucose level may be too high to be read by the system. Or, there may be a problem with the test strip. Follow the below steps:\n\n1. Repeat the test using a new test strip.\n2. If the error reappears, contact your health care professional immediately."
          },
          {
            q: "E-5",
            a: "Blood was applied to the test strip too soon. Follow the below steps:\n\n1. Review the testing instructions.\n2. Repeat the test using a new test strip.\n3. If the error reappears, contact Customer Service."
          },
          {
            q: "E-6",
            a: "The test strip may not be compatible with the Reader. Follow the below steps:\n\n1. Check that you are using the correct test strip for the Reader. (See test strip instructions for use to verify your strip is compatible with the Reader).\n2. Repeat the test using a test strip for use with your Reader.\n3. If the error reappears, contact Customer Service."
          },
          {
            q: "E-7",
            a: "Test strip may be damaged, used, or the Reader does not recognise it. Follow the below steps:\n\n1. Check that you are using the correct test strip for the Reader. (See test strip instructions for use to verify your strip is compatible with the Reader).\n2. Repeat the test using a test strip for use with your Reader.\n3. If the error reappears, contact Customer Service."
          },
          {
            q: "E-9",
            a: "Reader Error. Follow the below steps:\n\n1. Turn off the Reader.\n2. Repeat the test using a new test strip.\n3. If the error reappears, contact Customer Service."
          }
        ]
      },
      {
        title: "Problems checking your blood glucose or ketone.",
        hasUnderline: true,
        items: [
          {
            q: "The Reader does not start a test after inserting a test strip",
            a: "The Test strip is not inserted correctly or not inserted fully into the strip port.\nWith the 3 black lines facing up, insert the test strip into the strip port until it stops. If the Reader still does not start a test, contact Customer Service.\n\nReader battery is too low.\nCharge the Reader.\n\nThe test strip is damaged, used, or unrecognizable by the Reader.\nInsert a new FreeStyle Optium test strip.\n\nReader is outside of its operating temperature range.\nMove the Reader to a temperature between 10 °C and 45 °C and then try to power it on.\n\nReader is in a power saving mode.\nPress the Home Button then insert a test strip."
          },
          {
            q: "The test does not start after applying the blood sample.",
            a: "Blood sample is too small.\n1. See test strip instructions for use for re-application instructions.\n2. Repeat the test using a new test strip.\n3. If the test still does not start, contact Customer Service.\n\nSample applied after the Reader turned off.\n1. Review the testing instructions.\n2. Repeat the test using a new test strip.\n3. If the test still does not start, contact Customer Service.\n\nProblem with Reader or test strip\n1. Repeat the test using a new test strip.\n2. If the test still does not start, contact Customer Service."
          }
        ]
      }
    ]
  }
];

export function SupportCenterPage({ initialTab = "Product info & manuals" }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabPaths = {
    "Product info & manuals": "/support-center/product-info-manuals",
    "FAQ’s": "/support-center/faqs",
    "Video Guides": "/support-center/video-guides",
    "Trouble Shooting": "/support-center/troubleshooting"
  };

  // State Declarations
  const [selectedCategory, setSelectedCategory] = useState("Libre app");
  const [selectedFaqCat, setSelectedFaqCat] = useState("Mobile Compatibility");
  const [selectedVideoCat, setSelectedVideoCat] = useState("Get started with the Libre app");

  // Accordion open states
  const [openFaqIndexes, setOpenFaqIndexes] = useState([0, 1, 2, 3, 5, 6]);
  const [openTsIndexes, setOpenTsIndexes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

  const toggleFaq = (index) => {
    if (openFaqIndexes.includes(index)) {
      setOpenFaqIndexes(openFaqIndexes.filter((i) => i !== index));
    } else {
      setOpenFaqIndexes([...openFaqIndexes, index]);
    }
  };

  const toggleTs = (keyStr) => {
    if (openTsIndexes.includes(keyStr)) {
      setOpenTsIndexes(openTsIndexes.filter((i) => i !== keyStr));
    } else {
      setOpenTsIndexes([...openTsIndexes, keyStr]);
    }
  };

  const handleExpandAllFaq = () => {
    const currentList = faqCategoriesData[selectedFaqCat] || [];
    if (openFaqIndexes.length === currentList.length) {
      setOpenFaqIndexes([]);
    } else {
      setOpenFaqIndexes(currentList.map((_, i) => i));
    }
  };

  const handleExpandAllTs = () => {
    let allKeys = [];
    troubleShootingSections.forEach((sec, sIdx) => {
      sec.subSections.forEach((subSec, subIdx) => {
        subSec.items.forEach((_, iIdx) => {
          allKeys.push(`${sIdx}-${subIdx}-${iIdx}`);
        });
      });
    });

    if (openTsIndexes.length === allKeys.length) {
      setOpenTsIndexes([]);
    } else {
      setOpenTsIndexes(allKeys);
    }
  };

  const currentCategoryData = categoryData[selectedCategory] || categoryData["Libre app"];
  const currentFaqList = faqCategoriesData[selectedFaqCat] || [];
  const currentVideoData = videoGuidesData[selectedVideoCat] || videoGuidesData["Get started with the Libre app"];

  // Dynamic Document Footnote Code
  const getDocCode = () => {
    if (selectedCategory === "FreeStyle Libre 2 Plus sensor") return "ADC-107761 V1.0";
    if (selectedCategory === "FreeStyle LibreLink" || selectedCategory === "LibreView") return "ADC-107751 V1.0";
    if (activeTab === "Trouble Shooting") return "ADC-110869 V1.0";
    return "ADC-2698990 V1.0";
  };

  return (
    <div className="supportContainer">
      {/* Breadcrumb Header */}
      <div className="breadcrumbBar">
        <div className="container">
          <a href="/" className="homeIcon" aria-label="Home">🏠</a>
          <span className="breadcrumbSeparator">›</span>
          <span className="currentBreadcrumb">{activeTab}</span>
        </div>
      </div>

      {/* Yellow Header Banner */}
      <section className="yellowBanner">
        <div className="container">
          <h1 className="bannerTitle">Support Center</h1>
          <div className="bannerTabs">
            {["Product info & manuals", "FAQ’s", "Video Guides", "Trouble Shooting"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`tabBtn ${activeTab === tab ? 'activeTab' : ''}`}
                onClick={() => router.push(tabPaths[tab])}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <main className="mainContent">
        <div className="container">

          {/* ================= TAB 1: PRODUCT INFO & MANUALS ================= */}
          {activeTab === "Product info & manuals" && (
            <div className="contentGrid">
              <aside className="sidebar">
                <h3 className="sidebarHeading">Select a Category</h3>
                <ul className="categoryList">
                  {Object.keys(categoryData).map((catName) => (
                    <li
                      key={catName}
                      className={`categoryItem ${selectedCategory === catName ? 'selectedCategory' : ''}`}
                      onClick={() => setSelectedCategory(catName)}
                    >
                      {catName}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="contentArea">
                <h2 className="sectionMainTitle">
                  {currentCategoryData.title}
                  {currentCategoryData.sup && <sup className="supText">{currentCategoryData.sup}</sup>}
                </h2>

                {currentCategoryData.items.map((item, index) => (
                  <div className="contentRow" key={index}>
                    <div className="infoBlock">
                      <h3 className="contentTitle">{item.title}</h3>
                      <div className="yellowUnderline"></div>
                      <p className="contentText">{item.text}</p>
                      <a href={item.linkHref} className="blueLink">{item.linkText}</a>
                    </div>

                    <div className="mediaBlock">
                      {/* QR Code */}
                      {item.type === 'qr' && (
                        <div className="qrBox">
                          <svg className="qrSvg" viewBox="0 0 100 100">
                            <path d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z" fill="#000" />
                            <path d="M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z" fill="#000" />
                            <path d="M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z" fill="#000" />
                            <rect x="40" y="5" width="8" height="8" fill="#000" />
                            <rect x="52" y="15" width="8" height="8" fill="#000" />
                            <rect x="35" y="35" width="10" height="10" fill="#000" />
                            <rect x="50" y="40" width="10" height="10" fill="#000" />
                            <rect x="65" y="35" width="8" height="8" fill="#000" />
                            <rect x="40" y="60" width="8" height="12" fill="#000" />
                            <rect x="55" y="70" width="12" height="8" fill="#000" />
                            <rect x="75" y="55" width="10" height="10" fill="#000" />
                            <rect x="85" y="75" width="10" height="15" fill="#000" />
                          </svg>
                        </div>
                      )}

                      {/* PDF Manual Card */}
                      {item.type === 'manual' && (
                        <div className="manualCard">
                          <div className="manualHeader">
                            <svg className="butterflyIcon" viewBox="0 0 24 24" fill="#FFC20E">
                              <path d="M12 12c2.5-3.5 6-4 8-2s1 5.5-2 7-5.5.5-6-5zm0 0c-2.5-3.5-6-4-8-2s-1 5.5 2 7 5.5.5 6-5zm0 0c3.5 2.5 4 6 2 8s-5.5 1-7-2-.5-5.5 5-6zm0 0c-3.5 2.5-4 6-2 8s5.5 1 7-2 .5-5.5-5-6z" />
                            </svg>
                            <span className="brandName">Libre</span>
                          </div>
                          <div className="manualTitle">{item.manualTitle}</div>
                          <p className="manualSub">{item.manualSub}</p>
                        </div>
                      )}

                      {/* Promo Yellow Card 1 */}
                      {item.type === 'promo-card-1' && (
                        <div className="yellowPromoCard">
                          <div className="promoHeader">
                            <span className="promoBrandTitle">🦋 Libre 2</span>
                            <span className="promoTagBadge">PLUS</span>
                          </div>
                          <div className="promoCardTitleText">{item.cardTitle}</div>
                          <div className="phoneMockup" className="promoPhoneMockup">
                            <div className="phoneScreen" className="promoPhoneScreen">
                              <div className="promoGlucoseValue">6.2</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Promo Yellow Card 2 (Adhesion) */}
                      {item.type === 'promo-card-2' && (
                        <div className="yellowPromoCard">
                          <div className="promoHeader">
                            <span className="promoBrandTitle">🦋 Libre</span>
                          </div>
                          <div className="promoCardTitleText" className="adhesionCardTitle">
                            Sensor Adhesion Guide
                          </div>
                          <div className="promoSensorsGraphic">
                            <div className="sensorDisc"><div className="sensorDiscDot"></div></div>
                            <div className="sensorDisc"><div className="sensorDiscDot"></div></div>
                          </div>
                        </div>
                      )}

                      {/* Compatibility Chart Preview */}
                      {item.type === 'compat-chart' && (
                        <div className="compatChartCard">
                          <div className="compatHeader">MOBILE DEVICE & OS COMPATIBILITY</div>
                          <div className="compatTableGrid">
                            <div className="compatCellHeader">LAST UPDATED</div>
                            <div className="compatCellHeader">DEVICES</div>
                            <div className="compatCell">iOS 16+</div>
                            <div className="compatCell">iPhone 12+</div>
                            <div className="compatCell">Android 12+</div>
                            <div className="compatCell">Samsung S21+</div>
                          </div>
                        </div>
                      )}

                      {/* Doc Preview (App Symbols) */}
                      {item.type === 'doc-preview' && (
                        <div className="docPreviewCard">
                          <div className="docHeaderLine">{item.manualTitle}</div>
                          <div className="docListRow"><div className="docDotIcon"></div> Home Screen</div>
                          <div className="docListRow"><div className="docDotIcon"></div> Add Note</div>
                          <div className="docListRow"><div className="docDotIcon"></div> Glucose Alarms</div>
                        </div>
                      )}

                      {/* Yellow App Brand Card */}
                      {item.type === 'yellow-app-brand' && (
                        <div className="yellowAppBrandCard">
                          <div className="appBrandCircle">
                            <div className="appBrandInnerDot"></div>
                          </div>
                          <div className="abbottLogoText">a</div>
                        </div>
                      )}

                      {/* LibreView Monitor Visual */}
                      {item.type === 'libreview-monitor' && (
                        <div className="docPreviewCard" className="libreviewMonitor">
                          <div className="libreviewMonitorScreen">
                            <div className="libreviewMonitorHeader">
                              <span className="libreviewBrand">LibreView</span>
                              <span className="libreviewReports">📊 Reports</span>
                            </div>
                            <div className="libreviewGraph">
                              <svg viewBox="0 0 100 30" className="libreviewGraphSvg">
                                <path d="M 0 20 Q 25 5, 50 18 T 100 10 L 100 30 L 0 30 Z" fill="#bae6fd" />
                                <path d="M 0 20 Q 25 5, 50 18 T 100 10" fill="none" stroke="#0284c7" strokeWidth="2" />
                              </svg>
                            </div>
                            <div className="libreviewMetricGrid">
                              <div className="libreviewMetric"></div>
                              <div className="libreviewMetric"></div>
                              <div className="libreviewMetric"></div>
                            </div>
                          </div>
                          <div className="libreviewMonitorStand"></div>
                          <div className="libreviewMonitorBase"></div>
                        </div>
                      )}

                      {/* Safety Card */}
                      {item.type === 'safety-card' && (
                        <div className="safetyCard">
                          <div className="safetyText">
                            Important Safety Information
                          </div>
                        </div>
                      )}

                      {/* Purchase Card */}
                      {item.type === 'purchase-card' && (
                        <div className="purchaseBoxMockup">
                          <div className="purchaseProductBox">
                            <div className="newTagBadge">New</div>
                            <div className="purchaseProductName">Libre 2</div>
                            <div className="purchaseProductPlus">PLUS</div>
                          </div>
                        </div>
                      )}

                      {/* Image Thumbnails */}
                      {(item.type === 'video' || item.type === 'faq' || item.type === 'video-thumbnail' || item.type === 'faq-thumbnail') && (
                        <div className="imageThumbnail">
                          <img src={item.imgUrl} alt={item.title} className="thumbnailImg" />
                        </div>
                      )}

                      {/* Smartphone Mockup */}
                      {item.type === 'phone' && (
                        <div className="phoneMockup">
                          <div className="phoneScreen">
                            <div className="phoneTopBar">
                              <span className="phoneTime">9:41</span>
                              <span className="phoneBrand">Libre</span>
                            </div>
                            <div className="phoneValue">
                              <div className="glucoseNum">6.2</div>
                              <div className="glucoseUnit">mmol/L</div>
                            </div>
                            <svg className="trendGraph" viewBox="0 0 100 40">
                              <path d="M0 30 Q25 35 50 20 T100 15" fill="none" stroke="#28a745" strokeWidth="2.5" />
                            </svg>
                            <div className="phoneFooterNav">
                              <span>🏠</span>
                              <span>📊</span>
                              <span>⚙️</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 2: FAQ’S ================= */}
          {activeTab === "FAQ’s" && (
            <div className="contentGrid">
              <aside className="sidebar">
                <ul className="categoryList">
                  {Object.keys(faqCategoriesData).map((catName) => (
                    <li
                      key={catName}
                      className={`categoryItem ${selectedFaqCat === catName ? 'selectedCategory' : ''}`}
                      onClick={() => {
                        setSelectedFaqCat(catName);
                        setOpenFaqIndexes([0]);
                      }}
                    >
                      {catName}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="contentArea">
                <div className="faqHeaderControls">
                  <h2 className="sectionMainTitle" className="faqSectionTitle">{selectedFaqCat}</h2>
                  <button className="expandAllBtn" onClick={handleExpandAllFaq}>
                    {openFaqIndexes.length === currentFaqList.length ? "Collapse All" : "Expand All"}
                  </button>
                </div>

                <div className="faqAccordionList">
                  {currentFaqList.map((faq, index) => {
                    const isOpen = openFaqIndexes.includes(index);
                    return (
                      <div className="faqItem" key={index}>
                        <button
                          className={`faqQuestionHeader ${isOpen ? 'open' : 'closed'}`}
                          onClick={() => toggleFaq(index)}
                        >
                          <span>{faq.q}</span>
                          <span className="faqIcon">{isOpen ? '−' : '+'}</span>
                        </button>

                        {isOpen && (
                          <div className="faqAnswerBody">
                            {faq.a.split('\n\n').map((paragraph, pIdx) => {
                              if (paragraph.includes('•')) {
                                const points = paragraph.split('\n');
                                return (
                                  <ul key={pIdx} className="faqBulletList">
                                    {points.map((pt, ptIdx) => (
                                      pt.trim() && <li key={ptIdx}>{pt.replace('•', '').trim()}</li>
                                    ))}
                                  </ul>
                                );
                              }
                              return (
                                <p key={pIdx}>
                                  {paragraph.replace('freestylelibre.com.au/compatibility', '')}
                                  {paragraph.includes('freestylelibre.com.au/compatibility') && (
                                    <a href="#compatibility" className="inlineLink">
                                      freestylelibre.com.au/compatibility
                                    </a>
                                  )}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: VIDEO GUIDES ================= */}
          {activeTab === "Video Guides" && (
            <div className="contentGrid">
              <aside className="sidebar">
                <h3 className="sidebarHeading">Select a Category</h3>
                <ul className="categoryList">
                  {Object.keys(videoGuidesData).map((catName) => (
                    <li
                      key={catName}
                      className={`categoryItem ${selectedVideoCat === catName ? 'selectedCategory' : ''}`}
                      onClick={() => setSelectedVideoCat(catName)}
                    >
                      {catName}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="contentArea">
                <h2 className="sectionMainTitle">
                  {currentVideoData.title}
                  {currentVideoData.sup && <sup className="supText">{currentVideoData.sup}</sup>}
                </h2>

                {currentVideoData.items.map((item, index) => (
                  <div className="contentRow" key={index}>
                    <div className="infoBlock">
                      <h3 className="contentTitle">{item.title}</h3>
                      <div className="yellowUnderline"></div>
                      <p className="contentText">{item.text}</p>
                    </div>

                    <div className="mediaBlock">
                      <div className="videoThumbnailCard">
                        <div className="videoPlayCircle">
                          <div className="videoPlayIcon"></div>
                        </div>
                        <div className="videoCardTitle">{item.cardTitle}</div>
                        <div className="videoCardSub">ALWAYS FOLLOW THE DIRECTIONS FOR USE.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 4: TROUBLE SHOOTING ================= */}
          {activeTab === "Trouble Shooting" && (
            <div className="contentArea" className="troubleshootingContentArea">
              {troubleShootingSections.map((sec, sIdx) => (
                <div key={sIdx}>
                  <h2 className="sectionMainTitle">{sec.sectionTitle}</h2>
                  {sec.hasIntroText && (
                    <p className="contentText" className="troubleshootingIntro">
                      This section lists problems or observations that you may have, the possible cause(s), and recommended actions.<br /><br />
                      If you need further assistance please reach out to our customer care team on <span className="tsPhoneHighlight">1800 801 478</span> Mon - Fri 8am - 7pm AEDT.
                    </p>
                  )}

                  {sec.subSections.map((subSec, subIdx) => (
                    <div key={subIdx} className="troubleshootingSubSection">
                      <div className="faqHeaderControls">
                        <div>
                          <h3 className="tsSubSectionTitle">{subSec.title}</h3>
                          {subSec.hasUnderline && <div className="yellowUnderline"></div>}
                        </div>
                        {subIdx === 1 && (
                          <button className="expandAllBtn" onClick={handleExpandAllTs}>
                            Expand All
                          </button>
                        )}
                      </div>

                      <div className="faqAccordionList">
                        {subSec.items.map((item, iIdx) => {
                          const itemKey = `${sIdx}-${subIdx}-${iIdx}`;
                          const isOpen = openTsIndexes.includes(itemKey);
                          return (
                            <div className="faqItem" key={iIdx}>
                              <button
                                className={`faqQuestionHeader ${isOpen ? 'open' : 'closed'}`}
                                onClick={() => toggleTs(itemKey)}
                              >
                                <span>{item.q}</span>
                                <span className="faqIcon">{isOpen ? '−' : '+'}</span>
                              </button>

                              {isOpen && (
                                <div className="faqAnswerBody">
                                  {item.a.split('\n\n').map((paragraph, pIdx) => {
                                    if (paragraph.startsWith('1.') || paragraph.startsWith('2.')) {
                                      const steps = paragraph.split('\n');
                                      return (
                                        <ol key={pIdx} className="troubleshootingSteps">
                                          {steps.map((st, stIdx) => (
                                            <li key={stIdx}>{st.replace(/^\d+\.\s*/, '')}</li>
                                          ))}
                                        </ol>
                                      );
                                    }

                                    if (
                                      paragraph.startsWith('The Test strip') ||
                                      paragraph.startsWith('Reader battery') ||
                                      paragraph.startsWith('The test strip is') ||
                                      paragraph.startsWith('Reader is outside') ||
                                      paragraph.startsWith('Reader is in a power') ||
                                      paragraph.startsWith('Blood sample is too') ||
                                      paragraph.startsWith('Sample applied after') ||
                                      paragraph.startsWith('Problem with Reader')
                                    ) {
                                      const lines = paragraph.split('\n');
                                      return (
                                        <div key={pIdx} className="troubleshootingLabeledAnswer">
                                          <div className="tsBoldLabel">{lines[0]}</div>
                                          {lines.slice(1).map((l, lIdx) => (
                                            <p key={lIdx}>{l}</p>
                                          ))}
                                        </div>
                                      );
                                    }

                                    return <p key={pIdx}>{paragraph}</p>;
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Legal Footer Notes */}
        <div className="container">
          <div className="supportFooter">
            <div className="footerDocCode">{getDocCode()}</div>
            <p className="footerLegalText">
              Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.
            </p>
            <p className="footerLegalText">
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </main>
      <SubscribeForm />
    </div>
  );
}

export default function SupportPage() {
  return <SupportCenterPage initialTab="Product info & manuals" />;
}
