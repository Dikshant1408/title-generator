"use client";

import { motion } from "framer-motion";
import { TrendingUp, Hash, MessageSquare, PlayCircle } from "lucide-react";

const SEO_SECTIONS = [
  {
    icon: TrendingUp,
    color: "purple",
    title: "Valorant Shorts Titles Generator",
    slug: "valorant-shorts-titles",
    content: `Creating viral YouTube Shorts titles for Valorant clips is an art. The best titles combine emotional triggers, specific agent names, and power words that make viewers stop scrolling. Our AI analyzes thousands of top-performing Valorant clips to generate titles that match current trends on the YouTube Shorts algorithm.

Whether you're posting a Jett ace, a Chamber clutch, or a Reyna 1v5, the right title can be the difference between 100 views and 100,000 views. Titles like "He just deleted the entire lobby 🤯" or "1v5 and he didn't even flinch 🧊" consistently outperform generic titles because they create curiosity and emotional investment.`,
  },
  {
    icon: Hash,
    color: "blue",
    title: "Valorant Hashtag Generator",
    slug: "valorant-hashtags",
    content: `Using the right hashtags on TikTok, YouTube Shorts, and Instagram Reels can dramatically increase your Valorant clip's reach. The most effective Valorant hashtags in 2024 include a mix of broad gaming tags (#gaming, #fyp) and niche Valorant-specific tags (#valorantclips, #vct, #valoranthighlights).

Our AI generates 10 optimized hashtags per clip, tailored to your specific agent, play type, and platform. We avoid dead hashtags and focus on tags that are actively trending in the Valorant content creator community. The right hashtag stack can put your clip in front of thousands of new viewers who are already interested in Valorant content.`,
  },
  {
    icon: MessageSquare,
    color: "cyan",
    title: "Viral Valorant Captions",
    slug: "valorant-captions",
    content: `A great caption does three things: hooks the viewer in the first line, builds excitement, and ends with a call to action. For Valorant clips, captions that reference the specific agent, map, or play type perform significantly better than generic gaming captions.

Our AI generates captions optimized for TikTok's algorithm, Instagram Reels, and YouTube Shorts descriptions. Each caption includes relevant emojis, a hook line, and a CTA that encourages engagement — whether that's a like, comment, follow, or share. Engagement signals are critical for getting your clip pushed to more viewers.`,
  },
  {
    icon: PlayCircle,
    color: "pink",
    title: "Best Valorant YouTube Titles",
    slug: "valorant-youtube-titles",
    content: `YouTube's algorithm rewards click-through rate (CTR) above almost everything else. A title that gets 10% CTR will outperform a title with 3% CTR even if the video quality is identical. For Valorant content, the highest-performing titles use specific numbers ("1v5"), emotional words ("insane", "illegal", "broken"), and agent names.

Our generator creates titles specifically optimized for YouTube's search and recommendation algorithm. We analyze what's currently trending in the Valorant content space and generate titles that balance searchability with click-worthiness. The result is titles that both rank in search and get clicked when recommended.`,
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; iconBg: string }> = {
  purple: { border: "border-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/5", iconBg: "bg-purple-500/20" },
  blue: { border: "border-blue-500/20", text: "text-blue-400", bg: "bg-blue-500/5", iconBg: "bg-blue-500/20" },
  cyan: { border: "border-cyan-500/20", text: "text-cyan-400", bg: "bg-cyan-500/5", iconBg: "bg-cyan-500/20" },
  pink: { border: "border-pink-500/20", text: "text-pink-400", bg: "bg-pink-500/5", iconBg: "bg-pink-500/20" },
};

export default function SEOSections() {
  return (
    <section className="relative py-20 px-4">
      <div className="neon-divider mb-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            The Complete Guide to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Viral Valorant Content
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know about growing your Valorant channel.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SEO_SECTIONS.map((section, i) => {
            const c = colorMap[section.color];
            return (
              <motion.article
                key={section.slug}
                id={section.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 sm:p-8 border ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${c.iconBg}`}>
                    <section.icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <h3 className={`text-xl font-black ${c.text}`}>{section.title}</h3>
                </div>
                <div className={`p-4 rounded-xl ${c.bg} border ${c.border}`}>
                  {section.content.split("\n\n").map((para, j) => (
                    <p key={j} className={`text-slate-400 text-sm leading-relaxed ${j > 0 ? "mt-3" : ""}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
