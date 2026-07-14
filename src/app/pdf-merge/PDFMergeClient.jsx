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
                    style={{
                      wordBreak: "break-word",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    📄 {file.name}
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
     {/* INFO */}
<section className="info-section">

  <h2>What is a PDF Merge Tool?</h2>

  <p>
    A PDF Merge tool allows you to combine multiple PDF files into a single
    document in just a few clicks. Whether you need to merge invoices,
    contracts, reports, scanned documents, assignments, or presentations,
    CyberTools makes the process fast, secure, and completely free. Your files
    are processed efficiently and merged in the order you select.
  </p>

  <h2>Why Use CyberTools PDF Merge?</h2>

  <ul>
    <li>Merge multiple PDF files into one document.</li>
    <li>Fast and secure PDF merging.</li>
    <li>No registration or sign-up required.</li>
    <li>Works directly in your browser.</li>
    <li>Maintains the original PDF quality.</li>
    <li>Supports large PDF files.</li>
    <li>Unlimited PDF merging.</li>
    <li>Compatible with Windows, macOS, Linux, Android, and iPhone.</li>
    <li>Free online PDF merger.</li>
    <li>Simple and easy-to-use interface.</li>
  </ul>

  <h2>How to Merge PDF Files</h2>

  <ol>
    <li>Select two or more PDF files from your device.</li>
    <li>Review the selected files.</li>
    <li>Remove any file you don't want to include.</li>
    <li>Click <strong>Merge PDFs</strong>.</li>
    <li>Download your merged PDF instantly.</li>
  </ol>

  <h2>Benefits of Merging PDF Files</h2>

  <p>
    Combining PDFs helps organize multiple documents into one easy-to-share
    file. Instead of sending several separate PDFs, you can merge everything
    into a single document, making it easier to store, print, upload, and
    distribute. This is especially useful for office work, school projects,
    legal paperwork, invoices, and scanned documents.
  </p>

  <h2>Frequently Asked Questions</h2>

  <h3>Is this PDF Merge tool free?</h3>

  <p>
    Yes. CyberTools PDF Merge is completely free and requires no registration.
  </p>

  <h3>Can I merge more than two PDF files?</h3>

  <p>
    Yes. You can merge multiple PDF documents into a single PDF in one
    operation.
  </p>

  <h3>Does merging affect PDF quality?</h3>

  <p>
    No. The original pages are preserved during the merge, so the document
    quality remains unchanged.
  </p>

  <h3>Are my PDF files secure?</h3>

  <p>
    Yes. Your files are processed only for merging and are not permanently
    stored on our servers.
  </p>

  <h3>Can I merge scanned PDF documents?</h3>

  <p>
    Yes. Scanned PDFs, reports, invoices, contracts, forms, and other PDF
    documents can all be merged together.
  </p>

  <h3>Does this tool work on mobile devices?</h3>

  <p>
    Yes. CyberTools PDF Merge works on Android phones, iPhones, tablets,
    Windows PCs, Macs, and Linux devices using any modern web browser.
  </p>

</section>
      <Footer />
    </main>
  );
}