import { useState } from "react";
import "../App.css";

export default function Base64() {

  const [text, setText] =
    useState("");

  const [result, setResult] =
    useState("");

  const encode = () => {

    setResult(
      btoa(text)
    );

  };

  const decode = () => {

    try {

      setResult(
        atob(text)
      );

    } catch {

      setResult(
        "Invalid Base64"
      );

    }

  };

  const clearText = () => {

    setText("");
    setResult("");

  };

  return (

    <div className="app tool-page">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          ⚡ CyberTools
        </div>

        <nav>
          <a href="/">Home</a>
        </nav>

      </header>

      {/* HERO */}
      <section className="hero">

        <h1>
          Base64 Tool
        </h1>

        <p>
          Encode and decode Base64 text online
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🔄 Base64 Tool
          </h2>

          <textarea
            placeholder="Enter text..."
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
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

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}