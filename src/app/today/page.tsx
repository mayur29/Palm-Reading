"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "@/i18n/LanguageProvider";
import { useProfile } from "@/lib/useProfile";
import type { DailyInsight, Tone } from "@/lib/types";

export default function TodayPage() {
  const { t, locale } = useTranslations();
  const { profile, loading: profileLoading } = useProfile();
  const [insight, setInsight] = useState<DailyInsight | null>(null);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/today")
      .then((res) => res.json())
      .then((data) => {
        setInsight(data.insight);
        setStreak(data.streak);
      })
      .finally(() => setLoading(false));
  }, []);

  const tone: Tone = profile?.tone ?? "spiritual";

  if (loading || profileLoading) {
    return <p className="px-6 pt-10 text-plum/60">{t("common.loading")}</p>;
  }

  if (!insight || !profile) {
    return (
      <div className="flex flex-col items-center gap-4 px-6 pt-16 text-center">
        <h1 className="font-display text-3xl text-plum">{t("today.title")}</h1>
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
        <h1 className="font-display text-3xl text-plum">{t("today.title")}</h1>
        {streak > 0 && (
          <div className="flex items-center gap-1.5 rounded-full bg-marigold/20 px-3 py-1.5 text-sm font-semibold text-marigold-dark">
            🔥 {streak} {streak === 1 ? t("today.streakOne") : t("today.streak")}
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-base leading-relaxed text-plum/90">{insight.content[locale][tone]}</p>
      </div>

      <p className="text-center text-sm text-plum/50">{t("today.comeBack")}</p>
    </div>
  );
}
