"use client";

import { useState } from "react";
import * as exifr from "exifr";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExifViewerClient() {
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
      const data = await exifr.parse(file, {
        gps: true,
      });

      console.log(data);

      setExifData(data || null);
    } catch (err) {
      console.error(err);
      setExifData(null);
    }

    setLoading(false);
  };

  const hasExif =
    exifData && Object.keys(exifData).length > 0;

  return (
    <main className="app tool-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>EXIF Viewer</h1>

        <p>
          Inspect image metadata instantly.
        </p>
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
                alt="Preview"
                style={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}

          {loading && (
            <p>Reading EXIF data...</p>
          )}

          {!loading && image && !hasExif && (
            <div className="output">
              ⚠️ No EXIF metadata found in this image.
            </div>
          )}

          {hasExif && (
            <div className="output">

              {Object.entries(exifData).map(([key, value]) => (

                <div
                  key={key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <strong
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {key}
                  </strong>

                  <span>{String(value)}</span>

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
          EXIF (Exchangeable Image File Format) data is hidden metadata stored
          inside photos. It can include the camera model, lens, exposure
          settings, date taken, GPS coordinates and much more.
        </p>

        <h2>How to Use</h2>

        <ul>
          <li>Upload an image.</li>
          <li>Wait a few seconds while the metadata is read.</li>
          <li>View all available EXIF information instantly.</li>
        </ul>

        <h2>What Information Can Be Found?</h2>

        <ul>
          <li>Camera make and model</li>
          <li>Lens information</li>
          <li>ISO value</li>
          <li>Shutter speed</li>
          <li>Aperture</li>
          <li>Image dimensions</li>
          <li>Date and time</li>
          <li>GPS coordinates (if available)</li>
        </ul>

      </section>

      <Footer />

    </main>
  );
}