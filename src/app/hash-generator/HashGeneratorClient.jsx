"use client";

import { useState } from "react";
import md5 from "blueimp-md5";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HashGeneratorClient() {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState({
    md5: "",
    sha1: "",
    sha256: "",
  });
  const [loading, setLoading] = useState(false);

  const bufferToHex = (buffer) => {
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const generateHash = async () => {
    if (!text) return;

    setLoading(true);

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // SHA-1
    const sha1Buffer = await crypto.subtle.digest("SHA-1", data);

    // SHA-256
    const sha256Buffer = await crypto.subtle.digest("SHA-256", data);

    setHashes({
      md5: md5(text),
      sha1: bufferToHex(sha1Buffer),
      sha256: bufferToHex(sha256Buffer),
    });

    setLoading(false);
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>Hash Generator</h1>

        <p>
          Generate MD5, SHA-1 and SHA-256 hashes instantly in your browser.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>🔐 Generate Hash</h2>

          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="main-btn"
            onClick={generateHash}
          >
            {loading ? "Generating..." : "Generate Hash"}
          </button>

          {hashes.md5 && (
            <div className="result-box">
              <p><b>MD5:</b></p>
              <p>{hashes.md5}</p>
            </div>
          )}

          {hashes.sha1 && (
            <div className="result-box">
              <p><b>SHA-1:</b></p>
              <p>{hashes.sha1}</p>
            </div>
          )}

          {hashes.sha256 && (
            <div className="result-box">
              <p><b>SHA-256:</b></p>
              <p>{hashes.sha256}</p>
            </div>
          )}

        </div>

      </section>

      {/* INFO */}
      {/* INFO */}
<section className="info-section">

  <h2>What is Hashing?</h2>

  <p>
    Hashing is a process that converts input data (text, passwords, files, etc.)
    into a fixed-length string using cryptographic algorithms. This output is
    called a hash and is widely used in cybersecurity, data verification, and
    password storage systems.
  </p>

  <h2>Why Use CyberTools Hash Generator?</h2>

  <ul>
    <li>Generate MD5, SHA-1, and SHA-256 hashes instantly</li>
    <li>Works completely in your browser (no server upload)</li>
    <li>Fast and secure client-side processing</li>
    <li>Useful for developers, students, and security testing</li>
    <li>No registration or installation required</li>
    <li>100% free to use</li>
  </ul>

  <h2>How to Use Hash Generator</h2>

  <ol>
    <li>Enter any text in the input box</li>
    <li>Click on “Generate Hash” button</li>
    <li>View MD5, SHA-1 and SHA-256 results instantly</li>
    <li>Copy hashes for your development or testing use</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What is a hash used for?</h3>
  <p>
    Hashes are used for password storage, file integrity verification, digital
    signatures, and security validation in software systems.
  </p>

  <h3>Is MD5 secure?</h3>
  <p>
    No. MD5 is considered outdated and insecure for cryptographic purposes.
    It is included here only for compatibility and educational use.
  </p>

  <h3>Are my inputs stored?</h3>
  <p>
    No. All hashing is performed locally in your browser. Your data is never
    sent to any server.
  </p>

  <h3>Which hash algorithm is best?</h3>
  <p>
    SHA-256 is currently considered the most secure among the options provided
    in this tool.
  </p>

</section>

      <Footer />

    </main>
  );
}