import { useState } from "react";
import "../App.css";

// Simple MD5 library (frontend-safe, no backend)
import md5 from "blueimp-md5";

export default function HashGenerator() {
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
      md5: md5(text), // ⚠️ MD5 (legacy, not secure)
      sha1: bufferToHex(sha1Buffer),
      sha256: bufferToHex(sha256Buffer),
    });

    setLoading(false);
  };

  return (
    <div className="app tool-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">⚡ CyberTools</div>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

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

          <button className="main-btn" onClick={generateHash}>
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
      <section className="info-section">

        <h2>What is Hashing?</h2>
        <p>
          Hashing converts data into a fixed-length fingerprint. It is used for
          password storage, file verification, and cybersecurity analysis.
        </p>

        <h2>Note</h2>
        <p>
          MD5 is a legacy hashing algorithm and is not secure for modern systems.
          It is included only for educational purposes.
        </p>

      </section>

      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}