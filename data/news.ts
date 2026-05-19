export type NewsCategory =
  | "Award"
  | "Publication"
  | "Conference"
  | "Lab News"
  | "Grant"
  | "Outreach";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  categoryTr?: string;
  excerpt: string;
  content: string;
  cover?: string;
}

const categoryMap: Record<string, NewsCategory> = {
  Proje: "Grant",
  Yayın: "Publication",
  Konferans: "Conference",
  "Lab Haberi": "Lab News",
};

const rawNews = [
  {
    slug: "tubitak-project-2025",
    title: "TÜBİTAK Projesi Başladı: Paketli Gıdalarda AGE Tespiti",
    date: "2025-04-25",
    category: "Proje",
    excerpt:
      "Dr. Yusufoğlu liderliğinde yeni TÜBİTAK projesi resmi olarak başladı. Proje 2028 yılına kadar sürecek.",
    content:
      "Paketli gıdalarda ileri glikasyon son ürünlerinin (AGEs) kimyasal ve yapay zeka destekli tespitine yönelik TÜBİTAK projesi Nisan 2025 itibarıyla başlamıştır.",
  },
  {
    slug: "mnfr-ai-nutrition-2025",
    title:
      "Yapay Zeka Destekli Kişiselleştirilmiş Beslenme Makalesi Yayımlandı",
    date: "2025-10-01",
    category: "Yayın",
    excerpt:
      "Molecular Nutrition & Food Research dergisinde yayımlanan makale 14 atıf aldı.",
    content:
      "Dr. Yusufoğlu ve ekibinin kaleme aldığı 'AI-Driven Personalized Nutrition' başlıklı derleme makalesi Molecular Nutrition & Food Research dergisinde yayımlanmış ve kısa sürede 14 atıf almıştır.",
  },
  {
    slug: "febs-congress-2025",
    title: "49. FEBS Kongresi'nde Bildiri Sunuldu",
    date: "2025-07-05",
    category: "Konferans",
    excerpt:
      "İstanbul'da düzenlenen 49. FEBS Kongresi'nde antosiyaninlerin AGEs-RAGE kompleksi üzerindeki inhibisyon kapasitesi sunuldu.",
    content:
      "Dr. Yusufoğlu, İstanbul'da gerçekleştirilen 49. FEBS Kongresi'nde 'Investigation of inhibition capacities of several anthocyanins on AGEs-RAGE complex by molecular docking' başlıklı çalışmasını sundu.",
  },
  {
    slug: "cold-plasma-2026",
    title: "Cold Plasma Araştırması Applied Food Research'te Yayımlandı",
    date: "2026-06-01",
    category: "Yayın",
    excerpt:
      "Golden milk'in besin ve antioksidan değerini artıran yeni soğuk plazma yaklaşımı açık erişim olarak yayımlandı.",
    content:
      "Dr. Yusufoğlu ve ortak yazarların kaleme aldığı rotasyonel soğuk plazma çalışması Applied Food Research dergisinde açık erişim olarak yayımlandı.",
  },
  {
    slug: "leibniz-hannover-2024",
    title: "Leibniz University Hannover'da Araştırma Ziyareti",
    date: "2024-01-01",
    category: "Lab Haberi",
    excerpt:
      "Dr. Yusufoğlu, Almanya'daki Leibniz University Hannover'da misafir araştırmacı olarak bulundu.",
    content:
      "Dr. Büşra Yusufoğlu, 2024 yılında Leibniz University Hannover'da misafir araştırmacı olarak uluslararası araştırma deneyimini genişletti.",
  },
];

export const news: NewsItem[] = rawNews.map((item) => ({
  slug: item.slug,
  title: item.title,
  date: item.date,
  category: categoryMap[item.category] ?? "Lab News",
  categoryTr: item.category,
  excerpt: item.excerpt,
  content: item.content,
}));
