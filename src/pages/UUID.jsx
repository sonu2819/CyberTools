import { useState } from "react";
import "../App.css";

export default function UUID() {

  const [uuid, setUuid] =
    useState("");

  const generateUUID = () => {

    setUuid(
      crypto.randomUUID()
    );

  };

  const copyUUID = () => {

    navigator.clipboard.writeText(
      uuid
    );

    alert("Copied!");

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
          UUID Generator
        </h1>

        <p>
          Generate random UUIDs instantly
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🆔 UUID Generator
          </h2>

          <div className="result-box">

            <span>
              {uuid || "Generate UUID..."}
            </span>

            {uuid && (

              <button
                className="copy-btn"
                onClick={copyUUID}
              >
                📋
              </button>

            )}

          </div>

          <button
            className="main-btn"
            onClick={generateUUID}
          >
            Generate UUID
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}