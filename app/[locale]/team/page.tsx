import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { TeamMemberCard } from "@/components/team-member-card";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pi, teamMembers, toLegacyMember, teamMembersData } from "@/data/team";
import { profile } from "@/data/profile";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("team");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function TeamPage() {
  const t = await getTranslations("team");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  const alumni = teamMembers.filter((m) => m.alumni);

  const labMembers = teamMembersData
    .filter((m) => m.team === "lab")
    .map(toLegacyMember);
  const aiMembers = teamMembersData
    .filter((m) => m.team === "ai")
    .map(toLegacyMember);

  const memberSections = [
    {
      title: t("undergradSection"),
      members: labMembers,
    },
    {
      title: t("mastersSection"),
      members: aiMembers,
    },
  ];

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

      <section className="container mx-auto py-10">
        <FadeIn>
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 md:grid-cols-[minmax(200px,260px)_1fr] md:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-2xl border border-ink/10 md:mx-0">
              <Image
                src={profile.photo}
                alt={pi.name}
                fill
                className="object-cover object-top"
                sizes="260px"
              />
            </div>
            <div className="flex flex-col">
              <Badge variant="teal" className="w-fit">
                {t("pi_badge")}
              </Badge>
              <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                {pi.name}
              </h2>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink/55">
                {profile.title} · {profile.department}
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75">
                {profile.bio.split(/\n\n+/).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
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
                    {tCommon("full_bio")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/cv">{tNav("cv")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {memberSections.map(
        (section) =>
          section.members.length > 0 && (
            <section
              key={section.title}
              className="container mx-auto py-12 sm:py-16"
            >
              <SectionHeader eyebrow={tCommon("current")} title={section.title} />
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.members.map((m, i) => (
                  <FadeIn key={m.id ?? m.name} delay={i * 60}>
                    <li className="h-full">
                      <TeamMemberCard member={m} />
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </section>
          )
      )}

      {alumni.length > 0 && (
        <section className="border-t border-ink/8 bg-white">
          <div className="container mx-auto py-16 sm:py-24">
            <SectionHeader
              eyebrow={t("alumniEyebrow")}
              title={t("alumni_section")}
              description={t("alumniDesc")}
            />
            <ul className="mt-10 divide-y divide-ink/8">
              {alumni.map((a, i) => (
                <FadeIn key={a.name} delay={i * 60}>
                  <li className="grid gap-4 py-5 sm:grid-cols-[2fr_1fr_2fr] sm:items-baseline">
                    <div>
                      <p className="font-serif text-lg text-ink">{a.name}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/55">
                        {a.roletr ?? a.role}
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
