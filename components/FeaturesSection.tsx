"use client";

import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Hash,
  Image,
  Sparkles,
  Copy,
  Smartphone,
  Globe,
  RefreshCw,
  Shield,
} from "lucide-react";

const FEATURES = [
  {
    icon: TrendingUp,
    color: "purple",
    title: "5 Viral Titles",
    desc: "Click-bait optimized titles engineered for YouTube Shorts and TikTok algorithms.",
  },
  {
    icon: Zap,
    color: "blue",
    title: "3 Captions",
    desc: "Engaging captions with emojis and CTAs that drive comments and shares.",
  },
  {
    icon: Hash,
    color: "cyan",
    title: "10 Hashtags",
    desc: "Real Valorant hashtags that actually get views — no filler tags.",
  },
  {
    icon: Image,
    color: "teal",
    title: "Thumbnail Text",
    desc: "Short, bold, ALL CAPS text designed to stop the scroll on any platform.",
  },
  {
    icon: Sparkles,
    color: "pink",
    title: "Anime Hype Lines",
    desc: "Dramatic anime-narrator style lines for cinematic edits and intros.",
  },
  {
    icon: Copy,
    color: "purple",
    title: "One-Click Copy",
    desc: "Copy any piece of content instantly. No friction, no sign-up needed.",
  },
  {
    icon: RefreshCw,
    color: "blue",
    title: "Regenerate Anytime",
    desc: "Not happy with the output? Regenerate with one click for fresh results.",
  },
  {
    icon: Smartphone,
    color: "cyan",
    title: "Mobile First",
    desc: "Fully optimized for phones — generate content right after recording your clip.",
  },
  {
    icon: Globe,
    color: "pink",
    title: "10 Clip Types",
    desc: "Ace, Clutch, Operator, Anime Edit, VCT-style and more — tailored output every time.",
  },
  {
    icon: Shield,
    color: "teal",
    title: "100% Free",
    desc: "No account, no credit card, no limits. Just paste your clip description and go.",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    glow: "group-hover:shadow-pink-500/20",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    text: "text-teal-400",
    glow: "group-hover:shadow-teal-500/20",
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-4">
      <div className="glow-orb w-96 h-96 bg-purple-600/10 top-0 left-0 pointer-events-none" />
      <div className="glow-orb w-72 h-72 bg-cyan-600/10 bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-4 border border-purple-500/30">
            <Sparkles className="w-4 h-4" />
            Everything You Need
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Why Creators{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Love This
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every tool a Valorant content creator needs to grow their channel — in one place.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {FEATURES.map((feat, i) => {
            const c = colorMap[feat.color];
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group glass-card p-5 hover:shadow-lg ${c.glow} transition-all duration-300 cursor-default`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${c.bg} border ${c.border} mb-4`}>
                  <feat.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-6 sm:p-8 text-center"
        >
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">
            Trusted by creators making content for
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-bold text-lg">
            {["YouTube Shorts", "TikTok", "Instagram Reels", "Twitter/X", "Twitch Clips"].map((platform) => (
              <span key={platform} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                {platform}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
