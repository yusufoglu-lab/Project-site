import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { researchProjects } from "@/data/research";
import { publications } from "@/data/publications";
import { teamMembers, pi } from "@/data/team";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return researchProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = researchProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ResearchDetailPage({ params }: PageProps) {
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
            All research
          </Link>
        </Button>
      </section>

      <section className="container mx-auto pb-12 pt-6 sm:pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="teal">
            <FlaskConical className="mr-1 h-3 w-3" />
            {project.area}
          </Badge>
          <Badge variant="secondary">{project.status}</Badge>
          <span className="text-xs text-ink/55">
            {project.startYear}
            {project.endYear ? ` – ${project.endYear}` : " – present"}
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
          Funding: {project.funding}
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="container mx-auto grid gap-12 pb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
          {project.description.split(/\n\n+/).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-serif text-lg text-ink">Methods & approach</h3>
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

      {/* RESEARCH QUESTIONS */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container mx-auto py-16 sm:py-20">
          <SectionHeader
            eyebrow="Inquiry"
            title="Research questions"
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

      {/* TEAM */}
      {members.length > 0 && (
        <section className="container mx-auto py-16 sm:py-20">
          <SectionHeader eyebrow="People" title="Team on this project" />
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

      {/* RELATED PUBLICATIONS */}
      <section className="border-t border-ink/8 bg-white">
        <div className="container mx-auto py-16 sm:py-20">
          <SectionHeader
            eyebrow="Outputs"
            title="Related publications"
          />
          {related.length === 0 ? (
            <p className="mt-8 text-sm text-ink/55">
              Publications from this project are in preparation.
            </p>
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
                      DOI <ExternalLink className="h-3 w-3" />
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
