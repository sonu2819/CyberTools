import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function URLEncoderDecoder() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeText = () => {
    setOutput(
      encodeURIComponent(input)
    );
  };

  const decodeText = () => {
    try {
      setOutput(
        decodeURIComponent(input)
      );
    } catch {
      setOutput(
        "Invalid encoded URL"
      );
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(
      output
    );

    alert("Copied!");
  };

  return (
    <>
      <Helmet>

        <title>
          URL Encoder Decoder - CyberTools
        </title>

        <meta
          name="description"
          content="Encode and decode URLs instantly with CyberTools free URL Encoder Decoder tool."
        />

        <meta
          name="keywords"
          content="url encoder, url decoder, encode url, decode url, cybertools"
        />

      </Helmet>

      <div className="app tool-page">

        <header className="navbar">

          <div className="logo">
            ⚡ CyberTools
          </div>

          <nav>
            <a href="/">
              Home
            </a>
          </nav>

        </header>

        <section className="hero">

          <h1>
            URL Encoder / Decoder
          </h1>

          <p>
            Encode and decode URLs instantly
          </p>

        </section>

        <section className="layout">

          <div className="card">

            <h2>
              🔗 URL Encoder / Decoder
            </h2>

            <textarea
              className="text-input"
              rows="5"
              placeholder="Enter text or encoded URL..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px"
              }}
            >

              <button
                className="main-btn"
                onClick={encodeText}
              >
                Encode
              </button>

              <button
                className="main-btn"
                onClick={decodeText}
              >
                Decode
              </button>

            </div>

            {output && (

              <div
                className="result-box"
                style={{
                  marginTop: "20px"
                }}
              >

                <span>
                  {output}
                </span>

                <button
                  className="copy-btn"
                  onClick={copyOutput}
                >
                  📋
                </button>

              </div>

            )}

          </div>

        </section>

        <section className="info-section">

          <h2>
            What is URL Encoding?
          </h2>

          <p>
            URL encoding converts special characters,
            spaces, and symbols into a format that can
            safely be transmitted in URLs.
          </p>

          <h2>
            Common Use Cases
          </h2>

          <ul>

            <li>
              API testing
            </li>

            <li>
              Bug bounty hunting
            </li>

            <li>
              Query parameter testing
            </li>

            <li>
              Web development
            </li>

          </ul>

        </section>

        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>

    </>
  );
}