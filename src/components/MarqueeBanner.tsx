import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building, Landmark } from 'lucide-react';

interface MarqueeBannerProps {
  variant?: 'dark' | 'light' | 'champagne';
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ variant = 'light' }) => {
  const items = [
    { text: "RERA & UIT Kota Approved Township", icon: ShieldCheck, color: 'emerald' },
    { text: "Direct 100 Ft. Wide Masterplan Road Access", icon: Building, color: 'gold' },
    { text: "Up to 90% Bank Loan Available (SBI, ICICI, Axis, BOB)", icon: Landmark, color: 'blue' },
    { text: "1, 2 & 3 BHK Verified Architectural Blueprints", icon: CheckCircle2, color: 'gold' },
    { text: "14+ Resort Lifestyle Amenities (Pool, Temple, Gym)", icon: Sparkles, color: 'emerald' },
    { text: "Over 6.5 Lakh Sq. Ft. Land Delivered Across Kota", icon: Award, color: 'blue' },
    { text: "Adjacent to 200 Bigha Herbal Park & Clean Green Corridor", icon: CheckCircle2, color: 'emerald' },
    { text: "Zero Brokerage Direct Developer Allotment Desk", icon: ShieldCheck, color: 'gold' },
  ];

  const bgStyles = {
    dark: 'bg-[#061812] text-white border-y border-emerald-950/80',
    light: 'bg-white/95 text-slate-800 border-y border-slate-200/90 shadow-xs backdrop-blur-md',
    champagne: 'bg-[#F4F8F5] text-slate-800 border-y border-emerald-100',
  }[variant];

  const fadeBg = variant === 'dark' ? 'from-[#061812]' : 'from-[#F3F7F4]';

  // Double items for a continuous, seamless loop
  const duplicatedItems = [...items, ...items];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          icon: 'text-emerald-600',
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
          dot: 'text-emerald-500'
        };
      case 'blue':
        return {
          icon: 'text-sky-600',
          bg: 'bg-sky-50 border-sky-200 text-sky-600',
          dot: 'text-sky-500'
        };
      case 'gold':
      default:
        return {
          icon: 'text-emerald-600',
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
          dot: 'text-emerald-500'
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
