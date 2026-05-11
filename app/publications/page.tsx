"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { PublicationCard } from "@/components/publication-card";
import { FadeIn } from "@/components/fade-in";
import {
  publications,
  publicationTopics,
  publicationTypes,
  publicationYears,
} from "@/data/publications";
import { profile } from "@/data/profile";

export default function PublicationsPage() {
  const [year, setYear] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [topic, setTopic] = useState<string>("All");

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      if (year !== "All" && String(p.year) !== year) return false;
      if (type !== "All" && p.type !== type) return false;
      if (topic !== "All" && !p.topics.includes(topic)) return false;
      return true;
    });
  }, [year, type, topic]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof publications>();
    filtered
      .slice()
      .sort((a, b) => b.year - a.year)
      .forEach((p) => {
        if (!map.has(p.year)) map.set(p.year, []);
        map.get(p.year)!.push(p);
      });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <>
      <section className="container mx-auto pb-12 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            Publications
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Peer-reviewed work, conference contributions, and chapters.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="outline">
              <Link
                href={profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="h-4 w-4" />
                Google Scholar
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={profile.orcid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" />
                ORCID
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* FILTERS */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container mx-auto grid gap-4 py-6 sm:grid-cols-3">
          <FilterSelect
            label="Year"
            value={year}
            onChange={setYear}
            options={["All", ...publicationYears.map(String)]}
          />
          <FilterSelect
            label="Type"
            value={type}
            onChange={setType}
            options={["All", ...publicationTypes]}
          />
          <FilterSelect
            label="Topic"
            value={topic}
            onChange={setTopic}
            options={["All", ...publicationTopics]}
          />
        </div>
      </section>

      <section className="container mx-auto py-16 sm:py-20">
        {grouped.length === 0 && (
          <p className="text-sm text-ink/55">
            No publications match the current filters.
          </p>
        )}
        <div className="space-y-14">
          {grouped.map(([yr, pubs]) => (
            <div key={yr}>
              <div className="sticky top-16 z-10 -mx-2 mb-4 flex items-center gap-4 bg-paper/85 px-2 py-2 backdrop-blur">
                <span className="font-serif text-3xl text-ink sm:text-4xl">
                  {yr}
                </span>
                <span className="h-px flex-1 bg-ink/10" aria-hidden />
                <span className="text-xs uppercase tracking-[0.14em] text-ink/55">
                  {pubs.length} {pubs.length === 1 ? "paper" : "papers"}
                </span>
              </div>
              <ul>
                {pubs.map((pub) => (
                  <li key={pub.title}>
                    <PublicationCard pub={pub} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
        {label}
      </span>
      <div className="mt-1.5">
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
      </div>
    </label>
  );
}
