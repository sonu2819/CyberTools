import "../App.css";

export default function Privacy() {

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
          Privacy Policy
        </h1>

        <p>
          Your privacy matters to us
        </p>

      </section>

      {/* CONTENT */}
      <section className="layout">

        <div className="card">

          <h2>
            🔒 Privacy Policy
          </h2>

          <p>
            CyberTools does not store
            personal information entered
            into tools on this website.
          </p>

          <p>
            Some anonymous analytics
            and cookies may be used to
            improve user experience.
          </p>

          <p>
            Third-party services such as
            Google AdSense may use cookies
            for personalized advertising.
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