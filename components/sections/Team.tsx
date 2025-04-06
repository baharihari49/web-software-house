"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Twitter, Github, Mail, Dribbble, Users, ArrowUpRight } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    id: 1,
    name: "Rudi Pratama",
    position: "CEO & Founder",
    bio: "Memiliki pengalaman 10+ tahun dalam pengembangan software dan manajemen proyek.",
    image: "/images/team/person1.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rudi@nexgensolutions.id",
    },
  },
  {
    id: 2,
    name: "Anita Wijaya",
    position: "CTO",
    bio: "Ahli dalam arsitektur software dan pengembangan aplikasi skala enterprise.",
    image: "/images/team/person2.jpg",
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "mailto:anita@nexgensolutions.id",
    },
  },
  {
    id: 3,
    name: "Doni Setiawan",
    position: "Lead Frontend Developer",
    bio: "Pakar React, Next.js, dan Tailwind CSS dengan fokus pada performa dan aksesibilitas.",
    image: "/images/team/person3.jpg",
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "mailto:doni@nexgensolutions.id",
    },
  },
  {
    id: 4,
    name: "Maya Putri",
    position: "UI/UX Designer",
    bio: "Berpengalaman dalam menciptakan desain yang menarik dan user-friendly untuk berbagai platform.",
    image: "/images/team/person4.jpg",
    socialLinks: {
      linkedin: "#",
      dribbble: "#",
      email: "mailto:maya@nexgensolutions.id",
    },
  },
];

// Component to render social icons
const SocialIcon = ({ type, link }: { type: string; link: string }) => {
  switch (type) {
    case 'linkedin':
      return <a href={link} aria-label="LinkedIn" className="text-purple-500 hover:text-purple-600 transition-colors"><Linkedin className="w-5 h-5" /></a>;
    case 'twitter':
      return <a href={link} aria-label="Twitter" className="text-purple-500 hover:text-purple-600 transition-colors"><Twitter className="w-5 h-5" /></a>;
    case 'github':
      return <a href={link} aria-label="GitHub" className="text-purple-500 hover:text-purple-600 transition-colors"><Github className="w-5 h-5" /></a>;
    case 'dribbble':
      return <a href={link} aria-label="Dribbble" className="text-purple-500 hover:text-purple-600 transition-colors"><Dribbble className="w-5 h-5" /></a>;
    case 'email':
      return <a href={link} aria-label="Email" className="text-purple-500 hover:text-purple-600 transition-colors"><Mail className="w-5 h-5" /></a>;
    default:
      return null;
  }
};

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(".team-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".team-badge",
          start: "top 90%",
        },
      });
      
      // Heading animations
      gsap.from(".team-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".team-title",
          start: "top 90%",
        },
      });

      gsap.from(".team-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".team-description",
          start: "top 90%",
        },
      });
      
      // Background elements animation
      gsap.from(".bg-circle-1", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      
      gsap.from(".bg-circle-2", {
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
      
      // Team cards animation with staggered entrance
      gsap.from(".team-member-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="bg-circle-1 absolute top-40 right-0 w-96 h-96 rounded-full bg-purple-100/40 blur-3xl"></div>
      <div className="bg-circle-2 absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-fuchsia-100/40 blur-3xl"></div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
      
      {/* Colorful line on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="team-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-700 border border-purple-200 mb-4">
            <Users className="inline-block w-4 h-4 mr-1" />
            Tim Kami
          </span>
          
          <h2 className="team-title mt-2 text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Para Ahli di <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Balik Layar</span>
          </h2>
          
          <p className="team-description mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Kenali tim berbakat kami yang membuat setiap proyek menjadi sukses.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-member-card group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Colored top border */}
                <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-fuchsia-600"></div>
                
                {/* Image container with overlay on hover */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social links on hover */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center space-x-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {Object.entries(member.socialLinks).map(([platform, link]) => (
                      <div key={platform} className="bg-white rounded-full p-2 shadow-md hover:bg-purple-50 transition-colors">
                        <SocialIcon type={platform} link={link} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-purple-600 font-medium mb-3">
                    {member.position}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* View Profile link */}
                  <div className="mt-4 inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Lihat Profil 
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}