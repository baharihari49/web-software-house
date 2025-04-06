// "use client";

// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import PortfolioItem from "../portfolio-item";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowUpRight, Sparkles, Filter, Lightbulb, Server, Award, Users, Code } from "lucide-react";

// // Pastikan GSAP dan ScrollTrigger terdaftar hanya di lingkungan client-side
// const isClient = typeof window !== "undefined";
// if (isClient) {
//   gsap.registerPlugin(ScrollTrigger);
// }

// // Sample portfolio data
// const portfolioItems = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description: "Website e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
//     image: "/images/portfolio/project1.jpg",
//     tags: ["Next.js", "Tailwind CSS", "MongoDB"],
//     category: "Web Development",
//     client: "InStore Indonesia",
//     completion: "Desember 2023",
//     status: "Completed" as const,
//     link: "https://example.com",
//     achievements: ["30% peningkatan konversi", "Waktu loading 50% lebih cepat"]
//   },
//   {
//     id: 2,
//     title: "Company Profile",
//     description: "Website company profile modern dan responsif untuk perusahaan manufaktur.",
//     image: "/images/portfolio/project2.jpg",
//     tags: ["React", "Tailwind CSS", "GSAP"],
//     category: "Web Design",
//     client: "PT Maju Bersama",
//     completion: "Oktober 2023",
//     status: "Completed" as const,
//     achievements: ["100% responsif di semua perangkat", "95/100 skor PageSpeed"]
//   },
//   {
//     id: 3,
//     title: "Mobile App",
//     description: "Aplikasi mobile untuk manajemen inventaris dengan fitur scanning barcode dan notifikasi stok.",
//     image: "/images/portfolio/project3.jpg",
//     tags: ["React Native", "Firebase", "Node.js"],
//     category: "Mobile App",
//     client: "LogisTech",
//     completion: "Januari 2024",
//     status: "Completed" as const,
//     link: "https://example.com/app",
//     achievements: ["Adopsi 5000+ pengguna", "Efisiensi inventaris meningkat 40%"]
//   },
//   {
//     id: 4,
//     title: "CRM System",
//     description: "Sistem manajemen hubungan pelanggan yang dibangun khusus untuk perusahaan jasa.",
//     image: "/images/portfolio/project4.jpg",
//     tags: ["Next.js", "TypeScript", "PostgreSQL"],
//     category: "Web Application",
//     client: "ServicePro",
//     completion: "Februari 2024",
//     status: "In Progress" as const,
//     achievements: ["Integrasi dengan 5 platform", "Dashboard real-time"]
//   },
//   {
//     id: 5,
//     title: "LMS Platform",
//     description: "Platform pembelajaran online dengan fitur kursus, quiz, dan sertifikasi untuk lembaga pendidikan.",
//     image: "/images/portfolio/project5.jpg",
//     tags: ["React", "Express.js", "MongoDB"],
//     category: "Web Application",
//     client: "EduTech Institute",
//     completion: "November 2023",
//     status: "Maintenance" as const,
//     link: "https://example.com/lms",
//     achievements: ["10,000+ pengguna aktif", "Integrasi pembayaran multi-channel"]
//   },
//   {
//     id: 6,
//     title: "Dashboard Analytics",
//     description: "Dashboard analytics real-time untuk monitoring dan visualisasi data bisnis.",
//     image: "/images/portfolio/project6.jpg",
//     tags: ["Next.js", "shadcn/ui", "D3.js"],
//     category: "Data Visualization",
//     client: "DataInsight Corp",
//     completion: "Maret 2024",
//     status: "Completed" as const,
//     achievements: ["Visualisasi 15+ sumber data", "Pengurangan waktu analisis 60%"]
//   },
// ];

// // Define category type
// type Category = "All" | "Web Development" | "Web Design" | "Web Application" | "Mobile App" | "Data Visualization";

// export default function Portfolio() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [activeCategory, setActiveCategory] = useState<Category>("All");
//   const [displayedItems, setDisplayedItems] = useState(portfolioItems);
//   const [initialLoad, setInitialLoad] = useState(true);
  
//   // Get unique categories
//   const allCategories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))] as Category[];
  
//   // Stats calculation
//   const totalProjects = portfolioItems.length;
//   const completedProjects = portfolioItems.filter(item => item.status === "Completed").length;
//   const uniqueClients = new Set(portfolioItems.map(item => item.client)).size;
  
//   // Apply filter without animation first
//   useEffect(() => {
//     if (activeCategory === "All") {
//       setDisplayedItems(portfolioItems);
//     } else {
//       setDisplayedItems(portfolioItems.filter(item => item.category === activeCategory));
//     }
//   }, [activeCategory]);
  
//   // Setup initial animations on page load only
//   useEffect(() => {
//     if (!isClient || !sectionRef.current) return;
    
//     const ctx = gsap.context(() => {
//       // Header animations
//       gsap.from(".portfolio-badge", {
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".portfolio-badge",
//           start: "top 90%",
//         },
//       });
      
//       gsap.from(".portfolio-title", {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".portfolio-title",
//           start: "top 90%",
//         },
//       });

//       gsap.from(".portfolio-description", {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         delay: 0.2,
//         scrollTrigger: {
//           trigger: ".portfolio-description",
//           start: "top 90%",
//         },
//       });
      
