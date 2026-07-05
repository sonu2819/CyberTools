"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DNSLookupClient() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const [records, setRecords] = useState({
    A: [],
    MX: [],
    NS: [],
    TXT: [],
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

      for (const type of types) {
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
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>DNS Lookup Tool</h1>

        <p>
          Check A, MX, NS and TXT records of any domain instantly.
        </p>

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

          {loading && (
            <p>Loading DNS records...</p>
          )}

          {error && (
            <p>❌ {error}</p>
          )}

          {searched && (
            <div className="output">

              <h3>A Records</h3>

              {records.A.length ? (
                records.A.map((ip, i) => (
                  <p key={i}>{ip}</p>
                ))
              ) : (
                <p>No records found</p>
              )}

              <h3>MX Records</h3>

              {records.MX.length ? (
                records.MX.map((mx, i) => (
                  <p key={i}>{mx}</p>
                ))
              ) : (
                <p>No records found</p>
              )}

              <h3>NS Records</h3>

              {records.NS.length ? (
                records.NS.map((ns, i) => (
                  <p key={i}>{ns}</p>
                ))
              ) : (
                <p>No records found</p>
              )}

              <h3>TXT Records</h3>

              {records.TXT.length ? (
                records.TXT.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))
              ) : (
                <p>No records found</p>
              )}

            </div>
          )}

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>What is DNS Lookup?</h2>

        <p>
          DNS Lookup lets you inspect the Domain Name System records of a
          website. These records determine how a domain points to servers,
          handles email and verifies ownership.
        </p>

        <h2>Supported DNS Records</h2>

        <ul>
          <li><strong>A Record:</strong> Maps a domain to an IPv4 address.</li>
          <li><strong>MX Record:</strong> Specifies the domain's mail servers.</li>
          <li><strong>NS Record:</strong> Lists the authoritative name servers.</li>
          <li><strong>TXT Record:</strong> Stores verification and security information such as SPF and DKIM.</li>
        </ul>

        <h2>Why Use This Tool?</h2>

        <ul>
          <li>Verify DNS configuration.</li>
          <li>Troubleshoot website and email issues.</li>
          <li>Check domain verification records.</li>
          <li>Useful for developers, system administrators and cybersecurity professionals.</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}