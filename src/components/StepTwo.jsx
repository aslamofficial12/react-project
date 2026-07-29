"use clients";
import { useState } from "react";
import "./StepTwo.css";


export default function StepTwo({
  formData,
  handleChange,
  login,
  back,
  errors,
  // show,
  // setShow

}) {

  const [show, setShow] = useState(false);
  const [showtwo, setShowTwo] = useState(false);


  // function handleShow() {
  //    console.log(show);

  //   setShow(!show);
  // }
  function handleShow() {
    console.log("clicked");
    setShow(!show);
  }
  function handleShowPass() {
    console.log("clicked");
    setShowTwo(!showtwo);
  }













  return (
    <div className="card">

      <h3>Step 2</h3>

      <h1>Account Details</h1>

      <input
        type="text"
        name="username"
        placeholder="Email"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && (
        <p style={{ color: "red" }}>
          {errors.username}
        </p>
      )}


      <div className="box3">
        <input
          type={showtwo ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span className="eye2" onClick={handleShowPass}>{showtwo ? "🙈" : "👁️"}</span>

      </div>
      {errors.password && (
        <p style={{ color: "red" }}>
          {errors.password}
        </p>
      )}
      <div className="password-box2">
        <input
          type={show ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />


        <span className="eye" onClick={handleShow}>

          {/* {show ? "Hide" : "show"} */}
          {show ? "🙈" : "👁️"}
        </span>
      </div>

      {errors.confirmPassword && (
        <p style={{ color: "red" }}>
          {errors.confirmPassword}
        </p>
      )}


      <button onClick={login}>
        Login
      </button>

      <button onClick={back} className="back-button" href="" style={{ backgroundColor: "#050505", marginTop: "20px" }}>back</button>


    </div>
  );
}