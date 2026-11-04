import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'light' | 'dark';
  layout?: 'horizontal' | 'stacked';
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '',
  variant = 'light',
  layout = 'horizontal',
  asLink = true
}) => {
  // Height & constrained max-width classes depending on layout and size
  const heightClasses = layout === 'stacked'
    ? {
        sm: 'h-10 sm:h-12 max-w-[130px]',
        md: 'h-12 sm:h-14 md:h-16 max-w-[160px]',
        lg: 'h-16 sm:h-18 md:h-20 max-w-[200px]',
        xl: 'h-22 sm:h-26 md:h-28 max-w-[260px]',
      }[size]
    : {
        sm: 'h-7 sm:h-8 max-w-[180px]',
        md: 'h-8 sm:h-9 md:h-10 max-w-[210px] sm:max-w-[230px]',
        lg: 'h-9 sm:h-10 md:h-11 max-w-[230px] sm:max-w-[250px]',
        xl: 'h-12 sm:h-14 md:h-16 max-w-[300px]',
      }[size];

  const logoSrc = layout === 'stacked'
    ? (variant === 'dark' ? '/assets/logo/deeppura-logo-dark.png' : '/assets/logo/deeppura-logo.png')
    : (variant === 'dark' ? '/assets/logo/deeppura-logo-horizontal-dark.png' : '/assets/logo/deeppura-logo-horizontal.png');

  const content = (
    <div className={`inline-flex items-center group transition-all duration-200 shrink-0 max-w-full ${className}`}>
      <img
        src={logoSrc}
        alt="DEEPPURA BUILDERS - Crafting Dreams, Creating Landmarks"
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-xs block`}
        loading="eager"
        decoding="async"
      />
    </div>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link 
      to="/" 
      className="inline-flex shrink-0 select-none cursor-pointer focus:outline-none max-w-full"
      aria-label="DEEPPURA BUILDERS Home"
    >
      {content}
    </Link>
  );
};

export default Logo;
