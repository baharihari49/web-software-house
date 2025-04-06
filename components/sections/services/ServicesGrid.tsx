import React from 'react';
import ServiceCard from '@/components/service-card';
import { Service } from '@/app/data/services';

interface ServicesGridProps {
  services: Service[];
  selectedService: number | null;
  toggleServiceDetails: (id: number) => void;
}

export default function ServicesGrid({
  services,
  selectedService,
  toggleServiceDetails
}: ServicesGridProps) {
  return (
    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard 
          key={service.id}
          service={service}
          expanded={selectedService === service.id}
          onToggle={toggleServiceDetails}
        />
      ))}
    </div>
  );
}