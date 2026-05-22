import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function UUID() {

  const [uuid, setUuid] =
    useState("");

  const generateUUID = () => {

    setUuid(
      crypto.randomUUID()
    );

  };

  const copyUUID = () => {

    navigator.clipboard.writeText(
      uuid
    );

    alert("Copied!");

  };

  return (
    <><Helmet>

  <title>
    UUID Generator - CyberTools
  </title>

  <meta
    name="description"
    content="Generate random UUIDs instantly online using CyberTools free UUID generator."
  />

  <meta
    name="keywords"
    content="uuid generator, random uuid, online uuid generator, unique id generator"
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
          UUID Generator
        </h1>

        <p>
          Generate random UUIDs instantly
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>
            🆔 UUID Generator
          </h2>

          <div className="result-box">

            <span>
              {uuid || "Generate UUID..."}
            </span>

            {uuid && (

              <button
                className="copy-btn"
                onClick={copyUUID}
              >
                📋
              </button>

            )}

          </div>

          <button
            className="main-btn"
            onClick={generateUUID}
          >
            Generate UUID
          </button>

        </div>

      </section>

      {/* INFO SECTION */}
<section className="info-section">

  <h2>
    What is a UUID?
  </h2>

  <p>
    A UUID (Universally Unique Identifier) is a unique random identifier
    used in software applications, databases, and APIs to identify data safely.
  </p>

  <h2>
    Why Use This UUID Generator?
  </h2>

  <p>
    This free UUID generator helps developers generate random UUIDs instantly
    for applications, databases, authentication systems, and testing purposes.
  </p>

  <h2>
    How to Use
  </h2>

  <ul>

    <li>
      Click the Generate UUID button
    </li>

    <li>
      A random UUID will appear instantly
    </li>

    <li>
      Copy and use the UUID in your project
    </li>

  </ul>

</section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div></>
  );
}