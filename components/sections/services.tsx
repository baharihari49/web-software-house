// "use client";

// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Globe,
//   Smartphone,
//   Monitor,
//   Palette,
//   Server,
//   Search,
//   ArrowRight,
//   Check,
//   ChevronDown,
//   Users,
//   Code,
//   LineChart
// } from "lucide-react";
// import ServiceCard from "../service-card";
// import Image from "next/image";

// // Register GSAP plugins safely
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// // Keep the same service data
// const services = [
//   {
//     id: 1,
//     title: "Website Development",
//     tagline: "Buat kehadiran online yang menarik",
//     description: "Kami membangun website responsif yang menarik, cepat, dan user-friendly menggunakan teknologi terkini seperti Next.js dan Tailwind CSS.",
//     icon: <Globe className="h-6 w-6" />,
//     color: "from-blue-500 to-indigo-600",
//     lightColor: "bg-blue-50",
//     accentColor: "bg-blue-500",
//     textColor: "text-blue-600",
//     borderColor: "border-blue-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/website_development_zczc3p.webp",
//     stats: { projects: 85, clients: 42, satisfaction: 98 },
//     features: [
//       "Company Profile Profesional",
//       "E-commerce dengan Payment Gateway",
//       "Landing Page Konversi Tinggi",
//       "Web Application Responsif",
//     ],
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     tagline: "Aplikasi mobile untuk kebutuhan modern",
//     description: "Kembangkan aplikasi mobile yang menarik dan fungsional untuk Android dan iOS dengan teknologi terkini yang optimal untuk performa dan UI/UX terbaik.",
//     icon: <Smartphone className="h-6 w-6" />,
//     color: "from-purple-500 to-fuchsia-600",
//     lightColor: "bg-purple-50",
//     accentColor: "bg-purple-500",
//     textColor: "text-purple-600",
//     borderColor: "border-purple-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/mobile_app_development_o5n3fc.webp",
//     stats: { projects: 67, clients: 38, satisfaction: 97 },
//     features: [
//       "Native Apps (Android & iOS)",
//       "Cross-platform Apps (React Native)",
//       "Progressive Web Apps (PWA)",
//       "App Maintenance & Support",
//     ],
//   },
//   {
//     id: 3,
//     title: "Custom Software Development",
//     tagline: "Solusi khusus untuk kebutuhan bisnis",
//     description: "Kami membangun solusi software khusus yang sesuai dengan kebutuhan bisnis Anda untuk meningkatkan efisiensi dan produktivitas dengan fitur yang tepat guna.",
//     icon: <Monitor className="h-6 w-6" />,
//     color: "from-emerald-500 to-teal-600",
//     lightColor: "bg-emerald-50",
//     accentColor: "bg-emerald-500",
//     textColor: "text-emerald-600",
//     borderColor: "border-emerald-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/custom_software_rdizca.webp",
//     stats: { projects: 52, clients: 31, satisfaction: 99 },
//     features: [
//       "Enterprise Software & Integrasi API",
//       "ERP & CRM Systems Terintegrasi",
//       "Inventory Management Realtime",
//       "Workflow Automation Khusus",
//     ],
//   },
//   {
//     id: 4,
//     title: "UI/UX Design",
//     tagline: "Desain yang memikat dan fungsional",
//     description: "Kami menciptakan desain yang menarik dan user-friendly untuk meningkatkan pengalaman pengguna dan konversi dengan pendekatan berbasis riset.",
//     icon: <Palette className="h-6 w-6" />,
//     color: "from-amber-500 to-orange-600",
//     lightColor: "bg-amber-50",
//     accentColor: "bg-amber-500",
//     textColor: "text-amber-600",
//     borderColor: "border-amber-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/uiux_design_yicj3n.webp",
//     stats: { projects: 94, clients: 45, satisfaction: 98 },
//     features: [
//       "User Experience Research & Testing",
//       "Wire-framing & Interactive Prototyping",
//       "Responsive Design Multi-platform",
//       "Usability Testing & Iterasi",
//     ],
//   },
//   {
//     id: 5,
//     title: "Web Hosting & Maintenance",
//     tagline: "Performa dan keamanan terjamin",
//     description: "Kami menawarkan layanan hosting yang handal dan pemeliharaan website untuk memastikan website Anda selalu online, aman, dan terperbarui.",
//     icon: <Server className="h-6 w-6" />,
//     color: "from-sky-500 to-cyan-600",
//     lightColor: "bg-sky-50",
//     accentColor: "bg-sky-500",
//     textColor: "text-sky-600",
//     borderColor: "border-sky-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/web_hosting_tkyjp2.webp",
//     stats: { projects: 115, clients: 64, satisfaction: 100 },
//     features: [
//       "Managed Cloud Hosting Performa Tinggi",
//       "Regular Updates & Automated Backups",
//       "Security Monitoring & Firewall 24/7",
//       "Performance Optimization & CDN",
//     ],
//   },
//   {
//     id: 6,
//     title: "SEO & Digital Marketing",
//     tagline: "Tingkatkan visibilitas dan konversi",
//     description: "Tingkatkan visibilitas online dan tingkatkan traffic website Anda dengan strategi SEO dan digital marketing yang efektif berdasarkan data dan analitik.",
//     icon: <Search className="h-6 w-6" />,
//     color: "from-rose-500 to-pink-600",
//     lightColor: "bg-rose-50",
//     accentColor: "bg-rose-500",
//     textColor: "text-rose-600",
//     borderColor: "border-rose-200",
//     image: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742116700/seo_marketing_q2szlg.webp",
//     stats: { projects: 78, clients: 49, satisfaction: 97 },
//     features: [
//       "On-page & Off-page SEO Optimization",
//       "Content Marketing & Strategy",
//       "Social Media Strategy & Management",
//       "Google Ads & Meta Ads Management",
//     ],
//   },
// ];

