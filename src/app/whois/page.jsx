import WhoisClient from "./WhoisClient";

export const metadata = {
  title: "WHOIS Lookup - CyberTools",
  description:
    "Lookup domain registration details, registrar, WHOIS records, nameservers, domain status, creation date, expiration date, and ownership information instantly with CyberTools.",
  keywords: [
    "whois lookup",
    "whois checker",
    "whois tool",
    "whois search",
    "domain whois",
    "domain lookup",
    "domain information",
    "domain checker",
    "domain registration lookup",
    "domain registration",
    "domain details",
    "domain owner lookup",
    "domain owner",
    "registrar lookup",
    "domain registrar",
    "whois database",
    "whois records",
    "dns lookup",
    "nameserver lookup",
    "domain status checker",
    "domain expiry checker",
    "domain expiration date",
    "domain creation date",
    "website lookup",
    "website information",
    "check domain",
    "online whois",
    "free whois lookup",
    "cybertools",
    "domain intelligence",
  ],
};

export default function Page() {
  return <WhoisClient />;
}