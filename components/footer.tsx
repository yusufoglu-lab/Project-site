import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  BookOpen,
} from "lucide-react";
import { profile } from "@/data/profile";

const footerNav = [
  {
    title: "Research",
    links: [
      { href: "/research", label: "Projects" },
      { href: "/publications", label: "Publications" },
      { href: "/team", label: "Team" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About" },
      { href: "/cv", label: "CV" },
      { href: "/teaching", label: "Teaching" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
      { href: `mailto:${profile.email}`, label: "Email" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                <span className="font-serif text-base leading-none">BY</span>
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg text-ink">
                  {profile.shortName}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/55">
                  {profile.title}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65">
              {profile.shortBio}
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2">
              <SocialLink href={profile.scholar} label="Google Scholar">
                <GraduationCap className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.orcid} label="ORCID">
                <BookOpen className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.twitter} label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={profile.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </ul>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/75 hover:text-teal-dark"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            {profile.department} · {profile.institution}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={label}
        className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:border-teal/40 hover:bg-teal/5 hover:text-teal-dark"
      >
        {children}
      </Link>
    </li>
  );
}
