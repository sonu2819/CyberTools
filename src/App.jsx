import { useState } from "react";
import "./App.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);

  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const [ip, setIp] = useState("");

  // PASSWORD GENERATOR
  const generatePassword = () => {
    let chars = "";

    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "@#$!%&*";

    // FIX
    if (!chars) {
      alert("Select at least one option");
      return;
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  };

  // COPY
  const copyText = (value) => {
    if (!value) return;

    navigator.clipboard.writeText(value);
    alert("Copied!");
  };

  // BASE64
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

  // IP
  const getIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setIp(data.ip);
    } catch {
      setIp("Failed to fetch IP");
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">⚡ CyberTools</div>

        <nav>
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Free Cyber Tools</h1>
        <p>Fast utilities for developers & students</p>
      </section>

      {/* MAIN */}
      <section id="tools" className="layout">

        {/* LEFT */}
        <div className="left">

          {/* PASSWORD */}
          <div className="card big-card">

            <h2>🔑 Password Generator</h2>

            {/* SLIDER */}
            <div className="slider-box">
              <label>Password Length: {length}</label>

              <input
                type="range"
                min="6"
                max="32"
                value={length}
                onChange={(e) =>
                  setLength(Number(e.target.value))
                }
              />
            </div>

            {/* CHECKBOXES */}
            <div className="checks">

              <label>
                <input
                  type="checkbox"
                  checked={useUpper}
                  onChange={() => setUseUpper(!useUpper)}
                />
                A-Z
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={useLower}
                  onChange={() => setUseLower(!useLower)}
                />
                a-z
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                />
                0-9
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
                />
                Symbols
              </label>

            </div>

            {/* RESULT */}
            <div className="result-box">

              <span>
                {password || "Generate password..."}
              </span>

              <button
                className="copy-btn"
                onClick={() => copyText(password)}
              >
                📋
              </button>

            </div>

            {/* BUTTON */}
            <button
              className="main-btn"
              onClick={generatePassword}
            >
              Generate Password
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="right">

          {/* BASE64 */}
          <div className="card">

            <h2>🔄 Base64 Tool</h2>

            <textarea
              placeholder="Enter text to encode/decode..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="btn-row">
              <button onClick={encode}>Encode</button>
              <button onClick={decode}>Decode</button>
              <button onClick={clearText}>Clear</button>
            </div>

            {result && (
              <div className="output">{result}</div>
            )}

          </div>

          {/* IP */}
          <div className="card">

            <h2>🌐 IP Checker</h2>

            <div className="ip-box">

              <span>
                {ip || "Check your IP address"}
              </span>

              {ip && (
                <button
                  className="copy-btn"
                  onClick={() => copyText(ip)}
                >
                  📋
                </button>
              )}

            </div>

            <button onClick={getIP}>
              Check My IP
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      {/* <footer id="about" className="footer">
        Built for fast daily use ⚡
      </footer> */}

      <section id="about" className="about-section">

  <h2>About CyberTools</h2>

  <p>
    CyberTools is a fast and free collection of online utilities
    built for developers, students, and everyday users.
  </p>

  <div className="about-grid">

    <div className="about-card">
      ⚡ Fast Performance
    </div>

    <div className="about-card">
      🔒 Privacy Friendly
    </div>

    <div className="about-card">
      🛠 Simple Tools
    </div>

  </div>

</section>

    </div>
  );
}