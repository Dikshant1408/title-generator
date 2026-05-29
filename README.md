# ⚡ ValorantViral — AI Viral Title & Hashtag Generator

> Turn your Valorant clips into viral YouTube Shorts, TikTok, and Reels content — powered by AI.

### 🌐 Live Site: [valorant-viral-generator.vercel.app](https://valorant-viral-generator.vercel.app)

![ValorantViral](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=flat-square&logo=google)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

---

## 🎮 What It Does

Paste a short description of your Valorant clip and instantly get:

- **5 Viral Titles** — YouTube Shorts & TikTok optimized
- **3 Captions** — With emojis and CTAs for TikTok/Reels
- **10 Hashtags** — Real tags that get views
- **3 Thumbnail Texts** — Bold, ALL CAPS, scroll-stopping
- **2 Anime Hype Lines** — Dramatic cinematic narration

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/valorant-viral-generator
cd valorant-viral-generator
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Get a free Gemini API key:** https://aistudio.google.com/app/apikey

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Vercel (Free)

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/valorant-viral-generator)

### Option B: Manual Deploy

```bash
npm install -g vercel
vercel
```

**Add environment variables in Vercel dashboard:**
- `GEMINI_API_KEY` → Your Gemini API key
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` → (Optional) Your AdSense publisher ID

---

## 💰 Monetization Setup (Google AdSense)

1. Apply for Google AdSense at https://adsense.google.com
2. Get your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXXX`)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXXX
   ```
4. Add the AdSense script to `app/layout.tsx`:
   ```tsx
   <Script
     async
     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
     crossOrigin="anonymous"
     strategy="afterInteractive"
   />
   ```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| AI | Google Gemini 1.5 Flash |
| Icons | Lucide React |
| Hosting | Vercel (free tier) |

---

## 📁 Project Structure

```
valorant-viral-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts        # Gemini AI API endpoint
│   ├── globals.css             # Global styles + neon/glass effects
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Main page assembly
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # SEO robots.txt
├── components/
│   ├── ParticleBackground.tsx  # Animated particle canvas
│   ├── Navbar.tsx              # Fixed navigation
│   ├── HeroSection.tsx         # Landing hero
│   ├── GeneratorSection.tsx    # Main AI generator UI
│   ├── OutputCards.tsx         # Generated content display
│   ├── ExamplesSection.tsx     # Example outputs
│   ├── FeaturesSection.tsx     # Feature highlights
│   ├── TrendingTemplates.tsx   # Copyable title templates
│   ├── SEOSections.tsx         # SEO content sections
│   ├── FAQSection.tsx          # FAQ accordion
│   ├── AdBanner.tsx            # Google AdSense integration
│   └── Footer.tsx              # Site footer
├── .env.local                  # Your environment variables
├── .env.example                # Template for env vars
└── next.config.ts              # Next.js configuration
```

---

## 🎨 Design System

- **Theme:** Dark mode only, cyberpunk gaming aesthetic
- **Colors:** Neon purple (#a855f7), Blue (#3b82f6), Cyan (#06b6d4), Pink (#ec4899)
- **Effects:** Glassmorphism cards, neon borders, particle background, animated gradients
- **Typography:** Inter font, bold headings, gradient text

---

## 📈 SEO Features

- Full OpenGraph + Twitter Card metadata
- Auto-generated `sitemap.xml`
- `robots.txt` configuration
- Semantic HTML structure
- Fast loading (Edge runtime for API)
- Mobile-first responsive design

---

## ⚠️ Disclaimer

VALORANT is a trademark of Riot Games. ValorantViral is an independent fan tool and is not endorsed by or affiliated with Riot Games.

---

## 📄 License

MIT License — free to use, modify, and deploy.
