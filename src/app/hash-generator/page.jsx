import HashGeneratorClient from "./HashGeneratorClient";

export const metadata = {
  title: "Hash Generator - CyberTools",
  description:
    "Generate MD5, SHA-1 and SHA-256 hashes instantly in your browser using CyberTools.",
  keywords: [
    "hash generator",
    "md5 generator",
    "sha1 generator",
    "sha256 generator",
    "hash tool online",
  ],
};

export default function Page() {
  return <HashGeneratorClient />;
}