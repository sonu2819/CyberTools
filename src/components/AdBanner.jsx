import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4670338082148900"
      data-ad-slot="5693049065"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}