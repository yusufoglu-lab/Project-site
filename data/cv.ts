export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  detail?: string;
}

export interface PositionEntry {
  title: string;
  institution: string;
  location: string;
  startYear: number;
  endYear?: number;
  detail?: string;
}

export interface AwardEntry {
  title: string;
  organization: string;
  year: number;
  detail?: string;
}

export interface GrantEntry {
  title: string;
  agency: string;
  role: "PI" | "Co-PI" | "Co-Investigator" | "Collaborator";
  amount?: string;
  years: string;
}

export interface ServiceEntry {
  role: string;
  organization: string;
  years: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Ph.D.",
    field: "Food Engineering",
    institution: "Istanbul Technical University",
    location: "Istanbul, Türkiye",
    year: "2019",
    detail:
      "Dissertation: “Bioaccessibility of polyphenols from Anatolian fruit matrices: in vitro and cellular evaluation.” Visiting researcher at Wageningen University & Research (Netherlands), 2017–2018.",
  },
  {
    degree: "M.Sc.",
    field: "Food Engineering",
    institution: "Istanbul Technical University",
    location: "Istanbul, Türkiye",
    year: "2014",
  },
  {
    degree: "B.Sc.",
    field: "Food Engineering",
    institution: "Hacettepe University",
    location: "Ankara, Türkiye",
    year: "2012",
    detail: "Graduated with high honors (top 5%).",
  },
];

export const positions: PositionEntry[] = [
  {
    title: "Assistant Professor",
    institution:
      "Istanbul Medipol University — Department of Nutrition and Dietetics",
    location: "Istanbul, Türkiye",
    startYear: 2020,
    detail:
      "Founder and PI of the Functional Foods & Nutritional Biochemistry research group.",
  },
  {
    title: "Postdoctoral Researcher",
    institution: "Istanbul Technical University — Food Engineering",
    location: "Istanbul, Türkiye",
    startYear: 2019,
    endYear: 2020,
    detail:
      "TÜBİTAK BIDEB 2218 Fellow. Worked on encapsulation of phenolic compounds for cardiometabolic applications.",
  },
  {
    title: "Visiting Research Fellow",
    institution: "Wageningen University & Research",
    location: "Wageningen, Netherlands",
    startYear: 2017,
    endYear: 2018,
    detail:
      "Hosted in the Food Quality and Design group. Developed INFOGEST 2.0 protocols for plant matrices.",
  },
];

export const awards: AwardEntry[] = [
  {
    title: "Best Young Investigator Award",
    organization: "Turkish Food Congress",
    year: 2024,
  },
  {
    title: "Outstanding Reviewer Award",
    organization: "Food Research International (Elsevier)",
    year: 2023,
  },
  {
    title: "Early Career Travel Fellowship",
    organization: "International Union of Food Science and Technology (IUFoST)",
    year: 2022,
  },
  {
    title: "TÜBİTAK BIDEB 2218 Postdoctoral Fellowship",
    organization:
      "The Scientific and Technological Research Council of Türkiye",
    year: 2019,
  },
  {
    title: "Erasmus+ Research Mobility Grant",
    organization: "European Commission",
    year: 2017,
  },
];

export const grants: GrantEntry[] = [
  {
    title:
      "Bioavailability of Polyphenols from Underutilized Anatolian Fruits",
    agency: "TÜBİTAK 1001",
    role: "PI",
    amount: "₺2,400,000",
    years: "2024–2027",
  },
  {
    title: "FERMENTOMICS — Traditional Fermented Foods and Cardiometabolic Health (WP4)",
    agency: "Horizon Europe",
    role: "Co-PI",
    amount: "€480,000 (WP4 share)",
    years: "2024–2027",
  },
  {
    title:
      "Reformulating Turkish Staples for Improved Glycemic Response",
    agency: "Istanbul Medipol University BAP",
    role: "PI",
    amount: "₺350,000",
    years: "2023–2026",
  },
  {
    title:
      "Pulse Protein Extrusion for Climate-Resilient School Nutrition",
    agency: "Istanbul Metropolitan Municipality — Pilot Program",
    role: "PI",
    amount: "₺180,000",
    years: "2024–2025",
  },
];

export const service: ServiceEntry[] = [
  {
    role: "Associate Editor",
    organization: "Frontiers in Nutrition — Nutrition and Food Science Technology Section",
    years: "2024–present",
  },
  {
    role: "Reviewer",
    organization:
      "Food Chemistry, Food Research International, Nutrients, Journal of Functional Foods, LWT, The Journal of Nutrition",
    years: "2019–present",
  },
  {
    role: "Scientific Committee Member",
    organization: "Turkish Food Congress",
    years: "2023–present",
  },
  {
    role: "Faculty Mentor",
    organization:
      "Istanbul Medipol University — Women in STEM Mentorship Program",
    years: "2022–present",
  },
];

export const memberships: string[] = [
  "Institute of Food Technologists (IFT)",
  "International Union of Food Science and Technology (IUFoST)",
  "American Society for Nutrition (ASN)",
  "Turkish Food Engineers’ Association",
];
