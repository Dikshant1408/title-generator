"use client";

import { motion } from "framer-motion";
import { Zap, Heart, ExternalLink } from "lucide-react";

const LINKS = {
  Tools: [
    { label: "Viral Title Generator", href: "#generator" },
    { label: "Hashtag Generator", href: "#generator" },
    { label: "Caption Generator", href: "#generator" },
    { label: "Thumbnail Text", href: "#generator" },
    { label: "Anime Hype Lines", href: "#generator" },
  ],
  Resources: [
    { label: "Trending Templates", href: "#" },
    { label: "Valorant Shorts Guide", href: "#valorant-shorts-titles" },
    { label: "Hashtag Strategy", href: "#valorant-hashtags" },
    { label: "Caption Tips", href: "#valorant-captions" },
    { label: "YouTube SEO Guide", href: "#valorant-youtube-titles" },
  ],
  Platforms: [
    { label: "YouTube Shorts", href: "https://youtube.com/shorts", external: true },
    { label: "TikTok", href: "https://tiktok.com", external: true },
    { label: "Instagram Reels", href: "https://instagram.com", external: true },
    { label: "Twitter/X", href: "https://x.com", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 border-t border-purple-500/10">
      <div className="glow-orb w-64 h-64 bg-purple-600/8 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-purple-400" fill="currentColor" />
              <span className="text-lg font-black">
                <span className="text-white">Valorant</span>
                <span className="text-purple-400">Viral</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              The free AI-powered content generator for Valorant creators. Turn your clips into viral Shorts.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Free forever · No login required
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-slate-500 hover:text-purple-400 text-sm transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="neon-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} ValorantViral. Not affiliated with Riot Games or VALORANT.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" /> for Valorant creators
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="mailto:godrikt1408@gmail.com" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* SEO disclaimer */}
        <p className="text-center text-xs text-slate-700 mt-6">
          VALORANT is a trademark of Riot Games. ValorantViral is an independent fan tool and is not endorsed by or affiliated with Riot Games.
        </p>
      </div>
    </footer>
  );
}
