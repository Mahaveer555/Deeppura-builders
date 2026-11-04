import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '',
  showTagline = true,
  variant = 'dark'
}) => {
  const dimensions = {
    sm: { iconH: 30, textScale: 'text-lg', subScale: 'text-[8.5px]' },
    md: { iconH: 38, textScale: 'text-xl', subScale: 'text-[9.5px]' },
    lg: { iconH: 48, textScale: 'text-2xl', subScale: 'text-[10.5px]' },
  }[size];

  const strokeColor = variant === 'dark' ? '#FFFFFF' : '#1A1D20';
  const accentColor = variant === 'dark' ? '#34D399' : '#059669';
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#1A1D20]';
  const subTextColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <Link 
      to="/" 
      className={`inline-flex flex-col group transition-opacity duration-200 hover:opacity-90 shrink-0 whitespace-nowrap ${className}`}
      aria-label="DEEPPURA GROUP Home"
    >
      <div className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
        {/* Architectural Twin Towers Emblem */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg 
            width={dimensions.iconH * 0.95} 
            height={dimensions.iconH} 
            viewBox="0 0 90 95" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            {/* Left Tower */}
            <path 
              d="M12 80 L12 28 L40 8 L40 80 Z" 
              fill="none" 
              stroke={strokeColor} 
              strokeWidth="4" 
              strokeLinejoin="round" 
              strokeLinecap="round" 
            />
            {/* Windows Left */}
            <rect x="20" y="38" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="30" y="30" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="20" y="48" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="30" y="40" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="20" y="58" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="30" y="50" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="20" y="68" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="30" y="60" width="5.5" height="5.5" rx="1" fill={accentColor} />

            {/* Right Tower */}
            <path 
              d="M78 80 L78 28 L50 8 L50 80 Z" 
              fill="none" 
              stroke={strokeColor} 
              strokeWidth="4" 
              strokeLinejoin="round" 
              strokeLinecap="round" 
            />
            {/* Windows Right */}
            <rect x="55" y="30" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="65" y="38" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="55" y="40" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="65" y="48" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="55" y="50" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="65" y="58" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="55" y="60" width="5.5" height="5.5" rx="1" fill={accentColor} />
            <rect x="65" y="68" width="5.5" height="5.5" rx="1" fill={accentColor} />

            {/* Base foundation line */}
            <line x1="6" y1="82" x2="84" y2="82" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Brand Name Typography */}
        <div className="flex flex-col justify-center shrink-0 whitespace-nowrap">
          <div className="flex items-baseline tracking-tight font-black leading-none font-heading whitespace-nowrap">
            <span className={`${dimensions.textScale} font-black ${textColor}`}>
              DEEPPURA
            </span>
            <span className={`${dimensions.textScale} font-black text-emerald-500 ml-1.5`}>
              GROUP
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1 mt-1 shrink-0 whitespace-nowrap">
              <span className={`${dimensions.subScale} font-semibold tracking-[0.16em] uppercase ${subTextColor}`}>
                Crafting Dreams, Creating Landmarks
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
