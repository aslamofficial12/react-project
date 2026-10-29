"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "./style.css";
import Header from "../../components/Header/Header";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function verifyEmail() {
      if (!token) {
        setError("Verification token is missing.");
        setResponseData(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      setResponseData(null);

      try {
        const response = await fetch("/api/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
          cache: "no-store",
        });

        const contentType =
          response.headers.get("content-type") || "";

        let data;

        if (contentType.includes("application/json")) {
          data = await response.json();
        } else {
          data = await response.text();
        }

        if (cancelled) return;

        setResponseData(data);

        if (!response.ok) {
          const message =
            typeof data === "object" && data !== null
              ? data.message || "Email verification failed."
              : data || "Email verification failed.";

          setError(String(message));
        } else if (
          typeof data === "object" &&
          data !== null &&
          data.success === false
        ) {
          setError(
            data.message || "Email verification failed."
          );
        }
      } catch (err) {
        console.error("Verification error:", err);

        if (cancelled) return;

        setError(
          "Unable to connect to the server. Please try again."
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    verifyEmail();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const responseMessage =
    typeof responseData === "string"
      ? responseData
      : responseData?.message ||
        (responseData !== null
          ? JSON.stringify(responseData, null, 2)
          : "");

  return (
    <>
    <Header />


    
    <main className="verify-page">
      <div className="verify-decoration decoration-one" />
      <div className="verify-decoration decoration-two" />

      <section className="verify-card">
        <div className="verify-brand">
          <span>ACCOUNT VERIFICATION</span>
        </div>

        <div className="verify-content">
          {loading ? (
            <>
              <div className="verify-illustration loading-illustration">
                <div className="verify-spinner" />
                <span className="illustration-dot dot-one" />
                <span className="illustration-dot dot-two" />
              </div>

              <span className="verify-eyebrow">
                JUST A MOMENT
              </span>

              <h1>Verifying Your Email</h1>

              <p className="verify-description">
                We&apos;re checking your verification link.
                Please wait a moment while we confirm your
                email address and complete the process.
              </p>

              <div className="verify-progress">
                <span />
              </div>

              <p className="verify-note">
                Please keep this page open while verification
                is in progress.
              </p>
            </>
          ) : error ? (
            <>
              <div className="verify-illustration error-illustration">
                <div className="verify-icon error-icon">!</div>
              </div>

              <span className="verify-eyebrow error-eyebrow">
                VERIFICATION UNSUCCESSFUL
              </span>

              <h1>Email Verification Failed</h1>

              <p className="verify-description">
                We couldn&apos;t verify your email address.
                Your verification link may be invalid, expired,
                or there may be a temporary connection issue.
              </p>

              <div className="verify-status error-status">
                <span className="status-indicator" />
                <p>{error}</p>
              </div>

              {responseData !== null && (
                <details className="response-box">
                  <summary>View server response</summary>
                  <pre>{responseMessage}</pre>
                </details>
              )}

              <p className="verify-help">
                Please check your verification link or try
                again later. If the problem continues, contact
                support.
              </p>
            </>
          ) : (
            <>
              <div className="verify-illustration success-illustration">
                <div className="verify-icon success-icon">
                  ✓
                </div>
                <span className="success-sparkle sparkle-one">
                  ✦
                </span>
                <span className="success-sparkle sparkle-two">
                  ✧
                </span>
              </div>

              <span className="verify-eyebrow success-eyebrow">
                VERIFICATION RESPONSE
              </span>

              <h1>Email Verification Response</h1>

              <p className="verify-description">
                Your verification request has been processed.
                Please review the response below for the
                result of your email verification.
              </p>

              <div className="verify-status success-status">
                <span className="status-indicator" />
                <p>{responseMessage || "Request completed."}</p>
              </div>

              <div className="success-info">
                <span className="info-check">✓</span>
                <div>
                  <h3>What happens next?</h3>
                  <p>
                    If your email was successfully verified,
                    you can continue to the login page and
                    access your account.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="verify-actions">
          <Link href="/login" className="login-button">
            <span>Back to Login</span>
            <span className="button-arrow">→</span>
          </Link>

          <p className="login-caption">
            Already have an account? Sign in to continue.
          </p>
        </div>

        <footer className="verify-footer">
          <span className="footer-shield">✓</span>
          <span>Your account security matters to us.</span>
        </footer>
      </section>

      <p className="page-copyright">
        Secure account verification
      </p>
    </main>
    </>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense
      fallback={
        <main className="verify-page">
          <section className="verify-card">
            <div className="verify-brand">
              <div className="brand-mark">V</div>
              <span>ACCOUNT VERIFICATION</span>
            </div>

            <div className="verify-content">
              <div className="verify-spinner" />
              <h1>Loading Verification Page</h1>
              <p className="verify-description">
                Please wait while we prepare your verification
                details.
              </p>
            </div>
          </section>
        </main>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}
