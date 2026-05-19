"use client";

import { Link } from "@/i18n/navigation";
import { ExternalLink, FileText, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { Publication } from "@/data/publications";
import { translatePublicationType } from "@/lib/i18n-labels";

interface PublicationCardProps {
  pub: Publication;
}

export function PublicationCard({ pub }: PublicationCardProps) {
  const t = useTranslations("publications");

  return (
    <article className="group relative border-l-2 border-ink/10 py-5 pl-6 transition-colors hover:border-teal">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="teal">
          {translatePublicationType(pub.type, (key) => t(key))}
        </Badge>
        <span className="text-xs text-ink/55">{pub.year}</span>
        {pub.highlight && (
          <span className="inline-flex items-center gap-1 text-xs text-amber-700">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
            {t("highlighted")}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-serif text-xl leading-snug text-ink">
        {pub.title}
      </h3>
      <p className="mt-1.5 text-sm text-ink/65">
        {pub.authors.map((a, i) => {
          const isPI = a.includes("Yusufoğlu");
          return (
            <span key={i}>
              <span className={isPI ? "font-semibold text-ink" : ""}>{a}</span>
              {i < pub.authors.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </p>
      <p className="mt-1.5 text-sm">
        <span className="italic text-ink/75">{pub.venue}</span>
        <span className="text-ink/55"> · {pub.year}</span>
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
        {pub.doi && (
          <Link
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-teal-dark hover:underline"
          >
            {t("doi")} <ExternalLink className="h-3 w-3" />
          </Link>
        )}
        {pub.pdf && (
          <Link
            href={pub.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink"
          >
            <FileText className="h-3.5 w-3.5" />
            {t("pdf")}
          </Link>
        )}
        {pub.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] text-ink/65"
          >
            {topic}
          </span>
        ))}
      </div>
    </article>
  );
}
