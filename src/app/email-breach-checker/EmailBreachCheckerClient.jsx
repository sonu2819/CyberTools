"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EmailBreachCheckerClient() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const checkEmail = async () => {

    if (!email) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {

      const res = await fetch(
        `https://api.xposedornot.com/v1/check-email/${encodeURIComponent(email)}`
      );

      const data = await res.json();

      if (data.status === "success") {
        setResult(data);
      } else {
        setError("No breach found for this email.");
      }

    } catch {

      setError("Something went wrong. Please try again.");

    }

    setLoading(false);

  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}

      <section className="hero">

        <h1>Free Email Breach Checker</h1>

        <p>
          Check whether your email address has appeared in known data breaches.
        </p>

      </section>

      {/* TOOL */}

      <section className="layout">

        <div className="card">

          <h2>📧 Email Breach Checker</h2>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="main-btn"
            onClick={checkEmail}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Email"}
          </button>

          {error && (
            <div className="result-box">
              <p>{error}</p>
            </div>
          )}

          {result && (
            <div className="result-box">

              <h3>Email Found in Breaches</h3>

              <p>
                <strong>Email:</strong> {result.email}
              </p>

              <h4>Breaches</h4>

              <ul>

                {result.breaches[0].map((breach) => (
                  <li key={breach}>{breach}</li>
                ))}

              </ul>

            </div>
          )}

        </div>

      </section>

      {/* INFO */}

      <section className="info-section">

        <h2>What is an Email Breach Checker?</h2>

        <p>
          An Email Breach Checker lets you determine whether your email
          address has appeared in publicly known data breaches. If a website
          or service you used suffered a security incident, your email may
          have been exposed along with other personal information.
        </p>

        <h2>Why Use CyberTools?</h2>

        <ul>
          <li>Instant email breach lookup</li>
          <li>Powered by the XposedOrNot database</li>
          <li>No registration required</li>
          <li>Simple and easy to use</li>
          <li>Works on desktop and mobile devices</li>
          <li>Completely free</li>
          <li>Fast results</li>
          <li>Improve your online security awareness</li>
        </ul>

        <h2>How to Check an Email for Breaches</h2>

        <ol>
          <li>Enter your email address.</li>
          <li>Click <strong>Check Email</strong>.</li>
          <li>Wait a few seconds.</li>
          <li>Review whether your email appears in known breaches.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>

        <h3>Is this Email Breach Checker free?</h3>

        <p>
          Yes. You can check your email for known data breaches completely free.
        </p>

        <h3>Will my email be stored?</h3>

        <p>
          No. CyberTools does not store your email address. The lookup is
          performed using the XposedOrNot public API.
        </p>

        <h3>What should I do if my email is found?</h3>

        <p>
          Change passwords for affected accounts, enable two-factor
          authentication, and monitor your accounts for suspicious activity.
        </p>

        <h3>Does a breached email mean my account is hacked?</h3>

        <p>
          Not necessarily. It means your email appeared in a known breach.
          Changing passwords and enabling additional security measures is
          strongly recommended.
        </p>

      </section>

      <Footer />

    </main>
  );
}