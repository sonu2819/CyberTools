import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function JSONFormatter() {
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
    <>
      <Helmet>
        <title>
          Free JSON Formatter Online | Beautify & Validate JSON Instantly | CyberTools
        </title>

        <meta
          name="description"
          content="Format, beautify and validate JSON online instantly. Free JSON formatter tool by CyberTools for developers to debug and clean JSON data easily."
        />

        <meta
          name="keywords"
          content="json formatter online, json beautifier, free json formatter, format json online, validate json online, json validator tool, prettify json"
        />
      </Helmet>

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
              <button onClick={formatJSON}>Format JSON</button>
              <button onClick={clearJSON}>Clear</button>
            </div>

            {result && (
              <pre className="output">{result}</pre>
            )}

          </div>
        </section>

        {/* INFO SECTION (SEO BOOST - IMPORTANT) */}
        <section className="info-section">

          <h2>What is a JSON Formatter?</h2>
          <p>
            A JSON formatter is a free online tool that helps developers
            format, beautify, and validate JSON data. It improves readability
            and helps find syntax errors quickly.
          </p>

          <h2>Why Use This Free JSON Formatter?</h2>
          <p>
            CyberTools JSON formatter helps you clean and organize JSON data instantly.
            It is useful for developers working with APIs, databases, and web applications.
          </p>

          <h2>How to Use JSON Formatter Online</h2>
          <ul>
            <li>Paste your JSON data into the input box</li>
            <li>Click on “Format JSON” button</li>
            <li>View clean, readable formatted JSON instantly</li>
          </ul>

          <h2>Features of JSON Formatter</h2>
          <ul>
            <li>Free and instant JSON formatting</li>
            <li>Detects invalid JSON errors</li>
            <li>Improves readability of complex JSON</li>
            <li>Works online without installation</li>
          </ul>

        </section>

        {/* FOOTER */}
        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>
    </>
  );
}