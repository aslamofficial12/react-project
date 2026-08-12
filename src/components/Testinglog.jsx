"use client";

import { useState } from "react";
import "./Testinglog.css";

export default function Testinglog() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [pass,setPass]=useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            setLoading(true);

            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname:lastname,
                    email:email,
                    password: pass
                })
            });

            if (response.ok) {
                alert("Login successfully");
            } else {
                alert("Login Not Successfully");
            }

        } catch (error) {
            alert("Login Not Successfully");
        }
        finally {
            setLoading(false);
        }
    }
    // const store=localStorage.setItem("cookie")

    return (
        <div className="login-container">

            <div className="login-box">

                <h3 className="login-title">
                    Login Details
                </h3>

                <input
                    className="login-input"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter Firstname"
                />

                <br />

                <input
                    className="login-input"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter lastName"
                />

                <br />

                 <input
                    className="login-input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                />

                <br />


                   <input
                    className="login-input"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter password"
                />

                <br />

                <button
                    className="login-button"
                    type="submit"
                    onClick={handleLogin}
                >
                    {loading ? "Loading..." : "Login"}
                </button>

            </div>

        </div>
    );
}