import { useState } from "react";
import QRCode from "qrcode";
import "../App.css";

export default function QRGenerator() {

  const [text, setText] =
    useState("");

  const [qr, setQr] =
    useState("");

  const generateQR = async () => {

    if (!text) return;

    const url =
      await QRCode.toDataURL(text);

    setQr(url);

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
          QR Code Generator
        </h1>

        <p>
          Generate QR codes instantly online
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            📱 QR Generator
          </h2>

          <input
            type="text"
            placeholder="Enter text or URL..."
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <button
            className="main-btn"
            onClick={generateQR}
          >
            Generate QR
          </button>

          {qr && (

            <div className="output">

              <img
                src={qr}
                alt="QR Code"
                style={{
                  width: "220px",
                  marginTop: "10px",
                  borderRadius: "12px"
                }}
              />

            </div>

          )}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}