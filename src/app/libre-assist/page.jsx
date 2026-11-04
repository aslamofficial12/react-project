"use client";

import SubscribeForm from '../../components/SubscribeForm';
import './style.css';
import {useState} from 'react';

export default function LibreAssistPage() {
  const [openItems,setOpenItems]=useState("");


const videoList = [
  {
    id: 1,
    title: "Making informed food choices",
    // Replace with your YouTube video ID extracted from the link
    videoId: "w2J6eORwur4", 
    thumbnail: "https://img.youtube.com/vi/w2J6eORwur4/hqdefault.jpg"
  },
  {
    id: 2,
    title: "Getting started with Libre Assist",
    videoId: "w2J6eORwur4", // Change to specific video ID if different
    thumbnail: "https://img.youtube.com/vi/w2J6eORwur4/hqdefault.jpg"
  },
  {
    id: 3,
    title: "How to add food",
    videoId: "w2J6eORwur4", // Change to specific video ID if different
    thumbnail: "https://img.youtube.com/vi/w2J6eORwur4/hqdefault.jpg"
  }
];













  const [activeVideo, setActiveVideo] = useState(videoList[0]);



const faqData = [
  {
    id: 1,
    question: "What is Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> is a feature within the Libre app<sup>12</sup> that provides actionable, personalised meal guidance<sup>91</sup> in the moment, empowering users to make informed food choices.
        </p>
        <p>
          Libre Assist predicts<sup>90</sup> how food may affect your glucose levels, and shares tips to help lower the impact<sup>91</sup> before you eat it. Later, based on your Libre sensor glucose data, you can see the actual impact of the meal on your glucose levels.
        </p>
      </>
    )
  },
  {
    id: 2,
    question: "How do I find Libre Assist in the Libre app?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> can be accessed by tapping on 'Insights' in the bottom navigation menu of the Libre app<sup>12</sup>. To access Libre Assist, Libre app must be updated to the latest version.
      </p>
    )
  },
  {
    id: 3,
    question: "I have clicked on 'Insights' in Libre app but still can't see Libre Assist.",
    answer: (
      <p>
        Libre app must be updated to the latest version for Libre Assist to be accessible. You can update Libre app manually in the Google Play or App store, this will happen automatically if you have automatic updates enabled on your device.
      </p>
    )
  },
  {
    id: 4,
    question: "How does Libre Assist work?",
    answer: (
      <p>
        Simply snap a photo of your meal and upload it to the Libre Assist<sup>86</sup> feature in the Libre app<sup>12</sup> to see the predicted impact<sup>90</sup> of the meal on your glucose, plus get quick tips to help lower the impact on your glucose levels. The Libre Assist entry later updates to show the actual impact of the meal on your glucose, based on data from your active Libre sensor.
      </p>
    )
  },
  {
    id: 5,
    question: "What is the benefit of Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> goes beyond food logging by helping people living with diabetes make informed, in-the-moment food choices. It’s an easy tool that fits into daily routines and helps individuals understand their body's unique response to food.
        </p>
        <p>
          Users simply snap a photo of their meal before they eat, and Libre Assist analyses the ingredients, predicts<sup>90</sup> the glucose impact of the meal, and offers practical tips to help lower the glucose impact. Later, based on the user’s Libre sensor glucose data, Libre Assist updates to show the actual glucose impact of the meal.
        </p>
      </>
    )
  },
  {
    id: 6,
    question: "Who can use Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> is a feature within the Libre app<sup>12</sup> that can be used by all people living with diabetes. To unlock the full capabilities of Libre Assist, including showing the actual impact of meals on glucose levels, it should be used with an active Libre sensor.
        </p>
        <small className="faq-disclaimer">
          The FreeStyle Libre 2 Plus System and the FreeStyle Libre 3 Plus System are indicated for measuring interstitial fluid glucose levels in people (aged 2+) with diabetes.
        </small>
      </>
    )
  },
  {
    id: 7,
    question: "What app is Libre Assist available on? How do I access Libre Assist?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> is available exclusively in the Libre app<sup>12</sup>. It is located in the Insights tab of the Libre app.
      </p>
    )
  },
  {
    id: 8,
    question: "What languages are supported in Libre Assist?",
    answer: (
      <p>
        Currently, English is supported in Libre Assist<sup>86</sup> via the Australian Libre app<sup>12</sup>.
      </p>
    )
  },
  {
    id: 9,
    question: "What technology did you use/who created Libre Assist?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> was created by Abbott’s Diabetes Care business and utilises Generative AI capabilities.
      </p>
    )
  },
  {
    id: 10,
    question: "Who are your generative AI partners?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> uses a combination of advanced generative AI technologies from leading providers, integrated with Abbott’s proprietary systems. All this runs inside Abbott’s safety guardrails.
      </p>
    )
  },
  {
    id: 11,
    question: "How do you ensure data security and privacy when using Libre Assist?",
    answer: (
      <p>
        Abbott leverages advanced security measures to ensure any personal identifiable information, inappropriate material, or other restricted content is removed before Libre Assist<sup>86</sup> shares data with its Generative AI partner.
      </p>
    )
  },
  {
    id: 12,
    question: "When using Libre Assist, why do I need to wear a sensor to see actual glucose impact?",
    answer: (
      <>
        <p>
          Everyone’s body responds differently to food and drinks, so the same meal can have different glucose impact on different individuals.
        </p>
        <p>
          When you wear a Libre sensor, it continuously measures your glucose levels and sends that information to the Libre app<sup>12</sup>. Libre Assist<sup>86</sup> uses your sensor glucose data to show the actual impact of the meal on your glucose levels, replacing the more general predicted impact score.
        </p>
        <p>
          It’s important to also remember that other factors, such as alcohol, stress, sleep, exercise and medication can also have an impact on your glucose levels.
        </p>
      </>
    )
  },
  {
    id: 13,
    question: "I no longer want to use Libre Assist. Can I opt out?",
    answer: (
      <>
        <p>You can opt out of Libre Assist<sup>86</sup> and decline the previously accepted consents by opening your Libre app<sup>12</sup>:</p>
        <ol className="faq-list">
          <li>Tapping on the profile tab</li>
          <li>Tapping on Account</li>
          <li>Tapping on Other Consents and Notices</li>
          <li>Tapping on Libre Assist and AI-related Food Impacts Notice</li>
          <li>Tapping on Update</li>
          <li>Select status</li>
          <li>Tapping on Update</li>
        </ol>
      </>
    )
  },
  {
    id: 14,
    question: "What advice is given in Libre Assist? And where does the information come from in Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> is designed to help you understand how the foods you eat may affect your glucose levels before eating and the actual impact after.
        </p>
        <p>
          Libre Assist leverages a generative AI model to provide initial food impact predictions<sup>90</sup> and tips to help reduce the glucose impact of your current meal. It uses Libre sensor data to calculate the actual impact of the meal.
        </p>
      </>
    )
  },
  {
    id: 15,
    question: "Are recommendations in Libre Assist reliable/clinically backed?",
    answer: (
      <>
        <p>
          Abbott collaborated with registered dietitians and Certified Diabetes Care and Education Specialists (CDCES) to build the Libre Assist<sup>86</sup> feature*.
        </p>
        <p>
          Libre Assist uses generative AI to produce predicted<sup>90</sup> food scores and recommendations<sup>91</sup> to help lower glucose impact. Generative AI may not always be accurate, and it should not be used to make treatment decisions. Always make dietary choices in line with the advice of your healthcare team.
        </p>
        <small className="faq-disclaimer">
          Vaughan S, et al. Diabetes 2026; 75 (Suppl.1): 2770–LB. <a href="https://doi.org/10.2337/db26-2770-LB" target="_blank" rel="noopener noreferrer">https://doi.org/10.2337/db26-2770-LB</a>
        </small>
      </>
    )
  },
  {
    id: 16,
    question: "What kind of testing has been conducted on Libre Assist?",
    answer: (
      <>
        <p>
          The Libre Assist<sup>86</sup> predictions and ingredient insights<sup>91</sup> have gone through extensive validation, including collaborating with Certified Diabetes Care and Education Specialists (CDCES) and registered dietitians*.
        </p>
        <p>
          The meal's actual impact score is a calculation based on glucose data from your active Libre sensor.
        </p>
        <small className="faq-disclaimer">
          Vaughan S, et al. Diabetes 2026; 75 (Suppl.1): 2770–LB. <a href="https://doi.org/10.2337/db26-2770-LB" target="_blank" rel="noopener noreferrer">https://doi.org/10.2337/db26-2770-LB</a>
        </small>
      </>
    )
  },
  {
    id: 17,
    question: "How is the predicted glucose impact score for the meal and/or ingredients determined in Libre Assist?",
    answer: (
      <>
        <p>In Libre Assist<sup>86</sup>, the AI model analyses the meal image or text for identification of ingredients within that meal.</p>
        <p>Identified ingredients are evaluated to determine a predicted glucose impact<sup>90</sup> colour rating for each (Minor = green, Moderate = yellow, Major = orange).</p>
        <p>The meal image or text is also assigned an overall predicted glucose impact score/colour rating that indicates the impact that the whole meal is likely to have on your glucose.</p>
      </>
    )
  },
  {
    id: 18,
    question: "How is the actual glucose impact score determined in Libre Assist?",
    answer: (
      <>
        <p>
          In Libre Assist<sup>86</sup>, the actual glucose impact is determined by comparing your glucose value at the time of the Libre Assist meal entry to the peak glucose value observed over the next three hours. By understanding the difference between the peak and starting glucose, Libre Assist can determine if the impact was major (orange), moderate (yellow), or minor (green).
        </p>
        <p>
          The actual glucose impact score may not be solely based on the meal. Alcohol, stress, sleep, exercise, and medication are other factors which can affect your glucose. Additionally, Libre Assist’s model assumes that the meal is entered into Libre Assist immediately before it is eaten.
        </p>
      </>
    )
  },
  {
    id: 19,
    question: "Libre Assist did not correctly identify the meal and/or its ingredients.",
    answer: (
      <p>
        In Libre Assist<sup>86</sup>, you can simply edit the meal by clicking the “Edit Food” button and describe the adjustments that need to be made to the description. It will then regenerate the corrected meal description or ingredients accordingly.
      </p>
    )
  },
  {
    id: 20,
    question: "What if I disagree with the food tips in Libre Assist?",
    answer: (
      <p>
        The food tips in Libre Assist<sup>86</sup> are intended as helpful suggestions, not dietary rules or medical advice. They’re designed to offer personalised<sup>91</sup>, actionable guidance to help you make informed food choices.
      </p>
    )
  },
  {
    id: 21,
    question: "What data is collected in Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> gathers information about your glucose patterns, food habits, and other health-related information and share it with a generative artificial intelligence (AI) model so that it can provide food impact<sup>90</sup> predictions and tips<sup>91</sup>.
        </p>
        <p>
          Abbott leverages advanced security measures to ensure any personal identifiable information, inappropriate material, or other restricted content is removed before sharing the data with its Generative AI partners.
        </p>
        <p>You can read more about it in the consent form by:</p>
        <ol className="faq-list">
          <li>Tapping on the profile tab</li>
          <li>Tapping on Account</li>
          <li>Tapping on Other Consents and Notices</li>
          <li>Tapping on Libre Assist and AI-related Food Impacts Notice</li>
          <li>Tapping on Update</li>
          <li>Select status (Accept or Decline)</li>
          <li>Tapping on Update</li>
        </ol>
      </>
    )
  },
  {
    id: 22,
    question: "Is training required to use Libre Assist?",
    answer: (
      <>
        <p>
          No, Libre Assist<sup>86</sup> is designed to be easy to use. The first time you open the Libre Assist feature in the Libre app, there is a quick onboarding guide. You can access a Libre Assist Tutorial anytime by following the below steps in the Libre app<sup>2</sup>:
        </p>
        <ol className="faq-list">
          <li>Tap on Profile</li>
          <li>Tap Help</li>
          <li>Tap Libre Assist</li>
        </ol>
      </>
    )
  },
  {
    id: 23,
    question: "Can I share my food recommendations in Libre Assist with my healthcare professional?",
    answer: (
      <p>
        Unlike your glucose data, Libre Assist<sup>86</sup> information does not currently appear in LibreView<sup>24</sup> for your healthcare team to view. You can share Libre Assist information with your healthcare professional by showing them the Libre app on your phone during consultations.
      </p>
    )
  },
  {
    id: 24,
    question: "Is Libre Assist data shared to LibreView?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> information does not currently appear in LibreView<sup>24</sup> for your healthcare team to view.
      </p>
    )
  },
  {
    id: 25,
    question: "Does Libre Assist provide clinical guidance or dose guidance on insulin use?",
    answer: (
      <>
        <p>No, Libre Assist<sup>86</sup> does not provide clinical guidance or dose guidance on insulin use.</p>
        <p>You can access the Libre Assist tutorial and disclosures by following the steps below:</p>
        <ul className="faq-bullet-list">
          <li>Tap Profile</li>
          <li>Tap Help</li>
          <li>Tap Libre Assist</li>
          <li>Review the Libre Assist tutorial and disclosures</li>
        </ul>
      </>
    )
  },
  {
    id: 26,
    question: "Will Libre Assist adapt to dietary preferences or requirements? E.g. Vegan, gluten-free.",
    answer: (
      <p>
        You can specify your dietary preferences in the Libre app<sup>12</sup>. Go to the Profile tab, then go to the Health Details section. Your selections will be taken into consideration when the Libre Assist<sup>86</sup> makes ingredient determinations and tips for how to lower the impact<sup>90</sup> of a meal.
      </p>
    )
  },
  {
    id: 27,
    question: "Does Libre Assist provide recipes?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> does not currently provide recipes. The Libre Assist feature is designed to provide actionable, individualised meal guidance<sup>91</sup> to make in-the-moment choices, allowing you to build and sustain new habits over time.
      </p>
    )
  },
  {
    id: 28,
    question: "Is Libre Assist free to use?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> is a complimentary feature in the Libre app<sup>12</sup>, which is free to download and use. To unlock the full capabilities of Libre Assist such as seeing the actual glucose impact of a meal, it should be used with an active Libre sensor.
      </p>
    )
  },
  {
    id: 29,
    question: "Can I use the Libre Assist feature if my current glucose is low or high?",
    answer: (
      <>
        <p>
          When you have a glucose reading below 3.9mmol/L or above 22.2mmol/L and try to input a meal into Libre Assist<sup>86</sup>, you will be able upload a picture but will not receive a predicted food score, ingredient impact or tips.
        </p>
        <ul className="faq-bullet-list">
          <li>If your glucose reading is above 22.2mmol/L, the meal initiated during this time will not receive an actual impact score.</li>
          <li>If your glucose reading is below 3.9mmol/L, the meal initiated during this time could receive an actual impact score if there is enough glucose data to calculate the score.</li>
        </ul>
      </>
    )
  },
  {
    id: 30,
    question: "Can I use Libre Assist without an active sensor?",
    answer: (
      <p>
        If you do not have an active sensor, you can use limited aspects of the Libre Assist<sup>86</sup> feature, such as uploading a photo of your meal and receiving initial predictions<sup>90</sup> and tips<sup>91</sup>. To unlock the full capabilities of Libre Assist such as seeing the actual glucose impact of a meal, it should be used with an active Libre sensor.
      </p>
    )
  },
  {
    id: 31,
    question: "What does 'impact unavailable’ mean in Libre Assist?",
    answer: (
      <>
        <p>
          You may see “impact unavailable” because there isn’t enough sensor data in the reportable range to calculate the actual glucose impact for the food recorded.
        </p>
        <p>To generate an accurate impact score, Libre Assist<sup>86</sup> requires:</p>
        <ul className="faq-bullet-list">
          <li>At least 2 hours of sensor data after the meal entry</li>
          <li>Glucose readings that are within the sensor’s measurable range (e.g. Sensor low / sensor high)</li>
        </ul>
        <p>To ensure there are no gaps in data:</p>
        <ul className="faq-bullet-list">
          <li>Keep your phone or reader within 10 meters from the sensor to maintain a stable Bluetooth connection.</li>
          <li>If you’re on a Libre 2 system sensor, scan periodically to backfill any gaps in data.</li>
        </ul>
      </>
    )
  },
  {
    id: 32,
    question: "What does minor, moderate, or major impact mean in Libre Assist?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> helps you quickly assess the potential<sup>90</sup> or actual impact of your meal based on how much it could or did raise your glucose levels.
        </p>
        <ul className="faq-bullet-list">
          <li><strong>Minor</strong> = small rise in glucose</li>
          <li><strong>Moderate</strong> = medium rise in glucose</li>
          <li><strong>Major</strong> = large rise in glucose</li>
        </ul>
      </>
    )
  },
  {
    id: 33,
    question: "How come I don’t see any tips after posting a photo?",
    answer: (
      <p>
        Once a food is entered, the Libre Assist<sup>86</sup> feature will display recommended actions that could reduce the glucose impact of the food. If the food is predicted<sup>90</sup> to have a minor impact, Libre Assist may not show any tips but a motivational message encouraging the decisions made. If the food is predicted to have moderate or major impact, Libre Assist will show up to three tips that you can select.
      </p>
    )
  },
  {
    id: 34,
    question: "Why is Libre Assist giving me these tips?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> is a feature within the Libre app<sup>12</sup> that provides actionable, personalised meal guidance<sup>91</sup> in the moment, empowering users to make informed food choices.
      </p>
    )
  },
  {
    id: 35,
    question: "Why do I keep getting an error when uploading a photo in Libre Assist?",
    answer: (
      <p>
        There could be a variety of reasons why Libre Assist<sup>86</sup> responds with an error including image being too small, no food being detected, or the image did not pass our content moderation guidelines. If the error persists, you can also type in a description instead.
      </p>
    )
  },
  {
    id: 36,
    question: "Libre Assist displayed incorrect food description/ingredients– is there a way to adjust it?",
    answer: (
      <p>
        Yes. You can edit food details by tapping on the food card and clicking on "edit food". Describe the changes you would like to make (e.g. Replace X with Y). After saving the change, Libre Assist<sup>86</sup> will reanalyse the food and redisplay the updated food title, ingredients, and predicted<sup>90</sup> score.
      </p>
    )
  },
  {
    id: 37,
    question: "Can I use Libre Assist without internet connection?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> requires connection to the internet through Wi-Fi or cellular connection. No new food inputs or edits may be made and a message stating “connect to the internet” will be displayed.
        </p>
        <p>
          However, users will still have access to review past foods, navigate to past days and change time of food.
        </p>
      </>
    )
  },
  {
    id: 38,
    question: "What does predicted vs actual glucose impact mean in Libre Assist? Why are they different?",
    answer: (
      <p>
        The predicted impact and actual impact can differ in Libre Assist<sup>86</sup>. The predicted glucose impact<sup>90</sup> is based on estimated glucose impact from generative AI models. The actual impact score is based on your actual glucose data from your FreeStyle Libre systems sensor.
      </p>
    )
  },
  {
    id: 39,
    question: "I have dietary requirements or preferences. How can I ensure that the tips provided by Libre Assist are relevant for me?",
    answer: (
      <>
        <p>
          You can add dietary preferences at any time in Libre Assist<sup>86</sup>. Tips<sup>91</sup> will adjust based on your preferences. You can adjust your dietary preferences by:
        </p>
        <ol className="faq-list">
          <li>Tapping on profile</li>
          <li>Tapping on Health Details</li>
          <li>Tapping on Dietary preferences</li>
          <li>Tapping on Update preferences</li>
          <li>Selecting the dietary preferences that apply to you.</li>
          <li>Tapping on Save.</li>
        </ol>
      </>
    )
  },
  {
    id: 40,
    question: "Can I trust the information that Libre Assist is giving me if it’s AI generated?",
    answer: (
      <>
        <p><strong>Predicted impact score, ingredients, tips:</strong></p>
        <p>
          The Libre Assist<sup>86</sup> predictions and ingredient insights<sup>91</sup> have gone through extensive validation, including collaborating with Certified Diabetes Care and Education Specialists (CDCES) and registered dietitians. Libre Assist does use generative AI to produce predicted food scores<sup>90</sup> and recommendations to help lower glucose impact, and this information isn’t always correct. Always make dietary choices in reference to your best judgment and the advice of your healthcare team.
        </p>
        <p><strong>Actual impact score:</strong></p>
        <p>
          On the other hand, the meal's actual impact score is a calculation based on your Libre sensor data - how your actual glucose behaved after you ate or drank and factors like activity, stress, medication and alcohol.
        </p>
      </>
    )
  },
  {
    id: 41,
    question: "How does Libre Assist account for multiple entries in a short period of time?",
    answer: (
      <p>
        In Libre Assist<sup>86</sup>, when meals, snacks and drinks happen close together, the actual impact on your glucose is a combined calculated score. The food you had before is a factor in the next thing you eat or drink.
      </p>
    )
  },
  {
    id: 42,
    question: "Why can I no longer use the Libre Assist feature?",
    answer: (
      <>
        <p>
          Libre Assist<sup>86</sup> has usage limits that apply and reset every calendar day. If you have exceeded the usage limit for that day, Libre Assist will be temporarily disabled. The usage cap resets at 10am AEST/11am AEDT.
        </p>
        <p>Disabled features include:</p>
        <ul className="faq-bullet-list">
          <li>New food details</li>
          <li>Edit food details</li>
          <li>Action button</li>
          <li>Edit food buttons</li>
        </ul>
      </>
    )
  },
  {
    id: 43,
    question: "Can Libre Assist count carbohydrates or estimate macronutrients (carbohydrate, protein, fat)?",
    answer: (
      <p>
        Currently, Libre Assist<sup>86</sup> does not count carbohydrates or estimate macronutrient amounts.
      </p>
    )
  },
  {
    id: 44,
    question: "Can I add foods I already had or will have in the future in Libre Assist?",
    answer: (
      <p>
        Yes, you can add foods or meals that you already had by making updates to the Time of Food selector in Libre Assist<sup>86</sup> at any time. However, you cannot add foods or meals that are in the future.
      </p>
    )
  },
  {
    id: 45,
    question: "When will I know that my predicted impact score and tips are ready in Libre Assist?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> provides a ‘Food Prediction ready’ message that will display in the Assist tab. Tap on the food card or ‘View’ on the Food Prediction ready message to view the predicted impact score<sup>90</sup>, ingredient breakdown, and tips<sup>91</sup> to help lower your glucose.
      </p>
    )
  },
  {
    id: 46,
    question: "How do I know when my actual food impact score is ready in Libre Assist?",
    answer: (
      <p>
        In Libre Assist<sup>86</sup>, when an actual food impact score is ready, you will receive a push notification to your smartphone. The predicted food impact score<sup>90</sup> is replaced with the actual food impact score based on your actual glucose response to the meal. If a rating cannot be provided, you will see an “Impact Unavailable” rating.
      </p>
    )
  },
  {
    id: 47,
    question: "How can I add a meal in Libre Assist?",
    answer: (
      <>
        <p>
          You can add a meal in Libre Assist<sup>86</sup> by navigating to Insights tab then tapping on Assist. There you will see a floating action button that says, “Libre Assist.” At any point in time within the Assist tab, you can click that button to add a meal.
        </p>
        <p>There are three ways to add a meal in Libre Assist:</p>
        <ol className="faq-list">
          <li>Take a photo</li>
          <li>Upload a photo</li>
          <li>Type a text description</li>
        </ol>
      </>
    )
  },
  {
    id: 48,
    question: "Can I access Libre Assist to log a meal by tapping on add note icon (+)?",
    answer: (
      <>
        <p>No, if you wish to log a meal through Libre Assist<sup>86</sup>, please follow the steps below:</p>
        <ol className="faq-list">
          <li>Tap on Insights tab</li>
          <li>Tap on Assist</li>
          <li>Locate and tap “Libre Assist” floating action button on lower right side of screen.</li>
          <li>Add your meal</li>
        </ol>
      </>
    )
  },
  {
    id: 49,
    question: "What is the difference between logging a meal using add note icon (+) and Libre Assist?",
    answer: (
      <>
        <p><strong>Adding a meal through add note icon (+)</strong></p>
        <p>Adding a meal through the add note icon (+) only creates a note on your glucose reports and logbook.</p>
        <p><strong>Adding a meal through Libre Assist</strong></p>
        <p>
          When adding a meal through Libre Assist<sup>86</sup>, you access actionable, personalised meal guidance<sup>91</sup> in the moment helping users to make better food choices and are separate from notes added to your glucose reports and logbook.
        </p>
      </>
    )
  },
  {
    id: 50,
    question: "How long does Libre Assist keep my logged food entries, and how far back can I view them?",
    answer: (
      <p>
        Libre Assist<sup>86</sup> stores your logged food data for up to 90 days. You can view and reference any food entries made within the past 90 days.
      </p>
    )
  },
  {
    id: 51,
    question: "Can Libre Assist integrate with other health apps or devices (e.g. Apple Health, Fitbit)?",
    answer: (
      <p>
        Currently, Libre Assist<sup>86</sup> does not integrate with other health apps or devices.
      </p>
    )
  },
  {
    id: 52,
    question: "Does Libre Assist work across different devices (e.g. Tablets, multiple phones)?",
    answer: (
      <>
        <p>Libre Assist<sup>86</sup> device and operating system minimum requirements:</p>
        <ul className="faq-bullet-list">
          <li><strong>iOS App:</strong> iPhones listed on the compatibility guide, running iOS 16.0 or higher.</li>
          <li><strong>Android App:</strong> NFC-enabled smartphones listed on the compatibility guide, running Android 11 or higher.</li>
        </ul>
        <p>
          For more information on compatibility please visit the compatibility section of our website:{' '}
          <a href="https://www.freestylelibre.com.au/mobile-compatibility" target="_blank" rel="noopener noreferrer">
            https://www.freestylelibre.com.au/mobile-compatibility
          </a>
        </p>
      </>
    )
  }
];

