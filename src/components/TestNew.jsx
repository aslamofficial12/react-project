
"use client";
// Intha component browser-la run aaganum.
// useState, sessionStorage, window event use panrom.

import { useState } from "react";
// React state create panna useState import panrom.

import "./LoginForm.css";
// Login form styling import panrom.

// import { useRouter } from "next/navigation";
// Login success aana next page-ku navigate panna useRouter.


export default function LoginForm() {

  // Username store panna state.
  const [name, setName] = useState("");

  // Password store panna state.
  const [pass, setPass] = useState("");

  // Password show/hide control panna state.
  // Initially false, so password hide aagum.
  const [show, setShow] = useState(false);

  // API request running-ah irukka nu check panna state.
  const [loading, setLoading] = useState(false);

  // Error message display panna state.
  const [error, setError] = useState("");

  // Next.js router create panrom.
  const router = useRouter();


  // Password show/hide button click pannumbothu execute aagum.
  function handleShow() {

    // Previous state false-na true.
    // Previous state true-na false.
    setShow((prev) => !prev);
  }


  // User Login form submit pannumbothu execute aagum.
  // async use pannurathu API request-ku wait panna.
  async function handleSubmit(e) {

    // Browser default form reload-ah prevent pannum.
    e.preventDefault();

    // Previous error message iruntha clear pannum.
    setError("");


    // Username empty-ah irukka?
    // Password empty-ah irukka?
    if (!name.trim() || !pass) {

      // Empty input iruntha error show pannum.
      setError("Please enter username and password.");

      // API request pogama function stop aagum.
      return;
    }


    // Login request start aagurathala loading true.
    setLoading(true);


    try {

      // Next.js API route-ku POST request send panrom.
      const response = await fetch("/api/login", {

        // Login details send panna POST method.
        method: "POST",

        // Request JSON format-la irukkunu server-ku inform panrom.
        headers: {
          "Content-Type": "application/json",
        },

        // Username and password JSON format-la send panrom.
        body: JSON.stringify({
          username: name.trim(),
          password: pass,
        }),
      });


      // Backend response-ah JSON object-ah convert panrom.
      // JSON parsing fail aana empty object return aagum.
      const data = await response.json().catch(() => ({}));


      // API HTTP status console-la check pannalam.
      console.log("Login API status:", response.status);

      // Backend message mattum console-la display panrom.
      // Token-ah console-la print panna koodathu.
      console.log("Login API message:", data.message);


      // Backend HTTP response success illaina
      // backend error message display pannum.
      if (!response.ok) {

        setError(data.message || "Invalid username or password.");

        // Login success code execute aagama stop pannum.
        return;
      }


      // Backend response-la token irukka nu check panrom.
      if (!data.token) {

        // Token illaina console error.
        console.error("Login succeeded, but the API response has no token.");

        // User-ku error message display pannum.
        setError("Login response did not contain a token.");

        return;
      }


      // Backend return panna token-ah sessionStorage-la store panrom.
      sessionStorage.setItem("authToken", data.token);

      // Backend return panna session value-ah store panrom.
      // Backend property name "session" nu irukkanum.
      sessionStorage.setItem("sessionId", data.session);

      // Username-ah sessionStorage-la store panrom.
      sessionStorage.setItem("username", name.trim());


      // Store panna token-ah retrieve panrom.
      const storedToken = sessionStorage.getItem("authToken");

      // Store panna session ID-ah retrieve panrom.
      const storedSession = sessionStorage.getItem("sessionId");

      // Store panna username-ah retrieve panrom.
      const storedUsername = sessionStorage.getItem("username");


      // Token, session ID, username moonum irukka nu check panrom.
      if (storedToken && storedSession && storedUsername) {

        // Token stored successfully.
        console.log("Token: Stored successfully");

        // Session ID stored successfully.
        console.log("Session ID: Stored successfully");

        // All three values available.
        console.log("Both values stored successfully!");

        // Username stored successfully.
        console.log("Username: Stored successfully");

      } else {

        // Token and session availability check.
        console.log("Token:", storedToken ? "Stored" : "Not found");

        console.log("Session ID:", storedSession ? "Stored" : "Not found");
      }


      // Login status change aagirukku nu
      // auth-change event dispatch panrom.
      // Navbar listener iruntha athu update aagalam.
      window.dispatchEvent(new Event("auth-change"));


      // Login successful aana /home page-ku navigate panrom.
      router.push("/home");


    } catch (error) {

      // Network/API request fail aana error console-la display aagum.
      console.error("Login request failed:", error);

      // User-ku connection error message display pannum.
      setError(
        "Unable to connect to the server. Please try again."
      );

    } finally {

      // Success or failure rendu situation-layum
      // loading false aagum.
      setLoading(false);
    }
  }


  // Login form UI return panrom.
  return (

    <div className="form-container">

      {/* Form submit aana handleSubmit execute aagum */}
      <form className="login-form" onSubmit={handleSubmit}>

        <h1>
          Login
        </h1>


        {/* Username label */}
        <label htmlFor="username">Username</label>


        {/* Username input field */}
        <input
          id="username"
          type="text"
          placeholder="Enter your username"

          // Username state value input-la display aagum.
          value={name}

          // Browser username autocomplete.
          autoComplete="username"

          // Empty input submit panna prevent pannum.
          required

          // User type pannumbothu name state update aagum.
          onChange={(e) => setName(e.target.value)}
        />


        {/* Password label */}
        <label htmlFor="password">Password</label>


        <div className="password-box">

          {/* Password input */}
          <input
            id="password"

            // show true-na text.
            // show false-na password.
            type={show ? "text" : "password"}

            placeholder="Enter your password"

            // Password state value.
            value={pass}

            // Browser password autocomplete.
            autoComplete="current-password"

            // Empty password submit panna prevent pannum.
            required

            // User type pannumbothu pass state update aagum.
            onChange={(e) => setPass(e.target.value)}
          />


          {/* Password show/hide button */}
          <button
            type="button"
            className="eye"

            // Click pannumbothu handleShow execute aagum.
            onClick={handleShow}

            // Accessibility label.
            aria-label={show ? "Hide password" : "Show password"}
          >

            {/* show true-na Hide.
                show false-na Show. */}
            {show ? "Hide" : "Show"}

          </button>

        </div>


        {/* Error iruntha mattum display aagum */}
        {error && (
          <p role="alert" className="login-error">
            {error}
          </p>
        )}


        {/* Login submit button */}
        <button
          type="submit"

          // Loading true-na button disabled.
          disabled={loading}
        >

          {/* Loading true-na Logging in...
              Loading false-na Login. */}
          {loading ? "Logging in..." : "Login"}

        </button>


        <hr className="divider" />


        {/* Registration page link */}
        <a href="/registration" className="signup-link">
          Create a new account new
        </a>

      </form>

    </div>
  );
}
