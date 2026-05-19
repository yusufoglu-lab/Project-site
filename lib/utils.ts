import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DATE_LOCALE_MAP: Record<string, string> = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
};

export function formatDate(iso: string, locale = "en") {
  const d = new Date(iso);
  const dateLocale = DATE_LOCALE_MAP[locale] ?? "en-US";
  return d.toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatAuthors(authors: string[], highlight = "Yusufoğlu") {
  return authors
    .map((a) => (a.includes(highlight) ? `__${a}__` : a))
    .join(", ");
}
