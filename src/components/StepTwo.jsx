export default function StepTwo({
  formData,
  handleChange,
  login,
  back,
}) {
  return (
    <div className="card">

      <h3>Step 2</h3>

      <h1>Account Details</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={login}>
        Login
      </button>

      <button onClick={back}className="back-button" href="" style={{backgroundColor:"#ffd100" ,marginTop:"20px"}}>back</button>


    </div>
  );
}