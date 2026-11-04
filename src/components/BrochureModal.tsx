import React, { useState, useEffect, useCallback } from 'react';
import { X, Download, FileText, Phone, ChevronLeft, ChevronRight, Eye, CheckCircle2, MessageCircle, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playPageTurnSound } from '../utils/pageFlipSound';
import { brochureSpreads, BrochureSpread } from '../data/brochureData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

// Realistic 3D Book Page Turn Variants
const bookPageFlipVariants: any = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 70 : -70,
    opacity: 0.15,
    scale: 0.94,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
    filter: 'brightness(1.15) drop-shadow(0 20px 45px rgba(0,0,0,0.65))',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformOrigin: 'center center',
    filter: 'brightness(1) drop-shadow(0 15px 35px rgba(0,0,0,0.4))',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // Natural paper flip curve
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -75 : 75,
    opacity: 0,
    scale: 0.94,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
    filter: 'brightness(0.65) drop-shadow(0 25px 50px rgba(0,0,0,0.75))',
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, initialPage = 0 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [direction, setDirection] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialPage);
      setDirection(1);
    }
  }, [isOpen, initialPage]);

  const pdfUrl = '/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf';

  const handleNext = useCallback(() => {
    setDirection(1);
    if (soundEnabled) playPageTurnSound();
    setCurrentPage((prev) => (prev < brochureSpreads.length - 1 ? prev + 1 : 0));
  }, [soundEnabled]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    if (soundEnabled) playPageTurnSound();
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : brochureSpreads.length - 1));
  }, [soundEnabled]);

  const goToPage = useCallback((targetIdx: number) => {
    if (targetIdx === currentPage) return;
    setDirection(targetIdx > currentPage ? 1 : -1);
    if (soundEnabled) playPageTurnSound();
    setCurrentPage(targetIdx);
  }, [currentPage, soundEnabled]);

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
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Dialog */}
      <div className={`relative w-full ${isFullscreen ? 'max-w-[98vw] h-[96vh]' : 'max-w-6xl max-h-[92vh]'} bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-slate-100`}>
        
        {/* Top Header Bar */}
        <div className="bg-slate-950/90 px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-amber-400">
                  3D FLIPBOOK VIEWER
                </span>
                <span className="hidden sm:inline-block text-[10px] text-slate-400">•</span>
                <span className="hidden sm:inline-block text-[10px] text-slate-300 font-medium">
                  Mukundra Prime Official Brochure (8 Spreads)
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-black text-white truncate">
                {currentSpread.title}
              </h3>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Page flip sound toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center"
              title={soundEnabled ? 'Mute Page Flip Sound' : 'Enable Page Flip Sound'}
              aria-label="Toggle page turn audio"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Download PDF button */}
            <a
              href={pdfUrl}
              download="Mukundra-Prime-Official-Brochure.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md"
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

        {/* Main Content Area: 3D FlipBook Stage */}
        <div className="relative flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-3 sm:p-5 overflow-hidden min-h-[320px]">
          
          {/* 3D Perspective Stage Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center max-w-full"
            style={{ perspective: '2200px' }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={bookPageFlipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative max-w-full max-h-[58vh] md:max-h-[64vh] flex items-center justify-center rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-slate-700/60"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Book Spread Image */}
                <img
                  src={currentSpread.image}
                  alt={`${currentSpread.title} - Official Mukundra Prime Brochure Spread ${currentPage + 1}`}
                  className="max-w-full max-h-[58vh] md:max-h-[64vh] object-contain rounded-xl select-none"
                  draggable={false}
                />

                {/* Middle Book Spine Crease / Binding Shadow (Realistic 3D Book Fold Effect) */}
                <div 
                  className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 sm:w-10 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 35%, rgba(255,255,255,0.06) 50%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.35) 100%)',
                    boxShadow: 'inset 0 0 12px rgba(0,0,0,0.5)'
                  }}
                />

                {/* Top/Bottom Page Edge Sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Left Previous Turn Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/90 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-slate-700/80 shadow-2xl flex items-center justify-center transition-all cursor-pointer z-30 group"
              aria-label="Previous Page Spread"
              title="Previous Page (Arrow Left)"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Next Turn Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/90 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-slate-700/80 shadow-2xl flex items-center justify-center transition-all cursor-pointer z-30 group"
              aria-label="Next Page Spread"
              title="Next Page (Arrow Right)"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Spread Info Pill Overlay */}
          <div className="mt-3 flex items-center justify-center gap-3 select-none">
            <span className="px-3.5 py-1 rounded-full bg-slate-900/95 border border-slate-700 text-xs font-bold text-slate-300 shadow-md">
              Spread <strong className="text-amber-400">{currentPage + 1}</strong> of {brochureSpreads.length}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              {currentSpread.subtitle}
            </span>
            {soundEnabled && (
              <span className="text-[10px] text-amber-400/80 hidden md:inline-flex items-center gap-1">
                <Volume2 className="w-3 h-3" />
                <span>3D Page Turn Sound Active</span>
              </span>
            )}
          </div>
        </div>

        {/* Highlights Bar for Active Spread */}
        <div className="bg-slate-900/90 px-4 sm:px-6 py-2.5 border-t border-slate-800/80 hidden md:block">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-300">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>Spread Details:</span>
            </span>
            {currentSpread.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Thumbnail Strip (Click to Jump with 3D Flip) */}
        <div className="bg-slate-950 px-3 sm:px-6 py-3 border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin">
            {brochureSpreads.map((spread, idx) => {
              const isActive = idx === currentPage;
              return (
                <button
                  key={spread.id}
                  onClick={() => goToPage(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-28 md:w-32 rounded-lg overflow-hidden border-2 transition-all cursor-pointer group text-left ${
                    isActive
                      ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105'
                      : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={spread.thumb}
                    alt={spread.title}
                    className="w-full h-10 sm:h-14 object-cover"
                  />
                  <div className="p-1 bg-slate-900/95 text-[9px] sm:text-[10px] font-bold text-slate-300 truncate">
                    <span className="text-amber-400 mr-1">{idx + 1}.</span>
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
              className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
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
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
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
