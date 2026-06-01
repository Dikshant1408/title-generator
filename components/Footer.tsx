"use client";

import { Zap, Heart, ExternalLink } from "lucide-react";

const LINKS = {
  Tools: [
    { label: "AI Content Generator", href: "/#generator" },
    { label: "Tags Generator",        href: "/#tags-generator" },
    { label: "Viral Title Generator", href: "/valorant-shorts-titles" },
    { label: "Hashtag Generator",     href: "/valorant-hashtags" },
    { label: "Caption Generator",     href: "/valorant-captions" },
    { label: "Thumbnail Text",        href: "/valorant-thumbnail-text" },
  ],
  Guides: [
    { label: "Valorant Shorts Guide", href: "/valorant-youtube-shorts" },
    { label: "Shorts Titles Guide",   href: "/valorant-shorts-titles" },
    { label: "Hashtag Strategy",      href: "/valorant-hashtags" },
    { label: "Caption Tips",          href: "/valorant-captions" },
    { label: "Thumbnail Tips",        href: "/valorant-thumbnail-text" },
  ],
  Company: [
    { label: "About",           href: "/about" },
    { label: "Contact",         href: "/contact" },
    { label: "Privacy Policy",  href: "/privacy" },
    { label: "Terms of Service",href: "/terms" },
  ],
  Platforms: [
    { label: "YouTube Shorts",   href: "https://youtube.com/shorts", external: true },
    { label: "TikTok",           href: "https://tiktok.com",         external: true },
    { label: "Instagram Reels",  href: "https://instagram.com",      external: true },
    { label: "Twitter/X",        href: "https://x.com",              external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 border-t border-[rgba(255,70,85,0.1)]">
      <div className="glow-orb w-64 h-64 bg-red-600/5 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-[#FF4655]" fill="currentColor" aria-hidden="true" />
              <span className="text-lg font-black">
                <span className="text-[#ECE8E1]">Valorant</span>
                <span className="text-[#FF4655]">Viral</span>
              </span>
            </div>
            <p className="text-[#B5B5B5] text-sm leading-relaxed mb-4">
              Free AI-powered content generator for Valorant creators. Turn your clips into viral Shorts.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#B5B5B5]/60">
              <span className="w-2 h-2 bg-[#00FFB2] rounded-full animate-pulse" />
              Free forever · No login required
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[#ECE8E1] font-bold text-sm mb-4 uppercase tracking-widest">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-[#B5B5B5] hover:text-[#FF4655] text-sm transition-colors flex items-center gap-1">
                      {link.label}
                      {"external" in link && link.external && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="neon-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#B5B5B5]">
          <p>© {new Date().getFullYear()} ValorantViral. Not affiliated with Riot Games.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-[#FF4655] fill-current" aria-hidden="true" /> for Valorant creators
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#FF4655] transition-colors">Privacy</a>
            <a href="/terms"   className="hover:text-[#FF4655] transition-colors">Terms</a>
            <a href="/contact" className="hover:text-[#FF4655] transition-colors">Contact</a>
          </div>
        </div>

        <p className="text-center text-xs text-[#B5B5B5]/30 mt-6">
          VALORANT is a trademark of Riot Games. ValorantViral is an independent fan tool and is not endorsed by or affiliated with Riot Games.
        </p>
      </div>
    </footer>
  );
}
