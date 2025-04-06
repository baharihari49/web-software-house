"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send,
  MessageSquare
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(".contact-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-badge",
          start: "top 90%",
        },
      });
      
      // Heading animations with staggered text
      gsap.from(".contact-title span", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 90%",
        },
      });
      
      // Description animation
      gsap.from(".contact-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".contact-description",
          start: "top 90%",
        },
      });
      
      // Form card animation
      gsap.from(".contact-form-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-form-card",
          start: "top 80%",
        },
      });
      
      // Form fields animation
      gsap.from(".form-field", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });
      
      // Submit button animation
      gsap.from(".submit-button", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });
      
      // Info card animation
      gsap.from(".contact-info-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-info-card",
          start: "top 80%",
        },
      });
      
      // Contact items animation
      gsap.from(".contact-item", {
        opacity: 0,
        x: 30,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".contact-info-content",
          start: "top 80%",
        },
      });
      
      // Map animation
      gsap.from(".map-container", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".map-container",
          start: "top 90%",
        },
      });
      
      // FIX: Set initial state for social links to be visible
      const socialLinksElements = document.querySelectorAll(".social-link");
      gsap.set(socialLinksElements, { opacity: 1, y: 0, scale: 1 });
      
      // Social links scroll animation enhancement
      gsap.fromTo(
        socialLinksElements, 
        { opacity: 0.8, y: 10, scale: 0.9 }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".social-links",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! This is a demo, so no actual submission is made.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-slate-50 dark:bg-slate-900"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="contact-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 mb-4">
            <MessageSquare className="inline-block w-4 h-4 mr-1" />  
            Kontak Kami
          </span>
          
          <h2 className="contact-title mt-2 mb-4">
            {'Mari Mulai Proyek Anda Bersama Kami'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:text-white leading-tight">
                {word}
              </span>
            ))}
          </h2>
          
          <p className="contact-description mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto">
            Kami siap menjawab pertanyaan Anda dan membantu mewujudkan visi digital
            bisnis Anda dengan solusi yang tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <div className="contact-form-card relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-sm">
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-slate-800 dark:text-white">Kirim Pesan</h3>
                </div>
                
                <form className="contact-form space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-field space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Nama
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          placeholder="Masukkan nama Anda"
                          required
                          className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="form-field space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Masukkan email Anda"
                          required
                          className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-field space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <Input
                        id="subject"
                        placeholder="Masukkan subject pesan"
                        required
                        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="form-field space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Pesan
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Masukkan pesan Anda"
                        required
                        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="submit-button w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
                    >
                      <span className="flex items-center justify-center">
                        Kirim Pesan
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="contact-info-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-slate-800 dark:text-white">Informasi Kontak</h3>
                </div>
                
                <div className="contact-info-content space-y-6 mb-8">
                  <div className="contact-item flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-slate-800 dark:text-white font-medium">Alamat</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Jl. Teknologi No. 123, Kelapa Gading<br />
                        Jakarta Utara, 14240<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Phone className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-slate-800 dark:text-white font-medium">Telepon</h4>
                      <p className="text-slate-600 dark:text-slate-300">+62 21 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="contact-item flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-slate-800 dark:text-white font-medium">Email</h4>
                      <p className="text-slate-600 dark:text-slate-300">info@nexgensolutions.id</p>
                    </div>
                  </div>
                  
                  <div className="contact-item flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-slate-800 dark:text-white font-medium">Jam Kerja</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Senin - Jumat: 09:00 - 18:00<br />
                        Sabtu: 09:00 - 14:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="map-container rounded-xl overflow-hidden h-48 border border-slate-200 dark:border-slate-700 relative">
                  {/* Simple map placeholder */}
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                    <div className="relative">
                      <MapPin className="h-10 w-10 text-purple-500" />
                      <div className="absolute -inset-4 rounded-full bg-fuchsia-200 dark:bg-fuchsia-800 animate-ping opacity-50"></div>
                    </div>
                    <span className="absolute bottom-2 left-2 text-xs text-slate-500 dark:text-slate-400">Interactive map will be displayed here</span>
                  </div>
                </div>
                
                <div className="social-links flex space-x-3 mt-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="social-link w-10 h-10 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white flex items-center justify-center rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 hover:scale-110 border border-purple-400 dark:border-purple-700"
                      aria-label={link.name}
                      style={{ opacity: 1 }} // Inline style to ensure they're visible on first load
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
    </section>
  );
}