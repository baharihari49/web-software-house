"use client";

import { useRef, useEffect, useState } from "react";
import { services, serviceCategories } from "@/app/data/services";
import { useGSAPAnimation } from "@/hooks/useServicesAnimation"; // Renamed import

// Components
import ServicesHeader from "./ServicesHeader";
import CategoryTabs from "./CategoryTabs";
import ServicesGrid from "./ServicesGrid";
import BackgroundElements from "./BackgroundElements";

// CSS for text gradient
import './styles/gradients.css';

export default function Services() {
  // Define the ref with the correct type
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleServices, setVisibleServices] = useState(services);
  const [isClient, setIsClient] = useState(false);

  // Mark component as client-side mounted to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle category change
  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleServices(services);
    } else {
      const category = serviceCategories.find(cat => cat.id === activeCategory);
      if (category && category.services) {
        setVisibleServices(services.filter(service =>
          category.services!.includes(service.id)
        ));
      }
    }
  }, [activeCategory]);

  // Apply animations directly with the hook
  useGSAPAnimation(sectionRef, isClient, [visibleServices]);

  // Handle service selection
  const toggleServiceDetails = (id: number) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative bg-white overflow-hidden"
    >
      <BackgroundElements />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <ServicesHeader />

        {/* Category tabs */}
        <CategoryTabs 
          categories={serviceCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Service cards grid */}
        <ServicesGrid 
          services={visibleServices}
          selectedService={selectedService}
          toggleServiceDetails={toggleServiceDetails}
        />
      </div>
    </section>
  );
}