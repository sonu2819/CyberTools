


import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function IPGeolocation() {

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
    <>
      <Helmet>

        <title>IP Geolocation - CyberTools</title>

        <meta
          name="description"
          content="Find country, city, and coordinates from any IP address instantly."
        />

        <meta
          name="keywords"
          content="ip geolocation, ip lookup, ip tracker, ip finder, location from ip"
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

          <h1>IP Geolocation</h1>

          <p>
            Find location and network information from any IP address
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

              </div>
            )}

          </div>

        </section>

        {/* INFO */}
        <section className="info-section">

          <h2>What is IP Geolocation?</h2>

          <p>
            IP Geolocation helps you find the approximate location and network details of any public IP address.
          </p>

          <h2>Information Provided</h2>

          <ul>
            <li>Country</li>
            <li>Region</li>
            <li>City</li>
            <li>Coordinates</li>
          </ul>

          <h2>How to Use</h2>

          <ul>
            <li>Enter an IP address</li>
            <li>Click Lookup IP</li>
            <li>View results instantly</li>
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