export type ProjectStatus = "Active" | "Ongoing" | "Completed" | "Planned";

export interface ResearchProject {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  area: "Functional Foods" | "Nutritional Biochemistry" | "Public Health";
  status: ProjectStatus;
  startYear: number;
  endYear?: number;
  funding: string;
  questions: string[];
  methods: string[];
  team: string[]; // names from team data
  relatedPublicationDois: string[];
  cover?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    slug: "polyphenol-bioavailability-anatolian-fruits",
    title:
      "Bioavailability of Polyphenols from Underutilized Anatolian Fruits",
    shortDescription:
      "Mapping the digestion, absorption, and microbial transformation of polyphenols from rosehip, cornelian cherry, and black mulberry.",
    description: `This program characterizes the polyphenolic profile of three underutilized Anatolian fruits — rosehip (Rosa canina), cornelian cherry (Cornus mas), and black mulberry (Morus nigra) — and tracks how those compounds survive gastric and intestinal digestion. We pair INFOGEST 2.0 in vitro digestion with Caco-2/HT29-MTX co-culture absorption assays and ex vivo colonic fermentation using human fecal inocula.

The goal is to identify food matrix and processing strategies (pulping, fermentation, encapsulation in pectin–whey complexes) that maximize the bioaccessible fraction of anthocyanins and ellagitannins, and to nominate candidate compounds for a follow-on human pharmacokinetic study.`,
    area: "Functional Foods",
    status: "Active",
    startYear: 2024,
    endYear: 2027,
    funding: "TÜBİTAK 1001 — Grant No. 124O321",
    questions: [
      "Which Anatolian fruit matrices retain the highest fraction of bioaccessible polyphenols after simulated digestion?",
      "How does spray-drying with pectin–whey wall materials alter colonic metabolite profiles?",
      "Can a single 200 g serving meaningfully shift plasma anthocyanin metabolites in a 4-hour postprandial window?",
    ],
    methods: [
      "INFOGEST 2.0 static in vitro digestion",
      "LC-MS/MS quantification of phenolic metabolites",
      "Caco-2 / HT29-MTX co-culture transport assays",
      "Ex vivo colonic fermentation with 16S rRNA sequencing",
      "Randomized crossover postprandial human trial (planned, n=30)",
    ],
    team: ["Elif Kaya", "Mert Aslan", "Zeynep Demir", "Can Polat"],
    relatedPublicationDois: [
      "10.1016/j.foodchem.2024.140123",
      "10.3390/nu16091123",
    ],
  },
  {
    slug: "mediterranean-diet-glycemic-response",
    title:
      "Food Matrix Engineering for Lower Glycemic Response in Anatolian Cuisine",
    shortDescription:
      "Reformulating traditional Turkish breads and bulgur dishes to flatten postprandial glucose without compromising sensory acceptance.",
    description: `Working with a panel of bakers and home cooks, we systematically reformulate four staple dishes — pide, bulgur pilavı, mercimek çorbası, and yufka — substituting fractions of refined flour with high-fiber legume powders and resistant starch. Each reformulation is screened for sensory acceptability, then evaluated for postprandial glycemic and insulinemic response in healthy adults.

The project explicitly preserves culinary identity: any acceptable reformulation must pass a triangle test against the traditional version with untrained Turkish consumers.`,
    area: "Public Health",
    status: "Active",
    startYear: 2023,
    endYear: 2026,
    funding: "Istanbul Medipol University BAP — Grant No. 2023/14",
    questions: [
      "What is the maximum fraction of legume or resistant starch flour that retains sensory parity?",
      "Do reformulated staples produce clinically meaningful reductions in iAUC glucose over 120 minutes?",
      "How robust is the effect across normoglycemic and prediabetic participants?",
    ],
    methods: [
      "Iterative culinary co-design with bakers and chefs",
      "Trained and consumer sensory panels (CATA, triangle tests)",
      "Continuous glucose monitoring (Freestyle Libre 3)",
      "Mixed-effects modeling of iAUC glucose and insulin",
    ],
    team: ["Ayşe Yıldız", "Mert Aslan", "Selin Tekin"],
    relatedPublicationDois: ["10.1080/09637486.2023.2287654"],
  },
  {
    slug: "fermented-dairy-gut-axis",
    title:
      "Traditional Fermented Dairy and the Gut–Metabolic Axis",
    shortDescription:
      "Characterizing kefir and tarhana microbial consortia and their effects on metabolic markers in adults with overweight.",
    description: `This project profiles the microbial and metabolomic landscape of artisanal kefir grains and tarhana from six Anatolian regions, then evaluates the most distinctive consortia in a 12-week randomized controlled trial in adults with overweight and elevated fasting glucose. We track stool 16S rRNA, fasting glucose/insulin, inflammatory markers, and short-chain fatty acid profiles.`,
    area: "Nutritional Biochemistry",
    status: "Ongoing",
    startYear: 2022,
    endYear: 2025,
    funding: "Horizon Europe — FERMENTOMICS Consortium (WP4)",
    questions: [
      "Which microbial signatures distinguish regional kefir and tarhana variants?",
      "Does a 12-week intervention shift fecal SCFA profiles and HOMA-IR?",
      "Are responder phenotypes predictable from baseline microbiota?",
    ],
    methods: [
      "Shotgun metagenomics & metabolomics of starter cultures",
      "Randomized parallel-group RCT (n=84)",
      "Targeted SCFA quantification by GC-MS",
      "Machine-learning responder stratification",
    ],
    team: ["Elif Kaya", "Furkan Şahin", "Ayşe Yıldız"],
    relatedPublicationDois: [
      "10.1093/jn/nxac210",
      "10.1016/j.jff.2023.105612",
    ],
  },
  {
    slug: "plant-protein-extrusion",
    title:
      "Pulse Protein Extrusion for Climate-Resilient School Nutrition",
    shortDescription:
      "Developing extruded chickpea–lentil snacks tailored for Turkish primary school meal programs.",
    description: `In partnership with two municipal school meal programs, we are developing extruded snacks based on Turkish chickpea (Cicer arietinum) and red lentil (Lens culinaris) blends. The work optimizes twin-screw extrusion parameters for protein digestibility, micronutrient retention, and texture, and benchmarks the products against commercially available snacks in nutrient density and acceptability among 7–11 year-olds.`,
    area: "Functional Foods",
    status: "Active",
    startYear: 2024,
    funding: "Istanbul Metropolitan Municipality — Pilot Program",
    questions: [
      "Which extrusion temperature and moisture conditions maximize in vitro protein digestibility (IVPDCAAS)?",
      "How do extruded pulses compare nutritionally to commercial wheat-based snacks?",
      "What sensory attributes predict acceptance among primary school children?",
    ],
    methods: [
      "Twin-screw extrusion (response surface methodology)",
      "INFOGEST in vitro protein digestibility assays",
      "Texture profile analysis & color spectroscopy",
      "Hedonic acceptance testing with primary school cohorts",
    ],
    team: ["Mert Aslan", "Zeynep Demir", "Naz Öztürk"],
    relatedPublicationDois: [],
  },
];

export const researchAreas = [
  "All",
  "Functional Foods",
  "Nutritional Biochemistry",
  "Public Health",
] as const;
