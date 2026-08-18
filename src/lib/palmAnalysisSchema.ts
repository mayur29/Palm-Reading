import { z } from "zod";

const lineSchema = z.object({
  length: z.enum(["short", "medium", "long"]),
  depth: z.enum(["shallow", "medium", "deep"]),
  curvature: z.enum(["straight", "slightly_curved", "curved"]),
  breaks: z.boolean(),
  notes: z.string().optional(),
});

export const palmAnalysisSchema = z.object({
  handedness: z.enum(["left", "right", "unclear"]),
  confidence: z.number().min(0).max(1),
  lifeLine: lineSchema,
  headLine: lineSchema,
  heartLine: lineSchema,
  fateLine: z.object({
    present: z.boolean(),
    length: z.enum(["short", "medium", "long"]),
    depth: z.enum(["shallow", "medium", "deep"]),
    notes: z.string().optional(),
  }),
  mounts: z.object({
    jupiter: z.enum(["prominent", "average", "flat"]),
    saturn: z.enum(["prominent", "average", "flat"]),
    apollo: z.enum(["prominent", "average", "flat"]),
    mercury: z.enum(["prominent", "average", "flat"]),
    venus: z.enum(["prominent", "average", "flat"]),
    moon: z.enum(["prominent", "average", "flat"]),
    mars: z.enum(["prominent", "average", "flat"]),
  }),
  handShape: z.enum(["earth", "air", "fire", "water", "unclear"]),
  notableSigns: z.array(z.string()).default([]),
});

export type PalmAnalysisSchema = z.infer<typeof palmAnalysisSchema>;
