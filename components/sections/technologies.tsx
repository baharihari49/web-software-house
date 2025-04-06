// "use client";

// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { 
//   BarChart, 
//   Code, 
//   Database, 
//   Layers, 
//   Server, 
//   Smartphone, 
//   Cloud, 
//   Palette, 
//   CheckCircle,
//   ChevronRight,
//   ExternalLink,
//   Search,
//   Star,
//   Calendar,
//   Filter,
//   X,
//   Info
// } from "lucide-react";

// // Import tech data
// import { categories, technologies, type TechCategory, type Technology } from "@/app/data/techstack";

// gsap.registerPlugin(ScrollTrigger);

// // Map category to icon component
// const getCategoryIcon = (category: TechCategory) => {
//   switch(categories[category].icon) {
//     case 'Layers': return <Layers className="w-full h-full" />;
//     case 'Server': return <Server className="w-full h-full" />;
//     case 'Database': return <Database className="w-full h-full" />;
//     case 'Smartphone': return <Smartphone className="w-full h-full" />;
//     case 'Cloud': return <Cloud className="w-full h-full" />;
//     case 'Code': return <Code className="w-full h-full" />;
//     case 'Palette': return <Palette className="w-full h-full" />;
//     case 'CheckCircle': return <CheckCircle className="w-full h-full" />;
//     case 'BarChart': return <BarChart className="w-full h-full" />;
//     default: return <Code className="w-full h-full" />;
//   }
// };

// export default function Technologies() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [expandedTech, setExpandedTech] = useState<string | null>(null);
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(8);
//   const [totalItems, setTotalItems] = useState(0);

//   // Filter technologies based on active category and search term
//   const filteredTechnologies = technologies.filter(tech => {
//     // Category filter
//     const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    
//     // Search filter (case insensitive)
//     const matchesSearch = searchTerm === '' || 
//       tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       tech.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });
  
//   // Update total items count for pagination whenever filtered list changes
//   useEffect(() => {
//     setTotalItems(filteredTechnologies.length);
//     // Reset to page 1 when filters change
//     setCurrentPage(1);
//   }, [activeCategory, searchTerm, filteredTechnologies.length]);

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredTechnologies.length / itemsPerPage);
  
//   // Get current page items
//   const getCurrentPageItems = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredTechnologies.slice(startIndex, endIndex);
//   };
  
//   // Get current page items
//   const currentPageItems = getCurrentPageItems();
  
//   // Pagination handlers
//   const goToPage = (page: number) => {
//     setCurrentPage(page);
//     // Scroll to top of the tech grid
//     const gridElement = document.querySelector('.tech-grid');
//     if (gridElement) {
//       gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };
  
//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       goToPage(currentPage - 1);
//     }
//   };
  
//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       goToPage(currentPage + 1);
//     }
//   };

//   // Generate expertise stars
//   const renderExpertiseStars = (level: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star 
//         key={i} 
//         className={`w-4 h-4 ${i < level ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//       />
//     ));
//   };

//   useEffect(() => {
//     if (sectionRef.current) {
//       const ctx = gsap.context(() => {
//         // Background animations
//         gsap.from(".bg-orb", {
//           opacity: 0,
//           scale: 0.8,
//           duration: 1.5,
//           stagger: 0.2,
//           ease: "power2.out"
//         });
        
//         // Floating animation for orbs
//         gsap.to(".bg-orb", {
//           y: -20,
//           x: 10,
//           duration: 5,
//           yoyo: true,
//           repeat: -1,
//           ease: "sine.inOut",
//           stagger: 1
//         });
        
//         // Animasi heading
//         gsap.from(".tech-title", {
//           scrollTrigger: {
//             trigger: ".tech-title",
//             start: "top 80%",
//           },
//           opacity: 0,
//           y: 30,
//           duration: 0.8,
//         });

//         // Animasi subtitle & filter elements
//         gsap.from(".filter-item", {
//           scrollTrigger: {
//             trigger: ".filter-container",
//             start: "top 85%",
//           },
//           opacity: 0,
//           y: 15,
//           duration: 0.6,
//           stagger: 0.1,
//         });
        
//         // Animasi kartu teknologi (staggered)
//         gsap.from(".tech-card", {
//           scrollTrigger: {
//             trigger: ".tech-grid",
//             start: "top 80%",
//           },
//           opacity: 0,
//           y: 30,
//           scale: 0.97,
//           duration: 0.8,
//           stagger: 0.08,
//           ease: "power2.out",
//         });
        
