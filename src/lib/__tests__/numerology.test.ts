import { describe, expect, it } from "vitest";
import { calculateLifePath, NUMBER_MEANINGS } from "../numerology";

describe("calculateLifePath", () => {
  it("reduces a full birth date to a single digit", () => {
    const result = calculateLifePath(14, 3, 1990);
    expect(result.isPersonalStyleNumber).toBe(false);
    expect(result.number).toBeGreaterThanOrEqual(1);
    expect(result.number).toBeLessThanOrEqual(9);
  });

  it("preserves master numbers 11 and 22", () => {
    // 29 + 11 + 1994 -> 29+11+1994 = 2034 -> 2+0+3+4=9 (not master); pick a date that yields 11
    // 11 (day) + 2 (month) + 1997 (year) = 2010 -> 2+0+1+0 = 3
    // Use day=11, month=11, year=1999 => 11+11+1999=2021 -> 2+0+2+1=5
    // Instead directly test reduce via a date engineered to hit 29 -> digitSum(29)=11
    const result = calculateLifePath(20, 9, 0);
    // 20+9+0 = 29 -> digitSum(29) = 11 -> master number preserved
    expect(result.number).toBe(11);
  });

  it("falls back to a personal style number when year is missing", () => {
    const result = calculateLifePath(14, 3, null);
    expect(result.isPersonalStyleNumber).toBe(true);
    expect(result.number).toBe(8); // 14 -> 1+4=5, 5+3=8
  });

  it("has content for every possible life path number", () => {
    for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22]) {
      const meaning = NUMBER_MEANINGS[n];
      expect(meaning.de.spiritual.length).toBeGreaterThan(0);
      expect(meaning.de.playful.length).toBeGreaterThan(0);
      expect(meaning.en.spiritual.length).toBeGreaterThan(0);
      expect(meaning.en.playful.length).toBeGreaterThan(0);
    }
  });
});
