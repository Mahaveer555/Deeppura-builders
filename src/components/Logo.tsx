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
  // Height classes depending on size and layout
  const heightClasses = layout === 'stacked'
    ? {
        sm: 'h-10 sm:h-12',
        md: 'h-12 sm:h-14 md:h-16',
        lg: 'h-16 sm:h-20 md:h-24',
        xl: 'h-24 sm:h-28 md:h-32',
      }[size]
    : {
        sm: 'h-8 sm:h-9',
        md: 'h-9 sm:h-10 md:h-11',
        lg: 'h-11 sm:h-12 md:h-14',
        xl: 'h-14 sm:h-16 md:h-20',
      }[size];

  const logoSrc = layout === 'stacked'
    ? (variant === 'dark' ? '/assets/logo/deeppura-logo-dark.png' : '/assets/logo/deeppura-logo.png')
    : (variant === 'dark' ? '/assets/logo/deeppura-logo-horizontal-dark.png' : '/assets/logo/deeppura-logo-horizontal.png');

  const content = (
    <div className={`inline-flex items-center group transition-all duration-200 shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="DEEPPURA BUILDERS - Crafting Dreams, Creating Landmarks"
        className={`${heightClasses} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-sm`}
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
      className="inline-flex shrink-0 select-none cursor-pointer focus:outline-none"
      aria-label="DEEPPURA BUILDERS Home"
    >
      {content}
    </Link>
  );
};

export default Logo;
