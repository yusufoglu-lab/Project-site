import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Award, Briefcase, Download, ExternalLink, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TagPill } from "@/components/tag-pill";
import { StatCard } from "@/components/stat-card";
import { profile } from "@/data/profile";
import { education, positions, awards } from "@/data/cv";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return {
    title: t("eyebrow"),
    description: profile.bio,
  };
}

const academicLinks = [
  { href: profile.links.googleScholar, label: "Google Scholar" },
  { href: profile.links.orcid, label: "ORCID" },
  { href: profile.links.scopus, label: "Scopus" },
  { href: profile.links.webOfScience, label: "Web of Science" },
  { href: profile.links.researchGate, label: "ResearchGate" },
  { href: profile.links.linkedin, label: "LinkedIn" },
] as const;

export default async function AboutPage() {
  const t = await getTranslations("about");
  const tHome = await getTranslations("home");
  const tCv = await getTranslations("cv");

  const statLabels = [
    tHome("stats_publications"),
    tHome("stats_citations"),
    tHome("stats_hindex"),
    tHome("stats_projects"),
  ] as const;

  const interestTags = profile.researchAreas.flatMap((area) => area.tags);

  return (
    <>
      <section className="container mx-auto pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            {t("eyebrow")}
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto pb-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-16">
          <FadeIn>
            <div className="lg:sticky lg:top-24">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/10 lg:mx-0">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 280px, 280px"
                />
              </div>
              <div className="mx-auto mt-5 flex max-w-[280px] flex-col gap-2 lg:mx-0">
                <Button asChild variant="outline" className="w-full justify-center">
                  <Link href="/files/cv.pdf" target="_blank">
                    <Download className="h-4 w-4" />
                    {t("download_cv")}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-center">
                  <a
                    href={profile.links.ituAkademi}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("itu_profile")}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-[2.5rem] sm:leading-tight">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-teal-dark">
              {profile.title}
            </p>
            <p className="mt-1 text-base text-ink/60">
              {profile.department}, {profile.institution}
            </p>

            <hr className="my-8 border-ink/10" />

            <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {interestTags.map((tag) => (
                <TagPill key={tag} tone="teal">
                  {tag}
                </TagPill>
              ))}
            </div>

            <hr className="my-8 border-ink/10" />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.stats.map((s, i) => (
                <StatCard
                  key={s.label}
                  value={s.value}
                  label={statLabels[i]}
                  suffix={s.suffix}
                  compact
                  delay={i * 80}
                />
              ))}
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              {t("academic_profiles")}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {academicLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs text-ink/80 transition-colors hover:border-teal/40 hover:bg-teal/5 hover:text-teal-dark"
                >
                  {label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-white">
        <div className="container mx-auto py-20 sm:py-24">
          <SectionHeader
            eyebrow={t("education_eyebrow")}
            title={t("education_title")}
          />
          <ol className="mt-10 space-y-8 border-l border-ink/10 pl-8">
            {education.map((e, i) => (
              <FadeIn key={`${e.degree}-${e.year}`} delay={i * 80}>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[42px] top-1 grid h-9 w-9 place-items-center rounded-full border border-ink/15 bg-paper text-ink"
                  >
                    <GraduationCap className="h-4 w-4 text-teal-dark" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
                    {e.year}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-ink sm:text-2xl">
                    {t("degree_in", { degree: e.degree, field: e.field })}
                  </h3>
                  <p className="mt-1 text-sm text-ink/75">
                    {e.institution} · {e.location}
                  </p>
                  {e.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {e.detail}
                    </p>
                  )}
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-white">
        <div className="container mx-auto py-20 sm:py-24">
          <SectionHeader
            eyebrow={t("experience_eyebrow")}
            title={t("experience_title")}
          />
          <ol className="mt-10 space-y-8 border-l border-ink/10 pl-8">
            {positions.map((p, i) => (
              <FadeIn key={`${p.title}-${p.startYear}`} delay={i * 80}>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[42px] top-1 grid h-9 w-9 place-items-center rounded-full border border-ink/15 bg-paper text-ink"
                  >
                    <Briefcase className="h-4 w-4 text-teal-dark" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
                    {p.startYear}–{p.endYear ?? tCv("present")}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-ink sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/75">
                    {p.institution} · {p.location}
                  </p>
                  {p.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {p.detail}
                    </p>
                  )}
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="container mx-auto py-20 sm:py-28">
        <SectionHeader
          eyebrow={t("awards_eyebrow")}
          title={t("awards_title")}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {awards.map((a, i) => (
            <FadeIn key={`${a.title}-${a.year}`} delay={i * 60}>
              <li className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal/10 text-teal-dark"
                >
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight text-ink">
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm text-ink/70">{a.organization}</p>
                  {a.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {a.detail}
                    </p>
                  )}
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/55">
                    {a.year}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </>
  );
}
