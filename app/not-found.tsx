import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container mx-auto grid min-h-[70vh] place-items-center py-24 text-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
          404 — Not found
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
          This page is off the map.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-ink/65">
          The link you followed may be broken, or the page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/research">View research</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
