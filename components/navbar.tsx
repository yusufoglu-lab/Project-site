"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { LanguageSwitcher } from "@/components/language-switcher";

const linkKeys = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/research", key: "research" },
  { href: "/publications", key: "publications" },
  { href: "/team", key: "team" },
  { href: "/teaching", key: "teaching" },
  { href: "/news", key: "news" },
  { href: "/cv", key: "cv" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-ink/8 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      )}
    >
      <nav
        aria-label="Primary"
        className="container mx-auto flex h-16 items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${profile.shortName} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper">
            <span className="font-serif text-base leading-none">BY</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base text-ink">
              {profile.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink/55">
              {tMeta("labName")}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {linkKeys.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-2.5 py-2 text-sm transition-colors",
                    active ? "text-ink" : "text-ink/60 hover:text-ink"
                  )}
                >
                  {t(l.key)}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-teal"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink/8 bg-paper lg:hidden"
        >
          <div className="container mx-auto flex flex-col gap-3 py-3">
            <LanguageSwitcher />
            <ul>
              {linkKeys.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base",
                        active
                          ? "bg-ink/5 text-ink"
                          : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                      )}
                    >
                      {t(l.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
