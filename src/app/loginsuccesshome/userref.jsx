"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginSuccessPage() {
  const router = useRouter();


  const timerRef = useRef(null);


  function startTimer() {
    timerRef.current = setTimeout(() => {
      alert("Session Expired!");
      router.push("/login");
    }, 10000); 
  }


  function resetTimer() {
    clearTimeout(timerRef.current);
    startTimer();
  }

  useEffect(() => {
   
    startTimer();


    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

  
    return () => {
      clearTimeout(timerRef.current);

      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("keyup",resetTimer);
    };
  }, []);

  return (
    <div>
      <h1>Login Successful ✅</h1>
      <p>
        Move the mouse, click, type, or scroll.
        <br />
        If there is no activity for 10 seconds, you will be logged out.
      </p>
    </div>
  );
}