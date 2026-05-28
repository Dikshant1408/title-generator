"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  className?: string;
  label?: string;
  /** Show a visible placeholder in dev mode (default true) */
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
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!publisherId || pushed.current || !insRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense script not yet loaded — will retry on next render
    }
  }, [publisherId]);

  /* ── Dev / no-publisher placeholder ── */
  if (isDev || !publisherId) {
    if (!showDevPlaceholder) return null;
    const heightClass =
      format === "horizontal" ? "min-h-[90px]" :
      format === "vertical"   ? "min-h-[600px]" :
      format === "rectangle"  ? "min-h-[250px]" :
                                "min-h-[90px]";
    return (
      <div
        className={`ad-placeholder ${heightClass} flex flex-col items-center justify-center gap-1 ${className}`}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-700 font-semibold">
          {label}
        </span>
        <span className="text-[10px] text-slate-800">
          {format} · slot {slot}
        </span>
      </div>
    );
  }

  /* ── Real AdSense unit ── */
  return (
    <div className={`overflow-hidden text-center ${className}`}>
      <p className="text-[10px] text-slate-700 mb-1 uppercase tracking-widest">
        {label}
      </p>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
