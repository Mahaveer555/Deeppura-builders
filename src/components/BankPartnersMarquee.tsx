import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BankItem {
  id: string;
  name: string;
  shortName: string;
  loanPercentage: string;
  tagline: string;
  renderLogo: () => React.ReactNode;
}

export const bankPartnersList: BankItem[] = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    shortName: 'SBI',
    loanPercentage: 'Up to 90%',
    tagline: 'The Banker to Every Indian',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="State Bank of India Logo">
        {/* SBI Iconic Blue Circle with Keyhole */}
        <circle cx="50" cy="50" r="48" fill="#0083CA" />
        {/* Inner white circle hole */}
        <circle cx="50" cy="40" r="15" fill="#FFFFFF" />
        {/* Vertical slot cutout extending to bottom */}
        <rect x="44" y="40" width="12" height="38" fill="#FFFFFF" rx="2" />
      </svg>
    ),
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    shortName: 'HDFC',
    loanPercentage: 'Up to 90%',
    tagline: 'We Understand Your World',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="HDFC Bank Logo">
        {/* Outer Blue Square */}
        <rect width="100" height="100" rx="16" fill="#004C8F" />
        {/* White cross separation lines */}
        <rect x="0" y="42" width="100" height="16" fill="#FFFFFF" />
        <rect x="42" y="0" width="16" height="100" fill="#FFFFFF" />
        {/* Central Red Square */}
        <rect x="36" y="36" width="28" height="28" rx="3" fill="#ED232A" />
      </svg>
    ),
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    shortName: 'ICICI',
    loanPercentage: 'Up to 90%',
    tagline: 'Hum Hai Na, Khayal Aapka',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="ICICI Bank Logo">
        {/* Deep Maroon / Crimson Background */}
        <rect width="100" height="100" rx="16" fill="#981D2F" />
        {/* ICICI stylized flame / arc in brilliant orange */}
        <path
          d="M28 76 C 26 50, 42 26, 68 24 C 62 34, 52 46, 42 60 C 37 66, 32 72, 28 76 Z"
          fill="#F58220"
        />
        <circle cx="68" cy="24" r="8" fill="#F58220" />
        {/* Inner white accent arc */}
        <path
          d="M48 48 C 58 38, 70 38, 76 44 C 70 54, 58 64, 50 72 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />
      </svg>
    ),
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    shortName: 'AXIS',
    loanPercentage: 'Up to 90%',
    tagline: 'Badhti Ka Naam Zindagi',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="Axis Bank Logo">
        {/* Burgundy Rounded Container */}
        <rect width="100" height="100" rx="16" fill="#97144D" />
        {/* Official Axis Inverted Triangle / "A" Chevron */}
        <path
          d="M50 18 L82 78 L64 78 L50 48 L36 78 L18 78 Z"
          fill="#FFFFFF"
        />
        {/* Inner Ascending Accent */}
        <polygon points="50,34 68,70 56,70 50,56 44,70 32,70" fill="#97144D" />
        <polygon points="50,42 60,64 40,64" fill="#E8D8B9" />
      </svg>
    ),
  },
  {
    id: 'bob',
    name: 'Bank of Baroda',
    shortName: 'BOB',
    loanPercentage: 'Up to 90%',
    tagline: "India's International Bank",
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="Bank of Baroda Logo">
        {/* Vermilion Orange Background */}
        <rect width="100" height="100" rx="16" fill="#F37021" />
        {/* Baroda Sun (Two stylized mirrored 'B's radiating sun rays) */}
        <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
        <path
          d="M50 20 C66 20, 78 32, 78 48 C78 64, 66 76, 50 76 L34 76 L34 20 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
        />
        <path
          d="M34 48 L64 48"
          stroke="#FFFFFF"
          strokeWidth="6"
        />
      </svg>
    ),
  },
  {
    id: 'union',
    name: 'Union Bank of India',
    shortName: 'UNION',
    loanPercentage: 'Up to 90%',
    tagline: 'Good People to Bank With',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="Union Bank of India Logo">
        {/* White / Clean Shield Base */}
        <rect width="100" height="100" rx="16" fill="#FFFFFF" stroke="#E5E5E2" strokeWidth="2" />
        {/* Interlocking Red and Blue "U" Letterforms */}
        {/* Blue U */}
        <path
          d="M26 24 L26 56 C26 70, 36 78, 50 78 C64 78, 74 70, 74 56 L74 24 L60 24 L60 56 C60 62, 56 66, 50 66 C44 66, 40 62, 40 56 L40 24 Z"
          fill="#004B87"
        />
        {/* Red Interlocking U Accent */}
        <path
          d="M40 34 L40 60 C40 66, 44 70, 50 70 C56 70, 60 66, 60 60 L60 34 L72 34 L72 60 C72 72, 62 82, 50 82 C38 82, 28 72, 28 60 L28 34 Z"
          fill="#DA251D"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    shortName: 'KOTAK',
    loanPercentage: 'Up to 90%',
    tagline: "Let's Make Money Simple",
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="Kotak Mahindra Bank Logo">
        {/* Red Rounded Container */}
        <rect width="100" height="100" rx="16" fill="#EE3124" />
        {/* White Infinity / Mobius Loop */}
        <path
          d="M32 36 C24 36, 18 42, 18 50 C18 58, 24 64, 32 64 C42 64, 48 54, 50 50 C52 46, 58 36, 68 36 C76 36, 82 42, 82 50 C82 58, 76 64, 68 64 C58 64, 52 54, 50 50 C48 46, 42 36, 32 36 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'pnb',
    name: 'Punjab National Bank',
    shortName: 'PNB',
    loanPercentage: 'Up to 90%',
    tagline: 'The Name You Can Bank Upon',
    renderLogo: () => (
      <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0" aria-label="Punjab National Bank Logo">
        {/* Deep PNB Maroon */}
        <rect width="100" height="100" rx="16" fill="#A20C26" />
        {/* Golden Emblem Ring */}
        <circle cx="50" cy="50" r="32" fill="none" stroke="#FFC20E" strokeWidth="6" />
        {/* PNB Center Symbol in Gold */}
        <circle cx="50" cy="50" r="14" fill="#FFC20E" />
        <rect x="46" y="24" width="8" height="52" fill="#A20C26" />
        <circle cx="50" cy="50" r="6" fill="#A20C26" />
      </svg>
    ),
  },
];

