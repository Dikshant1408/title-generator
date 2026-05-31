import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Valorant Captions Generator – Viral TikTok & Reels Captions for Clips",
  description: "Generate viral Valorant captions for TikTok, Instagram Reels, and YouTube Shorts. AI-powered captions with emojis and CTAs that drive engagement. Free tool.",
  keywords: ["valorant captions", "valorant tiktok captions", "valorant reels captions", "valorant clip captions", "viral valorant captions"],
  openGraph: {
    title: "Valorant Captions Generator – Viral TikTok & Reels Captions",
    description: "Generate viral Valorant captions for TikTok, Reels, and Shorts. Free AI tool.",
    url: `${SITE_URL}/valorant-captions`,
  },
};

const CAPTION_EXAMPLES = [
  {
    type: "ACE Clip",
    captions: [
      "5 kills. 1 clip. No remorse. Drop a 🔥 if you would've panicked here!",
      "They never stood a chance 😈 Follow for daily Valorant highlights!",
      "The ACE that broke the server 🤯 Which agent should I play next? 👇",
    ],
  },
  {
    type: "Clutch Play",
    captions: [
      "1v4 and I had 3 HP 💀 Like if you would've died here!",
      "Cleanest clutch of my life 🎯 Drop a ❤️ if you want more!",
      "They thought it was over 😤 Comment your rank below 👇",
    ],
  },
  {
    type: "Anime Edit",
    captions: [
      "The demon awakens 🌸 Follow for more cinematic Valorant edits!",
      "This is what peak performance looks like ⚡ Drop a 🔥 if you felt this!",
      "Some are born great. Others clutch 1v5. 🌙 Which agent is your main? 👇",
    ],
  },
];

const FAQS = [
  { q: "What makes a good Valorant TikTok caption?", a: "A great Valorant TikTok caption does three things: hooks the viewer in the first line, builds excitement or curiosity, and ends with a call to action (CTA). The first line is critical because TikTok shows only the first 1-2 lines before the 'more' button. Start with the most exciting part — '1v5 and I had 3 HP' is better than 'Check out this crazy clutch I did'." },
  { q: "Should I use emojis in Valorant captions?", a: "Yes — emojis significantly increase engagement on TikTok and Instagram. They break up text, add visual interest, and signal emotion. Use 2-4 relevant emojis per caption. The most effective emojis for Valorant content are 🔥💀😱🤯🎯🔫⚡. Place them at the end of sentences or as bullet points, not randomly throughout the text." },
  { q: "What's the best CTA for Valorant clips?", a: "The best CTAs for Valorant clips are questions that invite comments: 'Would you have clutched this?', 'Comment your rank below', 'Which agent should I play next?'. Questions drive comments, and comments are one of the strongest engagement signals on TikTok and YouTube. Avoid generic CTAs like 'Like and subscribe' — they feel inauthentic." },
  { q: "How long should a Valorant TikTok caption be?", a: "Keep TikTok captions under 150 characters for the visible portion (before 'more'). The full caption can be up to 2,200 characters, but most viewers won't expand it. Put your hook and CTA in the first 100 characters, then add hashtags after. On Instagram Reels, you have more room — 150-300 characters works well for the main caption." },
  { q: "Should I write different captions for TikTok vs Instagram?", a: "Yes — the tone and format differ. TikTok captions are more casual, conversational, and meme-friendly. Instagram Reels captions can be slightly longer and more polished. YouTube Shorts descriptions should include keywords for SEO. Our AI generator creates platform-specific captions tailored to each platform's style and algorithm." },
];

export default function ValorantCaptionsPage() {
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Captions Generator</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Generate viral captions for your Valorant TikTok, Instagram Reels, and YouTube Shorts. AI-crafted with emojis and CTAs that drive real engagement.
          </p>
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl mt-6">
            💬 Generate Captions Free
          </Link>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Why Captions Matter for Valorant Content</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>Your caption is the second thing viewers see after your thumbnail and title. On TikTok, the caption appears over your video — it&apos;s part of the viewing experience, not an afterthought. A well-crafted caption can increase watch time, drive comments, and push your video to more viewers through the algorithm.</p>
            <p>The most important element of a Valorant caption is the call to action. Asking viewers a question (&quot;Would you have clutched this?&quot;) generates comments, which is one of the strongest signals TikTok and YouTube use to determine whether to push your content to more people. More comments = more reach.</p>
            <p>Captions also serve an SEO function on YouTube. The description is indexed by Google and YouTube&apos;s search engine. Including keywords like &quot;Valorant clutch&quot;, &quot;Jett gameplay&quot;, and &quot;Valorant highlights&quot; in your description helps your video rank in search results.</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Caption Examples by Clip Type</h2>
          <div className="space-y-6">
            {CAPTION_EXAMPLES.map((ex) => (
              <div key={ex.type} className="glass-card p-6">
                <h3 className="font-bold text-purple-400 text-sm uppercase tracking-wide mb-4">{ex.type}</h3>
                <div className="space-y-3">
                  {ex.captions.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/15 text-slate-300 text-sm leading-relaxed">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Caption Formula That Works</h2>
          <div className="space-y-4 text-slate-400">
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <p className="font-semibold text-white mb-2">Formula: Hook + Context + CTA</p>
              <p className="text-sm">Example: &quot;<span className="text-purple-300">1v4 and I had 3 HP</span> 💀 <span className="text-blue-300">Cleanest clutch of my Valorant career.</span> <span className="text-cyan-300">Would you have won this? 👇</span>&quot;</p>
            </div>
            <ul className="space-y-2 text-sm">
              <li><strong className="text-white">Hook:</strong> The most exciting stat or moment — put it first</li>
              <li><strong className="text-white">Context:</strong> Brief description of what happened</li>
              <li><strong className="text-white">CTA:</strong> A question or action that invites engagement</li>
            </ul>
          </div>
        </div>

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
              { href: "/valorant-shorts-titles", label: "Shorts Titles Generator" },
              { href: "/valorant-hashtags", label: "Hashtag Generator" },
              { href: "/valorant-thumbnail-text", label: "Thumbnail Text" },
              { href: "/valorant-youtube-shorts", label: "YouTube Shorts Guide" },
            ].map(l => <Link key={l.href} href={l.href} className="hashtag-pill">{l.label}</Link>)}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            💬 Generate Your Captions Now — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
