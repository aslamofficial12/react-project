
"use client";

import { useState } from "react";
import "./StepTwo.css";

export default function StepTwo({
  formData,
  handleChange,
  login,
  back,
  errors,
  loading,
  passwordStrength = 0,
  strengthLabel = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const strengthClass =
    passwordStrength <= 25
      ? "weak"
      : passwordStrength <= 50
        ? "fair"
        : passwordStrength <= 75
          ? "good"
          : "strong";

  return (
    <div className="card">
      <h3>Step 2</h3>
      <h1>Account Details</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      {errors.email && (
        <p className="field-error">{errors.email}</p>
      )}

      <div className="box3">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <span
          className="eye2"
          role="button"
          tabIndex={0}
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword(!showPassword)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowPassword(!showPassword);
            }
          }}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>

      {/* Password strength indicator */}
      {formData.password && (
        <div className="password-strength">
          <div
            className="strength-track"
            role="progressbar"
            aria-label="Password strength"
            aria-valuenow={passwordStrength}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={`strength-fill ${strengthClass}`}
              style={{ width: `${passwordStrength}%` }}
            />
          </div>

          <div className="strength-info">
            <span>Password Strength</span>
            <span className={`strength-label ${strengthClass}`}>
              {strengthLabel} ({passwordStrength}%)
            </span>
          </div>

          <p className="password-hint">
            Use at least 8 characters, one number and one special character.
          </p>
        </div>
      )}

      {errors.password && (
        <p className="field-error">{errors.password}</p>
      )}

      <div className="password-box2">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <span
          className="eye"
          role="button"
          tabIndex={0}
          aria-label={
            showConfirmPassword
              ? "Hide confirm password"
              : "Show confirm password"
          }
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowConfirmPassword(!showConfirmPassword);
            }
          }}
        >
          {showConfirmPassword ? "🙈" : "👁️"}
        </span>
      </div>

      {errors.confirmPassword && (
        <p className="field-error">
          {errors.confirmPassword}
        </p>
      )}

      {errors.submit && (
        <p className="field-error">{errors.submit}</p>
      )}

      <button
        type="button"
        onClick={login}
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <button
        type="button"
        onClick={back}
        className="back-button"
        disabled={loading}
        style={{
          backgroundColor: "#050505",
          marginTop: "20px",
        }}
      >
        Back
      </button>
    </div>
  );
}
