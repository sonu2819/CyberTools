import ImageToPDFClient from "./ImageToPDFClient";

export const metadata = {
  title:
    "Image to PDF Converter - Convert JPG, PNG & WebP to PDF Online Free",

  description:
    "Convert JPG, JPEG, PNG, WebP, BMP, GIF and TIFF images to PDF online for free. Merge multiple images into one high-quality PDF instantly. Fast, secure and works entirely in your browser.",

  alternates: {
    canonical: "https://mycybertools.vercel.app/image-to-pdf",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Image to PDF Converter",
    description:
      "Convert JPG, PNG, WebP and other images into a PDF online for free.",
    url: "https://mycybertools.vercel.app/image-to-pdf",
    siteName: "CyberTools",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Image to PDF Converter",
    description:
      "Convert JPG, PNG, WebP and other images into a PDF online for free.",
  },

  keywords: [
    "image to pdf",
    "image to pdf converter",
    "convert image to pdf",
    "image to pdf online",
    "free image to pdf",
    "jpg to pdf",
    "jpeg to pdf",
    "png to pdf",
    "webp to pdf",
    "bmp to pdf",
    "gif to pdf",
    "tiff to pdf",
    "merge images into pdf",
    "multiple images to pdf",
    "combine images into pdf",
    "photos to pdf",
    "picture to pdf",
  ],
};

export default function Page() {
  return <ImageToPDFClient />;
}
