import ExifViewerClient from "./ExifViewerClient";

export const metadata = {
  title: "EXIF Viewer | View Image Metadata Online | CyberTools",

  description:
    "View EXIF metadata online including camera model, GPS location, date taken, lens information and image settings. Fast, free and secure EXIF Viewer by CyberTools.",

  keywords: [
    "exif viewer",
    "image metadata viewer",
    "photo metadata",
    "camera metadata",
    "gps metadata",
    "exif reader",
    "image exif",
    "online exif viewer",
  ],
};

export default function Page() {
  return <ExifViewerClient />;
}