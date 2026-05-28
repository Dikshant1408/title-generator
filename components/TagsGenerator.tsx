"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Copy, Check, RefreshCw, Zap, ChevronDown, X } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
type Platform = "youtube" | "tiktok" | "instagram" | "twitter";
type TagCategory = "all" | "agent" | "map" | "rank" | "trending" | "general";

interface TagSet {
  platform: Platform;
  tags: string[];
  charCount: number;
  limit: number;
}

/* ─── Constants ─────────────────────────────────────────── */
const PLATFORMS: { value: Platform; label: string; icon: string; color: string; limit: number }[] = [
  { value: "youtube", label: "YouTube",   icon: "▶",  color: "red",    limit: 500  },
  { value: "tiktok",  label: "TikTok",    icon: "♪",  color: "pink",   limit: 2200 },
  { value: "instagram",label:"Instagram", icon: "◈",  color: "purple", limit: 2200 },
  { value: "twitter", label: "Twitter/X", icon: "𝕏",  color: "blue",   limit: 280  },
];

const AGENTS = [
  "Jett","Reyna","Phoenix","Yoru","Neon","Iso",
  "Sage","Skye","Sova","Breach","KAY/O","Fade","Gekko","Deadlock",
  "Brimstone","Omen","Viper","Astra","Harbor","Clove",
  "Killjoy","Cypher","Chamber","Vyse",
];

const MAPS = ["Haven","Bind","Split","Ascent","Icebox","Breeze","Fracture","Pearl","Lotus","Sunset","Abyss"];

const RANKS = ["Iron","Bronze","Silver","Gold","Platinum","Diamond","Ascendant","Immortal","Radiant"];

const TAG_PRESETS: Record<TagCategory, string[]> = {
  all: [],
  general: [
    "#valorant","#valorantclips","#valoranthighlights","#valorantmontage",
    "#valorantedit","#valorantgameplay","#valorantfps","#valorantcommunity",
    "#gaming","#gamer","#fps","#pcgaming","#gamingclips","#gamingcommunity",
  ],
  trending: [
    "#valorant","#vct","#valorantesports","#valorantpro","#valorantranked",
    "#shorts","#fyp","#foryou","#viral","#trending","#gamingshorts",
    "#youtubeshorts","#tiktokgaming","#reels","#explore",
  ],
  agent: [],
  map: [],
  rank: [],
};

