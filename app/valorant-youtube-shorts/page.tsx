import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Valorant YouTube Shorts Guide – How to Go Viral in 2024",
  description: "Complete guide to growing your Valorant YouTube Shorts channel. Learn titles, hashtags, thumbnails, posting times, and AI tools to go viral. Free guide.",
  keywords: ["valorant youtube shorts", "valorant shorts guide", "how to grow valorant channel", "valorant youtube tips", "valorant shorts viral"],
  openGraph: {
    title: "Valorant YouTube Shorts Guide – How to Go Viral in 2024",
    description: "Complete guide to growing your Valorant YouTube Shorts channel.",
    url: `${SITE_URL}/valorant-youtube-shorts`,
  },
};

const CHECKLIST = [
  "Clip is under 60 seconds (Shorts format)",
  "Title includes agent name + play type + emotional trigger",
  "Thumbnail has bold ALL CAPS text (2-5 words)",
  "Description includes 10+ relevant hashtags",
  "First 3 seconds are the most exciting moment",
  "Posted between 3-7 PM in target timezone",
  "Replied to comments within first hour",
  "Shared to TikTok and Instagram Reels same day",
];

const FAQS = [
  { q: "How do I grow a Valorant YouTube Shorts channel?", a: "Growing a Valorant Shorts channel requires consistency, optimization, and quality. Post at least 3-5 Shorts per week. Optimize every title with agent names, play types, and emotional triggers. Use our AI generator to create titles and hashtags for every clip. Engage with comments in the first hour after posting — this signals to YouTube that your content is worth pushing. Focus on your best clips, not every clip." },
  { q: "What type of Valorant clips get the most views on YouTube Shorts?", a: "The highest-performing Valorant Shorts content in order: 1) 1v5 clutches (especially with low HP), 2) ACE rounds with unusual weapons (Sheriff, Classic), 3) Operator highlights with clean flicks, 4) Funny fails and rage moments, 5) Anime-style cinematic edits. Clutch plays consistently outperform because they have a built-in narrative arc — the viewer is invested in whether you win." },
  { q: "How long should Valorant YouTube Shorts be?", a: "Keep Valorant Shorts between 15-45 seconds for maximum performance. Under 15 seconds often doesn't give enough context. Over 60 seconds exits the Shorts format. The sweet spot is 20-35 seconds — long enough to show the full play, short enough to maintain attention. Always start with the most exciting moment in the first 3 seconds to hook viewers before they scroll." },
  { q: "What's the best posting schedule for Valorant Shorts?", a: "Post Valorant Shorts 3-5 times per week, consistently. The best times are 3-7 PM in your target audience's timezone (typically US Eastern or Pacific). Tuesday through Thursday see the highest engagement. Avoid posting multiple Shorts on the same day — space them out. Consistency matters more than frequency; it's better to post 3 times per week every week than 7 times one week and nothing the next." },
  { q: "Should I post the same Valorant clip on TikTok and YouTube Shorts?", a: "Yes — cross-posting is one of the most efficient growth strategies. Post the same clip on TikTok, YouTube Shorts, and Instagram Reels. Each platform has a different audience, so you're not cannibalizing views. Use platform-specific titles and hashtags for each (our generator creates these automatically). Some creators get 10x more views on TikTok than YouTube for the same clip, or vice versa." },
  { q: "Do I need to edit my Valorant clips for YouTube Shorts?", a: "Basic editing is recommended but not required. At minimum: trim to the best 20-40 seconds, add your username/watermark, and include a simple intro or outro. For higher performance, add text overlays showing HP/agent info, use trending audio, and add a reaction cam if possible. Full cinematic edits (anime-style) perform extremely well but require more time investment." },
];

export default function ValorantYoutubeShortsPage() {
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
        <Link href="/" className="inline-flex items-center gap-2 text-[#FF8A94] hover:text-[#FF4655] text-sm mb-8 transition-colors">← Back to Home</Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Valorant{" "}
            <span className="bg-gradient-to-r from-[#FF4655] to-[#FF6B7A] bg-clip-text text-transparent">YouTube Shorts</span>
            {" "}Guide
          </h1>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            The complete guide to growing your Valorant YouTube Shorts channel — titles, thumbnails, hashtags, posting strategy, and AI tools.
          </p>
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl mt-6">
            ▶ Start Generating Content Free
          </Link>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Why YouTube Shorts for Valorant?</h2>
          <div className="space-y-4 text-[#B5B5B5] leading-relaxed">
            <p>YouTube Shorts is the fastest-growing format for gaming content in 2024. Valorant clips are perfectly suited for Shorts — they&apos;re action-packed, short, and have a built-in audience of millions of active players. Unlike long-form YouTube videos that require hours of editing, a Valorant Short can go from clip to posted in under 10 minutes.</p>
            <p>The YouTube Shorts algorithm is particularly generous to new creators. Unlike the main YouTube feed where established channels dominate, Shorts regularly pushes content from small channels to millions of viewers if the engagement metrics are strong. A single viral Valorant Short can add thousands of subscribers overnight.</p>
            <p>The key to success on Valorant Shorts is optimization — the right title, thumbnail, hashtags, and posting time can be the difference between 100 views and 100,000 views on the exact same clip. This guide covers everything you need to know.</p>
          </div>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">The Valorant Shorts Formula</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#B5B5B5] text-sm">
            {[
              { title: "🎬 Clip Selection", desc: "Choose your best 20-40 seconds. Start with the most exciting moment. 1v5 clutches, ACEs, and unusual weapon highlights perform best." },
              { title: "📝 Title Optimization", desc: "Include agent name + play type + emotional trigger. Use our AI generator for titles optimized for the Shorts algorithm." },
              { title: "🖼️ Thumbnail", desc: "Bold ALL CAPS text (2-5 words), high contrast, readable at 100px. The thumbnail is your #1 CTR driver." },
              { title: "#️⃣ Hashtags", desc: "Use all 500 characters. Mix #valorant, #shorts, agent-specific tags, and map tags. Our generator creates the optimal stack." },
              { title: "⏰ Posting Time", desc: "3-7 PM in your target timezone. Tuesday-Thursday for highest engagement. Consistency beats frequency." },
              { title: "💬 Engagement", desc: "Reply to every comment in the first hour. Ask a question in your caption to drive comments. Comments = algorithm boost." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-white/3 border border-white/5">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-post checklist */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Pre-Post Checklist</h2>
          <ul className="space-y-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#B5B5B5] text-sm">
                <span className="w-5 h-5 rounded border border-[rgba(255,70,85,0.4)] flex-shrink-0 flex items-center justify-center text-[#FF4655] text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">All Valorant Creator Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/valorant-shorts-titles", label: "Shorts Titles Generator" },
              { href: "/valorant-hashtags", label: "Hashtag Generator" },
              { href: "/valorant-captions", label: "Captions Generator" },
              { href: "/valorant-thumbnail-text", label: "Thumbnail Text" },
              { href: "/#generator", label: "AI Content Generator" },
              { href: "/#tags-generator", label: "Tags Generator" },
            ].map(l => <Link key={l.href} href={l.href} className="hashtag-pill">{l.label}</Link>)}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            ▶ Generate Your Viral Content Now — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
