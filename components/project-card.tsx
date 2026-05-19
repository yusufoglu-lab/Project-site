"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { ResearchProject } from "@/data/research";
import { translateResearchStatus } from "@/lib/i18n-labels";

interface ProjectCardProps {
  project: ResearchProject;
}

const statusVariant: Record<
  ResearchProject["status"],
  "teal" | "success" | "secondary" | "warning"
> = {
  Active: "teal",
  Ongoing: "success",
  Completed: "secondary",
  Planned: "warning",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("research");
  const count = project.relatedPublicationDois.length;

  return (
    <Link
      href={`/research/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_12px_40px_-12px_rgba(13,148,136,0.18)]"
    >
      <div className="flex items-center justify-between gap-3">
        <Badge variant={statusVariant[project.status]}>
          {translateResearchStatus(project.status, (key) => t(key))}
        </Badge>
        <span className="text-xs text-ink/45">
          {project.startYear}
          {project.endYear
            ? ` – ${project.endYear}`
            : ` – ${t("present")}`}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-teal-dark">
        {project.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/65">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-ink/55">
        <span className="inline-flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" />
          {count === 1
            ? t("related_count", { count })
            : t("related_count_plural", { count })}
        </span>
        <span className="inline-flex items-center gap-1 text-teal-dark">
          {t("view_project")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
