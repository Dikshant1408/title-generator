import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdBanner from "@/components/AdBanner";
import NativeBanner from "@/components/NativeBanner";
import { ParticleBackground, StickyAdSidebar } from "@/components/ClientOnlyComponents";

// Lazy-load everything below the fold — improves LCP significantly
const GeneratorSection  = dynamic(() => import("@/components/GeneratorSection"));
const TagsGenerator     = dynamic(() => import("@/components/TagsGenerator"));
const ExamplesSection   = dynamic(() => import("@/components/ExamplesSection"));
const FeaturesSection   = dynamic(() => import("@/components/FeaturesSection"));
const TrendingTemplates = dynamic(() => import("@/components/TrendingTemplates"));
const SEOSections       = dynamic(() => import("@/components/SEOSections"));
const FAQSection        = dynamic(() => import("@/components/FAQSection"));
const Footer            = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <StickyAdSidebar side="left" />
      <StickyAdSidebar side="right" />
      <Navbar />

      <div className="relative z-10 xl:px-[168px]">
        {/* Hero — static, above fold */}
        <HeroSection />

        <div className="max-w-5xl mx-auto px-4 py-3">
          <AdBanner slot="TOP_LEADERBOARD_SLOT" format="horizontal" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <GeneratorSection />

        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner slot="AFTER_GENERATOR_SLOT" format="rectangle" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <TagsGenerator />

        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner slot="AFTER_TAGS_SLOT" format="rectangle" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <ExamplesSection />
        <FeaturesSection />

        <NativeBanner />

        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner slot="MID_PAGE_SLOT" format="horizontal" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <TrendingTemplates />
        <SEOSections />

        <div className="max-w-4xl mx-auto px-4 py-3">
          <AdBanner slot="PRE_FAQ_SLOT" format="rectangle" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <FAQSection />

        <div className="max-w-5xl mx-auto px-4 py-4">
          <AdBanner slot="BOTTOM_LEADERBOARD_SLOT" format="horizontal" className="w-full rounded-xl overflow-hidden" label="Advertisement" />
        </div>

        <Footer />
      </div>
    </main>
  );
}
