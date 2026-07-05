"use client";

import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (
        adRef.current &&
        !adRef.current.getAttribute("data-adsbygoogle-status")
      ) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log("AdSense:", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4670338082148900"
      data-ad-slot="5693049065"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}