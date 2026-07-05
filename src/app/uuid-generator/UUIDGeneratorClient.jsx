"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UUIDGeneratorClient() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    setUuid(crypto.randomUUID());
  };

  const copyUUID = async () => {
    try {
      await navigator.clipboard.writeText(uuid);
      alert("Copied!");
    } catch {
      alert("Failed to copy UUID.");
    }
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>UUID Generator</h1>

        <p>
          Generate secure random UUID v4 identifiers instantly.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>🆔 UUID Generator</h2>

          <div className="result-box">

            <span>
              {uuid || "Click Generate UUID"}
            </span>

            {uuid && (
              <button
                className="copy-btn"
                onClick={copyUUID}
              >
                📋
              </button>
            )}

          </div>

          <button
            className="main-btn"
            onClick={generateUUID}
          >
            Generate UUID
          </button>

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>What is a UUID?</h2>

        <p>
          A UUID (Universally Unique Identifier) is a 128-bit identifier
          designed to be globally unique. UUIDs are commonly used in
          databases, APIs, distributed systems and software applications to
          uniquely identify records and resources.
        </p>

        <h2>Why Use This UUID Generator?</h2>

        <p>
          CyberTools generates Version 4 (UUID v4) identifiers using your
          browser's cryptographically secure random number generator. No data
          is sent to any server, making the tool fast and privacy-friendly.
        </p>

        <h2>How to Use</h2>

        <ul>
          <li>Click the <strong>Generate UUID</strong> button.</li>
          <li>A new UUID v4 is created instantly.</li>
          <li>Copy it with one click.</li>
          <li>Use it in your application, API or database.</li>
        </ul>

        <h2>Common Uses</h2>

        <ul>
          <li>Database primary keys.</li>
          <li>REST API resource identifiers.</li>
          <li>Authentication and session tokens.</li>
          <li>Distributed systems.</li>
          <li>Software testing and development.</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}