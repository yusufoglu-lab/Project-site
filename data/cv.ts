import { education as educationRaw, positions as positionsRaw } from "./education";

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

export const education: EducationEntry[] = educationRaw.map((e) => ({
  degree: e.degree,
  field: e.field,
  institution: e.institution,
  location: "İstanbul, Türkiye",
  year: e.year,
}));

function parsePositionYears(year: string): {
  startYear: number;
  endYear?: number;
} {
  const years = year.match(/\d{4}/g);
  if (!years || years.length === 0) {
    return { startYear: new Date().getFullYear() };
  }
  const startYear = Number(years[0]);
  if (
    year.toLowerCase().includes("günümüz") ||
    year.toLowerCase().includes("present")
  ) {
    return { startYear };
  }
  const endYear =
    years.length > 1 ? Number(years[years.length - 1]) : Number(years[0]);
  return { startYear, endYear };
}

function locationForInstitution(institution: string): string {
  if (institution.includes("Hannover")) return "Hannover, Almanya";
  if (institution.includes("Connecticut")) return "Connecticut, ABD";
  return "İstanbul, Türkiye";
}

export const positions: PositionEntry[] = positionsRaw.map((p) => {
  const { startYear, endYear } = parsePositionYears(p.year);
  return {
    title: p.title,
    institution: p.institution,
    location: locationForInstitution(p.institution),
    startYear,
    endYear,
  };
});

export const awards: AwardEntry[] = [
  {
    title: "Misafir Araştırmacı",
    organization: "Leibniz University Hannover",
    year: 2024,
    detail: "Uluslararası araştırma ziyareti.",
  },
  {
    title: "Araştırmacı",
    organization: "University of Connecticut",
    year: 2021,
    detail: "Uluslararası araştırma deneyimi.",
  },
];

export const grants: GrantEntry[] = [
  {
    title:
      "Paketli Gıdalarda İleri Glikasyon Ürünlerinin Tespiti: Kimyasal Analiz ve Yapay Zeka Algoritması",
    agency: "TÜBİTAK",
    role: "PI",
    years: "2025–2028",
  },
  {
    title:
      "İşlenmiş Gıdalarda Alfa-Oksaldehit Miktarlarından Bilgisayar Algoritmalarının Oluşturulması",
    agency: "BAP (İTÜ)",
    role: "PI",
    years: "2023–2025",
  },
];

export const service: ServiceEntry[] = [
  {
    role: "Hakem",
    organization:
      "Food Chemistry, Applied Food Research, Molecular Nutrition and Food Research, Future Foods ve ilgili dergiler",
    years: "2020–günümüz",
  },
  {
    role: "Akademik Profil",
    organization: "İTÜ Akademi · İTÜ Araştırma Portalı",
    years: "2023–günümüz",
  },
];

export const memberships: string[] = [
  "İstanbul Teknik Üniversitesi Kimya Bölümü",
  "ORCID: 0000-0002-9158-9732",
  "Scopus Author ID: 57217383122",
];
