"use client";

import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";

interface StickyAdSidebarProps {
  side: "left" | "right";
}

export default function StickyAdSidebar({ side }: StickyAdSidebarProps) {
  const [mounted, setMounted] = useState(false);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    // Only render ad ins tags when viewport is actually xl (1280px+)
    // This prevents the "No slot size for availableWidth=0" AdSense error
    const mq = window.matchMedia("(min-width: 1280px)");
    const handler = (e: MediaQueryListEvent) => setIsWide(e.matches);
    mq.addEventListener("change", handler);

    // Defer setting mounted and wide state to avoid synchronous cascading renders
    const timer = setTimeout(() => {
      setIsWide(mq.matches);
      setMounted(true);
    }, 0);

    return () => {
      mq.removeEventListener("change", handler);
      clearTimeout(timer);
    };
  }, []);

  const posClass = side === "left" ? "left-0" : "right-0";

  // Don't render anything on server or narrow screens
  if (!mounted || !isWide) return null;

  return (
    <div
      className={`fixed top-0 ${posClass} h-full z-40 pointer-events-none
        flex flex-col items-center justify-center gap-4`}
      style={{ width: "160px" }}
      aria-hidden="true"
    >
      <div className="pointer-events-auto flex flex-col gap-4 items-center">
        <AdBanner
          slot={side === "left" ? "LEFT_SIDEBAR_SLOT" : "RIGHT_SIDEBAR_SLOT"}
          format="vertical"
          className="w-[160px]"
          label="Ad"
        />
        {side === "right" && (
          <AdBanner
            slot="RIGHT_SIDEBAR_SQUARE_SLOT"
            format="rectangle"
            className="w-[160px]"
            label="Ad"
          />
        )}
      </div>
    </div>
  );
}
