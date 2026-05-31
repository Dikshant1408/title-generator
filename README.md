# ⚡ ValorantViral — AI Viral Title & Hashtag Generator

> Turn your Valorant clips into viral YouTube Shorts, TikTok, and Reels content — powered by AI.

### 🌐 **Live Site: [valorant-viral-generator.vercel.app](https://valorant-viral-generator.vercel.app)**

[![Live Demo](https://img.shields.io/badge/Live-Demo-purple?style=for-the-badge&logo=vercel)](https://valorant-viral-generator.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Groq AI](https://img.shields.io/badge/Groq-Llama_3.3-orange?style=flat-square)](https://groq.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## 🎮 What It Does

Paste a short description of your Valorant clip and instantly get:

| Output | Description |
|---|---|
| **5 Viral Titles** | YouTube Shorts & TikTok optimized |
| **3 Captions** | With emojis and CTAs for TikTok/Reels |
| **10 Hashtags** | Real tags that get views |
| **3 Thumbnail Texts** | Bold, ALL CAPS, scroll-stopping |
| **2 Anime Hype Lines** | Dramatic cinematic narration |
| **Tags Generator** | Platform-specific sets for YouTube, TikTok, Instagram, Twitter |

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/Dikshant1408/title-generator
cd title-generator
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Required
GROQ_API_KEY=your_groq_api_key_here

# Optional — for analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional — for AdSense
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXXX
```

**Get a free Groq API key:** https://console.groq.com/keys

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Vercel (Free)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dikshant1408/title-generator)

### Manual Deploy

```bash
npx vercel --prod
```

**Required environment variable in Vercel dashboard:**
- `GROQ_API_KEY` → Your Groq API key

---

## 📁 Project Structure

```
valorant-viral-generator/
├── app/
│   ├── api/
│   │   ├── generate/route.ts       # AI content generation (Groq)
│   │   └── tags/route.ts           # AI tags generation (Groq)
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── privacy/page.tsx            # Privacy Policy (AdSense compliant)
│   ├── terms/page.tsx              # Terms of Service
│   ├── valorant-shorts-titles/     # SEO landing page
│   ├── valorant-hashtags/          # SEO landing page
│   ├── valorant-captions/          # SEO landing page
│   ├── valorant-thumbnail-text/    # SEO landing page
│   ├── valorant-youtube-shorts/    # SEO landing page
│   ├── globals.css                 # Global styles + neon/glass effects
│   ├── layout.tsx                  # Root layout + SEO + AdSense
│   ├── page.tsx                    # Main page (lazy-loaded sections)
│   ├── sitemap.ts                  # Auto-generated sitemap (15 URLs)
│   └── robots.ts                   # SEO robots.txt
├── components/
│   ├── Analytics.tsx               # Google Analytics 4 + event tracking
│   ├── AdBanner.tsx                # AdSense ad unit component
│   ├── ClientOnlyComponents.tsx    # SSR-safe dynamic imports
│   ├── StickyAdSidebar.tsx         # Fixed sidebar ads (xl screens only)
│   ├── ParticleBackground.tsx      # Optimized canvas particles
│   ├── HeroSection.tsx             # CSS-animated hero (no Framer on LCP)
│   ├── GeneratorSection.tsx        # Main AI generator UI
│   ├── OutputCards.tsx             # Generated content display + tracking
│   ├── TagsGenerator.tsx           # Platform-specific tags generator
│   ├── ExamplesSection.tsx         # Example outputs
│   ├── FeaturesSection.tsx         # Feature highlights
│   ├── TrendingTemplates.tsx       # Copyable title templates
│   ├── SEOSections.tsx             # SEO content sections
│   ├── FAQSection.tsx              # FAQ accordion
│   ├── Navbar.tsx                  # Fixed navigation
│   └── Footer.tsx                  # Site footer with all links
├── public/
│   └── ads.txt                     # AdSense publisher verification
├── .env.local                      # Your environment variables
└── next.config.ts                  # Next.js + caching configuration
```

---

## 🎨 Design System

- **Theme:** Dark mode only, cyberpunk gaming aesthetic
- **Colors:** Neon purple `#a855f7`, Blue `#3b82f6`, Cyan `#06b6d4`, Pink `#ec4899`
- **Effects:** Glassmorphism cards, neon borders, particle background, CSS animations
- **Performance:** CSS animations on LCP path (no Framer Motion blocking), lazy-loaded below-fold components

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + CSS |
| AI | Groq (Llama 3.3 70B) |
| Icons | Lucide React |
| Analytics | Google Analytics 4 |
| Ads | Google AdSense |
| Hosting | Vercel (free tier) |

---

## 📈 SEO Pages

| Page | Target Keywords |
|---|---|
| `/valorant-shorts-titles` | valorant shorts titles, viral valorant titles |
| `/valorant-hashtags` | valorant hashtag generator, valorant tiktok hashtags |
| `/valorant-captions` | valorant captions, valorant tiktok captions |
| `/valorant-thumbnail-text` | valorant thumbnail text, gaming thumbnail generator |
| `/valorant-youtube-shorts` | valorant youtube shorts, how to grow valorant channel |

---

## 💰 Monetization

AdSense is integrated with:
- 2 sticky sidebar ads (left + right, desktop only)
- 6 inline page ads
- 3 inline result ads (shown when content is generated)

To activate: add `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` and ad slot IDs to Vercel environment variables.

---

## 📊 Analytics Events Tracked

| Event | Trigger |
|---|---|
| `generate_content` | User clicks Generate |
| `copy_title` | User copies a title |
| `copy_caption` | User copies a caption |
| `copy_hashtags` | User copies hashtags |
| `copy_thumbnail` | User copies thumbnail text |
| `copy_anime` | User copies anime hype line |
| `copy_all` | User copies all of a section |
| `share` | User clicks Share |
| `generate_tags` | User generates tags |

---

## ⚠️ Disclaimer

VALORANT is a trademark of Riot Games. ValorantViral is an independent fan tool and is not affiliated with or endorsed by Riot Games.

---

## 📄 License

MIT License — free to use, modify, and deploy.
