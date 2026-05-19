"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ContactForm() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      subject: subject || "Website inquiry",
      body: `${body}\n\n— ${profile.shortName}${
        from ? ` (${from})` : ""
      }`,
    });
    window.location.href = `mailto:${profile.email}?${params.toString()}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label={t("name")} htmlFor="from">
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
      <Field label={t("subject")} htmlFor="subject">
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={t("subject_placeholder")}
          required
        />
      </Field>
      <Field label={t("message")} htmlFor="body">
        <Textarea
          id="body"
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={t("message_placeholder")}
          required
        />
      </Field>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-ink/55">{tCommon("form_email_note")}</p>
        <Button type="submit" variant="teal">
          <Send className="h-4 w-4" />
          {t("submit")}
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
