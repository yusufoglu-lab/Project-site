export type MemberRole =
  | "Principal Investigator"
  | "Postdoctoral Researcher"
  | "PhD Student"
  | "MS Student"
  | "Undergraduate Researcher"
  | "Visiting Scholar";

export interface TeamMember {
  name: string;
  role: MemberRole;
  degree?: string;
  topic: string;
  startYear: number;
  endYear?: number;
  photo?: string;
  alumni: boolean;
  currentPosition?: string;
  email?: string;
  scholar?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Elif Kaya",
    role: "PhD Student",
    degree: "Ph.D. in Food Engineering",
    topic:
      "Polyphenol bioavailability and gut microbial transformation in Anatolian fruits",
    startYear: 2023,
    alumni: false,
    photo: "/images/team/elif-kaya.jpg",
    email: "elif.kaya@example.edu.tr",
  },
  {
    name: "Mert Aslan",
    role: "PhD Student",
    degree: "Ph.D. in Nutrition Science",
    topic:
      "Reformulation of Turkish staples for improved postprandial glycemic response",
    startYear: 2022,
    alumni: false,
    photo: "/images/team/mert-aslan.jpg",
  },
  {
    name: "Furkan Şahin",
    role: "PhD Student",
    degree: "Ph.D. in Food Engineering",
    topic:
      "Metagenomics of artisanal kefir and tarhana starter cultures",
    startYear: 2024,
    alumni: false,
    photo: "/images/team/furkan-sahin.jpg",
  },
  {
    name: "Zeynep Demir",
    role: "MS Student",
    degree: "M.Sc. in Nutrition and Dietetics",
    topic:
      "Spray-drying encapsulation of rosehip phenolics in pectin–whey matrices",
    startYear: 2024,
    alumni: false,
    photo: "/images/team/zeynep-demir.jpg",
  },
  {
    name: "Ayşe Yıldız",
    role: "MS Student",
    degree: "M.Sc. in Food Engineering",
    topic:
      "Sensory–glycemic trade-offs in legume-enriched Turkish breads",
    startYear: 2023,
    alumni: false,
    photo: "/images/team/ayse-yildiz.jpg",
  },
  {
    name: "Selin Tekin",
    role: "MS Student",
    degree: "M.Sc. in Public Health Nutrition",
    topic:
      "Continuous glucose monitoring in free-living Turkish adults",
    startYear: 2024,
    alumni: false,
    photo: "/images/team/selin-tekin.jpg",
  },
  {
    name: "Can Polat",
    role: "Undergraduate Researcher",
    degree: "B.Sc. in Nutrition and Dietetics",
    topic:
      "Analytical method development for ellagitannin metabolites",
    startYear: 2024,
    alumni: false,
    photo: "/images/team/can-polat.jpg",
  },
  {
    name: "Naz Öztürk",
    role: "Undergraduate Researcher",
    degree: "B.Sc. in Food Engineering",
    topic:
      "Texture and acceptance of extruded chickpea–lentil school snacks",
    startYear: 2024,
    alumni: false,
    photo: "/images/team/naz-ozturk.jpg",
  },
  // Alumni
  {
    name: "Dr. Kerim Bostan",
    role: "Postdoctoral Researcher",
    degree: "Ph.D. in Food Engineering",
    topic: "Thermal processing of anthocyanin-rich vegetables",
    startYear: 2020,
    endYear: 2022,
    alumni: true,
    currentPosition:
      "Senior R&D Scientist, Ülker Bisküvi (Istanbul, Türkiye)",
    photo: "/images/team/kerim-bostan.jpg",
  },
  {
    name: "Dr. Ece Aydın",
    role: "PhD Student",
    degree: "Ph.D. in Food Engineering",
    topic: "Phenolic profile of Turkish wheat landraces",
    startYear: 2018,
    endYear: 2023,
    alumni: true,
    currentPosition:
      "Assistant Professor, Bursa Uludağ University (Türkiye)",
    photo: "/images/team/ece-aydin.jpg",
  },
  {
    name: "Burak Çelik",
    role: "MS Student",
    degree: "M.Sc. in Food Engineering",
    topic: "Antioxidant retention in dried Anatolian fruit snacks",
    startYear: 2021,
    endYear: 2023,
    alumni: true,
    currentPosition:
      "Product Development Engineer, Eti Gıda (Eskişehir, Türkiye)",
  },
];

export const pi: TeamMember = {
  name: "Dr. Büşra Yusufoğlu",
  role: "Principal Investigator",
  degree: "Ph.D. in Food Engineering",
  topic: "Functional foods, bioactive compounds, and gut–metabolic health",
  startYear: 2020,
  alumni: false,
  photo: "/images/profile.jpg",
  email: "busra.yusufoglu@example.edu.tr",
};
