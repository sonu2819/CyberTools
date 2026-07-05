"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JSONFormatterClient() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(text);
      setResult(JSON.stringify(parsed, null, 2));
    } catch {
      setResult("Invalid JSON");
    }
  };

  const clearJSON = () => {
    setText("");
    setResult("");
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>Free JSON Formatter Online</h1>

        <p>
          Beautify, format, and validate JSON instantly with CyberTools.
          Fix errors and improve readability in seconds.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>📦 JSON Formatter & Validator</h2>

          <textarea
            placeholder="Paste your JSON here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="btn-row">

            <button
              className="main-btn"
              onClick={formatJSON}
            >
              Format JSON
            </button>

            <button
              className="main-btn"
              onClick={clearJSON}
            >
              Clear
            </button>

          </div>

          {result && (
            <pre className="output">
              {result}
            </pre>
          )}

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>What is a JSON Formatter?</h2>

        <p>
          A JSON formatter is a free online tool that helps developers
          format, beautify, and validate JSON data. It improves readability
          and helps find syntax errors quickly.
        </p>

        <h2>Why Use This Free JSON Formatter?</h2>

        <p>
          CyberTools JSON formatter helps you clean and organize JSON data
          instantly. It is useful for developers working with APIs,
          databases, and web applications.
        </p>

        <h2>How to Use JSON Formatter Online</h2>

        <ul>
          <li>Paste your JSON data into the input box.</li>
          <li>Click the <strong>Format JSON</strong> button.</li>
          <li>View clean, readable formatted JSON instantly.</li>
        </ul>

        <h2>Features of JSON Formatter</h2>

        <ul>
          <li>Free and instant JSON formatting.</li>
          <li>Detects invalid JSON errors.</li>
          <li>Improves readability of complex JSON.</li>
          <li>Works entirely in your browser.</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}