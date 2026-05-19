import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import { notFound } from "next/navigation";

import { getTranslations } from "next-intl/server";

import { ArrowLeft, ExternalLink, FlaskConical } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { SectionHeader } from "@/components/section-header";

import { researchProjects } from "@/data/research";

import { publications } from "@/data/publications";

import { teamMembers, pi } from "@/data/team";

import {

  translateResearchArea,

  translateResearchStatus,

} from "@/lib/i18n-labels";



interface PageProps {

  params: { slug: string };

}



export function generateStaticParams() {

  return researchProjects.map((p) => ({ slug: p.slug }));

}



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const project = researchProjects.find((p) => p.slug === params.slug);

  const t = await getTranslations("research");

  if (!project) return { title: t("not_found") };

  return {

    title: project.title,

    description: project.shortDescription,

  };

}



export default async function ResearchDetailPage({ params }: PageProps) {

  const t = await getTranslations("research");
  const tCommon = await getTranslations("common");

  const project = researchProjects.find((p) => p.slug === params.slug);

  if (!project) notFound();



  const related = publications.filter(

    (pub) => pub.doi && project.relatedPublicationDois.includes(pub.doi)

  );

  const members = [pi, ...teamMembers].filter((m) =>

    project.team.includes(m.name)

  );



  return (

    <>

      <section className="container mx-auto pt-12">

        <Button asChild variant="ghost" size="sm">

          <Link href="/research">

            <ArrowLeft className="h-4 w-4" />

            {t("back")}

          </Link>

        </Button>

      </section>



      <section className="container mx-auto pb-12 pt-6 sm:pt-10">

        <div className="flex flex-wrap items-center gap-3">

          <Badge variant="teal">

            <FlaskConical className="mr-1 h-3 w-3" />

            {translateResearchArea(project.area, (key) => t(key))}

          </Badge>

          <Badge variant="secondary">

            {translateResearchStatus(project.status, (key) => t(key))}

          </Badge>

          <span className="text-xs text-ink/55">

            {project.startYear}

            {project.endYear ? ` – ${project.endYear}` : ` – ${t("present")}`}

          </span>

        </div>

        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">

          {project.title}

        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">

          {project.shortDescription}

        </p>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs text-ink/70">

          <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />

          {t("funding_label")}: {project.funding}

        </p>

      </section>



      <section className="container mx-auto grid gap-12 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16">

        <div className="space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">

          {project.description.split(/\n\n+/).map((p, i) => (

            <p key={i}>{p}</p>

          ))}

        </div>



        <aside className="space-y-8">

          <div className="rounded-2xl border border-ink/10 bg-white p-6">

            <h3 className="font-serif text-lg text-ink">{t("methods_title")}</h3>

            <ul className="mt-4 space-y-2 text-sm text-ink/75">

              {project.methods.map((m) => (

                <li key={m} className="flex gap-2">

                  <span

                    aria-hidden

                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-teal"

                  />

                  {m}

                </li>

              ))}

            </ul>

          </div>

        </aside>

      </section>



      <section className="border-y border-ink/8 bg-white">

        <div className="container mx-auto py-16 sm:py-20">

          <SectionHeader

            eyebrow={t("questions_eyebrow")}

            title={t("questions")}

          />

          <ol className="mt-10 grid gap-4 md:grid-cols-3">

            {project.questions.map((q, i) => (

              <li

                key={q}

                className="flex gap-4 rounded-2xl border border-ink/10 bg-paper p-6"

              >

                <span className="font-mono text-2xl font-medium text-teal-dark">

                  {String(i + 1).padStart(2, "0")}

                </span>

                <p className="text-sm leading-relaxed text-ink/80">{q}</p>

              </li>

            ))}

          </ol>

        </div>

      </section>



      {members.length > 0 && (

        <section className="container mx-auto py-16 sm:py-20">

          <SectionHeader eyebrow={t("team_eyebrow")} title={t("team_title")} />

          <ul className="mt-8 flex flex-wrap gap-3">

            {members.map((m) => (

              <li

                key={m.name}

                className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm text-ink/80"

              >

                {m.name} · <span className="text-ink/55">{m.role}</span>

              </li>

            ))}

          </ul>

        </section>

      )}



      <section className="border-t border-ink/8 bg-white">

        <div className="container mx-auto py-16 sm:py-20">

          <SectionHeader

            eyebrow={t("outputs_eyebrow")}

            title={t("outputs_title")}

          />

          {related.length === 0 ? (

            <p className="mt-8 text-sm text-ink/55">{t("no_publications")}</p>

          ) : (

            <div className="mt-8 divide-y divide-ink/8">

              {related.map((pub) => (

                <article key={pub.title} className="py-5">

                  <p className="text-xs text-ink/55">

                    <em>{pub.venue}</em> · {pub.year}

                  </p>

                  <h3 className="mt-1 font-serif text-lg text-ink sm:text-xl">

                    {pub.title}

                  </h3>

                  <p className="mt-1 text-sm text-ink/65">

                    {pub.authors.join(", ")}

                  </p>

                  {pub.doi && (

                    <Link

                      href={`https://doi.org/${pub.doi}`}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="mt-2 inline-flex items-center gap-1 text-xs text-teal-dark hover:underline"

                    >

                      {tCommon("doi")} <ExternalLink className="h-3 w-3" />

                    </Link>

                  )}

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

    </>

  );

}


