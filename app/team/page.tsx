import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { TeamMemberCard } from "@/components/team-member-card";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pi, teamMembers } from "@/data/team";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The Functional Foods & Nutritional Biochemistry group at Istanbul Medipol University.",
};

export default function TeamPage() {
  const current = teamMembers.filter((m) => !m.alumni);
  const alumni = teamMembers.filter((m) => m.alumni);

  const grouped = {
    "PhD Students": current.filter((m) => m.role === "PhD Student"),
    "MS Students": current.filter((m) => m.role === "MS Student"),
    "Undergraduate Researchers": current.filter(
      (m) => m.role === "Undergraduate Researcher"
    ),
  };

  return (
    <>
      <section className="container mx-auto pb-12 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            Team
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            The Functional Foods Lab.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            A small, interdisciplinary group of food engineers, nutritionists,
            and data scientists working at the intersection of chemistry,
            digestion, and dietary practice.
          </p>
        </FadeIn>
      </section>

      {/* PI */}
      <section className="container mx-auto py-10">
        <FadeIn>
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-ink/10 via-paper to-teal/15">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif text-[6rem] leading-none text-ink/15">
                  BY
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <Badge variant="teal" className="w-fit">
                Principal Investigator
              </Badge>
              <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                {pi.name}
              </h2>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink/55">
                {profile.title} · {profile.department}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                Dr. Yusufoğlu leads the lab’s scientific direction, mentors
                graduate and undergraduate students, and serves as PI on the
                group’s TÜBİTAK, Horizon Europe, and municipal projects.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-dark" />
                  {profile.office}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-dark" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:underline"
                  >
                    {profile.email}
                  </a>
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/about">
                    Full bio
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cv">CV</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CURRENT MEMBERS */}
      {Object.entries(grouped).map(([groupName, members]) =>
        members.length > 0 ? (
          <section
            key={groupName}
            className="container mx-auto py-12 sm:py-16"
          >
            <SectionHeader eyebrow="Current" title={groupName} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m, i) => (
                <FadeIn key={m.name} delay={i * 60}>
                  <li className="h-full">
                    <TeamMemberCard member={m} />
                  </li>
                </FadeIn>
              ))}
            </ul>
          </section>
        ) : null
      )}

      {/* ALUMNI */}
      {alumni.length > 0 && (
        <section className="border-t border-ink/8 bg-white">
          <div className="container mx-auto py-16 sm:py-24">
            <SectionHeader
              eyebrow="Where they are now"
              title="Alumni"
              description="Former members of the group, and where their work has taken them."
            />
            <ul className="mt-10 divide-y divide-ink/8">
              {alumni.map((a, i) => (
                <FadeIn key={a.name} delay={i * 60}>
                  <li className="grid gap-4 py-5 sm:grid-cols-[2fr_1fr_2fr] sm:items-baseline">
                    <div>
                      <p className="font-serif text-lg text-ink">{a.name}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/55">
                        {a.role}
                      </p>
                    </div>
                    <p className="text-sm text-ink/65">
                      {a.startYear} – {a.endYear}
                    </p>
                    <p className="text-sm italic text-ink/70">
                      {a.currentPosition ?? "—"}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
