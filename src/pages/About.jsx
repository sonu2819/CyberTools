import "../App.css";

export default function About() {

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
          About CyberTools
        </h1>

        <p>
          Fast and free online utility tools
        </p>

      </section>

      {/* CONTENT */}
      <section className="layout">

        <div className="card">

          <h2>
            ⚡ About Us
          </h2>

          <p>
            CyberTools provides fast,
            lightweight, and free online
            tools for developers,
            students, and daily users.
          </p>

          <p>
            Our goal is to build a modern
            collection of useful utilities
            that work instantly without
            complicated setup.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
  );
}