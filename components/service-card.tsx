import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Check, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  Star, 
  Award, 
  TrendingUp,
  Zap,
  Heart,
  Clock
} from "lucide-react";

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    tagline?: string;
    icon: React.ReactNode;
    features: string[];
    color?: string;
    lightColor?: string;
    textColor?: string;
    borderColor?: string;
    accentColor?: string;
    image?: React.ReactNode | string;
    stats?: {
      projects: number;
      clients: number;
      satisfaction: number;
    };
  };
  expanded?: boolean;
  onToggle?: (id: number) => void;
}

export default function ServiceCard({ service, expanded = false, onToggle }: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  // Set client-side rendering flag to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
    // Add a small delay before starting animations to ensure smooth rendering
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Default color scheme if not provided
  const colorScheme = {
    color: service.color || "from-indigo-500 to-purple-600",
    lightColor: service.lightColor || "bg-indigo-50",
    textColor: service.textColor || "text-indigo-600",
    borderColor: service.borderColor || "border-indigo-200",
    accentColor: service.accentColor || "bg-indigo-500"
  };
  
  // Extract the primary color from the color scheme for inline styling
  const primaryColor = colorScheme.textColor.replace('text-', '');

  // Check if the image is a string (URL) or a React component
  const isImageUrl = typeof service.image === 'string';
  const isImageComponent = service.image && !isImageUrl;

  return (
    <div 
      className={`service-card relative overflow-hidden transition-all duration-500 group rounded-lg ${
        expanded ? `border-2 border-${primaryColor} shadow-lg shadow-${primaryColor}/10` : 
        'border border-gray-200 hover:border-gray-300 hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative corner accent */}
      <div 
        className={`absolute -top-12 -right-12 w-24 h-24 rotate-45 transform transition-all duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${colorScheme.color}`} 
      />
      
      {/* Card image header - shows if image URL is provided */}
      {isImageUrl && isClient && (
        <div className="relative h-56 overflow-hidden group-hover:h-60 transition-all duration-500">
          <Image
            src={service.image as string}
            alt={service.title}
            fill
            className={`object-cover transform transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 opacity-85 bg-gradient-to-tr ${colorScheme.color}`}></div>
          
          {/* Floating elements for added visual interest */}
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm animate-pulse"></div>
          <div className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3 shadow-lg border border-white/20 transform transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-3' : ''
            }`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{service.title}</h3>
            <p className="text-sm opacity-90 backdrop-blur-sm bg-black/10 inline-block px-2 py-0.5 rounded-full w-fit">
              {service.tagline || "Solusi digital terbaik"}
            </p>
          </div>
        </div>
      )}
      
      {/* SVG Component image display */}
      {isImageComponent && isClient && (
        <div className="relative h-56 overflow-hidden group-hover:h-60 transition-all duration-500">
          <div className="absolute inset-0 w-full h-full">
            {service.image}
          </div>
          <div className={`absolute inset-0 opacity-40 bg-gradient-to-tr ${colorScheme.color}`}></div>
          
          {/* Floating elements for added visual interest */}
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm animate-pulse"></div>
          <div className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm mb-3 shadow-lg border border-white/20 transform transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-3' : ''
            }`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{service.title}</h3>
            <p className="text-sm opacity-90 backdrop-blur-sm bg-black/10 inline-block px-2 py-0.5 rounded-full w-fit">
              {service.tagline || "Solusi digital terbaik"}
            </p>
          </div>
        </div>
      )}
      
      {/* Traditional card header - shows if no image */}
      {!service.image && (
        <div className="p-6 pb-2 relative overflow-hidden">
          <div className={`absolute inset-0 opacity-10 ${colorScheme.color}`}></div>
          <div className={`${colorScheme.lightColor} ${colorScheme.textColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md border border-${primaryColor}/20 transform transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-3' : ''
          }`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold relative z-10">
            {service.title.split(' ').map((word, index, array) => 
              index === array.length - 1 ? 
                <span key={index} className="text-gradient-to-br from-purple-600 to-fuchsia-600">{word} </span> : 
                <span key={index}>{word} </span>
            )}
          </h3>
          {service.tagline && (
            <div className={`text-sm px-2 py-0.5 rounded-full w-fit mt-1 ${colorScheme.lightColor} ${colorScheme.textColor}`}>
              {service.tagline}
            </div>
          )}
        </div>
      )}
      
      <div className="space-y-4 p-6 relative">
        {/* Highlight pill for key feature - Enhanced visibility */}
        <div className={`absolute top-0 right-6 transform -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-20 bg-gradient-to-r ${colorScheme.color} text-white border border-white/30 backdrop-blur-sm`}>
          <Star className="w-3 h-3 inline-block mr-1" />
          Top Choice
        </div>
        
        <p className="text-gray-600">
          {service.description}
        </p>
        
        <div className="mb-2">
          <p className="text-sm font-bold text-gray-800 mb-3 flex items-center">
            <Zap className={`w-4 h-4 mr-1 ${colorScheme.textColor}`} />
            Fitur Utama:
          </p>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className={`mt-0.5 mr-3 w-5 h-5 rounded-full flex-shrink-0 ${colorScheme.lightColor} flex items-center justify-center transform transition-transform group-hover/item:scale-110`}>
                  <Check className={`w-3 h-3 ${colorScheme.textColor}`} />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick stats section - always visible even when not expanded */}
        {service.stats && (
          <div className="grid grid-cols-3 gap-1 my-3">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <TrendingUp className={`w-4 h-4 ${colorScheme.textColor} mb-1`} />
                <span className={`text-lg font-bold ${colorScheme.textColor}`}>{service.stats.projects}+</span>
                <span className="text-xs text-gray-500">Projects</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Heart className={`w-4 h-4 ${colorScheme.textColor} mb-1`} />
                <span className={`text-lg font-bold ${colorScheme.textColor}`}>{service.stats.clients}</span>
                <span className="text-xs text-gray-500">Clients</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Star className={`w-4 h-4 ${colorScheme.textColor} mb-1`} />
                <span className={`text-lg font-bold ${colorScheme.textColor}`}>{service.stats.satisfaction}%</span>
                <span className="text-xs text-gray-500">Satisfaction</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Show more details button */}
        {onToggle && (
          <button 
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all border ${
              expanded
                ? `${colorScheme.color} text-white border-transparent`
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
            }`}
            onClick={() => onToggle(service.id)}
          >
            <span>
              {expanded ? 'Tutup Detail' : 'Lihat Detail'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${
              expanded ? 'rotate-180' : ''
            }`} />
          </button>
        )}
        
        {/* Expanded details */}
        {expanded && service.stats && (
          <div className="mt-5 pt-5 border-t border-gray-100 transition-all">
            {/* Subtle close button at the top right */}
            <div className="flex justify-end -mt-2 mb-3">
              <button 
                onClick={() => onToggle && onToggle(service.id)}
                className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all`}
              >
                <ChevronDown className="w-3 h-3 mr-1 rotate-180" />
                Tutup Detail
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                <Award className={`w-4 h-4 mr-1 ${colorScheme.textColor}`} />
                Kepuasan Klien
              </p>
              
              {/* Satisfaction meter with clear filled bar */}
              <div className="h-6 w-full bg-gray-100 rounded-md overflow-hidden relative mb-1">
                {/* Filled progress bar with fixed percentage width */}
                <div 
                  className={`h-full bg-gradient-to-r ${colorScheme.color} relative flex items-center justify-end pr-2 text-xs font-medium text-white`} 
                  style={{ width: `${service.stats.satisfaction}%` }}
                >
                  {service.stats.satisfaction}%
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1 text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            
            {/* Key benefits badges */}
            <p className="text-sm font-bold text-gray-800 mb-3">Key Benefits:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs ${colorScheme.lightColor} ${colorScheme.textColor}`}>
                <Clock className="inline-block w-3 h-3 mr-1" /> Fast Turnaround
              </span>
              <span className={`px-3 py-1 rounded-full text-xs ${colorScheme.lightColor} ${colorScheme.textColor}`}>
                <Award className="inline-block w-3 h-3 mr-1" /> Expert Team
              </span>
              <span className={`px-3 py-1 rounded-full text-xs ${colorScheme.lightColor} ${colorScheme.textColor}`}>
                <TrendingUp className="inline-block w-3 h-3 mr-1" /> ROI Focus
              </span>
            </div>
            
            {/* Timeline indicator */}
            <p className="text-sm font-bold text-gray-800 mb-3">Typical Timeline:</p>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 text-center">
                <div className={`w-8 h-8 rounded-full mx-auto ${colorScheme.lightColor} flex items-center justify-center mb-1`}>
                  <span className="text-xs font-medium">1</span>
                </div>
                <p className="text-xs">Brief</p>
              </div>
              <div className={`h-0.5 flex-grow ${colorScheme.lightColor}`}></div>
              <div className="w-10 text-center">
                <div className={`w-8 h-8 rounded-full mx-auto ${colorScheme.lightColor} flex items-center justify-center mb-1`}>
                  <span className="text-xs font-medium">2</span>
                </div>
                <p className="text-xs">Design</p>
              </div>
              <div className={`h-0.5 flex-grow ${colorScheme.lightColor}`}></div>
              <div className="w-10 text-center">
                <div className={`w-8 h-8 rounded-full mx-auto ${colorScheme.lightColor} flex items-center justify-center mb-1`}>
                  <span className="text-xs font-medium">3</span>
                </div>
                <p className="text-xs">Develop</p>
              </div>
              <div className={`h-0.5 flex-grow ${colorScheme.lightColor}`}></div>
              <div className="w-10 text-center">
                <div className={`w-8 h-8 rounded-full mx-auto ${colorScheme.lightColor} flex items-center justify-center mb-1`}>
                  <span className="text-xs font-medium">4</span>
                </div>
                <p className="text-xs">Launch</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className={`flex justify-between p-6 pt-0 ${colorScheme.borderColor} ${
        expanded ? 'border-t' : ''
      }`}>
        <Link 
          href="#portfolio" 
          className={`inline-flex items-center text-sm font-bold ${colorScheme.textColor} hover:underline group/link`}
        >
          Portfolio
          <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
        </Link>
        
        <Link 
          href="#contact" 
          className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${colorScheme.color} text-white shadow-sm hover:shadow-md transition-all`}
        >
          Konsultasi
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      {/* Add some CSS for animations and text gradient */}
      <style jsx global>{`
        @keyframes animate-background {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
        
        .text-gradient-to-r {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        
        .text-gradient-to-br {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }
        
        .from-purple-600 {
          --tw-gradient-from: #9333ea;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(147, 51, 234, 0));
        }
        
        .to-fuchsia-600 {
          --tw-gradient-to: #c026d3;
        }
        
        .to-purple-600 {
          --tw-gradient-to: #9333ea;
        }
      `}</style>
    </div>
  );
}