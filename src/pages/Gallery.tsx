import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, Building2 } from 'lucide-react';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [galleryModal, setGalleryModal] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const allImages: GalleryImage[] = [
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
      captionEn: 'Mukundra Prime Real On-Site High-Rise Tower Construction Progress',
      captionHi: 'Mukundra Prime Real On-Site High-Rise Tower Construction Progress',
      category: 'Real Site Progress'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-2bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 2 BHK 3D Furnished Isometric Floor Plan',
      captionHi: 'Mukundra Prime 2 BHK 3D Furnished Isometric Floor Plan',
      category: 'Floor Plans'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 3 BHK 3D Furnished Isometric Floor Plan',
      captionHi: 'Mukundra Prime 3 BHK 3D Furnished Isometric Floor Plan',
      category: 'Floor Plans'
    },
    {
      url: '/assets/hero/mukundra-prime-daylight-towers.jpg',
      captionEn: 'Mukundra Prime 100 Ft. Road Architectural Elevation (Daylight View)',
      captionHi: 'Mukundra Prime 100 Ft. Road Architectural Elevation (Daylight View)',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg',
      captionEn: 'Mukundra Prime Swimming Pool, Temple & Community Pavilion',
      captionHi: 'Mukundra Prime Swimming Pool, Temple & Community Pavilion',
      category: 'Amenities'
    },
    {
      url: '/assets/hero/hero-building.jpg',
      captionEn: 'Mukundra Prime Main Architectural Elevation - Raipura, Kota',
      captionHi: 'Mukundra Prime Main Architectural Elevation - Raipura, Kota',
      category: 'Exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/interiors/living-room.jpg',
      captionEn: 'Mukundra Prime Contemporary Living & Dining Room',
      captionHi: 'Mukundra Prime Contemporary Living & Dining Room',
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
      url: '/assets/projects/mukundra-prime/amenities/community-hall.jpg',
      captionEn: 'Spacious Society Celebration & Community Hall',
      captionHi: 'Spacious Society Celebration & Community Hall',
      category: 'Amenities'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/green-park.jpg',
      captionEn: 'Lush Landscaped Green Recreational Park',
      captionHi: 'Lush Landscaped Green Recreational Park',
      category: 'Amenities'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/supermarket.jpg',
      captionEn: 'On-Premises Modern Supermarket & Daily Provisions Store',
      captionHi: 'On-Premises Modern Supermarket & Daily Provisions Store',
      category: 'Amenities'
    },
    {
      url: '/assets/unit-plans/unit_plan_1.jpg',
      captionEn: '1 BHK Type - A Architectural Unit Plan Layout',
      captionHi: '1 BHK Type - A Architectural Unit Plan Layout',
      category: 'Floor Plans'
    },
    {
      url: '/assets/unit-plans/unit_plan_3.jpg',
      captionEn: '2 BHK Type - A Architectural Unit Plan Layout (701.5 sq. ft.)',
      captionHi: '2 BHK Type - A Architectural Unit Plan Layout (701.5 sq. ft.)',
      category: 'Floor Plans'
    },
    {
      url: '/assets/unit-plans/unit_plan_5.jpg',
      captionEn: '3 BHK Type - A Architectural Unit Plan Layout',
      captionHi: '3 BHK Type - A Architectural Unit Plan Layout',
      category: 'Floor Plans'
    },
    {
      url: '/assets/completed-projects/mukundra-heights.jpg',
      captionEn: 'Mukundra Heights (R.K. Puram, Kota) - Delivered Landmark',
      captionHi: 'Mukundra Heights (R.K. Puram, Kota) - Delivered Landmark',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/ashiyana-homes.jpg',
      captionEn: 'Ashiyana Homes (Thekra, Kota) - Delivered Landmark',
      captionHi: 'Ashiyana Homes (Thekra, Kota) - Delivered Landmark',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/mahalaxmi-apartment.jpg',
      captionEn: 'Mahalaxmi Apartment (Chawani, Kota) - Delivered Landmark',
      captionHi: 'Mahalaxmi Apartment (Chawani, Kota) - Delivered Landmark',
      category: 'Completed Projects'
    },
    {
      url: '/assets/completed-projects/royal-heritage-farmhouse.jpg',
      captionEn: 'Royal Heritage Farm House (Alaniya, Kota) - Delivered Landmark',
      captionHi: 'Royal Heritage Farm House (Alaniya, Kota) - Delivered Landmark',
      category: 'Completed Projects'
    }
  ];

  const categories = ['All', 'Exterior', 'Real Site Progress', 'Interior', 'Amenities', 'Floor Plans', 'Completed Projects'];

  const filteredImages = activeCategory === 'All' 
    ? allImages 
    : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setGalleryModal({ isOpen: true, index });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      
      {/* Header with High-Resolution Architectural Elevation Background */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/hero/hero-building.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Visual Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              DEEPPURA GROUP <span className="text-emerald-400">Visual Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              Immerse yourself in high-resolution exterior elevations, furnished interiors, verified floor plan blueprints, and delivered residential landmarks across Kota, Rajasthan.
            </p>
            <div className="pt-2">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300">
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-emerald-400">GALLERY</span>
              </nav>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-400 text-slate-950 font-black shadow-md'
                    : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(allImages.findIndex(i => i.url === img.url))}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-400 cursor-pointer shadow-md hover:shadow-2xl transition-all"
              >
                <img
                  src={img.url}
                  alt={img.captionEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-between">
                  <div className="self-end">
                    <span className="p-2.5 rounded-full bg-white/90 text-emerald-800 inline-block shadow-md border border-slate-200">
                      <Maximize2 className="w-4 h-4 text-emerald-700" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      {img.category}
                    </span>
                    <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                      {img.captionEn}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-emerald-800 shadow-sm group-hover:opacity-0 transition-opacity">
                  {img.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryModal
        images={allImages}
        currentIndex={galleryModal.index}
        isOpen={galleryModal.isOpen}
        onClose={() => setGalleryModal({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setGalleryModal({ isOpen: true, index: newIdx })}
      />

    </div>
  );
};
