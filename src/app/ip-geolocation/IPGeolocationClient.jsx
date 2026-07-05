"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IPGeolocationClient() {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookupIP = async () => {
    if (!ip.trim()) {
      setError("Please enter an IP address");
      return;
    }

    setLoading(true);
    setError("");
    setIpData(null);

    try {
      const res = await fetch(
        `https://ipapi.co/${ip}/json/`
      );

      const data = await res.json();

      if (data.error) {
        setError("Invalid IP Address");
      } else {
        setIpData(data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch IP information");
    }

    setLoading(false);
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>IP Geolocation Lookup</h1>

        <p>
          Find the approximate location and network information of any public IP address.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>📍 IP Geolocation</h2>

          <input
            type="text"
            placeholder="Enter IP Address (e.g. 8.8.8.8)"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                lookupIP();
              }
            }}
          />

          <button
            className="main-btn"
            onClick={lookupIP}
          >
            Lookup IP
          </button>

          {loading && (
            <div className="output">
              <p>Loading...</p>
            </div>
          )}

          {error && (
            <div className="output">
              <p>❌ {error}</p>
            </div>
          )}

          {ipData && (
            <div className="output">

              <p><strong>IP:</strong> {ipData.ip}</p>

              <p><strong>Country:</strong> {ipData.country_name}</p>

              <p><strong>Country Code:</strong> {ipData.country_code}</p>

              <p><strong>Region:</strong> {ipData.region}</p>

              <p><strong>City:</strong> {ipData.city}</p>

              <p><strong>Latitude:</strong> {ipData.latitude}</p>

              <p><strong>Longitude:</strong> {ipData.longitude}</p>

              <p><strong>Postal Code:</strong> {ipData.postal}</p>

              <p><strong>Timezone:</strong> {ipData.timezone}</p>

              <p><strong>ISP / Organization:</strong> {ipData.org}</p>

            </div>
          )}

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>What is IP Geolocation?</h2>

        <p>
          IP Geolocation estimates the physical location of a public IP address.
          It can identify the country, region, city, internet service provider
          and other network details associated with an IP.
        </p>

        <h2>Information You Can Find</h2>

        <ul>
          <li>Country and country code</li>
          <li>State or region</li>
          <li>City</li>
          <li>Latitude and longitude</li>
          <li>Postal code</li>
          <li>Timezone</li>
          <li>Internet Service Provider (ISP)</li>
        </ul>

        <h2>Common Uses</h2>

        <ul>
          <li>Investigate IP addresses.</li>
          <li>Verify VPN or proxy locations.</li>
          <li>Troubleshoot network connections.</li>
          <li>Analyze website visitors.</li>
          <li>Learn basic networking and cybersecurity.</li>
        </ul>

        <h2>How to Use</h2>

        <ol>
          <li>Enter a public IPv4 or IPv6 address.</li>
          <li>Click <strong>Lookup IP</strong>.</li>
          <li>View the location and network information instantly.</li>
        </ol>

      </section>

      <Footer />

    </main>
  );
}