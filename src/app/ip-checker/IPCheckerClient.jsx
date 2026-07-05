"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IPCheckerClient() {
  const [ip, setIp] = useState("");

  const getIP = async () => {
    try {
      const res = await fetch(
        "https://api.ipify.org?format=json"
      );

      const data = await res.json();

      setIp(data.ip);
    } catch {
      setIp("Failed to fetch IP");
    }
  };

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      alert("Copied!");
    } catch {
      alert("Failed to copy IP.");
    }
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>My IP Address Checker</h1>

        <p>
          Find your public IP address instantly for free.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>🌐 Public IP Checker</h2>

          <div className="result-box">

            <span>
              {ip || "Click the button to check your IP address"}
            </span>

            {ip && (
              <button
                className="copy-btn"
                onClick={copyIP}
              >
                📋
              </button>
            )}

          </div>

          <button
            className="main-btn"
            onClick={getIP}
          >
            Check My IP
          </button>

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>
          What is an IP Address?
        </h2>

        <p>
          An IP (Internet Protocol) address is a unique identifier assigned to
          your device when it connects to the internet. Websites and online
          services use it to communicate with your device.
        </p>

        <h2>
          Why Use This IP Checker?
        </h2>

        <p>
          This free online IP Checker instantly displays your current public IP
          address. It is useful for troubleshooting internet connections,
          configuring routers, testing VPNs and verifying your network setup.
        </p>

        <h2>
          How to Use
        </h2>

        <ul>
          <li>Click the <strong>Check My IP</strong> button.</li>
          <li>Your public IP address will be displayed instantly.</li>
          <li>Click the copy button to copy your IP address.</li>
        </ul>

        <h2>
          Common Uses
        </h2>

        <ul>
          <li>Verify your public IP address.</li>
          <li>Check if a VPN is working.</li>
          <li>Troubleshoot network issues.</li>
          <li>Configure remote access or firewalls.</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}