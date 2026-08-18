export type Locale = "de" | "en";
export type Tone = "spiritual" | "playful";

export type Profile = {
  id: string;
  name: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number | null;
  language: Locale;
  tone: Tone;
  photoConsent: boolean;
  createdAt: string;
};

export type LineReading = {
  length?: string;
  depth?: string;
  curvature?: string;
  breaks?: boolean;
  present?: boolean;
  notes?: string;
};

export type MountLevel = "prominent" | "average" | "flat";

export type HandShape = "earth" | "air" | "fire" | "water" | "unclear";

export type PalmAnalysis = {
  handedness: "left" | "right" | "unclear";
  confidence: number;
  lifeLine: LineReading;
  headLine: LineReading;
  heartLine: LineReading;
  fateLine: LineReading;
  mounts: Record<
    "jupiter" | "saturn" | "apollo" | "mercury" | "venus" | "moon" | "mars",
    MountLevel
  >;
  handShape: HandShape;
  notableSigns: string[];
  source: "vision" | "quiz";
};

export type LocalizedText = Record<Locale, Record<Tone, string>>;

export type ReadingSections = {
  personality: LocalizedText;
  heart: LocalizedText;
  mind: LocalizedText;
  career: LocalizedText;
  vitality: LocalizedText;
  numbers: LocalizedText;
  note: LocalizedText;
};

export type PalmReading = {
  id: string;
  profileId: string;
  createdAt: string;
  photoStored: boolean;
  analysis: PalmAnalysis;
  sections: ReadingSections;
  lifePathNumber: number;
  lifePathIsPersonalStyle: boolean;
};

export type DailyInsight = {
  id: string;
  profileId: string;
  date: string;
  content: LocalizedText;
};

export type Database = {
  profiles: Profile[];
  palmReadings: PalmReading[];
  dailyInsights: DailyInsight[];
};
