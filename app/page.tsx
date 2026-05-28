import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GeneratorSection from "@/components/GeneratorSection";
import TagsGenerator from "@/components/TagsGenerator";
import ExamplesSection from "@/components/ExamplesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrendingTemplates from "@/components/TrendingTemplates";
import SEOSections from "@/components/SEOSections";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";
import StickyAdSidebar from "@/components/StickyAdSidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Particle background */}
      <ParticleBackground />

      {/* ── Fixed sticky sidebars — always visible on xl screens ── */}
      <StickyAdSidebar side="left" />
      <StickyAdSidebar side="right" />

      {/* Navbar */}
      <Navbar />

      {/* ── Page content — padded so it never hides behind sidebars ── */}
      <div className="relative z-10 xl:px-[168px]">

        {/* Hero */}
        <HeroSection />

        {/* ── Top leaderboard ad ── */}
        <div className="max-w-5xl mx-auto px-4 py-3">
          <AdBanner
            slot="TOP_LEADERBOARD_SLOT"
            format="horizontal"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* ── AI Content Generator ── */}
        <GeneratorSection />

        {/* ── In-feed ad after generator ── */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner
            slot="AFTER_GENERATOR_SLOT"
            format="rectangle"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* ── Tags Generator ── */}
        <TagsGenerator />

        {/* ── In-feed ad after tags ── */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner
            slot="AFTER_TAGS_SLOT"
            format="rectangle"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* ── Examples ── */}
        <ExamplesSection />

        {/* ── Features ── */}
        <FeaturesSection />

        {/* ── Mid-page ad ── */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner
            slot="MID_PAGE_SLOT"
            format="horizontal"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* ── Trending templates ── */}
        <TrendingTemplates />

        {/* ── SEO content sections ── */}
        <SEOSections />

        {/* ── Pre-FAQ ad ── */}
        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner
            slot="PRE_FAQ_SLOT"
            format="rectangle"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* ── FAQ ── */}
        <FAQSection />

        {/* ── Bottom leaderboard ad ── */}
        <div className="max-w-5xl mx-auto px-4 py-4">
          <AdBanner
            slot="BOTTOM_LEADERBOARD_SLOT"
            format="horizontal"
            className="w-full rounded-xl overflow-hidden"
            label="Advertisement"
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
