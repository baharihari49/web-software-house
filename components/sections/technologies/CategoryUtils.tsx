// CategoryUtils.tsx
// Utilitas untuk kategori teknologi

import React, { JSX } from 'react';
import { 
  BarChart, 
  Code, 
  Database, 
  Layers, 
  Server, 
  Smartphone, 
  Cloud, 
  Palette, 
  CheckCircle 
} from 'lucide-react';
import { TechCategory } from '@/app/data/techstack';

// Map category to icon component
export const getCategoryIcon = (category: TechCategory): JSX.Element => {
  switch(category) {
    case 'frontend':
      return <Layers className="w-full h-full" />;
    case 'backend':
      return <Server className="w-full h-full" />;
    case 'database':
      return <Database className="w-full h-full" />;
    case 'mobile':
      return <Smartphone className="w-full h-full" />;
    case 'devops':
      return <Cloud className="w-full h-full" />;
    case 'language':
      return <Code className="w-full h-full" />;
    case 'ui':
      return <Palette className="w-full h-full" />;
    case 'testing':
      return <CheckCircle className="w-full h-full" />;
    case 'analytics':
      return <BarChart className="w-full h-full" />;
    default:
      return <Code className="w-full h-full" />;
  }
};