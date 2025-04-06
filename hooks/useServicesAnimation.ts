// hooks/useServicesAnimation.ts

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Renamed to useGSAPAnimation to avoid confusion
// This is a proper React hook that can be called directly from components
export function useGSAPAnimation(
  sectionRef: React.RefObject<HTMLElement | null>,
  isClient: boolean,
  dependencyArray: any[] = []
) {
  useEffect(() => {
    if (!sectionRef.current || !isClient) return;

    const ctx = gsap.context(() => {
      // Header animations
      gsap.from(".services-header", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all"
      });

      // Stats section animation
      gsap.from(".stats-section > div", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out",
        clearProps: "all"
      });

      // Category tabs animation
      gsap.from(".category-tabs .tab", {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
        ease: "power1.out",
        clearProps: "all"
      });

      // Service cards animation
      gsap.from(".service-card", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.out",
        clearProps: "all"
      });

      // CTA section animation
      gsap.from(".cta-section", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient, ...dependencyArray, sectionRef]);
}

// Keep the old function name as an alias for backward compatibility
export const useServicesAnimation = useGSAPAnimation;