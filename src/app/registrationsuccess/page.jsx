"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "./style.css";

function CheckEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  return (
    <main className="email-page">
      <div className="email-card">
        <div className="email-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
            <circle cx="18" cy="17" r="5" fill="#ffffff" />
            <path d="m16 17 1.5 1.5L20 16" />
          </svg>
        </div>

        <span className="email-badge">
          Registration Successful
        </span>

        <h1>Please Check Your Email</h1>

        <p className="email-description">
          Thank you for registering! We’re glad to have you here.
          Please check your inbox for an email from us to verify
          your account and complete the registration process.
        </p>

        {email && (
          <div className="email-address">
            <span className="email-address-label">
              Verification email sent to
            </span>
            <strong>{email}</strong>
          </div>
        )}

        <div className="email-notice">
          <span className="notice-icon">i</span>
          <p>
            Can’t find the email? Check your spam or junk folder.
          </p>
        </div>

        <button
          className="login-button"
          onClick={() => router.push("/login")}
        >
          Back to Login
          <span aria-hidden="true">→</span>
        </button>

        <p className="email-footer">
          Need help? Please contact our support team.
        </p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </main>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="email-page">
          <div className="email-card">Loading...</div>
        </main>
      }
    >
      <CheckEmailContent />
    </Suspense>
  );
}
