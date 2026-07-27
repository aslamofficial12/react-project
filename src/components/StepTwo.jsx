export default function StepTwo({
  formData,
  handleChange,
  login,
  back,
  errors
  
}) {
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

      <input
        type="password"
        name="Confirm password"
        placeholder="Confirm Password"
        value={formData.password}
        onChange={handleChange}
      />

        {errors.password && (
        <p style={{ color: "red" }}>
          {errors.password}
        </p>
      )}


      <button onClick={login}>
        Login
      </button>

      <button onClick={back}className="back-button" href="" style={{backgroundColor:"#050505" ,marginTop:"20px"}}>back</button>


    </div>
  );
}