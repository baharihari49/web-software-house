import {
    Globe,
    Smartphone,
    Monitor,
    Palette,
    Server,
    Search,
  } from "lucide-react";
  import { ReactNode } from "react";
  import { WebsiteDevelopment } from "@/components/sections/services/image/website-development";
  import { MobileApp } from "@/components/sections/services/image/mobile-app";
  import { SoftwareDev } from "@/components/sections/services/image/software-dev";
  import { UiUxDesignt } from "@/components/sections/services/image/ux-designt";
  import { WebHosting } from "@/components/sections/services/image/web-hosting";
  import { Seo } from "@/components/sections/services/image/seo";
  
  export interface Service {
    id: number;
    title: string;
    tagline?: string;
    description: string;
    icon: ReactNode;
    features: string[];
    color?: string;
    lightColor?: string;
    textColor?: string;
    borderColor?: string;
    accentColor?: string;
    image?: ReactNode | string;
    stats?: {
      projects: number;
      clients: number;
      satisfaction: number;
    };
  }
  
  export interface ServiceCategory {
    id: string;
    name: string;
    services?: number[];
  }
  
  // Service data
  export const services: Service[] = [
    {
      id: 1,
      title: "Website Development",
      tagline: "Buat kehadiran online yang menarik",
      description: "Kami membangun website responsif yang menarik, cepat, dan user-friendly menggunakan teknologi terkini seperti Next.js dan Tailwind CSS.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      lightColor: "bg-blue-50",
      accentColor: "bg-blue-500",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: <WebsiteDevelopment/>,
      stats: { projects: 85, clients: 42, satisfaction: 98 },
      features: [
        "Company Profile Profesional",
        "E-commerce dengan Payment Gateway",
        "Landing Page Konversi Tinggi",
        "Web Application Responsif",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      tagline: "Aplikasi mobile untuk kebutuhan modern",
      description: "Kembangkan aplikasi mobile yang menarik dan fungsional untuk Android dan iOS dengan teknologi terkini yang optimal untuk performa dan UI/UX terbaik.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-purple-500 to-fuchsia-600",
      lightColor: "bg-purple-50",
      accentColor: "bg-purple-500",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      image: <MobileApp/>,
      stats: { projects: 67, clients: 38, satisfaction: 97 },
      features: [
        "Native Apps (Android & iOS)",
        "Cross-platform Apps (React Native)",
        "Progressive Web Apps (PWA)",
        "App Maintenance & Support",
      ],
    },
    {
      id: 3,
      title: "Custom Software Development",
      tagline: "Solusi khusus untuk kebutuhan bisnis",
      description: "Kami membangun solusi software khusus yang sesuai dengan kebutuhan bisnis Anda untuk meningkatkan efisiensi dan produktivitas dengan fitur yang tepat guna.",
      icon: <Monitor className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      lightColor: "bg-emerald-50",
      accentColor: "bg-emerald-500",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      image: <SoftwareDev/>,
      stats: { projects: 52, clients: 31, satisfaction: 99 },
      features: [
        "Enterprise Software & Integrasi API",
        "ERP & CRM Systems Terintegrasi",
        "Inventory Management Realtime",
        "Workflow Automation Khusus",
      ],
    },
    {
      id: 4,
      title: "UI/UX Design",
      tagline: "Desain yang memikat dan fungsional",
      description: "Kami menciptakan desain yang menarik dan user-friendly untuk meningkatkan pengalaman pengguna dan konversi dengan pendekatan berbasis riset.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      accentColor: "bg-amber-500",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      image: <UiUxDesignt/>,
      stats: { projects: 94, clients: 45, satisfaction: 98 },
      features: [
        "User Experience Research & Testing",
        "Wire-framing & Interactive Prototyping",
        "Responsive Design Multi-platform",
        "Usability Testing & Iterasi",
      ],
    },
    {
      id: 5,
      title: "Web Hosting & Maintenance",
      tagline: "Performa dan keamanan terjamin",
      description: "Kami menawarkan layanan hosting yang handal dan pemeliharaan website untuk memastikan website Anda selalu online, aman, dan terperbarui.",
      icon: <Server className="h-6 w-6" />,
      color: "from-sky-500 to-cyan-600",
      lightColor: "bg-sky-50",
      accentColor: "bg-sky-500",
      textColor: "text-sky-600",
      borderColor: "border-sky-200",
      image: <WebHosting/>,
      stats: { projects: 115, clients: 64, satisfaction: 100 },
      features: [
        "Managed Cloud Hosting Performa Tinggi",
        "Regular Updates & Automated Backups",
        "Security Monitoring & Firewall 24/7",
        "Performance Optimization & CDN",
      ],
    },
    {
      id: 6,
      title: "SEO & Digital Marketing",
      tagline: "Tingkatkan visibilitas dan konversi",
      description: "Tingkatkan visibilitas online dan tingkatkan traffic website Anda dengan strategi SEO dan digital marketing yang efektif berdasarkan data dan analitik.",
      icon: <Search className="h-6 w-6" />,
      color: "from-rose-500 to-pink-600",
      lightColor: "bg-rose-50",
      accentColor: "bg-rose-500",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      image: <Seo/>,
      stats: { projects: 78, clients: 49, satisfaction: 97 },
      features: [
        "On-page & Off-page SEO Optimization",
        "Content Marketing & Strategy",
        "Social Media Strategy & Management",
        "Google Ads & Meta Ads Management",
      ],
    },
  ];
  
  // Categorized services for the tabbed navigation
  export const serviceCategories: ServiceCategory[] = [
    { id: "all", name: "Semua Layanan" },
    { id: "web", name: "Web Solutions", services: [1, 5, 6] },
    { id: "app", name: "App Development", services: [2, 3] },
    { id: "design", name: "Design Services", services: [4] },
  ];