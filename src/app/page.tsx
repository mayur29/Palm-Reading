"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/messages";
import { useProfile } from "@/lib/useProfile";

export default function WelcomePage() {
  const { t, locale, setLocale } = useTranslations();
  const { profile, loading } = useProfile();
  const ctaHref = !loading && profile ? "/today" : "/onboarding";

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6 py-12 text-center">
      <div className="flex w-full justify-end gap-2">
        {(["de", "en"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
              locale === l ? "bg-plum text-cream" : "bg-plum/10 text-plum"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <Image src="/icon.svg" alt="Palmora" width={96} height={96} className="rounded-3xl shadow-lg" priority />
        <h1 className="font-display text-4xl italic text-plum">Palmora</h1>
        <p className="max-w-xs text-plum/70">{t("welcome.tagline")}</p>
      </div>

      <Link
        href={ctaHref}
        className="w-full rounded-full bg-coral py-4 text-lg font-semibold text-cream shadow-md shadow-coral/30 transition-transform active:scale-[0.98]"
      >
        {t("welcome.cta")}
      </Link>
    </div>
  );
}
