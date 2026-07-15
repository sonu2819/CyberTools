"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PDFMergeClient() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  const shortenName = (name, maxLength = 28) => {
  if (name.length <= maxLength) return name;

  const dotIndex = name.lastIndexOf(".");
  const extension = dotIndex !== -1 ? name.slice(dotIndex) : "";
  const baseName = dotIndex !== -1 ? name.slice(0, dotIndex) : name;

  return `${baseName.slice(0, maxLength - extension.length - 3)}...${extension}`;
};

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please select at least two PDF files.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/pdf-merge", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to merge PDFs.");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "CyberTools-Merged.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert(error.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="app tool-page">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Merge PDF Online Free</h1>

        <p>
          Combine multiple PDF files into one document instantly with
          CyberTools.
        </p>
      </section>

      {/* TOOL */}
      <section className="layout">
        <div className="card">
          <h2>📄 Merge PDF</h2>

          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFiles}
          />

          <p>
            <b>Selected Files:</b> {files.length}
          </p>

          
        {files.length > 0 && (
  <div className="preview-grid">
    {files.map((file, index) => (
      <div className="preview-card" key={index}>
        <p
          title={file.name}
          style={{
            fontSize: "14px",
            marginBottom: "12px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          📑 {shortenName(file.name)}
        </p>

        <button
          className="remove-btn"
          onClick={() => removeFile(index)}
        >
          Remove
        </button>
      </div>
    ))}
  </div>
)}

          <button
            className="main-btn"
            onClick={mergePDFs}
            disabled={loading || files.length < 2}
          >
            {loading ? "Merging PDFs..." : "Merge PDFs"}
          </button>
        </div>
      </section>

      {/* INFO */}
    
      <Footer />
    </main>
  );
}