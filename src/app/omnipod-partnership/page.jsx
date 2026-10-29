"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";

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
    <main className="verify-page">
      <div className="verify-decoration decoration-one" />
      <div className="verify-decoration decoration-two" />

      <section className="verify-card">
        {/* Brand header */}
        <header className="verify-header">
          <div className="verify-brand-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7.5L12 13L20 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <div className="verify-brand-text">
            <span className="verify-brand-title">
              Account Verification
            </span>
            <span className="verify-brand-subtitle">
              Secure account activation
            </span>
          </div>

          <div className="verify-security-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3L19 6V11C19 15.5 16.1 19 12 21C7.9 19 5 15.5 5 11V6L12 3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </header>

        <div className="verify-content">
          {loading ? (
            <>
              <div className="verify-visual loading-visual">
                <div className="verify-spinner" />
                <div className="verify-visual-inner">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 7L12 13L20 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <span className="verify-eyebrow">
                EMAIL CONFIRMATION
              </span>

              <h1>Verifying Your Email</h1>

              <p className="verify-description">
                We're confirming your email address to help
                keep your account secure. This process will
                only take a moment.
              </p>

              <div className="verify-progress">
                <span className="progress-dot active" />
                <span className="progress-line" />
                <span className="progress-dot" />
                <span className="progress-line" />
                <span className="progress-dot" />
              </div>

              <p className="verify-progress-label">
                Securely processing your verification request
              </p>
            </>
          ) : error ? (
            <>
              <div className="verify-visual error-visual">
                <div className="verify-status-icon">!</div>
              </div>

              <span className="verify-eyebrow error-eyebrow">
                ACTION REQUIRED
              </span>

              <h1>Verification Unsuccessful</h1>

              <p className="verify-description">
                {error}
              </p>

              <div className="verify-notice error-notice">
                <div className="notice-icon">i</div>
                <div>
                  <strong>What can you do?</strong>
                  <p>
                    Check that your verification link is
                    correct and has not expired. If the
                    problem continues, request a new
                    verification email.
                  </p>
                </div>
              </div>

              {responseData !== null && (
                <div className="response-box">
                  <h3>Technical Details</h3>
                  <pre>{responseMessage}</pre>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="verify-visual success-visual">
                <div className="verify-status-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5L10 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <span className="verify-eyebrow success-eyebrow">
                VERIFICATION COMPLETE
              </span>

              <h1>Email Verified Successfully!</h1>

              <p className="verify-description">
                {responseMessage ||
                  "Your email verification process has been completed."}
              </p>

              <div className="verify-notice success-notice">
                <div className="notice-icon">✓</div>
                <div>
                  <strong>Your email has been confirmed</strong>
                  <p>
                    Thank you for completing this important
                    step in securing your account.
                  </p>
                </div>
              </div>

              <div className="verify-next-step">
                <span className="next-step-number">01</span>
                <div>
                  <strong>You're all set</strong>
                  <p>
                    You can continue with the next step of
                    your account journey.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <footer className="verify-footer">
          <div className="footer-lock">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="5"
                y="10"
                width="14"
                height="11"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M8 10V7.5C8 5.3 9.8 3.5 12 3.5C14.2 3.5 16 5.3 16 7.5V10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p>
            Your privacy and security matter to us.
            <span>
              Protected verification · Secure account access
            </span>
          </p>
        </footer>
      </section>

      <p className="verify-copyright">
        A safer sign-in experience starts here.
      </p>
    </main>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense
      fallback={
        <main className="verify-page">
          <section className="verify-card">
            <div className="verify-content">
              <div className="verify-spinner" />
              <h1>Loading Verification Page</h1>
              <p className="verify-description">
                Preparing your secure verification page.
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