//         // Timeline element animation
//         gsap.from(".timeline-item", {
//           scrollTrigger: {
//             trigger: ".timeline-container",
//             start: "top 85%",
//           },
//           opacity: 0,
//           x: -20,
//           duration: 0.5,
//           stagger: 0.1,
//         });
//       }, sectionRef);

//       return () => ctx.revert();
//     }
//   }, [activeCategory, searchTerm, viewMode]);

//   return (
//     <section
//       id="technologies"
//       ref={sectionRef}
//       className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/30 bg-[size:30px_30px] opacity-20" style={{zIndex: -2}}></div>
      
//       {/* Glowing orbs in background - hidden on mobile */}
//       <div className="bg-orb absolute top-40 right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl hidden md:block dark:bg-blue-500/10"></div>
//       <div className="bg-orb absolute bottom-60 -left-20 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl hidden md:block dark:bg-purple-500/10"></div>
//       <div className="bg-orb absolute top-10 left-40 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl hidden md:block dark:bg-cyan-500/10"></div>
      
//       {/* Accent line on top */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/30 dark:border-blue-500/30 mb-4 backdrop-blur-sm">
//             <Code className="w-4 h-4" />
//             <span className="tech-subtitle">Tech Stack</span>
//           </div>
          
//           <h2 className="tech-title text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
//             Teknologi Unggulan Kami
//           </h2>
          
//           <p className="tech-description mt-4 max-w-3xl text-base md:text-lg text-slate-600 dark:text-slate-300 mx-auto">
//             Kami mengadopsi teknologi terkini dari berbagai kategori untuk membangun solusi digital yang modern, 
//             skalabel, dan sesuai dengan kebutuhan bisnis Anda.
//           </p>
//         </div>

