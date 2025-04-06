"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import { Menu, Sparkles } from "lucide-react";

// Define TypeScript interfaces
interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Beranda", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Tim", href: "#team" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
      
      // Detect active section based on scroll position
      const sections: string[] = navigation.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg shadow-purple-500/5 py-2 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-10 flex items-center justify-center mr-2 overflow-hidden">
                {/* Logo Background with gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-lg transition-all duration-300 group-hover:from-purple-500 group-hover:to-fuchsia-500"></div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-lg opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div>
                
                {/* Logo Letter with subtle animation */}
                <span className="relative text-xl font-bold text-white flex items-center">
                  N
                  <Sparkles className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </div>
              
              {/* Logo Text with gradient effect */}
              <span className={`text-xl font-bold transition-all duration-300 ${
                isScrolled
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600'
                  : 'text-white'
              } group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400`}>
                NexGen Solutions
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                    isScrolled 
                      ? isActive 
                        ? "text-purple-600 bg-purple-50/30" 
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/20" 
                      : isActive 
                        ? "text-white bg-white/10" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"></span>
                  )}
                </Link>
              );
            })}
            <Button 
              asChild 
              className={`ml-4 transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 shadow-md shadow-purple-500/20" 
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20"
              }`}
            >
              <Link href="#contact" className="flex items-center text-white">
                <span>Hubungi Kami</span>
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className={`${isScrolled ? "text-purple-600" : "text-white"} hover:bg-white/10`}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navigation={navigation} />
    </header>
  );
}