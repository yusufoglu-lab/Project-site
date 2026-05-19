"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import { translateNewsCategory } from "@/lib/i18n-labels";
import type { NewsItem } from "@/data/news";

interface NewsCardProps {
  item: NewsItem;
  compact?: boolean;
}

const categoryVariant: Record<
  NewsItem["category"],
  "teal" | "success" | "secondary" | "warning" | "default"
> = {
  Award: "warning",
  Publication: "teal",
  Conference: "secondary",
  "Lab News": "default",
  Grant: "success",
  Outreach: "secondary",
};

export function NewsCard({ item, compact = false }: NewsCardProps) {
  const locale = useLocale();
  const t = useTranslations("news");
  const tCommon = useTranslations("common");

  return (
    <Link
      href={`/news/${item.slug}`}
      className="group block border-b border-ink/8 py-6 transition-colors last:border-b-0 hover:bg-ink/[0.015]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
        <div className="shrink-0 sm:w-40">
          <time
            dateTime={item.date}
            className="block font-mono text-xs uppercase tracking-[0.14em] text-ink/55"
          >
            {formatDate(item.date, locale)}
          </time>
          <div className="mt-2">
            <Badge variant={categoryVariant[item.category]}>
              {translateNewsCategory(item.category, (key) => t(key))}
            </Badge>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-teal-dark sm:text-2xl">
            {item.title}
          </h3>
          {!compact && (
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              {item.excerpt}
            </p>
          )}
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-teal-dark">
            {tCommon("read_more")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
