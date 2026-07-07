import IPCheckerClient from "./IPCheckerClient";

export const metadata = {
  title: "My IP Address Checker - Find Your Public IP Online Free | CyberTools",

  description:
    "Check your public IP address instantly with CyberTools free online IP Checker. Find your IPv4 address, copy it easily and troubleshoot network or VPN connections.",

  keywords: [
    "my ip",
    "my ip address",
    "what is my ip",
    "what is my public ip",
    "check my ip",
    "check my ip address",
    "check my public ip",
    "find my ip",
    "find my ip address",
    "public ip checker",
    "ip checker",
    "ip address checker",
    "online ip checker",
    "free ip checker",
    "check public ip online",
    "find public ip address",
    "show my ip address",
    "my current ip address",
    "current public ip",
    "public ipv4 address",
    "ipv4 checker",
    "ipv4 address checker",
    "internet ip address",
    "ip address lookup",
    "ip finder",
    "vpn ip checker",
    "check vpn ip address",
    "copy my ip address",
    "public internet ip",
    "CyberTools IP Checker",
  ],

  alternates: {
    canonical: "/ip-checker",
  },

  openGraph: {
    title: "My IP Address Checker - Free Public IP Checker | CyberTools",
    description:
      "Check your public IP address instantly, verify VPN connections and copy your IPv4 address online for free.",
    url: "https://mycybertools.vercel.app/ip-checker",
    siteName: "CyberTools",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "My IP Address Checker - Free Public IP Checker",
    description:
      "Find your public IP address instantly with CyberTools free online IP Checker.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <IPCheckerClient />;
}