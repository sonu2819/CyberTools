import DNSLookupClient from "./DNSLookupClient";

export const metadata = {
  title: "DNS Lookup Tool | Check A, MX, NS & TXT Records | CyberTools",

  description:
    "Lookup DNS records online instantly. Check A, MX, NS and TXT records for any domain using CyberTools free DNS Lookup tool.",

  keywords: [
    "dns lookup",
    "dns checker",
    "dns records",
    "a record lookup",
    "mx record lookup",
    "ns lookup",
    "txt record lookup",
    "online dns tool",
  ],
};

export default function Page() {
  return <DNSLookupClient />;
}