"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CheckCircle, Award, Sparkles } from "lucide-react";

// Duplicated clients to create a continuous loop effect
const clients = [
  { name: "Client 1", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 2", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 3", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 4", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 5", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 6", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 7", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
  { name: "Client 8", logo: "https://res.cloudinary.com/du0tz73ma/image/upload/v1742113500/Group_2_unphpg.png" },
];

// Double the clients array to create a seamless loop
const allClients = [...clients, ...clients];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Mark component as mounted on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initial animations
  useEffect(() => {
    if (sectionRef.current && isClient) {
      const ctx = gsap.context(() => {
        // Simple fade in for the title
        gsap.from(".clients-title", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

        // Simple fade in for stats
        gsap.from(".stat-card", {
          opacity: 0,
          y: 10,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isClient]);
  
  // Automatic slider animation
  useEffect(() => {
    if (!sliderRef.current || !isClient) return;
    
    // Clone the first few items to create seamless loop
    const sliderAnimation = gsap.timeline({
      repeat: -1,
      defaults: { ease: "linear" }
    });
    
    // Calculate the width of each client logo item (including gap)
    const clientWidth = 180; // Approximate width + gap
    const totalWidth = clientWidth * clients.length;
    
    sliderAnimation.to(sliderRef.current, {
      x: -totalWidth, // Move negative by the width of all original clients
      duration: 20,   // Duration in seconds for the complete animation
      ease: "none"
    });
    
    // Pause animation on hover
    if (isPaused) {
      sliderAnimation.pause();
    } else {
      sliderAnimation.play();
    }
    
    return () => {
      sliderAnimation.kill();
    };
  }, [isClient, isPaused]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center px-3 py-1 rounded-full border border-neutral-200 bg-white">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-neutral-700">Trusted Partners</span>
            </div>
          </div>
          <h2 className="clients-title text-3xl font-bold text-neutral-800">
            Klien Kami
          </h2>
        </div>
        
        {/* Slider container */}
        <div className="relative mb-16 overflow-hidden">
          {/* Add left and right fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* The actual slider */}
          <div 
            className="flex" 
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allClients.map((client, index) => (
              <div
                key={index}
                className="client-logo flex-shrink-0 mx-3 w-40 relative bg-neutral-100 rounded-lg border border-neutral-200 transition-all duration-300 flex items-center justify-center p-4 h-24"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      activeIndex === index ? 'filter-none' : 'grayscale opacity-75 hover:opacity-100 hover:grayscale-0'
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/120x60?text=${client.name}`;
                    }}
                  />
                </div>
                
                {/* Simple tooltip */}
                {activeIndex === index && (
                  <div className="absolute -bottom-8 left-0 right-0 mx-auto w-max z-20">
                    <div className="bg-white rounded-full py-1 px-3 text-xs font-medium text-neutral-700 shadow-sm border border-neutral-200">
                      {client.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats in a simple, clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="stat-card flex items-center p-5 rounded-lg border border-neutral-200 bg-white">
            <div className="mr-4 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800">150+</h3>
              <p className="text-neutral-600 text-sm">Projek Sukses</p>
            </div>
          </div>
          
          <div className="stat-card flex items-center p-5 rounded-lg border border-neutral-200 bg-white">
            <div className="mr-4 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800">98%</h3>
              <p className="text-neutral-600 text-sm">Tingkat Kepuasan</p>
            </div>
          </div>
          
          <div className="stat-card flex items-center p-5 rounded-lg border border-neutral-200 bg-white">
            <div className="mr-4 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800">10+</h3>
              <p className="text-neutral-600 text-sm">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}