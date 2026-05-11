import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_12px_40px_-12px_rgba(13,148,136,0.18)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ink/8 via-ink/5 to-teal/10">
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-serif text-5xl text-ink/30">{initials}</span>
        </div>
        <div className="absolute left-3 top-3">
          <Badge variant="secondary">{member.role}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg leading-tight text-ink">
          {member.name}
        </h3>
        {member.degree && (
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/55">
            {member.degree}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          {member.topic}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-ink/8 pt-3 text-xs text-ink/55">
          <span>
            {member.alumni
              ? `${member.startYear} – ${member.endYear ?? ""}`
              : `Joined ${member.startYear}`}
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
        {member.alumni && member.currentPosition && (
          <p className="mt-3 text-xs italic text-ink/60">
            Now: {member.currentPosition}
          </p>
        )}
      </div>
    </article>
  );
}
