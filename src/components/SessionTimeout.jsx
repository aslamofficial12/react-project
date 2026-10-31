
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SessionTimeout() {
  const router = useRouter();


  useEffect(() => {

    // 10 minutes = 600000 milliseconds
    const IDLE_TIME = 60 * 1000;

    let timer = null;
    let isLoggingOut = false;

    // Logout function
    async function logout() {

      // Multiple logout requests prevent pannum
      if (isLoggingOut) return;

      isLoggingOut = true;

      clearTimeout(timer);

      // Session ID retrieve panrom
      const sessionId = sessionStorage.getItem("sessionId");
        const token = sessionStorage.getItem("authToken");

      try {


        // Backend logout API call
        await fetch("/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            sessionId: sessionId,
          }),
        });

      } catch (error) {

        console.error("Logout API error:", error);

      } finally {

        // Browser storage clear panrom
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("sessionId");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("expires");
        sessionStorage.removeItem("lastActivityAt");

        // Other components-ku login status change inform panrom
        window.dispatchEvent(new Event("auth-change"));

        // Login page-ku redirect panrom
        router.replace("/login");
      }
    }


    // Timer start or reset panna function
    function startTimer() {

      clearTimeout(timer);

      // Stored authentication details retrieve panrom
      const token = sessionStorage.getItem("authToken");
      const sessionId = sessionStorage.getItem("sessionId");
      const expires = sessionStorage.getItem("expires");

      // Login pannala na timer start panna vendam
      if (!token || !sessionId || !expires) {
        return;
      }

      // Backend expiry date-ah timestamp-ah convert panrom
      const expiresAt = new Date(expires).getTime();

      // Invalid expiry date check
      if (!Number.isFinite(expiresAt)) {
        logout();
        return;
      }

      // Current time
      const now = Date.now();

      // Token remaining time
      const remainingTokenTime = expiresAt - now;

      // Last activity time retrieve panrom
      let lastActivity = Number(
        sessionStorage.getItem("lastActivityAt")
      );

      // First time monitor start aana current time set pannum
      if (!lastActivity) {
        lastActivity = now;
        sessionStorage.setItem("lastActivityAt", String(now));
      }

      // User inactive-ah irundha evlo time aachu
      const inactiveTime = now - lastActivity;

      // Remaining inactivity time
      const remainingIdleTime = IDLE_TIME - inactiveTime;

      // Token expire aagiruntha logout
      if (remainingTokenTime <= 0) {
        logout();
        return;
      }

      // 10 minutes inactivity complete aana logout
      if (remainingIdleTime <= 0) {
        logout();
        return;
      }

      // Rendu time-la ethu first varutho athai use panrom
      const nextCheck = Math.min(
        remainingIdleTime,
        remainingTokenTime
      );

      // Timer schedule panrom
      timer = setTimeout(() => {
        startTimer();
      }, nextCheck);
    }


    // User activity detect panna function
    function handleActivity() {

      // Logout process nadanthuttu iruntha ignore pannum
      if (isLoggingOut) return;

      const token = sessionStorage.getItem("authToken");

      // Login panniruntha mattum activity update pannum
      if (!token) return;

      // Current activity time store panrom
      sessionStorage.setItem(
        "lastActivityAt",
        String(Date.now())
      );

      // Inactivity timer reset panrom
      startTimer();
    }


    // Login success aana monitor restart aagum
    function handleAuthChange() {

      const token = sessionStorage.getItem("authToken");

      // Login details remove aagiruntha timer stop pannum
      if (!token) {
        clearTimeout(timer);
        return;
      }

      isLoggingOut = false;

      // Login time-ah first activity-ah set panrom
      sessionStorage.setItem(
        "lastActivityAt",
        String(Date.now())
      );

      startTimer();
    }


    // User activity events
    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    // Activity listeners add panrom
    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    // Login status change event listen panrom
    window.addEventListener(
      "auth-change",
      handleAuthChange
    );

    // Already login aagiruntha monitoring start pannum
    startTimer();


    // Component cleanup
    return () => {

      clearTimeout(timer);

      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });

      window.removeEventListener(
        "auth-change",
        handleAuthChange
      );
    };

  }, [router]);

  return null;
}
