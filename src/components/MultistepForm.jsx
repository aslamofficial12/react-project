"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import JsonPreview from "./JsonPreview";
import "./MultistepForm.css";

export default function MultistepForm() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Password strength calculation
  const password = formData.password || "";

  const strengthChecks = [
    password.length >= 8,
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
    /[A-Za-z]/.test(password),
  ];

  const passwordStrength =
    strengthChecks.filter(Boolean).length * 25;

  const strengthLabel =
    password.length === 0
      ? ""
      : passwordStrength <= 25
        ? "Weak"
        : passwordStrength <= 50
          ? "Fair"
          : passwordStrength <= 75
            ? "Good"
            : "Strong";

  // Update form values
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Validate Step 1
  function validateStepOne() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2);
    }
  }

  // Validate Step 2 and register user
  async function validateStepTwo() {
    const secondErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern =
      /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!formData.email.trim()) {
      secondErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email.trim())) {
      secondErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      secondErrors.password = "Please enter password";
    } else if (!passwordPattern.test(formData.password)) {
      secondErrors.password =
        "Password must be at least 8 characters and contain one number and one special character";
    }

    if (!formData.confirmPassword) {
      secondErrors.confirmPassword =
        "Confirm password required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      secondErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(secondErrors);

    if (Object.keys(secondErrors).length > 0) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(
        "http://192.168.31.180:8081/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: formData.firstName.trim(),
            lastname: formData.lastName.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const responseText = await response.text();

      console.log("Registration status:", response.status);
      console.log("Registration response:", responseText);

      let data = null;

      try {
        data = JSON.parse(responseText);
      } catch {
        // Backend response may be plain text.
      }

      if (!response.ok) {
        setErrors({
          submit:
            data?.message ||
            responseText ||
            `Registration failed (${response.status})`,
        });
        return;
      }

      router.push(
        `/registrationsuccess?email=${encodeURIComponent(
          formData.email.trim()
        )}`
      );
    } catch (error) {
      console.error("Registration error:", error);

      setErrors({
        submit:
          "Unable to connect to backend. Check the browser Console for the actual error.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="right-panel">
      <div className="form-content">
        <div className="progress-bar">
          <div
            className={`step-indicator ${
              step >= 1 ? "active" : ""
            }`}
          />

          <div
            className={`step-indicator ${
              step >= 2 ? "active" : ""
            }`}
          />
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
            back={() => {
              setErrors({});
              setStep(1);
            }}
            login={validateStepTwo}
            errors={errors}
            loading={loading}
            passwordStrength={passwordStrength}
            strengthLabel={strengthLabel}
          />
        )}

        {step === 3 && (
          <JsonPreview formData={formData} />
        )}
      </div>
    </div>
  );
}
