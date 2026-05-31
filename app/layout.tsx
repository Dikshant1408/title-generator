import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // fix font CLS
});

const SITE_URL = "https://valorant-viral-generator.vercel.app";

export const metadata: Metadata = {
  title: "ValorantViral – AI Viral Title & Hashtag Generator for Valorant Creators",
  description:
    "Generate viral YouTube Shorts titles, TikTok captions, hashtags, thumbnail text, and anime hype lines for your Valorant clips. Free AI-powered tool for content creators.",
  keywords: [
    "valorant viral titles",
    "valorant hashtag generator",
    "valorant youtube shorts",
    "valorant tiktok captions",
    "valorant content creator",
    "valorant clip titles",
    "viral gaming titles",
    "valorant shorts generator",
    "best valorant youtube titles",
    "valorant thumbnail text",
  ],
  authors: [{ name: "ValorantViral" }],
  creator: "ValorantViral",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "ValorantViral – AI Viral Title & Hashtag Generator",
    description:
      "Turn your Valorant clips into viral Shorts. Generate titles, captions, hashtags & more with AI.",
    siteName: "ValorantViral",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ValorantViral – AI Content Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ValorantViral – AI Viral Title & Hashtag Generator",
    description:
      "Turn your Valorant clips into viral Shorts. Free AI tool for creators.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#050508" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnect to AdSense origins — saves ~300ms LCP */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" />

        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-5851997796287592" />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="VbOud-rNqUMkcxFbAo5MAilwSmfScxu3ro_2z63BxUw" />
      </head>
      <body className={`${inter.className} page-bg min-h-screen`}>
        {children}

        {/* Google AdSense — loaded after interactive, non-blocking */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5851997796287592"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Auto Ads — single push, no duplicate enable_page_level_ads */}
        <Script id="adsense-auto" strategy="afterInteractive">
          {`
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-5851997796287592",
                enable_page_level_ads: true
              });
            } catch(e) {}
          `}
        </Script>
      </body>
    </html>
  );
}
