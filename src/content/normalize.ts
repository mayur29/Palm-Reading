import type { LengthValue, DepthValue, CurvatureValue, BoolKey, MountLevel } from "./schema";

function matches(value: string | undefined, needles: string[]): boolean {
  if (!value) return false;
  const lower = value.toLowerCase();
  return needles.some((n) => lower.includes(n));
}

export function normalizeLength(value: string | undefined): LengthValue {
  if (matches(value, ["short", "kurz"])) return "short";
  if (matches(value, ["long", "lang"])) return "long";
  return "medium";
}

export function normalizeDepth(value: string | undefined): DepthValue {
  if (matches(value, ["shallow", "faint", "flach"])) return "shallow";
  if (matches(value, ["deep", "tief"])) return "deep";
  return "medium";
}

export function normalizeCurvature(value: string | undefined): CurvatureValue {
  if (matches(value, ["straight", "gerade"])) return "straight";
  if (matches(value, ["curved", "curvy", "gebogen", "geschwungen"]) && !matches(value, ["slight"])) {
    return "curved";
  }
  if (matches(value, ["slightly", "leicht"])) return "slightly_curved";
  return "slightly_curved";
}

export function normalizeBool(value: boolean | undefined): BoolKey {
  return value ? "true" : "false";
}

export function normalizeMountLevel(value: string | undefined): MountLevel {
  if (matches(value, ["prominent", "high", "ausgeprägt"])) return "prominent";
  if (matches(value, ["flat", "low", "flach"])) return "flat";
  return "average";
}
