"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function LoginNew() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);

    try {
      const credentials = btoa(`${name}:${pass}`);
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // setLoading(false);
        router.push("/login");
      } else {
        alert("please fill valid");
      }
    } catch (error) {
      console.log(error);
    }

    finally {
      setLoading(false);
    }
  }
  return (
    <>
      <h2>user login details</h2>
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
      <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
      <button onClick={handleLogin} disabled={loading}>{loading ? "loading..." : "Login"}</button>
    
    
    </>
  );
}