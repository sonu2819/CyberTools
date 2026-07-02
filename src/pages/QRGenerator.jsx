import { useState } from "react";
import QRCode from "qrcode";
import "../App.css";
import { Helmet } from "react-helmet";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = async () => {
    if (!text) return;
    const url = await QRCode.toDataURL(text);
    setQr(url);
  };

  return (
    <>
      <Helmet>
        <title>
          Free QR Code Generator Online | Create QR Codes for URL, WiFi & Text | CyberTools
        </title>

        <meta
          name="description"
          content="Generate free QR codes online instantly for URLs, text, WiFi, WhatsApp, social media and business cards. Fast, secure and easy QR code generator by CyberTools."
        />

        <meta
          name="keywords"
          content="qr code generator online, free qr code generator, qr code maker online, create qr code online, generate qr code online, online qr code generator, qr generator, qr code creator, wifi qr code generator, url qr code generator, text qr code generator"
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
          <h1>Free QR Code Generator Online</h1>
          <p>
            Create free QR codes online for URLs, text, WiFi, WhatsApp and more instantly.
            No login required.
          </p>
        </section>

        {/* TOOL */}
        <section className="layout">
          <div className="card">
            <h2>📱 Generate QR Code Instantly</h2>

            <input
              type="text"
              placeholder="Enter URL, text, WiFi, or any data..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button className="main-btn" onClick={generateQR}>
              Generate QR
            </button>

            {qr && (
              <div className="output" id="ghost">
                <img
                  src={qr}
                  alt="Generated QR Code"
                  style={{
                    width: "220px",
                    marginTop: "10px",
                    borderRadius: "12px",
                  }}
                />
              </div>
            )}
          </div>
        </section>

        {/* INFO SECTION (SEO BOOST) */}
        <section className="info-section">

          <h2>What is a QR Code?</h2>
          <p>
            A QR code (Quick Response code) is a scannable barcode that stores
            information like URLs, text, WiFi passwords, contact details, and more.
          </p>

          <h2>Why Use This Free QR Code Generator?</h2>
          <p>
            CyberTools QR code generator allows you to create QR codes instantly
            for websites, WhatsApp, WiFi, social media links, business cards, and text.
            It is fast, free, and works on all devices.
          </p>

          <h2>How to Create a QR Code</h2>
          <ul>
            <li>Enter a URL, text, or WiFi details</li>
            <li>Click on Generate QR Code button</li>
            <li>Download or scan your QR code instantly</li>
          </ul>

          <h2>Types of QR Codes You Can Create</h2>
          <ul>
            <li>Website URL QR code</li>
            <li>WiFi QR code</li>
            <li>Text QR code</li>
            <li>WhatsApp QR code</li>
            <li>Business card QR code</li>
          </ul>

          <h2>Free Online QR Code Generator</h2>
          <p>
            If you are searching for a free QR code generator online, CyberTools
            helps you create QR codes instantly without login or signup.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>
    </>
  );
}