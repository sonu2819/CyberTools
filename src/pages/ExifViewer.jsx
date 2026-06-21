import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import * as exifr from "exifr";

export default function ExifViewer() {

  const [image, setImage] = useState(null);
  const [exifData, setExifData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = async (e) => {

    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setLoading(true);
    setExifData(null);

    try {

      const data = await exifr.parse(file, { gps: true });

      console.log("EXIF FULL DATA:", data);

      setExifData(data || null);

    } catch (err) {

      console.error(err);
      setExifData(null);

    }

    setLoading(false);
  };

  const hasExif =
    exifData && Object.keys(exifData || {}).length > 0;

  return (
    <>
      <Helmet>

        <title>EXIF Viewer - CyberTools</title>

        <meta
          name="description"
          content="View image metadata like EXIF data, camera info, GPS and more."
        />

      </Helmet>

      <div className="app tool-page">

        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">⚡ CyberTools</div>

          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>EXIF Viewer</h1>
          <p>Inspect image metadata instantly</p>
        </section>

        {/* TOOL */}
        <section className="layout">

          <div className="card">

            <h2>📸 Upload Image</h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            {image && (
              <div className="output">
                <img
                  src={image}
                  alt="preview"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "10px"
                  }}
                />
              </div>
            )}

            {loading && (
              <p>Reading EXIF data...</p>
            )}

            {/* NO EXIF MESSAGE */}
            {!loading && image && !hasExif && (
              <div className="output">
                ⚠️ No EXIF metadata found in this image
              </div>
            )}

            {/* RAW JSON OUTPUT */}
            {hasExif && (
  <div className="output">

    {Object.entries(exifData).map(([key, value]) => (
      <div
        key={key}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "6px 0",
          borderBottom: "1px solid #eee"
        }}
      >
        <strong style={{ textTransform: "capitalize" }}>
          {key}
        </strong>

        <span>
          {String(value)}
        </span>
      </div>
    ))}

  </div>
)}

          </div>

        </section>

        {/* INFO */}
        <section className="info-section">

          <h2>What is EXIF Data?</h2>

          <p>
            EXIF data is hidden metadata inside images like
            camera info, GPS location and settings.
          </p>

          <h2>How to Use</h2>

          <ul>
            <li>Upload an image</li>
            <li>Wait for processing</li>
            <li>View raw metadata instantly</li>
          </ul>

        </section>

        {/* FOOTER */}
        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>
    </>
  );
}