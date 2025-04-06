// BasicPagination.tsx
// Simple pagination component for the tech stack

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BasicPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const BasicPagination: React.FC<BasicPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);
    
    // Add dots before range if needed
    if (rangeStart > 2) {
      pages.push('...');
    }
    
    // Add pages in range
    for (var i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }
    
    // Add dots after range if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center mt-10">
      <nav className="flex items-center space-x-1">
        {/* Previous button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${
            currentPage === 1
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-slate-400">...</span>
            ) : (
              <button
                type="button"
                onClick={() => typeof page === 'number' && onPageChange(page)}
                className={`w-10 h-10 rounded-md ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        
        {/* Next button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${
            currentPage === totalPages
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
};