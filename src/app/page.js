import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export const metadata = {
  title: "CyberTools - Free Online Developer & Network Tools",
  description:
    "Free online developer, network and cybersecurity tools including Password Generator, JSON Formatter, QR Generator, Base64 tools and more.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Free Cyber Tools</h1>
        <p>Fast utilities for developers & students</p>
      </section>

      {/* TOOLS */}
      <section id="tools" className="layout">

        {/* Paste all your tool cards here */}


  <Link href="/password-generator" className="card link-card">
    <h2>🔑 Password Generator</h2>
    <p>Generate strong and secure passwords instantly.</p>
  </Link>

  <Link href="/ip-checker" className="card link-card">
    <h2>🌐 IP Checker</h2>
    <p>Check your public IP address online.</p>
  </Link>

  <Link href="/base64-tool" className="card link-card">
    <h2>🔄 Base64 Tool</h2>
    <p>Encode and decode Base64 text easily.</p>
  </Link>

  <Link href="/uuid-generator" className="card link-card">
    <h2>🆔 UUID Generator</h2>
    <p>Generate random UUIDs instantly.</p>
  </Link>

  <Link href="/json-formatter" className="card link-card">
    <h2>📦 JSON Formatter</h2>
    <p>Format and validate JSON instantly.</p>
  </Link>

  <Link href="/qr-generator" className="card link-card">
    <h2>📱 QR Generator</h2>
    <p>Generate QR codes online instantly.</p>
  </Link>

  <Link href="/password-strength-checker" className="card link-card">
    <h2>🔍 Password Strength Checker</h2>
    <p>Test how secure your password is instantly.</p>
  </Link>

  <Link href="/url-encoder-decoder" className="card link-card">
    <h2>🔗 URL Encoder / Decoder</h2>
    <p>Encode and decode URLs instantly.</p>
  </Link>

  <Link href="/jwt-decoder" className="card link-card">
    <h2>📋 JWT Decoder</h2>
    <p>Decode JWT tokens instantly.</p>
  </Link>

  <Link href="/ip-geolocation" className="card link-card">
    <h2>📍 IP Geolocation</h2>
    <p>Find country, city, coordinates and ISP details from any IP address instantly.</p>
  </Link>

  <Link href="/exif-viewer" className="card link-card">
    <h2>📸 EXIF Viewer</h2>
    <p>View image metadata like camera, location, date and settings instantly.</p>
  </Link>

  <Link href="/dns-lookup" className="card link-card">
    <h2>🌐 DNS Lookup</h2>
    <p>Check A, MX, NS and TXT records of any domain instantly.</p>
  </Link>

  <Link href="/image-compressor" className="card link-card">
    <h2>🖼️ Image Compressor</h2>
    <p>Compress JPG, PNG and WebP images without installing software.</p>
  </Link>

  <Link href="/image-to-pdf" className="card link-card">
    <h2>📄 Image to PDF</h2>
    <p>Convert one or multiple images into a single PDF instantly.</p>
  </Link>
<Link href="/email-breach-checker" className="card link-card">
  <h2>📧 Email Breach Checker</h2>
  <p>Check whether your email address has appeared in known data breaches instantly.</p>
</Link>

<Link href="/unix-to-human" className="card link-card">
  <h2>⏱️ Unix Timestamp Converter</h2>
  <p>Convert Unix timestamp to human readable date instantly.</p>
</Link>



<Link href="/regex-tester" className="card link-card">
  <h2>🧪 Regex Tester</h2>
  <p>Test and debug JavaScript regular expressions instantly.</p>
</Link>

  <Link href="/hash-generator" className="card link-card">
    <h2>🔐 Hash Generator</h2>
    <p>Generate MD5, SHA-1 and SHA-256 hashes instantly.</p>
  </Link>
  <Link href="/youtube-trends" className="card link-card">
  <h2>📺 YouTube Trend Finder</h2>
  <p>Discover trending YouTube videos by keyword and country instantly.</p>
</Link>

</section>

    

       <div style={{ margin: "40px 0", width: "100%" }}>
        <AdBanner />
      </div>

      <Footer />
    </>
  );
}