"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_KEY = "preferred-locale";

const labels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    localStorage.setItem(LOCALE_KEY, next);
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-ink/10 bg-white p-0.5 text-xs font-medium",
        className
      )}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "min-w-[2.25rem] rounded-full px-2.5 py-1.5 transition-colors",
            locale === l
              ? "bg-ink text-paper shadow-sm"
              : "text-ink/60 hover:text-ink"
          )}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
