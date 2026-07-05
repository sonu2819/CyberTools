"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PasswordGeneratorClient() {
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
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>
          Free Password Generator Online
        </h1>

        <p>
          Create strong, secure, and random passwords instantly for free.
          Protect your accounts from hacking and weak passwords.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🔑 Strong Password Generator
          </h2>

          <div className="result-box">
            <span>
              {password || "Click Generate to create a password..."}
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

      {/* INFO */}
      <section className="info-section">

        <h2>
          What is a Password Generator?
        </h2>

        <p>
          A password generator creates strong, random passwords that are much
          harder to guess than passwords created manually. Strong passwords help
          protect your online accounts from unauthorized access.
        </p>

        <h2>
          Why Use This Password Generator?
        </h2>

        <p>
          CyberTools generates secure passwords using uppercase letters,
          lowercase letters, numbers and special characters. Everything runs in
          your browser, so no password is sent to any server.
        </p>

        <h2>
          How to Use
        </h2>

        <ul>
          <li>Click the <strong>Generate Password</strong> button.</li>
          <li>Copy the generated password.</li>
          <li>Use it for your online accounts.</li>
        </ul>

        <h2>
          Benefits of Strong Passwords
        </h2>

        <ul>
          <li>Protects accounts from brute-force attacks.</li>
          <li>Reduces the risk of password guessing.</li>
          <li>Improves overall online security.</li>
          <li>Helps keep personal information safe.</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}