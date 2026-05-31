import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Contact – ValorantViral",
  description: "Get in touch with ValorantViral. Send feedback, report bugs, or ask about creator partnerships.",
  openGraph: { title: "Contact ValorantViral", url: `${SITE_URL}/contact` },
};

const TOPICS = [
  { emoji: "💡", title: "Feature Request", desc: "Suggest a new feature or improvement to the generator." },
  { emoji: "🐛", title: "Bug Report", desc: "Found something broken? Let us know and we'll fix it." },
  { emoji: "🤝", title: "Creator Partnership", desc: "Want to collaborate or feature ValorantViral in your content?" },
  { emoji: "❓", title: "General Question", desc: "Anything else — we're happy to help." },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen page-bg py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mb-8 transition-colors">
          ← Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-4 border border-purple-500/30">
            📬 Get in Touch
          </div>
          <h1 className="text-4xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have feedback, found a bug, or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Topic cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {TOPICS.map((t) => (
            <div key={t.title} className="glass-card p-5">
              <div className="text-2xl mb-2">{t.emoji}</div>
              <h2 className="font-bold text-white mb-1">{t.title}</h2>
              <p className="text-slate-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div className="glass-card p-8 text-center mb-8">
          <h2 className="text-xl font-black text-white mb-3">Send Us an Email</h2>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            The fastest way to reach us. We typically respond within 24–48 hours.
            Please include as much detail as possible — screenshots help for bug reports.
          </p>
          <a
            href="mailto:godrikt1408@gmail.com?subject=ValorantViral Feedback"
            className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg"
          >
            📧 godrikt1408@gmail.com
          </a>
        </div>

        {/* Response time */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-white mb-4">What to Include</h2>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2"><span className="text-purple-400">→</span> Your browser and device (for bug reports)</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">→</span> Steps to reproduce the issue</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">→</span> Screenshot or screen recording if possible</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">→</span> What you expected vs what happened</li>
          </ul>
        </div>

        <p className="text-center text-xs text-slate-700 mt-8">
          VALORANT is a trademark of Riot Games. ValorantViral is not affiliated with Riot Games.
        </p>
      </div>
    </main>
  );
}
