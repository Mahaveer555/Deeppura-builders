import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building, Landmark } from 'lucide-react';

interface MarqueeBannerProps {
  variant?: 'dark' | 'light' | 'champagne';
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ variant = 'light' }) => {
  const items = [
    { text: "RERA & UIT Kota Approved Township", icon: ShieldCheck, color: 'gold' },
    { text: "Direct 100 Ft. Wide Masterplan Road Access", icon: Building, color: 'gold' },
    { text: "Up to 90% Bank Loan Available (SBI, ICICI, Axis, BOB)", icon: Landmark, color: 'gold' },
    { text: "1, 2 & 3 BHK Verified Architectural Blueprints", icon: CheckCircle2, color: 'gold' },
    { text: "14+ Resort Lifestyle Amenities (Pool, Temple, Gym)", icon: Sparkles, color: 'gold' },
    { text: "Over 6.5 Lakh Sq. Ft. Land Delivered Across Kota", icon: Award, color: 'gold' },
    { text: "Adjacent to 200 Bigha Herbal Park & Clean Green Corridor", icon: CheckCircle2, color: 'gold' },
    { text: "Zero Brokerage Direct Developer Allotment Desk", icon: ShieldCheck, color: 'gold' },
  ];

  const bgStyles = {
    dark: 'bg-[#18140E] text-white border-y border-[#C5A46D]/30',
    light: 'bg-white/95 text-slate-800 border-y border-slate-200/90 shadow-xs backdrop-blur-md',
    champagne: 'bg-[#FAF7F0] text-slate-800 border-y border-[#E8D8B3]',
  }[variant];

  const fadeBg = variant === 'dark' ? 'from-[#18140E]' : 'from-[#FAF7F0]';

  // Double items for a continuous, seamless loop
  const duplicatedItems = [...items, ...items];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'gold_accent':
        return {
          icon: 'text-amber-700',
          bg: 'bg-amber-50 border-amber-200 text-amber-700',
          dot: 'text-amber-600'
        };
      case 'blue':
        return {
          icon: 'text-[#8A6632]',
          bg: 'bg-amber-50 border-amber-200 text-[#8A6632]',
          dot: 'text-[#8A6632]'
        };
      case 'gold':
      default:
        return {
          icon: 'text-amber-700',
          bg: 'bg-amber-50 border-amber-200 text-amber-700',
          dot: 'text-amber-600'
        };
    }
  };

  return (
    <div className={`relative overflow-hidden py-3 sm:py-3.5 select-none ${bgStyles}`}>
      {/* Side gradient fades for infinite edge blending */}
      <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r ${fadeBg} to-transparent z-10 pointer-events-none`} />
      <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l ${fadeBg} to-transparent z-10 pointer-events-none`} />

      {/* Running Marquee Track with Hardware Accelerated Infinite Scroll */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        className="flex w-max shrink-0 items-center will-change-transform"
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          const styles = getColorClasses(item.color);
          return (
            <div 
              key={idx}
              className="flex items-center gap-3.5 mx-6 sm:mx-8 shrink-0 text-xs sm:text-[13px] font-heading font-bold tracking-wider uppercase whitespace-nowrap"
            >
              <span className={`p-1.5 rounded-full border ${styles.bg}`}>
                <Icon className={`w-3.5 h-3.5 ${styles.icon}`} />
              </span>
              <span className="text-slate-800 font-bold">{item.text}</span>
              <span className={`${styles.dot} opacity-70 ml-3`}>✦</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
