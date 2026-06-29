import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function Password() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%&*";

    let pass = "";

    for (let i = 0; i < 16; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  };

  return (
    <>
      <Helmet>
        <title>
          Free Password Generator Online | Create Strong Secure Passwords Instantly | CyberTools
        </title>

        <meta
          name="description"
          content="Generate strong and secure passwords online instantly. Free password generator tool by CyberTools to create random passwords with letters, numbers, and symbols."
        />

        <meta
          name="keywords"
          content="password generator online, free password generator, strong password generator, secure password generator, random password generator, create password online, password maker tool"
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
          <h1>Free Password Generator Online</h1>

          <p>
            Create strong, secure, and random passwords instantly for free.
            Protect your accounts from hacking and weak passwords.
          </p>
        </section>

        {/* TOOL */}
        <section className="layout">
          <div className="card">

            <h2>🔑 Strong Password Generator</h2>

            <div className="result-box">
              <span>{password || "Click generate to create password..."}</span>
            </div>

            <button className="main-btn" onClick={generatePassword}>
              Generate Password
            </button>

          </div>
        </section>

        {/* INFO SECTION (SEO BOOST) */}
        <section className="info-section">

          <h2>What is a Password Generator?</h2>
          <p>
            A password generator is a free online tool that creates strong,
            random, and secure passwords to protect your online accounts.
            It helps prevent hacking and improves account security.
          </p>

          <h2>Why Use This Free Password Generator?</h2>
          <p>
            CyberTools password generator helps you create strong passwords
            using uppercase letters, lowercase letters, numbers, and special symbols.
            It is fast, free, and works online without login.
          </p>

          <h2>How to Use Password Generator</h2>
          <ul>
            <li>Click on "Generate Password" button</li>
            <li>Copy the generated secure password</li>
            <li>Use it for your accounts safely</li>
          </ul>

          <h2>Benefits of Strong Passwords</h2>
          <ul>
            <li>Protects your accounts from hacking</li>
            <li>Prevents brute-force attacks</li>
            <li>Keeps personal data safe</li>
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