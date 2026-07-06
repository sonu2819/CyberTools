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
    An Image to PDF Converter lets you convert JPG, JPEG, PNG, WebP and other
    image formats into a single PDF document. Whether you're combining photos,
    scanned documents or screenshots, CyberTools converts your images quickly
    and securely in your browser without uploading your files.
  </p>

  <h2>Why Use CyberTools?</h2>

  <ul>
    <li>Convert JPG, JPEG, PNG, WebP, BMP, GIF and TIFF to PDF</li>
    <li>Merge multiple images into a single PDF</li>
    <li>Works entirely in your browser</li>
    <li>No uploads, registration or software required</li>
    <li>Fast, secure and free to use</li>
    <li>Preserves image quality</li>
    <li>Supports Windows, macOS, Linux, Android and iPhone</li>
    <li>Instant PDF download</li>
  </ul>

  <h2>How to Convert Images to PDF</h2>

  <ol>
    <li>Select one or more images.</li>
    <li>Preview or remove images if needed.</li>
    <li>Click <strong>Convert to PDF</strong>.</li>
    <li>Download your PDF instantly.</li>
  </ol>

  <h2>Frequently Asked Questions</h2>

  <h3>How do I convert JPG to PDF?</h3>
  <p>
    Upload your JPG images, click <strong>Convert to PDF</strong>, and download
    the generated PDF instantly.
  </p>

  <h3>Can I merge multiple images into one PDF?</h3>
  <p>
    Yes. You can combine multiple images into a single PDF document in one
    conversion.
  </p>

  <h3>Are my images uploaded?</h3>
  <p>
    No. Your images are processed locally in your browser and never leave your
    device.
  </p>

  <h3>Is this Image to PDF Converter free?</h3>
  <p>
    Yes. CyberTools Image to PDF Converter is completely free and requires no
    registration.
  </p>

</section>

      <Footer />

    </main>
  );
}