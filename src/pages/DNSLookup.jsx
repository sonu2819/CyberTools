import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function DNSLookup() {

  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const [records, setRecords] = useState({
    A: [],
    MX: [],
    NS: [],
    TXT: []
  });

  const [error, setError] = useState("");

  const fetchDNS = async () => {

    if (!domain.trim()) {
      setError("Please enter a domain");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(false);

    try {

      const types = ["A", "MX", "NS", "TXT"];
      const results = {};

      for (let type of types) {

        const res = await fetch(
          `https://dns.google/resolve?name=${domain}&type=${type}`
        );

        const data = await res.json();

        results[type] =
          data.Answer?.map((item) => item.data) || [];

      }

      setRecords(results);
      setSearched(true);

    } catch (err) {
      console.error(err);
      setError("Failed to fetch DNS records");
    }

    setLoading(false);

  };

  return (
    <>
      <Helmet>
        <title>DNS Lookup - CyberTools</title>
      </Helmet>

      <div className="app tool-page">

        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">⚡ CyberTools</div>
          <nav><a href="/">Home</a></nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>DNS Lookup Tool</h1>
          <p>Check DNS records of any domain instantly</p>
        </section>

        {/* TOOL */}
        <section className="layout">

          <div className="card">

            <h2>🌐 DNS Lookup</h2>

            <input
              type="text"
              placeholder="Enter domain (e.g. google.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />

            <button
              className="main-btn"
              onClick={fetchDNS}
            >
              Lookup DNS
            </button>

            {loading && <p>Loading DNS records...</p>}

            {error && <p>❌ {error}</p>}

            {/* ONLY SHOW AFTER SEARCH */}
            {searched && (
              <div className="output">

                <h3>A Records</h3>
                {records.A.length > 0
                  ? records.A.map((ip, i) => (
                      <p key={i}>{ip}</p>
                    ))
                  : <p>No records found</p>
                }

                <h3>MX Records</h3>
                {records.MX.length > 0
                  ? records.MX.map((mx, i) => (
                      <p key={i}>{mx}</p>
                    ))
                  : <p>No records found</p>
                }

                <h3>NS Records</h3>
                {records.NS.length > 0
                  ? records.NS.map((ns, i) => (
                      <p key={i}>{ns}</p>
                    ))
                  : <p>No records found</p>
                }

                <h3>TXT Records</h3>
                {records.TXT.length > 0
                  ? records.TXT.map((txt, i) => (
                      <p key={i}>{txt}</p>
                    ))
                  : <p>No records found</p>
                }

              </div>
            )}

          </div>

        </section>




        {/* INFO SECTION */}
<section className="info-section">

  <h2>What is DNS Lookup?</h2>

  <p>
    DNS Lookup helps you check how a domain is connected to the internet.
    It shows important records that control website access, emails, and security.
  </p>

  <h2>What You Can See</h2>

  <ul>
    <li><b>A Record:</b> IP address of the website</li>
    <li><b>MX Record:</b> Mail servers for email handling</li>
    <li><b>NS Record:</b> Name servers of the domain</li>
    <li><b>TXT Record:</b> Verification and security records</li>
  </ul>

  <h2>Why Use This Tool?</h2>

  <ul>
    <li>Understand how a domain is configured</li>
    <li>Check website DNS issues</li>
    <li>Useful for developers and cybersecurity learners</li>
    <li>Fast and free DNS inspection tool</li>
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