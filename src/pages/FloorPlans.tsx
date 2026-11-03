import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';

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
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const lightboxImages: GalleryImage[] = unitPlanImages.map((u) => ({
    url: u.src,
    captionEn: `Unit Plan ${u.id}`,
    captionHi: `Unit Plan ${u.id}`,
    category: 'Unit Plan',
  }));

  const openLightbox = (idx: number) => {
    setGalleryModal({ isOpen: true, index: idx });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      {/* Top Banner (High-Resolution Architectural Background) */}
      <section className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden border-b border-slate-800">
        {/* Background Architectural Image with Clean Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/hero/hero-building.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/30 to-slate-950/40" />

        {/* Centered Banner Content */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/20 mb-1">
            <span>Architectural Layouts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
            UNIT <span className="text-cyan-400">PLAN</span>
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-slate-200">
            RERA No.-RAJ/P/2025/3532
          </h2>

          {/* Official Verification Badges */}
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
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-cyan-400">UNIT PLAN</span>
            </nav>
          </div>
        </motion.div>
      </section>

      {/* Pure Unit Plan Showcase Sections (Alternating Light Slate Backgrounds, Clean) */}
      <div className="w-full">
        {unitPlanImages.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={item.id}
              className={`py-8 sm:py-12 md:py-16 ${isEven ? 'bg-white' : 'bg-slate-50'} border-b border-slate-200 transition-colors`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer p-4 sm:p-6"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={`Unit Plan ${item.id}`}
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500 rounded-xl"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <GalleryModal
        isOpen={galleryModal.isOpen}
        currentIndex={galleryModal.index}
        images={lightboxImages}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />
    </div>
  );
};
