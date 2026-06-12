"use client";

import Script from "next/script";

export default function NativeBanner() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-3">
      <Script
        async
        data-cfasync="false"
        src="https://pl29722004.effectivecpmnetwork.com/690ce6cbd0826b5c5fe62ee5ee22cf0a/invoke.js"
        strategy="lazyOnload"
      />
      <div id="container-690ce6cbd0826b5c5fe62ee5ee22cf0a" />
    </div>
  );
}
