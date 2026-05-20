import { useState } from "react";
import "../App.css";

export default function Password() {

  const [password, setPassword] =
    useState("");

  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%&*";

    let pass = "";

    for (let i = 0; i < 16; i++) {

      pass += chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];
    }

    setPassword(pass);
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
          Password Generator
        </h1>

        <p>
          Generate strong secure passwords online
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🔑 Password Generator
          </h2>

          <div className="result-box">

            <span>
              {password || "Generate password..."}
            </span>

          </div>

          <button
            className="main-btn"
            onClick={generatePassword}
          >
            Generate Password
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