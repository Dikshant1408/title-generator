import { MetadataRoute } from "next";

const BASE = "https://valorant-viral-generator.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,                       lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/terms`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    // SEO landing pages
    { url: `${BASE}/valorant-shorts-titles`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-hashtags`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-captions`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/valorant-thumbnail-text`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/valorant-youtube-shorts`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    // Hash anchors for in-page sections
    { url: `${BASE}/#generator`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/#tags-generator`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
  ];
}
