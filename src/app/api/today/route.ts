import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getProfileIdFromCookies } from "@/lib/profileToken";
import { getLatestPalmReading, getDailyInsight, addDailyInsight, getDailyInsightStreak } from "@/lib/store";
import { buildDailyInsightContent, todayDateString } from "@/lib/dailyInsight";

export async function GET() {
  const profileId = await getProfileIdFromCookies();
  if (!profileId) return NextResponse.json({ insight: null, streak: 0 });

  const reading = getLatestPalmReading(profileId);
  if (!reading) return NextResponse.json({ insight: null, streak: 0 });

  const date = todayDateString();
  let insight = getDailyInsight(profileId, date);

  if (!insight) {
    insight = addDailyInsight({
      id: randomUUID(),
      profileId,
      date,
      content: buildDailyInsightContent(reading, profileId, date),
    });
  }

  const streak = getDailyInsightStreak(profileId);
  return NextResponse.json({ insight, streak });
}
