import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  Layers, 
  BookOpen, 
  Download, 
  FileText, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Sparkles 
} from 'lucide-react';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';
import { BrochureModal } from '../components/BrochureModal';
import { brochureSpreads, BrochureSpread } from '../data/brochureData';
import { playPageTurnSound } from '../utils/pageFlipSound';

interface BrochurePlan {
  id: string;
  name: string;
  category: string;
  area: string;
  spreadImage: string;
  isoImage: string;
  blueprintImage: string;
  description: string;
  specs: string[];
}

const officialBrochurePlans: BrochurePlan[] = [
  {
    id: 'plan-3bhk-deluxe',
    name: '3 BHK Deluxe Luxury Plan',
    category: '3 BHK Deluxe',
    area: 'Area 960 sq.ft.',
    spreadImage: '/assets/brochure/page-3.jpg',
    isoImage: '/assets/floor-plans/brochure/3bhk-deluxe-960sqft-3d.jpg',
    blueprintImage: '/assets/floor-plans/brochure/3bhk-deluxe-960sqft-2d.jpg',
    description: 'Premier 3 BHK configuration offering 960 sq.ft. of ultra-spacious living, master bedroom suite with attached bath, guest rooms, modular kitchen, and scenic balconies.',
    specs: [
      'Master Bedroom Suite + 2 Guest Bedrooms',
      'Sprawling Family Living & Dining Lounge',
      'Modern L-Shaped Modular Kitchen',
      'Dual Private Balconies for Cross-Ventilation',
      '2 Deluxe Washrooms with Premium Fixtures'
    ]
  },
  {
    id: 'plan-3bhk-standard',
    name: '3 BHK Standard Family Plan',
    category: '3 BHK Standard',
    area: 'Area 755 sq.ft.',
    spreadImage: '/assets/brochure/page-4.jpg',
    isoImage: '/assets/floor-plans/brochure/3bhk-standard-755sqft-3d.jpg',
    blueprintImage: '/assets/floor-plans/brochure/3bhk-standard-755sqft-2d.jpg',
    description: 'Thoughtfully planned 3 BHK layout maximizing space efficiency, featuring three well-lit bedrooms, living room, and attached utility balcony.',
    specs: [
      'Bed Room: 10×11 ft',
      'Bed Room: 10×10 ft',
      'Bed Room: 9.25×9 ft',
      'Living Room: 9×14 ft',
      'Open Kitchen: 7×5.5 ft & Balcony: 3.75×7.5 ft',
      '2 Toilets with cooler ledges'
    ]
  },
  {
    id: 'plan-2bhk-standard',
    name: '2 BHK Standard Residential Plan',
    category: '2 BHK Standard',
    area: 'Area 700.15 sq.ft.',
    spreadImage: '/assets/brochure/page-5.jpg',
    isoImage: '/assets/floor-plans/brochure/2bhk-standard-700sqft-3d.jpg',
    blueprintImage: '/assets/floor-plans/brochure/2bhk-standard-700sqft-2d.jpg',
    description: 'The most popular family choice with 700.15 sq.ft. practical layout, two comfortable bedrooms, expansive 16 ft living lounge, and twin balconies.',
    specs: [
      'Bed Room 1: 10.25×10 ft',
      'Bed Room 2: 9.5×10 ft',
      'Spacious Living Room: 16×9 ft',
      'Open Kitchen: 10×5.5 ft',
      'Dual Balconies: 5.5×3 ft each',
      '2 Toilets: 4.75×6.25 ft & 7.5×4 ft'
    ]
  },
  {
    id: 'plan-1bhk-deluxe',
    name: '1 BHK Deluxe Unit Plan',
    category: '1 BHK Deluxe',
    area: '1 BHK Deluxe',
    spreadImage: '/assets/brochure/page-6.jpg',
    isoImage: '/assets/floor-plans/brochure/1bhk-deluxe-3d.jpg',
    blueprintImage: '/assets/floor-plans/brochure/1bhk-deluxe-2d.jpg',
    description: 'Generously proportioned 1 BHK home featuring an independent bedroom, well-appointed living room, private balcony, and wide passage.',
    specs: [
      'Master Bedroom: 9.5×10 ft',
      'Living Room: 9×11 ft',
      'Kitchen: 5.5×10.5 ft',
      'Balcony: 6.5×3 ft',
      '3.5 ft Wide Passage & Attached Washroom'
    ]
  },
  {
    id: 'plan-1bhk-standard',
    name: '1 BHK Standard Unit Plan',
    category: '1 BHK Standard',
    area: '1 BHK Standard',
    spreadImage: '/assets/brochure/page-7.jpg',
    isoImage: '/assets/floor-plans/brochure/1bhk-standard-3d.jpg',
    blueprintImage: '/assets/floor-plans/brochure/1bhk-standard-2d.jpg',
    description: 'Smart, economical starter flat designed for couples, single professionals, or high-yield rental investment near Kota education hubs.',
    specs: [
      'Optimized 1 BHK Compact Living',
      'Natural Sunlight & Window Cross-Ventilation',
      'Dedicated Cooking Platform & Wash Area',
      'Affordable Entry Price from ₹15 Lakhs*'
    ]
  }
];

