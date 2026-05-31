"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, TrendingUp, MessageSquare, Hash, Image, Sparkles, Share2 } from "lucide-react";
import AdBanner from "./AdBanner";
import { track } from "./Analytics";
import type { GeneratedContent } from "./GeneratorSection";

/* ─── Copy helpers ─────────────────────────────────────── */
function CopyButton({ text, id }: { text: string; id: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    // Track copy events by type
    if (id.startsWith("title-")) track.copyTitle(parseInt(id.split("-")[1]));
    else if (id.startsWith("caption-")) track.copyCaption(parseInt(id.split("-")[1]));
    else if (id.startsWith("thumb-")) track.copyThumbnail(parseInt(id.split("-")[1]));
    else if (id.startsWith("anime-")) track.copyAnime(parseInt(id.split("-")[1]));
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="copy-btn p-1.5 rounded-lg text-slate-400 hover:text-purple-300 transition-all flex-shrink-0"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function CopyAllButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    track.copyAll(label);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="copy-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-purple-300 transition-all"
    >
      {copied ? (
        <><Check className="w-3.5 h-3.5 text-green-400" />Copied!</>
      ) : (
        <><Copy className="w-3.5 h-3.5" />Copy {label}</>
      )}
    </button>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ─── Main component ───────────────────────────────────── */
export default function OutputCards({ content }: { content: GeneratedContent }) {
  const [shareMsg, setShareMsg] = useState("");

  const handleShare = async () => {
    track.share();
    const shareText = `Check out these viral Valorant titles I generated!\n\n${content.titles[0]}\n\nGenerated at ValorantViral.vercel.app`;
    if (navigator.share) {
      await navigator.share({ title: "ValorantViral", text: shareText });
    } else {
      await navigator.clipboard.writeText(shareText);
      setShareMsg("Link copied!");
      setTimeout(() => setShareMsg(""), 2000);
    }
  };

  return (
    <div className="space-y-5">

      {/* ── Share bar ── */}
      <div className="flex items-center justify-between glass px-4 py-3 rounded-xl border border-purple-500/20">
        <span className="text-sm text-slate-400">
          ✅ Generated{" "}
          {content.titles.length +
            content.captions.length +
            content.hashtags.length +
            content.thumbnailTexts.length +
            content.animeHypeLines.length}{" "}
          pieces of content
        </span>
        <button
          onClick={handleShare}
          className="copy-btn flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-purple-300"
        >
          <Share2 className="w-4 h-4" />
          {shareMsg || "Share"}
        </button>
      </div>

      {/* ── 1. Viral Titles ── */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="output-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Viral Titles</h4>
              <p className="text-xs text-slate-500">YouTube Shorts & TikTok</p>
            </div>
          </div>
          <CopyAllButton text={content.titles.join("\n")} label="All Titles" />
        </div>
        <div className="space-y-3">
          {content.titles.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/15 hover:border-purple-500/30 transition-all group"
            >
              <span className="text-purple-500/60 text-sm font-mono mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-200 text-sm flex-1 leading-relaxed">{title}</span>
              <CopyButton text={title} id={`title-${i}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── AD: between Titles and Captions ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        <AdBanner
          slot="RESULTS_INLINE_TOP_SLOT"
          format="horizontal"
          className="w-full rounded-xl overflow-hidden"
          label="Advertisement"
        />
      </motion.div>

      {/* ── 2. Captions ── */}
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="output-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Captions</h4>
              <p className="text-xs text-slate-500">TikTok, Reels & Shorts</p>
            </div>
          </div>
          <CopyAllButton text={content.captions.join("\n\n")} label="All Captions" />
        </div>
        <div className="space-y-3">
          {content.captions.map((caption, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/15 hover:border-blue-500/30 transition-all"
            >
              <span className="text-blue-500/60 text-sm font-mono mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-200 text-sm flex-1 leading-relaxed">{caption}</span>
              <CopyButton text={caption} id={`caption-${i}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 3. Hashtags ── */}
      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="output-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/20">
              <Hash className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Hashtags</h4>
              <p className="text-xs text-slate-500">Optimized for reach</p>
            </div>
          </div>
          <CopyAllButton text={content.hashtags.join(" ")} label="All Hashtags" />
        </div>
        <div className="flex flex-wrap gap-2">
          {content.hashtags.map((tag, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              onClick={() => { navigator.clipboard.writeText(tag); track.copyHashtags(); }}
              className="hashtag-pill"
              title="Click to copy"
            >
              {tag}
            </motion.button>
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-3">Click any hashtag to copy it</p>
      </motion.div>

      {/* ── AD: between Hashtags and Thumbnail ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <AdBanner
          slot="RESULTS_INLINE_MID_SLOT"
          format="rectangle"
          className="w-full rounded-xl overflow-hidden"
          label="Advertisement"
        />
      </motion.div>

      {/* ── 4. Thumbnail Texts ── */}
      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="thumbnail-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/20">
              <Image className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Thumbnail Text</h4>
              <p className="text-xs text-slate-500">Bold text for your thumbnail</p>
            </div>
          </div>
          <CopyAllButton text={content.thumbnailTexts.join("\n")} label="All" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {content.thumbnailTexts.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/40 transition-all">
                <span className="text-white font-black text-lg leading-tight block">{text}</span>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton text={text} id={`thumb-${i}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 5. Anime Hype Lines ── */}
      <motion.div
        custom={4}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="anime-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-pink-500/20">
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Anime Hype Lines</h4>
              <p className="text-xs text-slate-500">Dramatic anime-style narration</p>
            </div>
          </div>
          <CopyAllButton text={content.animeHypeLines.join("\n")} label="All" />
        </div>
        <div className="space-y-3">
          {content.animeHypeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/20 hover:border-pink-500/40 transition-all"
            >
              <Sparkles className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
              <span className="text-pink-200 text-sm italic flex-1 leading-relaxed font-medium">
                &ldquo;{line}&rdquo;
              </span>
              <CopyButton text={line} id={`anime-${i}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── AD: after all results ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <AdBanner
          slot="RESULTS_INLINE_BOTTOM_SLOT"
          format="horizontal"
          className="w-full rounded-xl overflow-hidden"
          label="Advertisement"
        />
      </motion.div>

    </div>
  );
}
