import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export const runtime = "edge";

const CLIP_TYPES: Record<string, string> = {
  ace:      "ACE (5-kill round)",
  clutch:   "Clutch play",
  funny:    "Funny/Fail moment",
  operator: "Operator/Sniper highlight",
  sheriff:  "Sheriff pistol highlight",
  vct:      "VCT/Pro-style play",
  anime:    "Anime edit / cinematic",
  montage:  "Montage highlight",
  toxic:    "Toxic/Trash talk moment",
  pro:      "Pro player style",
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

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please add GROQ_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });
    const clipTypeLabel = CLIP_TYPES[clipType] || "General highlight";

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.9,
      max_tokens: 1024,
      messages: [
        {
          role: "system",
          content:
            "You are a viral gaming content expert specializing in Valorant YouTube Shorts and TikTok. You always respond with valid JSON only — no markdown, no explanation, no code blocks.",
        },
        {
          role: "user",
          content: `A Valorant content creator has this clip: "${description}"
Clip type: ${clipTypeLabel}

Generate viral content in EXACTLY this JSON format:

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
    "#valorant","#valorantclips","#valoranthighlights","#vct",
    "#shorts","#gaming","#fyp","#valorantmontage","#gamingclips","#valorantedit"
  ],
  "thumbnailTexts": [
    "THUMBNAIL TEXT 1",
    "THUMBNAIL TEXT 2",
    "THUMBNAIL TEXT 3"
  ],
  "animeHypeLines": [
    "Anime-style dramatic hype line 1",
    "Anime-style dramatic hype line 2"
  ]
}

Rules:
- Titles: click-bait but authentic, 6-12 words, include relevant emojis
- Captions: engaging, emojis, end with a question or CTA
- Hashtags: real Valorant/gaming hashtags that get views (exactly 10)
- Thumbnail texts: SHORT (2-5 words), ALL CAPS, shocking/dramatic
- Anime hype lines: epic anime narration, poetic and dramatic
- Everything optimized for ${clipTypeLabel} clip type
- Reference the specific clip: "${description}"`,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content ?? "";

    let parsed;
    try {
      const cleaned = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      parsed = JSON.parse(cleaned);
    } catch {
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
