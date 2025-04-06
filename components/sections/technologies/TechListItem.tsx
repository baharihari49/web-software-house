// TechListItem.tsx
// Component for displaying technology in list view

import React from 'react';
import { 
  CheckCircle, 
  ChevronRight, 
  ExternalLink, 
  Calendar, 
  Star 
} from 'lucide-react';
import { Technology, TechCategory } from '@/app/data/techstack';
import { categories } from '@/app/data/techstack';

interface TechListItemProps {
  tech: Technology;
  expandedTech: string | null;
  setExpandedTech: (id: string | null) => void;
  getCategoryIcon: (category: TechCategory) => React.ReactNode;
}

export const TechListItem: React.FC<TechListItemProps> = ({ 
  tech, 
  expandedTech, 
  setExpandedTech,
  getCategoryIcon
}) => {
  // Render expertise stars
  const renderExpertiseStars = (level: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < level ? 'text-purple-400 fill-purple-400' : 'text-gray-300'}`}
      />
    ));
  };

  const isExpanded = expandedTech === tech.id;

  return (
    <div className="tech-card relative">
      <div className="group relative">
        <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 ${isExpanded ? 'opacity-100' : 'group-hover:opacity-30'} transition duration-300`}></div>
        
        <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/70 dark:border-slate-700/70 overflow-hidden">
          {/* Main content row */}
          <div className="p-4 grid grid-cols-12 items-center gap-4">
            {/* Tech info - mobile friendly */}
            <div className="col-span-12 md:col-span-3 flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/80x80?text=${tech.name.charAt(0)}`;
                  }}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{tech.name}</h3>
              </div>
            </div>
            
            {/* Rest of the info - hidden on mobile unless expanded */}
            <div className="hidden md:block md:col-span-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                <span className="w-3 h-3">
                  {getCategoryIcon(tech.category)}
                </span>
                {categories[tech.category].label}
              </span>
            </div>
            
            <div className="hidden md:flex md:col-span-2 items-center">
              {renderExpertiseStars(tech.expertise)}
            </div>
            
            <div className="hidden md:block md:col-span-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {tech.yearAdopted}
              </span>
            </div>
            
            <div className="hidden md:flex md:col-span-3 flex-wrap gap-1">
              {tech.useCases.slice(0, 2).map((useCase, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300"
                >
                  {useCase}
                </span>
              ))}
              {tech.useCases.length > 2 && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  +{tech.useCases.length - 2}
                </span>
              )}
            </div>
            
            {/* Toggle details button */}
            <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-0 flex justify-between md:justify-end items-center mt-3 md:mt-0">
              <div className="flex md:hidden items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-purple-400 fill-purple-400" />
                  {tech.expertise}/5
                </span>
                <span className="mx-1">•</span>
                <span>{tech.yearAdopted}</span>
              </div>
              
              <button 
                type="button"
                onClick={() => setExpandedTech(isExpanded ? null : tech.id)}
                className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1"
              >
                {isExpanded ? 'Sembunyikan' : 'Detail'}
                <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Expanded details */}
          {isExpanded && (
            <div className="p-4 pt-0 border-t border-slate-200 dark:border-slate-700 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2">Deskripsi</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">{tech.description}</p>
                  
                  <div className="md:hidden flex flex-wrap gap-1 mb-3">
                    <h4 className="w-full text-sm font-medium text-slate-800 dark:text-white mb-1">Use Cases</h4>
                    {tech.useCases.map((useCase, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300"
                      >
                        {useCase}
                      </span>
                    ))}
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
                
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2">Fitur Utama</h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};