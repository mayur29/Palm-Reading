import type { LocalizedText } from "@/lib/types";

export function joinLocalizedText(...parts: LocalizedText[]): LocalizedText {
  return {
    de: {
      spiritual: parts.map((p) => p.de.spiritual).join(" "),
      playful: parts.map((p) => p.de.playful).join(" "),
    },
    en: {
      spiritual: parts.map((p) => p.en.spiritual).join(" "),
      playful: parts.map((p) => p.en.playful).join(" "),
    },
  };
}

export function mapLocalizedText(text: LocalizedText, fn: (value: string) => string): LocalizedText {
  return {
    de: { spiritual: fn(text.de.spiritual), playful: fn(text.de.playful) },
    en: { spiritual: fn(text.en.spiritual), playful: fn(text.en.playful) },
  };
}
