"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  // BarChart, 
  Code, 
  Calendar, 
  Search, 
  X 
} from "lucide-react";

// Import components and utilities
import { TechCard } from "./TechCard";
import { TechListItem } from "./TechListItem";
import { BasicPagination } from "./BasicPagination";
import { getCategoryIcon } from "./CategoryUtils";

// Import types and data
import { categories, TechCategory } from "@/app/data/techstack";
import { technologies } from "@/app/data/technologies-data";

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // State for filtering and display
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTech, setExpandedTech] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Simple pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Fixed items per page

  // Filter technologies based on active category and search term
  const filteredTechnologies = technologies.filter(tech => {
    // Category filter
    const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    
    // Search filter (case insensitive)
    const matchesSearch = searchTerm === '' || 
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
    setExpandedTech(null);
  }, [activeCategory, searchTerm]);

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(filteredTechnologies.length / itemsPerPage));
  
  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
    }
  }, [currentPage, totalPages]);
  
  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTechnologies.slice(startIndex, endIndex);
  };
  
  // Current page items
  const currentPageItems = getCurrentPageItems();
  
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setExpandedTech(null);
    }
  };
  
  // Reset filters
  const resetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setExpandedTech(null);
    setCurrentPage(1);
  };

  // Animations
  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Background animations
        gsap.from(".bg-orb", {
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out"
        });
        
        // Floating animation for orbs
        gsap.to(".bg-orb", {
          y: -20,
          x: 10,
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 1
        });
        
        // Animasi heading
        gsap.from(".tech-title", {
          scrollTrigger: {
            trigger: ".tech-title",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        });

        // Animasi subtitle & filter elements
        gsap.from(".filter-item", {
          scrollTrigger: {
            trigger: ".filter-container",
            start: "top 85%",
          },
          opacity: 0,
          y: 15,
          duration: 0.6,
          stagger: 0.1,
        });
        
        // Animasi kartu teknologi (staggered)
        gsap.from(".tech-card", {
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        });
        
        // Timeline element animation
        gsap.from(".timeline-item", {
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 85%",
          },
          opacity: 0,
          x: -20,
          duration: 0.5,
          stagger: 0.1,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/30 bg-[size:30px_30px] opacity-20" style={{zIndex: -2}}></div>
      
      {/* Glowing orbs in background - hidden on mobile */}
      <div className="bg-orb absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl hidden md:block dark:bg-purple-500/10"></div>
      <div className="bg-orb absolute bottom-60 -left-20 w-96 h-96 rounded-full bg-fuchsia-500/5 blur-3xl hidden md:block dark:bg-fuchsia-500/10"></div>
      <div className="bg-orb absolute top-10 left-40 w-60 h-60 rounded-full bg-purple-500/5 blur-3xl hidden md:block dark:bg-purple-500/10"></div>
      
      {/* Accent line on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-600 dark:text-purple-400 border border-purple-200/30 dark:border-purple-500/30 mb-4 backdrop-blur-sm">
            <Code className="w-4 h-4" />
            <span className="tech-subtitle">Tech Stack</span>
          </div>
          
          <h2 className="tech-title text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">
            Teknologi Unggulan Kami
          </h2>
          
          <p className="tech-description mt-4 max-w-3xl text-base md:text-lg text-slate-600 dark:text-slate-300 mx-auto">
            Kami mengadopsi teknologi terkini dari berbagai kategori untuk membangun solusi digital yang modern, 
            skalabel, dan sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="filter-container mb-10 space-y-6">
          {/* View toggle + search */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center space-x-2 filter-item">
              <button 
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' 
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' 
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button 
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' 
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' 
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              
              <div className="text-sm text-slate-500 dark:text-slate-400 hidden md:flex items-center">
                <span>{filteredTechnologies.length} teknologi</span>
                {filteredTechnologies.length > itemsPerPage && (
                  <span className="ml-1">
                    (menampilkan {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, filteredTechnologies.length)} dari {filteredTechnologies.length})
                  </span>
                )}
              </div>
            </div>
            
            <div className="relative filter-item">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text"
                placeholder="Cari teknologi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 w-full md:w-64 lg:w-80 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {searchTerm && (
                <button 
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 filter-item">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                ${activeCategory === 'all' 
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' 
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
            >
              Semua
            </button>
            
            {Object.entries(categories).map(([key, value]) => (
              <button
                type="button"
                key={key}
                onClick={() => setActiveCategory(key as TechCategory)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors
                  ${activeCategory === key 
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' 
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
              >
                <span className="w-4 h-4">
                  {getCategoryIcon(key as TechCategory)}
                </span>
                {value.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tech stack expertise timeline */}
        {activeCategory === 'all' && !searchTerm && (
          <div className="timeline-container mb-12 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              Timeline Adopsi Teknologi
            </h3>
            
            <div className="relative flex overflow-x-auto items-center h-20 pb-4">
              {/* Timeline line */}
              <div className="absolute h-0.5 w-full bg-slate-200 dark:bg-slate-700 top-5"></div>
              
              {/* Years */}
              {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                <div key={year} className="timeline-item relative mx-8 first:ml-0 flex-shrink-0">
                  <div className="absolute top-5 -translate-x-1/2 h-3 w-3 rounded-full bg-purple-500"></div>
                  <div className="absolute top-11 -translate-x-1/2 text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {year}
                  </div>
                  
                  {/* Get tech icons for this year */}
                  <div className="absolute -translate-x-1/2 -top-8 flex flex-wrap justify-center gap-1 w-20">
                    {technologies
                      .filter(tech => tech.yearAdopted === year)
                      .slice(0, 3)
                      .map((tech) => (
                        <div 
                          key={tech.id}
                          className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center tooltip-trigger"
                          title={tech.name}
                        >
                          <img
                            src={tech.image}
                            alt={tech.name}
                            width={14}
                            height={14}
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/20x20?text=${tech.name.charAt(0)}`;
                            }}
                          />
                        </div>
                      ))}
                    {technologies.filter(tech => tech.yearAdopted === year).length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 shadow-sm flex items-center justify-center text-xs text-slate-500 dark:text-slate-400">
                        +{technologies.filter(tech => tech.yearAdopted === year).length - 3}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies display */}
        {viewMode === 'grid' ? (
          <div className="tech-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentPageItems.map((tech) => (
              <TechCard 
                key={tech.id}
                tech={tech}
                expandedTech={expandedTech}
                setExpandedTech={setExpandedTech}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300">
              <div className="col-span-3">Teknologi</div>
              <div className="col-span-2">Kategori</div>
              <div className="col-span-2">Keahlian</div>
              <div className="col-span-2">Tahun Adopsi</div>
              <div className="col-span-3">Use Cases</div>
            </div>
            
            {/* Table Rows */}
            {currentPageItems.map((tech) => (
              <TechListItem 
                key={tech.id}
                tech={tech}
                expandedTech={expandedTech}
                setExpandedTech={setExpandedTech}
                getCategoryIcon={getCategoryIcon}
              />
            ))}
          </div>
        )}
        
        {/* No results message */}
        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">Tidak ditemukan teknologi</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              Hapus filter
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {filteredTechnologies.length > 0 && totalPages > 1 && (
          <BasicPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        
        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-0.5 w-64 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="absolute inset-0 w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* Add shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}