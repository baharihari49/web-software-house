"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle, MousePointer, Award, Users, Sparkles } from "lucide-react";
import HeroImage from "../hero-image";

// Registrasi plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Pre-generated values for orbs to prevent hydration mismatches
const ORBS_DATA = [
  { width: 225, height: 185, top: 55, left: 48, opacity: 0.32, hue1: 213, hue2: 260 },
  { width: 279, height: 192, top: 89, left: 38, opacity: 0.20, hue1: 195, hue2: 280 },
  { width: 273, height: 218, top: 28, left: 64, opacity: 0.27, hue1: 209, hue2: 270 },
  { width: 166, height: 237, top: 34, left: 81, opacity: 0.15, hue1: 217, hue2: 290 },
  { width: 237, height: 121, top: 94, left: 18, opacity: 0.32, hue1: 207, hue2: 275 },
  { width: 221, height: 229, top: 69, left: 65, opacity: 0.24, hue1: 213, hue2: 265 },
  { width: 264, height: 286, top: 15, left: 70, opacity: 0.16, hue1: 188, hue2: 300 },
  { width: 248, height: 294, top: 53, left: 54, opacity: 0.38, hue1: 188, hue2: 310 }
];

// Pre-generated values for particles to prevent hydration mismatches
const PARTICLES_DATA = [
  { width: 3.58, height: 2.61, top: 27.82, left: 8.67, opacity: 0.66 },
  { width: 4.91, height: 5.99, top: 42.54, left: 26.79, opacity: 0.69 },
  { width: 4.00, height: 5.00, top: 90.19, left: 64.19, opacity: 0.66 },
  { width: 3.60, height: 4.75, top: 57.99, left: 4.36, opacity: 0.52 },
  { width: 2.82, height: 3.24, top: 53.19, left: 41.62, opacity: 0.49 },
  { width: 2.11, height: 5.92, top: 37.21, left: 65.24, opacity: 0.35 },
  { width: 3.25, height: 3.55, top: 0.59, left: 47.68, opacity: 0.35 },
  { width: 4.26, height: 3.57, top: 37.60, left: 62.36, opacity: 0.64 },
  { width: 4.64, height: 4.35, top: 68.29, left: 42.40, opacity: 0.21 },
  { width: 4.41, height: 3.79, top: 57.70, left: 15.10, opacity: 0.39 },
  { width: 3.34, height: 4.47, top: 28.41, left: 96.78, opacity: 0.40 },
  { width: 3.51, height: 3.04, top: 99.92, left: 53.15, opacity: 0.58 },
  { width: 2.01, height: 5.49, top: 56.92, left: 61.55, opacity: 0.22 },
  { width: 3.93, height: 2.37, top: 90.77, left: 39.71, opacity: 0.46 },
  { width: 3.15, height: 4.88, top: 73.85, left: 37.68, opacity: 0.59 }
];

