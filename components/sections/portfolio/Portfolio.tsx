"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Category } from "@/app/type/portfolio";
import { portfolioItems, getLimitedPortfolioItems, getUniqueCategories, getStats } from "@/app/data/portfolio";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioStats from "./PortfolioStats";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioViewAll from "./PortfolioViewAll";

// Pastikan GSAP dan ScrollTrigger terdaftar hanya di lingkungan client-side
const isClient = typeof window !== "undefined";
if (isClient) {
  gsap.registerPlugin(ScrollTrigger);
}

// Number of items to display on homepage
const HOME_DISPLAY_LIMIT = 6;

interface PortfolioProps {
  isHomePage?: boolean;
}

export default function Portfolio({ isHomePage = true }: PortfolioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  // Use limited items for home page, full list for dedicated portfolio page
  const [displayedItems, setDisplayedItems] = useState(
    isHomePage ? getLimitedPortfolioItems(HOME_DISPLAY_LIMIT) : portfolioItems
  );
  const [initialLoad, setInitialLoad] = useState(true);
  
  // Get categories
  const categories = getUniqueCategories();
  
  // Get stats
  const { totalProjects, completedProjects, uniqueClients } = getStats();
  
  // Apply filter when category changes
  useEffect(() => {
    const allItems = isHomePage 
      ? getLimitedPortfolioItems(HOME_DISPLAY_LIMIT) 
      : portfolioItems;
      
    if (activeCategory === "All") {
      setDisplayedItems(allItems);
    } else {
      setDisplayedItems(
        portfolioItems
          .filter(item => item.category === activeCategory)
          .slice(0, isHomePage ? HOME_DISPLAY_LIMIT : portfolioItems.length)
      );
    }
  }, [activeCategory, isHomePage]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-purple-50/50 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-200/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-cyan-200/10 blur-3xl"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
      
      {/* Colorful line on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <PortfolioHeader 
          title={isHomePage ? "Proyek Terbaru Kami" : "Semua Portofolio Kami"}
          description={
            isHomePage 
              ? "Berikut adalah beberapa karya terbaik kami yang membuktikan kualitas dan keahlian tim kami."
              : "Lihat semua proyek yang telah kami kerjakan untuk berbagai klien di berbagai industri."
          }
        />
        
        {/* Stats */}
        <PortfolioStats 
          totalProjects={totalProjects}
          completedProjects={completedProjects}
          uniqueClients={uniqueClients}
        />

        {/* Filter */}
        <PortfolioFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          displayedItems={displayedItems.length}
          totalItems={isHomePage ? Math.min(portfolioItems.length, HOME_DISPLAY_LIMIT) : portfolioItems.length}
        />

        {/* Portfolio Grid */}
        <PortfolioGrid 
          items={displayedItems}
          initialLoad={initialLoad}
          setInitialLoad={setInitialLoad}
        />

        {/* View All button on homepage only */}
        {isHomePage && portfolioItems.length > HOME_DISPLAY_LIMIT && (
          <PortfolioViewAll />
        )}
      </div>
    </section>
  );
}