import type { PalmAnalysis, ReadingSections } from "@/lib/types";
import type { LifePathResult } from "@/lib/numerology";
import { NUMBER_MEANINGS, personalStyleNote } from "@/lib/numerology";
import { knowledgeBase } from "./knowledgeBase";
import type { NotableSign } from "./schema";
import {
  normalizeLength,
  normalizeDepth,
  normalizeCurvature,
  normalizeBool,
  normalizeMountLevel,
} from "./normalize";
import { joinLocalizedText } from "./localizedText";
import { personalNote } from "./notes";

const KNOWN_SIGNS: NotableSign[] = ["star", "island", "cross", "triangle", "chain"];

function findNotableSign(signs: string[]): NotableSign | null {
  for (const raw of signs) {
    const lower = raw.toLowerCase();
    const match = KNOWN_SIGNS.find((sign) => lower.includes(sign));
    if (match) return match;
  }
  return null;
}

export function composeReading(
  analysis: PalmAnalysis,
  name: string,
  lifePath: LifePathResult,
): ReadingSections {
  const kb = knowledgeBase;
  const handShape = analysis.handShape === "unclear" ? "earth" : analysis.handShape;

  const lifeLineParts = [
    kb.lifeLine.length[normalizeLength(analysis.lifeLine.length)],
    kb.lifeLine.depth[normalizeDepth(analysis.lifeLine.depth)],
    kb.lifeLine.curvature[normalizeCurvature(analysis.lifeLine.curvature)],
    kb.lifeLine.breaks[normalizeBool(analysis.lifeLine.breaks)],
  ];

  const headLineParts = [
    kb.headLine.length[normalizeLength(analysis.headLine.length)],
    kb.headLine.depth[normalizeDepth(analysis.headLine.depth)],
    kb.headLine.curvature[normalizeCurvature(analysis.headLine.curvature)],
    kb.headLine.breaks[normalizeBool(analysis.headLine.breaks)],
  ];

  const heartLineParts = [
    kb.heartLine.length[normalizeLength(analysis.heartLine.length)],
    kb.heartLine.depth[normalizeDepth(analysis.heartLine.depth)],
    kb.heartLine.curvature[normalizeCurvature(analysis.heartLine.curvature)],
    kb.heartLine.breaks[normalizeBool(analysis.heartLine.breaks)],
  ];

  const fateLineParts = [
    kb.fateLine.present[normalizeBool(analysis.fateLine.present)],
    kb.fateLine.length[normalizeLength(analysis.fateLine.length)],
    kb.fateLine.depth[normalizeDepth(analysis.fateLine.depth)],
  ];

  const handShapeText = kb.handShapes[handShape];
  const notableSign = findNotableSign(analysis.notableSigns);
  const notableSignText = notableSign ? [kb.notableSigns[notableSign]] : [];

  const mountLevel = (name: keyof PalmAnalysis["mounts"]) =>
    kb.mounts[name][normalizeMountLevel(analysis.mounts[name])];

  const personality = joinLocalizedText(...headLineParts.slice(0, 2), handShapeText, ...notableSignText);
  const heart = joinLocalizedText(...heartLineParts, mountLevel("venus"));
  const mind = joinLocalizedText(...headLineParts, mountLevel("mercury"));
  const career = joinLocalizedText(...fateLineParts, mountLevel("jupiter"), mountLevel("saturn"));
  const vitality = joinLocalizedText(...lifeLineParts, mountLevel("mars"), mountLevel("moon"));

  const numberMeaning = NUMBER_MEANINGS[lifePath.number];
  const numbersParts = lifePath.isPersonalStyleNumber
    ? [numberMeaning, personalStyleNote()]
    : [numberMeaning];
  const numbers = joinLocalizedText(...numbersParts);

  const note = joinLocalizedText(personalNote(name), mountLevel("apollo"));

  return { personality, heart, mind, career, vitality, numbers, note };
}
