import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/app/layout";

export const metadata: Metadata = {
  title: "Privacy Policy – ValorantViral",
  description: "Privacy Policy for ValorantViral. Learn how we collect, use, and protect your data, including our use of Google AdSense and cookies.",
  openGraph: { title: "Privacy Policy – ValorantViral", url: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  const updated = "May 31, 2026";
  return (
    <main className="min-h-screen page-bg py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#FF8A94] hover:text-[#FF4655] text-sm mb-8 transition-colors">
          ← Back to Home
        </Link>
        <div className="glass-card p-8 sm:p-12">
          <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
          <p className="text-[#B5B5B5]/50 text-sm mb-10">Last updated: {updated}</p>

          <div className="space-y-8 text-[#B5B5B5] text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">1. Introduction</h2>
              <p>ValorantViral (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates valorant-viral-generator.vercel.app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">2. Information We Collect</h2>
              <h3 className="font-semibold text-[#ECE8E1] mb-2">Automatically Collected</h3>
              <ul className="list-disc list-inside space-y-1 mb-3 ml-2">
                <li>IP address and approximate location (country/region)</li>
                <li>Browser type, version, and operating system</li>
                <li>Pages visited, time on page, and referring URLs</li>
                <li>Device type (mobile, desktop, tablet)</li>
              </ul>
              <h3 className="font-semibold text-[#ECE8E1] mb-2">User-Provided</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Clip descriptions you enter into the generator (processed in real-time, not stored)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">3. Cookies and Tracking</h2>
              <p className="mb-3">We use cookies and similar tracking technologies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-[#ECE8E1]">Essential cookies:</strong> Required for the site to function properly.</li>
                <li><strong className="text-[#ECE8E1]">Analytics cookies:</strong> Google Analytics 4 collects anonymized usage data to help us improve the Service.</li>
                <li><strong className="text-[#ECE8E1]">Advertising cookies:</strong> Google AdSense uses cookies to serve personalized ads based on your browsing history.</li>
              </ul>
              <p className="mt-3">You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Google Ads Settings</a> or via <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">aboutads.info</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">4. Google AdSense</h2>
              <p className="mb-3">We use Google AdSense to display advertisements. Google AdSense:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Uses cookies to serve ads based on your prior visits to our site and other sites</li>
                <li>May use the DoubleClick cookie to serve ads and measure ad performance</li>
                <li>Collects data about your interactions with ads</li>
                <li>May share data with Google&apos;s advertising partners</li>
              </ul>
              <p className="mt-3">Google&apos;s use of advertising cookies is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Google&apos;s Privacy Policy</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">5. Google Analytics</h2>
              <p>We use Google Analytics 4 to understand how visitors use our site. Google Analytics collects anonymized data including page views, session duration, and user interactions. This data is used solely to improve the Service. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Google Analytics Opt-out Browser Add-on</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">6. Third-Party Services</h2>
              <ul className="space-y-3 ml-2">
                <li><strong className="text-[#ECE8E1]">Groq AI:</strong> Processes clip descriptions to generate content. Input is sent to Groq&apos;s API and not stored. See <a href="https://groq.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Groq Privacy Policy</a>.</li>
                <li><strong className="text-[#ECE8E1]">Vercel:</strong> Hosts our website and may collect server logs. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Vercel Privacy Policy</a>.</li>
                <li><strong className="text-[#ECE8E1]">Google AdSense:</strong> Serves advertisements. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Google Privacy Policy</a>.</li>
                <li><strong className="text-[#ECE8E1]">Google Analytics:</strong> Tracks anonymized usage. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF8A94] hover:text-[#FF4655] underline">Google Privacy Policy</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">7. Data Retention</h2>
              <p>We do not store clip descriptions or generated content on our servers. All AI generation is real-time and ephemeral. Server logs are retained by Vercel per their data retention policy (typically 30 days). Analytics data is retained for 14 months per Google Analytics defaults.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">8. Children&apos;s Privacy</h2>
              <p>Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">9. Your Rights</h2>
              <p className="mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access personal data we hold about you</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of personalized advertising</li>
                <li>Lodge a complaint with a data protection authority (EU/UK users)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">10. GDPR / CCPA</h2>
              <p>For EU/EEA users, our legal basis for processing is legitimate interest (analytics, service improvement) and consent (advertising cookies). For California residents, you have the right to know what personal information is collected and to opt out of its sale. We do not sell personal information.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. We will post the updated policy on this page with a revised date. Continued use of the Service constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">12. Contact</h2>
              <p>For privacy-related questions, contact us at{" "}
                <a href="mailto:godrikt1408@gmail.com" className="text-[#FF8A94] hover:text-[#FF4655] underline">godrikt1408@gmail.com</a>.
              </p>
            </section>

          </div>
        </div>
        <p className="text-center text-xs text-[#B5B5B5]/30 mt-6">
          VALORANT is a trademark of Riot Games. ValorantViral is not affiliated with Riot Games.
        </p>
      </div>
    </main>
  );
}
