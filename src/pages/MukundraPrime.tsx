import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Maximize2,
  Compass,
  ArrowRight,
  Download,
  CheckCircle2,
  Trees,
  Sparkles
} from 'lucide-react';
import { mukundraPrimeProject, FloorPlanItem } from '../data/projects';
import { amenitiesList } from '../data/amenities';
import { AmenityCard } from '../components/AmenityCard';
import { BrochureModal } from '../components/BrochureModal';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';
import { MarqueeBanner } from '../components/MarqueeBanner';

export const MukundraPrime: React.FC = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  // Comprehensive gallery for Mukundra Prime
  const projectGallery: GalleryImage[] = mukundraPrimeProject.images.map((img) => ({
    url: img.url,
    captionEn: img.captionEn,
    captionHi: img.captionEn,
    category: img.category,
  }));

  const openLightboxAtIndex = (idx: number) => {
    setGalleryModal({ isOpen: true, index: idx });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      
      {/* 1. PROJECT HERO SECTION WITH RICH ANIMATIONS & DARK OVERLAY */}
      <section className="relative min-h-[72vh] flex items-center bg-slate-900 overflow-hidden py-16 lg:py-24 border-b border-slate-200">
        {/* Background Architecture Image with Ken Burns Zoom & Cinematic Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={mukundraPrimeProject.heroImage}
            alt="Mukundra Prime Modern Residential Residences Kota"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content with Staggered Entrance Animations */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.14,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="lg:col-span-8 max-w-2xl space-y-5"
            >
              
              {/* Badges with Radar Pulse & Glow */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="px-4 py-1.5 rounded-full bg-emerald-400/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Ongoing Residential Development
                </span>

                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs flex items-center gap-2 hover:bg-white/20 transition-colors">
                  <img src="/assets/badges/rera-approved.png" alt="RERA Approved" className="w-5 h-5 object-contain" />
                  <span>RERA APPROVED</span>
                </span>

                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs flex items-center gap-2 hover:bg-white/20 transition-colors">
                  <img src="/assets/badges/uit-approved.png" alt="UIT Approved" className="w-5 h-5 object-contain" />
                  <span>UIT APPROVED</span>
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-md"
              >
                Mukundra Prime{' '}
                <span className="text-emerald-400 block sm:inline drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  Residences
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="text-white/85 text-base sm:text-lg leading-relaxed drop-shadow-sm"
              >
                Thoughtfully planned modern 1 BHK, 2 BHK (701.5 sq. ft.), 3 BHK, and 3 BHK Deluxe (960 sq. ft.) residences in Raipura, Kota, Rajasthan by Mukundra Infra Project Private Limited.
              </motion.p>

              {/* Quick Metrics Bar */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-white pt-1"
              >
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xs cursor-default">
                  Enquire for Availability
                </span>

                <span className="px-4 py-2 rounded-full bg-emerald-400/20 backdrop-blur-md text-emerald-300 font-bold border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-default">
                  Up to 90% Loan Available
                </span>

                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xs cursor-default">
                  100 Ft. Wide Road
                </span>
              </motion.div>

              {/* Action Buttons: Glowing Pill Buttons */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="flex flex-wrap items-center gap-3.5 pt-3"
              >
                <button
                  type="button"
                  onClick={() => setBrochureOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Download Brochure</span>
                </button>

                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5"
                >
                  <span>Enquire Now</span>
                </Link>
              </motion.div>

            </motion.div>

            {/* Right Side: Floating Glass Highlight Ribbon (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="hidden lg:block lg:col-span-4"
            >
              <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Township Highlights</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct 100 Feet Wide Road Access near Decent School</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Adjacent to 200 Bigha Herbal Park &amp; Clean Green Belt</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>14+ Verified Resort Lifestyle Amenities (Pool, Temple, Gym)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-emerald-800 font-semibold">
                  <span>Developer Allotment Desk</span>
                  <span className="text-slate-900 font-bold">Zero Brokerage</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Banner on Project Page */}
      <MarqueeBanner variant="light" />

      {/* 2. PROJECT OVERVIEW & DEVELOPER CREDENTIALS */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>Project Overview</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Modern Residences Built for <span className="text-emerald-600">Enduring Comfort</span>
              </h2>

              {/* Statement Box */}
              <div className="p-5 rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 text-slate-900">
                <p className="text-base sm:text-lg font-bold leading-relaxed">
                  "Mukundra Prime is an ongoing residential development by Mukundra Infra Project Private Limited, offering thoughtfully planned 1 BHK, 2 BHK and 3 BHK residential configurations in Kota, Rajasthan."
                </p>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Located on a wide 100 ft. road near Decent School in Raipura, Mukundra Prime combines peaceful nature living with instant city accessibility. The development is situated adjacent to Rajasthan's largest 200-Bigha Herbal Park and in close proximity to Allen Career Institute, providing clean green surroundings for growing families.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block mb-0.5">
                    Project Developer
                  </span>
                  <strong className="text-xs text-slate-900 block font-bold">
                    {mukundraPrimeProject.developerEn}
                  </strong>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block mb-0.5">
                    Road Connectivity
                  </span>
                  <strong className="text-xs text-slate-900 block font-bold">
                    100 Feet Wide Road Frontage
                  </strong>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block mb-0.5">
                    Natural Surroundings
                  </span>
                  <strong className="text-xs text-slate-900 block font-bold">
                    Adjacent 200-Bigha Herbal Park
                  </strong>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase block mb-0.5">
                    Nearby Education Hub
                  </span>
                  <strong className="text-xs text-slate-900 block font-bold">
                    Allen Institute &amp; Decent School
                  </strong>
                </div>
              </div>
            </motion.div>

            {/* Right Media Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div 
                className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 group cursor-pointer bg-white"
                onClick={() => openLightboxAtIndex(1)}
              >
                <img
                  src="/assets/projects/mukundra-prime/interiors/living-room.jpg"
                  alt="Mukundra Prime Interior View"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white text-emerald-700 shadow-xl border border-slate-200">
                    <Maximize2 className="w-5 h-5 text-emerald-600" />
                  </span>
                </div>
              </div>
              <div className="p-2.5 text-center text-xs text-slate-500">
                Mukundra Prime: Contemporary Living Room &amp; Modular Kitchen
              </div>

              {/* Official Approvals & Compliance Seals */}
              <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="/assets/badges/rera-approved.png" 
                    alt="RERA Approved" 
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-105 transition-transform" 
                  />
                  <div>
                    <div className="text-[10px] font-black uppercase text-red-700 tracking-wider">
                      RERA Approved
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      RAJ/P/2025/3532
                    </div>
                    <div className="text-[10px] text-slate-500">
                      100% Legal Clearance
                    </div>
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div className="flex items-center gap-3">
                  <img 
                    src="/assets/badges/uit-approved.png" 
                    alt="UIT Kota Approved" 
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-105 transition-transform" 
                  />
                  <div>
                    <div className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">
                      UIT Approved
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      UIT Kota Sanctioned
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Masterplan Approved
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. RESIDENTIAL CONFIGURATIONS & UNIT PLANS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Detailed Unit Plans
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Architectural <span className="text-emerald-600">Unit Plans</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any layout to inspect high-resolution dimensions in full screen lightbox.
            </p>
          </motion.div>

          {/* Unit Plan Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['/assets/unit-plans/unit_plan_1.jpg', '/assets/unit-plans/unit_plan_2.jpg', '/assets/unit-plans/unit_plan_3.jpg', '/assets/unit-plans/unit_plan_4.jpg', '/assets/unit-plans/unit_plan_5.jpg', '/assets/unit-plans/unit_plan_6.jpg'].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                onClick={() => {
                  const galleryIdx = projectGallery.findIndex((g) => g.url === src);
                  if (galleryIdx >= 0) openLightboxAtIndex(galleryIdx);
                  else {
                    projectGallery.push({
                      url: src,
                      captionEn: `Unit Plan ${idx + 1}`,
                      captionHi: `Unit Plan ${idx + 1}`,
                      category: 'Floor Plans'
                    });
                    openLightboxAtIndex(projectGallery.length - 1);
                  }
                }}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Unit Plan ${idx + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-emerald-800 font-bold text-xs shadow-xl border border-slate-200">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/unit-plan"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
            >
              <span>Explore All Unit Plans</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. CONFIRMED AMENITIES - ALL 14 */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Community Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              14 Confirmed <span className="text-emerald-600">Amenities</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Every facility confirmed in the official Mukundra Prime brochure to enrich daily family life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesList.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              >
                <AmenityCard
                  amenity={amenity}
                  onImageClick={(url, captionEn) => {
                    const idx = projectGallery.findIndex((g) => g.url === url);
                    if (idx >= 0) openLightboxAtIndex(idx);
                    else {
                      projectGallery.push({ url, captionEn, captionHi: captionEn, category: 'Amenities' });
                      openLightboxAtIndex(projectGallery.length - 1);
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LOCATION & MAP */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                Location Advantages
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Prime Location on <span className="text-emerald-600">100 Feet Wide Road</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Situated in Rajnagar, Raipura on the prominent Deoli Arab Road. The project enjoys a wide 100-foot frontage, direct connectivity to commercial markets, reputable schools, and modern healthcare facilities.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-slate-900 block font-bold">Confirmed Site Address</strong>
                    <span>Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Trees className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-slate-900 block font-bold">200 Bigha Herbal Park</strong>
                    <span>Walk to Rajasthan's largest botanical and herbal reserve for fresh air and daily fitness.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-slate-900 block font-bold">Education Proximity</strong>
                    <span>Immediate connectivity to Decent School and Allen Career Institute.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
                <iframe
                  title="Mukundra Prime Location Map"
                  src="https://maps.google.com/maps?q=Deoli%20Arab%20Road,%20Near%20Decent%20School,%20Raipura,%20Kota,%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[380px] rounded-xl border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modals */}
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />

      <GalleryModal
        images={projectGallery}
        currentIndex={galleryModal.index}
        isOpen={galleryModal.isOpen}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />

    </div>
  );
};
