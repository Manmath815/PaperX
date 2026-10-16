import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
}) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-8 text-xl',
    md: 'h-10 text-2xl',
    lg: 'h-12 text-3xl',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  return (
    <Link 
      to="/" 
      className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-lg"
      aria-label="PaperX — Return to Homepage"
    >
      {/* Paper-fold & leaf organic emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Base rounded square / paper envelope */}
          <rect 
            x="2" 
            y="2" 
            width="32" 
            height="32" 
            rx="9" 
            fill={isLight ? '#F7F6F0' : '#174D37'} 
          />
          {/* Folded paper facet */}
          <path 
            d="M10 10H20L26 16V26H10V10Z" 
            fill={isLight ? '#174D37' : '#F7F6F0'} 
            fillOpacity={isLight ? "0.9" : "0.95"}
          />
          {/* Folded corner triangle with leaf green tone */}
          <path 
            d="M20 10V16H26L20 10Z" 
            fill="#8EBF78" 
          />
          {/* Organic leaf vein accent */}
          <path 
            d="M14 21C15.5 18.5 19 18 21 19.5C21 21.5 19.5 24 16 23.5L14 21Z" 
            fill={isLight ? '#8EBF78' : '#174D37'} 
          />
          <path 
            d="M15 22.5L19 19.5" 
            stroke={isLight ? '#174D37' : '#8EBF78'} 
            strokeWidth="1.2" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-display font-extrabold tracking-tight ${sizeClasses[size]} ${isLight ? 'text-warm-white' : 'text-forest-900'}`}>
            Paper
          </span>
          <span className={`font-display font-extrabold tracking-tight ${sizeClasses[size]} text-leaf`}>
            X
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-wider uppercase font-medium -mt-1 ${isLight ? 'text-warm-beige' : 'text-charcoal-400'}`}>
            Good Paper. Better Future.
          </span>
        )}
      </div>
    </Link>
  );
};
