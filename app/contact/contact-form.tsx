"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ContactForm() {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      subject: subject || "Website inquiry",
      body: `${body}\n\n— Sent from ${profile.shortName}'s website${
        from ? ` (reply to ${from})` : ""
      }`,
    });
    window.location.href = `mailto:${profile.email}?${params.toString()}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label="Your email" htmlFor="from">
        <Input
          id="from"
          type="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="you@university.edu"
          autoComplete="email"
          required
        />
      </Field>
      <Field label="Subject" htmlFor="subject">
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Collaboration inquiry, prospective student, …"
          required
        />
      </Field>
      <Field label="Message" htmlFor="body">
        <Textarea
          id="body"
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="A short note about what you’d like to discuss."
          required
        />
      </Field>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-ink/55">
          Submitting opens your email client — no data is stored on this site.
        </p>
        <Button type="submit" variant="teal">
          <Send className="h-4 w-4" />
          Send via email
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-ink/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
