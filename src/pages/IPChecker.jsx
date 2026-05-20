import { useState } from "react";
import "../App.css";

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

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}