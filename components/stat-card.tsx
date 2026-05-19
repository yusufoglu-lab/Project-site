"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  compact?: boolean;
}

export function StatCard({
  value,
  label,
  suffix,
  delay = 0,
  compact = false,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const start = performance.now() + delay;
    let frame = 0;

    const step = (now: number) => {
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, value, delay]);

  return (
    <div
      ref={ref}
      className={
        compact
          ? "group relative overflow-hidden rounded-xl border border-ink/10 bg-white p-4 transition-colors hover:border-teal/40"
          : "group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-colors hover:border-teal/40"
      }
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div
        className={
          compact
            ? "font-serif text-2xl font-medium tracking-tight text-ink tabular-nums sm:text-3xl"
            : "font-serif text-5xl font-medium tracking-tight text-ink tabular-nums sm:text-6xl"
        }
      >
        {count}
        {suffix ?? ""}
      </div>
      <div
        className={
          compact
            ? "mt-1.5 text-[10px] uppercase tracking-[0.14em] text-ink/55"
            : "mt-3 text-sm uppercase tracking-[0.16em] text-ink/55"
        }
      >
        {label}
      </div>
    </div>
  );
}

