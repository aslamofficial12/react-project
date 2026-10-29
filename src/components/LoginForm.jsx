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

    if (!name.trim() || !pass) {
      setError("Please enter username and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name.trim(),
            password: pass,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          data.message || "Invalid username or password."
        );
        return;
      }

      if (!data.token) {
        setError("Login response did not contain a token.");
        return;
      }

      // Store the token securely on the server in a production app.
      // Do not put the password or token in the URL.
      sessionStorage.setItem("authToken", data.token);

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
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "50px",
          }}
        >
          Login
        </h1>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={name}
          autoComplete="username"
          style={{
            borderRadius: "10px",
            border: "solid 1px grey",
          }}
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
            style={{
              border: "solid 1px grey",
              borderRadius: "10px",
            }}
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

        <hr style={{ color: "grey" }} />

        <a href="/registration" style={{ textAlign: "center" }}>
          Create a new account
        </a>
      </form>
    </div>
  );
}