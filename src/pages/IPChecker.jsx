import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function IPChecker() {

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

  const copyIP = () => {

    navigator.clipboard.writeText(ip);

    alert("Copied!");

  };

  return (
<><Helmet>

  <title>
    IP Checker - CyberTools
  </title>

  <meta
    name="description"
    content="Check your public IP address instantly online with CyberTools free IP checker."
  />

  <meta
    name="keywords"
    content="ip checker, my ip address, public ip checker, check ip online"
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
          IP Checker
        </h1>

        <p>
          Check your public IP instantly
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🌐 IP Checker
          </h2>

          <div className="result-box">

            <span>
              {ip || "Check your IP address"}
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
{/* CONTENT */}
<section className="info-section">

  <h2>
    What is an IP Address?
  </h2>

  <p>
    An IP address is a unique identifier assigned to your device on the internet.
    It helps websites and servers communicate with your device.
  </p>

  <h2>
    Why Use This IP Checker?
  </h2>

  <p>
    This free online IP checker helps you quickly find your public IP address.
    It can be useful for troubleshooting networks, configuring servers,
    testing VPN connections, and checking your internet identity.
  </p>

  <h2>
    How to Use
  </h2>

  <ul>
    <li>Click the "Check My IP" button</li>
    <li>Your public IP address will appear instantly</li>
    <li>Use the copy button to copy your IP easily</li>
  </ul>

</section>
      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div></>
  );
}