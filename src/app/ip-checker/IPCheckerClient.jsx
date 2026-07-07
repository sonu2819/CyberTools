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
              {ip || "Find your IP address"}
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
     {/* INFO */}
<section className="info-section">

  <h2>What is an IP Address Checker?</h2>

  <p>
    An IP Address Checker is a free online tool that displays your current
    public IP (Internet Protocol) address. Your public IP is assigned by your
    internet service provider (ISP) and identifies your network on the internet.
    CyberTools lets you check your IP address instantly without requiring any
    registration or software installation.
  </p>

  <h2>Why Use CyberTools?</h2>

  <ul>
    <li>Check your public IP address instantly</li>
    <li>Fast and accurate results</li>
    <li>Works directly in your browser</li>
    <li>No registration or downloads required</li>
    <li>Useful for VPN and proxy verification</li>
    <li>Helps troubleshoot network issues</li>
    <li>Copy your IP address with one click</li>
    <li>Completely free to use</li>
  </ul>

  <h2>How to Check Your IP Address</h2>

  <ol>
    <li>Click the <strong>Check My IP</strong> button.</li>
    <li>Wait a moment while your public IP address is retrieved.</li>
    <li>Your IP address will appear on the screen instantly.</li>
    <li>Click the copy button to copy your IP address if needed.</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What is a public IP address?</h3>

  <p>
    A public IP address is the unique address assigned to your internet
    connection by your ISP. It allows websites and online services to
    communicate with your network over the internet.
  </p>

  <h3>Does this tool show my private IP address?</h3>

  <p>
    No. This tool displays only your public IP address. Private IP addresses are
    assigned within your local network and are not visible on the public
    internet.
  </p>

  <h3>Can I use this tool to check if my VPN is working?</h3>

  <p>
    Yes. After connecting to a VPN, use this tool to verify that your public IP
    address has changed to the VPN server's IP.
  </p>

  <h3>Is CyberTools IP Address Checker free?</h3>

  <p>
    Yes. CyberTools IP Address Checker is completely free to use and works on
    Windows, macOS, Linux, Android and iPhone without requiring registration.
  </p>

</section>

      <Footer />

    </main>
  );
}