"use client";

import { useState } from "react";
import styles from "./BasicAuth.module.css";
// import Router from 'next/router'
import { useRouter } from "next/navigation";

export default function BasicAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

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
        // throw new Error("Login Failed");
        console.log("error not showing");
         router.push("/error");
         
         return;
      }
      if(response.ok){
        // alert("login successfully");
          router.push("/login");
        
        
        
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
  <div className={styles.container}>
    <h2 className={styles.title}>Basic Authentication Demo</h2>

    <input
      className={styles.input}
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      className={styles.input}
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      className={styles.button}
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? "Logging in......" : "Login"}
    </button>
  </div>
);
  // return (
  //   <div style={{ padding: "20px" }}>
  //     <h2>Basic Authentication Demo</h2>

  //     <input
  //       type="text"
  //       placeholder="Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />

  //     <br />
  //     <br />

  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />

  //     <br />
  //     <br />

  //     <button 
  //       onClick={handleLogin}
  //       disabled={loading}
  //     >
  //       {loading ? "Logging in..." : "Login"}
  //     </button>
  //   </div>
  // );
}