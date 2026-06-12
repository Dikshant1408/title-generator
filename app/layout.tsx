import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const SITE_URL = "https://valorant-viral-generator.vercel.app";
const PUB_ID = "ca-pub-5851997796287592";

export const metadata: Metadata = {
  title: {
    default: "ValorantViral – AI Viral Title & Hashtag Generator for Valorant Creators",
    template: "%s | ValorantViral",
  },
  description:
    "Generate viral YouTube Shorts titles, TikTok captions, hashtags, thumbnail text, and anime hype lines for your Valorant clips. Free AI-powered tool for content creators.",
  keywords: [
    "valorant viral titles", "valorant hashtag generator", "valorant youtube shorts",
    "valorant tiktok captions", "valorant content creator", "valorant clip titles",
    "viral gaming titles", "valorant shorts generator", "best valorant youtube titles",
    "valorant thumbnail text", "valorant captions", "valorant shorts titles",
  ],
  authors: [{ name: "ValorantViral" }],
  creator: "ValorantViral",
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL,
    title: "ValorantViral – AI Viral Title & Hashtag Generator",
    description: "Turn your Valorant clips into viral Shorts. Generate titles, captions, hashtags & more with AI.",
    siteName: "ValorantViral",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "ValorantViral – AI Content Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValorantViral – AI Viral Title & Hashtag Generator",
    description: "Turn your Valorant clips into viral Shorts. Free AI tool for creators.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#050508" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preconnect to AdSense origins for faster ad loading */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        {/* AdSense & Search Console verification */}
        <meta name="google-adsense-account" content={PUB_ID} />
        <meta name="google-site-verification" content="VbOud-rNqUMkcxFbAo5MAilwSmfScxu3ro_2z63BxUw" />
        {/* AdSense verification — hardcoded static src so the crawler can see it */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5851997796287592"
          crossOrigin="anonymous"
        />
        {/* Website schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ValorantViral",
              "url": SITE_URL,
              "description": "Free AI-powered viral title and hashtag generator for Valorant content creators.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/?q={search_term_string}` },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Popunder ad */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.src='https://pl29702042.effectivecpmnetwork.com/f8/5b/b1/f85bb1105c24813e55e12295d3e5e40d.js';s.async=true;document.head.appendChild(s);})();`
          }}
        />
      </head>
      <body className={`${inter.className} page-bg min-h-screen`}>
        {children}
        <Analytics />
        {/* Auto Ads — guarded against duplicate calls */}
        <Script id="adsense-auto" strategy="afterInteractive">
          {`(function(){try{var a=window.adsbygoogle=window.adsbygoogle||[];if(!a._autoInit){a._autoInit=true;a.push({google_ad_client:"${PUB_ID}",enable_page_level_ads:true});}}catch(e){}})();`}
        </Script>
        {/* Social Bar */}
        <Script
          id="adsterra-social-bar"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.src='https://pl29722005.effectivecpmnetwork.com/88/4b/0a/884b0a82630c658bdefb99b1fd74f6b8.js';s.async=true;document.body.appendChild(s);})();`
          }}
        />
      </body>
    </html>
  );
}
