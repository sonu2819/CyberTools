import "./App.css";
import { Helmet } from "react-helmet";
import AdBanner from "./components/AdBanner";

export default function App() {
  return (
<>

  <Helmet>

    <title>
      CyberTools - Free Online Developer Tools
    </title>

    <meta
      name="description"
      content="Free online developer tools including password generator, JSON formatter, QR generator, Base64 tools, UUID generator and IP checker."
    />

    <meta
      name="keywords"
      content="cyber tools, password generator, json formatter, qr generator, uuid generator, ip checker, base64 tool, developer tools, online utilities"
    />

  </Helmet>


    <div className="app">

     {/* NAVBAR */}
<header className="navbar">

  <div className="logo">
    ⚡ CyberTools
  </div>

  <input
    type="checkbox"
    id="menu-toggle"
  />

  <label
    htmlFor="menu-toggle"
    className="hamburger"
  >
    ☰
  </label>

  <div className="menu">

    <a href="/">
      Home
    </a>

    <a href="/#tools">
      Tools
    </a>

    <a href="/about">
      About
    </a>

    <a href="/contact">
      Contact
    </a>

  </div>

</header>

      {/* HERO */}
      <section className="hero">
        

        <h1>
          Free Cyber Tools
        </h1>

        <p>
          Fast utilities for developers & students
        </p>

      </section>
      


      {/* GOOD: not too aggressive */}


      {/* TOOLS */}
     <section
  id="tools"
  className="layout"
>

  <a
    href="/password-generator"
    className="card link-card"
  >
    <h2>🔑 Password Generator</h2>

    <p>
      Generate strong and secure passwords instantly.
    </p>
  </a>

  <a
    href="/ip-checker"
    className="card link-card"
  >
    <h2>🌐 IP Checker</h2>

    <p>
      Check your public IP address online.
    </p>
  </a>

  <a
    href="/base64-tool"
    className="card link-card"
  >
    <h2>🔄 Base64 Tool</h2>

    <p>
      Encode and decode Base64 text easily.
    </p>
  </a>

<a
  href="/uuid-generator"
  className="card link-card"
>

  <h2>
    🆔 UUID Generator
  </h2>

  <p>
    Generate random UUIDs instantly.
  </p>

</a>

<a
  href="/json-formatter"
  className="card link-card"
>

  <h2>
    📦 JSON Formatter
  </h2>

  <p>
    Format and validate JSON instantly.
  </p>

</a>

<a
  href="/qr-generator"
  className="card link-card"
>

  <h2>
    📱 QR Generator
  </h2>

  <p>
    Generate QR codes online instantly.
  </p>

</a>


</section>
<AdBanner />

      

      {/* FOOTER */}
    <footer className="footer">

  <a href="/about">
    About
  </a>

  {" • "}

  <a href="/privacy-policy">
    Privacy Policy
  </a>

  {" • "}

  <a href="/contact">
    Contact
  </a>

</footer>

    </div></>
  );
}