import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Valorant Hashtag Generator – Best Hashtags for TikTok, YouTube & Instagram",
  description: "Generate the best Valorant hashtags for TikTok, YouTube Shorts, and Instagram Reels. AI-optimized hashtag sets that actually get views. Free Valorant hashtag generator.",
  keywords: ["valorant hashtags", "valorant hashtag generator", "valorant tiktok hashtags", "valorant youtube hashtags", "best valorant hashtags 2024"],
  openGraph: {
    title: "Valorant Hashtag Generator – Best Hashtags for Every Platform",
    description: "Generate optimized Valorant hashtags for TikTok, YouTube, and Instagram. Free AI tool.",
    url: `${SITE_URL}/valorant-hashtags`,
  },
};

const PLATFORM_HASHTAGS = [
  {
    platform: "YouTube Shorts",
    color: "red",
    tags: ["#valorant", "#valorantclips", "#valoranthighlights", "#valorantmontage", "#shorts", "#youtubeshorts", "#gaming", "#vct", "#valorantedit", "#gamingclips"],
    tip: "Use all 500 characters available. Mix broad tags (#gaming) with niche tags (#valorantclips) for maximum reach.",
  },
  {
    platform: "TikTok",
    color: "pink",
    tags: ["#valorant", "#valorantclips", "#fyp", "#foryou", "#gaming", "#tiktokgaming", "#valorantfyp", "#gamingshorts", "#viral", "#vct"],
    tip: "Always include #fyp and #foryou. TikTok's algorithm heavily weights these tags for new creators.",
  },
  {
    platform: "Instagram Reels",
    color: "purple",
    tags: ["#valorant", "#valorantclips", "#reels", "#instareels", "#gaming", "#gamingcommunity", "#esports", "#valorantesports", "#explore", "#gaminglife"],
    tip: "Post hashtags in the first comment, not the caption. Use 20-30 tags for maximum reach on Reels.",
  },
  {
    platform: "Twitter/X",
    color: "blue",
    tags: ["#Valorant", "#VCT", "#gaming", "#esports"],
    tip: "Twitter limits you to 280 characters total. Use only 2-3 hashtags — more hurts engagement on X.",
  },
];

const FAQS = [
  { q: "What are the best Valorant hashtags for TikTok?", a: "The best Valorant hashtags for TikTok in 2024 are #valorant, #valorantclips, #fyp, #foryou, #gaming, #tiktokgaming, #valorantfyp, #gamingshorts, and #viral. Always include #fyp and #foryou as they signal to TikTok's algorithm to push your content to the For You page. Mix 3-5 niche Valorant tags with 2-3 broad viral tags for the best results." },
  { q: "How many hashtags should I use on YouTube Shorts?", a: "YouTube Shorts allows up to 500 characters of hashtags. Use all of them. Include a mix of broad tags (#gaming, #shorts), medium tags (#valorantclips, #valoranthighlights), and niche tags (#jettclips, #valorantace). More relevant hashtags = more discovery surfaces for your video." },
  { q: "Do hashtags actually help Valorant videos get views?", a: "Yes, but they're not the most important factor. Hashtags help with initial discovery and categorization, but the algorithm ultimately pushes content based on watch time and engagement. Use hashtags as a foundation, but focus on creating content that keeps viewers watching. A video with great retention and mediocre hashtags will outperform a video with perfect hashtags and poor retention." },
  { q: "Should I use the same hashtags every time?", a: "No — rotate your hashtag sets every few posts to avoid being flagged as spam by platform algorithms. Keep a core set of 5-6 essential tags (#valorant, #gaming, #fyp) and rotate the remaining tags based on the specific clip type, agent, and map." },
  { q: "What's the difference between hashtags on TikTok vs YouTube?", a: "On TikTok, hashtags directly influence which For You pages your content appears on — they're critical for discovery. On YouTube, hashtags are less important than the title and description for SEO, but they still help categorize your content. On Instagram, hashtags are the primary discovery mechanism for Reels. Tailor your hashtag strategy to each platform." },
];

export default function ValorantHashtagsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <main className="min-h-screen page-bg py-20 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mb-8 transition-colors">← Back to Home</Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Valorant{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Hashtag Generator</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Generate platform-optimized hashtag sets for your Valorant clips. Tailored for YouTube, TikTok, Instagram, and Twitter.
          </p>
          <Link href="/#tags-generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl mt-6">
            # Generate Hashtags Free
          </Link>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Why Hashtags Matter for Valorant Content</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>Hashtags are how platforms categorize and distribute your Valorant content. When you use #valorantclips on TikTok, your video gets added to that hashtag&apos;s feed — giving it exposure to everyone who follows or searches that tag. On YouTube Shorts, hashtags help the algorithm understand your content and recommend it to the right viewers.</p>
            <p>The key is using the right mix of hashtags. Too broad (#gaming alone) and you&apos;re competing with millions of videos. Too niche (#jettoperatorclutchonhaven) and nobody searches for it. The sweet spot is a combination of high-volume Valorant tags, medium-volume agent/map tags, and platform-specific viral tags.</p>
          </div>
        </div>

        {/* Platform hashtags */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Best Hashtags by Platform</h2>
          <div className="space-y-4">
            {PLATFORM_HASHTAGS.map((p) => (
              <div key={p.platform} className="glass-card p-6">
                <h3 className="font-bold text-white mb-3">{p.platform}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map(t => <span key={t} className="hashtag-pill">{t}</span>)}
                </div>
                <p className="text-slate-500 text-xs">💡 {p.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/valorant-shorts-titles", label: "Valorant Shorts Titles" },
              { href: "/valorant-captions", label: "Valorant Captions" },
              { href: "/valorant-thumbnail-text", label: "Thumbnail Text Generator" },
              { href: "/#tags-generator", label: "AI Tags Generator" },
            ].map(l => <Link key={l.href} href={l.href} className="hashtag-pill">{l.label}</Link>)}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#tags-generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            # Generate Your Hashtags Now — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
