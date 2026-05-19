import type { Metadata } from "next";

import { Link } from "@/i18n/navigation";

import { getTranslations } from "next-intl/server";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { FadeIn } from "@/components/fade-in";

import {

  education,

  positions,

  awards,

  grants,

  service,

  memberships,

} from "@/data/cv";

import { publications } from "@/data/publications";

import { profile } from "@/data/profile";



export async function generateMetadata(): Promise<Metadata> {

  const t = await getTranslations("cv");

  return {

    title: t("title"),

    description: `${t("title")} — ${profile.name}`,

  };

}



export default async function CVPage() {

  const t = await getTranslations("cv");



  const abbreviated = publications

    .slice()

    .sort((a, b) => b.year - a.year)

    .slice(0, 8);



  const navItems = [

    ["education", t("education")],

    ["positions", t("positions")],

    ["awards", t("awards")],

    ["publications", t("publications")],

    ["grants", t("grants")],

    ["service", t("service")],

    ["memberships", t("memberships")],

  ] as const;



  return (

    <>

      <section className="container mx-auto pb-10 pt-16 sm:pt-24">

        <FadeIn>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">

                {t("eyebrow")}

              </p>

              <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">

                {profile.name}

              </h1>

              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink/55">

                {profile.title} · {profile.institution}

              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <Button asChild>

                <Link href="/files/cv.pdf" target="_blank">

                  <Download className="h-4 w-4" />

                  {t("download")}

                </Link>

              </Button>

            </div>

          </div>

        </FadeIn>

      </section>



      <section className="container mx-auto grid gap-12 pb-24 lg:grid-cols-[220px_1fr] lg:gap-16">

        <aside className="hidden lg:block">

          <nav className="sticky top-24 space-y-2 text-sm">

            {navItems.map(([id, label]) => (

              <a

                key={id}

                href={`#${id}`}

                className="block text-ink/55 transition-colors hover:text-ink"

              >

                {label}

              </a>

            ))}

          </nav>

        </aside>



        <div className="space-y-16">

          <CVSection id="education" title={t("education")}>

            <ul className="space-y-5">

              {education.map((e) => (

                <li key={`${e.degree}-${e.year}`} className="grid gap-2 sm:grid-cols-[110px_1fr]">

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {e.year}

                  </span>

                  <div>

                    <p className="font-serif text-lg text-ink">

                      {e.degree} in {e.field}

                    </p>

                    <p className="text-sm text-ink/70">

                      {e.institution} · {e.location}

                    </p>

                    {e.detail && (

                      <p className="mt-1 text-sm text-ink/60">{e.detail}</p>

                    )}

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection id="positions" title={t("positions")}>

            <ul className="space-y-5">

              {positions.map((p) => (

                <li

                  key={`${p.title}-${p.startYear}`}

                  className="grid gap-2 sm:grid-cols-[110px_1fr]"

                >

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {p.startYear}–{p.endYear ?? t("present")}

                  </span>

                  <div>

                    <p className="font-serif text-lg text-ink">{p.title}</p>

                    <p className="text-sm text-ink/70">

                      {p.institution} · {p.location}

                    </p>

                    {p.detail && (

                      <p className="mt-1 text-sm text-ink/60">{p.detail}</p>

                    )}

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection id="awards" title={t("awards")}>

            <ul className="space-y-4">

              {awards.map((a) => (

                <li

                  key={`${a.title}-${a.year}`}

                  className="grid gap-2 sm:grid-cols-[110px_1fr]"

                >

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {a.year}

                  </span>

                  <div>

                    <p className="font-serif text-base text-ink">{a.title}</p>

                    <p className="text-sm text-ink/65">{a.organization}</p>

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection

            id="publications"

            title={t("publications")}

            description={t("publications_note")}

          >

            <ul className="space-y-4">

              {abbreviated.map((p) => (

                <li key={p.title} className="grid gap-2 sm:grid-cols-[110px_1fr]">

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {p.year}

                  </span>

                  <div>

                    <p className="font-serif text-base leading-snug text-ink">

                      {p.title}

                    </p>

                    <p className="mt-1 text-sm text-ink/65">

                      {p.authors.join(", ")} · <em>{p.venue}</em>

                    </p>

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection id="grants" title={t("grants")}>

            <ul className="space-y-5">

              {grants.map((g) => (

                <li key={g.title} className="grid gap-2 sm:grid-cols-[110px_1fr]">

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {g.years}

                  </span>

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <p className="font-serif text-base text-ink">{g.title}</p>

                      <Badge variant="teal">{g.role}</Badge>

                    </div>

                    <p className="mt-1 text-sm text-ink/65">

                      {g.agency}

                      {g.amount ? ` · ${g.amount}` : ""}

                    </p>

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection id="service" title={t("service")}>

            <ul className="space-y-4">

              {service.map((s) => (

                <li

                  key={`${s.role}-${s.organization}`}

                  className="grid gap-2 sm:grid-cols-[110px_1fr]"

                >

                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55">

                    {s.years}

                  </span>

                  <div>

                    <p className="font-serif text-base text-ink">{s.role}</p>

                    <p className="text-sm text-ink/65">{s.organization}</p>

                  </div>

                </li>

              ))}

            </ul>

          </CVSection>



          <CVSection id="memberships" title={t("memberships")}>

            <ul className="grid gap-2 sm:grid-cols-2">

              {memberships.map((m) => (

                <li

                  key={m}

                  className="rounded-md border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink/75"

                >

                  {m}

                </li>

              ))}

            </ul>

          </CVSection>

        </div>

      </section>

    </>

  );

}



function CVSection({

  id,

  title,

  description,

  children,

}: {

  id: string;

  title: string;

  description?: string;

  children: React.ReactNode;

}) {

  return (

    <section id={id} className="scroll-mt-24">

      <div className="mb-6 flex items-baseline justify-between gap-6 border-b border-ink/10 pb-3">

        <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">

          {title}

        </h2>

        {description && (

          <p className="hidden text-xs text-ink/55 sm:block">{description}</p>

        )}

      </div>

      {children}

    </section>

  );

}


