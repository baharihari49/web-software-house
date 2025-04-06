// PortfolioGrid.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PortfolioItem from "@/components/portfolio-item";
import { PortfolioItemType } from "@/app/type/portfolio";

interface PortfolioGridProps {
  items: PortfolioItemType[];
  initialLoad: boolean;
  setInitialLoad: (value: boolean) => void;
}

export default function PortfolioGrid({ items, initialLoad, setInitialLoad }: PortfolioGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Handle animations when items change or on initial load
  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return;
    
    // Items animation
    const portfolioItems = gridRef.current.querySelectorAll(".portfolio-item-wrapper");
    
    if (portfolioItems.length > 0) {
      if (initialLoad) {
        // Initial load animation
        gsap.fromTo(
          portfolioItems,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.1,
            ease: "power2.out",
            onComplete: () => setInitialLoad(false)
          }
        );
      } else {
        // Filter change animation
        gsap.fromTo(
          portfolioItems,
          { opacity: 0.5, scale: 0.95, y: 10 },
          { 
            opacity: 1, 
            scale: 1,
            y: 0, 
            duration: 0.4, 
            stagger: 0.05,
            ease: "power2.out"
          }
        );
      }
    }
  }, [items, initialLoad, setInitialLoad]);
  
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-600">Tidak ada proyek yang sesuai dengan kategori ini.</p>
      </div>
    );
  }
  
  return (
    <div ref={gridRef} className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="portfolio-item-wrapper">
          <PortfolioItem item={item} />
        </div>
      ))}
    </div>
  );
}