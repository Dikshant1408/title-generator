import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "About ValorantViral – Free AI Content Generator for Valorant Creators",
  description:
    "Learn about ValorantViral — the free AI-powered tool that helps Valorant content creators generate viral YouTube Shorts titles, TikTok captions, hashtags, and more.",
  openGraph: {
    title: "About ValorantViral",
    description: "The free AI tool built for Valorant content creators.",
    url: `${SITE_URL}/about`,
  },
};

const FEATURES = [
  { emoji: "🎯", title: "5 Viral Titles", desc: "YouTube Shorts & TikTok optimized click-bait titles that actually get views." },
  { emoji: "💬", title: "3 Captions", desc: "Engaging captions with emojis and CTAs for TikTok, Reels, and Shorts." },
  { emoji: "#️⃣", title: "10 Hashtags", desc: "Real Valorant hashtags optimized per platform — no dead tags." },
  { emoji: "🖼️", title: "Thumbnail Text", desc: "Short, bold, ALL CAPS text designed to stop the scroll." },
  { emoji: "✨", title: "Anime Hype Lines", desc: "Dramatic cinematic narration lines for anime-style edits." },
  { emoji: "🏷️", title: "Tags Generator", desc: "Platform-specific tag sets for YouTube, TikTok, Instagram, and Twitter." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Describe your clip", desc: 'Type a short description like "Jett 1v4 operator clutch on Haven".' },
  { step: "02", title: "Select clip type", desc: "Choose from ACE, Clutch, Operator, Anime Edit, VCT-style, and more." },
  { step: "03", title: "Generate content", desc: "Our AI instantly creates titles, captions, hashtags, and hype lines." },
  { step: "04", title: "Copy and post", desc: "One-click copy any piece of content. No account needed." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen page-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#FF8A94] hover:text-[#FF4655] text-sm mb-10 transition-colors">
          ← Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#FF8A94] mb-6 border border-[rgba(255,70,85,0.3)]">
            ⚡ About ValorantViral
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#FF4655] to-[#FF6B7A] bg-clip-text text-transparent">
              Valorant Creators
            </span>
          </h1>
          <p className="text-[#B5B5B5] text-lg max-w-2xl mx-auto leading-relaxed">
            ValorantViral is a free AI-powered content generator that helps Valorant players
            turn their clips into viral YouTube Shorts, TikTok videos, and Instagram Reels —
            without spending hours writing titles and captions.
          </p>
        </div>

        {/* What it is */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">What is ValorantViral?</h2>
          <div className="space-y-4 text-[#B5B5B5] leading-relaxed">
            <p>
              ValorantViral is a free, no-login-required AI tool specifically designed for
              Valorant content creators. Whether you just hit a 1v5 clutch, landed a clean
              operator ace, or made a funny fail clip — we generate everything you need to
              make it go viral.
            </p>
            <p>
              The tool uses Groq&apos;s Llama AI model to generate content that&apos;s tailored to
              your specific clip, agent, map, and play style. Unlike generic title generators,
              ValorantViral understands Valorant terminology, agents, maps, and what makes
              gaming content perform on each platform.
            </p>
            <p>
              We built this because we noticed that most Valorant creators spend more time
              writing titles and captions than actually playing the game. ValorantViral
              eliminates that friction — describe your clip, click generate, and you&apos;re done.
            </p>
          </div>
        </section>

        {/* Why we built it */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Why We Built It</h2>
          <div className="space-y-4 text-[#B5B5B5] leading-relaxed">
            <p>
              Growing a Valorant YouTube or TikTok channel is hard. The game is competitive,
              the content space is crowded, and the algorithm rewards creators who post
              consistently with optimized titles and hashtags.
            </p>
            <p>
              Most small creators don&apos;t have the time or SEO knowledge to craft viral titles
              for every clip. They either post with generic titles that get no views, or they
              skip posting altogether. ValorantViral solves this by making professional-quality
              content optimization accessible to every creator — for free.
            </p>
            <p>
              Our goal is simple: help Valorant creators grow their channels by removing the
              biggest barrier between recording a clip and posting it.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6 text-center">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#B5B5B5] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="text-3xl font-black text-[#FF4655]/30 flex-shrink-0 w-10">{step.step}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-[#B5B5B5] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creator benefits */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">Creator Benefits</h2>
          <ul className="space-y-3 text-[#B5B5B5]">
            {[
              "Save 30+ minutes per clip on title and caption writing",
              "Get higher click-through rates with AI-optimized titles",
              "Reach more viewers with platform-specific hashtag stacks",
              "Post consistently without burning out on content writing",
              "Stand out with unique anime-style hype lines for cinematic edits",
              "Works for all Valorant agents, maps, and play styles",
              "No account, no credit card, no limits — completely free",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-[#FF4655] mt-0.5 flex-shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center glass-card p-8">
          <h2 className="text-2xl font-black text-white mb-4">Ready to Go Viral?</h2>
          <p className="text-[#B5B5B5] mb-6">It&apos;s free. No account needed. Start generating in seconds.</p>
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            ⚡ Try the Generator
          </Link>
        </div>

        <p className="text-center text-xs text-[#B5B5B5]/30 mt-8">
          VALORANT is a trademark of Riot Games. ValorantViral is not affiliated with or endorsed by Riot Games.
        </p>
      </div>
    </main>
  );
}
