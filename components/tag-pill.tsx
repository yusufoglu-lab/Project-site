import { cn } from "@/lib/utils";

interface TagPillProps {
  children: React.ReactNode;
  tone?: "default" | "teal" | "ink";
  className?: string;
}

export function TagPill({
  children,
  tone = "default",
  className,
}: TagPillProps) {
  const tones: Record<string, string> = {
    default: "border-ink/10 bg-paper text-ink/80",
    teal: "border-teal/25 bg-teal/8 text-teal-dark",
    ink: "border-ink/15 bg-ink text-paper",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
