import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { news } from "@/data/news";
import { translateNewsCategory } from "@/lib/i18n-labels";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) return { title: "Not found" };
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const t = await getTranslations("news");
  const item = news.find((n) => n.slug === params.slug);
  if (!item) notFound();

  const others = news
    .filter((n) => n.slug !== item.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <section className="container mx-auto pt-12">
        <Button asChild variant="ghost" size="sm">
          <Link href="/news">
            <ArrowLeft className="h-4 w-4" />
            {t("back")}
          </Link>
        </Button>
      </section>

      <article className="container mx-auto pb-20 pt-6 sm:pt-10">
        <div className="container-prose">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="teal">
              {translateNewsCategory(item.category, (key) => t(key))}
            </Badge>
            <time
              dateTime={item.date}
              className="font-mono text-xs uppercase tracking-[0.16em] text-ink/55"
            >
              {formatDate(item.date)}
            </time>
          </div>
          <h1 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            {item.excerpt}
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
            {item.content.split(/\n\n+/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-ink/8 bg-white">
          <div className="container mx-auto py-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
              {t("more_title")}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {others.map((n) => (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  className="group rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-teal/40"
                >
                  <Badge variant="secondary">
                    {translateNewsCategory(n.category, (key) => t(key))}
                  </Badge>
                  <h3 className="mt-3 font-serif text-lg leading-tight text-ink transition-colors group-hover:text-teal-dark">
                    {n.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/65">
                    {n.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
