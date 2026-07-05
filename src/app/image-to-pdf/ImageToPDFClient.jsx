"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImageToPDFClient() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    const selected = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...selected]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const convertToPDF = async () => {
    if (images.length === 0) return;

    setLoading(true);

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const img = images[i];

      const image = new Image();
      image.src = img.preview;

      await new Promise((resolve) => {
        image.onload = resolve;
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      let width = image.width;
      let height = image.height;

      const ratio = Math.min(
        pageWidth / width,
        pageHeight / height
      );

      width *= ratio;
      height *= ratio;

      const x = (pageWidth - width) / 2;
      const y = (pageHeight - height) / 2;

      if (i !== 0) pdf.addPage();

      const format =
        img.file.type === "image/png"
          ? "PNG"
          : img.file.type === "image/webp"
          ? "WEBP"
          : "JPEG";

      pdf.addImage(image, format, x, y, width, height);
    }

    pdf.save("CyberTools-Images.pdf");

    setLoading(false);
  };

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <h1>Free Image to PDF Converter</h1>

        <p>
          Convert JPG, PNG and WebP images into one PDF instantly.
        </p>

      </section>

      {/* TOOL */}
      <section className="layout">

        <div className="card">

          <h2>📄 Image to PDF</h2>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImages}
          />

          <p>
            <b>Selected Images:</b> {images.length}
          </p>

          {images.length > 0 && (
            <div className="preview-grid">

              {images.map((img, index) => (
                <div className="preview-card" key={index}>
                  <img src={img.preview} alt={`Preview ${index + 1}`} />

                  <button
                    className="remove-btn"
                    onClick={() => removeImage(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>
          )}

          <button
            className="main-btn"
            onClick={convertToPDF}
            disabled={loading || images.length === 0}
          >
            {loading ? "Creating PDF..." : "Convert to PDF"}
          </button>

        </div>

      </section>

      {/* INFO */}
      <section className="info-section">

        <h2>What is an Image to PDF Converter?</h2>

        <p>
          An Image to PDF converter allows you to combine one or more images
          into a single PDF document.
        </p>

        <h2>Why Use CyberTools?</h2>

        <ul>
          <li>Convert JPG, PNG and WebP images to PDF</li>
          <li>Merge multiple images into one PDF</li>
          <li>Works entirely in your browser</li>
          <li>No upload to any server</li>
          <li>Fast, free and secure</li>
        </ul>

        <h2>How to Convert Images to PDF</h2>

        <ol>
          <li>Select one or more images.</li>
          <li>Preview or remove unwanted images.</li>
          <li>Click "Convert to PDF".</li>
          <li>Download your PDF instantly.</li>
        </ol>

      </section>

      <Footer />

    </main>
  );
}