"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ── Event tracking helpers ────────────────────────────────
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Convenience helpers used throughout the app
export const track = {
  generate: (clipType: string) => trackEvent("generate_content", "generator", clipType),
  regenerate: () => trackEvent("regenerate", "generator"),
  copyTitle: (index: number) => trackEvent("copy_title", "output", `title_${index}`),
  copyCaption: (index: number) => trackEvent("copy_caption", "output", `caption_${index}`),
  copyHashtags: () => trackEvent("copy_hashtags", "output"),
  copyThumbnail: (index: number) => trackEvent("copy_thumbnail", "output", `thumb_${index}`),
  copyAnime: (index: number) => trackEvent("copy_anime", "output", `anime_${index}`),
  copyAll: (section: string) => trackEvent("copy_all", "output", section),
  share: () => trackEvent("share", "output"),
  generateTags: (platforms: string[]) => trackEvent("generate_tags", "tags_generator", platforms.join(",")),
  clickCTA: (label: string) => trackEvent("click_cta", "navigation", label),
  pageView: (page: string) => trackEvent("page_view", "navigation", page),
};

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Establish default consent configuration
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
