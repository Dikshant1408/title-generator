"use client";

import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";

interface StickyAdSidebarProps {
  side: "left" | "right";
}

export default function StickyAdSidebar({ side }: StickyAdSidebarProps) {
  const [visible, setVisible] = useState(false);

  // Fade in after mount so it doesn't flash on SSR
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const posClass = side === "left" ? "left-0" : "right-0";

  return (
    <div
      className={`fixed top-0 ${posClass} h-full z-40 pointer-events-none
        hidden xl:flex flex-col items-center justify-center gap-4
        transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ width: "160px" }}
    >
      {/* Wrapper re-enables pointer events only on the ad units */}
      <div className="pointer-events-auto flex flex-col gap-4 items-center">
        {/* Primary tall ad */}
        <AdBanner
          slot={side === "left" ? "LEFT_SIDEBAR_SLOT" : "RIGHT_SIDEBAR_SLOT"}
          format="vertical"
          className="w-[160px]"
          label="Ad"
        />

        {/* Secondary square ad — right side only */}
        {side === "right" && (
          <AdBanner
            slot="RIGHT_SIDEBAR_SQUARE_SLOT"
            format="rectangle"
            className="w-[160px]"
            label="Ad"
            showDevPlaceholder={true}
          />
        )}
      </div>
    </div>
  );
}
