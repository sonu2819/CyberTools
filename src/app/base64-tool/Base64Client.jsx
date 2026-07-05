"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Base64Client() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encode = () => {
    setResult(btoa(text));
  };

  const decode = () => {
    try {
      setResult(atob(text));
    } catch {
      setResult("Invalid Base64");
    }
  };

  const clearText = () => {
    setText("");
    setResult("");
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>Base64 Encoder & Decoder</h1>

        <p>
          Encode and decode Base64 text online instantly.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>🔄 Base64 Tool</h2>

          <textarea
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="btn-row">

            <button onClick={encode}>
              Encode
            </button>

            <button onClick={decode}>
              Decode
            </button>

            <button onClick={clearText}>
              Clear
            </button>

          </div>

          {result && (
            <div className="output">
              {result}
            </div>
          )}

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>
          What is Base64?
        </h2>

        <p>
          Base64 is an encoding method that converts binary or text data into
          ASCII characters. It is commonly used in APIs, email attachments,
          JSON Web Tokens (JWT), and data transmission.
        </p>

        <h2>
          Why Use This Base64 Tool?
        </h2>

        <p>
          This free online Base64 encoder and decoder lets you convert plain
          text to Base64 and decode Base64 back into readable text instantly.
          Everything runs locally in your browser for speed and privacy.
        </p>

        <h2>
          How to Use
        </h2>

        <ul>
          <li>Enter text or Base64 data.</li>
          <li>Click <strong>Encode</strong> to convert text into Base64.</li>
          <li>Click <strong>Decode</strong> to convert Base64 into plain text.</li>
          <li>Use <strong>Clear</strong> to reset the tool.</li>
        </ul>

        <h2>
          Common Uses of Base64
        </h2>

        <ul>
          <li>Encoding API credentials</li>
          <li>Working with JSON Web Tokens (JWT)</li>
          <li>Embedding images in HTML and CSS</li>
          <li>Email attachments (MIME)</li>
          <li>Transferring binary data as text</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}