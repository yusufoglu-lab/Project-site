import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
          <span className="h-px w-6 bg-teal" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink/65 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