//       // Stats animations
//       gsap.from(".stat-card", {
//         opacity: 0,
//         y: 20,
//         stagger: 0.15,
//         duration: 0.7,
//         scrollTrigger: {
//           trigger: ".portfolio-stats",
//           start: "top 90%",
//         },
//       });
      
//       // Filter container animation
//       gsap.from(".filter-container", {
//         opacity: 0,
//         y: 20,
//         duration: 0.7,
//         scrollTrigger: {
//           trigger: ".filter-container",
//           start: "top 90%",
//         },
//       });
      
//       // CTA animations
//       gsap.from(".portfolio-cta", {
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".portfolio-cta",
//           start: "top 90%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);
  
//   // Handle initial load animation for portfolio items
//   useEffect(() => {
//     if (!isClient || !sectionRef.current) return;
    
//     // Animation for portfolio items only on initial load
//     if (initialLoad) {
//       const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");
      
//       if (portfolioItems.length > 0) {
//         gsap.fromTo(
//           portfolioItems,
//           { 
//             opacity: 0, 
//             y: 30 
//           },
//           { 
//             opacity: 1, 
//             y: 0, 
//             duration: 0.5, 
//             stagger: 0.1,
//             ease: "power2.out",
//             onComplete: () => setInitialLoad(false)
//           }
//         );
//       }
//     }
//   }, [displayedItems, initialLoad]);
  
//   // Filter transition animation
//   useEffect(() => {
//     if (!isClient || initialLoad) return;
    
//     // Animate new items after filter change
//     const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");
    
//     if (portfolioItems.length > 0) {
//       gsap.fromTo(
//         portfolioItems,
//         { 
//           opacity: 0.5, 
//           scale: 0.95,
//           y: 10 
//         },
//         { 
//           opacity: 1, 
//           scale: 1,
//           y: 0, 
//           duration: 0.4, 
//           stagger: 0.05,
//           ease: "power2.out"
//         }
//       );
//     }
//   }, [displayedItems, initialLoad]);

//   return (
//     <section
//       id="portfolio"
//       ref={sectionRef}
//       className="relative py-24 bg-gradient-to-b from-purple-50/50 to-white overflow-hidden"
//     >
//       {/* Decorative Elements */}
//       <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-200/10 blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-cyan-200/10 blur-3xl"></div>
      
//       {/* Subtle dot pattern */}
//       <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
      
//       {/* Colorful line on top */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-12">
//           <span className="portfolio-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-700 border border-purple-200 mb-4">
//             <Sparkles className="inline-block w-4 h-4 mr-1" />
//             Portofolio
//           </span>
          
//           <h2 className="portfolio-title mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-fuchsia-700 sm:text-5xl mb-4">
//             Proyek Terbaru Kami
//           </h2>
          
//           <p className="portfolio-description mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
//             Berikut adalah beberapa karya terbaik kami yang membuktikan kualitas dan keahlian tim kami.
//           </p>
//         </div>
        
//         {/* Stats Section */}
//         <div className="portfolio-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
//           <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 flex items-center justify-center text-purple-600">
//               <Code className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{totalProjects}</p>
//               <p className="text-sm text-gray-500">Total Proyek</p>
//             </div>
//           </div>
          
//           <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-600">
//               <Award className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{completedProjects}</p>
//               <p className="text-sm text-gray-500">Proyek Selesai</p>
//             </div>
//           </div>
          
//           <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-600">
//               <Users className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">{uniqueClients}</p>
//               <p className="text-sm text-gray-500">Klien Puas</p>
//             </div>
//           </div>
//         </div>

//         {/* Filter Tags - now simplified */}
//         <div className="filter-container mb-10">
//           <div className="filter-tags flex flex-wrap justify-center gap-3">
//             <div className="inline-flex items-center bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-sm mr-2">
//               <Filter className="w-4 h-4 mr-1" />
//               Filter:
//             </div>
//             {allCategories.map((category, index) => (
//               <button 
//                 key={index} 
//                 onClick={() => setActiveCategory(category)}
//                 className={`filter-tag px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   category === activeCategory
//                     ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
//                     : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//                 }`}
//               >
//                 {category}
//                 {category !== "All" && (
//                   <span className="ml-1.5 text-xs opacity-75">
//                     ({portfolioItems.filter(item => item.category === category).length})
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Information about number of items showing */}
//           <p className="text-center text-sm text-gray-500 mt-5">
//             Menampilkan {displayedItems.length} dari {portfolioItems.length} proyek
//           </p>
//         </div>

//         {/* Portfolio Grid - static display */}
//         {displayedItems.length > 0 ? (
//           <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedItems.map((item) => (
//               <div key={item.id} className="portfolio-item-wrapper">
//                 <PortfolioItem item={item} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-lg text-gray-600">Tidak ada proyek yang sesuai dengan kategori ini.</p>
//           </div>
//         )}

//         {/* Bottom action section */}
//         <div className="portfolio-cta mt-16 flex flex-col items-center">
//           <div className="max-w-2xl text-center mb-8">
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Butuh Solusi Digital untuk Bisnis Anda?</h3>
//             <p className="text-gray-600">Tim kami siap membantu mengembangkan solusi digital yang tepat untuk kebutuhan bisnis Anda. Konsultasi gratis untuk langkah pertama.</p>
//           </div>
          
//           <Button
//             asChild
//             size="lg"
//             className="portfolio-btn relative group bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300"
//           >
//             <Link href="/contact" className="flex items-center px-8 py-3">
//               <span>Konsultasi Gratis</span>
//               <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }