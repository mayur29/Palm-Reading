import type { LocalizedText } from "./types";

function digitSum(n: number): number {
  return String(n)
    .split("")
    .reduce((sum, d) => sum + Number(d), 0);
}

function reduce(n: number): number {
  let value = n;
  while (value > 9 && value !== 11 && value !== 22) {
    value = digitSum(value);
  }
  return value;
}

export type LifePathResult = {
  number: number;
  isPersonalStyleNumber: boolean;
};

export function calculateLifePath(day: number, month: number, year: number | null): LifePathResult {
  if (year === null) {
    return { number: reduce(day + month), isPersonalStyleNumber: true };
  }
  return { number: reduce(day + month + year), isPersonalStyleNumber: false };
}

export const NUMBER_MEANINGS: Record<number, LocalizedText> = {
  1: {
    de: {
      spiritual: "Die Eins trägt die Kraft des Anfangs — eine Seele, die den Weg selbst bahnt, geführt von innerer Klarheit.",
      playful: "Nummer 1: die geborene Anführerin. Du gehst einfach los, und der Rest folgt (meistens jedenfalls).",
    },
    en: {
      spiritual: "The One carries the power of beginnings — a soul who forges the path itself, guided by inner clarity.",
      playful: "Number 1: the born leader. You just start walking, and the rest tends to follow (mostly, anyway).",
    },
  },
  2: {
    de: {
      spiritual: "Die Zwei ist die Zahl der Verbindung — sanft, intuitiv, ein Brückenbauer zwischen Herzen.",
      playful: "Nummer 2: die geheime Diplomatin. Du spürst Stimmungen, bevor sie überhaupt jemand ausspricht.",
    },
    en: {
      spiritual: "The Two is the number of connection — gentle, intuitive, a bridge-builder between hearts.",
      playful: "Number 2: the secret diplomat. You sense the mood in a room before anyone says a word.",
    },
  },
  3: {
    de: {
      spiritual: "Die Drei trägt kreative Lebensfreude — Ausdruck, Farbe und die Gabe, Freude zu teilen.",
      playful: "Nummer 3: das Leben der Party, sogar wenn du gar nicht wolltest, dass es eine Party wird.",
    },
    en: {
      spiritual: "The Three carries creative joy — expression, color, and the gift of sharing delight.",
      playful: "Number 3: the life of the party, even when you didn't mean to start one.",
    },
  },
  4: {
    de: {
      spiritual: "Die Vier ist die Zahl des festen Fundaments — Beständigkeit, Struktur, ein Zuhause, das man bauen kann.",
      playful: "Nummer 4: die zuverlässige Freundin, die tatsächlich eine Tabelle für den Urlaub macht. Wir lieben das.",
    },
    en: {
      spiritual: "The Four is the number of steady foundations — consistency, structure, a home you can build on.",
      playful: "Number 4: the reliable friend who genuinely makes a spreadsheet for the trip. We love that for you.",
    },
  },
  5: {
    de: {
      spiritual: "Die Fünf sucht Freiheit und Wandel — eine Wanderseele, neugierig auf jede offene Tür.",
      playful: "Nummer 5: dein Kalender hat ein Eigenleben und du liebst es genau so.",
    },
    en: {
      spiritual: "The Five seeks freedom and change — a wandering soul, curious about every open door.",
      playful: "Number 5: your calendar has a mind of its own and you like it exactly that way.",
    },
  },
  6: {
    de: {
      spiritual: "Die Sechs trägt fürsorgliche Wärme — sie hält Familie und Freunde wie ein sanftes Zentrum zusammen.",
      playful: "Nummer 6: die Freundin, die sich erinnert, wie du deinen Kaffee magst. Ein wahrer Schatz.",
    },
    en: {
      spiritual: "The Six carries nurturing warmth — holding family and friends together like a gentle center.",
      playful: "Number 6: the friend who remembers how you take your coffee. An absolute treasure.",
    },
  },
  7: {
    de: {
      spiritual: "Die Sieben ist die Zahl der inneren Suche — nachdenklich, weise, immer einen Schritt tiefer als der Rest.",
      playful: "Nummer 7: du denkst über die Dinge nach, während andere noch nach ihrem Handy suchen.",
    },
    en: {
      spiritual: "The Seven is the number of inner searching — thoughtful, wise, always one layer deeper than the rest.",
      playful: "Number 7: you're already three thoughts deep while everyone else is still finding their phone.",
    },
  },
  8: {
    de: {
      spiritual: "Die Acht trägt die Kraft des Aufbaus — Ehrgeiz, Ausdauer und ein Gespür für das große Ganze.",
      playful: "Nummer 8: du denkst in Fünfjahresplänen, während andere noch das Wochenende planen.",
    },
    en: {
      spiritual: "The Eight carries the power of building — ambition, endurance, and a feel for the bigger picture.",
      playful: "Number 8: you're thinking five-year plans while everyone else is still planning the weekend.",
    },
  },
  9: {
    de: {
      spiritual: "Die Neun ist die Zahl des Mitgefühls — eine alte Seele, die für mehr als sich selbst fühlt.",
      playful: "Nummer 9: du weinst bei Werbespots und tröstest Fremde. Ehrlich ikonisch.",
    },
    en: {
      spiritual: "The Nine is the number of compassion — an old soul who feels for more than just herself.",
      playful: "Number 9: you cry at commercials and comfort strangers. Honestly iconic behavior.",
    },
  },
  11: {
    de: {
      spiritual: "Die Meisterzahl Elf trägt intuitive Einsicht — ein feines Gespür für das, was andere nicht sehen.",
      playful: "Meisterzahl 11: du hast quasi einen sechsten Sinn. Nutze ihn mit Bedacht (und für gutes Gossip-Timing).",
    },
    en: {
      spiritual: "The master number Eleven carries intuitive insight — a fine sense for what others cannot see.",
      playful: "Master number 11: you basically have a sixth sense. Use it wisely (and for excellent gossip timing).",
    },
  },
  22: {
    de: {
      spiritual: "Die Meisterzahl Zweiundzwanzig ist die Baumeisterin — große Visionen, in die Realität geformt.",
      playful: "Meisterzahl 22: du träumst groß und baust es tatsächlich. Respekt.",
    },
    en: {
      spiritual: "The master number Twenty-Two is the master builder — grand visions, shaped into reality.",
      playful: "Master number 22: you dream big and actually build the thing. Respect.",
    },
  },
};

export function personalStyleNote(): LocalizedText {
  return {
    de: {
      spiritual: "Da wir dein Geburtsjahr nicht kennen, lesen wir stattdessen deine persönliche Stil-Zahl aus Tag und Monat — ein Echo deines Wesens, kein vollständiges Urteil.",
      playful: "Wir kennen dein Jahr nicht, also haben wir aus Tag + Monat deine 'Stil-Zahl' gezaubert. Trotzdem ziemlich treffend, oder?",
    },
    en: {
      spiritual: "Since we don't know your birth year, we've read your personal style number from day and month instead — an echo of your nature, not a complete verdict.",
      playful: "We don't know your year, so we conjured your 'style number' from day + month instead. Still pretty spot on, right?",
    },
  };
}
