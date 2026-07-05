import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mycybertools.vercel.app"),

  title: {
    default: "CyberTools - Free Online Developer & Network Tools",
    template: "%s | CyberTools",
  },

  description:
    "CyberTools provides free online developer, network and security tools including Password Generator, JSON Formatter, QR Generator, Base64 Tool, UUID Generator, My IP Address, IP Geolocation Lookup, DNS Lookup, EXIF Metadata Viewer and Hash Generator.",

  keywords: [
    "CyberTools",
    "developer tools",
    "network tools",
    "security tools",
    "password generator",
    "json formatter",
    "qr generator",
    "uuid generator",
    "base64 tool",
    "dns lookup",
    "ip checker",
    "ip geolocation",
    "hash generator",
    "image compressor",
    "image to pdf",
  ],

  authors: [{ name: "CyberTools" }],
  creator: "CyberTools",
  publisher: "CyberTools",
  applicationName: "CyberTools",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "856fmXU1t7GzHG8mfG2JUoY-x5hz3nV3NCUCq_CM5pc",
  },

  openGraph: {
    title: "CyberTools - Free Online Developer & Network Tools",
    description:
      "Fast and free online developer, network and cybersecurity utilities.",
    url: "https://mycybertools.vercel.app",
    siteName: "CyberTools",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "CyberTools",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CyberTools",
    description:
      "Fast and free online developer, network and cybersecurity utilities.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#070b14",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4670338082148900"
        />
      </head>

      <body suppressHydrationWarning>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S4Q2MVTP69"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S4Q2MVTP69');
          `}
        </Script>
      </body>
    </html>
  );
}