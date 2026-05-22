import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

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
<><Helmet>

  <title>
    Base64 Encoder & Decoder - CyberTools
  </title>

  <meta
    name="description"
    content="Encode and decode Base64 text instantly online using CyberTools free Base64 tool."
  />

  <meta
    name="keywords"
    content="base64 encoder, base64 decoder, encode decode base64, online base64 tool"
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

      {/* INFO SECTION */}
<section className="info-section">

  <h2>
    What is Base64?
  </h2>

  <p>
    Base64 is an encoding method used to convert text or binary data
    into a readable text format. It is commonly used in APIs,
    authentication systems, and data transfer.
  </p>

  <h2>
    Why Use This Base64 Tool?
  </h2>

  <p>
    This free online Base64 tool allows you to encode and decode text
    instantly. It is useful for developers working with APIs,
    tokens, and encoded data.
  </p>

  <h2>
    How to Use
  </h2>

  <ul>

    <li>
      Enter text into the input field
    </li>

    <li>
      Click Encode to convert text into Base64
    </li>

    <li>
      Click Decode to convert Base64 back into readable text
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