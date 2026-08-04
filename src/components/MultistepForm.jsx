"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import JsonPreview from "./JsonPreview";
import "./MultistepForm.css";

import Router from 'next/router'

export default function MultistepForm() {
  const [step, setStep] = useState(1);

  // Stores validation errors
  const [errors, setErrors] = useState({});
  const [show,setShow]=useState(false);
  const router= useRouter()

  // Stores form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
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

function validateStepTwo(){
  let secondErrors={};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




   if (formData.email.trim() === "") {
    secondErrors.email = "Email is required";
  } else if (!emailPattern.test(formData.email)) {
    secondErrors.email = "Enter a valid email address";
  }

  if (formData.password.trim() === "") {
    secondErrors.password = "Please enter password";
  }

  if (formData.confirmPassword.trim() === "") {
    secondErrors.confirmPassword = "Confirm password required";
  } else if (formData.password !== formData.confirmPassword) {
    secondErrors.confirmPassword = "Passwords do not match";
  }

    
setErrors(secondErrors);

  if (Object.keys(secondErrors).length === 0){
    // setStep(3)
      router.push("/login"); // or "/dashboard"

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
            // login={() => setStep(3)}
            login={validateStepTwo}
            errors={errors}
            show={show}
            // setshow={setShow}
          />
        )}

        {step === 3 && (
          <JsonPreview formData={formData} />
        )}

      </div>
    </div>
  );
}