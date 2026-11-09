import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, ChevronRight } from 'lucide-react';

export const OFFICIAL_INSTAGRAM_URL = "https://www.instagram.com/mukundra_prime_kota?obrf=Zmlna295a3M3M2Vh&utm_source=qr";

// 1. Official Authentic WhatsApp Vector Logo
const RealWhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="100%" 
    height="100%" 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

// 2. Official Authentic Instagram Vector Logo
const RealInstagramLogo: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="100%" 
    height="100%" 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const FloatingContact: React.FC = () => {
  const [callMenuOpen, setCallMenuOpen] = useState(false);
  const [waMenuOpen, setWaMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const phoneNumbers = [
    { label: 'Booking Desk 1', number: '7357690111', clean: '917357690111' },
    { label: 'Booking Desk 2', number: '8239999520', clean: '918239999520' },
    { label: 'Director Desk (Animesh Jain)', number: '+91 88750 00404', clean: '918875000404' },
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setCallMenuOpen(false);
        setWaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openWhatsApp = (cleanPhone: string) => {
    const text = encodeURIComponent("Hello DEEPPURA GROUP, I am interested in Mukundra Prime residences in Kota. Please share pricing schedules, floor plans, and site visit details.");
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    setWaMenuOpen(false);
  };

  return (
    <div 
      ref={menuRef}
      className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col items-end gap-3.5 select-none"
      role="region" 
      aria-label="Floating Contact Options"
    >
      {/* Call Numbers Popover */}
      <AnimatePresence>
        {callMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-1 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3.5 space-y-2 text-slate-900 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Direct Call Lines
              </span>
              <button 
                onClick={() => setCallMenuOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
                aria-label="Close call options"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1.5">
              {phoneNumbers.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 text-xs font-semibold text-slate-800 border border-slate-100 hover:border-amber-200 transition-all group"
                >
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">{p.label}</div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800 transition-colors">{p.number}</div>
                  </div>
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Numbers Popover */}
      <AnimatePresence>
        {waMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-1 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3.5 space-y-2 text-slate-900 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                <RealWhatsAppLogo className="w-4 h-4" />
                WhatsApp Booking
              </span>
              <button 
                onClick={() => setWaMenuOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
                aria-label="Close WhatsApp options"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1.5">
              {phoneNumbers.slice(0, 2).map((p) => (
                <button
                  key={p.number}
                  type="button"
                  onClick={() => openWhatsApp(p.clean)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-xs font-semibold text-slate-900 border border-amber-200 transition-all group text-left cursor-pointer"
                >
                  <div>
                    <div className="text-[10px] text-amber-800 font-medium">{p.label}</div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800">{p.number}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Phone Call Floating Button */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="relative group"
      >
        {/* Glowing Radar Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping -z-10 pointer-events-none" />
        
        <button
          type="button"
          onClick={() => {
            setCallMenuOpen(!callMenuOpen);
            setWaMenuOpen(false);
          }}
          aria-label="Call DEEPPURA GROUP Booking Desk"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 text-white shadow-[0_4px_20px_rgba(212,175,55,0.5)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.8)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
        >
          <Phone className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white filter drop-shadow stroke-[2.5]" />
        </button>

        {/* Tooltip on desktop */}
        <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
          Call Booking Desk
        </span>
      </motion.div>

      {/* 2. WhatsApp Official Floating Button */}
      <motion.div 
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="relative group"
      >
        {/* Glowing Radar Pulse Ring */}
        <span 
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 pointer-events-none" 
          style={{ animationDuration: '2.5s' }}
        />

        <button
          type="button"
          onClick={() => {
            setWaMenuOpen(!waMenuOpen);
            setCallMenuOpen(false);
          }}
          aria-label="Chat on Official WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] via-[#22C55E] to-[#4ADE80] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_25px_rgba(74,222,128,0.8)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
        >
          <RealWhatsAppLogo className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-white filter drop-shadow" />
        </button>

        {/* Tooltip on desktop */}
        <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.div>

      {/* 3. Instagram Official Floating Button */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="relative group"
      >
        {/* Glowing Radar Pulse Ring */}
        <span 
          className="absolute -inset-1 rounded-full bg-[#E1306C]/35 animate-ping -z-10 pointer-events-none" 
          style={{ animationDuration: '3s', animationDelay: '0.6s' }}
        />

        <a
          href={OFFICIAL_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow DEEPPURA GROUP on Official Instagram"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_4px_20px_rgba(225,48,108,0.5)] hover:shadow-[0_6px_25px_rgba(240,148,51,0.8)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
        >
          <RealInstagramLogo className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-white filter drop-shadow" />
        </a>

        {/* Tooltip on desktop */}
        <span className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
          Follow on Instagram
        </span>
      </motion.div>

    </div>
  );
};