// Realistic 3D Book Page-Flip Variants
const inlineBookFlipVariants: any = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 65 : -65,
    opacity: 0.12,
    scale: 0.94,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
    filter: 'brightness(1.15) drop-shadow(0 20px 40px rgba(0,0,0,0.65))',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformOrigin: 'center center',
    filter: 'brightness(1) drop-shadow(0 15px 35px rgba(0,0,0,0.35))',
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1], // Realistic cubic bezier paper curl
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -70 : 70,
    opacity: 0,
    scale: 0.94,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
    filter: 'brightness(0.65) drop-shadow(0 25px 45px rgba(0,0,0,0.7))',
    transition: {
      duration: 0.44,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const unitPlanImages = [
  { id: 1, src: '/assets/unit-plans/unit_plan_1.jpg' },
  { id: 2, src: '/assets/unit-plans/unit_plan_2.jpg' },
  { id: 3, src: '/assets/unit-plans/unit_plan_3.jpg' },
  { id: 4, src: '/assets/unit-plans/unit_plan_4.jpg' },
  { id: 5, src: '/assets/unit-plans/unit_plan_5.jpg' },
  { id: 6, src: '/assets/unit-plans/unit_plan_6.jpg' },
  { id: 7, src: '/assets/unit-plans/unit_plan_7.jpg' },
  { id: 8, src: '/assets/unit-plans/unit_plan_8.jpg' },
  { id: 9, src: '/assets/unit-plans/unit_plan_9.jpg' },
];

export const FloorPlans: React.FC = () => {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'brochure' | 'cutaways' | 'blueprints'>('brochure');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [initialBrochurePage, setInitialBrochurePage] = useState(0);
  const [activeSpread, setActiveSpread] = useState(0);
  const [flipDirection, setFlipDirection] = useState(1);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const flipToSpread = (newIndex: number) => {
    if (newIndex === activeSpread) return;
    const dir = newIndex > activeSpread ? 1 : -1;
    setFlipDirection(dir);
    setActiveSpread(newIndex);
    if (isSoundEnabled) {
      playPageTurnSound();
    }
  };

  const handleNextSpread = () => {
    if (activeSpread < brochureSpreads.length - 1) {
      setFlipDirection(1);
      setActiveSpread((prev) => prev + 1);
      if (isSoundEnabled) playPageTurnSound();
    }
  };

  const handlePrevSpread = () => {
    if (activeSpread > 0) {
      setFlipDirection(-1);
      setActiveSpread((prev) => prev - 1);
      if (isSoundEnabled) playPageTurnSound();
    }
  };

  // Consolidated gallery list for fullscreen lightbox
  const allGalleryImages: GalleryImage[] = [
    // 8 Official Brochure Spreads
    ...brochureSpreads.map((s) => ({
      url: s.image,
      captionEn: `Official Brochure Spread ${s.id}: ${s.title}`,
      captionHi: `Official Brochure Spread ${s.id}: ${s.title}`,
      category: 'Official Brochure Spread',
    })),
    // 3D Cutaways
    ...officialBrochurePlans.map((p) => ({
      url: p.isoImage,
      captionEn: `${p.name} - 3D Furnished Isometric Cutaway (${p.area})`,
      captionHi: `${p.name} - 3D Furnished Isometric Cutaway (${p.area})`,
      category: '3D Floor Plan',
    })),
    // 2D Blueprints
    ...officialBrochurePlans.map((p) => ({
      url: p.blueprintImage,
      captionEn: `${p.name} - 2D Architectural Blueprint (${p.area})`,
      captionHi: `${p.name} - 2D Architectural Blueprint (${p.area})`,
      category: 'Official Brochure Plan',
    })),
    // Additional Architectural Blueprints
    ...unitPlanImages.map((u) => ({
      url: u.src,
      captionEn: `Architectural Blueprint Unit Plan ${u.id}`,
      captionHi: `Architectural Blueprint Unit Plan ${u.id}`,
      category: '2D Unit Plan',
    }))
  ];

  const openLightbox = (idx: number) => {
    setGalleryModal({ isOpen: true, index: idx });
  };

  const openBrochureAt = (pageIndex: number) => {
    setActiveSpread(pageIndex);
    setInitialBrochurePage(pageIndex);
    setBrochureModalOpen(true);
  };

  const pdfUrl = '/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf';

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-slate-800 pt-20">
      {/* Top Banner */}
      <section className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/hero/hero-building.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/45 to-slate-950/50" />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Brochure &amp; Unit Plans</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
            UNIT <span className="text-emerald-400">PLAN</span>
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-slate-200">
            RERA No.-RAJ/P/2025/3532 • UIT Kota Masterplan Approved
          </h2>

          {/* Verification Badges */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs">
              <img src="/assets/badges/rera-approved.png" alt="RERA Approved" className="w-4 h-4 object-contain" />
              <span>RERA APPROVED</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs">
              <img src="/assets/badges/uit-approved.png" alt="UIT Approved" className="w-4 h-4 object-contain" />
              <span>UIT KOTA APPROVED</span>
            </span>
          </div>

          <div className="pt-2">
            <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300">
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-emerald-400">UNIT PLAN</span>
            </nav>
          </div>
        </motion.div>
      </section>

      {/* Hero Brochure Callout Strip */}
      <section className="bg-slate-900 border-b border-slate-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 block">
                AUTHENTIC 8-PAGE PUBLICATION
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                Official Mukundra Prime Brochure (PDF &amp; Interactive Viewer)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Complete architectural elevation, 3D cutaways, room measurements, and landmark projects history.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={() => openBrochureAt(0)}
              className="px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Flip Through Spreads</span>
            </button>

            <a
              href={pdfUrl}
              download="Mukundra-Prime-Official-Brochure.pdf"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download PDF (8.5 MB)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Official Brochure 3D FlipBook Stage & Quick Spreads Strip */}
      <section className="py-12 bg-gradient-to-b from-[#F8F7F2] via-[#EFECE4] to-[#F8F7F2] border-b border-[#E2DCBE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Realistic 3D FlipBook Experience</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#8A6632] tracking-tight">
                Browse Official Brochure Pages (1 to 8)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Next / Prev par click karein ya kisi bhi page par tap karein — realistic 3D paper curl animation aur paper rustle sound ke sath live flip hota hai.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {/* Sound Toggle */}
              <button
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2DCBE] hover:border-amber-500 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                title={isSoundEnabled ? 'Mute Page Flip Sound' : 'Enable Page Flip Sound'}
                aria-label="Toggle paper sound"
              >
                {isSoundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Sound ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>Sound Muted</span>
                  </>
                )}
              </button>

              {/* Fullscreen Reader Button */}
              <button
                onClick={() => openBrochureAt(activeSpread)}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen View</span>
              </button>
            </div>
          </div>

          {/* 3D FlipBook Presentation Stage */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden p-3 sm:p-6 md:p-8 mb-8 text-white">
            
            {/* Stage Header Info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-black uppercase tracking-wider shrink-0 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Spread {activeSpread + 1} of {brochureSpreads.length}</span>
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-black text-white truncate">
                    {brochureSpreads[activeSpread].title}
                  </h3>
                  <span className="text-[11px] text-slate-400 block truncate">
                    {brochureSpreads[activeSpread].subtitle}
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <span>Category:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                  {brochureSpreads[activeSpread].category}
                </span>
              </div>
            </div>

            {/* 3D Perspective Stage Area */}
            <div 
              className="relative w-full flex items-center justify-center py-4 sm:py-6 select-none"
              style={{ perspective: '2200px' }}
            >
              <AnimatePresence initial={false} custom={flipDirection} mode="wait">
                <motion.div
                  key={activeSpread}
                  custom={flipDirection}
                  variants={inlineBookFlipVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onClick={() => openBrochureAt(activeSpread)}
                  className="relative w-full max-w-4xl aspect-[16/8.2] max-h-[520px] flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-slate-700/80 bg-slate-900 group cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  title="Click to open fullscreen interactive reader"
                >
                  {/* High-Resolution Spread Image */}
                  <img
                    src={brochureSpreads[activeSpread].image}
                    alt={`${brochureSpreads[activeSpread].title} - Mukundra Prime Spread ${activeSpread + 1}`}
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                  />

                  {/* Middle Book Spine Crease & Fold Shadow (Realistic 3D Binding) */}
                  <div 
                    className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 sm:w-10 pointer-events-none z-20"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.06) 35%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.06) 65%, rgba(0,0,0,0.4) 100%)',
                      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                    }}
                  />

                  {/* Spine Crease Line */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-black/40 pointer-events-none z-20" />

                  {/* Top & Bottom Page Edge Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none z-10" />

                  {/* Fullscreen Tooltip on Hover */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 pointer-events-none z-30 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to Expand Fullscreen</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Previous Spread Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevSpread();
                }}
                disabled={activeSpread === 0}
                className={`absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all z-30 cursor-pointer shadow-2xl backdrop-blur-md ${
                  activeSpread === 0
                    ? 'bg-slate-900/40 text-slate-600 border border-slate-800 cursor-not-allowed opacity-40'
                    : 'bg-slate-900/90 hover:bg-amber-400 hover:text-slate-950 text-white border border-slate-700/80 hover:scale-110 active:scale-95'
                }`}
                aria-label="Previous Page Spread"
                title="Previous Spread (Flip Backward)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Next Spread Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextSpread();
                }}
                disabled={activeSpread === brochureSpreads.length - 1}
                className={`absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all z-30 cursor-pointer shadow-2xl backdrop-blur-md ${
                  activeSpread === brochureSpreads.length - 1
                    ? 'bg-slate-900/40 text-slate-600 border border-slate-800 cursor-not-allowed opacity-40'
                    : 'bg-slate-900/90 hover:bg-amber-400 hover:text-slate-950 text-white border border-slate-700/80 hover:scale-110 active:scale-95'
                }`}
                aria-label="Next Page Spread"
                title="Next Spread (Flip Forward)"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Stage Bottom Highlights Bar */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block sm:inline">
                  Highlights:
                </span>
                {brochureSpreads[activeSpread].highlights.slice(0, 3).map((item, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-slate-400 text-[11px]">
                <span className="hidden sm:inline">Use Prev/Next buttons or click any spread thumbnail below</span>
                <button
                  onClick={() => openBrochureAt(activeSpread)}
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Full Reader</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Spread Thumbnails Strip (The 8 Cards Grid) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Any Spread to Flip Live:
              </span>
              <span className="text-xs text-amber-800 font-bold">
                Spread {activeSpread + 1} Selected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {brochureSpreads.map((spread, idx) => {
                const isActive = idx === activeSpread;
                return (
                  <div
                    key={spread.id}
                    onClick={() => flipToSpread(idx)}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-300 text-left cursor-pointer ${
                      isActive
                        ? 'ring-3 ring-[#C5A46D] ring-offset-2 ring-offset-[#EFECE4] border-2 border-amber-500 shadow-xl scale-[1.04] bg-white z-10'
                        : 'bg-white border border-[#E2DCBE] hover:border-amber-500 hover:shadow-md hover:scale-[1.02]'
                    }`}
                    title={`Click to flip 3D book to Spread ${spread.id}: ${spread.title}`}
                  >
                    {/* Active Golden Tag */}
                    {isActive && (
                      <div className="absolute top-1.5 right-1.5 z-20 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[8px] uppercase tracking-wider shadow-sm flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>ACTIVE</span>
                      </div>
                    )}

                    <div className="aspect-[16/7] overflow-hidden bg-slate-100 relative">
                      <img
                        src={spread.image}
                        alt={spread.title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          isActive ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                        loading="lazy"
                      />
                      {/* Subtle spine line hint */}
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-black/25 pointer-events-none" />
                    </div>

                    <div className={`p-2 text-center border-t transition-colors ${
                      isActive ? 'bg-amber-50/90 border-amber-200' : 'bg-white border-slate-100 group-hover:bg-slate-50'
                    }`}>
                      <span className={`text-[10px] font-black block ${
                        isActive ? 'text-amber-800 font-extrabold' : 'text-amber-800'
                      }`}>
                        Spread {spread.id}
                      </span>
                      <span className="text-[10px] text-slate-600 font-medium truncate block">
                        {spread.title.split('(')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Unit Plans: 3D Isometric + 2D Floor Plans from Brochure */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E2DCBE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider border border-emerald-300 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Brochure Verified Unit Plans</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#8A6632] tracking-tight">
              1, 2 &amp; 3 BHK Architectural Layouts
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Official unit layouts with compact 3D furnished isometric previews and exact 2D measurements.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {officialBrochurePlans.map((plan, idx) => {
              const spreadIndex = idx + 2; // spreads 3, 4, 5, 6, 7
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-white border border-[#E2DCBE] hover:border-emerald-500/80 shadow-xs hover:shadow-md transition-all duration-300 p-4 sm:p-5 md:p-6"
                >
                  {/* Plan Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-[#E2DCBE]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider">
                          {plan.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-200">
                          {plan.area}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-[#8A6632]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => openBrochureAt(spreadIndex)}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-amber-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Spread {spreadIndex + 1}</span>
                      </button>
                    </div>
                  </div>

                  {/* Dual Grid: Normal Balanced 3D Isometric View + 2D Blueprint */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {/* Left: 3D Isometric View */}
                    <div className="rounded-xl bg-slate-50/60 border border-[#E2DCBE] overflow-hidden group">
                      <div className="px-3 py-1.5 bg-slate-100/70 border-b border-[#E2DCBE] flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-sky-600" />
                          <span>3D Furnished Isometric View</span>
                        </span>
                        <button
                          onClick={() => openLightbox(8 + idx)}
                          className="text-[10px] font-bold text-slate-500 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Expand</span>
                        </button>
                      </div>
                      <div 
                        className="h-48 sm:h-56 md:h-60 p-2 sm:p-3 bg-white flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={() => openLightbox(8 + idx)}
                      >
                        <img
                          src={plan.isoImage}
                          alt={`${plan.name} 3D Isometric Layout`}
                          className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-300 rounded"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right: 2D Blueprint Layout */}
                    <div className="rounded-xl bg-slate-50/60 border border-[#E2DCBE] overflow-hidden group">
                      <div className="px-3 py-1.5 bg-slate-100/70 border-b border-[#E2DCBE] flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-sky-600" />
                          <span>2D Architectural Layout &amp; Measurements</span>
                        </span>
                        <button
                          onClick={() => openLightbox(8 + officialBrochurePlans.length + idx)}
                          className="text-[10px] font-bold text-slate-500 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Expand</span>
                        </button>
                      </div>
                      <div 
                        className="h-48 sm:h-56 md:h-60 p-2 sm:p-3 bg-white flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={() => openLightbox(8 + officialBrochurePlans.length + idx)}
                      >
                        <img
                          src={plan.blueprintImage}
                          alt={`${plan.name} 2D Blueprint`}
                          className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-300 rounded"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Clean Dimension Specifications Footer Across Both Images */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-[#E2DCBE] flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 shrink-0">
                      Key Dimension Specifications:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700">
                      {plan.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-sky-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Full Brochure CTA */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
                Official Deeppura Builders Publication
              </span>
              <h4 className="text-xl sm:text-2xl font-black mt-1 text-white">
                Download the Complete 8-Page Mukundra Prime Brochure
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
                High-definition plans, verified amenities, company profile since 2011, and site connectivity on 100 Ft. Road, Raipura, Kota.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBrochureAt(0)}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
              >
                Interactive Reader
              </button>
              <a
                href={pdfUrl}
                download="Mukundra-Prime-Official-Brochure.pdf"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                Download PDF (8.5 MB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional 2D Unit Plan Blueprints */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-[#E2DCBE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Master Blueprints
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#8A6632] mt-1">
              Detailed Structural Unit Plan Blueprints
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Click any blueprint below to inspect high-resolution architectural schematics in full detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitPlanImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="rounded-2xl bg-white border border-[#E2DCBE] hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer p-4 flex flex-col justify-between"
                onClick={() => openLightbox(8 + officialBrochurePlans.length * 2 + index)}
              >
                <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3">
                  <img
                    src={item.src}
                    alt={`Unit Plan Blueprint ${item.id}`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">Unit Blueprint #{item.id}</span>
                  <span className="text-amber-800 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <GalleryModal
        isOpen={galleryModal.isOpen}
        currentIndex={galleryModal.index}
        images={allGalleryImages}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />

      {/* Interactive Official Brochure Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        initialPage={initialBrochurePage}
        onClose={() => setBrochureModalOpen(false)}
      />
    </div>
  );
};
