import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>About CyberTools</h1>

        <p>
          Fast and free online utility tools
        </p>

      </section>

      {/* CONTENT */}
      <section className="layout">

        <div className="card">

          <h2>⚡ About Us</h2>

          <p>
            CyberTools provides fast, lightweight, and free online tools for
            developers, students, and daily users.
          </p>

          <p>
            Our goal is to build a modern collection of useful utilities that
            work instantly without complicated setup.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}