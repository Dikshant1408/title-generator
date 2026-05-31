import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Valorant Shorts Titles Generator – Best Viral YouTube Titles 2024",
  description:
    "Generate the best Valorant YouTube Shorts titles instantly. AI-powered viral title generator for Valorant clips — ACE, clutch, operator highlights and more. Free, no login.",
  keywords: ["valorant shorts titles", "valorant youtube titles", "viral valorant titles", "best valorant titles", "valorant clip titles generator"],
  openGraph: {
    title: "Valorant Shorts Titles Generator – Best Viral YouTube Titles",
    description: "Generate viral Valorant YouTube Shorts titles with AI. Free tool for content creators.",
    url: `${SITE_URL}/valorant-shorts-titles`,
  },
};

const EXAMPLES = [
  { clip: "Jett 1v5 clutch on Haven", titles: ["She said 'I got this' and meant it 💀", "1v5 and she didn't even flinch 🧊", "Jett said none of you are real 😈", "The most insane clutch you'll see today 🔥", "POV: You're the last one alive 😱"] },
  { clip: "Chamber ace with golden gun", titles: ["The golden gun was NOT ready for this 🔫", "Chamber said 'one shot, one kill' 🎯", "This ace should be illegal 🚨", "5 kills. 1 golden gun. Zero remorse. 💀", "Chamber just deleted the entire lobby 🤯"] },
  { clip: "Reyna 1v4 with 3 HP", titles: ["3 HP. 4 enemies. Watch what happens 😱", "Reyna mains never give up 👁️", "This 1v4 is actually illegal 🚨", "She had 3 HP and still won 💀", "The most clutch Reyna play ever 🔥"] },
];

const FAQS = [
  { q: "What makes a good Valorant YouTube Shorts title?", a: "The best Valorant Shorts titles combine emotional triggers (insane, illegal, broken), specific numbers (1v5, 3 HP), agent names, and emojis. They create curiosity and make viewers want to click. Titles like '1v5 and he didn't even flinch' consistently outperform generic titles because they tell a story in under 10 words." },
  { q: "How long should a Valorant Shorts title be?", a: "Keep Valorant Shorts titles between 6-12 words. YouTube truncates titles after about 60 characters on mobile, so front-load the most important information. The agent name, play type, and emotional hook should all appear in the first 50 characters." },
  { q: "Should I include the agent name in my Valorant title?", a: "Yes — agent-specific titles perform significantly better because they reach dedicated mains communities. A title like 'Jett ace on Haven' will appear in searches from Jett mains, Haven players, and general Valorant viewers. Always include the agent name when possible." },
  { q: "Do emojis help Valorant YouTube titles?", a: "Yes, emojis increase click-through rate by making titles stand out in the feed. Use 1-2 relevant emojis at the end of your title. The most effective emojis for Valorant content are 🔥💀😱🤯🎯🔫. Don't overuse them — one or two is optimal." },
  { q: "What's the best time to post Valorant Shorts?", a: "Post Valorant Shorts between 3-7 PM in your target audience's timezone. Tuesday through Thursday typically see the highest engagement. Posting within 1-2 hours of a major VCT match can also spike views as searches for Valorant content increase." },
];

export default function ValorantShortsTitlesPage() {
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
            Valorant Shorts{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Titles Generator</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Generate viral YouTube Shorts titles for your Valorant clips instantly. AI-optimized for maximum click-through rate.
          </p>
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl mt-6">
            ⚡ Generate Titles Free
          </Link>
        </div>

        {/* Main content */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">What Are Valorant Shorts Titles?</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>Valorant Shorts titles are the short, attention-grabbing headlines you put on your YouTube Shorts clips. They&apos;re one of the most important factors in whether your clip gets views or gets ignored. A great title can be the difference between 100 views and 100,000 views on the exact same clip.</p>
            <p>The YouTube Shorts algorithm uses your title to understand what your video is about and who to show it to. A title like &quot;Jett 1v5 clutch on Haven&quot; tells the algorithm to show your video to people who watch Jett content, Haven gameplay, and clutch highlights. This targeting is what drives organic growth.</p>
            <p>Beyond the algorithm, your title is the first thing a human viewer sees. It needs to create enough curiosity or excitement that they tap to watch. The best Valorant Shorts titles combine a specific play type, an emotional reaction, and a hook that makes the viewer feel like they&apos;re missing out if they don&apos;t watch.</p>
          </div>
        </div>

        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-black text-white mb-4">The Anatomy of a Viral Valorant Title</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>After analyzing thousands of top-performing Valorant clips, we&apos;ve identified the key elements that make a title go viral:</p>
            <ul className="space-y-3 ml-4">
              <li><strong className="text-white">1. Specific numbers:</strong> &quot;1v5&quot;, &quot;3 HP&quot;, &quot;5 kills&quot; — numbers create instant context and make the achievement feel concrete.</li>
              <li><strong className="text-white">2. Agent name:</strong> Always include the agent. &quot;Jett clutch&quot; reaches Jett mains. &quot;Chamber ace&quot; reaches Chamber players.</li>
              <li><strong className="text-white">3. Emotional trigger:</strong> Words like &quot;insane&quot;, &quot;illegal&quot;, &quot;broken&quot;, &quot;disgusting&quot; signal to viewers that something extraordinary happened.</li>
              <li><strong className="text-white">4. Map name:</strong> Including the map (&quot;on Haven&quot;, &quot;on Icebox&quot;) adds specificity and reaches map-specific audiences.</li>
              <li><strong className="text-white">5. Emojis:</strong> 1-2 relevant emojis at the end increase CTR by making your title stand out in the feed.</li>
            </ul>
          </div>
        </div>

        {/* Examples */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-6">Example Titles by Clip Type</h2>
          <div className="space-y-6">
            {EXAMPLES.map((ex) => (
              <div key={ex.clip} className="glass-card p-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Clip: &quot;{ex.clip}&quot;</p>
                <ul className="space-y-2">
                  {ex.titles.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-purple-400 mt-0.5">→</span>{t}
                    </li>
                  ))}
                </ul>
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

        {/* Internal links */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/valorant-hashtags", label: "Valorant Hashtag Generator" },
              { href: "/valorant-captions", label: "Valorant Captions Generator" },
              { href: "/valorant-thumbnail-text", label: "Valorant Thumbnail Text" },
              { href: "/valorant-youtube-shorts", label: "Valorant YouTube Shorts Guide" },
              { href: "/#generator", label: "AI Content Generator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hashtag-pill">{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            ⚡ Generate Your Titles Now — Free
          </Link>
        </div>
      </div>
    </main>
  );
}
