import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

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
    <><Helmet>

  <title>
    JSON Formatter - CyberTools
  </title>

  <meta
    name="description"
    content="Format and validate JSON instantly online using CyberTools free JSON formatter."
  />

  <meta
    name="keywords"
    content="json formatter, json beautifier, format json online, validate json"
  />

</Helmet>

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



      {/* INFO SECTION */}
<section className="info-section">

  <h2>
    What is JSON Formatter?
  </h2>

  <p>
    JSON Formatter helps developers format and validate JSON data
    for better readability and debugging.
  </p>

  <h2>
    Why Use This JSON Formatter?
  </h2>

  <p>
    This free online JSON formatter instantly beautifies JSON code
    and helps detect invalid JSON structure or syntax errors.
  </p>

  <h2>
    How to Use
  </h2>

  <ul>

    <li>
      Paste your JSON data into the input field
    </li>

    <li>
      Click the Format button
    </li>

    <li>
      View formatted and validated JSON instantly
    </li>

  </ul>

</section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div></>
  );
}