"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

function updateConsent(granted: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small timeout to not pop up immediately during load
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      updateConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    updateConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    updateConsent(false);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50
            glass-card p-6 border border-[rgba(255,70,85,0.25)] rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-[#FF4655]/10 text-[#FF4655] shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-bold text-white text-base">Cookie Settings</h4>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-[#B5B5B5]/60 hover:text-white transition-colors"
                  aria-label="Close panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[#B5B5B5] text-xs leading-relaxed mb-4">
                We use cookies to personalize advertisements and analyze website traffic.
                Declining will disable personalized advertising and detailed tracking.
                Learn more in our{" "}
                <Link href="/privacy" className="text-[#FF8A94] hover:text-[#FF4655] underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#ECE8E1]/5 border border-[rgba(236,232,225,0.15)]
                    hover:border-[rgba(236,232,225,0.3)] text-[#ECE8E1] text-xs font-bold transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#FF4655] hover:bg-[#FF4655]/90
                    text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,70,85,0.3)]"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
