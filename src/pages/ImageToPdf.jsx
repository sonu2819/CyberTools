import { useState } from "react";
import { jsPDF } from "jspdf";
import "../App.css";
import { Helmet } from "react-helmet";

export default function ImageToPDF() {
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
    <>
  <Helmet>
  <title>
    Free Image to PDF Converter Online | JPG, PNG & WebP to PDF | CyberTools
  </title>

  <meta
    name="description"
    content="Convert JPG, PNG and WebP images to PDF online for free. Merge multiple images into one PDF instantly. Fast, secure, browser-based image to PDF converter with no upload or signup."
  />

  <meta
    name="keywords"
    content="image to pdf, jpg to pdf, png to pdf, webp to pdf, image to pdf converter, convert image to pdf online, free image to pdf, jpg pdf converter, merge images into pdf, online pdf converter"
  />
</Helmet>
    <div className="app tool-page">

      <header className="navbar">
        <div className="logo">⚡ CyberTools</div>

        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Free Image to PDF Converter</h1>

        <p>
          Convert JPG, PNG and WebP images into one PDF instantly.
        </p>
      </section>

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
                  <img
                    src={img.preview}
                    alt={`Preview ${index + 1}`}
                  />

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




<section className="info-section">

  <h2>What is an Image to PDF Converter?</h2>
  <p>
    An Image to PDF converter allows you to combine one or more images into a
    single PDF document. It is useful for sharing scanned documents, photos,
    assignments, invoices, and other image files in a professional format.
  </p>

  <h2>Why Use CyberTools Image to PDF Converter?</h2>
  <ul>
    <li>Convert JPG, PNG and WebP images to PDF</li>
    <li>Merge multiple images into one PDF</li>
    <li>Works entirely in your browser</li>
    <li>No image upload to any server</li>
    <li>Fast, free and secure</li>
    <li>No registration or login required</li>
  </ul>

  <h2>How to Convert Images to PDF</h2>
  <ol>
    <li>Select one or more images.</li>
    <li>Preview or remove any unwanted images.</li>
    <li>Click the "Convert to PDF" button.</li>
    <li>Download your PDF instantly.</li>
  </ol>

  <h2>Supported Image Formats</h2>
  <p>
    CyberTools supports popular image formats including JPG, JPEG, PNG and
    WebP. Multiple images can be combined into a single PDF document.
  </p>

  <h2>Is This Image to PDF Tool Safe?</h2>
  <p>
    Yes. All image processing happens directly in your browser. Your files are
    never uploaded to our servers, helping keep your documents private and
    secure.
  </p>

</section>

      

      <footer className="footer">
        Built with ⚡ CyberTools
      </footer>

    </div>
    </>
  );
}