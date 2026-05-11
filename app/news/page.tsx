"use client";

import { useMemo, useState } from "react";
import { NewsCard } from "@/components/news-card";
import { FadeIn } from "@/components/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { news, type NewsCategory } from "@/data/news";

const categories: ("All" | NewsCategory)[] = [
  "All",
  "Award",
  "Publication",
  "Conference",
  "Grant",
  "Lab News",
  "Outreach",
];

export default function NewsPage() {
  const [cat, setCat] = useState<string>("All");

  const sorted = useMemo(
    () => [...news].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const filtered =
    cat === "All" ? sorted : sorted.filter((n) => n.category === cat);

  return (
    <>
      <section className="container mx-auto pb-10 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            News & updates
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            What we’re working on, what we’ve published, where we’ve been.
          </h1>
        </FadeIn>
      </section>

      <section className="container mx-auto pb-24">
        <Tabs value={cat} onValueChange={setCat}>
          <TabsList>
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={cat}>
            <div>
              {filtered.length === 0 && (
                <p className="text-sm text-ink/55">No updates in this category yet.</p>
              )}
              {filtered.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
