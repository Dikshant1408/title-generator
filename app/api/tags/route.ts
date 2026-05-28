import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { description, agent, map, rank } = await req.json();

    if (!description || description.trim().length < 3) {
      return NextResponse.json({ tags: [] });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ tags: [] });
    }

    const groq = new Groq({ apiKey });

    const context = [
      description,
      agent ? `Agent: ${agent}` : "",
      map    ? `Map: ${map}`   : "",
      rank   ? `Rank: ${rank}` : "",
    ]
      .filter(Boolean)
      .join(", ");

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      max_tokens: 256,
      messages: [
        {
          role: "system",
          content:
            "You are a Valorant content SEO expert. Respond with a JSON array of hashtag strings only — no markdown, no explanation.",
        },
        {
          role: "user",
          content: `Generate 15 highly specific hashtags for this Valorant clip: "${context}"

Return ONLY a JSON array like: ["#tag1","#tag2","#tag3",...]

Rules:
- Include agent-specific tags if agent is mentioned
- Include map-specific tags if map is mentioned
- Include rank-specific tags if rank is mentioned
- Mix niche Valorant tags with broader gaming tags
- All tags must start with #, no spaces inside tags`,
        },
      ],
    });

    const text = (completion.choices[0]?.message?.content ?? "").trim();

    let tags: string[] = [];
    try {
      const cleaned = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      tags = JSON.parse(cleaned);
      if (!Array.isArray(tags)) tags = [];
      tags = tags
        .filter((t): t is string => typeof t === "string")
        .map(t => (t.startsWith("#") ? t : `#${t}`))
        .slice(0, 20);
    } catch {
      const matches = text.match(/#\w+/g);
      tags = matches ? matches.slice(0, 20) : [];
    }

    return NextResponse.json({ tags });
  } catch (error) {
    console.error("Tags generation error:", error);
    return NextResponse.json({ tags: [] });
  }
}
