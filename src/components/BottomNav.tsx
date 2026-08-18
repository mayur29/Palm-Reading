"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, BookHeart, ScanLine, Settings } from "lucide-react";
import { useTranslations } from "@/i18n/LanguageProvider";

const tabs = [
  { href: "/today", key: "nav.today", icon: Sparkles },
  { href: "/reading", key: "nav.reading", icon: BookHeart },
  { href: "/scan", key: "nav.scan", icon: ScanLine },
  { href: "/settings", key: "nav.settings", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslations();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-marigold-dark/15 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[480px] items-stretch justify-between px-2">
        {tabs.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors ${
                active ? "text-coral-dark" : "text-plum/50"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.4 : 2} />
              <span>{t(key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
