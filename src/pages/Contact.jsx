import "../App.css";

export default function Contact() {

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
          Contact
        </h1>

        <p>
          Get in touch with CyberTools
        </p>

      </section>

      {/* CONTENT */}
      <section className="layout">

        <div className="card">

          <h2>
            📩 Contact
          </h2>

          <p>
            For support, feedback,
            or business inquiries,
            contact us at:
          </p>

          <p>
          merestro106@email.com
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