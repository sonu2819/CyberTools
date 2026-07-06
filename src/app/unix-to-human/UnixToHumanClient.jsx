"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UnixToHumanClient() {
  const [timestamp, setTimestamp] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError("");
    setResult("");

    if (!timestamp) return;

    try {
      const num = Number(timestamp);

      if (isNaN(num)) {
        setError("Please enter a valid Unix timestamp");
        return;
      }

      // auto detect seconds vs milliseconds
      const date =
        num.toString().length > 10
          ? new Date(num)
          : new Date(num * 1000);

      setResult(date.toLocaleString());
    } catch (err) {
      setError("Invalid timestamp");
    }
  };

  const getCurrent = () => {
    setTimestamp(Math.floor(Date.now() / 1000));
    setResult("");
    setError("");
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Unix Timestamp Converter</h1>
        <p>Convert Unix time to human readable date instantly in your browser.</p>
      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>⏱️ Unix to Human Time</h2>

          <input
            type="text"
            placeholder="Enter Unix timestamp (e.g. 1700000000)"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />

          <div className="btn-row">
            <button className="main-btn" onClick={convert}>
              Convert
            </button>

            <button className="main-btn" onClick={getCurrent}>
              Current Time
            </button>
          </div>

          {error && (
            <div className="result-box">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}

          {result && (
            <div className="result-box">
              <div className="result-header">
                <h3>Result</h3>
              </div>

              <p>{result}</p>
            </div>
          )}

        </div>

      </section>

      {/* INFO */}
      {/* INFO */}
<section className="info-section">

  <h2>What is Unix Timestamp?</h2>

  <p>
    A Unix timestamp (also called Epoch time) represents the number of seconds
    that have passed since January 1, 1970 (UTC). It is widely used in programming,
    APIs, databases, and server systems to store and transfer time in a universal format.
  </p>

  <h2>Why Use CyberTools Unix Converter?</h2>

  <ul>
    <li>Convert Unix timestamp to human readable date instantly</li>
    <li>Works completely in your browser (no server required)</li>
    <li>Supports both seconds and milliseconds format</li>
    <li>Useful for developers, students, and data analysts</li>
    <li>Fast, free, and secure tool</li>
    <li>No registration or installation needed</li>
  </ul>

  <h2>How to Use Unix Timestamp Converter</h2>

  <ol>
    <li>Enter a Unix timestamp value in the input box</li>
    <li>Click on the “Convert” button</li>
    <li>View the human readable date instantly</li>
    <li>Or click “Current Time” to get live timestamp conversion</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What is Unix time used for?</h3>
  <p>
    Unix time is used in operating systems, APIs, logging systems, and databases
    to store time in a consistent numeric format across all platforms.
  </p>

  <h3>What is the difference between seconds and milliseconds?</h3>
  <p>
    Unix timestamps can be stored in seconds (10 digits) or milliseconds (13 digits).
    This tool automatically detects and converts both formats.
  </p>

  <h3>Is this tool accurate?</h3>
  <p>
    Yes. The conversion uses JavaScript’s built-in Date object, ensuring accurate
    and real-time conversion in your browser.
  </p>

  <h3>Is my data stored?</h3>
  <p>
    No. All conversions are performed locally in your browser. No data is sent
    to any server.
  </p>

</section>

      <Footer />

    </main>
  );
}