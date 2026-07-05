export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mycybertools.vercel.app/sitemap.xml",
    host: "https://mycybertools.vercel.app",
  };
}