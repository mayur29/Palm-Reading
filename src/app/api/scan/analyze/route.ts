import { NextRequest, NextResponse } from "next/server";
import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { palmAnalysisSchema } from "@/lib/palmAnalysisSchema";

const VISION_MODEL = process.env.PALMORA_VISION_MODEL ?? "claude-sonnet-4-5";
const CONFIDENCE_THRESHOLD = 0.5;

const ANALYSIS_PROMPT = `You are an expert in Indian palmistry (Hasta Samudrika Shastra). Look closely at the photo of a human palm and extract a structured, purely observational analysis of the visible lines, mounts, and hand shape.

Rules:
- Only describe what you can actually see in the image. Do not invent traits.
- If the photo is blurry, poorly lit, cropped, not a palm, or otherwise unusable, set "confidence" low (below 0.4) and "handedness" to "unclear" — do your best on the rest, but be honest about uncertainty.
- "confidence" is your overall confidence (0 to 1) that this analysis reflects a clearly visible palm.
- "notableSigns" should list any clearly visible special marks (e.g. "star", "island", "cross", "triangle", "chain") — use an empty array if none are clearly visible.
- Keep "notes" fields short (max one sentence) and purely descriptive, never interpretive.`;

export async function POST(request: NextRequest) {
  let body: { imageDataUrl?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (!body.imageDataUrl || !body.imageDataUrl.startsWith("data:image/")) {
    return NextResponse.json({ error: "invalid_image" }, { status: 400 });
  }

  const attempt = async () => {
    return generateObject({
      model: anthropic(VISION_MODEL),
      schema: palmAnalysisSchema,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: ANALYSIS_PROMPT },
            { type: "image", image: body.imageDataUrl! },
          ],
        },
      ],
    });
  };

  try {
    let result;
    try {
      result = await attempt();
    } catch {
      result = await attempt();
    }

    const analysis = result.object;
    const needsFallback = analysis.confidence < CONFIDENCE_THRESHOLD;

    return NextResponse.json({ analysis, needsFallback });
  } catch {
    return NextResponse.json({ analysis: null, needsFallback: true });
  }
}
