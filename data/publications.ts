export type PublicationType = "Journal" | "Conference" | "Book Chapter" | "Preprint";

export interface Publication {
  id?: string;
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
  openAccess?: boolean;
  citations?: number;
  volume?: string;
  issue?: string;
  pages?: string;
}

function mapType(
  type: "review" | "article" | "chapter"
): PublicationType {
  if (type === "chapter") return "Book Chapter";
  return "Journal";
}

const rawPublications = [
  {
    id: "pub-2026-macroalgae",
    title:
      "Macroalgae-derived hydrocolloids and their applications in food industry and their health effects",
    authors: [
      "Kezer G.",
      "Yusufoğlu B.",
      "Namlı S.",
      "Darabidarestani S.",
      "Harahap I.A.",
      "Şensu E.",
      "Trivedi E.",
      "Yücetepe A.",
      "Ziora Z.M.",
      "Esatbeyoglu T.",
    ],
    journal: "European Food Research and Technology",
    year: 2026,
    volume: "252",
    issue: "4",
    pages: "172",
    doi: "",
    type: "review" as const,
    openAccess: true,
    topics: ["Hidrokolloidler", "Gıda Endüstrisi", "Makroalgler"],
  },
  {
    id: "pub-2026-cold-plasma",
    title:
      "Rotational chamber cold plasma: A novel approach to enhance the nutritional and antioxidant value of golden milk",
    authors: [
      "Yusufoğlu B.",
      "Şanlı İ.",
      "Özkan G.",
      "Güneş Z.S.",
      "Çapanoğlu E.",
      "Esatbeyoglu T.",
    ],
    journal: "Applied Food Research",
    year: 2026,
    volume: "6",
    issue: "1",
    pages: "101972",
    doi: "10.1016/j.afres.2026.101972",
    type: "article" as const,
    openAccess: true,
    topics: ["Soğuk Plazma", "Antioksidan", "Fonksiyonel Gıda"],
  },
  {
    id: "pub-2026-plant-proteins",
    title:
      "Harnessing the versatility of plant proteins in food applications: A special focus on plant-based meat analogs",
    authors: ["Karabulut G.", "Köroğlu D.G.", "Yusufoğlu B."],
    journal: "PLANT PROTEINS: Nutritional Aspects and Processing Applications (Elsevier)",
    year: 2026,
    pages: "243-267",
    doi: "10.1016/B978-0-443-32976-0.00011-4",
    type: "chapter" as const,
    openAccess: false,
    topics: ["Bitkisel Protein", "Et Analogları", "Gıda Uygulamaları"],
  },
  {
    id: "pub-2025-ai-nutrition",
    title:
      "AI-Driven Personalized Nutrition: Integrating Omics, Ethics, and Digital Health",
    authors: [
      "Mundt C.",
      "Yusufoğlu B.",
      "Kudenko D.",
      "Mertoğlu K.",
      "Esatbeyoglu T.",
    ],
    journal: "Molecular Nutrition and Food Research",
    year: 2025,
    volume: "69",
    issue: "24",
    pages: "e70293",
    doi: "10.1002/mnfr.70293",
    type: "review" as const,
    openAccess: true,
    citations: 14,
    topics: ["Yapay Zeka", "Kişiselleştirilmiş Beslenme", "Dijital Sağlık"],
  },
  {
    id: "pub-2025-banana-peel",
    title:
      "A green sustainable insight for waste management: Recycling of banana peel as a functional ingredient",
    authors: [
      "Kezer G.",
      "Yusufoğlu B.",
      "Namlı S.",
      "Zhao T.",
      "Ziora Z.M.",
      "Esatbeyoglu T.",
    ],
    journal: "Applied Food Research",
    year: 2025,
    volume: "5",
    issue: "2",
    pages: "101421",
    doi: "10.1016/j.afres.2025.101421",
    type: "article" as const,
    openAccess: true,
    citations: 1,
    topics: ["Sürdürülebilirlik", "Atık Yönetimi", "Fonksiyonel Gıda"],
  },
  {
    id: "pub-2025-anthocyanin",
    title:
      "Exploring the potential of anthocyanin-infused fermented beverages for sustainable health solutions",
    authors: [
      "Yusufoğlu B.",
      "Açar Y.",
      "Kezer G.",
      "Zargarchi S.",
      "Mertoğlu K.",
      "Esatbeyoglu T.",
    ],
    journal: "Future Foods",
    year: 2025,
    volume: "12",
    pages: "100708",
    doi: "10.1016/j.fufo.2025.100708",
    type: "review" as const,
    openAccess: true,
    citations: 1,
    topics: ["Antosiyanin", "Fermente Gıdalar", "Oksidatif Stres"],
  },
  {
    id: "pub-2025-coffee-bread",
    title: "Impact of coffee silver skin on toast bread properties",
    authors: [
      "Yusufoğlu B.",
      "Kezer G.",
      "Esatbeyoglu T.",
      "Franke K.",
      "Muoneke M.",
    ],
    journal: "Cereal Technology",
    year: 2025,
    doi: "",
    type: "article" as const,
    openAccess: false,
    topics: ["Fonksiyonel Gıdalar", "Gıda Kimyası", "Kahve"],
  },
  {
    id: "pub-2025-ages-altmetric",
    title:
      "Evaluation of the Altmetric Attention Score of Recent Hazard Food-Marker: Advanced Glycation End Products",
    authors: ["Yusufoğlu B."],
    journal: "Celal Bayar University Journal of Science",
    year: 2025,
    doi: "10.18466/cbayarfbe.1580554",
    type: "article" as const,
    openAccess: false,
    topics: ["AGEs", "İleri Glikasyon Son Ürünleri", "Gıda Güvenliği"],
  },
  {
    id: "pub-2025-quercetin",
    title:
      "Quercetin: Potential antidiabetic effects through enzyme inhibition and starch digestibility",
    authors: [
      "Yusufoğlu B.",
      "Kezer G.",
      "Çapanoğlu E.",
      "Köroğlu D.Ü.",
      "Esatbeyoglu T.",
      "Çatalkaya G.",
      "El-Aty A.M.A.",
    ],
    journal: "Food Safety and Health",
    year: 2025,
    volume: "3",
    issue: "1",
    pages: "14",
    doi: "10.1002/fsh3.12066",
    type: "review" as const,
    openAccess: false,
    topics: ["Kuersetin", "Antidiyabetik", "Enzim İnhibisyonu"],
  },
  {
    id: "pub-2025-alt-proteins",
    title: "Alternative proteins from plant-based foods",
    authors: ["Karabulut G.", "Günal Köroğlu D.", "Yusufoğlu B."],
    journal:
      "Sustainable Plant Foods: A Scientific Approach to Alternative Food Sources (Elsevier)",
    year: 2025,
    pages: "219-244",
    doi: "10.1016/B978-0-443-31652-4.00015-5",
    type: "chapter" as const,
    openAccess: false,
    topics: ["Alternatif Protein", "Bitkisel Gıda"],
  },
  {
    id: "pub-2024-coffee-grounds",
    title:
      "Bio-recycling of spent coffee grounds: Recent advances and potential applications",
    authors: [
      "Yusufoğlu B.",
      "Kezer G.",
      "Ziora Z.",
      "Esatbeyoglu T.",
      "Wang Y.",
    ],
    journal: "Current Opinion in Food Science",
    year: 2024,
    doi: "",
    type: "review" as const,
    openAccess: false,
    topics: ["Kahve Telvesi", "Biyogeri Dönüşüm", "Sürdürülebilirlik"],
  },
  {
    id: "pub-2022-phenylalanine",
    title:
      "Determination of L-Phenylalanine in Human Plasma Samples with New Fluorometric Method",
    authors: ["Karakuş E.", "Dede S.", "Sarı T.", "Yusufoğlu B."],
    journal: "Applied Biochemistry and Biotechnology",
    year: 2022,
    doi: "",
    type: "article" as const,
    openAccess: false,
    topics: ["Analitik Kimya", "Biyokimya", "Spektroskopi"],
  },
  {
    id: "pub-2022-bread-glycemic",
    title:
      "Glycemic evaluation of some breads from different countries via in vitro gastrointestinal enzymatic hydrolysis system",
    authors: ["Yusufoğlu B.", "Karakuş E.", "Yaman M."],
    journal: "Food Science Technology (Campinas)",
    year: 2022,
    doi: "10.1590/fst.34920",
    type: "article" as const,
    openAccess: false,
    topics: ["Glisemik İndeks", "Enzimatik Hidroliz", "Ekmek"],
  },
  {
    id: "pub-2021-turkish-breads",
    title:
      "In vitro enzymatic carbohydrate digestion and spectrophotometric glycemic indexes and glycemic loads determination of some turkish breads",
    authors: ["Yusufoğlu B.", "Yaman M.", "Karakuş E."],
    journal: "Progress in Nutrition",
    year: 2021,
    doi: "",
    type: "article" as const,
    openAccess: false,
    topics: ["Glisemik Yük", "Karbonhidrat Sindirimi", "Türk Ekmeği"],
  },
  {
    id: "pub-2020-indigenous-foods",
    title:
      "Enzymatic Hydrolysis and Glycemic Assessment of the Carbohydrates in Some Natural Turkish Indigenous Foodstuffs in Simulated Systems",
    authors: ["Yusufoğlu B.", "Yaman M.", "Karakuş E."],
    journal: "Sigma Journal of Engineering and Natural Sciences",
    year: 2020,
    doi: "",
    type: "article" as const,
    openAccess: false,
    topics: ["Analitik Kimya", "Biyokimya", "Glisemik Değerlendirme"],
  },
];

export const publications: Publication[] = rawPublications.map((p) => ({
  id: p.id,
  title: p.title,
  authors: p.authors,
  venue: p.journal,
  year: p.year,
  ...(p.doi ? { doi: p.doi } : {}),
  type: mapType(p.type),
  topics: p.topics,
  openAccess: p.openAccess,
  ...(p.citations !== undefined ? { citations: p.citations } : {}),
  ...(p.volume ? { volume: p.volume } : {}),
  ...(p.issue ? { issue: p.issue } : {}),
  ...(p.pages ? { pages: p.pages } : {}),
  highlight:
    (p.citations !== undefined && p.citations >= 10) ||
    p.id === "pub-2026-cold-plasma" ||
    p.id === "pub-2025-ages-altmetric",
}));

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
