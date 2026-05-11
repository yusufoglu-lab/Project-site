import type { Metadata } from "next";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import { TagPill } from "@/components/tag-pill";
import { profile } from "@/data/profile";
import { education, awards } from "@/data/cv";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortBio,
};

export default function AboutPage() {
  return (
    <>
      <section className="container mx-auto pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            About
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Food chemistry in service of public health.
          </h1>
        </FadeIn>
      </section>

      <section className="container mx-auto grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
        <FadeIn>
          <div className="sticky top-24">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-ink/10 via-paper to-teal/15">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif text-[8rem] leading-none text-ink/15">
                  BY
                </span>
              </div>
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
            {profile.bio.split(/\n\n+/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Research interests
            </h2>
            <div className="mt-6 space-y-6">
              {profile.researchAreas.map((area) => (
                <div key={area.name}>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                    {area.name}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {area.tags.map((t) => (
                      <TagPill key={t} tone="teal">
                        {t}
                      </TagPill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="border-t border-ink/8 bg-white">
        <div className="container mx-auto py-20 sm:py-24">
          <SectionHeader eyebrow="Training" title="Education" />
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
                    {e.degree} in {e.field}
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

      {/* AWARDS */}
      <section className="container mx-auto py-20 sm:py-28">
        <SectionHeader eyebrow="Recognition" title="Awards & honors" />
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
