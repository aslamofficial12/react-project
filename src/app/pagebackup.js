"use client";
import { useRef,useEffect } from 'react';
import LeftPanel from "../components/LeftPanel";
import MultistepForm from "../components/MultistepForm";
import BasicAuth from "./basic-auth/page";
import Sidebar from "../components/sidebarmyaccount/sidebar";
import Sidebarpart from "../components/sidebarpart/sidebarpartTwo";
import { useRouter, useSearchParams } from "next/navigation";


export default function Home() {
  const router=useRouter();
  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setTimeout(() => {
      alert("Session Expired!");
      router.push("/login");
    }, 100000);
  }

  function resetTimer(){
    clearTimeout(timerRef.current);
    startTimer();
  }

  useEffect(()=>{
    startTimer();
    // window.addEventListener(mousemove,resetTimer);
    window.addEventListener("hover",resetTimer);
    window.addEventListener("keyup",resetTimer);
    window.addEventListener("click",resetTimer);
    window.addEventListener("scroll",resetTimer);


    return ()=>{
      clearTimeout(timerRef.current);
      window.removeEventListener("scroll",resetTimer);
      window.removeEventListener("hover",resetTimer);
    
      window.removeEventListener("keyup",resetTimer);
      window.removeEventListener("click",resetTimer);
    };
  },[])

  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const pass = searchParams.get("pass");
  return (
    <div className="container">


      <div className="left-container" style={{ border: "1px solid black", borderRadius: "5px" }}>
        <h2 style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px", fontSize: "28px" }}>My Dashborad</h2>

        <Sidebar />
      </div>

      <div style={{ backgroundColor: "#ffffff", width: "90%" }} className="right-container">
        <Sidebarpart name={name} pass={pass} />
      </div>


    </div>
  );
}