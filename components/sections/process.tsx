"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  SearchCheck,
  ClipboardList,
  Code,
  Rocket,
  ArrowRight
} from "lucide-react";
import React from "react";

// Pastikan GSAP dan ScrollTrigger terdaftar hanya di lingkungan client-side
const isClient = typeof window !== "undefined";
if (isClient) {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Kami melakukan riset mendalam dan diskusi untuk memahami kebutuhan, tujuan, dan tantangan bisnis Anda.",
    icon: <SearchCheck className="w-8 h-8" />,
    color: "from-purple-500 to-fuchsia-500",
    lightColor: "from-purple-100 to-fuchsia-100",
    darkColor: "from-purple-700 to-fuchsia-700"
  },
  {
    number: 2,
    title: "Planning",
    description:
      "Kami membuat rencana proyek detail, termasuk spesifikasi, timeline, dan milestones untuk memastikan pengerjaan yang efisien.",
    icon: <ClipboardList className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    lightColor: "from-cyan-100 to-blue-100",
    darkColor: "from-cyan-700 to-blue-700"
  },
  {
    number: 3,
    title: "Development",
    description:
      "Tim ahli kami mulai membangun solusi sesuai dengan rencana, dengan update berkala dan komunikasi transparan.",
    icon: <Code className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-100 to-teal-100",
    darkColor: "from-emerald-700 to-teal-700"
  },
  {
    number: 4,
    title: "Delivery & Support",
    description:
      "Setelah pengujian menyeluruh, kami meluncurkan solusi dan menyediakan dukungan berkelanjutan untuk memastikan kesuksesan.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-amber-500 to-orange-500",
    lightColor: "from-amber-100 to-orange-100",
    darkColor: "from-amber-700 to-orange-700"
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isClient || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animations
      gsap.from(".process-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".process-badge",
          start: "top 90%",
        },
      });

      gsap.from(".process-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".process-title",
          start: "top 90%",
        },
      });

      gsap.from(".process-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".process-description",
          start: "top 90%",
        },
      });

      // Timeline line animation
      gsap.from(".timeline-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      });

      // Process steps animation with staggered entrance
      gsap.from(".process-step", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      });

      // Number bubble animations
      gsap.from(".number-bubble", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      });

      // Icon animations
      gsap.from(".step-icon", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-purple-50/50 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-200/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-cyan-200/10 blur-3xl"></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Colorful line on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="process-badge inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 text-purple-700 border border-purple-200 mb-4">
            <Sparkles className="inline-block w-4 h-4 mr-1" />
            Proses Kerja
          </span>

          <h2 className="process-title mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-fuchsia-700 sm:text-5xl mb-4">
            Bagaimana Kami Bekerja
          </h2>

          <p className="process-description mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Pendekatan sistematis kami memastikan hasil yang maksimal dan kepuasan klien.
          </p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal timeline line */}
          <div className="timeline-line absolute top-28 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-emerald-500/50 z-0"></div>

          <div className="process-grid grid grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="process-step relative">
                {/* Number bubble positioned at the timeline */}
                <div className="number-bubble absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-16 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                  {/* Colored top border */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`}></div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`mb-5 w-16 h-16 rounded-lg bg-gradient-to-br ${step.lightColor} flex items-center justify-center step-icon`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${step.darkColor} transition-colors duration-300`}>
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector arrow for all except last item */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-28 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile & Tablet */}
        <div className="lg:hidden">
          <div className="process-grid flex flex-col space-y-10">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step relative">
                {/* Vertical connector */}
                {step.number < processSteps.length && (
                  <div className="absolute left-7 top-20 w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent z-0"></div>
                )}

                <div className="flex">
                  {/* Left side - number & icon */}
                  <div className="mr-5">
                    <div className={`number-bubble w-14 h-14 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Right side - content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                      {/* Colored top border */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`}></div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`mr-4 w-12 h-12 rounded-lg bg-gradient-to-br ${step.lightColor} flex items-center justify-center step-icon`}>
                            <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                              {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                            </div>
                          </div>
                          <h3 className={`text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${step.darkColor} transition-colors duration-300`}>
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}