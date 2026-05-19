"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { researchProjects, researchAreas } from "@/data/research";
import { translateResearchArea } from "@/lib/i18n-labels";

export default function ResearchPage() {
  const t = useTranslations("research");
  const [area, setArea] = useState<string>("All");
  const filtered =
    area === "All"
      ? researchProjects
      : researchProjects.filter((p) => p.area === area);

  return (
    <>
      <section className="container mx-auto pb-12 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto pb-24">
        <Tabs value={area} onValueChange={setArea}>
          <TabsList>
            {researchAreas.map((a) => (
              <TabsTrigger key={a} value={a}>
                {translateResearchArea(a, (key) => t(key))}
              </TabsTrigger>
            ))}
          </TabsList>

          {researchAreas.map((a) => (
            <TabsContent key={a} value={a}>
              <div className="grid gap-6 md:grid-cols-2">
                {filtered.map((p, i) => (
                  <FadeIn key={p.slug} delay={i * 80}>
                    <ProjectCard project={p} />
                  </FadeIn>
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-sm text-ink/55">{t("no_projects")}</p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
