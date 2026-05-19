"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LOCALE_KEY = "preferred-locale";

export function LocalePreference() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (
      stored &&
      routing.locales.includes(stored) &&
      stored !== locale
    ) {
      document.cookie = `NEXT_LOCALE=${stored};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
      router.replace(pathname, { locale: stored });
    } else {
      localStorage.setItem(LOCALE_KEY, locale);
      document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    }
  }, [locale, pathname, router]);

  return null;
}
