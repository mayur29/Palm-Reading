"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "@/i18n/LanguageProvider";
import { useProfile } from "@/lib/useProfile";
import type { Locale, Tone } from "@/lib/types";

export default function SettingsPage() {
  const { t, locale, setLocale } = useTranslations();
  const { profile, loading, refresh } = useProfile();

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [tone, setTone] = useState<Tone>("spiritual");
  const [photoConsent, setPhotoConsent] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!profile) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate editable form fields once profile loads
    setName(profile.name);
    setDay(String(profile.birthDay));
    setMonth(String(profile.birthMonth));
    setYear(profile.birthYear ? String(profile.birthYear) : "");
    setTone(profile.tone);
    setPhotoConsent(profile.photoConsent);
  }, [profile]);

  const save = async () => {
    setSaved(false);
    await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        birthDay: Number(day),
        birthMonth: Number(month),
        birthYear: year ? Number(year) : null,
        language: locale,
        tone,
        photoConsent,
      }),
    });
    refresh();
    setSaved(true);
  };

  if (loading) {
    return <p className="px-6 pt-10 text-plum/60">{t("common.loading")}</p>;
  }

  if (!profile) {
    return (
      <div className="px-6 pt-10">
        <p className="text-plum/70">{t("common.error")}</p>
        <Link href="/onboarding" className="mt-4 inline-block font-semibold text-coral-dark">
          {t("onboarding.title")}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-6 pt-10">
      <h1 className="font-display text-3xl text-plum">{t("settings.title")}</h1>

      <label className="flex flex-col gap-2 text-sm font-medium text-plum/80">
        {t("settings.name")}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
        />
      </label>

      <div className="flex flex-col gap-2 text-sm font-medium text-plum/80">
        {t("settings.birthDate")}
        <div className="flex gap-3">
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder={t("onboarding.dayLabel")}
            className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
          />
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder={t("onboarding.monthLabel")}
            className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder={t("onboarding.yearLabel")}
            className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-base text-ink outline-none focus:border-coral"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm font-medium text-plum/80">
        {t("settings.tone")}
        <div className="flex gap-3">
          {(["spiritual", "playful"] as Tone[]).map((value) => (
            <button
              key={value}
              onClick={() => setTone(value)}
              className={`flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                tone === value ? "border-coral bg-coral/10 text-plum" : "border-plum/15 bg-white text-plum/60"
              }`}
            >
              {value === "spiritual" ? t("onboarding.toneSpiritual") : t("onboarding.tonePlayful")}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm font-medium text-plum/80">
        {t("settings.language")}
        <div className="flex gap-3">
          {(["de", "en"] as Locale[]).map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                locale === l ? "border-coral bg-coral/10 text-plum" : "border-plum/15 bg-white text-plum/60"
              }`}
            >
              {t(`common.${l}`)}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-center justify-between gap-4 rounded-2xl border border-plum/15 bg-white px-4 py-4">
        <span className="text-sm text-plum/80">
          <span className="font-medium">{t("settings.photoConsent")}</span>
          <br />
          <span className="text-xs text-plum/50">{t("settings.photoConsentHint")}</span>
        </span>
        <input
          type="checkbox"
          checked={photoConsent}
          onChange={(e) => setPhotoConsent(e.target.checked)}
          className="h-5 w-5 accent-coral"
        />
      </label>

      <button
        onClick={save}
        className="rounded-full bg-coral py-4 font-semibold text-cream shadow-md shadow-coral/30 transition-transform active:scale-[0.98]"
      >
        {saved ? t("settings.saved") : t("settings.save")}
      </button>

      <Link
        href="/scan"
        className="rounded-full border border-plum/20 py-4 text-center font-semibold text-plum"
      >
        {t("settings.rescan")}
      </Link>
    </div>
  );
}
