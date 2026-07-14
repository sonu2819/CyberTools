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

  description:"Free Cyber Tools provides fast online utilities for developers, students and cybersecurity learners. Use Password Generator, IP Checker, Base64 Encoder, UUID Generator, JSON Formatter, QR Generator, JWT Decoder, DNS Lookup, Whois Lookup, EXIF Viewer, Image Compressor, Image to PDF Converter, PDF Merge, Hash Generator, Email Breach Checker, Unix Timestamp Converter, Regex Tester, YouTube Trend Finder and more.",

 keywords: [
    "free cyber tools",
    "developer tools",
    "online tools",
    "network tools",
    "security tools",
    "cybersecurity tools",
    "password generator",
    "password strength checker",
    "IP checker",
    "IP geolocation",
    "DNS lookup",
    "Base64 encoder decoder",
    "UUID generator",
    "JSON formatter",
    "QR code generator",
    "JWT decoder",
    "URL encoder decoder",
    "EXIF viewer",
    "image compressor",
    "image to PDF converter",
    "email breach checker",
    "Unix timestamp converter",
    "regex tester",
    "hash generator",
    "YouTube trend finder",
    "whois lookup",
    "domain whois lookup",
    "whois checker",
    "pdf merge",
    "merge pdf",
    "pdf merger",
    "combine pdf",
    "join pdf",
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