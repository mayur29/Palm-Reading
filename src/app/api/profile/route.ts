import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { createProfile, getProfile, updateProfile } from "@/lib/store";
import { PROFILE_COOKIE, getProfileIdFromCookies } from "@/lib/profileToken";

const profileInput = z.object({
  name: z.string().min(1).max(60),
  birthDay: z.number().int().min(1).max(31),
  birthMonth: z.number().int().min(1).max(12),
  birthYear: z.number().int().min(1900).max(2100).nullable(),
  language: z.enum(["de", "en"]),
  tone: z.enum(["spiritual", "playful"]),
});

const profilePatch = profileInput.partial().extend({
  photoConsent: z.boolean().optional(),
});

export async function GET() {
  const id = await getProfileIdFromCookies();
  if (!id) return NextResponse.json({ profile: null });

  const profile = getProfile(id);
  return NextResponse.json({ profile });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = profileInput.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const profile = createProfile({
    id: randomUUID(),
    ...parsed.data,
    photoConsent: false,
    createdAt: new Date().toISOString(),
  });

  const response = NextResponse.json({ profile });
  response.cookies.set(PROFILE_COOKIE, profile.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365 * 5,
    path: "/",
  });
  return response;
}

export async function PATCH(request: NextRequest) {
  const id = await getProfileIdFromCookies();
  if (!id) return NextResponse.json({ error: "no_profile" }, { status: 401 });

  const body = await request.json();
  const parsed = profilePatch.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const profile = updateProfile(id, parsed.data);
  if (!profile) return NextResponse.json({ error: "not_found" }, { status: 404 });

  return NextResponse.json({ profile });
}
