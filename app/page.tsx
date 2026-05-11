import Link from "next/link";
import { ArrowUpRight, Download, FlaskConical, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { StatCard } from "@/components/stat-card";
import { NewsCard } from "@/components/news-card";
import { SectionHeader } from "@/components/section-header";
import { profile } from "@/data/profile";
import { news } from "@/data/news";
import { researchProjects } from "@/data/research";
import { publications } from "@/data/publications";

export default function HomePage() {
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const featured = publications.filter((p) => p.highlight).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-teal/8 blur-3xl"
          aria-hidden
        />
        <div className="container relative mx-auto grid gap-14 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20 lg:pb-32 lg:pt-28">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink/70">
              <Sparkles className="h-3.5 w-3.5 text-teal-dark" />
              Functional Foods Lab — Istanbul
            </p>
            <h1 className="mt-6 font-serif text-5xl text-ink hero-heading sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70 sm:text-xl">
              {profile.title}. {profile.department},{" "}
              <span className="text-ink">{profile.institution}</span>.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {profile.mission}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/research">
                  View research
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cv">
                  <Download className="h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:justify-self-end">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-ink/10 via-paper to-teal/15 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <span className="block font-serif text-[7rem] leading-none text-ink/15">
                    BY
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-ink/45">
                    Portrait placeholder
                  </span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-ink/10 bg-white/85 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-ink/55">
                  Currently
                </p>
                <p className="mt-1 font-serif text-base text-ink">
                  Recruiting two PhD students · Fall 2025
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-ink/8 bg-white">
        <div className="container mx-auto grid gap-5 py-14 sm:grid-cols-3 sm:py-20">
          {profile.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <StatCard
                value={s.value}
                label={s.label}
                suffix={s.suffix}
                delay={i * 120}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="container mx-auto py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Featured projects"
            title="Current research"
            description="From bench-scale chemistry to clinical trials — exploring how food matrix design shapes metabolic health."
          />
          <Button asChild variant="ghost">
            <Link href="/research">
              All research
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {researchProjects.slice(0, 2).map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <Link
                href={`/research/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_18px_50px_-18px_rgba(13,148,136,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/8 px-3 py-1 text-xs font-medium text-teal-dark">
                    <FlaskConical className="h-3 w-3" />
                    {p.area}
                  </span>
                  <span className="text-xs text-ink/45">
                    {p.startYear}
                    {p.endYear ? `–${p.endYear}` : "–present"}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-teal-dark sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">
                  {p.shortDescription}
                </p>
                <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-teal-dark">
                  Explore project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SELECTED PUBLICATIONS */}
      <section className="border-t border-ink/8 bg-white">
        <div className="container mx-auto py-20 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Recent writing"
              title="Selected publications"
              description="A small selection of recent peer-reviewed work. The full list is available on the publications page."
            />
            <Button asChild variant="ghost">
              <Link href="/publications">
                All publications
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 divide-y divide-ink/8">
            {featured.map((p) => (
              <article key={p.title} className="py-6">
                <div className="flex items-center gap-3 text-xs text-ink/55">
                  <span className="rounded-full border border-teal/25 bg-teal/10 px-2.5 py-0.5 text-teal-dark">
                    {p.type}
                  </span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl leading-snug text-ink sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">
                  {p.authors.join(", ")} · <em>{p.venue}</em>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT NEWS */}
      <section className="container mx-auto py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Latest updates"
            title="News from the lab"
          />
          <Button asChild variant="ghost">
            <Link href="/news">
              All news
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
