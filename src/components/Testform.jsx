"use client";

import { useState } from "react";

export default function Testform() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit() {

    const userData = {
      name,
      email
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)
      }
    );

    const result = await response.json();

    console.log(result);
  }


  return (
    <div>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}