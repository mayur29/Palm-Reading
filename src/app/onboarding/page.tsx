"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/i18n/LanguageProvider";
import type { Locale, Tone } from "@/lib/types";

type Step = "name" | "birthdate" | "tone" | "language";
const STEPS: Step[] = ["name", "birthdate", "tone", "language"];

export default function OnboardingPage() {
  const { t, locale, setLocale } = useTranslations();
  const router = useRouter();

  const [stepIndex, setStepIndex] = useState(0);
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [tone, setTone] = useState<Tone>("spiritual");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  const canContinue = () => {
    if (step === "name") return name.trim().length > 0;
    if (step === "birthdate") {
      const d = Number(day);
      const m = Number(month);
      return d >= 1 && d <= 31 && m >= 1 && m <= 12;
    }
    return true;
  };

  const goNext = async () => {
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          birthDay: Number(day),
          birthMonth: Number(month),
          birthYear: year ? Number(year) : null,
          language: locale,
          tone,
        }),
      });
      if (!res.ok) throw new Error("failed");
      router.push("/scan");
    } catch {
      setError(t("common.error"));
      setSubmitting(false);
    }
  };

  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));

  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 py-10">
      <div>
        <div className="mb-8 flex gap-1.5">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full ${i <= stepIndex ? "bg-coral" : "bg-plum/10"}`}
            />
          ))}
        </div>

        {step === "name" && (
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-2xl text-plum">{t("onboarding.title")}</h1>
            <label className="flex flex-col gap-2 text-sm font-medium text-plum/80">
              {t("onboarding.nameLabel")}
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("onboarding.namePlaceholder")}
                className="rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
              />
            </label>
          </div>
        )}

        {step === "birthdate" && (
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-2xl text-plum">{t("onboarding.birthDateTitle")}</h1>
            <div className="flex gap-3">
              <label className="flex flex-1 flex-col gap-2 text-sm font-medium text-plum/80">
                {t("onboarding.dayLabel")}
                <input
                  type="number"
                  min={1}
                  max={31}
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
                />
              </label>
              <label className="flex flex-1 flex-col gap-2 text-sm font-medium text-plum/80">
                {t("onboarding.monthLabel")}
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-plum/80">
              {t("onboarding.yearLabel")}
              <input
                type="number"
                min={1900}
                max={2100}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
              />
            </label>
            <p className="text-xs text-plum/50">{t("onboarding.yearHint")}</p>
          </div>
        )}

        {step === "tone" && (
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-2xl text-plum">{t("onboarding.toneTitle")}</h1>
            {(
              [
                ["spiritual", t("onboarding.toneSpiritual"), t("onboarding.toneSpiritualHint")],
                ["playful", t("onboarding.tonePlayful"), t("onboarding.tonePlayfulHint")],
              ] as const
            ).map(([value, label, hint]) => (
              <button
                key={value}
                onClick={() => setTone(value)}
                className={`rounded-2xl border px-5 py-4 text-left transition-colors ${
                  tone === value ? "border-coral bg-coral/10" : "border-plum/15 bg-white"
                }`}
              >
                <div className="font-semibold text-plum">{label}</div>
                <div className="text-sm text-plum/60">{hint}</div>
              </button>
            ))}
          </div>
        )}

        {step === "language" && (
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-2xl text-plum">{t("onboarding.languageTitle")}</h1>
            {(["de", "en"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`rounded-2xl border px-5 py-4 text-left font-semibold transition-colors ${
                  locale === l ? "border-coral bg-coral/10 text-plum" : "border-plum/15 bg-white text-plum/80"
                }`}
              >
                {t(`common.${l}`)}
              </button>
            ))}
          </div>
        )}

        {error && <p className="mt-4 text-sm text-coral-dark">{error}</p>}
      </div>

      <div className="flex gap-3">
        {stepIndex > 0 && (
          <button
            onClick={goBack}
            className="flex-1 rounded-full border border-plum/20 py-4 font-semibold text-plum"
          >
            {t("onboarding.back")}
          </button>
        )}
        <button
          onClick={goNext}
          disabled={!canContinue() || submitting}
          className="flex-1 rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30 transition-transform active:scale-[0.98] disabled:opacity-40"
        >
          {isLast ? t("onboarding.finish") : t("onboarding.continue")}
        </button>
      </div>
    </div>
  );
}
