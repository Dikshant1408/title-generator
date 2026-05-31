"use client";

import dynamic from "next/dynamic";

// These components use browser APIs (canvas, matchMedia) — must be client-only
export const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);

export const StickyAdSidebar = dynamic(
  () => import("@/components/StickyAdSidebar"),
  { ssr: false }
);
