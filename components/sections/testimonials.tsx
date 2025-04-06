"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "CEO, BukaWarung",
    quote:
      "NexGen Solutions telah menjadi mitra yang luar biasa dalam mengembangkan website e-commerce kami. Mereka memahami kebutuhan kami dengan baik dan memberikan solusi yang melebihi ekspektasi. Website baru kami tidak hanya terlihat bagus, tetapi juga telah meningkatkan konversi secara signifikan.",
    image: "/images/testimonials/person1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Dewi Lestari",
    position: "COO, HealthTech Indonesia",
    quote:
      "Bekerja dengan tim NexGen Solutions adalah pengalaman yang sangat positif. Mereka profesional, responsif, dan benar-benar memahami visi kami. Aplikasi mobile yang mereka kembangkan telah mendapatkan umpan balik positif dari pengguna kami dan telah meningkatkan efisiensi operasional kami.",
    image: "/images/testimonials/person2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    position: "Marketing Director, Konstruksi Prima",
    quote:
      "Website company profile yang dikembangkan oleh NexGen Solutions telah membantu kami meningkatkan brand image dan mendapatkan lebih banyak leads. Desainnya modern dan profesional, dan proses pengembangannya lancar dari awal hingga akhir.",
    image: "/images/testimonials/person3.jpg",
    rating: 4.5,
  },
];

// Star Rating Component
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
              ? "text-yellow-400 fill-yellow-400 opacity-50"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.from(".testimonial-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonial-badge",
          start: "top 90%",
        },
      });
      
      gsap.from(".testimonials-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 90%",
        },
      });

      gsap.from(".testimonials-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".testimonials-description",
          start: "top 90%",
        },
      });
      
      // Background elements animation
      gsap.from(".bg-blob-1", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      
      gsap.from(".bg-blob-2", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      
      // Quote icon animation
      gsap.from(".quote-icon", {
        opacity: 0,
        rotate: -45,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 80%",
        },
      });
      
      // Testimonial cards animation
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 80%",
        },
      });
      
      // Navigation controls animation
      gsap.from(".controls-container", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-indigo-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="bg-blob-1 absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="bg-blob-2 absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="testimonial-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 border border-indigo-200 mb-4">
            Testimonials
          </span>
          
          <h2 className="testimonials-title mt-2 text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Klien Kami</span>
          </h2>
          
          <p className="testimonials-description mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Dengarkan langsung dari klien kami tentang pengalaman mereka bekerja dengan NexGen Solutions.
          </p>
        </div>

        <div className="relative">
          {/* Large quote icon */}
          <div className="quote-icon absolute -left-6 -top-10 text-indigo-100 z-0">
            <Quote className="w-32 h-32" />
          </div>
          
          {/* Testimonial carousel */}
          <div className="testimonial-carousel relative bg-white rounded-2xl shadow-xl overflow-hidden z-10">
            <div className="p-8 md:p-12">
              {/* Current testimonial */}
              <div className="testimonial-card flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <RatingStars rating={testimonials[activeIndex].rating} />
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    {`"${testimonials[activeIndex].quote}"`}
                  </blockquote>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-lg text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-indigo-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="controls-container absolute bottom-6 right-6 flex items-center gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Pagination indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-indigo-600 w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}