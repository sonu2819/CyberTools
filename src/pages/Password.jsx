import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

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
<><Helmet>

  <title>
    Password Generator - CyberTools
  </title>

  <meta
    name="description"
    content="Generate strong secure passwords instantly online using CyberTools free password generator."
  />

  <meta
    name="keywords"
    content="password generator, strong password generator, secure password generator, random password tool"
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



       <section className="info-section">

        <h2>
          What is a Password Generator?
        </h2>

        <p>
          A password generator creates strong and secure passwords automatically.
          Strong passwords help protect your online accounts from hacking,
          brute-force attacks, and unauthorized access.
        </p>

        <h2>
          Why Use This Password Generator?
        </h2>

        <p>
          This free online password generator helps you create random passwords
          instantly. It combines uppercase letters, lowercase letters,
          numbers, and special characters to improve security.
        </p>

        <h2>
          How to Use
        </h2>

        <ul>

          <li>
            Click the "Generate Password" button
          </li>

          <li>
            A strong random password will appear instantly
          </li>

          <li>
            Copy and use the password for your accounts securely
          </li>

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