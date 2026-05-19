export type MemberRole =
  | "Principal Investigator"
  | "Lab & Product Supply Team"
  | "AI Team"
  | "Collaborating Academic"
  | "Postdoctoral Researcher"
  | "PhD Student"
  | "MS Student"
  | "Undergraduate Researcher"
  | "Visiting Scholar";

export type TeamGroup = "pi" | "lab" | "ai" | "academic";

export interface TeamMemberRecord {
  id: string;
  name: string;
  role: string;
  roletr: string;
  team: TeamGroup;
  photo: string;
  topic?: string;
  institution?: string;
  isPI: boolean;
  isAlumni: boolean;
}

/** Canonical team roster (source of truth). */
export const teamMembersData: TeamMemberRecord[] = [
  {
    id: "pi-busra",
    name: "Dr. Büşra Yusufoğlu",
    role: "Principal Investigator",
    roletr: "Araştırma Grubu Lideri",
    team: "pi",
    photo: "/images/busra-yusufoglu.jpg",
    topic:
      "Gıda Kimyası, AGEs, Yapay Zeka Destekli Beslenme, Analitik Kimya",
    isPI: true,
    isAlumni: false,
  },
  {
    id: "academic-tuba",
    name: "Prof. Dr. Tuba Esatbeyoğlu",
    role: "Collaborating Academic",
    roletr: "İşbirlikçi Akademisyen",
    team: "academic",
    institution: "Leibniz University Hannover",
    photo: "/images/team/tuba-esatbeyoglu.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "academic-emine",
    name: "Dr. Öğr. Üyesi Emine Kazanç",
    role: "Collaborating Academic",
    roletr: "İşbirlikçi Akademisyen",
    team: "academic",
    institution: "Boğaziçi Üniversitesi",
    photo: "/images/team/emine-kazanc.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "academic-omer",
    name: "Dr. Öğr. Üyesi Ömer Faruk Tutar",
    role: "Collaborating Academic",
    roletr: "İşbirlikçi Akademisyen",
    team: "academic",
    institution: "İstinye Üniversitesi",
    photo: "/images/team/omer-faruk-tutar.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "academic-hakan",
    name: "Araş. Gör. Muhammed Hakan Yorulmuş",
    role: "Collaborating Academic",
    roletr: "İşbirlikçi Akademisyen",
    team: "academic",
    institution: "İstanbul Teknik Üniversitesi",
    photo: "/images/team/hakan-yorulmus.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "lab-yanki",
    name: "Yankı Başaran",
    role: "Lab & Product Supply Team",
    roletr: "Lab ve Ürün Tedarik Ekibi",
    team: "lab",
    photo: "/images/team/yanki-basaran.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "lab-yigit",
    name: "Yiğit Toraman",
    role: "Lab & Product Supply Team",
    roletr: "Lab ve Ürün Tedarik Ekibi",
    team: "lab",
    photo: "/images/team/yigit-toraman.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "lab-sukran",
    name: "Şükran Kaya",
    role: "Lab & Product Supply Team",
    roletr: "Lab ve Ürün Tedarik Ekibi",
    team: "lab",
    photo: "/images/team/sukran-kaya.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "ai-gulbahar",
    name: "Gülbahar Karakaş",
    role: "AI Team",
    roletr: "AI Ekibi",
    team: "ai",
    photo: "/images/team/gulbahar-karakas.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "ai-batuhan",
    name: "Batuhan Karakuş",
    role: "AI Team",
    roletr: "AI Ekibi",
    team: "ai",
    photo: "/images/team/batuhan-karakus.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "ai-emir",
    name: "Emir Sırmaoğlu",
    role: "AI Team",
    roletr: "AI Ekibi",
    team: "ai",
    photo: "/images/team/emir-sirmaoglu.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "ai-semih",
    name: "Semih Eroğlu",
    role: "AI Team",
    roletr: "AI Ekibi",
    team: "ai",
    photo: "/images/team/semih-eroglu.jpg",
    isPI: false,
    isAlumni: false,
  },
  {
    id: "ai-enes",
    name: "Muhammet Enes Pamukçu",
    role: "AI Team",
    roletr: "AI Ekibi",
    team: "ai",
    photo: "/images/team/muhammet-enes-pamukcu.jpg",
    isPI: false,
    isAlumni: false,
  },
];

export interface TeamMember {
  id?: string;
  name: string;
  role: MemberRole;
  roletr?: string;
  team?: TeamGroup;
  degree?: string;
  topic: string;
  institution?: string;
  startYear: number;
  endYear?: number;
  photo?: string;
  alumni: boolean;
  currentPosition?: string;
  email?: string;
  scholar?: string;
}

export function toLegacyMember(record: TeamMemberRecord): TeamMember {
  const pageRole: MemberRole =
    record.team === "lab"
      ? "Undergraduate Researcher"
      : record.team === "ai"
        ? "MS Student"
        : record.team === "academic"
          ? "Collaborating Academic"
          : (record.role as MemberRole);

  return {
    id: record.id,
    name: record.name,
    role: pageRole,
    roletr: record.roletr,
    team: record.team,
    degree: record.roletr,
    topic: record.topic ?? record.institution ?? record.roletr,
    institution: record.institution,
    startYear: 2024,
    photo: record.photo,
    alumni: record.isAlumni,
    email: record.isPI ? "yusufoglu@itu.edu.tr" : undefined,
  };
}

const piRecord = teamMembersData.find((m) => m.isPI)!;

export const pi: TeamMember = toLegacyMember(piRecord);

export const teamMembers: TeamMember[] = teamMembersData
  .filter((m) => !m.isPI && m.team !== "academic")
  .map(toLegacyMember);

/** Grouped sections for team page (use when page supports team-based layout). */
export const teamSections = [
  {
    key: "pi" as const,
    title: "Principal Investigator",
    titleTr: "Araştırma Grubu Lideri",
    members: teamMembersData.filter((m) => m.team === "pi"),
  },
  {
    key: "academic" as const,
    title: "Collaborating Academics",
    titleTr: "İşbirlikçi Akademisyenler",
    members: teamMembersData.filter((m) => m.team === "academic"),
  },
  {
    key: "lab" as const,
    title: "Lab & Product Supply Team",
    titleTr: "Lab ve Ürün Tedarik Ekibi",
    members: teamMembersData.filter((m) => m.team === "lab"),
  },
  {
    key: "ai" as const,
    title: "AI Team",
    titleTr: "AI Ekibi",
    members: teamMembersData.filter((m) => m.team === "ai"),
  },
];
