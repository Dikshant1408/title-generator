import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Valorant Thumbnail Text Generator – Bold Text for Viral Thumbnails",
  description: "Generate bold, ALL CAPS thumbnail text for your Valorant YouTube videos. AI-powered thumbnail text that stops the scroll and drives clicks. Free tool.",
  keywords: ["valorant thumbnail text", "valorant thumbnail generator", "youtube thumbnail text valorant", "valorant thumbnail ideas", "gaming thumbnail text"],
  openGraph: {
    title: "Valorant Thumbnail Text Generator – Bold Text for Viral Thumbnails",
    description: "Generate bold thumbnail text for Valorant YouTube videos. Free AI tool.",
    url: `${SITE_URL}/valorant-thumbnail-text`,
  },
};

const EXAMPLES = [
  { clip: "1v5 clutch", texts: ["THIS SHOULD BE ILLEGAL", "1V5 CLUTCH", "THEY NEVER SAW IT COMING", "IMPOSSIBLE CLUTCH", "NO WAY THIS HAPPENED"] },
  { clip: "Operator ace", texts: ["5 KILLS 1 MAG", "OP GOD", "UNTOUCHABLE", "CLEAN SWEEP", "ZERO CHANCE"] },
  { clip: "Funny fail", texts: ["I CANT BELIEVE THIS", "HOW DID I MISS", "WORST PLAY EVER", "SKILL ISSUE", "DONT LAUGH"] },
];

const FAQS = [
  { q: "What should thumbnail text say for Valorant videos?", a: "Valorant thumbnail text should be short (2-5 words), ALL CAPS, and emotionally charged. The best thumbnail text creates curiosity or shock — 'THIS SHOULD BE ILLEGAL', '1V5 CLUTCH', 'IMPOSSIBLE'. Avoid full sentences. Think of it as a headline that works even without reading the title. The text should make viewers think 'I need to see what happened here'." },
  { q: "How many words should be on a Valorant thumbnail?", a: "2-5 words maximum. Thumbnails are viewed at small sizes on mobile, so less text is more readable. The most viral gaming thumbnails often have just 2-3 words in massive, bold font. If you need more context, let the title do the work — the thumbnail text should be the emotional hook." },
  { q: "What font style works best for Valorant thumbnails?", a: "Bold, sans-serif fonts with high contrast work best. Popular choices are Impact, Bebas Neue, and Anton. Use white text with a dark outline or shadow for readability on any background. Avoid thin or script fonts — they're unreadable at thumbnail size. The text should be visible even when the thumbnail is 100px wide." },
  { q: "Should I use the agent name in thumbnail text?", a: "Sometimes — it depends on the clip. For agent-specific highlights (Jett ace, Chamber clutch), including the agent name can help. But for pure reaction text ('THIS SHOULD BE ILLEGAL'), the agent name isn't necessary. Test both approaches and see which gets higher CTR for your channel." },
  { q: "What colors work best for Valorant thumbnail text?", a: "White text with a black outline is the most readable combination on any background. Red and yellow text also perform well for gaming thumbnails — they're high-contrast and attention-grabbing. Avoid colors that blend with your gameplay footage (greens, blues). The text needs to pop regardless of what's happening in the background." },
];

export default function ValorantThumbnailTextPage() {
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
            <span className="bg-gradient-to-r from-[#FF4655] to-[#FF6B7A] bg-clip-text text-transparent">Thumbnail Text</span>
            {" "}Generator
          </h1>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto">
            Generate bold, scroll-stopping thumbnail text for your Valorant YouTube videos. Short, punchy, ALL CAPS text that drives clicks.
          </p>
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl mt-6">
            🖼️ Generate Thumbnail Text Free
          </Link>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Why Thumbnail Text Matters</h2>
          <div className="space-y-4 text-[#B5B5B5] leading-relaxed">
            <p>Your thumbnail is the single most important factor in whether someone clicks your Valorant video. Studies show that thumbnails with bold text get 30-40% higher click-through rates than thumbnails without text. The text acts as a second headline — it communicates the emotional payoff of watching your video before the viewer even reads the title.</p>
            <p>For Valorant content specifically, thumbnail text like &quot;THIS SHOULD BE ILLEGAL&quot; or &quot;1V5 CLUTCH&quot; immediately tells the viewer what kind of content they&apos;re about to watch. It sets expectations and attracts the right audience — people who want to see insane plays, not casual gameplay.</p>
            <p>The key is keeping it short and shocking. Two to five words in massive, bold font is the sweet spot. Think of it as the emotional headline that works even when the thumbnail is displayed at 100 pixels wide on a mobile screen.</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Thumbnail Text Examples</h2>
          <div className="space-y-4">
            {EXAMPLES.map((ex) => (
              <div key={ex.clip} className="glass-card p-6">
                <p className="text-xs text-[#B5B5B5]/40 uppercase tracking-widest mb-4">Clip type: {ex.clip}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ex.texts.map((t) => (
                    <div key={t} className="bg-gradient-to-br from-[#FF4655]/8 to-[#FF6B7A]/5 border border-[rgba(255,70,85,0.2)] rounded-xl p-4 text-center">
                      <span className="text-white font-black text-base leading-tight block">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Thumbnail Text Best Practices</h2>
          <ul className="space-y-3 text-[#B5B5B5] text-sm">
            {[
              "Keep it to 2-5 words maximum — less is more at thumbnail size",
              "Use ALL CAPS for maximum impact and readability",
              "White text with black outline works on any background",
              "Position text in the top-left or bottom-right to avoid covering faces",
              "Use the same font consistently across all your thumbnails for brand recognition",
              "Test different text options — A/B test thumbnails to find what works for your audience",
              "Make sure text is readable at 100px wide (mobile thumbnail size)",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-[#FF4655] mt-0.5 flex-shrink-0">✓</span>
                {tip}
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
          <h2 className="text-lg font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/valorant-shorts-titles", label: "Shorts Titles Generator" },
              { href: "/valorant-hashtags", label: "Hashtag Generator" },
              { href: "/valorant-captions", label: "Captions Generator" },
              { href: "/valorant-youtube-shorts", label: "YouTube Shorts Guide" },
            ].map(l => <Link key={l.href} href={l.href} className="hashtag-pill">{l.label}</Link>)}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            🖼️ Generate Thumbnail Text Now — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
