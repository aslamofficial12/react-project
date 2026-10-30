"use client";

import { useState } from "react";

export default function LoginForm() {
  const [password, setPassword] = useState("123456");
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <label>Password:</label>

      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
}