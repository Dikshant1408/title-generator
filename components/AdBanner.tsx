"use client";

import { useEffect, useRef, useState } from "react";

/* ── Map slot name → env var value ─────────────────────── */
const SLOT_MAP: Record<string, string | undefined> = {
  LEFT_SIDEBAR_SLOT:          process.env.NEXT_PUBLIC_AD_SLOT_LEFT_SIDEBAR,
  RIGHT_SIDEBAR_SLOT:         process.env.NEXT_PUBLIC_AD_SLOT_RIGHT_SIDEBAR,
  RIGHT_SIDEBAR_SQUARE_SLOT:  process.env.NEXT_PUBLIC_AD_SLOT_RIGHT_SIDEBAR_SQUARE,
  TOP_LEADERBOARD_SLOT:       process.env.NEXT_PUBLIC_AD_SLOT_TOP_LEADERBOARD,
  AFTER_GENERATOR_SLOT:       process.env.NEXT_PUBLIC_AD_SLOT_AFTER_GENERATOR,
  AFTER_TAGS_SLOT:            process.env.NEXT_PUBLIC_AD_SLOT_AFTER_TAGS,
  MID_PAGE_SLOT:              process.env.NEXT_PUBLIC_AD_SLOT_MID_PAGE,
  PRE_FAQ_SLOT:               process.env.NEXT_PUBLIC_AD_SLOT_PRE_FAQ,
  BOTTOM_LEADERBOARD_SLOT:    process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM_LEADERBOARD,
  RESULTS_INLINE_TOP_SLOT:    process.env.NEXT_PUBLIC_AD_SLOT_RESULTS_TOP,
  RESULTS_INLINE_MID_SLOT:    process.env.NEXT_PUBLIC_AD_SLOT_RESULTS_MID,
  RESULTS_INLINE_BOTTOM_SLOT: process.env.NEXT_PUBLIC_AD_SLOT_RESULTS_BOTTOM,
};

interface AdBannerProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  className?: string;
  label?: string;
  showDevPlaceholder?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({
  slot,
  format = "auto",
  className = "",
  label = "Advertisement",
  showDevPlaceholder = true,
}: AdBannerProps) {
  const [mounted, setMounted] = useState(false);
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-5851997796287592";
  const resolvedSlot = SLOT_MAP[slot] ?? slot; // fall back to raw value if not in map
  const isDev = process.env.NODE_ENV === "development";
  
  // Ad is only ready if we have a valid publisher ID and the slot ID is a numeric string
  const isValidSlot = !!resolvedSlot && /^\d+$/.test(resolvedSlot);
  const isReady = !!publisherId && isValidSlot;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted || !isReady || pushed.current || !insRef.current) return;
    
    // Defer the push to ensure the DOM is fully laid out and has correct dimensions
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && insRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushed.current = true;
        }
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [mounted, isReady]);

  // Determine placeholder height to prevent layout shift (CLS)
  const heightClass =
    format === "horizontal" ? "min-h-[90px]"  :
    format === "vertical"   ? "min-h-[600px]" :
    format === "rectangle"  ? "min-h-[250px]" :
                              "min-h-[90px]";

  /* ── Server-side and Initial Client Render (Hydration-Safe) ── */
  if (!mounted || !isReady) {
    if (!showDevPlaceholder) return null;
    return (
      <div
        className={`ad-placeholder ${heightClass} flex flex-col items-center justify-center gap-1 ${className}`}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#B5B5B5]/20 font-semibold">
          {label}
        </span>
        {isDev && (
          <span className="text-[9px] text-[#B5B5B5]/15">{format} · {slot}</span>
        )}
      </div>
    );
  }

  /* ── Real AdSense unit (Only rendered client-side after mount) ── */
  return (
    <div className={`overflow-hidden text-center ${className}`}>
      <p className="text-[10px] text-[#B5B5B5]/30 mb-1 uppercase tracking-widest">
        {label}
      </p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={resolvedSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
