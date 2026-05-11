export const profile = {
  name: "Dr. Büşra Yusufoğlu",
  shortName: "Büşra Yusufoğlu",
  title: "Assistant Professor of Food Engineering",
  institution: "Istanbul Medipol University",
  department: "Department of Nutrition and Dietetics",
  faculty: "Faculty of Health Sciences",
  email: "busra.yusufoglu@example.edu.tr",
  phone: "+90 (212) 555 01 24",
  office: "Faculty of Health Sciences, Building B, Office 312",
  address: "Kavacık Mah. Ekinciler Cad. No:19, 34810 Beykoz, İstanbul, Türkiye",
  photo: "/images/profile.jpg",
  shortBio:
    "Food scientist studying how plant-based bioactive compounds shape human health — from bench-scale chemistry to dietary patterns.",
  bio: `Dr. Büşra Yusufoğlu is an Assistant Professor in the Department of Nutrition and Dietetics at Istanbul Medipol University, where she leads the Functional Foods & Nutritional Biochemistry research group. Her work sits at the intersection of food chemistry, bioavailability, and public health nutrition, with a particular focus on polyphenols, dietary fibers, and the gut–metabolic axis.

She received her Ph.D. in Food Engineering from Istanbul Technical University in 2019, after a research stay at Wageningen University & Research investigating in vitro digestion models. Her group combines analytical chemistry (LC-MS/MS, HPLC-DAD), cell-based assays, and human dietary intervention studies to evaluate how food matrix design influences the absorption, metabolism, and physiological impact of bioactive compounds.

Beyond the lab, she is committed to translating food-science evidence into actionable guidance for clinicians, policymakers, and the broader public. She mentors graduate and undergraduate students, contributes to TÜBİTAK and Horizon Europe research consortia, and serves as a reviewer for journals including Food Chemistry, Food Research International, and Nutrients.`,
  mission:
    "We design, characterize, and clinically evaluate functional food strategies that improve metabolic health across the lifespan — with a particular focus on Mediterranean and Anatolian dietary traditions.",
  scholar: "https://scholar.google.com/",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  researchGate: "https://www.researchgate.net/",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com/",
  github: "https://github.com/",
  stats: [
    { label: "Peer-Reviewed Publications", value: 12, suffix: "+" },
    { label: "Active Research Projects", value: 8 },
    { label: "Students Mentored", value: 15, suffix: "+" },
  ],
  researchAreas: [
    {
      name: "Functional Foods & Bioactives",
      tags: [
        "Polyphenols",
        "Dietary fibers",
        "Antioxidants",
        "Plant-based proteins",
        "In vitro digestion",
        "Bioavailability",
      ],
    },
    {
      name: "Nutritional Biochemistry & Public Health",
      tags: [
        "Gut microbiota",
        "Metabolic health",
        "Mediterranean diet",
        "Clinical nutrition",
        "Food matrix design",
        "Glycemic response",
      ],
    },
  ],
};

export type Profile = typeof profile;