export const BankPartnersMarquee: React.FC = () => {
  // Exactly doubled so that transform: translateX(-50%) loops with 100% mathematical seamlessness
  const displayBanks = [...bankPartnersList, ...bankPartnersList];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Side gradient feather masks for infinite edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track - running continuously with hardware accelerated smooth scroll */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        className="flex w-max items-center gap-4 sm:gap-6 will-change-transform"
      >
        {displayBanks.map((bank, index) => (
          <div
            key={`${bank.id}-${index}`}
            className="group shrink-0 flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-white border border-[#E5E5E2] hover:border-[#CBB58F] shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 min-w-[270px] sm:min-w-[290px]"
          >
            {/* Real Bank Logo */}
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EBE8E1] p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              {bank.renderLogo()}
            </div>

            {/* Bank Information */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-heading font-bold text-sm text-[#1A1D20] truncate group-hover:text-[#B68A3A] transition-colors">
                  {bank.name}
                </h4>
              </div>

              <p className="text-[11px] text-[#555B61] truncate mt-0.5">
                {bank.tagline}
              </p>

              <div className="flex items-center gap-2 mt-1.5">
                <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F7F3EB] border border-[#E8D8B9] text-[#B68A3A]">
                  <CheckCircle2 className="w-3 h-3 text-[#B68A3A]" />
                  {bank.loanPercentage} Loan
                </span>
                <span className="text-[10px] text-[#22C55E] font-semibold flex items-center gap-0.5">
                  <ShieldCheck className="w-3 h-3" />
                  Pre-Approved
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
