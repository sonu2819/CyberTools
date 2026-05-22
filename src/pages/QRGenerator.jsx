import { useState } from "react";
import QRCode from "qrcode";
import "../App.css";
import { Helmet } from "react-helmet";
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
<>

      <Helmet>

    <title>
      QR Code Generator - CyberTools
    </title>

    <meta
      name="description"
      content="Generate QR codes online instantly for URLs, text and business use."
    />
  <meta
  name="keywords"
  content="QR code generator, free QR generator, online QR tool"
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


      {/* INFO SECTION */}
<section className="info-section">

  <h2>
    What is a QR Code?
  </h2>

  <p>
    A QR code is a scannable barcode used to store links,
    text, contact details, WiFi credentials, and other information.
  </p>

  <h2>
    Why Use This QR Generator?
  </h2>

  <p>
    This free QR code generator allows you to create QR codes instantly
    for websites, text, social media links, and business purposes.
  </p>

  <h2>
    How to Use
  </h2>

  <ul>

    <li>
      Enter text or a URL into the input field
    </li>

    <li>
      Click Generate QR Code
    </li>

    <li>
      Scan or download the generated QR code
    </li>

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