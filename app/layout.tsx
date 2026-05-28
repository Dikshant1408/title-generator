import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    url: "https://valorantviral.vercel.app",
    title: "ValorantViral – AI Viral Title & Hashtag Generator",
    description:
      "Turn your Valorant clips into viral Shorts. Generate titles, captions, hashtags & more with AI.",
    siteName: "ValorantViral",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
  metadataBase: new URL("https://valorantviral.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://valorantviral.vercel.app" />
        <meta name="theme-color" content="#050508" />
        <link rel="icon" href="/favicon.ico" />

        {/* ── Google AdSense verification + Auto Ads ── */}
        {/* This script in <head> is what Google crawls to verify site ownership */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5851997796287592"
          crossOrigin="anonymous"
        />

        {/* AdSense site verification meta tag */}
        <meta
          name="google-adsense-account"
          content="ca-pub-5851997796287592"
        />
      </head>
      <body className={`${inter.className} animated-bg min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
