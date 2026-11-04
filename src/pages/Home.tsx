import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Compass, 
  PhoneCall, 
  Phone, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Sparkles, 
  Landmark,
  Eye,
  Maximize2,
  BookOpen,
  Download,
} from 'lucide-react';
import { mukundraPrimeProject, floorPlansData, FloorPlanItem } from '../data/projects';
import { amenitiesList } from '../data/amenities';
import { AmenityCard } from '../components/AmenityCard';
import { EnquiryForm } from '../components/EnquiryForm';
import { BrochureModal } from '../components/BrochureModal';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { OurProjectsShowcase } from '../components/OurProjectsShowcase';
import { BankPartnersMarquee } from '../components/BankPartnersMarquee';

export const Home: React.FC = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const [enquiryConfig, setEnquiryConfig] = useState<string>('Not Decided');

  // Curated project gallery items for lightbox
  const galleryImages: GalleryImage[] = [
    {
      url: '/assets/projects/mukundra-prime/official-pricing-offer-poster.jpg',
      captionEn: 'Mukundra Prime Official Pricing Poster - Starting ₹15 Lakhs*, Booking ₹51,000/-',
      captionHi: 'Mukundra Prime Official Pricing Poster - Starting ₹15 Lakhs*, Booking ₹51,000/-',
      category: 'Special Offer'
    },
    {
      url: '/assets/projects/mukundra-prime/gate-daylight-closeup.jpg',
      captionEn: 'Mukundra Prime Grand Entrance Gate with 3D Signage (Daylight View)',
      captionHi: 'Mukundra Prime Grand Entrance Gate with 3D Signage (Daylight View)',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/facade-gate-twilight.jpg',
      captionEn: 'Mukundra Prime Grand Entrance Gate with 3D Signage & Facade (Twilight View)',
      captionHi: 'Mukundra Prime Grand Entrance Gate with 3D Signage & Facade (Twilight View)',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/aerial-masterplan-100ft.jpg',
      captionEn: 'Mukundra Prime 3D Masterplan Aerial Elevation on 100 Ft. Road',
      captionHi: 'Mukundra Prime 3D Masterplan Aerial Elevation on 100 Ft. Road',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/site-progress-tower.jpg',
      captionEn: 'Mukundra Prime On-Site High-Rise Tower Construction Progress',
      captionHi: 'Mukundra Prime On-Site High-Rise Tower Construction Progress',
      category: 'Exterior'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-2bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 2 BHK 3D Isometric Furnished Cutaway Layout',
      captionHi: 'Mukundra Prime 2 BHK 3D Isometric Furnished Cutaway Layout',
      category: 'Interior'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 3 BHK 3D Isometric Furnished Cutaway Layout',
      captionHi: 'Mukundra Prime 3 BHK 3D Isometric Furnished Cutaway Layout',
      category: 'Interior'
    },
    {
      url: '/assets/hero/mukundra-prime-daylight-towers.jpg',
      captionEn: 'Mukundra Prime Multi-Wing Towers on 100 Ft. Road (Daylight View)',
      captionHi: 'Mukundra Prime Multi-Wing Towers on 100 Ft. Road (Daylight View)',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg',
      captionEn: 'Mukundra Prime Resort Swimming Pool, Temple & Community Clubhouse',
      captionHi: 'Mukundra Prime Resort Swimming Pool, Temple & Community Clubhouse',
      category: 'Amenities'
    },
    {
      url: '/assets/hero/hero-building.jpg',
      captionEn: 'Mukundra Prime Masterplan Architectural Elevation - Raipura, Kota',
      captionHi: 'Mukundra Prime Masterplan Architectural Elevation - Raipura, Kota',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/interiors/living-room.jpg',
      captionEn: 'Mukundra Prime Contemporary Living & Modular Kitchen',
      captionHi: 'Mukundra Prime Contemporary Living & Modular Kitchen',
      category: 'Interior'
    },
    {
      url: '/assets/home/family-living-gold.jpg',
      captionEn: 'Mukundra Prime Designer Family Living Room with Warm Ambient Finishes',
      captionHi: 'Mukundra Prime Designer Family Living Room with Warm Ambient Finishes',
      category: 'Interior'
    },
    {
      url: '/assets/home/family-living-twilight.jpg',
      captionEn: 'Mukundra Prime Expansive Living Room with Private Panoramic Balcony',
      captionHi: 'Mukundra Prime Expansive Living Room with Private Panoramic Balcony',
      category: 'Interior'
    },
    {
      url: '/assets/projects/mukundra-prime/interiors/master-bedroom.jpg',
      captionEn: 'Mukundra Prime Master Bedroom with Ambient Lighting',
      captionHi: 'Mukundra Prime Master Bedroom with Ambient Lighting',
      category: 'Interior'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg',
      captionEn: 'Society Swimming Pool & Relaxation Deck',
      captionHi: 'Society Swimming Pool & Relaxation Deck',
      category: 'Amenities'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/temple.jpg',
      captionEn: 'On-Premises Sanctified Society Temple',
      captionHi: 'On-Premises Sanctified Society Temple',
      category: 'Amenities'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/kids-park.jpg',
      captionEn: 'Landscaped Children Play Park & Green Lawns',
      captionHi: 'Landscaped Children Play Park & Green Lawns',
      category: 'Amenities'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/gym.jpg',
      captionEn: 'Open Outdoor Calisthenics & Fitness Gymnasium',
      captionHi: 'Open Outdoor Calisthenics & Fitness Gymnasium',
      category: 'Amenities'
    },
    {
      url: '/assets/completed-projects/mukundra-heights.jpg',
      captionEn: 'Completed Landmark: Mukundra Heights - R.K. Puram, Kota',
      captionHi: 'Completed Landmark: Mukundra Heights - R.K. Puram, Kota',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/mukundra-heights-perspective.jpg',
      captionEn: 'Mukundra Heights Architectural Perspective with Landscaped Entry',
      captionHi: 'Mukundra Heights Architectural Perspective with Landscaped Entry',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/mukundra-heights-aerial.jpg',
      captionEn: 'Mukundra Heights 3D Aerial View with Stilt Parking & Rooftop Terrace',
      captionHi: 'Mukundra Heights 3D Aerial View with Stilt Parking & Rooftop Terrace',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/ashiyana-homes.jpg',
      captionEn: 'Completed Landmark: Ashiyana Homes Luxury Gated Row Villas - Thekra, Kota',
      captionHi: 'Completed Landmark: Ashiyana Homes Luxury Gated Row Villas - Thekra, Kota',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/ashiyana-homes-street.jpg',
      captionEn: 'Completed Landmark: Ashiyana Homes Wide Avenue & Landscaped Driveway',
      captionHi: 'Completed Landmark: Ashiyana Homes Wide Avenue & Landscaped Driveway',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/mahalaxmi-apartment.jpg',
      captionEn: 'Completed Landmark: Mahalaxmi Apartment - Chawani, Kota',
      captionHi: 'Completed Landmark: Mahalaxmi Apartment - Chawani, Kota',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/mahalaxmi-apartment-tower.jpg',
      captionEn: 'Completed Landmark: Mahalaxmi Apartment High-Rise Facade',
      captionHi: 'Completed Landmark: Mahalaxmi Apartment High-Rise Facade',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/royal-heritage-farmhouse.jpg',
      captionEn: 'Completed Landmark: Royal Heritage Farm House - Alaniya, Kota',
      captionHi: 'Completed Landmark: Royal Heritage Farm House - Alaniya, Kota',
      category: 'Completed Projects'
    }
  ];

  const openLightboxAtIndex = (idx: number) => {
    setGalleryModal({ isOpen: true, index: idx });
  };

  const handleEnquireFloorPlan = (item: FloorPlanItem) => {
    setEnquiryConfig(item.nameEn);
    const elem = document.getElementById('enquiry-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 4 Curated Slides: Real Mukundra Prime Architectural Elevations & 3D Masterplan
  const heroSlides = [
    {
      id: 1,
      image: '/assets/hero/mukundra-prime-luxury-hero.jpg',
      tag: 'Mukundra Prime • Royal Architectural Gold Living',
      title: 'Building Landmarks.',
      titleHighlight: 'Crafting Golden Futures.',
      subtitle: 'Thoughtfully planned modern 1, 2 & 3 BHK residences on 100 Ft. Road in Kota, Rajasthan. Starting ₹15 Lakhs*.',
    },
    {
      id: 2,
      image: '/assets/projects/mukundra-prime/aerial-masterplan-100ft.jpg',
      tag: '100 Ft. Road • Masterplanned Township',
      title: 'Visionary Design.',
      titleHighlight: 'Grand Living.',
      subtitle: 'Multi-tower gated residential development adjacent to Kota’s 200-Bigha Herbal Park & Allen Institute.',
    },
    {
      id: 3,
      image: '/assets/hero/mukundra-prime-twilight-hero.jpg',
      tag: 'Gated Township • 14 Verified Resort Amenities',
      title: 'Comfort & Security.',
      titleHighlight: 'Every Single Day.',
      subtitle: 'Temple, swimming pool, open gym, kids park, supermarket, and 24×7 security guards within gates.',
    },
    {
      id: 4,
      image: '/assets/projects/mukundra-prime/elevation-daylight-wide.jpg',
      tag: 'Luxury Modern Architecture • 100 Ft. Road',
      title: 'Crafted for Joy.',
      titleHighlight: 'Life in Full Bloom.',
      subtitle: 'Pre-approved 90% home loans with SBI, HDFC, ICICI, Axis, Union, BoB, Kotak. Booking from ₹51,000/-.',
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800">
      
      {/* SECTION B: HERO SECTION - CINEMATIC SLIDER */}
      <section 
        className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-slate-100 overflow-hidden border-b border-slate-200 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fast & Smooth Crossfade Image Animation */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Cinematic Vignette & Gradient Overlay for Ultra-Luxury Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20 z-[1] pointer-events-none" />

        {/* Carousel Navigation Arrow: Left (<) */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-amber-500 text-slate-900 hover:text-slate-950 border border-slate-200 hover:border-amber-400 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Carousel Navigation Arrow: Right (>) */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-amber-500 text-slate-900 hover:text-slate-950 border border-slate-200 hover:border-amber-400 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
          <div className="max-w-xl space-y-4">
            
            {/* Top Project Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black text-xs font-bold uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>{heroSlides[currentSlide].tag}</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            >
              {heroSlides[currentSlide].title}
              <span className="text-[#C5A46D] block mt-1 drop-shadow-[0_0_20px_rgba(197,164,109,0.5)]">
                {heroSlides[currentSlide].titleHighlight}
              </span>
            </motion.h1>

            {/* Short Supporting Text */}
            <motion.p 
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
              className="text-white text-sm sm:text-base font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-lg"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/projects"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-[0_4px_16px_rgba(212,175,55,0.4)] text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_14px_rgba(197,164,109,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById('enquiry-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-full border border-white/40 bg-black/35 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Sleek Minimal Single-Line Badges Strip with Official PNG Seals */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold">
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white shadow-sm">
                1, 2 &amp; 3 BHK
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white shadow-sm">
                100 Ft. Road
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white shadow-sm flex items-center gap-2 hover:bg-black/60 transition-colors">
                <img src="/assets/badges/rera-approved.png" alt="RERA Approved" className="w-5 h-5 object-contain" />
                <span>RERA APPROVED</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white shadow-sm flex items-center gap-2 hover:bg-black/60 transition-colors">
                <img src="/assets/badges/uit-approved.png" alt="UIT Approved" className="w-5 h-5 object-contain" />
                <span>UIT APPROVED</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#C5A46D]/25 backdrop-blur-md border border-amber-400/50 text-amber-200 shadow-sm">
                Up to 90% Loan
              </span>
            </div>

          </div>
        </div>

        {/* Floating Government Verification Seals (Top Right of Hero on Large Screens) */}
        <div className="hidden lg:flex items-center gap-3 absolute top-28 right-8 z-20 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl">
          <div className="flex items-center gap-2.5">
            <img 
              src="/assets/badges/rera-approved.png" 
              alt="Rajasthan RERA Approved" 
              className="w-10 h-10 object-contain drop-shadow-sm hover:scale-105 transition-transform" 
            />
            <img 
              src="/assets/badges/uit-approved.png" 
              alt="UIT Kota Approved" 
              className="w-10 h-10 object-contain drop-shadow-sm hover:scale-105 transition-transform" 
            />
          </div>
          <div className="border-l border-slate-200 pl-3">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-900">
              Government Verified
            </div>
            <div className="text-[11px] font-bold text-amber-800">
              RERA &amp; UIT Approved
            </div>
            <div className="text-[9px] text-slate-500 font-medium">
              RAJ/P/2025/3532
            </div>
          </div>
        </div>

        {/* Carousel Bottom Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-7 h-2.5 bg-amber-500 shadow-[0_0_10px_rgba(197,164,109,0.8)]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter on bottom right */}
        <div className="hidden sm:block absolute bottom-7 right-8 z-30 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-xl">
          0{currentSlide + 1} / 0{heroSlides.length}
        </div>
      </section>

      {/* SECTION B.2: INFINITE SMOOTH MARQUEE BANNER */}
      <MarqueeBanner variant="light" />

      {/* SECTION B.3: EXECUTIVE KEY METRICS & REPUTATION COUNTERS */}
      <section className="py-16 sm:py-20 bg-[#F5EEDB] border-b border-[#E8D8B3] relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Stat 1: 14+ Resort Amenities */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8A6632] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-100 transition-all border border-amber-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632] tracking-tight">
                <AnimatedCounter to={14} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mt-1.5">
                Resort Amenities
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Pool, Temple, Gym, Kids Park &amp; Supermarket
              </p>
            </motion.div>

            {/* Stat 2: 4 Delivered Landmarks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8A6632] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-100 transition-all border border-amber-200">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632] tracking-tight">
                <AnimatedCounter to={4} suffix="" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mt-1.5">
                Delivered Landmarks
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                R.K. Puram, Thekra, Chawani &amp; Alaniya
              </p>
            </motion.div>

            {/* Stat 3: 90% Approved Loan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8A6632] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-100 transition-all border border-amber-200">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632] tracking-tight">
                <AnimatedCounter to={90} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mt-1.5">
                Bank Loan Pre-Approved
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                SBI, BOB, ICICI, Axis, Kotak &amp; Union Bank
              </p>
            </motion.div>

            {/* Stat 4: 100 Ft. Road */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8A6632] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-100 transition-all border border-amber-200">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632] tracking-tight">
                <AnimatedCounter to={100} suffix=" Ft." />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mt-1.5">
                Wide Corridor Access
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Masterplan road at Raipura &amp; Decent School
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION C: ABOUT DEEPPURA GROUP */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E8D8B3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column (5 cols) with Left-Slide Entrance */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 group">
                <img
                  src="/assets/home/family-living-gold.jpg"
                  alt="DEEPPURA GROUP Luxury Family Living Space"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Director Leadership Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-2xl">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-amber-800">
                    Founder &amp; Director
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    Prakash Jain (Deeppura)
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed italic">
                    "Our mission is simple: to build with integrity, design with purpose, and create homes that stand as testaments of trust for the families of Kota."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text & Narrative Column (7 cols) with Right-Slide Entrance */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
                <span>About DEEPPURA GROUP</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Building Trust Through <span className="text-[#8A6632] font-black">Thoughtful Development</span>
              </h2>

              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                A dedicated corporate real estate developer delivering enduring quality, structured engineering, and thoughtful residential living in Kota, Rajasthan.
              </p>

              <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
                <p>
                  DEEPPURA GROUP stands as a cornerstone of reliability and architectural vision in the real estate landscape of Kota. Under the leadership of Founder &amp; Director Prakash Jain (Deeppura), the group focuses on creating residential spaces that harmonize modern lifestyle conveniences with lasting structural integrity.
                </p>
                <p>
                  Every residential project is conceptualized with spatial efficiency, generous natural ventilation, cross-breezes, and verified municipal approvals. The company maintains an unwavering dedication to transparent communication, timely progress, and genuine buyer support.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Architectural Integrity
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Engineered spatial planning, abundant natural sunlight, and cross-ventilation in every residence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Strategic Locations
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    100 ft. road connectivity near Kota's premier schools, hospitals, and transit corridors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-colors">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                    Transparent Conduct
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Honest documentation, verified RERA &amp; UIT approvals, and dedicated buyer support.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_2px_12px_rgba(197,164,109,0.35)] hover:bg-amber-400 transition-all hover:-translate-y-0.5"
                >
                  <span>Learn More About Our Company</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION C.5: OFFICIAL PRICING & SPECIAL DHAMAKA OFFER SHOWCASE */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#18140E] via-[#1A140B] to-[#100C06] text-white border-y border-[#C5A46D]/30 relative overflow-hidden">
        {/* Glow & Decorative accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A46D]/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#18140E]/30 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#B38F54] text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg mb-5">
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Special Limited-Time Dhamaka Offer</span>
          </div>

          {/* Main Headline requested by user */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            मात्र <span className="text-[#C5A46D]">₹15* लाख में</span> पायें अपने सपनों का घर
          </h2>

          {/* Front Description requested by user */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            अफोर्डेबल दाम, 90% बैंक लोन सुविधा और सरकारी योजना PMJAY के तहत ₹1,80,000/- तक की छूट के साथ।
          </p>

          {/* 4 Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A46D]/30 shadow-md text-center hover:border-[#C5A46D]/60 transition-colors">
              <div className="text-[10px] text-[#C5A46D] font-bold uppercase tracking-wider">Starting Price</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">₹15 Lakh*</div>
              <div className="text-[11px] text-slate-300">अफोर्डेबल लग्जरी</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A46D]/30 shadow-md text-center hover:border-[#C5A46D]/60 transition-colors">
              <div className="text-[10px] text-[#C5A46D] font-bold uppercase tracking-wider">Booking Start</div>
              <div className="text-xl sm:text-2xl font-black text-[#C5A46D] mt-0.5">₹51,000/-</div>
              <div className="text-[11px] text-slate-300">आसान बुकिंग</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A46D]/30 shadow-md text-center hover:border-[#C5A46D]/60 transition-colors">
              <div className="text-[10px] text-[#C5A46D] font-bold uppercase tracking-wider">Govt. Subsidy</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">₹1,80,000</div>
              <div className="text-[11px] text-slate-300">PMJAY योजना छूट</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C5A46D]/30 shadow-md text-center hover:border-[#C5A46D]/60 transition-colors">
              <div className="text-[10px] text-[#C5A46D] font-bold uppercase tracking-wider">Bank Loan</div>
              <div className="text-xl sm:text-2xl font-black text-[#C5A46D] mt-0.5">Up to 90%</div>
              <div className="text-[11px] text-slate-300">नेशनलाइज्ड बैंक</div>
            </div>
          </div>

          {/* Dhamaka Offer Box */}
          <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#241D14]/70 border border-[#C5A46D]/50 backdrop-blur-md flex items-center justify-center gap-3 shadow-xl mb-7">
            <Sparkles className="w-5 h-5 text-[#C5A46D] shrink-0" />
            <div className="text-xs sm:text-sm font-semibold text-slate-100 text-left sm:text-center">
              <strong className="text-[#C5A46D] font-black">धमाका ऑफर:</strong> फुली फर्निश्ड फ्लैट मॉड्यूलर किचन के साथ बिना किसी अतिरिक्त खर्च!
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/917357690111?text=Hello%20DEEPPURA%20GROUP,%20I%20am%20interested%20in%20the%20Mukundra%20Prime%20Rs.15%20Lakh%20offer.%20Please%20share%20booking%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] via-[#D1AC69] to-[#B38F54] hover:from-[#B38F54] hover:to-[#C5A46D] text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(197,164,109,0.4)] transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href="tel:7357690111"
              className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C5A46D]" />
              <span>Call: +91 73576 90111</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION D: FEATURED ONGOING PROJECT - MUKUNDRA PRIME */}
      <section className="py-20 lg:py-28 bg-[#F5EEDB] border-b border-[#E8D8B3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Featured Ongoing Development
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Mukundra Prime <span className="text-[#8A6632] font-black">Residences</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              An ongoing residential development by Mukundra Infra Project Private Limited, offering thoughtfully planned 1 BHK, 2 BHK, and 3 BHK residential configurations in Raipura, Kota, Rajasthan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group relative"
            >
              <img
                src="/assets/projects/mukundra-prime/exterior/building-elevation.jpg"
                alt="Mukundra Prime Architectural Building Elevation"
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Project Status</span>
                    <div className="text-xs font-bold text-amber-800">Ongoing Development</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Location</span>
                    <div className="text-xs font-bold text-slate-900">Raipura, Kota</div>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6632] shrink-0 mt-0.5" />
                    <span>Located on 100 Feet Wide Road near Decent School &amp; Allen Career Institute</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6632] shrink-0 mt-0.5" />
                    <span>Adjacent to Rajasthan's largest 200-Bigha Herbal Park</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6632] shrink-0 mt-0.5" />
                    <span>Up to 90% Home Loan pre-approved with leading national banks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8A6632] shrink-0 mt-0.5" />
                    <span>Gated community with 24×7 security, CCTV, and boundary wall</span>
                  </div>
                </div>

                {/* Configurations */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                    Available Configurations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {mukundraPrimeProject.configurations?.map((cfg) => (
                      <span key={cfg} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                        {cfg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3 border-t border-slate-100">
                  <Link
                    to="/projects/mukundra-prime"
                    className="flex-1 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(197,164,109,0.3)] hover:-translate-y-0.5"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      const elem = document.getElementById('enquiry-section');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:text-amber-800 hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION D.2: CRAFTED FOR FAMILY LIVING (FEATURING BOTH NEW LUXURY LIVING EXPERIENCES) */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E8D8B3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-2.5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <span>Thoughtful Living Experience</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Homes Designed for <span className="text-[#8A6632]">Family Happiness</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Expansive living rooms, ambient warm lighting, and private balconies built to celebrate every moment of family life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Gold Marble Luxury Living */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => {
                  const idx = galleryImages.findIndex(g => g.url === '/assets/home/family-living-gold.jpg');
                  if (idx >= 0) setGalleryModal({ isOpen: true, index: idx });
                }}
              >
                <img
                  src="/assets/home/family-living-gold.jpg"
                  alt="Designer Family Living Room with Chandelier & Warm Ambient Finishes"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                  Designer Living Space
                </div>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/95 text-amber-900 text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>
              <div className="p-7 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                    Warm Ambient Interiors &amp; Grand Living
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    Feature marble backdrops, integrated false ceiling lighting, and generous proportions accommodating multi-generational family gatherings.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-amber-800">Mukundra Prime Residences</span>
                  <span>Brochure Verified Layout</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Twilight Panoramic Balcony Living */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => {
                  const idx = galleryImages.findIndex(g => g.url === '/assets/home/family-living-twilight.jpg');
                  if (idx >= 0) setGalleryModal({ isOpen: true, index: idx });
                }}
              >
                <img
                  src="/assets/home/family-living-twilight.jpg"
                  alt="Spacious Living Room Opening to Twilight Balcony View"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                  Panoramic Balcony Living
                </div>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/95 text-amber-900 text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>
              <div className="p-7 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                    Sunlit Rooms with Private Panoramic Balconies
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    Floor-to-ceiling glass sliding doors welcoming fresh breeze, abundant sunlight, and expansive evening views over Kota city skyline.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-amber-800">Mukundra Prime Residences</span>
                  <span>100 Ft. Road Facing</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION E: UNIT PLAN PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#FAF7F0] border-b border-[#E8D8B3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Residential Layouts
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                Mukundra Prime <span className="text-[#8A6632] font-black">Unit Plan</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Thoughtfully planned residential unit blueprints. Click on any plan to inspect high-resolution dimensions.
              </p>
            </div>

            <Link
              to="/unit-plan"
              className="px-6 py-3 rounded-full border border-slate-300 bg-slate-50 hover:bg-amber-500 text-slate-900 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shrink-0 shadow-sm hover:shadow-md"
            >
              <span>View All Unit Plans</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A6632]" />
            </Link>
          </motion.div>

          {/* Unit Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['/assets/unit-plans/unit_plan_1.jpg', '/assets/unit-plans/unit_plan_2.jpg', '/assets/unit-plans/unit_plan_3.jpg'].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  const galleryIdx = galleryImages.findIndex((g) => g.url === src);
                  if (galleryIdx >= 0) openLightboxAtIndex(galleryIdx);
                  else {
                    galleryImages.push({
                      url: src,
                      captionEn: `Unit Plan ${idx + 1}`,
                      captionHi: `Unit Plan ${idx + 1}`,
                      category: 'Unit Plan'
                    });
                    openLightboxAtIndex(galleryImages.length - 1);
                  }
                }}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400/80 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Unit Plan ${idx + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-amber-900 font-bold text-xs shadow-xl border border-slate-200">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Official 8-Page Brochure Callout Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#18140E] via-[#241D14] to-[#18140E] text-white border border-[#C5A46D]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A46D]/20 text-[#C5A46D] border border-[#C5A46D]/40 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-[#C5A46D]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A46D] bg-[#C5A46D]/10 px-2.5 py-0.5 rounded-full border border-[#C5A46D]/30">
                    Official 8-Page Publication
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold hidden sm:inline">• PDF Size: 8.5 MB</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Mukundra Prime Official Brochure &amp; Floor Plans
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Interactive multi-page brochure with 3D furnished cutaways, room dimensions (1 BHK, 2 BHK, 3 BHK), amenities, and Deeppura Group history since 2011.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setBrochureOpen(true)}
                className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-[#DCBF89] border border-[#C5A46D]/40 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#C5A46D]" />
                <span>Interactive Viewer</span>
              </button>

              <a
                href="/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf"
                download="Mukundra-Prime-Official-Brochure.pdf"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-[0_4px_16px_rgba(212,175,55,0.4)] text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-amber-400/30 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download PDF (8.5 MB)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION F: AMENITIES SECTION - 14 AMENITIES */}
      <section className="py-20 lg:py-28 bg-[#F5EEDB] border-b border-[#E8D8B3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Lifestyle &amp; Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              14 Verified <span className="text-[#8A6632] font-black">Resort Amenities</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Every facility confirmed in the official Mukundra Prime brochure to enrich daily family life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesList.slice(0, 6).map((amenity, idx) => (
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
                    const idx = galleryImages.findIndex((g) => g.url === url);
                    if (idx >= 0) openLightboxAtIndex(idx);
                    else {
                      galleryImages.push({ url, captionEn, captionHi: captionEn, category: 'Amenities' });
                      openLightboxAtIndex(galleryImages.length - 1);
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/amenities"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-[0_4px_16px_rgba(212,175,55,0.4)] text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(197,164,109,0.35)] transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore All 14 Amenities</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION G: OUR PROJECTS (DEEPPURA GROUP SHOWCASE) */}
      <OurProjectsShowcase
        onImageClick={(url, caption) => {
          const idx = galleryImages.findIndex((g) => g.url === url);
          if (idx >= 0) {
            openLightboxAtIndex(idx);
          } else {
            galleryImages.push({
              url,
              captionEn: caption,
              captionHi: caption,
              category: 'Our Projects'
            });
            openLightboxAtIndex(galleryImages.length - 1);
          }
        }}
      />

      {/* SECTION H: APPROVED BANKING PARTNERS (AUTHENTIC REAL LOGOS & CONTINUOUS RUNNING MARQUEE) */}
      <section className="py-16 sm:py-20 bg-[#FAF7F0] border-b border-[#E8D8B3] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-xs mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#8A6632]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900">
              Financial Assistance &amp; Loan Approvals
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Approved Banking Partners <span className="text-[#8A6632]">(Up to 90% Loan)</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-2">
            Hassle-free pre-approved home loan disbursements from India's premier nationalized and private banking institutions for Mukundra Prime.
          </p>
        </motion.div>

        {/* Running Continuous Marquee with Authentic Bank Logos */}
        <BankPartnersMarquee />
      </section>

      {/* SECTION I: ENQUIRY CTA SECTION */}
      <section id="enquiry-section" className="py-20 lg:py-28 bg-[#F5EEDB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Booking Info (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
                <span>Official Booking Desk</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Find Your Ideal Space at <span className="text-[#8A6632] font-black">Mukundra Prime</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our team for unit availability, floor plan consultations, and site visits.
              </p>

              {/* Direct Booking Desk Contacts */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xl">
                <div className="text-xs uppercase font-bold tracking-wider text-amber-800 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#8A6632]" />
                  <span>Direct Booking Lines</span>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="tel:8875000404"
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 hover:border-amber-400 hover:bg-amber-50/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase">Director Desk</div>
                      <div className="font-bold text-sm text-slate-900">+91 88750 00404</div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-900 bg-[#F5EEDB] border border-amber-200 px-3 py-1 rounded-full">
                      Prakash Jain (Deeppura)
                    </span>
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="tel:7357690111"
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 hover:border-amber-400 hover:bg-amber-50/50 transition-colors"
                    >
                      <div className="text-[10px] text-slate-500">Booking Desk 1</div>
                      <div className="font-bold text-xs text-slate-900">7357690111</div>
                    </a>

                    <a
                      href="tel:8239999520"
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 hover:border-amber-400 hover:bg-amber-50/50 transition-colors"
                    >
                      <div className="text-[10px] text-slate-500">Booking Desk 2</div>
                      <div className="font-bold text-xs text-slate-900">8239999520</div>
                    </a>
                  </div>
                </div>

                <div className="pt-3 text-[11px] text-slate-600 space-y-1.5 border-t border-slate-200">
                  <div><strong className="text-slate-900">Corporate Office:</strong> G-1-319 A, IPIA Road No. 6, Anantpura, Kota, Rajasthan</div>
                  <div><strong className="text-slate-900">Site Office:</strong> Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan</div>
                  <div><strong className="text-slate-900">Email:</strong> deeppura9@gmail.com</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Validated Enquiry Form (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <EnquiryForm
                defaultProject="Mukundra Prime"
                defaultConfig={enquiryConfig}
              />
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
        images={galleryImages}
        currentIndex={galleryModal.index}
        isOpen={galleryModal.isOpen}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />

    </div>
  );
};
