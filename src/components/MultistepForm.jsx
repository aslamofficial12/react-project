"use client";

import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import JsonPreview from "./JsonPreview";
import "./MultistepForm.css";

export default function MultistepForm() {
  const [step, setStep] = useState(1);

  // Stores validation errors
  const [errors, setErrors] = useState({});

  // Stores form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // Update input values
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Validate Step One
  function validateStepOne() {
    let newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  }


  



  return (
    <div className="right-panel">
      <div className="form-content">

        <div className="progress-bar">
          <div className={`step-indicator ${step >= 1 ? "active" : ""}`}></div>
          <div className={`step-indicator ${step >= 2 ? "active" : ""}`}></div>
        </div>

        {step === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            next={validateStepOne}
            errors={errors}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            back={() => setStep(1)}
            login={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <JsonPreview formData={formData} />
        )}

      </div>
    </div>
  );
}