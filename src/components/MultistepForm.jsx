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

    // if(!formData){
    //     console.log("please fill all required fields");
    // }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="right-panel">

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
          back={()=>setStep(1)}
        />
      )}

      {step === 3 && (
        <JsonPreview formData={formData} />
      )}

    </div>
  );
}