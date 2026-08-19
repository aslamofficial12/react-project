"use client";

import { useState } from "react";
import "./style.css";

const faqs = [
  {
    question:
      "I have a subscription that I purchased prior to the introduction of the Subscribe and Save offer. Does my subscription automatically update to Subscribe and Save?",
    answer:
      "No. Your existing subscription will not automatically be updated to Subscribe and Save. You will need to start a new Subscribe and Save subscription.",
  },
  {
    question:
      "I have a subscription that I purchased prior to the introduction the Subscribe and Save program. Do my previous orders count towards receiving every 6th order free?",
    answer:
      "Previous orders made before joining the Subscribe and Save program do not count toward your sixth free order.",
  },
  {
    question: "Can I access NDSS subsidised pricing through Subscribe and Save?",
    answer:
      "Yes, eligible customers can access the applicable subsidised pricing through Subscribe and Save.",
  },
  {
    question:
      "If I cancel my subscription but then start a new one, will my previous orders count towards my sixth order being free?",
    answer:
      "No. Cancelling your subscription and starting a new one will reset your order count.",
  },
  {
    question:
      "If I pause, or 'take-a-break' from my subscription, once I've resumed it, will my previous orders count towards my sixth order being free?",
    answer:
      "Yes. Pausing your subscription does not reset your previous order count.",
  },
  {
    question: "Can I have multiple subscriptions running at the same time?",
    answer:
      "Yes, you can have multiple subscriptions running at the same time, subject to the program's terms and conditions.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`faq-item ${isOpen ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