//         {/* Filters and Search */}
//         <div className="filter-container mb-10 space-y-6">
//           {/* View toggle + search */}
//           <div className="flex flex-col md:flex-row justify-between gap-4">
//             <div className="flex items-center space-x-2 filter-item">
//               <button 
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-md ${viewMode === 'grid' 
//                   ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
//                   : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <rect x="3" y="3" width="7" height="7" />
//                   <rect x="14" y="3" width="7" height="7" />
//                   <rect x="3" y="14" width="7" height="7" />
//                   <rect x="14" y="14" width="7" height="7" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-md ${viewMode === 'list' 
//                   ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
//                   : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="8" y1="6" x2="21" y2="6" />
//                   <line x1="8" y1="12" x2="21" y2="12" />
//                   <line x1="8" y1="18" x2="21" y2="18" />
//                   <line x1="3" y1="6" x2="3.01" y2="6" />
//                   <line x1="3" y1="12" x2="3.01" y2="12" />
//                   <line x1="3" y1="18" x2="3.01" y2="18" />
//                 </svg>
//               </button>
              
//               <div className="text-sm text-slate-500 dark:text-slate-400 hidden md:flex items-center">
//                 <span>{filteredTechnologies.length} teknologi</span>
//                 {filteredTechnologies.length > itemsPerPage && (
//                   <span className="ml-1">
//                     (menampilkan {(currentPage - 1) * itemsPerPage + 1}-
//                     {Math.min(currentPage * itemsPerPage, filteredTechnologies.length)} dari {filteredTechnologies.length})
//                   </span>
//                 )}
//               </div>
              
//               {/* Items per page selector */}
//               {filteredTechnologies.length > 8 && (
//                 <div className="hidden lg:flex items-center ml-4">
//                   <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">Tampilkan:</span>
//                   <select
//                     value={itemsPerPage}
//                     onChange={(e) => {
//                       setItemsPerPage(Number(e.target.value));
//                       setCurrentPage(1); // Reset to page 1 when changing items per page
//                     }}
//                     className="text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-slate-800 dark:text-slate-200"
//                   >
//                     <option value="4">4</option>
//                     <option value="8">8</option>
//                     <option value="12">12</option>
//                     <option value="16">16</option>
//                     <option value={filteredTechnologies.length}>Semua</option>
//                   </select>
//                 </div>
//               )}
//             </div>
            
//             <div className="relative filter-item">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//               <input 
//                 type="text"
//                 placeholder="Cari teknologi..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-9 pr-4 py-2 w-full md:w-64 lg:w-80 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               {searchTerm && (
//                 <button 
//                   onClick={() => setSearchTerm('')}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           </div>
          
//           {/* Category filters */}
//           <div className="flex flex-wrap gap-2 filter-item">
//             <button
//               onClick={() => setActiveCategory('all')}
//               className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
//                 ${activeCategory === 'all' 
//                   ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
//                   : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
//             >
//               Semua
//             </button>
            
//             {Object.entries(categories).map(([key, value]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key as TechCategory)}
//                 className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors
//                   ${activeCategory === key 
//                     ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
//                     : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
//               >
//                 <span className="w-4 h-4">
//                   {getCategoryIcon(key as TechCategory)}
//                 </span>
//                 {value.label}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Tech stack expertise timeline */}
//         {activeCategory === 'all' && !searchTerm && (
//           <div className="timeline-container mb-12 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
//             <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
//               <Calendar className="w-5 h-5 text-blue-500" />
//               Timeline Adopsi Teknologi
//             </h3>
            
//             <div className="relative flex overflow-x-auto items-center h-20 pb-4">
//               {/* Timeline line */}
//               <div className="absolute h-0.5 w-full bg-slate-200 dark:bg-slate-700 top-5"></div>
              
//               {/* Years */}
//               {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
//                 <div key={year} className="timeline-item relative mx-8 first:ml-0 flex-shrink-0">
//                   <div className="absolute top-5 -translate-x-1/2 h-3 w-3 rounded-full bg-blue-500"></div>
//                   <div className="absolute top-11 -translate-x-1/2 text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
//                     {year}
//                   </div>
                  
//                   {/* Get tech icons for this year */}
//                   <div className="absolute -translate-x-1/2 -top-8 flex flex-wrap justify-center gap-1 w-20">
//                     {technologies
//                       .filter(tech => tech.yearAdopted === year)
//                       .slice(0, 3)
//                       .map((tech, i) => (
//                         <div 
//                           key={tech.id}
//                           className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center tooltip-trigger"
//                           title={tech.name}
//                         >
//                           <Image
//                             src={tech.image}
//                             alt={tech.name}
//                             width={14}
//                             height={14}
//                             className="object-contain"
//                             onError={(e) => {
//                               const target = e.target as HTMLImageElement;
//                               target.src = `https://placehold.co/20x20?text=${tech.name.charAt(0)}`;
//                             }}
//                           />
//                         </div>
//                       ))}
//                     {technologies.filter(tech => tech.yearAdopted === year).length > 3 && (
//                       <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 shadow-sm flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
//                         +{technologies.filter(tech => tech.yearAdopted === year).length - 3}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Technologies display */}
//         {viewMode === 'grid' ? (
//           <div className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {currentPageItems.map((tech) => (
//               <div key={tech.id} className="tech-card">
//                 {/* Card with gradient border effect */}
//                 <div className="group h-full">
//                   <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-30 group-hover:opacity-100 transition duration-300"></div>
                  
//                   <div className="relative p-5 bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-md border border-slate-200/70 dark:border-slate-700/70 h-full flex flex-col">
//                     {/* Category indicator */}
//                     <div className="absolute top-3 right-3 flex items-center gap-1">
//                       <span 
//                         className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
//                         title={categories[tech.category].description}
//                       >
//                         {categories[tech.category].label}
//                       </span>
//                     </div>
                    
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="relative w-10 h-10 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1.5">
//                         <Image
//                           src={tech.image}
//                           alt={tech.name}
//                           fill
//                           className="object-contain p-1"
//                           onError={(e) => {
//                             const target = e.target as HTMLImageElement;
//                             target.src = `https://placehold.co/80x80?text=${tech.name.charAt(0)}`;
//                           }}
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{tech.name}</h3>
//                         <div className="flex items-center mt-1">
//                           {renderExpertiseStars(tech.expertise)}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{tech.description}</p>
                    
//                     <div className="mt-auto">
//                       <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
//                         <span className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3" />
//                           Digunakan sejak {tech.yearAdopted}
//                         </span>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-1 mb-3">
//                         {tech.useCases.slice(0, 3).map((useCase, idx) => (
//                           <span 
//                             key={idx} 
//                             className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
//                           >
//                             {useCase}
//                           </span>
//                         ))}
//                         {tech.useCases.length > 3 && (
//                           <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
//                             +{tech.useCases.length - 3}
//                           </span>
//                         )}
//                       </div>
                      
//                       <button 
//                         onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
//                         className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
//                       >
//                         {expandedTech === tech.id ? 'Sembunyikan detail' : 'Lihat detail'}
//                         <ChevronRight className={`w-4 h-4 transition-transform ${expandedTech === tech.id ? 'rotate-90' : ''}`} />
//                       </button>
                      
//                       {expandedTech === tech.id && (
//                         <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 space-y-3">
//                           <div>
//                             <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-1">Fitur Utama</h4>
//                             <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
//                               {tech.features.map((feature, idx) => (
//                                 <li key={idx} className="flex items-start gap-1.5">
//                                   <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
//                                   <span>{feature}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
                          
//                           <a 
//                             href={tech.website} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
//                           >
//                             Website resmi
//                             <ExternalLink className="w-3 h-3" />
//                           </a>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {/* Table Header */}
//             <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300">
//               <div className="col-span-3">Teknologi</div>
//               <div className="col-span-2">Kategori</div>
//               <div className="col-span-2">Keahlian</div>
//               <div className="col-span-2">Tahun Adopsi</div>
//               <div className="col-span-3">Use Cases</div>
//             </div>
            
//             {/* Table Rows */}
//             {currentPageItems.map((tech) => (
//               <div 
//                 key={tech.id} 
//                 className="tech-card group bg-white dark:bg-slate-800/90 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
//               >
//                 {/* Desktop View */}
//                 <div 
//                   className="hidden md:grid grid-cols-12 gap-4 px-4 py-4 cursor-pointer"
//                   onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
//                 >
//                   <div className="col-span-3 flex items-center gap-3">
//                     <div className="relative w-8 h-8 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1">
//                       <Image
//                         src={tech.image}
//                         alt={tech.name}
//                         fill
//                         className="object-contain p-1"
//                         onError={(e) => {
//                           const target = e.target as HTMLImageElement;
//                           target.src = `https://placehold.co/40x40?text=${tech.name.charAt(0)}`;
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-slate-800 dark:text-white">{tech.name}</h3>
//                     </div>
//                   </div>
                  
//                   <div className="col-span-2 flex items-center">
//                     <div className="flex items-center gap-1.5">
//                       <div className="w-4 h-4 text-blue-500">
//                         {getCategoryIcon(tech.category)}
//                       </div>
//                       <span className="text-sm text-slate-600 dark:text-slate-300">
//                         {categories[tech.category].label}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="col-span-2 flex items-center">
//                     <div className="flex">
//                       {renderExpertiseStars(tech.expertise)}
//                     </div>
//                   </div>
                  
//                   <div className="col-span-2 flex items-center text-sm text-slate-600 dark:text-slate-300">
//                     <Calendar className="w-4 h-4 mr-1 text-slate-400" />
//                     {tech.yearAdopted}
//                   </div>
                  
//                   <div className="col-span-3 flex items-center">
//                     <div className="flex flex-wrap gap-1">
//                       {tech.useCases.slice(0, 2).map((useCase, idx) => (
//                         <span 
//                           key={idx} 
//                           className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
//                         >
//                           {useCase}
//                         </span>
//                       ))}
//                       {tech.useCases.length > 2 && (
//                         <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
//                           +{tech.useCases.length - 2}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Mobile View */}
//                 <div 
//                   className="md:hidden px-4 py-3 flex justify-between items-center cursor-pointer"
//                   onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="relative w-10 h-10 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1.5">
//                       <Image
//                         src={tech.image}
//                         alt={tech.name}
//                         fill
//                         className="object-contain p-1"
//                         onError={(e) => {
//                           const target = e.target as HTMLImageElement;
//                           target.src = `https://placehold.co/40x40?text=${tech.name.charAt(0)}`;
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-slate-800 dark:text-white">{tech.name}</h3>
//                       <div className="flex items-center mt-0.5">
//                         <div className="text-xs text-slate-500 dark:text-slate-400 mr-2">
//                           {categories[tech.category].label}
//                         </div>
//                         <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
//                           <Calendar className="w-3 h-3 mr-0.5" />
//                           {tech.yearAdopted}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${expandedTech === tech.id ? 'rotate-90' : ''}`} />
//                 </div>
                
//                 {/* Expanded Details (Both Desktop and Mobile) */}
//                 {expandedTech === tech.id && (
//                   <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                       <div>
//                         <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
//                           <Info className="w-4 h-4 text-blue-500" />
//                           Deskripsi
//                         </h4>
//                         <p className="text-sm text-slate-600 dark:text-slate-300">{tech.description}</p>
//                       </div>
                      
//                       <div>
//                         <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
//                           <CheckCircle className="w-4 h-4 text-green-500" />
//                           Fitur Utama
//                         </h4>
//                         <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
//                           {tech.features.map((feature, idx) => (
//                             <li key={idx} className="flex items-start gap-1.5">
//                               <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
//                               <span>{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       <div>
//                         <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
//                           <BarChart className="w-4 h-4 text-indigo-500" />
//                           Use Cases
//                         </h4>
//                         <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
//                           {tech.useCases.map((useCase, idx) => (
//                             <li key={idx} className="flex items-start gap-1.5">
//                               <div className="w-1 h-1 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
//                               <span>{useCase}</span>
//                             </li>
//                           ))}
//                         </ul>
                        
//                         <a 
//                           href={tech.website} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-3"
//                         >
//                           Website resmi
//                           <ExternalLink className="w-3.5 h-3.5" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
        
//         {filteredTechnologies.length === 0 && (
//           <div className="text-center py-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
//               <Search className="w-8 h-8 text-slate-400" />
//             </div>
//             <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Tidak ditemukan teknologi</h3>
//             <p className="text-slate-500 dark:text-slate-400">
//               Coba ubah filter atau kata kunci pencarian Anda
//             </p>
//             <button
//               onClick={() => {
//                 setSearchTerm('');
//                 setActiveCategory('all');
//               }}
//               className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
//             >
//               Hapus filter
//             </button>
//           </div>
//         )}
        
//         {/* Pagination */}
//         {filteredTechnologies.length > 0 && totalPages > 1 && (
//           <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="text-sm text-slate-500 dark:text-slate-400">
//               Menampilkan {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredTechnologies.length)} dari {filteredTechnologies.length} teknologi
//             </div>
            
//             <div className="flex items-center space-x-1">
//               {/* Previous page button */}
//               <button
//                 onClick={goToPreviousPage}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-md ${currentPage === 1 
//                   ? 'text-slate-400 cursor-not-allowed' 
//                   : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
//                 aria-label="Previous page"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="15 18 9 12 15 6"></polyline>
//                 </svg>
//               </button>
              
//               {/* Page numbers */}
//               <div className="flex items-center">
//                 {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                   // Logic to show 5 pages at most with current page in the middle when possible
//                   let pageNum;
//                   if (totalPages <= 5) {
//                     pageNum = i + 1;
//                   } else if (currentPage <= 3) {
//                     pageNum = i + 1;
//                   } else if (currentPage >= totalPages - 2) {
//                     pageNum = totalPages - 4 + i;
//                   } else {
//                     pageNum = currentPage - 2 + i;
//                   }
                  
//                   return (
//                     <button
//                       key={i}
//                       onClick={() => goToPage(pageNum)}
//                       className={`w-10 h-10 mx-1 rounded-md ${currentPage === pageNum 
//                         ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-medium' 
//                         : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
//                     >
//                       {pageNum}
//                     </button>
//                   );
//                 })}
                
//                 {/* Ellipsis if there are more pages */}
//                 {totalPages > 5 && currentPage < totalPages - 2 && (
//                   <span className="mx-1 text-slate-400">...</span>
//                 )}
                
//                 {/* Last page button if not showing in the pagination nums */}
//                 {totalPages > 5 && currentPage < totalPages - 2 && (
//                   <button
//                     onClick={() => goToPage(totalPages)}
//                     className="w-10 h-10 mx-1 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//                   >
//                     {totalPages}
//                   </button>
//                 )}
//               </div>
              
//               {/* Next page button */}
//               <button
//                 onClick={goToNextPage}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-md ${currentPage === totalPages 
//                   ? 'text-slate-400 cursor-not-allowed' 
//                   : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
//                 aria-label="Next page"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="9 18 15 12 9 6"></polyline>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         )}
        
//         {/* Bottom decoration */}
//         <div className="mt-16 flex justify-center">
//           <div className="relative h-0.5 w-64 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
//             <div className="absolute inset-0 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-shimmer"></div>
//           </div>
//         </div>
//       </div>
      
//       {/* Add shimmer animation */}
//       <style jsx global>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 3s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }