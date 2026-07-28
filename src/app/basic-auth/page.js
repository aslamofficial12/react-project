"use client";

import { useState } from "react";

export default function BasicAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    console.log("button Clicked");

    setLoading(true);

    try {
      const credentials = btoa(`${username.trim()}:${password}`);

      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login Failed");
      }
  
      const data = await response.json();

      console.log("Success");
      console.log(data);

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Basic Authentication Demo</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button 
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}