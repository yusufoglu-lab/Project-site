import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FadeIn } from "@/components/fade-in";

import { StatCard } from "@/components/stat-card";

import { NewsCard } from "@/components/news-card";

import { SectionHeader } from "@/components/section-header";

import { profile } from "@/data/profile";

import { news } from "@/data/news";

import { researchProjects } from "@/data/research";

import { publications } from "@/data/publications";

import {

  translatePublicationType,

  translateResearchArea,

} from "@/lib/i18n-labels";



export default async function HomePage() {

  const t = await getTranslations("home");

  const tResearch = await getTranslations("research");

  const tPublications = await getTranslations("publications");



  const latestNews = [...news]

    .sort((a, b) => b.date.localeCompare(a.date))

    .slice(0, 3);

  const featured = publications.filter((p) => p.highlight).slice(0, 2);



  const statLabels = [

    t("stats_publications"),

    t("stats_citations"),

    t("stats_hindex"),

    t("stats_projects"),

  ] as const;



  return (

    <>

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

        <div

          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-teal/8 blur-3xl"

          aria-hidden

        />

        <div className="container relative mx-auto px-4 py-16 text-center sm:py-20 lg:py-28">
          <FadeIn>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
              {t("lab_name")}
            </h1>
            <p className="mt-4 text-[1.1rem] tracking-[0.12em] text-teal-dark">
              {t("lab_tagline")}
            </p>
            <p className="mx-auto mt-6 max-w-[650px] text-base leading-relaxed text-ink/65 sm:text-lg">
              {t("lab_description")}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/research">{t("cta_explore")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/team">{t("cta_team")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

      </section>



      <section className="relative border-y border-ink/8 bg-white">

        <div className="container mx-auto grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:py-20">

          {profile.stats.map((s, i) => (

            <FadeIn key={s.label} delay={i * 100}>

              <StatCard

                value={s.value}

                label={statLabels[i]}

                suffix={s.suffix}

                delay={i * 120}

              />

            </FadeIn>

          ))}

        </div>

        <div className="container mx-auto flex justify-center px-4 pb-12 pt-2 sm:pb-16">
          <Button asChild variant="outline" size="sm">
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="h-4 w-4" />
              {t("google_scholar_profile")}
            </a>
          </Button>
        </div>

      </section>



      <section className="container mx-auto py-20 sm:py-28">

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">

          <SectionHeader

            eyebrow={t("featured_label")}

            title={t("featured_title")}

            description={t("featured_subtitle")}

          />

          <Button asChild variant="ghost">

            <Link href="/research">

              {t("featured_all")}

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

                    {translateResearchArea(p.area, (key) => tResearch(key))}

                  </span>

                  <span className="text-xs text-ink/45">

                    {p.startYear}

                    {p.endYear ? `–${p.endYear}` : `–${t("present")}`}

                  </span>

                </div>

                <h3 className="mt-6 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-teal-dark sm:text-3xl">

                  {p.title}

                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:text-base">

                  {p.shortDescription}

                </p>

                <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-teal-dark">

                  {t("explore_project")}

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                </span>

              </Link>

            </FadeIn>

          ))}

        </div>

      </section>



      <section className="border-t border-ink/8 bg-white">

        <div className="container mx-auto py-20 sm:py-28">

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">

            <SectionHeader

              eyebrow={t("publications_label")}

              title={t("publications_title")}

              description={t("publications_subtitle")}

            />

            <Button asChild variant="ghost">

              <Link href="/publications">

                {t("publications_all")}

                <ArrowUpRight className="h-4 w-4" />

              </Link>

            </Button>

          </div>



          <div className="mt-10 divide-y divide-ink/8">

            {featured.map((p) => (

              <article key={p.title} className="py-6">

                <div className="flex items-center gap-3 text-xs text-ink/55">

                  <span className="rounded-full border border-teal/25 bg-teal/10 px-2.5 py-0.5 text-teal-dark">

                    {translatePublicationType(p.type, (key) =>

                      tPublications(key)

                    )}

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



      <section className="container mx-auto py-20 sm:py-28">

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">

          <SectionHeader

            eyebrow={t("news_label")}

            title={t("news_title")}

          />

          <Button asChild variant="ghost">

            <Link href="/news">

              {t("news_all")}

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


