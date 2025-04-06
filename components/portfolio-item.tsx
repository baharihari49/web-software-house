import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Users, CheckCircle, Clock, ExternalLink } from "lucide-react";

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    client: string;
    completion: string;
    status: "Completed" | "In Progress" | "Maintenance";
    link?: string;
    achievements?: string[];
  };
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  // Calculate status color based on project status
  const getStatusColor = () => {
    switch (item.status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Maintenance":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="portfolio-item group relative flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Colorful category indicator on top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 z-10"></div>
      
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded-full shadow-sm backdrop-blur-sm border border-white/20">
          {item.category}
        </span>
      </div>
      
      {/* Status badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm border ${getStatusColor()}`}>
          {item.status === "Completed" ? <CheckCircle className="inline-block w-3 h-3 mr-1" /> : 
          item.status === "In Progress" ? <Clock className="inline-block w-3 h-3 mr-1" /> : 
          <CheckCircle className="inline-block w-3 h-3 mr-1" />}
          {item.status}
        </span>
      </div>
      
      {/* Image container with overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/800x500?text=${encodeURIComponent(item.title)}`;
          }}
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Project link - visible on hover */}
        {item.link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-white/90 text-gray-800 rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-white transition-colors duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Preview
            </a>
          </div>
        )}
      </div>
      
      {/* Content area */}
      <div className="flex flex-col grow p-6 pt-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-colors duration-300">
            {item.title}
          </h3>
        </div>
        
        {/* Client and completion info */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{item.client}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.completion}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 grow">
          {item.description}
        </p>
        
        {/* Achievements list - if available */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 mb-1.5">KEY ACHIEVEMENTS:</p>
            <ul className="space-y-1">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-md border border-purple-100"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* View details link */}
        <div className="mt-auto">
          <Link
            href={`/portfolio/${item.id}`}
            className="inline-flex items-center text-sm font-semibold py-2 px-4 rounded-lg text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-600 transition-all duration-300 group/link"
          >
            <span>Lihat Detail</span>
            <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}