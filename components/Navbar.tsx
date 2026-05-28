"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Zap className="w-7 h-7 text-purple-400" fill="currentColor" />
              <div className="absolute inset-0 blur-sm">
                <Zap className="w-7 h-7 text-purple-500" fill="currentColor" />
              </div>
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">Valorant</span>
              <span className="text-purple-400 neon-text-purple">Viral</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#generator" className="hover:text-purple-400 transition-colors">Generator</a>
            <a href="#tags-generator" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span className="text-cyan-500">#</span>Tags
            </a>
            <a href="#examples" className="hover:text-purple-400 transition-colors">Examples</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <a
            href="#generator"
            className="neon-btn text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Try Free →
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
