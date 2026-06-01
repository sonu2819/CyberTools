import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decodeJWT = () => {
    try {
      const parts = token.split(".");

      if (parts.length < 2) {
        throw new Error("Invalid JWT");
      }

      const decode = (str) => {
        str = str.replace(/-/g, "+").replace(/_/g, "/");

        while (str.length % 4) {
          str += "=";
        }

        return JSON.parse(atob(str));
      };

      setHeader(
        JSON.stringify(
          decode(parts[0]),
          null,
          2
        )
      );

      setPayload(
        JSON.stringify(
          decode(parts[1]),
          null,
          2
        )
      );

      setError("");
    } catch {
      setHeader("");
      setPayload("");
      setError("Invalid JWT Token");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          JWT Decoder - CyberTools
        </title>

        <meta
          name="description"
          content="Decode JWT tokens instantly with CyberTools free JWT Decoder."
        />

        <meta
          name="keywords"
          content="jwt decoder, jwt parser, decode jwt token, jwt inspector"
        />
      </Helmet>

      <div className="app tool-page">

        <header className="navbar">
          <div className="logo">
            ⚡ CyberTools
          </div>

          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        <section className="hero">
          <h1>
            JWT Decoder
          </h1>

          <p>
            Decode JWT tokens instantly
          </p>
        </section>

        <section className="layout">

          <div className="card">

            <h2>
              📋 JWT Decoder
            </h2>

            <textarea
              className="text-input"
              rows="6"
              placeholder="Paste JWT token..."
              value={token}
              onChange={(e) =>
                setToken(e.target.value)
              }
            />

            <button
              className="main-btn"
              onClick={decodeJWT}
            >
              Decode JWT
            </button>

            {error && (
              <p>
                {error}
              </p>
            )}

            {header && (
              <>
                <h3>
                  Header
                </h3>

                <pre className="result-box">
                  {header}
                </pre>

                <h3>
                  Payload
                </h3>

                <pre className="result-box">
                  {payload}
                </pre>
              </>
            )}

          </div>

        </section>

        <section className="info-section">

          <h2>
            What is a JWT?
          </h2>

          <p>
            JWT (JSON Web Token) is commonly used for
            authentication and authorization in web
            applications and APIs.
          </p>

          <h2>
            Common Bug Bounty Uses
          </h2>

          <ul>
            <li>Inspect token claims</li>
            <li>Check user roles</li>
            <li>View expiration times</li>
            <li>Analyze authentication flows</li>
          </ul>

        </section>

        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>
    </>
  );
}