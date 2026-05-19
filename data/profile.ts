export const profile = {
  name: "Dr. Büşra Yusufoğlu",
  shortName: "Büşra Yusufoğlu",
  title: "Doktor Öğretim Üyesi",
  titleEn: "Assistant Professor",
  department: "Kimya Bölümü",
  faculty: "Fen-Edebiyat Fakültesi",
  institution: "İstanbul Teknik Üniversitesi (İTÜ)",
  email: "yusufoglu@itu.edu.tr",
  emailAlt: "drbusrayusufoglu@gmail.com",
  phone: "+90 (212) 285 30 00",
  office:
    "İTÜ Ayazağa Kampüsü, Kimya Bölümü, 34469 Maslak, İstanbul, Türkiye",
  address:
    "İTÜ Ayazağa Kampüsü, Kimya Bölümü, 34469 Maslak, İstanbul, Türkiye",
  photo: "/images/busra-yusufoglu.jpg",
  shortBio:
    "İTÜ Kimya Bölümü'nde Doktor Öğretim Üyesi; araştırmaları ileri glikasyon son ürünleri (AGEs), fonksiyonel gıdalar, gıda ve analitik kimya ile yapay zeka destekli beslenme bilimi üzerine odaklanmaktadır.",
  bio: `Dr. Büşra Yusufoğlu, İstanbul Teknik Üniversitesi Kimya Bölümü'nde Doktor Öğretim Üyesi olarak görev yapmaktadır. Araştırmaları; ileri glikasyon son ürünleri (AGEs), fonksiyonel gıdalar, gıda kimyası, analitik kimya ve yapay zeka destekli beslenme bilimi üzerine yoğunlaşmaktadır. Yurt içinde ve yurt dışında çok sayıda araştırma deneyimi bulunan Dr. Yusufoğlu, University of Connecticut (2021) ve Leibniz University Hannover (2024) gibi prestijli kurumlarda misafir araştırmacı olarak çalışmıştır.`,
  mission:
    "Paketli ve işlenmiş gıdalardaki ileri glikasyon son ürünlerini (AGEs) kimyasal analiz ve yapay zeka algoritmalarıyla tespit ederek gıda güvenliği ve fonksiyonel gıda araştırmalarına katkı sağlıyoruz.",
  scholar:
    "https://scholar.google.com.tr/citations?user=Büşra",
  orcid: "https://orcid.org/0000-0002-9158-9732",
  researchGate: "https://www.researchgate.net/profile/Busra-Yusufoglu",
  linkedin: "https://www.linkedin.com/in/büşra-yusufoğlu-01294831a/",
  twitter: "https://research.itu.edu.tr/tr/persons/yusufoglu/",
  github: "https://akademi.itu.edu.tr/yusufoglu/",
  stats: [
    { label: "Yayın", value: 17, suffix: undefined },
    { label: "Atıf", value: 113, suffix: undefined },
    { label: "h-indeks", value: 6, suffix: undefined },
    { label: "Aktif Proje", value: 2, suffix: undefined },
  ] as Array<{ label: string; value: number; suffix?: string }>,
  researchAreas: [
    {
      name: "Gıda Kimyası & Analitik",
      tags: [
        "İleri Glikasyon Son Ürünleri (AGEs)",
        "Gıda Kimyası",
        "Analitik Kimya",
        "Biyokimya",
        "Antioksidan Bileşikler",
        "Enzimatik Hidroliz",
      ],
    },
    {
      name: "Fonksiyonel Gıdalar & Yapay Zeka",
      tags: [
        "Fonksiyonel Gıdalar",
        "Gıda Teknolojileri",
        "Yapay Zeka Destekli Beslenme",
        "Sürdürülebilir Gıda Sistemleri",
      ],
    },
  ],
  links: {
    googleScholar:
      "https://scholar.google.com.tr/citations?user=Büşra",
    orcid: "https://orcid.org/0000-0002-9158-9732",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57217383122",
    webOfScience:
      "https://www.webofscience.com/wos/author/record/ABI-3910-2020",
    researchGate: "https://www.researchgate.net/profile/Busra-Yusufoglu",
    linkedin: "https://www.linkedin.com/in/büşra-yusufoğlu-01294831a/",
    ituAkademi: "https://akademi.itu.edu.tr/yusufoglu/",
    ituResearch: "https://research.itu.edu.tr/tr/persons/yusufoglu/",
  },
};

export type Profile = typeof profile;
