import type { LocalizedText, HandShape } from "@/lib/types";

export type LengthValue = "short" | "medium" | "long";
export type DepthValue = "shallow" | "medium" | "deep";
export type CurvatureValue = "straight" | "slightly_curved" | "curved";
export type BoolKey = "true" | "false";

export type LineKnowledge = {
  length: Record<LengthValue, LocalizedText>;
  depth: Record<DepthValue, LocalizedText>;
  curvature: Record<CurvatureValue, LocalizedText>;
  breaks: Record<BoolKey, LocalizedText>;
};

export type FateLineKnowledge = {
  present: Record<BoolKey, LocalizedText>;
  length: Record<LengthValue, LocalizedText>;
  depth: Record<DepthValue, LocalizedText>;
};

export type MountName = "jupiter" | "saturn" | "apollo" | "mercury" | "venus" | "moon" | "mars";
export type MountLevel = "prominent" | "average" | "flat";

export type NotableSign = "star" | "island" | "cross" | "triangle" | "chain";

export type PalmistryKnowledgeBase = {
  lifeLine: LineKnowledge;
  headLine: LineKnowledge;
  heartLine: LineKnowledge;
  fateLine: FateLineKnowledge;
  mounts: Record<MountName, Record<MountLevel, LocalizedText>>;
  handShapes: Record<Exclude<HandShape, "unclear">, LocalizedText>;
  notableSigns: Record<NotableSign, LocalizedText>;
};
