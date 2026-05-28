"use client";

import { motion } from "framer-motion";
import { TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const TRENDING = [
  {
    category: "ACE Titles",
    color: "purple",
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
    color: "blue",
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
    color: "cyan",
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
    color: "pink",
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
  purple: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/10", pill: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  blue: { border: "border-blue-500/30", text: "text-blue-400", bg: "bg-blue-500/10", pill: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  cyan: { border: "border-cyan-500/30", text: "text-cyan-400", bg: "bg-cyan-500/10", pill: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  pink: { border: "border-pink-500/30", text: "text-pink-400", bg: "bg-pink-500/10", pill: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
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
      <span className="text-slate-300 text-sm leading-snug flex-1">{text}</span>
      <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-500" />
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
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-cyan-300 mb-4 border border-cyan-500/30">
            <TrendingUp className="w-4 h-4" />
            Trending Templates
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Proven{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Viral Formats
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-8"
        >
          These are starter templates. Use the AI generator above for fully custom, clip-specific content.
        </motion.p>
      </div>
    </section>
  );
}
