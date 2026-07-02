import { useState } from "react";
import imageCompression from "browser-image-compression";
import { Helmet } from "react-helmet";
import "../App.css";

export default function ImageCompressor() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedPreview, setCompressedPreview] = useState("");
  const [quality, setQuality] = useState(80);
  const [loading, setLoading] = useState(false);

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " Bytes";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setCompressedImage(null);

    setPreview(URL.createObjectURL(file));
    setCompressedPreview("");
  };

  const compressImage = async () => {
    if (!image) return;

    setLoading(true);

    try {
      const options = {
        maxSizeMB: 10,
        maxWidthOrHeight: 4000,
        useWebWorker: true,
        initialQuality: quality / 100,
      };

      const compressed = await imageCompression(image, options);

      setCompressedImage(compressed);
      setCompressedPreview(URL.createObjectURL(compressed));
    } catch (err) {
      alert("Compression failed.");
      console.log(err);
    }

    setLoading(false);
  };

  const downloadImage = () => {
    if (!compressedImage) return;

    const url = URL.createObjectURL(compressedImage);

    const a = document.createElement("a");
    a.href = url;
    a.download = "compressed-" + image.name;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>
          Free Image Compressor Online | Reduce JPG PNG WebP Size | CyberTools
        </title>

        <meta
          name="description"
          content="Compress JPG, PNG and WebP images online for free. Reduce image file size without noticeable quality loss using CyberTools."
        />

        <meta
          name="keywords"
          content="image compressor,image compression online,compress jpg,compress png,compress webp,reduce image size,image optimizer"
        />
      </Helmet>

      <div className="app tool-page">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">⚡ CyberTools</div>

          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="hero">
          <h1>Free Image Compressor</h1>

          <p>
            Compress JPG, PNG and WebP images instantly in your browser. No
            upload. No signup. 100% free.
          </p>
        </section>

        {/* Tool */}
        <section className="layout">
          <div className="card">
            <h2>🖼 Compress Image</h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            <br />
            <br />

            <label>
              Compression Quality : <b>{quality}%</b>
            </label>

            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              style={{ width: "100%" }}
            />

            <br />

            {image && (
              <>
                <p>
                  <b>Original Size:</b> {formatSize(image.size)}
                </p>
<div className="image-preview">
                <img
                  src={preview}
                  alt="Original"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
</div>
              </>
            )}

            <button
              className="main-btn"
              onClick={compressImage}
              disabled={!image || loading}
            >
              {loading ? "Compressing..." : "Compress Image"}
            </button>

            {compressedImage && (
              <>
                <div className="output">
                  <h3>Compressed Image</h3>
<div className="image-preview">
                  <img
                    src={compressedPreview}
                    alt="Compressed"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "250px",
                      borderRadius: "10px",
                    }}
                  />
</div>
                  <p>
                    <b>Compressed Size:</b>{" "}
                    {formatSize(compressedImage.size)}
                  </p>

                  <p>
                    <b>Saved:</b>{" "}
                    {(
                      ((image.size - compressedImage.size) / image.size) *
                      100
                    ).toFixed(1)}
                    %
                  </p>

                  <button
                    className="main-btn"
                    onClick={downloadImage}
                  >
                    Download Image
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* SEO Section */}
        <section className="info-section">
          <h2>What is an Image Compressor?</h2>

          <p>
            An image compressor reduces the file size of your JPG, PNG and WebP
            images while maintaining the best possible quality.
          </p>

          <h2>Why Use CyberTools?</h2>

          <ul>
            <li>✔ Free forever</li>
            <li>✔ No upload to any server</li>
            <li>✔ Fast browser compression</li>
            <li>✔ Adjustable quality slider</li>
            <li>✔ Supports JPG, PNG and WebP</li>
          </ul>

          <h2>How to Compress Images</h2>

          <ol>
            <li>Select your image.</li>
            <li>Adjust the compression quality.</li>
            <li>Click Compress Image.</li>
            <li>Download the compressed image.</li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>
      </div>
    </>
  );
}