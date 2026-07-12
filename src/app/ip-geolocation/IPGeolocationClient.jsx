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
     {/* INFO */}
<section className="info-section">

  <h2>What is an IP Geolocation Lookup?</h2>

  <p>
    An IP Geolocation Lookup helps you find the approximate location and network
    information associated with any public IPv4 or IPv6 address. CyberTools
    instantly displays details such as the country, region, city, timezone,
    latitude, longitude and Internet Service Provider (ISP), making it useful
    for networking, cybersecurity, website analytics and troubleshooting.
  </p>

  <h2>Why Use CyberTools?</h2>

  <ul>
    <li>Lookup any public IPv4 or IPv6 address</li>
    <li>View country, region, city and postal code information</li>
    <li>Find latitude, longitude and timezone</li>
    <li>Identify the Internet Service Provider (ISP) or organization</li>
    <li>Useful for networking, cybersecurity and website analysis</li>
    <li>Fast and easy IP address lookup</li>
    <li>No registration or software installation required</li>
    <li>Works on Windows, macOS, Linux, Android and iPhone</li>
    <li>Free to use anytime</li>
  </ul>

  <h2>How to Lookup an IP Address</h2>

  <ol>
    <li>Enter a valid public IPv4 or IPv6 address.</li>
    <li>Click <strong>Lookup IP</strong>.</li>
    <li>View the location, network and ISP information instantly.</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What information can an IP Geolocation Lookup provide?</h3>
  <p>
    It can display the approximate country, region, city, postal code,
    timezone, latitude, longitude and Internet Service Provider (ISP)
    associated with a public IP address.
  </p>

  <h3>Can I find the exact location of an IP address?</h3>
  <p>
    No. IP geolocation provides an approximate location based on publicly
    available network data. It cannot determine a user's exact street address
    or precise physical location.
  </p>

  <h3>Does this tool work with both IPv4 and IPv6 addresses?</h3>
  <p>
    Yes. CyberTools supports lookups for both public IPv4 and IPv6 addresses.
  </p>

  <h3>Is the IP Geolocation Lookup free?</h3>
  <p>
    Yes. CyberTools IP Geolocation Lookup is completely free to use and requires
    no registration.
  </p>

</section>
      <Footer />

    </main>
  );
}