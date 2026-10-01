"use client";

import "./SubscribeForm.css";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function SubscribeForm() {
  const router = useRouter();
  
  // API States
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null); // Renamed to avoid conflict

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [emailError, setEmailError] = useState(""); // Renamed for clarity
  const [formError, setFormError] = useState(""); // Renamed for clarity

  useEffect(() => {
    setLoading(true);
    fetch("/api/subscribe")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch home page");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API data:", data);
        setDatas(data);
      })
      .catch((error) => {
        console.error("Failed to fetch home page:", error);
        setApiError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleForm() {
    setFormError("");
    setEmailError("");

    if (!name || !email || !diabetes) {
      setFormError("please fill all required fields");
      return;
    }
    
    if (!email.endsWith("@gmail.com")) {
      setEmailError("please enter valid email name");
      return;
    }

    router.push(`/success?name=${name}&email=${email}&diabetes=${diabetes}`);
  }

  // Early returns API call complete aagum varai
  if (loading) {
    return (
      <main className="products-section">
        <div className="loading">
          <div className="loader"></div>
          <p>Loading home page...</p>
        </div>
      </main>
    );
  }

  if (apiError) {
    return (
      <main className="products-section">
        <p>Error: {apiError}</p>
      </main>
    );
  }

  if (!datas) {
    return null;
  }

  return (
    <section className="subscribe-section">
      <div className="warning-text">
        <p>
          {/* JSON-il irundhu datas.warningText ai edukirom */}
          {datas.warningText} 
          <a href="#"> {datas.warningLinkText} </a>
          {datas.warningTextEnd}
        </p>
      </div>

      <div className="subscribe-container">
        {/* Title and Subtitle binding */}
        <h2>{datas.formTitle}</h2>
        <p className="subtitle">{datas.formSubtitle}</p>

        <div className="row">
          <div className="field">
            <label>
              {datas.nameLabel} <span>*</span>
            </label>
            <input
              type="text"
              placeholder={datas.namePlaceholder}
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>

          <div className="field">
            <label>
              {datas.emailLabel} <span>*</span>
            </label>
            <input
              type="email"
              placeholder={datas.emailPlaceholder}
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            {emailError && <span style={{ color: "red" }}>*{emailError}</span>}
          </div>
        </div>

        <div className="field">
          <label>
            {datas.diabetesSelectLabel} <span>*</span>
          </label>
          <select onChange={(e) => { setDiabetes(e.target.value) }}>
            <option value="">{datas.diabetesOptionDefault}</option>
            {/* Dynamic array map pandrom. API-il array empty-aaga irundhaal ithu crash aagathu */}
            {datas.diabetesOptions && datas.diabetesOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" />
          <p>
            {datas.checkboxTextStart}
            <a href="#"> {datas.termsLinkText} </a>
            {datas.checkboxTextMiddle}
            <a href="#"> {datas.privacyLinkText} </a>
          </p>
        </div>

        <button className="subscribe-btn" onClick={handleForm}>
          {datas.submitButtonText}
        </button>
        
        {formError && <span style={{ color: "red", textAlign: "center", display: "block", marginTop: "10px" }}>*{formError}</span>}
      </div>
    </section>
  );
}