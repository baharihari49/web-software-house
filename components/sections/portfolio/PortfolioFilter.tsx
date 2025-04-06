// PortfolioFilter.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Filter } from "lucide-react";
import { Category } from "@/app/type/portfolio";
import { portfolioItems } from "@/app/data/portfolio";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  displayedItems: number;
  totalItems: number;
}

export default function PortfolioFilter({
  categories,
  activeCategory,
  setActiveCategory,
  displayedItems,
  totalItems
}: PortfolioFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !filterRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".filter-container", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".filter-container",
          start: "top 90%",
        },
      });
    }, filterRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={filterRef} className="filter-container mb-10">
      <div className="filter-tags flex flex-wrap justify-center gap-3">
        <div className="inline-flex items-center bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-sm mr-2">
          <Filter className="w-4 h-4 mr-1" />
          Filter:
        </div>
        {categories.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setActiveCategory(category as Category)}
            className={`filter-tag px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              category === activeCategory
                ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
            {category !== "All" && (
              <span className="ml-1.5 text-xs opacity-75">
                ({portfolioItems.filter(item => item.category === category).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Information about number of items showing */}
      <p className="text-center text-sm text-gray-500 mt-5">
        Menampilkan {displayedItems} dari {totalItems} proyek
      </p>
    </div>
  );
}