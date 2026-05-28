"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is this tool completely free?",
    a: "Yes, 100% free. No account required, no credit card, no hidden limits. Just describe your clip and generate viral content instantly.",
  },
  {
    q: "How does the AI generate the content?",
    a: "We use Google's Gemini AI model, which is trained on vast amounts of gaming content, viral video data, and social media trends. It understands Valorant agents, maps, play types, and what makes gaming content go viral on each platform.",
  },
  {
    q: "Can I use the generated content on YouTube, TikTok, and Instagram?",
    a: "Absolutely. All generated content is yours to use on any platform — YouTube Shorts, TikTok, Instagram Reels, Twitter/X, Twitch clips, and more. No attribution required.",
  },
  {
    q: "What clip types are supported?",
    a: "We support 10 clip types: ACE, Clutch, Operator/Sniper, Sheriff Pistol, VCT/Pro Style, Anime Edit, Montage, Funny/Fail, Toxic/Trash Talk, and Pro Player Style. Each type generates content tailored to that specific vibe.",
  },
  {
    q: "How many times can I generate content?",
    a: "There's no hard limit. You can generate as many times as you want. If you don't like the output, just hit Regenerate for a fresh set of titles, captions, and hashtags.",
  },
  {
    q: "Will these titles actually get me more views?",
    a: "The titles are optimized based on what performs well in the Valorant content space — high CTR patterns, emotional triggers, and algorithm-friendly structures. Results vary based on your content quality, posting time, and consistency, but strong titles are one of the biggest levers for growth.",
  },
  {
    q: "Do I need to credit ValorantViral when using the content?",
    a: "No credit needed. The content is generated for you to use freely. That said, if you find it useful, sharing the tool with other creators helps us keep it free.",
  },
  {
    q: "Can I use this for other games besides Valorant?",
    a: "The tool is specifically optimized for Valorant content — it knows agents, maps, and Valorant-specific terminology. For best results, use it for Valorant clips. We may add support for other games in the future.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-purple-500/5 transition-colors"
      >
        <span className="font-semibold text-white text-sm sm:text-base leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 border-t border-purple-500/10">
              <p className="text-slate-400 text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-20 px-4">
      <div className="neon-divider mb-20" />
      <div className="glow-orb w-72 h-72 bg-purple-600/10 top-10 right-10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-4 border border-purple-500/30">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Common{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about ValorantViral.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center glass-card p-6"
        >
          <p className="text-slate-400 mb-4">Still have questions? Just start generating — it&apos;s free.</p>
          <a
            href="#generator"
            className="neon-btn inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl"
          >
            Try the Generator →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
