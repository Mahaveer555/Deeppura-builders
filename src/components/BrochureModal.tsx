import React, { useState, useEffect, useCallback } from 'react';
import { X, Download, FileText, Phone, ChevronLeft, ChevronRight, Eye, CheckCircle2, MessageCircle, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

interface BrochureSpread {
  id: number;
  spreadNum: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  thumb: string;
  leftPageImage: string;
  rightPageImage: string;
  highlights: string[];
}

const brochureSpreads: BrochureSpread[] = [
  {
    id: 1,
    spreadNum: 1,
    title: 'Cover & Project Overview',
    subtitle: '100 Ft. Road, Raipura, Kota (Rajasthan)',
    category: 'Project Overview',
    image: '/assets/brochure/page-1.jpg',
    thumb: '/assets/brochure/page-1-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-1-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-1-right.jpg',
    highlights: [
      'Prime 100 Ft. Road Frontage in Rajnagar Raipura',
      'UIT Kota Sanctioned & Rajasthan RERA Approved',
      'Corporate & Site Office Contact Information',
      'Bank Loan Approvals up to 90%'
    ]
  },
  {
    id: 2,
    spreadNum: 2,
    title: 'About Deeppura Group & Elevation',
    subtitle: 'Legacy of Trust since 2011 • 6.5+ Lakh Sq.Ft. Delivered',
    category: 'Group Profile',
    image: '/assets/brochure/page-2.jpg',
    thumb: '/assets/brochure/page-2-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-2-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-2-right.jpg',
    highlights: [
      'Promoted by Shri Prakash Chand Jain',
      'Delivered 6.5+ Lakh Sq.Ft. of Quality Construction',
      'Daylight Architectural Elevation with Gated Security',
      'Earthquake-resistant RCC Engineered Structure'
    ]
  },
  {
    id: 3,
    spreadNum: 3,
    title: '3 BHK Deluxe Unit Plan',
    subtitle: 'Super Built-Up Area: 960 Sq.Ft.',
    category: '3 BHK Deluxe',
    image: '/assets/brochure/page-3.jpg',
    thumb: '/assets/brochure/page-3-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-3-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-3-right.jpg',
    highlights: [
      'Expansive 960 Sq.Ft. Luxury Layout',
      'Master Bedroom Suite + 2 Bedrooms',
      '3D Isometric Furnished Cutaway Layout',
      'Dual Balconies & Modern Modular Kitchen'
    ]
  },
  {
    id: 4,
    spreadNum: 4,
    title: '3 BHK Standard Unit Plan',
    subtitle: 'Super Built-Up Area: 755 Sq.Ft.',
    category: '3 BHK Standard',
    image: '/assets/brochure/page-4.jpg',
    thumb: '/assets/brochure/page-4-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-4-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-4-right.jpg',
    highlights: [
      '3 Bedrooms: 10×11 ft, 10×10 ft, 9.25×9 ft',
      'Spacious Living Hall: 9×14 ft',
      'Open Kitchen: 7×5.5 ft with Utility Balcony 3.75×7.5 ft',
      '2 Toilets with cooler ledges and fresh air ventilation'
    ]
  },
  {
    id: 5,
    spreadNum: 5,
    title: '2 BHK Standard Unit Plan',
    subtitle: 'Super Built-Up Area: 700.15 Sq.Ft.',
    category: '2 BHK Standard',
    image: '/assets/brochure/page-5.jpg',
    thumb: '/assets/brochure/page-5-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-5-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-5-right.jpg',
    highlights: [
      '2 Bedrooms: 10.25×10 ft and 9.5×10 ft',
      'Family Living Room: 16×9 ft',
      'Open Kitchen: 10×5.5 ft',
      'Dual Balconies: 5.5×3 ft each & 2 Toilets'
    ]
  },
  {
    id: 6,
    spreadNum: 6,
    title: '1 BHK Deluxe Unit Plan',
    subtitle: 'Generous Single Bedroom Living with Balcony',
    category: '1 BHK Deluxe',
    image: '/assets/brochure/page-6.jpg',
    thumb: '/assets/brochure/page-6-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-6-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-6-right.jpg',
    highlights: [
      'Master Bedroom: 9.5×10 ft',
      'Living Room: 9×11 ft',
      'Kitchen: 5.5×10.5 ft',
      'Balcony: 6.5×3 ft with 3.5 ft Wide Passage'
    ]
  },
  {
    id: 7,
    spreadNum: 7,
    title: '1 BHK Standard Unit Plan',
    subtitle: 'Smart Affordable Living for Couples & Students',
    category: '1 BHK Standard',
    image: '/assets/brochure/page-7.jpg',
    thumb: '/assets/brochure/page-7-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-7-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-7-right.jpg',
    highlights: [
      'Optimized 1 BHK Compact Layout',
      'Natural Sunlight & Cross Ventilation',
      'Dedicated Kitchen Counter & Storage Space',
      'High Rental Yield Opportunity in Kota'
    ]
  },
  {
    id: 8,
    spreadNum: 8,
    title: 'Verified Amenities & Completed Projects',
    subtitle: 'World-Class Facilities + Track Record Across Kota',
    category: 'Amenities & Landmarks',
    image: '/assets/brochure/page-8.jpg',
    thumb: '/assets/brochure/page-8-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-8-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-8-right.jpg',
    highlights: [
      'Temple / Mandir, Kids Play Area, Fully Equipped Gym',
      'Splash Pool, Super Market / Daily Needs Store',
      'Mukundra Heights (R.K. Puram, Kota)',
      'Ashiyana Homes (Thekra), Mahalaxmi Apt (Chawani), Royal Heritage'
    ]
  }
];

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, initialPage = 0 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialPage);
    }
  }, [isOpen, initialPage]);

  const pdfUrl = '/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf';

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < brochureSpreads.length - 1 ? prev + 1 : 0));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : brochureSpreads.length - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  const currentSpread = brochureSpreads[currentPage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Dialog */}
      <div className={`relative w-full ${isFullscreen ? 'max-w-[98vw] h-[96vh]' : 'max-w-6xl max-h-[92vh]'} bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-slate-100`}>
        
        {/* Top Header Bar */}
        <div className="bg-slate-950/90 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">
                  OFFICIAL PUBLICATION
                </span>
                <span className="hidden sm:inline-block text-[10px] text-slate-400">•</span>
                <span className="hidden sm:inline-block text-[10px] text-slate-400 font-medium">
                  Mukundra Prime (Kota)
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-black text-white truncate">
                {currentSpread.title}
              </h3>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Download PDF button */}
            <a
              href={pdfUrl}
              download="Mukundra-Prime-Official-Brochure.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md"
              title="Download Full 8-Page Official Brochure (8.5 MB PDF)"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>Download PDF (8.5 MB)</span>
            </a>

            {/* Toggle Fullscreen / Expand */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer hidden md:flex items-center justify-center"
              title={isFullscreen ? 'Standard View' : 'Expanded View'}
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area: Viewer Canvas */}
        <div className="relative flex-1 bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px]">
          
          {/* Active Spread Image Display with Navigation Arrows */}
          <div className="relative w-full h-full flex items-center justify-center max-w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-full max-h-[58vh] md:max-h-[64vh] flex items-center justify-center"
              >
                <img
                  src={currentSpread.image}
                  alt={`${currentSpread.title} - Official Mukundra Prime Brochure Spread ${currentPage + 1}`}
                  className="max-w-full max-h-[58vh] md:max-h-[64vh] object-contain rounded-xl shadow-2xl border border-slate-800/80"
                />
              </motion.div>
            </AnimatePresence>

            {/* Left Previous Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-emerald-500 hover:text-slate-950 text-white backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center justify-center transition-all cursor-pointer z-20 group"
              aria-label="Previous Page Spread"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-emerald-500 hover:text-slate-950 text-white backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center justify-center transition-all cursor-pointer z-20 group"
              aria-label="Next Page Spread"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Spread Info Pill Overlay */}
          <div className="mt-2.5 flex items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] font-bold text-slate-300">
              Spread <strong className="text-emerald-400">{currentPage + 1}</strong> of {brochureSpreads.length}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              {currentSpread.subtitle}
            </span>
          </div>
        </div>

        {/* Highlights Bar for Active Spread */}
        <div className="bg-slate-900/90 px-4 sm:px-6 py-2.5 border-t border-slate-800/80 hidden md:block">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-300">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>Spread Details:</span>
            </span>
            {currentSpread.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Thumbnail Strip (Click to Jump) */}
        <div className="bg-slate-950 px-3 sm:px-6 py-3 border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin">
            {brochureSpreads.map((spread, idx) => {
              const isActive = idx === currentPage;
              return (
                <button
                  key={spread.id}
                  onClick={() => setCurrentPage(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-28 md:w-32 rounded-lg overflow-hidden border-2 transition-all cursor-pointer group text-left ${
                    isActive
                      ? 'border-emerald-400 ring-2 ring-emerald-400/30 scale-105'
                      : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={spread.thumb}
                    alt={spread.title}
                    className="w-full h-10 sm:h-14 object-cover"
                  />
                  <div className="p-1 bg-slate-900/95 text-[9px] sm:text-[10px] font-bold text-slate-300 truncate">
                    <span className="text-emerald-400 mr-1">{idx + 1}.</span>
                    <span>{spread.category}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Contact help */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="hidden sm:inline">Have questions about this floor plan or pricing?</span>
            <a
              href="tel:7357690111"
              className="font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>7357690111 / 8239999520</span>
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <a
              href="https://wa.me/917357690111?text=Hello%2C%20please%20send%20the%20official%20Mukundra%20Prime%20Brochure%20PDF%20and%20latest%20pricing%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp PDF</span>
            </a>

            <a
              href={pdfUrl}
              download="Mukundra-Prime-Official-Brochure.pdf"
              className="px-5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download PDF (8.5 MB)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
