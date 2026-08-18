"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";
import { useTranslations } from "@/i18n/LanguageProvider";
import { useProfile } from "@/lib/useProfile";
import type { PalmReading, Tone } from "@/lib/types";

const SECTION_ORDER: (keyof PalmReading["sections"])[] = [
  "personality",
  "heart",
  "mind",
  "career",
  "vitality",
  "numbers",
  "note",
];

export default function ReadingPage() {
  const { t, locale } = useTranslations();
  const { profile, loading: profileLoading } = useProfile();
  const [reading, setReading] = useState<PalmReading | null>(null);
  const [loading, setLoading] = useState(true);
  const [tone, setTone] = useState<Tone>("spiritual");
  const [exporting, setExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/reading")
      .then((res) => res.json())
      .then((data) => setReading(data.reading))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initialize tone toggle from the async-loaded profile once
    if (profile) setTone(profile.tone);
  }, [profile]);

  const shareImage = async () => {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = "palmora-reading.png";
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  };

  if (loading || profileLoading) {
    return <p className="px-6 pt-10 text-plum/60">{t("common.loading")}</p>;
  }

  if (!reading || !profile) {
    return (
      <div className="flex flex-col items-center gap-4 px-6 pt-16 text-center">
        <p className="text-plum/70">{t("common.error")}</p>
        <Link href="/scan" className="font-semibold text-coral-dark">
          {t("scan.title")}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-6 pt-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl text-plum">{t("reading.title")}</h1>
        <div className="flex overflow-hidden rounded-full border border-plum/15">
          {(["spiritual", "playful"] as Tone[]).map((value) => (
            <button
              key={value}
              onClick={() => setTone(value)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                tone === value ? "bg-plum text-cream" : "text-plum/60"
              }`}
            >
              {value === "spiritual" ? t("onboarding.toneSpiritual") : t("onboarding.tonePlayful")}
            </button>
          ))}
        </div>
      </div>

      <div ref={cardRef} className="flex flex-col gap-5 rounded-3xl bg-white p-5">
        {SECTION_ORDER.map((key) => (
          <section key={key} className="flex flex-col gap-1.5">
            <h2 className="font-display text-lg text-coral-dark">
              {t(`reading.sections.${key}`)}
            </h2>
            <p className="text-sm leading-relaxed text-plum/85">{reading.sections[key][locale][tone]}</p>
          </section>
        ))}
      </div>

      <button
        onClick={shareImage}
        disabled={exporting}
        className="rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30 transition-transform active:scale-[0.98] disabled:opacity-50"
      >
        {t("reading.share")}
      </button>

      <Link
        href="/scan"
        className="rounded-full border border-plum/20 py-4 text-center font-semibold text-plum"
      >
        {t("reading.rescan")}
      </Link>
    </div>
  );
}
