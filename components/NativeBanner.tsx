"use client";

import { useEffect, useRef } from "react";

export default function NativeBanner() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src =
      "https://pl29722004.effectivecpmnetwork.com/690ce6cbd0826b5c5fe62ee5ee22cf0a/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const container = document.getElementById(
      "container-690ce6cbd0826b5c5fe62ee5ee22cf0a"
    );
    if (container) {
      container.parentNode?.insertBefore(script, container);
    } else {
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-3">
      <div id="container-690ce6cbd0826b5c5fe62ee5ee22cf0a" />
    </div>
  );
}
