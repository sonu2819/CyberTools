import { useState } from "react";
import "../App.css";

export default function JSONFormatter() {

  const [text, setText] =
    useState("");

  const [result, setResult] =
    useState("");

  const formatJSON = () => {

    try {

      const parsed =
        JSON.parse(text);

      setResult(
        JSON.stringify(
          parsed,
          null,
          2
        )
      );

    } catch {

      setResult(
        "Invalid JSON"
      );

    }

  };

  const clearJSON = () => {

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
          JSON Formatter
        </h1>

        <p>
          Format and validate JSON instantly
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            📦 JSON Formatter
          </h2>

          <textarea
            placeholder="Paste JSON..."
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <div className="btn-row">

            <button
              onClick={formatJSON}
            >
              Format JSON
            </button>

            <button
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

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}