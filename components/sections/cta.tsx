"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle, Award, Rocket, Sparkles, MousePointer } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Pre-generated values for orbs to prevent hydration mismatches
const ORBS_DATA = [
  { width: 225, height: 185, top: 20, left: 15, opacity: 0.32, hue1: 213, hue2: 260 },
  { width: 279, height: 192, top: 60, left: 70, opacity: 0.20, hue1: 195, hue2: 280 },
  { width: 273, height: 218, top: 10, left: 50, opacity: 0.27, hue1: 209, hue2: 270 },
  { width: 166, height: 237, top: 70, left: 30, opacity: 0.15, hue1: 217, hue2: 290 },
  { width: 237, height: 121, top: 40, left: 80, opacity: 0.32, hue1: 207, hue2: 275 }
];

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Background animations
      gsap.from(".cta-bg-gradient", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      
      // Heading animations with staggered text
      gsap.from(".cta-title span", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-title",
          start: "top 90%",
        },
      });
      
      // Description animation
      gsap.from(".cta-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".cta-description",
          start: "top 90%",
        },
      });
      
      // Features animation - fixed to ensure visibility
      gsap.set(".cta-feature", { 
        opacity: 1,
        y: 0
      });
      
      // Separate animation that won't affect visibility
      gsap.from(".cta-feature", {
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".cta-features",
          start: "top 85%",
        },
      });
      
      // Floating decorative elements animations
      gsap.from(".floating-icon", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      
      // Set up floating animation for decorative icons
      gsap.to(".floating-icon-1", {
        y: -15,
        x: 10,
        rotation: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      gsap.to(".floating-icon-2", {
        y: 15,
        x: -8,
        rotation: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      gsap.to(".floating-icon-3", {
        y: -12,
        x: -5,
        rotation: 5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
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
      
      // Button animations
      gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cta-features",
          start: "top 85%",
        },
      });
      
      // Button pulse animation
      gsap.to(".cta-button-pulse", {
        boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      // Secondary button animation
      gsap.from(".secondary-button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          trigger: ".cta-features",
          start: "top 85%",
        },
      });
      
      // Scroll indicator animation
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden"
    >
      {/* Base gradient background to match hero */}
      <div className="cta-bg-gradient absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-800" style={{zIndex: -2}}></div>
      
      {/* Colorful overlay patterns to match hero */}
      <div className="absolute inset-0 opacity-40" style={{zIndex: -1}}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_20%,rgba(120,255,215,0.6),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_600px_at_0%_50%,rgba(255,170,120,0.6),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_100%,rgba(160,120,255,0.6),transparent)]"></div>
      </div>
      
      {/* Animated colorful floating orbs */}
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
      
      {/* Floating decorative icons */}
      <div className="floating-icon floating-icon-1 absolute top-20 left-[15%] bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-lg z-10">
        <Rocket className="w-6 h-6 text-white" />
      </div>
      
      <div className="floating-icon floating-icon-2 absolute top-40 right-[10%] bg-gradient-to-br from-fuchsia-500 to-purple-600 p-3 rounded-xl shadow-lg z-10">
        <Award className="w-6 h-6 text-white" />
      </div>
      
      <div className="floating-icon floating-icon-3 absolute bottom-32 left-[10%] bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg z-10">
        <CheckCircle className="w-6 h-6 text-white" />
      </div>
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sparkle badge matching hero style */}
          <div className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/40 to-fuchsia-500/40 text-white backdrop-blur-sm mb-6 border border-purple-400/30">
            <Sparkles className="inline-block w-4 h-4 mr-1" />
            <span>Tingkatkan Bisnis Anda Sekarang</span>
          </div>
          
          {/* Main heading with same staggered animation style as hero */}
          <h2 className="cta-title mb-6">
            {'Siap Untuk Transformasi Digital?'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 leading-tight">
                {word}
              </span>
            ))}
          </h2>
          
          {/* Description with the same text color as hero */}
          <p className="cta-description text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Mari kita diskusikan bagaimana NexGen Solutions dapat membantu bisnis
            Anda berkembang dengan solusi digital yang inovatif dan efektif.
          </p>
          
          {/* Feature highlights styled like service pills from hero */}
          {/* Added !opacity-100 to ensure features are visible regardless of animation state */}
          <div className="cta-features !opacity-100 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="cta-feature !opacity-100 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-white font-medium mb-1">Implementasi Cepat</h3>
              <p className="text-indigo-200 text-sm">Solusi teknologi dalam hitungan minggu, bukan bulan</p>
            </div>
            
            <div className="cta-feature bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-white font-medium mb-1">Kualitas Terjamin</h3>
              <p className="text-indigo-200 text-sm">Solusi premium dengan standar internasional</p>
            </div>
            
            <div className="cta-feature bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-white font-medium mb-1">Support 24/7</h3>
              <p className="text-indigo-200 text-sm">Tim ahli siap membantu kapanpun Anda butuhkan</p>
            </div>
          </div>
          
          {/* CTA buttons matching hero button style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="cta-button cta-button-pulse bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-lg shadow-emerald-500/20 group px-8 py-6 text-lg"
            >
              <Link href="#contact" className="flex items-center">
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="secondary-button bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-white hover:from-purple-500/30 hover:to-fuchsia-500/30 backdrop-blur-sm border border-purple-400/30 transition-all duration-300"
            >
              <Link href="#portfolio">
                Lihat Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator matching hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2 opacity-70">Hubungi kami hari ini</p>
        <div className="scroll-indicator p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <MousePointer className="w-5 h-5 mx-auto" />
        </div>
      </div>
      
      {/* Colorful divider line matching hero */}
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
      `}</style>
    </section>
  );
}