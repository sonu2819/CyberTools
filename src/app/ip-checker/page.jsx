import IPCheckerClient from "./IPCheckerClient";

export const metadata = {
  title: "My IP Address | Free Public IP Checker | CyberTools",

  description:
    "Check your public IP address instantly with CyberTools free online IP Checker. Find your IPv4 address, copy it easily and troubleshoot network or VPN connections.",

  keywords: [
    "my ip",
    "ip checker",
    "public ip",
    "what is my ip",
    "find my ip",
    "ip address lookup",
    "check ip online",
    "internet ip",
  ],
};

export default function Page() {
  return <IPCheckerClient />;
}