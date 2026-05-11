export interface Course {
  code: string;
  name: string;
  semester: string;
  level: "Undergraduate" | "Graduate";
  description: string;
  syllabus?: string;
  credits: number;
}

export const currentCourses: Course[] = [
  {
    code: "NUT 304",
    name: "Functional Foods & Nutraceuticals",
    semester: "Spring 2025",
    level: "Undergraduate",
    description:
      "Bioactive compounds in foods, mechanisms of action, regulatory frameworks, and the design of evidence-based functional products. Includes a semester-long product design project.",
    credits: 3,
  },
  {
    code: "NUT 511",
    name: "Advanced Nutritional Biochemistry",
    semester: "Fall 2024",
    level: "Graduate",
    description:
      "Graduate seminar on macronutrient and micronutrient metabolism, the gut–metabolic axis, and contemporary methods in nutritional biochemistry, including stable isotope tracers and metabolomics.",
    credits: 3,
  },
  {
    code: "NUT 412",
    name: "Research Methods in Nutrition Science",
    semester: "Spring 2025",
    level: "Undergraduate",
    description:
      "Study design, critical appraisal, and statistical reasoning for nutritional epidemiology and dietary intervention trials. Strong emphasis on reproducible analysis workflows.",
    credits: 3,
  },
];

export const pastCourses: Course[] = [
  {
    code: "NUT 201",
    name: "Introduction to Nutrition Science",
    semester: "Fall 2023",
    level: "Undergraduate",
    description: "Foundational survey of human nutrition for first-year students.",
    credits: 3,
  },
  {
    code: "FE 305",
    name: "Food Chemistry I",
    semester: "Fall 2022",
    level: "Undergraduate",
    description: "Chemistry of major food components: water, carbohydrates, proteins, lipids.",
    credits: 4,
  },
  {
    code: "NUT 408",
    name: "Public Health Nutrition",
    semester: "Spring 2022",
    level: "Undergraduate",
    description: "Population-level nutrition, dietary guidelines, and policy.",
    credits: 3,
  },
];

export const teachingPhilosophy = `Teaching nutrition science is, for me, an exercise in helping students hold two ideas at once: that food is a beautifully complex chemical system, and that what people eat is shaped — daily and decisively — by culture, geography, income, and time. My courses are built around three commitments. First, evidence: students learn to read primary literature critically and to design studies that could meaningfully change clinical or policy practice. Second, craft: in the lab and in the classroom, students practice the analytical and statistical techniques modern nutrition research demands. Third, humility: we make room for the limits of what current science can claim, and for the lived expertise of cooks, farmers, and patients. Every course I teach includes a project in which students translate a research question into a deliverable that a non-specialist audience can actually use.`;
