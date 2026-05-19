import {
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  BookOpen,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { profile } from "@/data/profile";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");

  const footerNav = [
    {
      title: t("research"),
      links: [
        { href: "/research" as const, label: t("projects") },
        { href: "/publications" as const, label: tNav("publications") },
        { href: "/team" as const, label: tNav("team") },
      ],
    },
    {
      title: t("about"),
      links: [
        { href: "/about" as const, label: tNav("about") },
        { href: "/cv" as const, label: tNav("cv") },
        { href: "/teaching" as const, label: tNav("teaching") },
      ],
    },
    {
      title: t("connect"),
      links: [
        { href: "/news" as const, label: tNav("news") },
        { href: "/contact" as const, label: tNav("contact") },
        { href: `mailto:${profile.email}`, label: t("email"), external: false },
      ],
    },
  ];

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                <span className="font-serif text-base leading-none">BY</span>
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg text-ink">
                  {profile.shortName}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/55">
                  {profile.title}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65">
              {profile.shortBio}
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2">
              <SocialLink href={profile.scholar} label={tCommon("google_scholar")}>
                <GraduationCap className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.orcid} label={tCommon("orcid")}>
                <BookOpen className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.twitter} label="İTÜ Research">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.github} label="İTÜ Akademi">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label={t("email")}>
                <Mail className="h-4 w-4" />
              </SocialLink>
            </ul>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    {l.href.startsWith("mailto") ? (
                      <a
                        href={l.href}
                        className="text-sm text-ink/75 hover:text-teal-dark"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-ink/75 hover:text-teal-dark"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t("rights")}
          </p>
          <p>{t("built_with")}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={label}
        className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:border-teal/40 hover:bg-teal/5 hover:text-teal-dark"
      >
        {children}
      </a>
    </li>
  );
}
