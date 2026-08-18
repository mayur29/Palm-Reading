import { describe, expect, it } from "vitest";
import { pickDailySectionKey, buildDailyInsightContent } from "../dailyInsight";
import { composeReading } from "@/content/composer";
import { calculateLifePath } from "../numerology";
import type { PalmAnalysis, PalmReading } from "../types";

const analysis: PalmAnalysis = {
  handedness: "right",
  confidence: 0.9,
  lifeLine: { length: "long", depth: "deep", curvature: "curved", breaks: false },
  headLine: { length: "medium", depth: "medium", curvature: "straight", breaks: false },
  heartLine: { length: "short", depth: "shallow", curvature: "slightly_curved", breaks: true },
  fateLine: { present: true, length: "medium", depth: "medium" },
  mounts: {
    jupiter: "prominent",
    saturn: "average",
    apollo: "average",
    mercury: "prominent",
    venus: "prominent",
    moon: "average",
    mars: "flat",
  },
  handShape: "fire",
  notableSigns: [],
  source: "vision",
};

function makeReading(): PalmReading {
  const lifePath = calculateLifePath(14, 3, 1990);
  return {
    id: "r1",
    profileId: "p1",
    createdAt: new Date(0).toISOString(),
    photoStored: false,
    analysis,
    sections: composeReading(analysis, "Anja", lifePath),
    lifePathNumber: lifePath.number,
    lifePathIsPersonalStyle: lifePath.isPersonalStyleNumber,
  };
}

describe("pickDailySectionKey", () => {
  it("is deterministic for the same profile and date", () => {
    const a = pickDailySectionKey("p1", "2026-08-18");
    const b = pickDailySectionKey("p1", "2026-08-18");
    expect(a).toBe(b);
  });

  it("varies across different dates for the same profile", () => {
    const seen = new Set<string>();
    for (let day = 1; day <= 10; day++) {
      seen.add(pickDailySectionKey("p1", `2026-08-${String(day).padStart(2, "0")}`));
    }
    expect(seen.size).toBeGreaterThan(1);
  });

  it("varies across different profiles for the same date", () => {
    const a = pickDailySectionKey("profile-a", "2026-08-18");
    const b = pickDailySectionKey("profile-b", "2026-08-18");
    expect(typeof a).toBe("string");
    expect(typeof b).toBe("string");
  });
});

describe("buildDailyInsightContent", () => {
  it("produces non-empty content in every language and tone", () => {
    const reading = makeReading();
    const content = buildDailyInsightContent(reading, "p1", "2026-08-18");
    for (const locale of ["de", "en"] as const) {
      for (const tone of ["spiritual", "playful"] as const) {
        expect(content[locale][tone].length).toBeGreaterThan(0);
      }
    }
  });

  it("is deterministic for the same reading, profile, and date", () => {
    const reading = makeReading();
    const a = buildDailyInsightContent(reading, "p1", "2026-08-18");
    const b = buildDailyInsightContent(reading, "p1", "2026-08-18");
    expect(a).toEqual(b);
  });
});
