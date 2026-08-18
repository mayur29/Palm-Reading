import type { LocalizedText, PalmReading, ReadingSections } from "./types";

const DAILY_SECTION_KEYS: (keyof ReadingSections)[] = [
  "personality",
  "heart",
  "mind",
  "career",
  "vitality",
  "numbers",
];

const INTRO: LocalizedText = {
  de: {
    spiritual: "Ein Gedanke für heute, aus deiner Hand gelesen:",
    playful: "Deine tägliche Prise Hand-Magie:",
  },
  en: {
    spiritual: "A thought for today, read from your hand:",
    playful: "Your daily pinch of palm magic:",
  },
};

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function pickDailySectionKey(profileId: string, date: string): keyof ReadingSections {
  const hash = hashString(`${profileId}:${date}`);
  return DAILY_SECTION_KEYS[hash % DAILY_SECTION_KEYS.length];
}

export function buildDailyInsightContent(reading: PalmReading, profileId: string, date: string): LocalizedText {
  const key = pickDailySectionKey(profileId, date);
  const section = reading.sections[key];

  return {
    de: {
      spiritual: `${INTRO.de.spiritual} ${section.de.spiritual}`,
      playful: `${INTRO.de.playful} ${section.de.playful}`,
    },
    en: {
      spiritual: `${INTRO.en.spiritual} ${section.en.spiritual}`,
      playful: `${INTRO.en.playful} ${section.en.playful}`,
    },
  };
}

export function todayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}
