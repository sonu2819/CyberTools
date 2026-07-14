import PDFMergeClient from "./PDFMergeClient";

export const metadata = {
  title:
    "Merge PDF Online Free - Combine Multiple PDF Files into One | CyberTools",

  description:
    "Merge PDF files online for free. Combine multiple PDF documents into a single PDF instantly without losing quality. Fast, secure, and works on Windows, Mac, Android, and iPhone.",

  keywords: [
    // Short-tail
    "merge pdf",
    "pdf merge",
    "combine pdf",
    "join pdf",
    "pdf merger",
    "merge pdf online",
    "combine pdf online",
    "pdf combiner",
    "merge documents",
    "join pdf files",

    // Long-tail
    "merge multiple pdf files into one",
    "combine multiple pdf files online",
    "merge pdf files without losing quality",
    "free pdf merger online",
    "merge pdf documents online free",
    "combine pdf pages into one file",
    "merge scanned pdf files",
    "merge large pdf files online",
    "best pdf merge tool",
    "online pdf combiner free",
    "merge two pdf files",
    "merge several pdf files",
    "pdf joiner online free",
    "merge pdf without watermark",
    "combine pdfs into one document",
    "merge pdf on mobile",
    "merge pdf on iphone",
    "merge pdf on android",
    "merge pdf on windows",
    "merge pdf on mac",
    "secure pdf merge online",
    "browser based pdf merger",
    "merge unlimited pdf files",
  ],

  alternates: {
    canonical: "https://mycybertools.vercel.app/pdf-merge",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Merge PDF Online Free | CyberTools",

    description:
      "Combine multiple PDF files into one PDF instantly. Fast, secure, free, and works directly in your browser.",

    url: "https://mycybertools.vercel.app/pdf-merge",

    siteName: "CyberTools",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Merge PDF Online Free",

    description:
      "Combine multiple PDF documents into one PDF quickly and securely.",
  },
};

export default function Page() {
  return <PDFMergeClient />;
}