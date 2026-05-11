export type PublicationType = "Journal" | "Conference" | "Book Chapter" | "Preprint";

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  pdf?: string;
  type: PublicationType;
  topics: string[];
  highlight?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "Bioaccessibility of anthocyanins from black mulberry (Morus nigra) is enhanced by pectin–whey co-encapsulation: an INFOGEST 2.0 study",
    authors: ["Yusufoğlu, B.", "Kaya, E.", "Aslan, M.", "van Buggenum, J."],
    venue: "Food Chemistry",
    year: 2025,
    doi: "10.1016/j.foodchem.2024.140123",
    pdf: "/files/papers/yusufoglu-2025-foodchem.pdf",
    type: "Journal",
    topics: ["Polyphenols", "Bioavailability", "Encapsulation"],
    highlight: true,
  },
  {
    title:
      "Rosehip and cornelian cherry as underutilized sources of bioactive phenolics: a comparative review",
    authors: ["Yusufoğlu, B.", "Demir, Z.", "Aslan, M."],
    venue: "Nutrients",
    year: 2024,
    doi: "10.3390/nu16091123",
    pdf: "/files/papers/yusufoglu-2024-nutrients.pdf",
    type: "Journal",
    topics: ["Polyphenols", "Anatolian fruits"],
    highlight: true,
  },
  {
    title:
      "Reformulating traditional Turkish pide with red lentil flour: sensory, nutritional, and glycemic outcomes",
    authors: ["Yıldız, A.", "Yusufoğlu, B.", "Aslan, M.", "Tekin, S."],
    venue: "International Journal of Food Sciences and Nutrition",
    year: 2024,
    doi: "10.1080/09637486.2023.2287654",
    pdf: "/files/papers/yildiz-2024-ijfsn.pdf",
    type: "Journal",
    topics: ["Glycemic response", "Reformulation", "Sensory"],
  },
  {
    title:
      "Regional variation in Anatolian kefir microbial communities and its association with metabolite profiles",
    authors: ["Kaya, E.", "Şahin, F.", "Yusufoğlu, B."],
    venue: "Journal of Functional Foods",
    year: 2023,
    doi: "10.1016/j.jff.2023.105612",
    pdf: "/files/papers/kaya-2023-jff.pdf",
    type: "Journal",
    topics: ["Fermented dairy", "Microbiota"],
  },
  {
    title:
      "Short-chain fatty acid response to tarhana consumption in adults with overweight: a 12-week randomized controlled trial",
    authors: ["Yusufoğlu, B.", "Şahin, F.", "Kaya, E.", "Polat, C."],
    venue: "The Journal of Nutrition",
    year: 2023,
    doi: "10.1093/jn/nxac210",
    pdf: "/files/papers/yusufoglu-2023-jnut.pdf",
    type: "Journal",
    topics: ["Gut microbiota", "Clinical nutrition"],
    highlight: true,
  },
  {
    title:
      "Resistant starch type 3 enrichment of bulgur pilaf: a sensory–glycemic trade-off analysis",
    authors: ["Aslan, M.", "Yusufoğlu, B.", "Yıldız, A."],
    venue: "LWT — Food Science and Technology",
    year: 2023,
    doi: "10.1016/j.lwt.2023.114821",
    type: "Journal",
    topics: ["Resistant starch", "Glycemic response"],
  },
  {
    title:
      "Functional food matrix design: bridging chemistry, digestion, and consumer acceptance",
    authors: ["Yusufoğlu, B."],
    venue: "Encyclopedia of Food Chemistry, 2nd Edition (Elsevier)",
    year: 2022,
    doi: "10.1016/B978-0-08-100596-5.23114-8",
    type: "Book Chapter",
    topics: ["Food matrix", "Review"],
  },
  {
    title:
      "In vitro digestion behavior of polyphenol-rich rosehip puree: a structural perspective",
    authors: ["Yusufoğlu, B.", "Demir, Z."],
    venue: "Food Research International",
    year: 2022,
    doi: "10.1016/j.foodres.2022.111245",
    pdf: "/files/papers/yusufoglu-2022-fri.pdf",
    type: "Journal",
    topics: ["In vitro digestion", "Polyphenols"],
  },
  {
    title:
      "Polyphenol–protein interactions during simulated gastrointestinal digestion of plant-based beverages",
    authors: ["Yusufoğlu, B.", "Kaya, E."],
    venue:
      "Proceedings of the 5th International Conference on Food Bioactives & Health",
    year: 2022,
    type: "Conference",
    topics: ["Polyphenols", "Plant-based proteins"],
  },
  {
    title:
      "Comparative phenolic profile of three Turkish wheat landraces and their in vitro antioxidant activity",
    authors: ["Yusufoğlu, B.", "Aslan, M.", "Şahin, F."],
    venue: "Cereal Chemistry",
    year: 2021,
    doi: "10.1002/cche.10412",
    type: "Journal",
    topics: ["Antioxidants", "Cereals"],
  },
  {
    title:
      "From bench to plate: methodological considerations in functional food research",
    authors: ["Yusufoğlu, B."],
    venue:
      "Proceedings of the 33rd EFFoST International Conference (Lisbon, Portugal)",
    year: 2020,
    type: "Conference",
    topics: ["Methods", "Review"],
  },
  {
    title:
      "Effect of thermal processing on phenolic stability and antioxidant capacity of Anatolian black carrot extracts",
    authors: ["Yusufoğlu, B.", "Bostan, K."],
    venue: "Food Bioscience",
    year: 2020,
    doi: "10.1016/j.fbio.2020.100672",
    type: "Journal",
    topics: ["Thermal processing", "Antioxidants"],
  },
];

export const publicationTopics = Array.from(
  new Set(publications.flatMap((p) => p.topics))
).sort();

export const publicationYears = Array.from(
  new Set(publications.map((p) => p.year))
).sort((a, b) => b - a);

export const publicationTypes: PublicationType[] = [
  "Journal",
  "Conference",
  "Book Chapter",
  "Preprint",
];
