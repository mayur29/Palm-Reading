import { describe, expect, it } from "vitest";
import { composeReading } from "../composer";
import { calculateLifePath } from "@/lib/numerology";
import type { PalmAnalysis } from "@/lib/types";

function makeAnalysis(overrides: Partial<PalmAnalysis> = {}): PalmAnalysis {
  return {
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
    notableSigns: ["star on the mount of apollo"],
    source: "vision",
    ...overrides,
  };
}

const SECTION_KEYS = ["personality", "heart", "mind", "career", "vitality", "numbers", "note"] as const;

describe("composeReading", () => {
  it("produces every section in both languages and both tones with non-empty text", () => {
    const analysis = makeAnalysis();
    const lifePath = calculateLifePath(14, 3, 1990);
    const sections = composeReading(analysis, "Anja", lifePath);

    for (const key of SECTION_KEYS) {
      const section = sections[key];
      for (const locale of ["de", "en"] as const) {
        for (const tone of ["spiritual", "playful"] as const) {
          expect(section[locale][tone].length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("weaves the person's name into the personal note", () => {
    const analysis = makeAnalysis();
    const lifePath = calculateLifePath(14, 3, 1990);
    const sections = composeReading(analysis, "Anja", lifePath);

    expect(sections.note.de.spiritual).toContain("Anja");
    expect(sections.note.en.playful).toContain("Anja");
  });

  it("adds the personal-style-number note when the birth year is unknown", () => {
    const analysis = makeAnalysis();
    const lifePath = calculateLifePath(14, 3, null);
    const sections = composeReading(analysis, "Anja", lifePath);

    expect(sections.numbers.en.spiritual.toLowerCase()).toContain("style number");
  });

  it("handles an unclear hand shape by falling back gracefully", () => {
    const analysis = makeAnalysis({ handShape: "unclear", notableSigns: [] });
    const lifePath = calculateLifePath(1, 1, 2000);
    expect(() => composeReading(analysis, "Anja", lifePath)).not.toThrow();
  });
});
