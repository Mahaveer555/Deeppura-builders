import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { amenitiesList } from '../data/amenities';
import { AmenityCard } from '../components/AmenityCard';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';
import { BrochureModal } from '../components/BrochureModal';

export const Amenities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lifestyle' | 'convenience' | 'safety' | 'infrastructure'>('all');
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const filteredAmenities = activeFilter === 'all'
    ? amenitiesList
    : amenitiesList.filter((a) => a.category === activeFilter);

  // Gallery of amenities that have images
  const amenityImages: GalleryImage[] = amenitiesList
    .filter((a) => !!a.image)
    .map((a) => ({
      url: a.image!,
      captionEn: a.nameEn,
      captionHi: a.nameEn,
      category: 'Amenities',
    }));

  const openLightboxForUrl = (url: string) => {
    const idx = amenityImages.findIndex((img) => img.url === url);
    if (idx >= 0) {
      setGalleryModal({ isOpen: true, index: idx });
    }
  };

  // Specifications
  const specifications = [
    {
      num: '01',
      title: 'Bathrooms & Sanitaryware',
      specs: [
        { label: 'Sanitaryware', value: 'Modern branded sanitary fixtures blending aesthetics and long-term durability.' },
        { label: 'CP Fittings', value: 'Chrome-plated brass fittings (reputed national brand) throughout.' },
        { label: 'Wall & Floor Tiles', value: 'Designer anti-skid ceramic floor tiles with glazed ceramic wall dado.' },
        { label: 'Provisions', value: 'Pre-installed electrical and plumbing provisions for instant geyser and exhaust fan.' }
      ]
    },
    {
      num: '02',
      title: 'Kitchen & Utility Deck',
      specs: [
        { label: 'Counter Platform', value: 'Premium polished black granite platform with bevelled edge finishing.' },
        { label: 'Sink', value: 'Heavy-duty stainless steel single bowl sink with swivel CP faucet.' },
        { label: 'Dado Ceramic Tiles', value: 'Glazed designer ceramic tiles up to 2 ft. height above kitchen platform.' },
        { label: 'Utility Space', value: 'Dedicated separate wash balcony with water inlet/outlet for washing machine.' }
      ]
    },
    {
      num: '03',
      title: 'Bed, Living & Dining Room',
      specs: [
        { label: 'Flooring', value: 'High-gloss vitrified tiles with matching skirting throughout.' },
        { label: 'Ceilings & Walls', value: 'Smooth Birla white putty finish with premium plastic emulsion paint.' },
        { label: 'Cooling Provisions', value: 'Split AC electrical conduit and copper piping provisions in living and all bedrooms.' },
        { label: 'Ventilation', value: 'Generous room layouts designed for maximum cross-breeze and abundant natural daylight.' }
      ]
    },
    {
      num: '04',
      title: 'Balconies & Terraces',
      specs: [
        { label: 'Flooring', value: 'Anti-skid weather-resistant outdoor ceramic tiles designed for Kota conditions.' },
        { label: 'Railing & Parapet', value: 'Modern protective stainless steel railing designed for unobstructed panoramic vistas.' },
        { label: 'Balcony Count', value: 'Dual sit-out balconies in 2 BHK and 3 BHK residences for true open-air living.' },
        { label: 'Outlook', value: 'Facing landscaped green parks and adjacent to Rajasthan’s 200-Bigha Herbal Park.' }
      ]
    },
    {
      num: '05',
      title: 'Doors, Windows & Electrical',
      specs: [
        { label: 'Wiring & Safety', value: 'Concealed ISI-certified flame-retardant copper wiring with independent MCB circuits.' },
        { label: 'Switches', value: 'Premium modular switches and sockets with child-safety shutters.' },
        { label: 'Windows', value: 'Powder-coated aluminum / UPVC sliding windows with clear glass and cooler ledge.' },
        { label: 'Doors', value: 'Solid laminated main entrance door with mortise locks and high-grade internal flush doors.' }
      ]
    },
    {
      num: '06',
      title: 'Township Infrastructure & Safety',
      specs: [
        { label: 'Road Infrastructure', value: 'Direct connection via a wide 100 ft. masterplan road with streetlight poles.' },
        { label: 'Water Security', value: 'Dual underground and overhead water reservoirs with automated pressure pumps.' },
        { label: 'Vertical Transit', value: 'High-speed automatic lifts with automatic rescue device (ARD) operating 24×7.' },
        { label: 'Security & CCTV', value: 'Perimeter boundary wall, guarded entrance gate, and 24×7 CCTV camera monitoring.' }
      ]
    }
  ];

  // Curated Resort Amenities Header Carousel Slides
  const amenityHeaderSlides = [
    {
      title: 'Swimming Pool & Splash Deck',
      category: 'Recreation & Leisure',
      image: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg'
    },
    {
      title: 'On-Site Society Temple',
      category: 'Daily Serenity & Prayers',
      image: '/assets/projects/mukundra-prime/amenities/temple.jpg'
    },
    {
      title: 'Kids Outdoor Play Park',
      category: 'Safe Family Spaces',
      image: '/assets/projects/mukundra-prime/amenities/kids-park.jpg'
    },
    {
      title: 'Open Calisthenics Gym',
      category: 'Health & Wellness',
      image: '/assets/projects/mukundra-prime/amenities/open-gym.jpg'
    },
    {
      title: 'Landscaped Green Parks',
      category: 'Lush Fresh Air & Walkways',
      image: '/assets/projects/mukundra-prime/amenities/green-park.jpg'
    },
    {
      title: 'Community Celebration Hall',
      category: 'Events & Social Gatherings',
      image: '/assets/projects/mukundra-prime/amenities/community-hall.jpg'
    }
  ];

  const [currentHeaderSlide, setCurrentHeaderSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeaderSlide((prev) => (prev + 1) % amenityHeaderSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [amenityHeaderSlides.length]);

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-slate-800 pt-20">
      
      {/* Header with Auto-Sliding Amenities Carousel (Soft Shadow, Bright & Clear) */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#E2DCBE]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHeaderSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${amenityHeaderSlides[currentHeaderSlide].image}')`,
            }}
          />
        </AnimatePresence>
        
        {/* Soft, Light Gradient Shadow (Reduced Darkness for High Image Visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 shadow-md">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Lifestyle &amp; Facilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
              14 Verified <span className="text-emerald-400">Resort Amenities</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-3xl font-medium drop-shadow-md">
              Experience thoughtfully designed community living at Mukundra Prime, featuring every confirmed amenity from our brochure to enrich family life in Raipura, Kota.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-200 drop-shadow">
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-emerald-400">AMENITIES</span>
              </nav>

              {/* Active Slide Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Showing: <strong className="text-emerald-300">{amenityHeaderSlides[currentHeaderSlide].title}</strong></span>
              </div>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-2 pt-2">
              {amenityHeaderSlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrentHeaderSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentHeaderSlide === idx ? 'w-8 bg-emerald-400' : 'w-2.5 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Slide to ${slide.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white/95 backdrop-blur-md border-b border-[#E2DCBE] sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { id: 'all', label: 'All 14 Amenities' },
              { id: 'lifestyle', label: 'Lifestyle & Wellness' },
              { id: 'convenience', label: 'Daily Convenience' },
              { id: 'infrastructure', label: 'Infrastructure & Roads' },
              { id: 'safety', label: 'Safety & Security' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-emerald-400 text-slate-950 font-black shadow-md'
                    : 'bg-slate-100 border border-[#E2DCBE] text-slate-700 hover:text-[#8A6632] hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 sm:py-24 bg-[#EFECE4] border-b border-[#E2DCBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAmenities.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              >
                <AmenityCard
                  amenity={amenity}
                  onImageClick={(url) => openLightboxForUrl(url)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2DCBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-950 bg-amber-100/90 border border-amber-300 px-3.5 py-1 rounded-full">
              Construction Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632]">
              Architectural <span className="text-sky-600">Specifications</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Detailed construction materials and fitment specifications engineered for lasting durability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((item, idx) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-[#E2DCBE] shadow-sm space-y-4 hover:border-emerald-400 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DCBE]">
                  <span className="text-3xl font-black text-sky-600">
                    {item.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A6632]">
                    {item.title}
                  </span>
                </div>

                <div className="space-y-3">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <strong className="block text-[#8A6632] mb-0.5 font-bold">{spec.label}</strong>
                      <p className="text-slate-600 leading-relaxed">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modals */}
      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />

      <GalleryModal
        images={amenityImages}
        currentIndex={galleryModal.index}
        isOpen={galleryModal.isOpen}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />

    </div>
  );
};
