export type NewsCategory =
  | "Award"
  | "Publication"
  | "Conference"
  | "Lab News"
  | "Grant"
  | "Outreach";

export interface NewsItem {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  category: NewsCategory;
  excerpt: string;
  content: string;
  cover?: string;
}

export const news: NewsItem[] = [
  {
    slug: "tubitak-1001-grant-awarded",
    title:
      "TÜBİTAK 1001 grant awarded for Anatolian polyphenol bioavailability program",
    date: "2025-03-18",
    category: "Grant",
    excerpt:
      "Our three-year, multi-institution study on rosehip, cornelian cherry, and black mulberry polyphenols has been funded by TÜBİTAK 1001.",
    content: `We are delighted to announce that the lab has been awarded a TÜBİTAK 1001 grant (24-month renewal, total ₺2.4M) to support our work on the bioavailability of polyphenols from underutilized Anatolian fruits. The program will combine INFOGEST 2.0 in vitro digestion, Caco-2/HT29-MTX absorption assays, ex vivo colonic fermentation, and a planned human postprandial trial.

The grant supports two new PhD positions in the group starting Fall 2025. Applications are now open — see the contact page for details.`,
  },
  {
    slug: "food-chemistry-paper-accepted",
    title:
      "New paper accepted in Food Chemistry on pectin–whey encapsulation",
    date: "2025-02-04",
    category: "Publication",
    excerpt:
      "Our latest paper on pectin–whey co-encapsulation of black mulberry anthocyanins has been accepted for publication.",
    content: `Congratulations to Elif Kaya, who led our latest paper, “Bioaccessibility of anthocyanins from black mulberry is enhanced by pectin–whey co-encapsulation: an INFOGEST 2.0 study,” accepted in Food Chemistry.

The paper shows that a pectin–whey wall material increases anthocyanin bioaccessibility by 34% relative to free puree, with parallel gains in cellular uptake in a Caco-2/HT29-MTX co-culture model. Full text will be available open access in the coming weeks.`,
  },
  {
    slug: "best-young-investigator-award-2024",
    title:
      "Best Young Investigator Award at the 14th Turkish Food Congress",
    date: "2024-11-22",
    category: "Award",
    excerpt:
      "Dr. Yusufoğlu received the Best Young Investigator Award at the 14th Turkish Food Congress in İzmir.",
    content: `Dr. Yusufoğlu received the Best Young Investigator Award at the 14th Turkish Food Congress, held in İzmir from November 19–22. The award recognizes investigators under the age of 40 whose work has substantially contributed to the field of food science in Türkiye over the preceding five years.

Many thanks to the organizing committee and to our students and collaborators — this is very much a shared award.`,
  },
  {
    slug: "horizon-europe-fermentomics",
    title:
      "Lab joins the Horizon Europe FERMENTOMICS consortium",
    date: "2024-09-10",
    category: "Grant",
    excerpt:
      "We have joined the FERMENTOMICS consortium, leading Work Package 4 on traditional fermented dairy and the gut–metabolic axis.",
    content: `Our group has joined the Horizon Europe FERMENTOMICS consortium, a 12-partner program studying traditional European fermented foods and their effects on cardiometabolic health. We lead Work Package 4, which focuses on artisanal kefir and tarhana, and contributes a 12-week randomized clinical trial in adults with overweight.

We are now recruiting one postdoctoral researcher and one PhD student for this work — please see the contact page for application details.`,
  },
  {
    slug: "ift-annual-meeting-keynote",
    title:
      "Invited keynote at the IFT Annual Meeting & Expo (Chicago)",
    date: "2024-07-15",
    category: "Conference",
    excerpt:
      "Dr. Yusufoğlu delivered an invited keynote on Mediterranean food matrix design at IFT FIRST.",
    content: `Dr. Yusufoğlu was invited to deliver a keynote address, “Food Matrix Engineering for Cardiometabolic Health: Lessons from the Mediterranean,” at the 2024 IFT Annual Meeting & Expo (IFT FIRST) in Chicago, IL.

Slides are available on request — please reach out via the contact page.`,
  },
  {
    slug: "lab-welcomes-new-students-2024",
    title:
      "Welcome to our incoming Fall 2024 students",
    date: "2024-09-02",
    category: "Lab News",
    excerpt:
      "We are delighted to welcome four new students to the lab this fall: two PhD, one MS, and one undergraduate researcher.",
    content: `We are delighted to welcome our incoming Fall 2024 cohort:

• Furkan Şahin (Ph.D., Food Engineering) — joining the FERMENTOMICS metagenomics work
• Zeynep Demir (M.Sc., Nutrition and Dietetics) — joining the rosehip encapsulation project
• Selin Tekin (M.Sc., Public Health Nutrition) — leading our continuous glucose monitoring sub-study
• Can Polat (B.Sc., Nutrition and Dietetics) — joining as an undergraduate researcher on ellagitannin analytics

Welcome to the team!`,
  },
];
