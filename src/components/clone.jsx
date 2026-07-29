"use clients"
import {useState} from "react"
export default function StepTwo({
  formData,
  handleChange,
  login,
  back,
  errors,
  show,
  // setShow
  
}) 






{
  const[show,setShow]=useState(false);
  function ShowPassword(){
    setShow(!show);
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

      

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && (
        <p style={{ color: "red" }}>
          {errors.password}
        </p>
      )}
<div>
      <input
        type={show ?"text":"password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {/* <button
type="button"
onClick={() => setShow(!show)}
>
👁
</button> */}

<span className="eye" onClick={{ShowPassword}}>
  {show ?"🙈" : "👁️"}
</span>
      </div>

        {errors.password && (
        <p style={{ color: "red" }}>
          {errors.confirmPassword}
        </p>
      )}


      <button onClick={login}>
        Login
      </button>

      <button onClick={back}className="back-button" href="" style={{backgroundColor:"#050505" ,marginTop:"20px"}}>back</button>


    </div>
  );
}