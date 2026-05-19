"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  member: TeamMember;
  badgeLabel?: string;
}

export function TeamMemberCard({ member, badgeLabel }: TeamMemberCardProps) {
  const t = useTranslations("common");
  const [imgError, setImgError] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  const showImage = member.photo && !imgError;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_12px_40px_-12px_rgba(13,148,136,0.18)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ink/8 via-ink/5 to-teal/10">
        {showImage ? (
          <Image
            src={member.photo!}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span
              className={cn(
                "flex h-24 w-24 items-center justify-center rounded-full font-serif text-3xl",
                "bg-teal/15 text-teal-dark ring-2 ring-teal/25"
              )}
              aria-hidden
            >
              {initials}
            </span>
          </div>
        )}
        <div className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)]">
          <Badge variant="secondary">
            {badgeLabel ?? member.roletr ?? member.role}
          </Badge>
          {member.institution && (
            <p className="mt-2 rounded-md bg-paper/90 px-2 py-1 text-[11px] leading-snug text-ink/75 backdrop-blur-sm">
              {member.institution}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg leading-tight text-ink">
          {member.name}
        </h3>
        {member.degree && member.degree !== member.topic && (
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/55">
            {member.degree}
          </p>
        )}
        {member.topic &&
          member.team !== "academic" &&
          member.topic !== member.institution && (
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {member.topic}
            </p>
          )}
        {member.team !== "academic" && (
          <div className="mt-auto flex items-center justify-between border-t border-ink/8 pt-3 text-xs text-ink/55">
            <span>
              {member.alumni
                ? `${member.startYear} – ${member.endYear ?? ""}`
                : t("joined", { year: member.startYear })}
            </span>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1 text-ink/60 hover:text-teal-dark"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
        {member.alumni && member.currentPosition && (
          <p className="mt-3 text-xs italic text-ink/60">
            {t("now")}: {member.currentPosition}
          </p>
        )}
      </div>
    </article>
  );
}
