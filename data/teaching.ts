export interface Course {
  code: string;
  name: string;
  nameEn?: string;
  semester: string;
  level: "Undergraduate" | "Graduate";
  description: string;
  syllabus?: string;
  credits: number;
  isCurrent?: boolean;
}

const rawCourses = [
  {
    code: "KIM",
    name: "Gıda Kimyası",
    nameEn: "Food Chemistry",
    semester: "Güncellenmeli",
    level: "Lisans",
    description:
      "Gıda bileşenlerinin kimyasal yapısı, özellikleri ve gıda işleme süreçlerindeki değişimler.",
    isCurrent: true,
  },
  {
    code: "KIM",
    name: "Analitik Kimya",
    nameEn: "Analytical Chemistry",
    semester: "Güncellenmeli",
    level: "Lisans",
    description:
      "Analitik yöntemler, spektroskopi, kromatografi ve modern analiz teknikleri.",
    isCurrent: true,
  },
];

function mapLevel(level: string): Course["level"] {
  return level === "Lisans" || level === "Undergraduate"
    ? "Undergraduate"
    : "Graduate";
}

export const courses: Course[] = rawCourses.map((c) => ({
  code: c.code,
  name: c.name,
  nameEn: c.nameEn,
  semester: c.semester,
  level: mapLevel(c.level),
  description: c.description,
  credits: 3,
  isCurrent: c.isCurrent,
}));

export const currentCourses: Course[] = courses.filter((c) => c.isCurrent);

export const pastCourses: Course[] = courses.filter((c) => !c.isCurrent);

export const teachingPhilosophy = `Kimya ve gıda bilimini öğretirken öğrencilerin hem moleküler düzeydeki süreçleri hem de bu bilginin gıda güvenliği, fonksiyonel gıdalar ve kamu sağlığına nasıl aktarıldığını birlikte görmelerini hedefliyorum. Derslerimde analitik düşünme, literatür okuma ve veriye dayalı karar verme becerilerini ön planda tutuyor; öğrencilerin teori ile uygulamayı bir arada deneyimlemelerini sağlıyorum.`;
