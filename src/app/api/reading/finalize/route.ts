import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getProfileIdFromCookies } from "@/lib/profileToken";
import { getProfile, addPalmReading } from "@/lib/store";
import { calculateLifePath } from "@/lib/numerology";
import { composeReading } from "@/content/composer";
import { palmAnalysisSchema } from "@/lib/palmAnalysisSchema";
import { z } from "zod";

const finalizeInput = z.object({
  analysis: palmAnalysisSchema,
  source: z.enum(["vision", "quiz"]),
});

export async function POST(request: NextRequest) {
  const profileId = await getProfileIdFromCookies();
  if (!profileId) return NextResponse.json({ error: "no_profile" }, { status: 401 });

  const profile = getProfile(profileId);
  if (!profile) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const body = await request.json();
  const parsed = finalizeInput.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const analysis = { ...parsed.data.analysis, source: parsed.data.source };
  const lifePath = calculateLifePath(profile.birthDay, profile.birthMonth, profile.birthYear);
  const sections = composeReading(analysis, profile.name, lifePath);

  const reading = addPalmReading({
    id: randomUUID(),
    profileId,
    createdAt: new Date().toISOString(),
    photoStored: false,
    analysis,
    sections,
    lifePathNumber: lifePath.number,
    lifePathIsPersonalStyle: lifePath.isPersonalStyleNumber,
  });

  return NextResponse.json({ reading });
}
