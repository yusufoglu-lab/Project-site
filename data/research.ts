export type ProjectStatus = "Active" | "Ongoing" | "Completed" | "Planned";

export interface ResearchProject {
  slug: string;
  title: string;
  titleEn?: string;
  shortDescription: string;
  description: string;
  area: "Functional Foods" | "Nutritional Biochemistry" | "Public Health";
  status: ProjectStatus;
  startYear: number;
  endYear?: number;
  funding: string;
  questions: string[];
  methods: string[];
  team: string[];
  relatedPublicationDois: string[];
  topics?: string[];
  cover?: string;
}

export const projects = [
  {
    slug: "ages-tubitak",
    title:
      "Paketli Gıdalarda İleri Glikasyon Ürünlerinin Tespiti: Kimyasal Analiz ve Yapay Zeka Algoritması",
    titleEn:
      "Detection of Advanced Glycation End Products in Packaged Foods via Chemical Analysis and AI Algorithms",
    status: "active",
    funder: "TÜBİTAK",
    period: "Nisan 2025 – Nisan 2028",
    description:
      "Yaygın olarak tüketilen paketli gıdalardaki ileri glikasyon son ürünleri (AGEs) ve öncülleri hem kimyasal analiz yöntemleriyle hem de geliştirilen yapay zeka algoritması aracılığıyla tespit edilmekte ve kapsamlı bir veri tabanı oluşturulmaktadır.",
    questions: [
      "Paketli gıdalardaki AGE miktarları ne düzeydedir?",
      "Yapay zeka algoritmaları AGE tespitinde ne kadar güvenilirdir?",
      "Oluşturulacak veri tabanı gıda güvenliği politikalarına nasıl katkı sağlar?",
    ],
    topics: ["AGEs", "Yapay Zeka", "Gıda Güvenliği", "Analitik Kimya"],
  },
  {
    slug: "alpha-oxoaldehydes-bap",
    title:
      "İşlenmiş Gıdalarda Alfa-Oksaldehit Miktarlarından Bilgisayar Algoritmalarının Oluşturulması",
    titleEn:
      "Development of Computer Algorithms from Alpha-Oxoaldehyde Quantities in Processed Foods",
    status: "completed",
    funder: "BAP (İTÜ)",
    period: "Eylül 2023 – Ocak 2025",
    description:
      "İşlenmiş gıdalarda tespit edilen alfa-oksaldehit miktarları kullanılarak bilgisayar algoritmaları geliştirilmiş; gıda güvenliği değerlendirmesi için yenilikçi bir hesaplamalı yaklaşım ortaya konmuştur.",
    questions: [
      "Alfa-oksaldehitler işlenmiş gıdalarda ne sıklıkla tespit edilir?",
      "Bu verilerden anlamlı bilgisayar algoritmaları üretilebilir mi?",
    ],
    topics: [
      "Alfa-Oksaldehitler",
      "Bilgisayar Algoritmaları",
      "İşlenmiş Gıdalar",
    ],
  },
] as const;

function mapStatus(status: string): ProjectStatus {
  if (status === "active") return "Active";
  if (status === "completed") return "Completed";
  if (status === "ongoing") return "Ongoing";
  return "Planned";
}

function parsePeriod(period: string): { startYear: number; endYear?: number } {
  const years = period.match(/\d{4}/g);
  if (!years || years.length === 0) return { startYear: new Date().getFullYear() };
  const startYear = Number(years[0]);
  const endYear =
    period.toLowerCase().includes("günümüz") ||
    period.toLowerCase().includes("present")
      ? undefined
      : years.length > 1
        ? Number(years[years.length - 1])
        : Number(years[0]);
  return { startYear, endYear };
}

const activeTeam = [
  "Gülbahar Karakaş",
  "Batuhan Karakuş",
  "Emir Sırmaoğlu",
  "Semih Eroğlu",
  "Muhammet Enes Pamukçu",
  "Yankı Başaran",
  "Yiğit Toraman",
  "Şükran Kaya",
];

export const researchProjects: ResearchProject[] = projects.map((p) => {
  const { startYear, endYear } = parsePeriod(p.period);
  return {
    slug: p.slug,
    title: p.title,
    titleEn: p.titleEn,
    shortDescription: p.description,
    description: p.description,
    area: "Functional Foods" as const,
    status: mapStatus(p.status),
    startYear,
    endYear,
    funding: `${p.funder} · ${p.period}`,
    questions: [...p.questions],
    methods: [
      ...p.topics,
      "Kimyasal analiz ve spektroskopik yöntemler",
      "Yapay zeka ve hesaplamalı modelleme",
    ],
    team: p.status === "active" ? activeTeam : [],
    relatedPublicationDois:
      p.slug === "ages-tubitak"
        ? [
            "10.18466/cbayarfbe.1580554",
            "10.1002/mnfr.70293",
            "10.1016/j.fufo.2025.100708",
          ]
        : ["10.18466/cbayarfbe.1580554"],
    topics: [...p.topics],
  };
});

export const researchAreas = [
  "All",
  "Functional Foods",
  "Nutritional Biochemistry",
  "Public Health",
] as const;
