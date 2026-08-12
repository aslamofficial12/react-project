// "use client";

// import { useEffect } from "react";
// import { CheckCircle } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import "./loginsucces.css";

// export default function LoginSuccessPage() {
//   const router = useRouter();
//     const searchParams = useSearchParams();

//   const name = searchParams.get("name");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       alert("session will expire no user interaction for 10 minutes");
//       router.push("/login");
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [router]);

// setTimeout(()=>{
// alert("session will expire no user interaction");
// },10000)

//   return (
//     <div className="success-container">
//       <div className="success-card">

//         <div className="icon-wrapper">
//           <CheckCircle className="success-icon" />
//         </div>

//         <h1>Login Successful! authorized user</h1>
//         <h3>welcome {name}</h3>

//         <p>
//           Welcome back! You have successfully logged into your account.
//         </p>

//         <button onClick={() => router.push("/login")}>
//           Go to Dashboard
//         </button>

//         <span>
//           Redirecting automatically...
//         </span>

//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginSuccessPage() {

  const router = useRouter();

  const timerRef = useRef(null);


  // Logout function
  function logout() {

    // Remove session
    sessionStorage.removeItem("isLoggedIn");

    // Remove username also
    sessionStorage.removeItem("username");


    clearTimeout(timerRef.current);


    alert("Session Expired!");


    router.push("/login");
  }



  // Start inactivity timer
  function startTimer() {

    timerRef.current = setTimeout(() => {

      logout();

    }, 10000); // 10 seconds

  }




  function resetTimer() {

    clearTimeout(timerRef.current);

    startTimer();

  }



  useEffect(() => {


    const session = sessionStorage.getItem("isLoggedIn");



    if (!session) {

      router.push("/login");

      return;

    }




    startTimer();



    window.addEventListener(
      "mousemove",
      resetTimer
    );

    window.addEventListener(
      "keydown",
      resetTimer
    );

    window.addEventListener(
      "click",
      resetTimer
    );

    window.addEventListener(
      "scroll",
      resetTimer
    );



    return () => {


      clearTimeout(timerRef.current);


      window.removeEventListener(
        "mousemove",
        resetTimer
      );

      window.removeEventListener(
        "keydown",
        resetTimer
      );

      window.removeEventListener(
        "click",
        resetTimer
      );

      window.removeEventListener(
        "scroll",
        resetTimer
      );


    };


  }, []);



  return (

    <div style={{ padding: "20px" }}>

      <h1>
        Login Successful ✅
      </h1>


      <p>
        Welcome back!
        <br />
        Your session will expire after 10 seconds of inactivity.
      </p>


      <button onClick={logout}>
        Logout
      </button>


    </div>

  );

}