import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const tCommon = await getTranslations("common");

  return (
    <section className="container mx-auto grid min-h-[70vh] place-items-center py-24 text-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-dark">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-ink/65">{t("desc")}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">{tCommon("back_home")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/research">{tCommon("view_research")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