const PLATFORM_COLORS: Record<Platform, { border: string; text: string; bg: string; badge: string }> = {
  youtube:   { border: "border-red-500/30",    text: "text-red-400",    bg: "bg-red-500/10",    badge: "bg-red-500/20 text-red-300 border-red-500/30" },
  tiktok:    { border: "border-pink-500/30",   text: "text-pink-400",   bg: "bg-pink-500/10",   badge: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
  instagram: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/10", badge: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  twitter:   { border: "border-blue-500/30",   text: "text-blue-400",   bg: "bg-blue-500/10",   badge: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
};

/* ─── Helpers ────────────────────────────────────────────── */
function buildTagsForPlatform(
  platform: Platform,
  agent: string,
  map: string,
  rank: string,
  category: TagCategory,
  customTags: string[],
  aiTags: string[]
): string[] {
  const set = new Set<string>();

  // Always include core tags
  ["#valorant", "#valorantclips", "#gaming"].forEach(t => set.add(t));

  // Agent tags
  if (agent) {
    const a = agent.toLowerCase().replace("/", "").replace(" ", "");
    set.add(`#${a}`);
    set.add(`#${a}valorant`);
    set.add(`#${a}gameplay`);
    set.add(`#${a}main`);
  }

  // Map tags
  if (map) {
    const m = map.toLowerCase();
    set.add(`#${m}`);
    set.add(`#valorant${m}`);
  }

  // Rank tags
  if (rank) {
    const r = rank.toLowerCase();
    set.add(`#${r}`);
    set.add(`#${r}valorant`);
    set.add(`#valorantranked`);
  }

  // Category preset
  const preset = category === "all"
    ? [...TAG_PRESETS.general, ...TAG_PRESETS.trending]
    : TAG_PRESETS[category] || [];
  preset.forEach(t => set.add(t));

  // Platform-specific tags
  if (platform === "youtube") {
    ["#youtubeshorts","#shorts","#subscribe","#valoranthighlights","#vct"].forEach(t => set.add(t));
  } else if (platform === "tiktok") {
    ["#fyp","#foryou","#foryoupage","#tiktokgaming","#gamingshorts","#viral"].forEach(t => set.add(t));
  } else if (platform === "instagram") {
    ["#reels","#instareels","#explore","#gamingcommunity","#esports"].forEach(t => set.add(t));
  } else if (platform === "twitter") {
    ["#Valorant","#VCT","#gaming","#esports"].forEach(t => set.add(t));
  }

  // AI-generated tags
  aiTags.forEach(t => set.add(t.startsWith("#") ? t : `#${t}`));

  // Custom tags
  customTags.forEach(t => {
    const clean = t.trim().replace(/^#+/, "");
    if (clean) set.add(`#${clean}`);
  });

  // Trim to platform limits (by character count)
  const limit = PLATFORMS.find(p => p.value === platform)?.limit ?? 500;
  const result: string[] = [];
  let chars = 0;
  for (const tag of set) {
    if (chars + tag.length + 1 > limit) break;
    result.push(tag);
    chars += tag.length + 1;
  }
  return result;
}

/* ─── Sub-components ─────────────────────────────────────── */
function TagPill({ tag, onRemove }: { tag: string; onRemove?: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(tag);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <span className="inline-flex items-center gap-1 hashtag-pill group cursor-pointer" onClick={copy}>
      {copied ? <Check className="w-3 h-3 text-green-400" /> : null}
      {tag}
      {onRemove && (
        <button
          onClick={e => { e.stopPropagation(); onRemove(); }}
          className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="w-3 h-3 text-slate-500 hover:text-red-400" />
        </button>
      )}
    </span>
  );
}

function PlatformTagCard({ tagSet }: { tagSet: TagSet }) {
  const [copied, setCopied] = useState(false);
  const c = PLATFORM_COLORS[tagSet.platform];
  const pct = Math.round((tagSet.charCount / tagSet.limit) * 100);
  const barColor = pct > 90 ? "bg-red-500" : pct > 70 ? "bg-orange-400" : "bg-purple-500";

  const copyAll = async () => {
    await navigator.clipboard.writeText(tagSet.tags.join(" "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platform = PLATFORMS.find(p => p.value === tagSet.platform)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-card p-5 border ${c.border}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`text-lg font-black ${c.text}`}>{platform.icon}</span>
          <div>
            <h4 className={`font-bold text-sm ${c.text}`}>{platform.label}</h4>
            <p className="text-xs text-slate-600">{tagSet.tags.length} tags</p>
          </div>
        </div>
        <button onClick={copyAll} className="copy-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-purple-300">
          {copied ? <><Check className="w-3.5 h-3.5 text-green-400" />Copied!</> : <><Copy className="w-3.5 h-3.5" />Copy All</>}
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 max-h-40 overflow-y-auto pr-1">
        {tagSet.tags.map(tag => <TagPill key={tag} tag={tag} />)}
      </div>

      {/* Char count bar */}
      <div>
        <div className="flex justify-between text-xs text-slate-600 mb-1">
          <span>{tagSet.charCount} chars</span>
          <span>limit: {tagSet.limit}</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${barColor}`}
            style={{ width: `${Math.min(pct, 100)}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function TagsGenerator() {
  const [agent, setAgent] = useState("");
  const [map, setMap] = useState("");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState<TagCategory>("all");
  const [platforms, setSelectedPlatforms] = useState<Platform[]>(["youtube", "tiktok"]);
  const [customInput, setCustomInput] = useState("");
  const [customTags, setCustomTags] = useState<string[]>([]);
  const [aiTagInput, setAiTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tagSets, setTagSets] = useState<TagSet[]>([]);
  const [generated, setGenerated] = useState(false);

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const addCustomTag = () => {
    const tags = customInput.split(/[\s,]+/).filter(Boolean);
    setCustomTags(prev => [...new Set([...prev, ...tags])]);
    setCustomInput("");
  };

  const removeCustomTag = (tag: string) => {
    setCustomTags(prev => prev.filter(t => t !== tag));
  };

  const handleGenerate = async () => {
    if (platforms.length === 0) return;
    setLoading(true);
    setGenerated(false);

    // Optionally fetch AI tags from Gemini if user typed a description
    let aiTags: string[] = [];
    if (aiTagInput.trim().length > 3) {
      try {
        const res = await fetch("/api/tags", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: aiTagInput, agent, map, rank }),
        });
        if (res.ok) {
          const data = await res.json();
          aiTags = data.tags || [];
        }
      } catch {
        // fallback to preset tags only
      }
    }

    // Build tag sets for each selected platform
    const sets: TagSet[] = platforms.map(platform => {
      const tags = buildTagsForPlatform(platform, agent, map, rank, category, customTags, aiTags);
      const charCount = tags.join(" ").length;
      const limit = PLATFORMS.find(p => p.value === platform)!.limit;
      return { platform, tags, charCount, limit };
    });

    setTagSets(sets);
    setLoading(false);
    setGenerated(true);

    setTimeout(() => {
      document.getElementById("tags-results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const copyAllPlatforms = async () => {
    const text = tagSets.map(s =>
      `── ${PLATFORMS.find(p => p.value === s.platform)?.label} ──\n${s.tags.join(" ")}`
    ).join("\n\n");
    await navigator.clipboard.writeText(text);
  };

  return (
    <section id="tags-generator" className="relative py-20 px-4">
      {/* Glow orbs */}
      <div className="glow-orb w-80 h-80 bg-cyan-600/10 top-0 right-0 pointer-events-none" />
      <div className="glow-orb w-64 h-64 bg-blue-600/10 bottom-0 left-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-cyan-300 mb-4 border border-cyan-500/30">
            <Hash className="w-4 h-4" />
            Tags Generator
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Generate{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Tags
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Platform-optimized hashtags for YouTube, TikTok, Instagram & Twitter — tailored to your agent, map, and rank.
          </p>
        </motion.div>

        {/* Config card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 border border-cyan-500/20 mb-8"
        >
          {/* Platform selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Select platforms *
            </label>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map(p => {
                const active = platforms.includes(p.value);
                const c = PLATFORM_COLORS[p.value];
                return (
                  <button
                    key={p.value}
                    onClick={() => togglePlatform(p.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      active
                        ? `${c.bg} ${c.border} ${c.text} shadow-lg`
                        : "glass border-slate-700/50 text-slate-500 hover:border-slate-600"
                    }`}
                  >
                    <span>{p.icon}</span>
                    {p.label}
                    {active && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filters row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Agent */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Agent</label>
              <div className="relative">
                <select value={agent} onChange={e => setAgent(e.target.value)} className="neon-select w-full rounded-xl px-3 py-2.5 text-sm pr-8">
                  <option value="">Any agent</option>
                  {AGENTS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-400 pointer-events-none" />
              </div>
            </div>

            {/* Map */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Map</label>
              <div className="relative">
                <select value={map} onChange={e => setMap(e.target.value)} className="neon-select w-full rounded-xl px-3 py-2.5 text-sm pr-8">
                  <option value="">Any map</option>
                  {MAPS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-400 pointer-events-none" />
              </div>
            </div>

            {/* Rank */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Rank</label>
              <div className="relative">
                <select value={rank} onChange={e => setRank(e.target.value)} className="neon-select w-full rounded-xl px-3 py-2.5 text-sm pr-8">
                  <option value="">Any rank</option>
                  {RANKS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tag category */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Tag focus</label>
            <div className="flex flex-wrap gap-2">
              {(["all","general","trending","agent","map","rank"] as TagCategory[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all capitalize ${
                    category === cat
                      ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                      : "glass border-slate-700/50 text-slate-500 hover:border-slate-600"
                  }`}
                >
                  {cat === "all" ? "🔥 All" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* AI description (optional) */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
              Clip description <span className="text-slate-600 normal-case">(optional — AI generates extra tags)</span>
            </label>
            <input
              type="text"
              value={aiTagInput}
              onChange={e => setAiTagInput(e.target.value)}
              placeholder="e.g. Jett ace with operator on Haven..."
              className="glow-input w-full rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm"
            />
          </div>

          {/* Custom tags */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
              Add custom tags
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={e => setCustomInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addCustomTag()}
                placeholder="#yourtag or multiple separated by space"
                className="glow-input flex-1 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm"
              />
              <button
                onClick={addCustomTag}
                className="copy-btn px-4 py-2.5 rounded-xl text-sm text-purple-300 font-semibold whitespace-nowrap"
              >
                + Add
              </button>
            </div>
            {customTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {customTags.map(tag => (
                  <TagPill key={tag} tag={tag} onRemove={() => removeCustomTag(tag)} />
                ))}
              </div>
            )}
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading || platforms.length === 0}
            className="neon-btn w-full text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <><RefreshCw className="w-5 h-5 animate-spin" />Building Tag Sets...</>
            ) : (
              <><Hash className="w-5 h-5" />Generate Tags for {platforms.length} Platform{platforms.length !== 1 ? "s" : ""}</>
            )}
          </button>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {generated && tagSets.length > 0 && (
            <motion.div
              id="tags-results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Results header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Hash className="w-5 h-5 text-cyan-400" />
                  Your Tag Sets
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleGenerate}
                    className="copy-btn flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-purple-300"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Regenerate
                  </button>
                  <button
                    onClick={copyAllPlatforms}
                    className="copy-btn flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-cyan-300"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copy All Platforms
                  </button>
                </div>
              </div>

              {/* Platform cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tagSets.map(ts => (
                  <PlatformTagCard key={ts.platform} tagSet={ts} />
                ))}
              </div>

              {/* Tips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 glass-card p-5 border border-cyan-500/15"
              >
                <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Pro Tag Tips
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                  <li>• YouTube: Use all 500 chars — more tags = more discovery</li>
                  <li>• TikTok: Mix 3-5 niche tags with 2-3 viral tags (#fyp)</li>
                  <li>• Instagram: 20-30 tags in first comment, not caption</li>
                  <li>• Twitter: Max 2 hashtags — more hurts engagement</li>
                  <li>• Rotate tags every few posts to avoid shadowban</li>
                  <li>• Agent-specific tags reach dedicated mains communities</li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
