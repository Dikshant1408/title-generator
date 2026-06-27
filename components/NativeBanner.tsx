"use client";

import { useEffect, useRef } from "react";

export default function NativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const disableIntrusive = process.env.NEXT_PUBLIC_DISABLE_INTRUSIVE_ADS === "true";

  useEffect(() => {
    if (disableIntrusive || !containerRef.current) return;
    const container = containerRef.current;

    // Clear any previous content
    container.innerHTML = "";

    // Create the script element dynamically
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl29722004.effectivecpmnetwork.com/690ce6cbd0826b5c5fe62ee5ee22cf0a/invoke.js";

    // Append script to container so it runs in context of this div
    container.appendChild(script);

    return () => {
      // Cleanup on unmount using the local variable
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [disableIntrusive]);

  if (disableIntrusive) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-3">
      <div ref={containerRef} id="container-690ce6cbd0826b5c5fe62ee5ee22cf0a" />
    </div>
  );
}
