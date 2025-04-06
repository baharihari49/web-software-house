// PortfolioCTA.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === "undefined" || !ctaRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".portfolio-cta",
          start: "top 90%",
        },
      });
    }, ctaRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={ctaRef} className="portfolio-cta mt-16 flex flex-col items-center">
      <div className="max-w-2xl text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Butuh Solusi Digital untuk Bisnis Anda?</h3>
        <p className="text-gray-600">Tim kami siap membantu mengembangkan solusi digital yang tepat untuk kebutuhan bisnis Anda. Konsultasi gratis untuk langkah pertama.</p>
      </div>
      
      <Button
        asChild
        size="lg"
        className="portfolio-btn relative group bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-300"
      >
        <Link href="/contact" className="flex items-center px-8 py-3">
          <span>Konsultasi Gratis</span>
          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  );
}