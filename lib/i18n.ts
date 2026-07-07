import { en } from "@/lib/dictionaries/en";
import { it } from "@/lib/dictionaries/it";

export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const dictionaries = { it, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary } from "@/lib/dictionaries/it";
