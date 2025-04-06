"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, LineChart, PieChart, ArrowRight, Laptop, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageAbout } from "./image-about";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animasi heading
        gsap.from(".about-title", {
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
        });

        // Animasi subtitle
        gsap.from(".about-subtitle", {
          scrollTrigger: {
            trigger: ".about-subtitle",
            start: "top 80%",
          },
          opacity: 0,
          y: 15,
          duration: 0.8,
          delay: 0.1,
        });

        // Animasi deskripsi
        gsap.from(".about-description", {
          scrollTrigger: {
            trigger: ".about-description",
            start: "top 80%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.2,
        });

        // Animasi gambar
        gsap.from(".about-image-container", {
          scrollTrigger: {
            trigger: ".about-image-container",
            start: "top 80%",
          },
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
        });

        // Animasi stats
        gsap.from(".stat-item", {
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 85%",
          },
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.2)",
        });

        // Animasi konten
        gsap.from(".about-content", {
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
          },
          opacity: 0,
          x: 30,
          duration: 0.8,
        });
        
        // Animasi list items
        gsap.from(".feature-item", {
          scrollTrigger: {
            trigger: ".feature-list",
            start: "top 85%",
          },
          opacity: 0,
          x: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
        });
        
        // Animasi tombol
        gsap.from(".about-button", {
          scrollTrigger: {
            trigger: ".about-button",
            start: "top 85%",
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.4,
        });
        
        // Animasi dekorasi
        gsap.from(".decoration-circle", {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
        
        // Animasi floating dots
        gsap.to(".floating-dot", {
          y: -15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.5
        });

        // Animasi untuk gradient orbs
        gsap.to(".bg-orb", {
          y: -20,
          x: 10,
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 1
        });
        
        // Animasi untuk content cards
        gsap.from(".content-card", {
          scrollTrigger: {
            trigger: ".content-card",
            start: "top 85%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
        });
        
        // Pulse animation for chart icons
        gsap.to(".chart-icon", {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3
        });
        
        // Bottom line animations
        gsap.from(".bottom-line", {
          scaleX: 0,
          duration: 1.2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".bottom-decoration",
            start: "top 90%",
          },
          ease: "power2.out",
          transformOrigin: "left center"
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/30 bg-[size:30px_30px] opacity-20" style={{zIndex: -2}}></div>
      
      {/* Glowing orbs in background - hidden on mobile */}
      <div className="bg-orb absolute top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl hidden md:block dark:bg-purple-500/10"></div>
      <div className="bg-orb absolute -bottom-10 left-20 w-80 h-80 rounded-full bg-fuchsia-500/5 blur-3xl hidden md:block dark:bg-fuchsia-500/10"></div>
      <div className="bg-orb absolute top-40 left-10 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl hidden md:block dark:bg-purple-500/10"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-10 pointer-events-none"></div>
      
      {/* Floating dots */}
      <div className="floating-dot absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 hidden md:block"></div>
      <div className="floating-dot absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 hidden md:block"></div>
      <div className="floating-dot absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-500 hidden md:block"></div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
      <div className="absolute top-0 left-[10%] bottom-0 w-px bg-gradient-to-b from-purple-400/30 to-transparent"></div>
      <div className="absolute top-0 right-[10%] bottom-0 w-px bg-gradient-to-b from-fuchsia-400/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-600 dark:text-purple-400 border border-purple-200/30 dark:border-purple-500/30 mb-4 backdrop-blur-sm">
            <Laptop className="w-4 h-4" />
            <span className="about-subtitle">Tentang Kami</span>
          </div>
          
          <h2 className="about-title text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">
            Kenali NexGen Solutions
          </h2>
          
          <p className="about-description mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300 mx-auto">
            Software house profesional yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis Anda mencapai potensi maksimal.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Dashboard visualization - left column on desktop */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="about-image-container relative">
              <div className="relative">
                {/* Decorative elements */}
                <div className="decoration-circle absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/20 z-10"></div>
                <div className="decoration-circle absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20 z-10"></div>
                
                {/* Enhanced gradient border effect */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-70 dark:opacity-50 blur"></div>
                
                {/* Dashboard image container */}
                <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl z-0 border border-slate-200 dark:border-slate-700">
                  <ImageAbout />
                </div>

                {/* Stats row under the dashboard */}
                <div className="stats-container grid grid-cols-3 gap-4 mt-6">
                  <div className="stat-item p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                    <div className="text-purple-500 dark:text-purple-400 mb-1">
                      <LineChart className="w-5 h-5 chart-icon" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-white">50+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Klien</div>
                  </div>
                  
                  <div className="stat-item p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                    <div className="text-fuchsia-500 dark:text-fuchsia-400 mb-1">
                      <BarChart3 className="w-5 h-5 chart-icon" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-white">100+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Proyek</div>
                  </div>
                  
                  <div className="stat-item p-3 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center">
                    <div className="text-purple-500 dark:text-purple-400 mb-1">
                      <PieChart className="w-5 h-5 chart-icon" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-white">15+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Tim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - right column on desktop */}
          <div className="about-content w-full lg:w-1/2 space-y-6">
            {/* Key features card */}
            <div className="content-card p-6 rounded-xl bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center text-white">
                  <Laptop className="w-4 h-4" />
                </div>
                <span>Cerita Kami</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                NexGen Solutions didirikan pada tahun 2018 oleh sekelompok developer dan desainer yang memiliki visi untuk membantu bisnis memanfaatkan teknologi digital untuk pertumbuhan. Kami memulai perjalanan dengan fokus pada pengembangan website dan sejak itu telah berkembang menjadi penyedia solusi digital lengkap.
              </p>
              
              <div className="feature-list space-y-3">
                <div className="feature-item flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-800 dark:text-white">Website & Mobile Development</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Aplikasi web dan mobile yang responsif dengan pengalaman pengguna terbaik</p>
                  </div>
                </div>
                
                <div className="feature-item flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-800 dark:text-white">Custom Software Solutions</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda</p>
                  </div>
                </div>
                
                <div className="feature-item flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-800 dark:text-white">Data Analytics & Visualization</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Dasbor analitik interaktif untuk pengambilan keputusan berbasis data</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Performance card */}
            <div className="content-card p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/30 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                Pendekatan Kami
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Kami bangga dengan pendekatan yang berpusat pada klien, memastikan bahwa setiap solusi yang kami kembangkan sesuai dengan kebutuhan spesifik bisnis Anda. Tim kami yang terdiri dari para ahli di bidangnya berkomitmen untuk memberikan produk dan layanan berkualitas tinggi dengan teknologi terkini.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 flex items-baseline">
                    100%
                    <span className="text-sm text-green-500 ml-1">↑</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Kepuasan Klien</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-fuchsia-600 dark:text-fuchsia-400 flex items-baseline">
                    5+ Tahun
                    <span className="text-sm text-green-500 ml-1">↑</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Pengalaman</div>
                </div>
              </div>
            </div>
            
            {/* Button and action section */}
            <div className="about-button mt-6 relative flex justify-start">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-fuchsia-400/30 blur-xl rounded-full"></div>
              
              <Button 
                asChild 
                className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 shadow-lg shadow-purple-500/20 border border-purple-400/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Link href="/about" className="flex items-center">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="bottom-decoration relative h-20 mt-16 overflow-hidden">
          <div className="bottom-line absolute left-1/4 bottom-8 w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full opacity-80"></div>
          <div className="bottom-line absolute left-1/2 bottom-4 w-40 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full -translate-x-1/2 opacity-80"></div>
          <div className="bottom-line absolute right-1/4 bottom-12 w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
}