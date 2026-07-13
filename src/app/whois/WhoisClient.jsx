"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhoisClient() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

 const lookup = async () => {
  if (!domain.trim()) return;

  setLoading(true);
  setResult(null);
  setError("");

  try {
    const cleanDomain = domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0];

    const res = await fetch(`/api/whois?domain=${cleanDomain}`);

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      throw new Error(data.error || "Domain not found.");
    }

    setResult(data);
  } catch (err) {
    setError(err.message);
  }

  setLoading(false);
};
  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>WHOIS Lookup</h1>

        <p>
          Find domain registration details, registrar, nameservers and expiration date.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>🌐 WHOIS Lookup</h2>

          <input
            type="text"
            placeholder="example.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />

          <button
            className="main-btn"
            onClick={lookup}
          >
            {loading ? "Searching..." : "Lookup Domain"}
          </button>

          {error && (
            <div className="result-box">
              <p>{error}</p>
            </div>
          )}

       
{result && (
  <div className="whois-result" >

    <h3>Domain Information</h3>

    <p><b>Domain:</b> {result.domain || "-"}</p>

    <p><b>Registrar:</b> {result.registrar || "-"}</p>

    <p><b>Registered:</b> {result.created || "-"}</p>

    <p><b>Updated:</b> {result.updated || "-"}</p>

    <p><b>Expires:</b> {result.expires || "-"}</p>

    <p><b>Organization:</b> {result.organization || "-"}</p>

    <p><b>Country:</b> {result.country || "-"}</p>
    <p><b>Registrant Email:</b> {result.registrantEmail || "-"}</p>

<p><b>Tech Email:</b> {result.techEmail || "-"}</p>

<p><b>Abuse Contact:</b> {result.abuseEmail || "-"}</p>

<p><b>Abuse Phone:</b> {result.abusePhone || "-"}</p>

    <br />

    <h3>Status</h3>

    <ul>
      {result.status?.length ? (
        result.status.map((item) => (
          <li key={item}>{item}</li>
        ))
      ) : (
        <li>-</li>
      )}
    </ul>

    <br />

    <h3>Name Servers</h3>

    <ul>
      {result.nameservers?.length ? (
        result.nameservers.map((ns) => (
          <li key={ns}>{ns}</li>
        ))
      ) : (
        <li>-</li>
      )}
    </ul>

  </div>
)}
            

        </div>

      </section>

      {/* INFO */}

     <section className="info-section">

  <h2>What is a WHOIS Lookup?</h2>

  <p>
    A WHOIS Lookup allows you to retrieve publicly available registration
    information for a domain name. It provides details such as the domain
    registrar, registration and expiration dates, domain status, nameservers,
    and registrant information when available. CyberTools performs WHOIS lookups
    quickly, helping developers, website owners, cybersecurity professionals,
    and researchers gather domain information in seconds.
  </p>

  <h2>Why Use CyberTools?</h2>

  <ul>
    <li>Lookup WHOIS information for any registered domain</li>
    <li>View registrar, creation, update and expiration dates</li>
    <li>Check domain status and registration details</li>
    <li>Display authoritative name servers</li>
    <li>View registrant organization and country when available</li>
    <li>Show registrant, technical and abuse contact information</li>
    <li>Fast, simple and free to use</li>
    <li>No registration or software installation required</li>
  </ul>

  <h2>How to Use WHOIS Lookup</h2>

  <ol>
    <li>Enter a domain name such as <strong>example.com</strong>.</li>
    <li>Click <strong>Lookup Domain</strong>.</li>
    <li>Wait a few seconds while the WHOIS record is retrieved.</li>
    <li>View the registrar, dates, status, nameservers and other available information.</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>What information does a WHOIS lookup provide?</h3>

  <p>
    A WHOIS lookup can display the domain registrar, registration date,
    expiration date, last updated date, nameservers, domain status, registrant
    organization, country, and contact information when it is publicly
    available.
  </p>

  <h3>Can I look up any domain?</h3>

  <p>
    Yes. You can search most registered domain names. However, some registrars
    or domain extensions may limit the amount of publicly available WHOIS
    information due to privacy protection policies.
  </p>

  <h3>Why is some WHOIS information hidden?</h3>

  <p>
    Many domain owners use WHOIS privacy protection services or are protected by
    regulations such as GDPR. In these cases, personal contact details may be
    replaced with anonymized information or contact forms.
  </p>

  <h3>Is CyberTools WHOIS Lookup free?</h3>

  <p>
    Yes. CyberTools WHOIS Lookup is completely free to use and provides domain
    registration details without requiring an account or installation.
  </p>

</section>

      <Footer />

    </main>
  );
}