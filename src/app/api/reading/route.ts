import { NextResponse } from "next/server";
import { getProfileIdFromCookies } from "@/lib/profileToken";
import { getLatestPalmReading } from "@/lib/store";

export async function GET() {
  const profileId = await getProfileIdFromCookies();
  if (!profileId) return NextResponse.json({ reading: null });

  const reading = getLatestPalmReading(profileId);
  return NextResponse.json({ reading });
}
