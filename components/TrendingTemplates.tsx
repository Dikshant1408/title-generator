"use client";

import { motion } from "framer-motion";
import { TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const TRENDING = [
  {
    category: "ACE Titles",
    color: "red",
    templates: [
      "He just deleted the entire lobby 🤯",
      "5 kills. 1 clip. No remorse. 💀",
      "They never stood a chance 😈",
      "The ACE that broke the internet 🔥",
      "POV: You're the last one alive 😱",
    ],
  },
  {
    category: "Clutch Titles",
    color: "redlight",
    templates: [
      "1v5 and he didn't even flinch 🧊",
      "This clutch is actually illegal 🚨",
      "The most insane 1v4 you'll see today",
      "He said 'I got this' and meant it 💪",
      "Clutch of the year? You decide 🏆",
    ],
  },
  {
    category: "Operator Titles",
    color: "offwhite",
    templates: [
      "The OP was not ready for this 🔫",
      "Sniper god just woke up 👁️",
      "One shot. One kill. Every time. 🎯",
      "This operator play is DISGUSTING 🤢",
      "Nobody move. Nobody gets hurt. 💀",
    ],
  },
  {
    category: "Anime Edit Captions",
    color: "muted",
    templates: [
      "The demon awakens 🌸",
      "This is what peak performance looks like ⚡",
      "He trained for this moment his whole life 🔥",
      "The final boss has entered the server 👹",
      "Some are born great. Others clutch 1v5. 🌙",
    ],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; pill: string }> = {
  red:      { border: "border-[rgba(255,70,85,0.3)]",  text: "text-[#FF4655]",  bg: "bg-[#FF4655]/10",  pill: "bg-[#FF4655]/20 text-[#FF8A94] border-[rgba(255,70,85,0.3)]" },
  redlight: { border: "border-[rgba(255,107,122,0.3)]", text: "text-[#FF6B7A]",  bg: "bg-[#FF6B7A]/10",  pill: "bg-[#FF6B7A]/20 text-[#FF8A94] border-[rgba(255,107,122,0.3)]" },
  offwhite: { border: "border-[rgba(236,232,225,0.2)]", text: "text-[#ECE8E1]",  bg: "bg-[#ECE8E1]/6",   pill: "bg-[#ECE8E1]/15 text-[#ECE8E1] border-[rgba(236,232,225,0.2)]" },
  muted:    { border: "border-[rgba(181,181,181,0.2)]", text: "text-[#B5B5B5]",  bg: "bg-[#B5B5B5]/6",   pill: "bg-[#B5B5B5]/15 text-[#ECE8E1] border-[rgba(181,181,181,0.2)]" },
};

function CopyableTemplate({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center justify-between gap-3 p-3 rounded-lg bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 transition-all text-left group"
    >
      <span className="text-[#ECE8E1]/70 text-sm leading-snug flex-1">{text}</span>
      <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="w-4 h-4 text-[#00FFB2]" />
        ) : (
          <Copy className="w-4 h-4 text-[#B5B5B5]/50" />
        )}
      </span>
    </button>
  );
}

export default function TrendingTemplates() {
  return (
    <section className="relative py-20 px-4">
      <div className="neon-divider mb-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#FF8A94] mb-4 border border-[rgba(255,70,85,0.25)]">
            <TrendingUp className="w-4 h-4" />
            Trending Templates
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Proven{" "}
            <span className="bg-gradient-to-r from-[#FF4655] to-[#FF6B7A] bg-clip-text text-transparent">
              Viral Formats
            </span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-xl mx-auto">
            Steal these battle-tested title templates used by top Valorant creators. Click to copy.
          </p>
        </motion.div>

        {/* Template grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TRENDING.map((group, i) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 border ${c.border}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-1.5 rounded-lg ${c.bg}`}>
                    <TrendingUp className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <span className={`text-sm font-bold ${c.text} uppercase tracking-wide`}>
                    {group.category}
                  </span>
                </div>
                <div className="space-y-2">
                  {group.templates.map((t) => (
                    <CopyableTemplate key={t} text={t} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#B5B5B5]/40 text-sm mt-8">
          These are starter templates. Use the AI generator above for fully custom, clip-specific content.
        </p>
      </div>
    </section>
  );
}