export default function Hero() {
  const heroRef = useRef(null);
  const [currentStat, setCurrentStat] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const stats = [
    { value: "150+", label: "Klien Puas", icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { value: "98%", label: "Tingkat Kepuasan", icon: <Award className="w-6 h-6 text-amber-400" /> },
    { value: "10+", label: "Tahun Pengalaman", icon: <CheckCircle className="w-6 h-6 text-purple-400" /> }
  ];

  // Client logos
  // const clients = [
  //   { name: "Client 1", logo: "/images/client1.png" },
  //   { name: "Client 2", logo: "/images/client2.png" },
  //   { name: "Client 3", logo: "/images/client3.png" },
  //   { name: "Client 4", logo: "/images/client4.png" },
  // ];

  // Services highlight - with more colorful icons
  const serviceHighlights = [
    { name: "Website Development", color: "bg-emerald-500/30 border-emerald-500/40 text-emerald-100" },
    { name: "Mobile Apps", color: "bg-amber-500/30 border-amber-500/40 text-amber-100" },
    { name: "Software Solutions", color: "bg-purple-500/30 border-purple-500/40 text-purple-100" },
    { name: "Cloud Services", color: "bg-cyan-500/30 border-cyan-500/40 text-cyan-100" }
  ];

  useEffect(() => {
    // Mark component as mounted on the client
    setIsClient(true);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        // Staggered animation for heading
        gsap.from(".hero-title span", {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        });

        // Description animation
        gsap.from(".hero-description", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        });

        // Stats counter animation
        gsap.from(".hero-stats", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.7,
          ease: "power2.out",
        });

        // Button animations
        gsap.from(".hero-buttons", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.9,
          ease: "power2.out",
        });

        // Service pills animation
        gsap.from(".service-pill", {
          opacity: 0,
          scale: 0.8,
          stagger: 0.1,
          duration: 0.5,
          delay: 1,
          ease: "back.out(1.7)",
        });

        // Floating cards animation
        gsap.from(".floating-card", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          delay: 1.2,
          ease: "power2.out",
        });

        // Client logos animation
        gsap.from(".client-logo", {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          delay: 1.2,
          ease: "power2.out",
        });

        // Feature badge animations
        gsap.from(".feature-badge", {
          opacity: 0,
          scale: 0.5,
          stagger: 0.2,
          duration: 0.6,
          delay: 1.5,
          ease: "back.out(1.7)",
        });

        // Mouse scroll animation
        gsap.to(".scroll-indicator", {
          y: 10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        // Animate the floating orbs
        gsap.to(".floating-orb", {
          y: -20,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.2
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-28 md:pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-800"
    >
      {/* Ensuring the background is visible with !important */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-800" style={{zIndex: -2}}></div>
      
      {/* Colorful overlay patterns with improved visibility */}
      <div className="absolute inset-0 opacity-40" style={{zIndex: -1}}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_20%,rgba(120,255,215,0.6),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_600px_at_0%_50%,rgba(255,170,120,0.6),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_100%,rgba(160,120,255,0.6),transparent)]"></div>
      </div>

      {/* Animated colorful floating orbs with consistent values to prevent hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden opacity-80" style={{zIndex: 0}}>
        {ORBS_DATA.map((orb, i) => (
          <div
            key={i}
            className="floating-orb absolute rounded-full blur-2xl"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              opacity: orb.opacity,
              background: `radial-gradient(circle at center, 
                hsl(${orb.hue1}, 100%, 70%),
                hsl(${orb.hue2}, 100%, 60%))`,
              mixBlendMode: "lighten"
            }}
          />
        ))}
      </div>

      {/* Glowing mesh grid overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-6/12 lg:pr-16">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/40 to-fuchsia-500/40 text-white backdrop-blur-sm mb-6 border border-purple-400/30">
                <Sparkles className="inline-block w-4 h-4 mr-1" />
                Digital Transformation Partner
              </span>
            </div>
            
            <h1 className="hero-title mb-6">
              {/* Split text for staggered animation with colorful gradient */}
              {'Transformasi Digital untuk Pertumbuhan Bisnis Anda'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-2 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 leading-tight">
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="hero-description text-lg md:text-xl text-indigo-100 mb-8 max-w-xl leading-relaxed">
              NexGen Solutions membantu bisnis Anda berkembang dengan solusi teknologi terbaik dan inovatif. Dapatkan keunggulan kompetitif melalui transformasi digital yang tepat guna.
            </p>
            
            {/* Animated stats counter with updated design */}
            <div className="hero-stats w-fit flex items-center mb-8 bg-gradient-to-r from-purple-800/40 to-indigo-800/40 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              {stats[currentStat].icon}
              <div className="ml-4">
                <h3 className="text-3xl font-bold text-white">{stats[currentStat].value}</h3>
                <p className="text-indigo-200">{stats[currentStat].label}</p>
              </div>
            </div>
            
            {/* Colorful service pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceHighlights.map((service, index) => (
                <span 
                  key={index} 
                  className={`service-pill px-3 py-1 text-sm ${service.color} rounded-full border backdrop-blur-sm`}
                >
                  <CheckCircle className="inline-block w-3 h-3 mr-1" />
                  {service.name}
                </span>
              ))}
            </div>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-lg shadow-emerald-500/20 group transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-white hover:from-purple-500/30 hover:to-fuchsia-500/30 backdrop-blur-sm border border-purple-400/30 transition-all duration-300"
              >
                <Link href="#services" className="flex items-center">
                  Pelajari Layanan
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-6/12 mt-12 lg:mt-0">
            <div className="relative">
              <div className="hero-image-container relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-fuchsia-900/40 z-0"></div>
                <div className="absolute inset-0 border-t border-l border-white/10 rounded-xl z-20 pointer-events-none"></div>
                <div className="absolute inset-0 border-r border-b border-black/10 rounded-xl z-20 pointer-events-none"></div>
                <div className="hero-image relative z-10 h-[400px] md:h-[500px] w-full">
                  {/* Pass predefined particle data to prevent hydration mismatches */}
                  <HeroImage particlesData={PARTICLES_DATA} />
                </div>
              </div>
              
              {/* Floating cards with updated modern design */}
              <div className="floating-card absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-4 max-w-xs hidden md:block z-20 border-l-4 border-emerald-400 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Solusi Terintegrasi</h4>
                    <p className="text-sm text-white/70">One-stop solution untuk kebutuhan digital Anda</p>
                  </div>
                </div>
              </div>
              
              <div className="floating-card absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl p-4 hidden md:block z-20 border-r-4 border-purple-400 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <div className="mr-3">
                    <h4 className="text-white font-medium text-right">ROI Optimal</h4>
                    <p className="text-sm text-white/70 text-right">Tingkatkan profit hingga 300%</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* New feature badges with more modern design */}
              <div className="feature-badge absolute top-1/2 right-0 transform translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-1 hidden lg:flex">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>New Feature</span>
              </div>

              <div className="feature-badge absolute bottom-1/4 left-0 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-1 hidden lg:flex">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with updated styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2 opacity-70">Scroll untuk menjelajahi</p>
        <div className="scroll-indicator p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <MousePointer className="w-5 h-5 mx-auto" />
        </div>
      </div>
      
      {/* Colorful divider line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"></div>
      
      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 5px 0 rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 20px 5px rgba(139, 92, 246, 0.5); }
          100% { box-shadow: 0 0 5px 0 rgba(139, 92, 246, 0.5); }
        }
        
        .floating-card {
          animation: glow 3s infinite ease-in-out;
        }
        
        .feature-badge {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}