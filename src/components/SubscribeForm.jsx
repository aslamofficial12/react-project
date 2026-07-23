"use client";

import "./SubscribeForm.css";
import {useState} from 'react'
import { useRouter } from "next/navigation";








export default function SubscribeForm() {
 const router = useRouter();
  const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[diabetes,setDiabetes]=useState("");
const[error,setError]=useState(true)
const[formerror,setFormerror]=useState(true)

function handleForm(){
 if (!name || !email || !diabetes) {
    // alert("Please fill all the required fields.");
    setFormerror("please fill all required fields")
    return;
  }
  if(!email.endsWith("@gmail.com")){
    setError("please enter valid email name")
    // alert("please enter valid email name");
    return;
  }


// router.push("/success");
router.push( `/success?name=${name}&email=${email}&diabetes=${diabetes}`);

}
  return (
    <section className="subscribe-section">

      <div className="warning-text">

        <p>
          Always follow the directions for use.
          <a href="#"> Read the warnings </a>
          before purchase. Finger pricks are required if your glucose
          readings and alarms do not match symptoms or expectations.
        </p>

      </div>

      <div className="subscribe-container">

        <h2>Stay in Touch</h2>

        <p className="subtitle">
          Subscribe now to hear the latest FreeStyle Libre news first.
        </p>

        {/* First Row */}

        <div className="row">
          

          <div className="field">
            <label>
              Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <span></span>
          </div>

          <div className="field">
            <label>
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <span>*{error}</span>
          </div>

        </div>

        {/* Dropdown */}

        <div className="field">

          <label>
            Diabetes Type <span>*</span>
          </label>

          <select    
              onChange={(e)=>{setDiabetes(e.target.value)}}>

            <option value="">Please Select</option>

            <option>Type 1</option>

            <option>Type 2</option>

            <option>Gestational Diabetes</option>

            <option>Other Diabetes</option>

            <option>Caregiver</option>

            <option>Healthcare Professional</option>

          </select>

        </div>

        {/* Checkbox */}

        <div className="checkbox-row">

          <input type="checkbox" />

          <p>
            I wish to opt in to FreeStyle Libre marketing
            communications, including product support and
            education, special offers and product updates and
            alerts. I have read and agree to the
            <a href="#"> Terms of Use </a>
            and
            <a href="#"> Privacy Policy</a>.
          </p>

        </div>

        <button className="subscribe-btn" onClick={handleForm}>
          Subscribe
        </button>
        <span style={{color:"red",textAlign:"center"}}>*{formerror}</span>

      </div>

    </section>
  );
}