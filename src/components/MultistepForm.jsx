"use client";

import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import JsonPreview from "./JsonPreview";
import "./MultistepForm.css";

export default function MultistepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <>
      <div className="right-panel">

        {/* --- ADD THIS INVISIBLE WRAPPER --- */}
        <div className="form-content">
          
          {/* Your Progress Bar */}
          <div className="progress-bar">
            <div className={`step-indicator ${step >= 1 ? "active" : ""}`}></div>
            <div className={`step-indicator ${step >= 2 ? "active" : ""}`}></div>
            {/* <div className={`step-indicator ${step >= 3 ? "active" : ""}`}></div> */}
          </div>

          {/* Your Existing Steps */}
          {step === 1 && (
            <StepOne
              formData={formData}
              handleChange={handleChange}
              next={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepTwo
              formData={formData}
              handleChange={handleChange}
              login={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}

          {step === 3 && <JsonPreview formData={formData} />}

        </div>
        {/* --- END INVISIBLE WRAPPER --- */}

      </div>
    </>
    </>
  );
}

