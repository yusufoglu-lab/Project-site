import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Linkedin,
  Twitter,
  ExternalLink,
  Building2,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import { FadeIn } from "@/components/fade-in";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

const socials = [
  { href: profile.scholar, label: "Google Scholar", icon: GraduationCap },
  { href: profile.orcid, label: "ORCID", icon: BookOpen },
  { href: profile.researchGate, label: "ResearchGate", icon: Building2 },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.twitter, label: "Twitter / X", icon: Twitter },
];

export default function ContactPage() {
  return (
    <>
      <section className="container mx-auto pb-10 pt-16 sm:pt-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Get in touch.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            For collaborations, prospective student inquiries, or speaking
            invitations, please use the email below or send a message through
            the form.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto grid gap-12 pb-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* LEFT: contact details */}
        <FadeIn>
          <div className="space-y-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-ink hover:text-teal-dark sm:text-3xl"
              >
                <Mail className="h-5 w-5 text-teal-dark" />
                {profile.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                Phone
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-serif text-xl text-ink">
                <Phone className="h-4 w-4 text-teal-dark" />
                {profile.phone}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                Office
              </p>
              <p className="mt-2 inline-flex items-start gap-2 text-base text-ink/85">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal-dark" />
                <span>
                  {profile.office}
                  <br />
                  {profile.address}
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                Academic profiles
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm text-ink/80 transition-colors hover:border-teal/40 hover:bg-teal/5 hover:text-teal-dark"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Istanbul+Medipol+University+Kavacik&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                aria-label="Map showing the office location"
              />
            </div>
          </div>
        </FadeIn>

        {/* RIGHT: form */}
        <FadeIn delay={120}>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-ink/65">
              The form composes an email in your default mail client. Nothing
              is stored on this site.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
