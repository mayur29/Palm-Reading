import de from "@/messages/de.json";
import en from "@/messages/en.json";

export type Locale = "de" | "en";

export const messages = { de, en } as const;

export const defaultLocale: Locale = "de";