// // Categorized services for the tabbed navigation
// const serviceCategories = [
//   { id: "all", name: "Semua Layanan" },
//   { id: "web", name: "Web Solutions", services: [1, 5, 6] },
//   { id: "app", name: "App Development", services: [2, 3] },
//   { id: "design", name: "Design Services", services: [4] },
// ];

// export default function Services() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [selectedService, setSelectedService] = useState<number | null>(null);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [visibleServices, setVisibleServices] = useState(services);
//   const [isClient, setIsClient] = useState(false);

//   // Mark component as client-side mounted to prevent hydration issues
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Handle category change
//   useEffect(() => {
//     if (activeCategory === "all") {
//       setVisibleServices(services);
//     } else {
//       const category = serviceCategories.find(cat => cat.id === activeCategory);
//       if (category && category.services) {
//         setVisibleServices(services.filter(service =>
//           category.services!.includes(service.id)
//         ));
//       }
//     }
//   }, [activeCategory]);

//   // Animations - with fixes for reliable rendering
//   useEffect(() => {
//     if (!sectionRef.current || !isClient) return;

//     const ctx = gsap.context(() => {
//       // Header animations - direct animation without ScrollTrigger
//       gsap.from(".services-header", {
//         opacity: 0,
//         y: 20,
//         duration: 0.7,
//         ease: "power2.out",
//         clearProps: "all"
//       });

//       // Stats section animation
//       gsap.from(".stats-section > div", {
//         opacity: 0,
//         y: 20,
//         stagger: 0.1,
//         duration: 0.5,
//         ease: "power1.out",
//         clearProps: "all"
//       });

//       // Category tabs animation
//       gsap.from(".category-tabs .tab", {
//         opacity: 0,
//         y: 15,
//         stagger: 0.1,
//         duration: 0.5,
//         delay: 0.3,
//         ease: "power1.out",
//         clearProps: "all"
//       });

//       // Service cards animation - simpler and more reliable
//       gsap.from(".service-card", {
//         opacity: 0,
//         y: 20,
//         stagger: 0.1,
//         duration: 0.5,
//         delay: 0.5,
//         ease: "power1.out",
//         clearProps: "all"
//       });

//       // CTA section animation
//       gsap.from(".cta-section", {
//         opacity: 0,
//         y: 20,
//         duration: 0.7,
//         delay: 0.8,
//         ease: "power2.out",
//         clearProps: "all"
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [isClient, visibleServices]);

//   // Handle service selection
//   const toggleServiceDetails = (id: number) => {
//     if (selectedService === id) {
//       setSelectedService(null);
//     } else {
//       setSelectedService(id);
//     }
//   };

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="py-24 relative bg-white overflow-hidden"
//     >
//       {/* Background design elements */}
//       <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header section */}
//         <div className="services-header text-center mb-12">
//           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-5">
//             <Code className="w-4 h-4 mr-2" />
//             <span>Our Digital Solutions</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Solusi Digital <span className="text-gradient-to-br from-purple-600 to-fuchsia-600">Komprehensif</span>
//           </h2>

//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Kami menyediakan berbagai layanan digital terintegrasi untuk memenuhi kebutuhan transformasi digital bisnis Anda, dari pengembangan website hingga strategi pemasaran.
//           </p>
//         </div>

//         {/* Category tabs */}
//         <div className="category-tabs flex flex-wrap justify-center gap-3 mb-12">
//           {serviceCategories.map(category => (
//             <button
//               key={category.id}
//               className={`tab px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               onClick={() => setActiveCategory(category.id)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Service cards grid */}
//         <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {visibleServices.map((service) => (
//             <ServiceCard 
//               key={service.id}
//               service={service}
//               expanded={selectedService === service.id}
//               onToggle={toggleServiceDetails}
//             />
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// }