import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TagPill } from "@/components/tag-pill";
import { profile } from "@/data/profile";
import { education, positions, awards } from "@/data/cv";
import { translateResearchArea } from "@/lib/i18n-labels";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return {
    title: t("eyebrow"),
    description: t("bio"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const tResearch = await getTranslations("research");
  const tCv = await getTranslations("cv");

  return (
    <>
      <section className="container mx-auto pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
        </FadeIn>
      </section>

      <section className="container mx-auto grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
        <FadeIn>
          <div className="sticky top-24">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 shadow-lg">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="mt-6 space-y-2 text-sm text-ink/70">
              <p className="font-serif text-lg text-ink">{profile.name}</p>
              <p>{profile.title}</p>
              <p>{profile.department}</p>
              <p>{profile.institution}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="space-y-6 text-base leading-relaxed text-ink/80 sm:text-lg">
            {t("bio")
              .split(/\n\n+/)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              {t("interests")}
            </h2>
            <div className="mt-6 space-y-6">
              {profile.researchAreas.map((area) => (
                <div key={area.name}>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                    {translateResearchArea(area.name, (key) =>
                      tResearch(key)
                    )}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <TagPill key={tag} tone="teal">
                        {tag}
                      </TagPill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
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
