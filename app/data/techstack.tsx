// technologies.ts
// File ini berisi data teknologi

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
  
  export const technologies: Technology[] = [
    {
      id: 'nextjs',
      name: 'Next.js',
      description: 'Framework React untuk aplikasi web full-stack dengan rendering server dan static site generation',
      image: '/images/nextjs.svg',
      category: 'frontend',
      expertise: 5,
      yearAdopted: 2019,
      useCases: ['Corporate websites', 'E-commerce', 'Dashboard aplikasi', 'Content-driven websites'],
      features: ['Server-side rendering', 'Static site generation', 'API routes', 'Image optimization'],
      website: 'https://nextjs.org'
    },
    {
      id: 'react',
      name: 'React',
      description: 'Library JavaScript untuk membangun antarmuka pengguna berbasis komponen',
      image: '/images/react.svg',
      category: 'frontend',
      expertise: 5,
      yearAdopted: 2017,
      useCases: ['Single page applications', 'Progressive web apps', 'Dashboard admin', 'Aplikasi interaktif'],
      features: ['Component-based', 'Virtual DOM', 'React hooks', 'JSX syntax'],
      website: 'https://reactjs.org'
    },
    {
      id: 'vue',
      name: 'Vue.js',
      description: 'Framework JavaScript progresif untuk membangun UI yang adaptif dan performant',
      image: '/images/vue.svg',
      category: 'frontend',
      expertise: 4,
      yearAdopted: 2018,
      useCases: ['Single page applications', 'Widget interaktif', 'Aplikasi enterprise'],
      features: ['Two-way data binding', 'Directive system', 'Composition API', 'Vue router'],
      website: 'https://vuejs.org'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      description: 'Framework CSS utility-first untuk styling yang cepat dan efisien',
      image: '/images/tailwind.svg',
      category: 'ui',
      expertise: 5,
      yearAdopted: 2020,
      useCases: ['Responsive websites', 'Custom UI components', 'Rapid prototyping'],
      features: ['Utility-first', 'Dark mode', 'JIT compiler', 'Customizable themes'],
      website: 'https://tailwindcss.com'
    },
    {
      id: 'shadcn',
      name: 'shadcn/ui',
      description: 'Komponen UI berkualitas tinggi yang dapat disesuaikan untuk React',
      image: '/images/shadcn.svg',
      category: 'ui',
      expertise: 5,
      yearAdopted: 2022,
      useCases: ['Dashboard admin', 'Aplikasi SaaS', 'Komponen UI kompleks'],
      features: ['High-quality components', 'Customizable', 'Accessibility', 'TypeScript support'],
      website: 'https://ui.shadcn.com'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Runtime JavaScript untuk server-side yang dibangun di atas Chrome V8 JavaScript engine',
      image: '/images/nodejs.svg',
      category: 'backend',
      expertise: 5,
      yearAdopted: 2016,
      useCases: ['RESTful APIs', 'Microservices', 'Real-time applications', 'CLI tools'],
      features: ['Non-blocking I/O', 'Event-driven', 'NPM ecosystem', 'Scalable services'],
      website: 'https://nodejs.org'
    },
    {
      id: 'express',
      name: 'Express.js',
      description: 'Framework web yang minimalis dan fleksibel untuk Node.js',
      image: '/images/express.svg',
      category: 'backend',
      expertise: 5,
      yearAdopted: 2016,
      useCases: ['REST APIs', 'Web servers', 'Backend for SPAs', 'Middleware integration'],
      features: ['Routing', 'Middleware support', 'Template engines', 'Error handling'],
      website: 'https://expressjs.com'
    },
    {
      id: 'django',
      name: 'Django',
      description: 'High-level Python web framework yang mendorong pengembangan cepat dan desain yang bersih',
      image: '/images/django.svg',
      category: 'backend',
      expertise: 4,
      yearAdopted: 2018,
      useCases: ['Content management systems', 'E-commerce backends', 'Enterprise apps'],
      features: ['ORM', 'Admin interface', 'Authentication', 'Security'],
      website: 'https://www.djangoproject.com'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Bahasa yang memperluas JavaScript dengan penambahan tipe statis',
      image: '/images/typescript.svg',
      category: 'language',
      expertise: 5,
      yearAdopted: 2018,
      useCases: ['Large-scale applications', 'Enterprise software', 'Team development'],
      features: ['Static typing', 'Type inference', 'Interfaces', 'Generics'],
      website: 'https://www.typescriptlang.org'
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Bahasa pemrograman yang mudah dibaca dengan sintaks yang jelas dan ekspresif',
      image: '/images/python.svg',
      category: 'language',
      expertise: 4,
      yearAdopted: 2017,
      useCases: ['Web development', 'Data analysis', 'Automation', 'Machine learning'],
      features: ['Easy to learn', 'Large standard library', 'Extensive third-party packages', 'Cross-platform'],
      website: 'https://www.python.org'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Sistem database relasional open source yang powerful dan enterprise-ready',
      image: '/images/postgresql.svg',
      category: 'database',
      expertise: 5,
      yearAdopted: 2017,
      useCases: ['Enterprise applications', 'Geospatial data', 'Complex data models'],
      features: ['ACID compliance', 'JSON support', 'GIS capabilities', 'Full-text search'],
      website: 'https://www.postgresql.org'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Database NoSQL berbasis dokumen yang fleksibel dan skalabel',
      image: '/images/mongodb.svg',
      category: 'database',
      expertise: 4,
      yearAdopted: 2018,
      useCases: ['Content management', 'Real-time analytics', 'IoT applications'],
      features: ['Document model', 'Horizontal scaling', 'Aggregation framework', 'Change streams'],
      website: 'https://www.mongodb.com'
    },
    {
      id: 'redis',
      name: 'Redis',
      description: 'In-memory data structure store yang digunakan sebagai database, cache, dan message broker',
      image: '/images/redis.svg',
      category: 'database',
      expertise: 4,
      yearAdopted: 2019,
      useCases: ['Caching', 'Session storage', 'Real-time analytics', 'Message queues'],
      features: ['In-memory storage', 'Data structures', 'Pub/sub messaging', 'Lua scripting'],
      website: 'https://redis.io'
    },
    {
      id: 'reactnative',
      name: 'React Native',
      description: 'Framework untuk membangun aplikasi mobile native menggunakan React',
      image: '/images/reactnative.svg',
      category: 'mobile',
      expertise: 5,
      yearAdopted: 2019,
      useCases: ['Cross-platform mobile apps', 'Enterprise mobile solutions', 'Interactive apps'],
      features: ['Cross-platform', 'Native components', 'Hot reloading', 'Large ecosystem'],
      website: 'https://reactnative.dev'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      description: 'SDK dari Google untuk membangun aplikasi yang tampak cantik, berjalan cepat, dan native untuk mobile, web, dan desktop',
      image: '/images/flutter.svg',
      category: 'mobile',
      expertise: 3,
      yearAdopted: 2021,
      useCases: ['E-commerce apps', 'Productivity tools', 'Educational apps'],
      features: ['Single codebase', 'Hot reload', 'Custom UI', 'High performance'],
      website: 'https://flutter.dev'
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Platform untuk mengembangkan, mengirimkan, dan menjalankan aplikasi dalam container',
      image: '/images/docker.svg',
      category: 'devops',
      expertise: 5,
      yearAdopted: 2018,
      useCases: ['Microservices', 'CI/CD pipelines', 'Application deployment'],
      features: ['Containerization', 'Docker Compose', 'Docker Hub', 'Resource isolation'],
      website: 'https://www.docker.com'
    },
    {
      id: 'aws',
      name: 'AWS',
      description: 'Platform cloud computing komprehensif dari Amazon',
      image: '/images/aws.svg',
      category: 'devops',
      expertise: 4,
      yearAdopted: 2018,
      useCases: ['Web hosting', 'Serverless applications', 'Database services', 'Storage solutions'],
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation'],
      website: 'https://aws.amazon.com'
    },
    {
      id: 'jest',
      name: 'Jest',
      description: 'Framework testing JavaScript dengan fokus pada kesederhanaan',
      image: '/images/jest.svg',
      category: 'testing',
      expertise: 4,
      yearAdopted: 2019,
      useCases: ['Unit testing', 'Integration testing', 'Snapshot testing'],
      features: ['Zero config', 'Snapshot testing', 'Mocking', 'Code coverage'],
      website: 'https://jestjs.io'
    },
    {
      id: 'cypress',
      name: 'Cypress',
      description: 'Framework testing end-to-end untuk aplikasi web yang berjalan di browser',
      image: '/images/cypress.svg',
      category: 'testing',
      expertise: 4,
      yearAdopted: 2020,
      useCases: ['E2E testing', 'Component testing', 'Visual regression'],
      features: ['Real browser testing', 'Time travel', 'Automatic waiting', 'Screenshot and video'],
      website: 'https://www.cypress.io'
    },
    {
      id: 'ga',
      name: 'Google Analytics',
      description: 'Platform analytics yang menyediakan wawasan tentang traffic website dan efektivitas pemasaran',
      image: '/images/googleanalytics.svg',
      category: 'analytics',
      expertise: 4,
      yearAdopted: 2017,
      useCases: ['Web analytics', 'User behavior tracking', 'Conversion optimization'],
      features: ['Real-time data', 'Custom events', 'Audience segmentation', 'Goal tracking'],
      website: 'https://analytics.google.com'
    }
  ];