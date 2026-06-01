import { MetadataRoute } from "next";

const BASE = "https://valorant-viral-generator.vercel.app";

// Fixed dates — update manually when content changes significantly
const DATES = {
  home:    new Date("2026-06-01"),
  pages:   new Date("2026-06-01"),
  landing: new Date("2026-06-01"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,                              lastModified: DATES.home,    changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                         lastModified: DATES.pages,   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,                       lastModified: DATES.pages,   changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,                       lastModified: DATES.pages,   changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/terms`,                         lastModified: DATES.pages,   changeFrequency: "monthly", priority: 0.5 },
    // SEO landing pages
    { url: `${BASE}/valorant-shorts-titles`,        lastModified: DATES.landing, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-hashtags`,             lastModified: DATES.landing, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-captions`,             lastModified: DATES.landing, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-thumbnail-text`,       lastModified: DATES.landing, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/valorant-youtube-shorts`,       lastModified: DATES.landing, changeFrequency: "weekly",  priority: 0.8 },
  ];
}
