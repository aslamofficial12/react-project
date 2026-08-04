"use client";

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import "./loginsucces.css";

export default function LoginSuccessPage() {
  const router = useRouter();
    const searchParams = useSearchParams();

  const name = searchParams.get("name");

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("session will expire no user interaction for 10 minutes");
      router.push("/login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

setTimeout(()=>{
alert("session will expire no user interaction");
},10000)

  return (
    <div className="success-container">
      <div className="success-card">

        <div className="icon-wrapper">
          <CheckCircle className="success-icon" />
        </div>

        <h1>Login Successful! authorized user</h1>
        <h3>welcome {name}</h3>

        <p>
          Welcome back! You have successfully logged into your account.
        </p>

        <button onClick={() => router.push("/login")}>
          Go to Dashboard
        </button>

        <span>
          Redirecting automatically...
        </span>

      </div>
    </div>
  );
}