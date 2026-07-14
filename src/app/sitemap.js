export default function sitemap() {
  const baseUrl = "https://mycybertools.vercel.app";

  const routes = [
    "",
    "/password-generator",
    "/base64-tool",
    "/uuid-generator",
    "/json-formatter",
    "/qr-generator",
    "/password-strength-checker",
    "/url-encoder-decoder",
    "/jwt-decoder",
    "/ip-checker",
    "/ip-geolocation",
    "/dns-lookup",
    "/exif-viewer",
    "/image-compressor",
    "/image-to-pdf",
    "/hash-generator",
    "/email-breach-checker",
    "/unix-to-human",
    "/regex-tester",
    "/youtube-trends",
    "/whois",
    "/pdf-merge",
    "/about",
    "/privacy-policy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : ["/about", "/contact", "/privacy-policy"].includes(route)
        ? "monthly"
        : "weekly",
    priority:
      route === ""
        ? 1
        : ["/about", "/contact"].includes(route)
        ? 0.5
        : route === "/privacy-policy"
        ? 0.4
        : 0.9,
  }));
}