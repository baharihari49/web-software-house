// PortfolioViewAll.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PortfolioViewAll() {
  const btnRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !btnRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".view-all-container", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".view-all-container",
          start: "top 90%",
        },
      });
    }, btnRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={btnRef} className="view-all-container flex flex-col items-center mt-16">
      <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8 opacity-60"></div>
      
      <div className="text-center mb-8">
        <p className="text-gray-600">Tertarik dengan proyek lainnya? Lihat semua portofolio kami untuk melihat karya-karya terbaik kami.</p>
      </div>
      
      <Button
        asChild
        size="lg"
        className="view-all-btn relative group bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-sm transition-colors duration-300"
      >
        <Link href="/portfolio" className="flex items-center px-8 py-3">
          <span>Lihat Semua Portofolio</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  );
}