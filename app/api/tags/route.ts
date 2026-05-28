import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { description, agent, map, rank } = await req.json();

    if (!description || description.trim().length < 3) {
      return NextResponse.json({ tags: [] });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ tags: [] });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const context = [
      description,
      agent ? `Agent: ${agent}` : "",
      map ? `Map: ${map}` : "",
      rank ? `Rank: ${rank}` : "",
    ].filter(Boolean).join(", ");

    const prompt = `You are a Valorant content SEO expert. Generate 15 highly specific hashtags for this clip: "${context}"

Return ONLY a JSON array of hashtag strings, no explanation, no markdown:
["#tag1","#tag2","#tag3",...]

Rules:
- Include agent-specific tags if agent is mentioned
- Include map-specific tags if map is mentioned  
- Include rank-specific tags if rank is mentioned
- Mix niche Valorant tags with broader gaming tags
- All tags must start with #
- No spaces in tags
- Make them specific and relevant to the clip description`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    let tags: string[] = [];
    try {
      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      tags = JSON.parse(cleaned);
      if (!Array.isArray(tags)) tags = [];
      // Ensure all start with #
      tags = tags
        .filter((t): t is string => typeof t === "string")
        .map(t => t.startsWith("#") ? t : `#${t}`)
        .slice(0, 20);
    } catch {
      // Extract hashtags from raw text as fallback
      const matches = text.match(/#\w+/g);
      tags = matches ? matches.slice(0, 20) : [];
    }

    return NextResponse.json({ tags });
  } catch (error) {
    console.error("Tags generation error:", error);
    return NextResponse.json({ tags: [] });
  }
}
