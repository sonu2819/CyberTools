import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>Contact</h1>

        <p>Get in touch with CyberTools</p>

      </section>

      {/* CONTENT */}
      <section className="layout">

        <div className="card">

          <h2>📩 Contact</h2>

          <p>
            For support, feedback, or business inquiries, contact us at:
          </p>

          <p>
            merestro106@gmail.com
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}