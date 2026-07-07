"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegexTesterClient() {

  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");

  const [flags, setFlags] = useState({
    g: true,
    i: false,
    m: false,
    s: false,
    u: false,
    y: false,
  });

  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  const toggleFlag = (flag) => {
    setFlags((prev) => ({
      ...prev,
      [flag]: !prev[flag],
    }));
  };

  const testRegex = () => {

    setError("");

    try {

      const activeFlags = Object.keys(flags)
        .filter((key) => flags[key])
        .join("");

      const regex = new RegExp(pattern, activeFlags);

      const result = text.match(regex);

      setMatches(result || []);

    } catch (err) {

      setMatches([]);
      setError(err.message);

    }

  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}

      <section className="hero">

        <h1>Free Regex Tester</h1>

        <p>
          Test and debug JavaScript regular expressions instantly in your browser.
        </p>

      </section>

      {/* TOOL */}

      <section className="layout">

        <div className="card">

          <h2>🧪 Regex Tester</h2>

          <label>Regular Expression</label>

          <input
            type="text"
            placeholder="Example: \\d+"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />

          <br />
          <br />

          <label>Regex Flags</label>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >

           <div className="regex-flags">
  {[
    { key: "g", label: "Global" },
    { key: "i", label: "Ignore Case" },
    { key: "m", label: "Multiline" },
    { key: "s", label: "Dot All" },
    { key: "u", label: "Unicode" },
    { key: "y", label: "Sticky" },
  ].map(({ key, label }) => (
    <label className="flag-item" key={key}>
      <input
        type="checkbox"
        checked={flags[key]}
        onChange={() => toggleFlag(key)}
      />
      <span>{label}</span>
      <small>({key})</small>
    </label>
  ))}
</div>

          </div>

          <label>Test Text</label>

          <textarea
            rows="8"
            placeholder="Enter text to test..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <br />
          <br />

          <button
            className="main-btn"
            onClick={testRegex}
          >
            Test Regex
          </button>

          {error && (

            <div className="regex-result">

              <h3>Error</h3>

              <p>{error}</p>

            </div>

          )}

          {!error && (

           <div className="regex-result">

  <div className="result-header">

    <h3>Results</h3>

    <span>
      <strong>Total Matches:</strong> {matches.length}
    </span>

  </div>

  {matches.length > 0 ? (

    <ul className="result-list">

      {matches.map((match, index) => (

        <li key={index}>{match}</li>

      ))}

    </ul>

  ) : (

    <p>No matches found.</p>

  )}

</div>
          )}

        </div>

      </section>

      {/* INFO */}

      <section className="info-section">

        <h2>What is a Regex Tester?</h2>

        <p>
          A Regex Tester lets you test JavaScript regular expressions against
          any text instantly. It helps developers validate patterns for email
          addresses, phone numbers, URLs, passwords, dates and much more.
        </p>

        <h2>Why Use CyberTools Regex Tester?</h2>

        <ul>
          <li>Test regular expressions instantly</li>
          <li>Supports JavaScript regex flags</li>
          <li>Shows all matching results</li>
          <li>No registration required</li>
          <li>Runs entirely in your browser</li>
          <li>Free to use</li>
          <li>Fast and secure</li>
        </ul>

        <h2>How to Use</h2>

        <ol>
          <li>Enter your regex pattern.</li>
          <li>Select the desired regex flags.</li>
          <li>Paste or type your test text.</li>
          <li>Click <strong>Test Regex</strong>.</li>
          <li>View all matching results instantly.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>

        <h3>What is Regex?</h3>

        <p>
          Regex (Regular Expression) is a pattern used to search, validate,
          extract and replace text.
        </p>

        <h3>Does this support JavaScript Regex?</h3>

        <p>
          Yes. This tool uses the built-in JavaScript RegExp engine.
        </p>

        <h3>Are my patterns uploaded?</h3>

        <p>
          No. Everything runs locally in your browser.
        </p>

        <h3>Is this tool free?</h3>

        <p>
          Yes. CyberTools Regex Tester is completely free.
        </p>

      </section>

      <Footer />

    </main>
  );
}