import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge";

const CLIP_TYPES: Record<string, string> = {
  ace: "ACE (5-kill round)",
  clutch: "Clutch play",
  funny: "Funny/Fail moment",
  operator: "Operator/Sniper highlight",
  sheriff: "Sheriff pistol highlight",
  vct: "VCT/Pro-style play",
  anime: "Anime edit / cinematic",
  montage: "Montage highlight",
  toxic: "Toxic/Trash talk moment",
  pro: "Pro player style",
};

export async function POST(req: NextRequest) {
  try {
    const { description, clipType } = await req.json();

    if (!description || description.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a clip description." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please add GEMINI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const clipTypeLabel = CLIP_TYPES[clipType] || "General highlight";

    const prompt = `You are a viral gaming content expert specializing in Valorant YouTube Shorts and TikTok content. 
    
A Valorant content creator has this clip: "${description}"
Clip type: ${clipTypeLabel}

Generate viral content in EXACTLY this JSON format (no markdown, no extra text, just valid JSON):

{
  "titles": [
    "title 1 with emojis",
    "title 2 with emojis",
    "title 3 with emojis",
    "title 4 with emojis",
    "title 5 with emojis"
  ],
  "captions": [
    "caption 1 with emojis and call to action",
    "caption 2 with emojis and call to action",
    "caption 3 with emojis and call to action"
  ],
  "hashtags": [
    "#valorant",
    "#valorantclips",
    "#valoranthighlights",
    "#vct",
    "#shorts",
    "#gaming",
    "#fyp",
    "#valorantmontage",
    "#gamingclips",
    "#valorantedit"
  ],
  "thumbnailTexts": [
    "THUMBNAIL TEXT 1 (short, bold, all caps, max 5 words)",
    "THUMBNAIL TEXT 2 (short, bold, all caps, max 5 words)",
    "THUMBNAIL TEXT 3 (short, bold, all caps, max 5 words)"
  ],
  "animeHypeLines": [
    "Anime-style dramatic hype line 1 (poetic, dramatic, like an anime narrator)",
    "Anime-style dramatic hype line 2 (poetic, dramatic, like an anime narrator)"
  ]
}

Rules:
- Titles must be click-bait but authentic, 6-12 words, include relevant emojis
- Captions should be engaging, include emojis, end with a question or CTA
- Hashtags must be real Valorant/gaming hashtags that get views
- Thumbnail texts must be SHORT (2-5 words), ALL CAPS, shocking/dramatic
- Anime hype lines must sound like epic anime narration, poetic and dramatic
- Make everything feel VIRAL and optimized for the ${clipTypeLabel} clip type
- Reference the specific clip details: "${description}"`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Parse JSON from response
    let parsed;
    try {
      // Strip any markdown code blocks if present
      const cleaned = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      parsed = JSON.parse(cleaned);
    } catch {
      // Try to extract JSON from the text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Failed to parse AI response");
      }
    }

    return NextResponse.json({ success: true, data: parsed });
  } catch (error: unknown) {
    console.error("Generation error:", error);
    const message =
      error instanceof Error ? error.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
