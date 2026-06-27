"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(255,70,85,0.15)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[168px]">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="ValorantViral Home">
            <Zap className="w-7 h-7 text-[#FF4655]" fill="currentColor" aria-hidden="true" />
            <span className="text-xl font-black tracking-tight">
              <span className="text-[#ECE8E1]">Valorant</span>
              <span className="text-[#FF4655]">Viral</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm text-[#B5B5B5]" aria-label="Main navigation">
            <Link href="/#generator"              className="hover:text-[#FF4655] transition-colors">Generator</Link>
            <Link href="/#tags-generator"         className="hover:text-[#FF4655] transition-colors flex items-center gap-1">
              <span className="text-[#FF4655]" aria-hidden="true">#</span>Tags
            </Link>
            <Link href="/valorant-shorts-titles"  className="hover:text-[#FF4655] transition-colors">Titles</Link>
            <Link href="/valorant-hashtags"       className="hover:text-[#FF4655] transition-colors">Hashtags</Link>
            <Link href="/about"                   className="hover:text-[#FF4655] transition-colors">About</Link>
          </nav>

          <Link href="/#generator" className="neon-btn text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Try Free →
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
