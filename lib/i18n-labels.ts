import type { NewsCategory } from "@/data/news";
import type { PublicationType } from "@/data/publications";
import type { ProjectStatus } from "@/data/research";

export type Translator = (key: string) => string;

export function translateResearchStatus(
  status: ProjectStatus,
  t: Translator
): string {
  const map: Record<ProjectStatus, string> = {
    Active: "status_active",
    Completed: "status_completed",
    Ongoing: "status_ongoing",
    Planned: "status_planned",
  };
  return t(map[status]);
}

export function translateResearchArea(area: string, t: Translator): string {
  const map: Record<string, string> = {
    All: "area_all",
    "Functional Foods": "area_functional_foods",
    "Nutritional Biochemistry": "area_nutritional_biochemistry",
    "Public Health": "area_public_health",
  };
  return t(map[area] ?? "area_all");
}

export function translatePublicationType(
  type: PublicationType,
  t: Translator
): string {
  const map: Record<PublicationType, string> = {
    Journal: "type_journal",
    Conference: "type_conference",
    "Book Chapter": "type_book_chapter",
    Preprint: "type_preprint",
  };
  return t(map[type]);
}

export function translateNewsCategory(
  category: NewsCategory,
  t: Translator
): string {
  const map: Record<NewsCategory, string> = {
    Award: "cat_award",
    Publication: "cat_publication",
    Conference: "cat_conference",
    "Lab News": "cat_lab",
    Grant: "cat_grant",
    Outreach: "cat_outreach",
  };
  return t(map[category]);
}

export function translateCourseLevel(level: string, t: Translator): string {
  if (level === "Undergraduate" || level === "Lisans") {
    return t("level_undergrad");
  }
  if (level === "Graduate") {
    return t("level_grad");
  }
  return level;
}
