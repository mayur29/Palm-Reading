"use client";

import { useState } from "react";
import { useTranslations } from "@/i18n/LanguageProvider";
import type { PalmAnalysisSchema } from "@/lib/palmAnalysisSchema";

const LENGTH_VALUES = ["short", "medium", "long"];
const CURVATURE_VALUES = ["straight", "slightly_curved", "curved"];
const FATE_PRESENT_VALUES = ["true", "false"];
const HAND_SHAPE_VALUES = ["earth", "air", "fire", "water"];

const steps: { id: string; translationKey: string; values: string[] }[] = [
  { id: "lifeLine.length", translationKey: "quiz.length", values: LENGTH_VALUES },
  { id: "lifeLine.curvature", translationKey: "quiz.curvature", values: CURVATURE_VALUES },
  { id: "headLine.length", translationKey: "quiz.length", values: LENGTH_VALUES },
  { id: "headLine.curvature", translationKey: "quiz.curvature", values: CURVATURE_VALUES },
  { id: "heartLine.length", translationKey: "quiz.length", values: LENGTH_VALUES },
  { id: "heartLine.curvature", translationKey: "quiz.curvature", values: CURVATURE_VALUES },
  { id: "fateLine.present", translationKey: "quiz.fatePresent", values: FATE_PRESENT_VALUES },
  { id: "handShape", translationKey: "quiz.handShape", values: HAND_SHAPE_VALUES },
];

export function QuizFlow({ onComplete }: { onComplete: (analysis: PalmAnalysisSchema) => void }) {
  const { t } = useTranslations();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const step = steps[stepIndex];
  const options = step.values.map((value) => ({ value, label: t(`${step.translationKey}.${value}`) }));

  const choose = (value: string) => {
    const next = { ...answers, [step.id]: value };
    setAnswers(next);
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      return;
    }

    const analysis: PalmAnalysisSchema = {
      handedness: "unclear",
      confidence: 1,
      lifeLine: {
        length: (next["lifeLine.length"] as PalmAnalysisSchema["lifeLine"]["length"]) ?? "medium",
        depth: "medium",
        curvature: (next["lifeLine.curvature"] as PalmAnalysisSchema["lifeLine"]["curvature"]) ?? "slightly_curved",
        breaks: false,
      },
      headLine: {
        length: (next["headLine.length"] as PalmAnalysisSchema["headLine"]["length"]) ?? "medium",
        depth: "medium",
        curvature: (next["headLine.curvature"] as PalmAnalysisSchema["headLine"]["curvature"]) ?? "slightly_curved",
        breaks: false,
      },
      heartLine: {
        length: (next["heartLine.length"] as PalmAnalysisSchema["heartLine"]["length"]) ?? "medium",
        depth: "medium",
        curvature: (next["heartLine.curvature"] as PalmAnalysisSchema["heartLine"]["curvature"]) ?? "slightly_curved",
        breaks: false,
      },
      fateLine: {
        present: next["fateLine.present"] === "true",
        length: "medium",
        depth: "medium",
      },
      mounts: {
        jupiter: "average",
        saturn: "average",
        apollo: "average",
        mercury: "average",
        venus: "average",
        moon: "average",
        mars: "average",
      },
      handShape: (next["handShape"] as PalmAnalysisSchema["handShape"]) ?? "earth",
      notableSigns: [],
    };

    onComplete(analysis);
  };

  return (
    <div className="flex flex-col gap-4 px-6 pt-6">
      <div className="mb-2 flex gap-1.5">
        {steps.map((s, i) => (
          <div key={s.id} className={`h-1.5 flex-1 rounded-full ${i <= stepIndex ? "bg-coral" : "bg-plum/10"}`} />
        ))}
      </div>
      <h2 className="font-display text-2xl text-plum">{t("quiz.title")}</h2>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => choose(opt.value)}
            className="rounded-2xl border border-plum/15 bg-white px-5 py-4 text-left text-plum transition-colors active:border-coral active:bg-coral/10"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
