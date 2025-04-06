// tech-types.ts
// File ini berisi tipe data untuk teknologi

export interface Technology {
    id: string;
    name: string;
    description: string;
    image: string;
    category: TechCategory;
    expertise: number; // 1-5 scale
    yearAdopted: number;
    useCases: string[];
    features: string[];
    website: string;
  }
  
  export type TechCategory = 
    | 'frontend' 
    | 'backend' 
    | 'database' 
    | 'mobile' 
    | 'devops' 
    | 'language' 
    | 'ui' 
    | 'testing'
    | 'analytics';
  
  export const categories: { [key in TechCategory]: { label: string; description: string; icon: string } } = {
    frontend: {
      label: 'Frontend',
      description: 'Teknologi untuk membangun antarmuka pengguna yang interaktif dan responsif',
      icon: 'Layers'
    },
    backend: {
      label: 'Backend',
      description: 'Framework dan runtime untuk membangun layanan server dan API',
      icon: 'Server'
    },
    database: {
      label: 'Database',
      description: 'Sistem untuk menyimpan, mengelola, dan mengakses data',
      icon: 'Database'
    },
    mobile: {
      label: 'Mobile',
      description: 'Teknologi untuk pengembangan aplikasi mobile iOS dan Android',
      icon: 'Smartphone'
    },
    devops: {
      label: 'DevOps',
      description: 'Alat untuk deployment, CI/CD, dan infrastruktur cloud',
      icon: 'Cloud'
    },
    language: {
      label: 'Languages',
      description: 'Bahasa pemrograman yang kami gunakan untuk development',
      icon: 'Code'
    },
    ui: {
      label: 'UI Libraries',
      description: 'Komponen dan library untuk membangun antarmuka yang menarik',
      icon: 'Palette'
    },
    testing: {
      label: 'Testing',
      description: 'Framework dan alat untuk testing dan quality assurance',
      icon: 'CheckCircle'
    },
    analytics: {
      label: 'Analytics',
      description: 'Solusi untuk analisis data dan business intelligence',
      icon: 'BarChart'
    }
  };