const areAllOpen = faqData.length > 0 && faqData.every((item) => openItems[item.id]);
  // const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAll = () => {
    const allOpen = faqData.every((item) => openItems[item.id]);
    if (allOpen) {
      setOpenItems({});
    } else {
      const newOpenItems = {};
      faqData.forEach((item) => {
        newOpenItems[item.id] = true;
      });
      setOpenItems(newOpenItems);
    }

  const areAllOpen = faqData.length > 0 && faqData.every((item) => openItems[item.id]);







}








  
  return (
    <>
    <div className="libre-landing-page">
      {/* Breadcrumb Header */}
      <div className="breadcrumb-nav">
        <span className="home-icon">🏠</span>
        <span className="separator">&gt;</span>
        <span className="current-page">Libre Assist</span>
      </div>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <img 
              src="Libre-assist-hero.webp" 
              alt="Libre Assist AI Food Coach on smartphone" 
              className="hero-img"
            />
          </div>
          <div className="hero-content">
            <h1>
              Libre Assist: your AI food coach<sup>89</sup>
            </h1>
            <h2>
              Available now on the Libre app<sup>12</sup>
            </h2>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <p className="app-store-notice">
          To access Libre Assist, update Libre app to the latest version, available now in the App Store and Google Play.
        </p>
        
        <h2>Introducing Libre Assist<sup>89</sup></h2>
        <div className="yellow-underline"></div>
        
        <p className="intro-description">
          A first-of-its-kind feature of Libre app<sup>12</sup>, with Libre Assist<sup>89</sup>, you can see the potential impact<sup>90</sup> of meals on your glucose levels, so you can make informed food choices.
        </p>
      </section>

      {/* How it Works - Steps Section */}
      <section className="steps-container">
        {/* Step 1 */}
        <div className="step-row step-1">
          <div className="step-image">
            <img 
              src="Libre_assist_step_2.webp" 
              alt="Step 1: Snap photo of food" 
            />
          </div>
          <div className="step-text">
            <h3>Step 1:<br />It starts with a photo.</h3>
            <div className="yellow-underline align-left"></div>
            <p>
              Simply upload or snap a photo of your meal with Libre Assist<sup>89</sup>. You can also type in a description of the meal, whether it's already in front of you or you're still considering your options.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-row step-2 reverse">
          <div className="step-text">
            <h3>Step 2:<br />In-the-moment predictions.</h3>
            <div className="yellow-underline align-left"></div>
            <p>
              Just like that, Libre Assist will predict your meal's potential glucose impact<sup>90</sup>, colour coded for easy interpretation. Green for minor impact, yellow for moderate impact, and orange where the impact on your glucose is expected to be major.
            </p>
          </div>
          <div className="step-image">
            <img 
              src="Libre_assist_1_351x674.webp" 
              alt="Step 2: In-the-moment predictions" 
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-row step-3">
          <div className="step-image">
            <img 
              src="Libre_assist_step_3.webp" 
              alt="Step 3: Personalised suggestions" 
            />
          </div>
          <div className="step-text">
            <h3>Step 3:<br />Personalised suggestions<sup>91</sup>.</h3>
            <div className="yellow-underline align-left"></div>
            <p>
              See the meal's ingredients, each colour-coded to show glucose impact. You'll also get recommendations to help lower the glucose impact<sup>91</sup> of the meal in front of you.
            </p>
            <p className="tip-box">
              <strong>TIP:</strong> Set your dietary preferences to make sure your recommendations are personalised for you. Go to <em>Profile &gt; Health Settings &gt; Dietary Preferences</em>
            </p>
          </div>
        </div>
      </section>

      {/* Video / Action Section */}
      {/* <section className="action-section">
        <h2>Libre Assist in action</h2>
        <div className="yellow-underline"></div>

        <div className="video-player-container">
          <div className="main-video-screen">
            <img 
              src="Video-Thumbnail-1.webp" 
              alt="Video Main Screen" 
              className="video-main-img" 
            />
            <div className="play-button-overlay">
              <span className="play-icon">▶</span>
            </div>
            <div className="video-disclaimer">
              To unlock the full capabilities of Libre Assist, use it with an active Libre sensor
            </div>
          </div>
          <div className="video-playlist">
            <div className="playlist-item active">
              <img src="Video-Thumbnail-1 (1).webp" alt="Making Informed food choices" />
              <span>Making informed food choices</span>
            </div>
            <div className="playlist-item">
              <img src="Video-Thumbnail-1 (1).webp" alt="Getting started with Libre Assist" />
              <span>Getting started with Libre Assist</span>
            </div>
            <div className="playlist-item">
              <img src="Video-Thumbnail-1 (1).webp" alt="How to add food" />
              <span>How to add food</span>
            </div>
          </div>
        </div>
      </section> */}




<section className="libre-video-section">
      {/* Section Title */}
      <div className="section-header">
        <h2>Libre Assist in action</h2>
        <span className="title-underline"></span>
      </div>

      {/* Sub-heading showing currently active video title */}
      <h3 className="active-video-subtitle">{activeVideo.title}</h3>

      {/* Main Content Layout */}
      <div className="video-section-content">
        {/* Left: Embedded Video Player */}
        <div className="video-player-container">
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0`}
            title={activeVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Playlist / Selector Items */}
        <div className="video-playlist-container">
          {videoList.map((item) => {
            const isSelected = activeVideo.id === item.id;
            return (
              <div
                key={item.id}
                className={`playlist-item ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveVideo(item)}
              >
                <div className="playlist-thumbnail-wrapper">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="play-icon-overlay">▶</div>
                </div>
                <span className="playlist-title">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>










      {/* App Overview Section */}
      <section className="app-overview-section">
        <h2>
          Powered by the NEW Libre app<sup>12</sup>. Accurate,<sup>76</sup> reliable glucose readings, automatically updated every single minute.<sup>55</sup>
        </h2>
        <div className="yellow-underline"></div>

        <div className="app-overview-grid">
          <div className="app-phone-image">
            <img 
              src="Home_Screen_6.2MMOL_Detail_312x600.webp" 
              alt="Libre app glucose readings screen" 
            />
          </div>

          <div className="app-features-content">
            <h3>Libre app<sup>12</sup></h3>
            <ul className="feature-list">
              <li>A refreshed, intuitive design, making it easier to access the information you need.</li>
              <li>Expanded optional alarm features,<sup>66</sup> including predictive low glucose alarm, escalating alarms, and silent mode.<sup>67</sup></li>
              <li>Glucose readings right on your wrist with Apple Watch.<sup>88</sup></li>
              <li>Personalised insights and reports to track and celebrate your progress.</li>
            </ul>

            <div className="app-store-badges">
              {/* Badge icons or branding link visuals if applicable */}
            </div>

            <div className="qr-code-box">
              <img 
                src="Libre_app_AU_deeplink_QR_1.webp" 
                alt="QR code to download Libre app" 
                className="qr-img" 
              />
              <a href="#compatibility" className="compatibility-link">Check device compatibility</a>
            </div>
          </div>
        </div>

        <div className="cta-wrapper">
          <button className="cta-button">Learn more about the Libre app</button>
        </div>
      </section>









      <section className="libre-faq-container">
      {/* Title */}
      <h1 className="libre-faq-title">
        Libre Assist FAQs
        <span className="title-underline"></span>
      </h1>

      {/* Sublink */}
      <div className="libre-faq-sublink">
        <a href="#all-faqs">All Libre app FAQs</a>
      </div>

      {/* Expand/Collapse All Action */}
      <div className="libre-faq-actions">
        <button onClick={toggleAll} className="expand-all-btn">
          {areAllOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* FAQ Accordion List */}
      <div className="libre-faq-list">
        {faqData.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-header ${isOpen ? 'open' : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question">{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-body">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
    </div>
    <SubscribeForm />
    </>
  );
}