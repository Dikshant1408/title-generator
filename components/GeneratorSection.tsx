"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, RefreshCw, ChevronDown } from "lucide-react";
import OutputCards from "./OutputCards";
import { track } from "./Analytics";

const CLIP_TYPES = [
  { value: "ace", label: "⚡ ACE – 5 Kill Round" },
  { value: "clutch", label: "🎯 Clutch Play" },
  { value: "operator", label: "🔫 Operator / Sniper" },
  { value: "sheriff", label: "🔫 Sheriff Pistol" },
  { value: "vct", label: "🏆 VCT / Pro Style" },
  { value: "anime", label: "✨ Anime Edit" },
  { value: "montage", label: "🎬 Montage" },
  { value: "funny", label: "😂 Funny / Fail" },
  { value: "toxic", label: "💀 Toxic / Trash Talk" },
  { value: "pro", label: "👑 Pro Player Style" },
];

const EXAMPLE_PROMPTS = [
  "Jett 1v4 operator clutch on Haven",
  "Chamber ace with golden gun on Ascent",
  "Reyna 1v5 clutch on Bind with 3 HP",
  "Neon full sprint ace on Fracture",
  "Sage wall clutch 1v3 on Split",
  "Omen blind ace on Icebox",
];

export interface GeneratedContent {
  titles: string[];
  captions: string[];
  hashtags: string[];
  thumbnailTexts: string[];
  animeHypeLines: string[];
}

export default function GeneratorSection() {
  const [description, setDescription] = useState("");
  const [clipType, setClipType] = useState("clutch");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError("Please describe your clip first!");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: description.trim(), clipType }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || "Generation failed. Please try again.");
        return;
      }

      setResult(data.data);
      track.generate(clipType);

      // Scroll to results
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setDescription(example);
    setCharCount(example.length);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= 200) {
      setDescription(val);
      setCharCount(val.length);
    }
  };

  return (
    <section id="generator" className="relative py-20 px-4">
      {/* Glow orbs */}
      <div className="glow-orb w-72 h-72 bg-purple-600/15 top-0 left-1/4 pointer-events-none" />
      <div className="glow-orb w-64 h-64 bg-blue-600/15 bottom-0 right-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-purple-300 mb-4 border border-purple-500/30">
            <Zap className="w-4 h-4" />
            AI Content Generator
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Describe Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clip
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us what happened in your clip and we'll generate everything you need to go viral.
          </p>
        </motion.div>

        {/* Generator card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 sm:p-8 neon-border-purple"
        >
          {/* Example prompts */}
          <div className="mb-6">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              Quick examples — click to use:
            </p>
            <div className="flex flex-wrap gap-2">
              {EXAMPLE_PROMPTS.map((ex) => (
                <button
                  key={ex}
                  onClick={() => handleExampleClick(ex)}
                  className="text-xs glass px-3 py-1.5 rounded-full text-slate-400 hover:text-purple-300 hover:border-purple-500/50 border border-slate-700/50 transition-all"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          {/* Text input */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Describe your clip *
            </label>
            <div className="relative">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="e.g. Chamber 1v4 clutch on Icebox with golden gun..."
                rows={3}
                className="glow-input w-full rounded-xl px-4 py-3 text-white placeholder-slate-600 resize-none text-sm sm:text-base"
              />
              <span className={`absolute bottom-3 right-3 text-xs ${charCount > 180 ? "text-orange-400" : "text-slate-600"}`}>
                {charCount}/200
              </span>
            </div>
          </div>

          {/* Clip type dropdown */}
          <div className="mb-6">
            <label htmlFor="clip-type" className="block text-sm font-semibold text-slate-300 mb-2">
              Clip type
            </label>
            <div className="relative">
              <select
                id="clip-type"
                value={clipType}
                onChange={(e) => setClipType(e.target.value)}
                className="neon-select w-full rounded-xl px-4 py-3 text-sm sm:text-base pr-10"
                aria-label="Select clip type"
              >
                {CLIP_TYPES.map((ct) => (
                  <option key={ct.value} value={ct.value}>
                    {ct.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
            </div>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="neon-btn w-full text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating Viral Content...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Generate Viral Content
              </>
            )}
          </button>
        </motion.div>

        {/* Loading animation */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      className="w-2 h-6 bg-purple-500 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-slate-400 text-sm">
                  AI is crafting your viral content...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              id="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-white">
                  Your Viral Content{" "}
                  <span className="text-purple-400">🔥</span>
                </h3>
                <button
                  onClick={handleGenerate}
                  className="copy-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-purple-300 font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  Regenerate
                </button>
              </div>
              <OutputCards content={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
