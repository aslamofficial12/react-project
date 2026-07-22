"use client";

import { useState } from "react";
import "./LoginForm.css";
import SubscribeForm from "./SubscribeForm";
import "./LoginForm.css";

export default function LoginForm() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);


  function handleShow() {
    setShow(!show);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !pass) {
      alert("Please fill all fields");
      return;
    }


    if (pass.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }


    alert("Login Successfully");

    console.log({
      name,
      password: pass
    });
  }


  return (
    <>
      <div className="form-container">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}>Login </h1>


          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            style={{ borderRadius: "10px", border: "solid 1px grey" }}
            onChange={(e) => setName(e.target.value)}
          />


          <label>Password</label>


          <div className="password-box">

            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={pass}
              style={{ border: "solid 1px grey", borderRadius: "10px" }}
              onChange={(e) => setPass(e.target.value)}
            /><span><a href="#" style={{ fontWeight: "10px", fontSize: "10px", color: "#bd9a00", fontStyle: "-moz-initial" }}>forget your password?</a></span>


            <span
              className="eye"
              onClick={handleShow}
            >
              {show ? "🙈" : "👁️"}
            </span>


          </div>


          <button type="submit">
            Login
          </button>
          <a href="#" style={{ textAlign: "center" }}>create a new account</a>

        </form>





      </div>



    </>

  );
}