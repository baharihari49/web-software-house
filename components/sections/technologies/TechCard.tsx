// TechCard.tsx
// Component untuk menampilkan kartu teknologi dalam tampilan grid

import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle, 
  ChevronRight, 
  ExternalLink, 
  Calendar, 
  Star 
} from 'lucide-react';
import { Technology } from '@/app/data/techstack';
import { categories } from '@/app/data/techstack';

interface TechCardProps {
  tech: Technology;
  expandedTech: string | null;
  setExpandedTech: (id: string | null) => void;
}

export const TechCard: React.FC<TechCardProps> = ({ 
  tech, 
  expandedTech, 
  setExpandedTech 
}) => {
  // Render expertise stars
  const renderExpertiseStars = (level: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < level ? 'text-purple-400 fill-purple-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="tech-card relative">
      {/* Card with gradient border effect */}
      <div className="group h-full relative">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-30 group-hover:opacity-100 transition duration-300"></div>
        
        <div className="relative p-5 bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-md border border-slate-200/70 dark:border-slate-700/70 h-full flex flex-col">
          {/* Category indicator */}
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <span 
              className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              title={categories[tech.category].description}
            >
              {categories[tech.category].label}
            </span>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1.5">
              <Image
                src={tech.image}
                alt={tech.name}
                fill
                className="object-contain p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/80x80?text=${tech.name.charAt(0)}`;
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{tech.name}</h3>
              <div className="flex items-center mt-1">
                {renderExpertiseStars(tech.expertise)}
              </div>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{tech.description}</p>
          
          <div className="mt-auto">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Digunakan sejak {tech.yearAdopted}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {tech.useCases.slice(0, 3).map((useCase, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300"
                >
                  {useCase}
                </span>
              ))}
              {tech.useCases.length > 3 && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  +{tech.useCases.length - 3}
                </span>
              )}
            </div>
            
            <button 
              type="button"
              onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1"
            >
              {expandedTech === tech.id ? 'Sembunyikan detail' : 'Lihat detail'}
              <ChevronRight className={`w-4 h-4 transition-transform ${expandedTech === tech.id ? 'rotate-90' : ''}`} />
            </button>
            
            {expandedTech === tech.id && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-1">Fitur Utama</h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={tech.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Website resmi
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};