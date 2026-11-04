import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, Layers, BookOpen, Download, FileText, CheckCircle2 } from 'lucide-react';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';
import { BrochureModal } from '../components/BrochureModal';

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

const brochureSpreads = [
  { id: 1, title: 'Cover & Project Location (100 Ft. Road, Raipura)', src: '/assets/brochure/page-1.jpg' },
  { id: 2, title: 'About Deeppura Group & Daylight Elevation (Since 2011)', src: '/assets/brochure/page-2.jpg' },
  { id: 3, title: '3 BHK Deluxe Unit Plan (960 sq.ft.)', src: '/assets/brochure/page-3.jpg' },
  { id: 4, title: '3 BHK Standard Unit Plan (755 sq.ft.)', src: '/assets/brochure/page-4.jpg' },
  { id: 5, title: '2 BHK Standard Unit Plan (700.15 sq.ft.)', src: '/assets/brochure/page-5.jpg' },
  { id: 6, title: '1 BHK Deluxe Unit Plan', src: '/assets/brochure/page-6.jpg' },
  { id: 7, title: '1 BHK Standard Unit Plan', src: '/assets/brochure/page-7.jpg' },
  { id: 8, title: 'Verified Amenities & Completed Projects', src: '/assets/brochure/page-8.jpg' },
];

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
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  // Consolidated gallery list for fullscreen lightbox
  const allGalleryImages: GalleryImage[] = [
    // 8 Official Brochure Spreads
    ...brochureSpreads.map((s) => ({
      url: s.src,
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
    setInitialBrochurePage(pageIndex);
    setBrochureModalOpen(true);
  };

  const pdfUrl = '/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf';

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
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
              className="px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download PDF (8.5 MB)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Official Brochure Spreads Strip (Quick Thumbnail Navigation) */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Official Document Spreads
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Browse Official Brochure Pages (1 to 8)
              </h2>
            </div>
            <button
              onClick={() => openBrochureAt(0)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Open in Fullscreen Interactive Reader</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {brochureSpreads.map((spread, idx) => (
              <div
                key={spread.id}
                onClick={() => openBrochureAt(idx)}
                className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-[16/7] overflow-hidden bg-slate-100">
                  <img
                    src={spread.src}
                    alt={spread.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 text-center bg-white border-t border-slate-100">
                  <span className="text-[10px] font-black text-emerald-700 block">
                    Spread {spread.id}
                  </span>
                  <span className="text-[10px] text-slate-600 font-medium truncate block">
                    {spread.title.split('(')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Unit Plans: 3D Isometric + 2D Floor Plans from Brochure */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Brochure Verified Unit Plans</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              1, 2 &amp; 3 BHK Architectural Layouts
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Authentic unit plans extracted directly from the official DEEPPURA BUILDERS brochure, complete with 3D furnished isometric previews and exact 2D room measurements.
            </p>
          </div>

          <div className="space-y-12">
            {officialBrochurePlans.map((plan, idx) => {
              const spreadIndex = idx + 2; // spreads 3, 4, 5, 6, 7 (indices 2, 3, 4, 5, 6)
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500/80 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-7 md:p-8"
                >
                  {/* Plan Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider">
                          {plan.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
                          {plan.area}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => openBrochureAt(spreadIndex)}
                        className="px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Brochure Spread {spreadIndex + 1}</span>
                      </button>
                    </div>
                  </div>

                  {/* Dual Grid: 3D Isometric View + 2D Blueprint */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
                    {/* Left: 3D Isometric Cutaway */}
                    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs group">
                      <div className="p-3 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-emerald-600" />
                          <span>3D Furnished Isometric View</span>
                        </span>
                        <button
                          onClick={() => openLightbox(8 + idx)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Expand</span>
                        </button>
                      </div>
                      <div 
                        className="aspect-[4/3] p-4 bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={() => openLightbox(8 + idx)}
                      >
                        <img
                          src={plan.isoImage}
                          alt={`${plan.name} 3D Isometric Layout`}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right: 2D Blueprint Layout */}
                    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs group flex flex-col justify-between">
                      <div className="p-3 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-emerald-600" />
                          <span>2D Architectural Layout &amp; Measurements</span>
                        </span>
                        <button
                          onClick={() => openLightbox(8 + officialBrochurePlans.length + idx)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Expand</span>
                        </button>
                      </div>
                      <div 
                        className="aspect-[4/3] p-4 bg-white flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={() => openLightbox(8 + officialBrochurePlans.length + idx)}
                      >
                        <img
                          src={plan.blueprintImage}
                          alt={`${plan.name} 2D Blueprint`}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                          loading="lazy"
                        />
                      </div>

                      {/* Specs bullets */}
                      <div className="p-4 bg-slate-50/70 border-t border-slate-200 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                          Key Dimension Specifications:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {plan.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                Download PDF (8.5 MB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional 2D Unit Plan Blueprints */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Master Blueprints
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
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
                className="rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer p-4 flex flex-col justify-between"
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
                  <span className="text-emerald-700 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
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
