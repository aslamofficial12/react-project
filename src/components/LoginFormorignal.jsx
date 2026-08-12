"use client";

import { useState } from "react";
import "./LoginForm.css";
import SubscribeForm from "./SubscribeForm";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  

  function handleShow() {
    setShow(!show);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !pass) {
      alert("Please fill all fields");
      return;
    }



    const credentials = btoa(`${name.trim()}:${pass}`);

    setLoading(true);

    try {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // throw new Error("Login Failed");
     
       
        //  router.push("/");
        router.push(`/?name=${name}&pass=${pass}`);
         
         return;
      }

      if (!response.ok) {
        alert("Invalid Username or Password");
        return;
      }

      
      const data = await response.json();
      console.log(data);

     
      alert("Login Successfully");


      router.push(`/LoginSuccess?name=${name}`);


      console.log({
        name,
        password: pass,
      });

    } catch (error) {   
      console.log(error);
    } finally {      
      setLoading(false);
    }
  }

  return (
    <>
      <div className="form-container">
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Login
          </h1>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            style={{ borderRadius: "10px", border: "solid 1px grey" }}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={pass}
              style={{ border: "solid 1px grey", borderRadius: "10px" }}
              onChange={(e) => setPass(e.target.value)}
            />

            <span>
              <a
                href="#"
                style={{
                  fontWeight: "10px",
                  fontSize: "10px",
                  color: "#bd9a00",
                  fontStyle: "-moz-initial",
                }}
              >
                forget your password?
              </a>
            </span>

            <span
              className="eye"
              onClick={handleShow}
            >
              {show ? "🙈" : "👁️"}
            </span>
          </div>

          {/* ✅ CHANGED: Removed onClick because onSubmit already calls handleSubmit */}
          <button type="submit" disabled={loading}>
            {/* ✅ CHANGED: Removed duplicate "Login" text */}
            {loading ? "Logging in..." : "Login"}
          </button>

          <hr style={{ color: "grey" }} />

          <a
            href="http://localhost:3000/registration"
            style={{ textAlign: "center" }}
          >
            create a new account
          </a>
        </form>
      </div>
    </>
  );
}