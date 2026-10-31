"use client";

import { useState } from "react";
import "./LoginForm.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  function handleShow() {
    setShow((prev) => !prev);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    // Step 1: Validate input fields
    if (!name.trim() || !pass) {
      setError("Please enter username and password.");
      return;
    }

    setLoading(true);

    try {
      // Step 2: Send login request to Next.js API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name.trim(),
          password: pass,
        }),
      });

      // Step 3: Read API response
      const data = await response.json().catch(() => ({}));

      // Step 4: Check API status
      console.log("Login API status:", response.status);

      // Avoid logging the token or other sensitive response data
      console.log("Login API message:", data.message);

      if (!response.ok) {
        setError(data.message || "Invalid username or password.");
        return;
      }

      // Step 5: Check whether backend returned a token
      if (!data.token) {
        console.error("Login succeeded, but the API response has no token.");
        setError("Login response did not contain a token.");
        return;
      }

      // // Step 6: Store token for this browser tab (testing approach)
      // sessionStorage.setItem("authToken", data.token);


      // Step 6: Store token and session ID
      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("sessionId", data.session);
      sessionStorage.setItem("username", name.trim());
      sessionStorage.setItem("expires",data.expires)

      // Step 7: Retrieve stored values
      const storedToken = sessionStorage.getItem("authToken");
      const storedSession = sessionStorage.getItem("sessionId");
      const storedUsername = sessionStorage.getItem("username");
      const timeExpire=sessionStorage.getItem("expires");

      // Step 8: Check both values
      if (storedToken && storedSession && storedUsername && timeExpire) {
        console.log("Token: Stored successfully");
        console.log("Session ID: Stored successfully");
        console.log("Both values stored successfully!");
        console.log("Username: Stored successfully");
                console.log("timeExpire: timeExpire working and "+timeExpire);
      } else {
        console.log("Token:", storedToken ? "Stored" : "Not found");
        console.log("Session ID:", storedSession ? "Stored" : "Not found");
        console.log("Session expires:", timeExpire ? "timeExpireworking" : "Not found");

      }

      window.dispatchEvent(new Event("auth-change"));


      // Step 8: Navigate after successful login
      router.push("/home");
    } catch (error) {
      console.error("Login request failed:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>
          Login
        </h1>

        <label htmlFor="username">Username</label>

        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={name}
          autoComplete="username"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>

        <div className="password-box">
          <input
            id="password"
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            value={pass}
            autoComplete="current-password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <button
            type="button"
            className="eye"
            onClick={handleShow}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {error && (
          <p role="alert" className="login-error">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <hr className="divider" />

        <a href="/registration" className="signup-link">
          Create a new account
        </a>
      </form>
    </div>
  );
}