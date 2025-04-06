// PortfolioStats.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Code, Award, Users } from "lucide-react";

interface PortfolioStatsProps {
  totalProjects: number;
  completedProjects: number;
  uniqueClients: number;
}

export default function PortfolioStats({ 
  totalProjects, 
  completedProjects, 
  uniqueClients 
}: PortfolioStatsProps) {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !statsRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".portfolio-stats",
          start: "top 90%",
        },
      });
    }, statsRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={statsRef} className="portfolio-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
      <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 flex items-center justify-center text-purple-600">
          <Code className="w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{totalProjects}</p>
          <p className="text-sm text-gray-500">Total Proyek</p>
        </div>
      </div>
      
      <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-600">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{completedProjects}</p>
          <p className="text-sm text-gray-500">Proyek Selesai</p>
        </div>
      </div>
      
      <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-600">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{uniqueClients}</p>
          <p className="text-sm text-gray-500">Klien Puas</p>
        </div>
      </div>
    </div>
  );
}