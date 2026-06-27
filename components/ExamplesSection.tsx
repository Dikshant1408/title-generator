"use client";

import { motion } from "framer-motion";
import { TrendingUp, Hash, Image as ImageIcon, Sparkles } from "lucide-react";

const EXAMPLES = [
  { input: "Chamber 1v4 clutch on Icebox", type: "Clutch Play",
    title: "He just deleted the entire lobby 🤯",
    caption: "Cleanest Chamber clutch you'll see today 🔫 Drop a 🔥 if you want more!",
    hashtags: ["#valorant", "#chamber", "#clutch", "#shorts", "#fyp"],
    thumbnail: "THIS SHOULD BE ILLEGAL", anime: "The phantom of Icebox strikes without mercy." },
  { input: "Jett ace with operator on Haven", type: "ACE",
    title: "Jett said 'none of you are real' 💀",
    caption: "5 kills. 1 magazine. Zero remorse. 🎯 Follow for daily Valorant clips!",
    hashtags: ["#jett", "#ace", "#valorantclips", "#vct", "#gaming"],
    thumbnail: "5 KILLS 1 MAG", anime: "Like wind, she passed through them all." },
  { input: "Reyna 1v5 clutch with 3 HP", type: "Clutch",
    title: "3 HP. 5 enemies. Watch what happens 😱",
    caption: "This is why Reyna mains never give up 👁️ Like if you would've died here!",
    hashtags: ["#reyna", "#1v5", "#valorant", "#clutch", "#shorts"],
    thumbnail: "3 HP CLUTCH", anime: "Death itself feared to claim her soul." },
];

export default function ExamplesSection() {
  return (
    <section id="examples" className="relative py-20 px-4">
      <div className="glow-orb w-80 h-80 bg-red-600/6 top-10 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#FF8A94] mb-4 border border-[rgba(255,70,85,0.25)]">
            <TrendingUp className="w-4 h-4" />
            Example Outputs
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            See What Gets{" "}
            <span className="bg-gradient-to-r from-[#FF4655] to-[#ECE8E1] bg-clip-text text-transparent">Generated</span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-xl mx-auto">Real examples of what our AI creates from simple clip descriptions.</p>
        </motion.div>

        <div className="space-y-8">
          {EXAMPLES.map((ex, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs text-[#B5B5B5]/60 uppercase tracking-widest">Input:</span>
                <span className="glass px-3 py-1.5 rounded-lg text-sm text-[#FF8A94] border border-[rgba(255,70,85,0.25)] font-mono">&quot;{ex.input}&quot;</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#FF4655]/15 text-[#FF8A94] border border-[rgba(255,70,85,0.25)]">{ex.type}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#FF4655]/5 border border-[rgba(255,70,85,0.15)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#FF4655]" />
                    <span className="text-xs text-[#FF4655] font-semibold uppercase tracking-wide">Viral Title</span>
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug">{ex.title}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FF4655]/4 border border-[rgba(255,70,85,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#FF6B7A]" />
                    <span className="text-xs text-[#FF6B7A] font-semibold uppercase tracking-wide">Caption</span>
                  </div>
                  <p className="text-[#ECE8E1] text-sm leading-snug">{ex.caption}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FF4655]/4 border border-[rgba(255,70,85,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-4 h-4 text-[#FF8A94]" />
                    <span className="text-xs text-[#FF8A94] font-semibold uppercase tracking-wide">Thumbnail</span>
                  </div>
                  <p className="text-white text-lg font-black">{ex.thumbnail}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ex.hashtags.slice(0, 3).map((tag) => <span key={tag} className="hashtag-pill text-xs">{tag}</span>)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FF4655]/4 border border-[rgba(255,70,85,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#FF6B7A]" />
                    <span className="text-xs text-[#FF6B7A] font-semibold uppercase tracking-wide">Anime Hype</span>
                  </div>
                  <p className="text-[#ECE8E1]/80 text-sm italic font-medium leading-snug">&ldquo;{ex.anime}&rdquo;</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#generator" className="neon-btn inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg">
            <Hash className="w-5 h-5" />Generate Yours Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
