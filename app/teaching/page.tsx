import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { FadeIn } from "@/components/fade-in";
import {
  currentCourses,
  pastCourses,
  teachingPhilosophy,
} from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Current and past courses, plus the teaching philosophy that shapes them.",
};

export default function TeachingPage() {
  return (
    <>
      <section className="container mx-auto pb-12 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            Teaching
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Courses, mentorship, and a teaching philosophy.
          </h1>
        </FadeIn>
      </section>

      {/* CURRENT COURSES */}
      <section className="container mx-auto pb-16">
        <SectionHeader eyebrow="In session" title="Current courses" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {currentCourses.map((c, i) => (
            <FadeIn key={c.code} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 transition-colors hover:border-teal/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-teal-dark">
                    {c.code}
                  </span>
                  <Badge variant="secondary">{c.level}</Badge>
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight text-ink">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-ink/55">
                  {c.semester} · {c.credits} credits
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {c.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-ink/55">
                  <BookOpen className="h-3.5 w-3.5" />
                  Syllabus available on request
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PAST COURSES */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container mx-auto py-16 sm:py-20">
          <SectionHeader eyebrow="Archive" title="Past courses" />
          <ul className="mt-10 divide-y divide-ink/8">
            {pastCourses.map((c) => (
              <li
                key={`${c.code}-${c.semester}`}
                className="grid gap-2 py-4 sm:grid-cols-[120px_1fr_180px] sm:items-baseline"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink/55">
                  {c.code}
                </span>
                <div>
                  <p className="font-serif text-base text-ink">{c.name}</p>
                  <p className="text-sm text-ink/65">{c.description}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.14em] text-ink/55">
                  {c.semester}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container mx-auto py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeader eyebrow="In principle" title="Teaching philosophy" />
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
            {teachingPhilosophy}
          </p>
        </div>
      </section>
    </>
  );
}
