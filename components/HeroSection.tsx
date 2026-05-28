"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Hash, Play } from "lucide-react";

const stats = [
  { icon: Play, label: "Clips Generated", value: "50K+" },
  { icon: TrendingUp, label: "Viral Titles", value: "200K+" },
  { icon: Hash, label: "Hashtags Created", value: "1M+" },
  { icon: Zap, label: "Creators Using", value: "10K+" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-purple-600/20 top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-blue-600/20 top-40 -right-20" />
      <div className="glow-orb w-64 h-64 bg-cyan-600/15 bottom-20 left-1/3" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-8 border border-purple-500/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          AI-Powered • Free • No Login Required
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-white">Turn Your </span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text-purple">
            Valorant Clips
          </span>
          <br />
          <span className="text-white">Into </span>
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Viral Shorts
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Instantly generate viral YouTube Shorts titles, TikTok captions, hashtags,
          thumbnail text, and anime hype lines for your Valorant clips — powered by AI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#generator"
            className="neon-btn text-white font-bold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 justify-center"
          >
            <Zap className="w-5 h-5" />
            Generate Viral Content
          </a>
          <a
            href="#examples"
            className="glass border border-purple-500/30 text-purple-300 font-semibold px-8 py-4 rounded-xl text-lg hover:border-purple-400/60 transition-all inline-flex items-center gap-2 justify-center"
          >
            <Play className="w-5 h-5" />
            See Examples
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to generate</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-purple-500/30 rounded-full flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
