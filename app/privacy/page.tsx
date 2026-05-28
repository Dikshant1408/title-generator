import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – ValorantViral",
  description: "Privacy Policy for ValorantViral AI content generator.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen animated-bg py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="glass-card p-8 sm:p-12">
          <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8 text-slate-400 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to ValorantViral (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We operate the website
                valorant-viral-generator.vercel.app (the &quot;Service&quot;). This Privacy Policy explains how we
                collect, use, and share information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-slate-300">Usage Data:</strong> Information about how you use the Service,
                  including the clip descriptions you enter, pages visited, and time spent on the site.
                </li>
                <li>
                  <strong className="text-slate-300">Log Data:</strong> Your browser type, IP address, pages visited,
                  and timestamps — collected automatically by our hosting provider (Vercel).
                </li>
                <li>
                  <strong className="text-slate-300">Cookies:</strong> We use cookies and similar tracking technologies
                  through Google AdSense to serve relevant advertisements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>To provide and improve the Service</li>
                <li>To generate AI-powered content based on your input</li>
                <li>To display relevant advertisements via Google AdSense</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">4. Google AdSense & Advertising</h2>
              <p className="mb-3">
                We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies to serve
                ads based on your prior visits to our website and other websites on the internet.
              </p>
              <p className="mb-3">
                Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit
                to our site and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Google Ads Settings
                </a>
                . You can also opt out via{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  aboutads.info
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">5. Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-slate-300">Groq AI:</strong> Processes your clip descriptions to generate
                  content. Input text is sent to Groq&apos;s API. See{" "}
                  <a href="https://groq.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                    Groq&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-slate-300">Vercel:</strong> Hosts our website. See{" "}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                    Vercel&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-slate-300">Google AdSense:</strong> Serves advertisements. See{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                    Google&apos;s Privacy Policy
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We do not store the clip descriptions or generated content on our servers. All AI generation happens
                in real-time and is not saved. Log data is retained by Vercel per their data retention policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
              <p>
                Our Service is not directed to children under 13. We do not knowingly collect personal information
                from children under 13. If you believe we have collected such information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">8. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access the personal data we hold about you</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of personalized advertising</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <span className="text-purple-400">valorantviral@gmail.com</span>.
              </p>
            </section>

          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-700 mt-6">
          VALORANT is a trademark of Riot Games. ValorantViral is not affiliated with Riot Games.
        </p>
      </div>
    </main>
  );
}
