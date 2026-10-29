
"use client";

import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [treatment, setTreatment] = useState("");
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !pass ||
      !confirm
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (pass.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (pass !== confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8081/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstname.trim(),
            lastname: lastname.trim(),
            email: email.trim(),
            password: pass,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
          data.error ||
          "Registration failed"
        );
      }

      alert(data.message || "Registration successful!");

      console.log("Registration response:", data);

      // Registration success aana piragu login page-ku
      // redirect panna vendumna, keezha irukkura line
      // uncomment pannu:
      // window.location.href = "/login";

    } catch (error) {
      console.error("Registration error:", error);

      alert(
        error.message ||
        "Unable to connect to backend"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          New Customer?
        </h1>

        <p style={{ textAlign: "center" }}>
          Create An Account
        </p>

        <label>First Name *</label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
          required
        />

        <label>Last Name *</label>
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
          required
        />

        <label>Email *</label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
          required
        />

        <label>Password *</label>

        <div className="password-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={{
              border: "solid 1px grey",
              borderRadius: "10px",
            }}
            minLength={8}
            required
          />

          <button
            type="button"
            className="eye"
            onClick={() => setShow((prev) => !prev)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        <label>Confirm Password *</label>

        <div className="password-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{
              border: "solid 1px grey",
              borderRadius: "10px",
            }}
            minLength={8}
            required
          />
        </div>

        <label>Company Name</label>
        <input
          type="text"
          placeholder="Enter your company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
        />

        <div className="form-group label">
          <div className="db-main">
            <label>Diabetes Type</label>
            <span className="required" style={{ color: "red" }}>
              *
            </span>
          </div>

          <select
            value={diabetes}
            onChange={(e) => setDiabetes(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Gestational Diabetes">
              Gestational Diabetes
            </option>
            <option value="Other Diabetes">
              Other Diabetes
            </option>
            <option value="Caregiver">Caregiver</option>
            <option value="Healthcare Professional">
              Healthcare Professional
            </option>
          </select>
        </div>

        <div className="form-group label">
          <div className="db-main">
            <label>Diabetes Treatment</label>
            <span className="required" style={{ color: "red" }}>
              *
            </span>
          </div>

          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="Insulin injection">
              Insulin injection
            </option>
            <option value="Insulin-pump">
              Insulin pump
            </option>
            <option value="Others">Others</option>
          </select>
        </div>

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Create Account"}
        </button>

        <hr style={{ color: "grey", margin: "20px" }} />

        <a
          href="/login"
          style={{ textAlign: "center" }}
        >
          Return to login
        </a>
      </form>
    </div>
  );
}
