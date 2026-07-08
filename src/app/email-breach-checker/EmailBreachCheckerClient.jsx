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
  if (!email.trim()) return;

  setLoading(true);
  setError("");
  setResult(null);

  try {
    const res = await fetch(
      `https://api.xposedornot.com/v1/check-email/${encodeURIComponent(email)}`
    );

    const data = await res.json();

    // Success
    if (data.status === "success") {
      setResult(data);
    }
    // No breach found
    else {
      setError("No breach found for this email.");
    }

  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  // Normalize breaches into an array
  const getBreaches = () => {
    if (!result) return [];

    let value = result.breaches;

    if (!value) return [];

    // Nested array
    if (Array.isArray(value) && Array.isArray(value[0])) {
      value = value[0];
    }

    // Single string inside array
    if (
      Array.isArray(value) &&
      value.length === 1 &&
      typeof value[0] === "string"
    ) {
      value = value[0];
    }

    // Comma separated string
    if (typeof value === "string") {
      return value
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);
    }

    // Normal array
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === "string") return item;

        if (typeof item === "object") {
          return (
            item.breach ||
            item.name ||
            item.breach_name ||
            JSON.stringify(item)
          );
        }

        return String(item);
      });
    }

    return [];
  };

  const breaches = getBreaches();

  return (
    <main className="app tool-page">
      <Navbar />

      <section className="hero">
        <h1>Free Email Breach Checker</h1>
        <p>
          Check whether your email address has appeared in known data breaches.
        </p>
      </section>

      <section className="layout">
        <div className="card">
          <h2>📧 Email Breach Checker</h2>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkEmail()}
          />

          <button
            className="main-btn"
            onClick={checkEmail}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Email"}
          </button>

          {error && (
            <div className="result-box error">
              {error}
            </div>
          )}

          {result && (
  <div className="email-breach-result">

    <h3 className="email-breach-title">
      🚨 Email Found in Breaches
    </h3>

    <div className="email-breach-info">
      <span>Email</span>
      <strong>{result.email}</strong>
    </div>

    <div className="email-breach-info">
      <span>Total Breaches</span>
      <strong>{breaches.length}</strong>
    </div>

    <h4 className="email-breach-subtitle">
      Affected Websites
    </h4>

    <div className="email-breach-grid">
      {breaches.map((breach, index) => (
        <div
          className="email-breach-card"
          key={index}
          title={breach}
        >
          {breach.replace(/([a-z])([A-Z])/g, "$1 $2")}
        </div>
      ))}
    </div>

  </div>
)}
        </div>
      </section>

      <Footer />
    </main>
  );
}