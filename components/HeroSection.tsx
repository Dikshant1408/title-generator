"use client";

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
      {/* Glow orbs — Valorant red ambient, opacity <10% */}
      <div className="glow-orb w-96 h-96 bg-red-600/8 top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-red-500/6 top-40 -right-20" />
      <div className="glow-orb w-64 h-64 bg-red-600/5 bottom-20 left-1/3" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge — CSS fade-in, no Framer Motion on LCP path */}
        <div className="hero-fade-in inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#FF8A94] mb-8 border border-[rgba(255,70,85,0.3)]">
          <span className="w-2 h-2 bg-[#00FFB2] rounded-full animate-pulse" />
          AI-Powered • Free • No Login Required
        </div>

        {/* H1 — LCP element, rendered immediately, no animation delay */}
        <h1 className="hero-fade-in-slow text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-white">Turn Your </span>
          <span className="bg-gradient-to-r from-[#FF4655] via-[#FF6B7A] to-[#ECE8E1] bg-clip-text text-transparent">
            Valorant Clips
          </span>
          <br />
          <span className="text-white">Into </span>
          <span className="bg-gradient-to-r from-[#FF4655] via-[#FF6B7A] to-[#ECE8E1] bg-clip-text text-transparent">
            Viral Shorts
          </span>
        </h1>

        <p className="hero-fade-in text-lg sm:text-xl text-[#B5B5B5] max-w-2xl mx-auto mb-10 leading-relaxed">
          Instantly generate viral YouTube Shorts titles, TikTok captions, hashtags,
          thumbnail text, and anime hype lines for your Valorant clips — powered by AI.
        </p>

        <div className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#generator" className="neon-btn text-white font-bold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 justify-center">
            <Zap className="w-5 h-5" aria-hidden="true" />
            Generate Viral Content
          </a>
          <a href="#examples" className="glass border border-[rgba(255,70,85,0.3)] text-[#FF8A94] font-semibold px-8 py-4 rounded-xl text-lg hover:border-[rgba(255,70,85,0.6)] transition-all inline-flex items-center gap-2 justify-center">
            <Play className="w-5 h-5" aria-hidden="true" />
            See Examples
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <stat.icon className="w-5 h-5 text-[#FF4655] mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-[#B5B5B5] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[#B5B5B5]/50">
          <span className="text-xs uppercase tracking-widest">Scroll to generate</span>
          <div className="scroll-bounce w-5 h-8 border-2 border-[rgba(255,70,85,0.3)] rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-[#FF4655] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
