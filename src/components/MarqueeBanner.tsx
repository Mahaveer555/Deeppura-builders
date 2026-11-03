import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building, Landmark } from 'lucide-react';

interface MarqueeBannerProps {
  variant?: 'dark' | 'light' | 'champagne';
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ variant = 'light' }) => {
  const items = [
    { text: "RERA & UIT Kota Approved Township", icon: ShieldCheck },
    { text: "Direct 100 Ft. Wide Masterplan Road Access", icon: Building },
    { text: "Up to 90% Bank Loan Available (SBI, ICICI, Axis, BOB)", icon: Landmark },
    { text: "1, 2 & 3 BHK Verified Architectural Blueprints", icon: CheckCircle2 },
    { text: "14+ Resort Lifestyle Amenities (Pool, Temple, Gym)", icon: Sparkles },
    { text: "Over 6.5 Lakh Sq. Ft. Land Delivered Across Kota", icon: Award },
    { text: "Adjacent to 200 Bigha Herbal Park & Clean Green Corridor", icon: CheckCircle2 },
    { text: "Zero Brokerage Direct Developer Allotment Desk", icon: ShieldCheck },
  ];

  const bgStyles = {
    dark: 'bg-[#0F172A] text-white border-y border-slate-800',
    light: 'bg-white text-slate-800 border-y border-slate-200 shadow-xs',
    champagne: 'bg-[#F8FAFC] text-slate-800 border-y border-slate-200',
  }[variant];

  const bulletColor = variant === 'dark' ? 'text-cyan-400' : 'text-cyan-600';
  const fadeBg = variant === 'dark' ? 'from-[#0F172A]' : 'from-white';

  // Double items for a continuous, seamless loop
  const duplicatedItems = [...items, ...items];

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
          return (
            <div 
              key={idx}
              className="flex items-center gap-3.5 mx-6 sm:mx-8 shrink-0 text-xs sm:text-[13px] font-heading font-bold tracking-wider uppercase whitespace-nowrap"
            >
              <span className="p-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600">
                <Icon className={`w-3.5 h-3.5 ${bulletColor}`} />
              </span>
              <span className="text-slate-800 font-bold">{item.text}</span>
              <span className={`${bulletColor} opacity-70 ml-3`}>✦</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
