// PortfolioHeader.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";

interface PortfolioHeaderProps {
  title: string;
  description: string;
}

export default function PortfolioHeader({ title, description }: PortfolioHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".portfolio-badge",
          start: "top 90%",
        },
      });
      
      gsap.from(".portfolio-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".portfolio-title",
          start: "top 90%",
        },
      });

      gsap.from(".portfolio-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".portfolio-description",
          start: "top 90%",
        },
      });
    }, headerRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={headerRef} className="text-center mb-12">
      <span className="portfolio-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-700 border border-purple-200 mb-4">
        <Sparkles className="inline-block w-4 h-4 mr-1" />
        Portofolio
      </span>
      
      <h2 className="portfolio-title mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-fuchsia-700 sm:text-5xl mb-4">
        {title}
      </h2>
      
      <p className="portfolio-description mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
        {description}
      </p>
    </div>
  );
}