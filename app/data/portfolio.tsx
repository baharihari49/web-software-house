// data.ts
import { PortfolioItemType } from "@/app/type/portfolio";

export const portfolioItems: PortfolioItemType[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Website e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
    image: "/images/portfolio/project1.jpg",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    category: "Web Development",
    client: "InStore Indonesia",
    completion: "Desember 2023",
    status: "Completed",
    link: "https://example.com",
    achievements: ["30% peningkatan konversi", "Waktu loading 50% lebih cepat"]
  },
  {
    id: 2,
    title: "Company Profile",
    description: "Website company profile modern dan responsif untuk perusahaan manufaktur.",
    image: "/images/portfolio/project2.jpg",
    tags: ["React", "Tailwind CSS", "GSAP"],
    category: "Web Design",
    client: "PT Maju Bersama",
    completion: "Oktober 2023",
    status: "Completed",
    achievements: ["100% responsif di semua perangkat", "95/100 skor PageSpeed"]
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Aplikasi mobile untuk manajemen inventaris dengan fitur scanning barcode dan notifikasi stok.",
    image: "/images/portfolio/project3.jpg",
    tags: ["React Native", "Firebase", "Node.js"],
    category: "Mobile App",
    client: "LogisTech",
    completion: "Januari 2024",
    status: "Completed",
    link: "https://example.com/app",
    achievements: ["Adopsi 5000+ pengguna", "Efisiensi inventaris meningkat 40%"]
  },
  {
    id: 4,
    title: "CRM System",
    description: "Sistem manajemen hubungan pelanggan yang dibangun khusus untuk perusahaan jasa.",
    image: "/images/portfolio/project4.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "Web Application",
    client: "ServicePro",
    completion: "Februari 2024",
    status: "In Progress",
    achievements: ["Integrasi dengan 5 platform", "Dashboard real-time"]
  },
  {
    id: 5,
    title: "LMS Platform",
    description: "Platform pembelajaran online dengan fitur kursus, quiz, dan sertifikasi untuk lembaga pendidikan.",
    image: "/images/portfolio/project5.jpg",
    tags: ["React", "Express.js", "MongoDB"],
    category: "Web Application",
    client: "EduTech Institute",
    completion: "November 2023",
    status: "Maintenance",
    link: "https://example.com/lms",
    achievements: ["10,000+ pengguna aktif", "Integrasi pembayaran multi-channel"]
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Dashboard analytics real-time untuk monitoring dan visualisasi data bisnis.",
    image: "/images/portfolio/project6.jpg",
    tags: ["Next.js", "shadcn/ui", "D3.js"],
    category: "Data Visualization",
    client: "DataInsight Corp",
    completion: "Maret 2024",
    status: "Completed",
    achievements: ["Visualisasi 15+ sumber data", "Pengurangan waktu analisis 60%"]
  },
  {
    id: 7,
    title: "Booking System",
    description: "Sistem reservasi online untuk hotel dan villa dengan integrasi payment gateway dan calendar sync.",
    image: "/images/portfolio/project7.jpg",
    tags: ["React", "Node.js", "MySQL"],
    category: "Web Application",
    client: "Paradise Resorts",
    completion: "Maret 2023",
    status: "Completed",
    link: "https://example.com/booking",
    achievements: ["85% peningkatan booking online", "Otomatisasi 95% proses reservasi"]
  },
  {
    id: 8,
    title: "Travel Blog",
    description: "Blog perjalanan dengan fitur content management system dan optimasi SEO untuk travel blogger.",
    image: "/images/portfolio/project8.jpg",
    tags: ["WordPress", "PHP", "JavaScript"],
    category: "Web Design",
    client: "Explore Indonesia",
    completion: "Juli 2023",
    status: "Completed",
    achievements: ["Peningkatan trafik organik 120%", "Pengurangan bounce rate 25%"]
  },
  {
    id: 9,
    title: "Inventory Management System",
    description: "Aplikasi manajemen inventaris berbasis web untuk distributor dengan fitur tracking dan pelaporan.",
    image: "/images/portfolio/project9.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"],
    category: "Web Application",
    client: "PT Distribusi Utama",
    completion: "April 2023",
    status: "Completed",
    achievements: ["50% pengurangan kesalahan stok", "Efisiensi waktu proses 75%"]
  },
  {
    id: 10,
    title: "Financial Dashboard",
    description: "Dashboard keuangan untuk tracking cash flow dan visualisasi data finansial bisnis.",
    image: "/images/portfolio/project10.jpg",
    tags: ["React", "D3.js", "Express"],
    category: "Data Visualization",
    client: "FinanceTrack Corp",
    completion: "Mei 2024",
    status: "In Progress",
    achievements: ["Integrasi dengan 3 sistem perbankan", "Visualisasi real-time"]
  },
  {
    id: 11,
    title: "Restaurant Website",
    description: "Website interaktif untuk restoran dengan fitur menu digital, reservasi online, dan gallery showcase.",
    image: "/images/portfolio/project11.jpg",
    tags: ["Next.js", "Tailwind CSS", "Strapi CMS"],
    category: "Web Design",
    client: "Spice Garden Restaurant",
    completion: "Januari 2023",
    status: "Completed",
    link: "https://example.com/restaurant",
    achievements: ["35% peningkatan reservasi online", "90/100 skor PageSpeed"]
  },
  {
    id: 12,
    title: "Healthcare App",
    description: "Aplikasi kesehatan untuk monitoring kondisi pasien dan konsultasi dokter online.",
    image: "/images/portfolio/project12.jpg",
    tags: ["Flutter", "Firebase", "Node.js"],
    category: "Mobile App",
    client: "MediHealth",
    completion: "Juni 2023",
    status: "Completed",
    achievements: ["10,000+ unduhan di Play Store", "4.8/5 rating pengguna"]
  }
];

// Function to get a specific number of items (for homepage display)
export const getLimitedPortfolioItems = (limit: number = 6): PortfolioItemType[] => {
  return portfolioItems.slice(0, limit);
};

export const getUniqueCategories = (): string[] => {
  return ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
};

export const getStats = () => {
  const totalProjects = portfolioItems.length;
  const completedProjects = portfolioItems.filter(item => item.status === "Completed").length;
  const uniqueClients = new Set(portfolioItems.map(item => item.client)).size;
  const categories = new Set(portfolioItems.map(item => item.category)).size;
  
  return {
    totalProjects,
    completedProjects,
    uniqueClients,
    categories
  };
};