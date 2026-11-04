import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Maximize2, 
  Camera 
} from 'lucide-react';
import { completedProjects, Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { GalleryModal, GalleryImage } from '../components/GalleryModal';

interface CompletedProjectDetailCardProps {
  project: Project;
  idx: number;
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

const CompletedProjectDetailCard: React.FC<CompletedProjectDetailCardProps> = ({ project, idx, onOpenLightbox }) => {
  const images = project.images && project.images.length > 0 ? project.images : [{ url: project.heroImage, captionEn: project.nameEn, captionHi: project.nameEn, category: 'exterior' as const }];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentImg = images[selectedImageIndex] || images[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:border-amber-400 transition-all"
    >
      {/* Image Container & Switcher */}
      <div className={`lg:col-span-6 space-y-3 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
        <div 
          onClick={() => onOpenLightbox(currentImg.url, currentImg.captionEn)}
          className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 cursor-pointer group"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg.url}
              src={currentImg.url}
              alt={currentImg.captionEn}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </AnimatePresence>

          {/* Hover Zoom Pill */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Click to Enlarge</span>
          </div>

          {/* Multiple views indicator badge */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Camera className="w-3 h-3 text-amber-600" />
              <span>{images.length} Architectural Views</span>
            </div>
          )}
        </div>

        {/* Thumbnail Selector (When multiple views are available) */}
        {images.length > 1 && (
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
            {images.map((img, i) => (
              <button
                key={img.url}
                onClick={() => setSelectedImageIndex(i)}
                className={`relative rounded-lg overflow-hidden w-20 h-14 shrink-0 border-2 transition-all cursor-pointer ${
                  selectedImageIndex === i 
                    ? 'border-amber-500 shadow-md scale-105' 
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.captionEn} className="w-full h-full object-cover" />
              </button>
            ))}
            <span className="text-[11px] text-slate-500 font-medium pl-1 hidden sm:inline">
              Select angle
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
          <span>Completed &amp; Handed Over</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          {project.nameEn}
        </h3>

        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{project.locationEn}</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {project.descriptionEn}
        </p>

        <div className="pt-2">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-700 block mb-2">
            Key Highlights:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {project.featuresEn.map((f, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(project.googleMapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-800 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>View Location on Google Maps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const CompletedProjects: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; url: string; caption: string }>({
    isOpen: false,
    url: '',
    caption: ''
  });

  // Flat list of images for lightbox navigation
  const allCompletedGallery: GalleryImage[] = completedProjects.flatMap((p) => 
    (p.images && p.images.length > 0 ? p.images : [{ url: p.heroImage, captionEn: p.nameEn, captionHi: p.nameEn, category: 'exterior' as const }]).map((img) => ({
      url: img.url,
      captionEn: `${p.nameEn} — ${img.captionEn}`,
      captionHi: `${p.nameEn} — ${img.captionHi}`,
      category: 'Completed Projects'
    }))
  );

  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (url: string) => {
    const idx = allCompletedGallery.findIndex((g) => g.url === url);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightbox({ isOpen: true, url, caption: '' });
  };

  // Curated Completed Projects Header Carousel Slides
  const headerSlides = [
    {
      title: 'Mahalaxmi Apartment',
      location: 'Chawani, Kota',
      image: '/assets/completed-projects/mahalaxmi-apartment.jpg'
    },
    {
      title: 'Royal Heritage Farmhouse',
      location: 'Ranpur / Bundi Road, Kota',
      image: '/assets/completed-projects/royal-heritage-farmhouse.jpg'
    },
    {
      title: 'Mukundra Heights',
      location: 'Kunhari, Kota',
      image: '/assets/completed-projects/mukundra-heights.jpg'
    },
    {
      title: 'Ashiyana Homes',
      location: 'Baran Road, Kota',
      image: '/assets/completed-projects/ashiyana-homes.jpg'
    }
  ];

  const [currentHeaderSlide, setCurrentHeaderSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeaderSlide((prev) => (prev + 1) % headerSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [headerSlides.length]);

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      
      {/* Header with Auto-Sliding Completed Projects Carousel (Soft Shadow, Bright & Clear) */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-slate-200">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHeaderSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${headerSlides[currentHeaderSlide].image}')`,
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Delivered Track Record</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
              Delivered Kota <span className="text-amber-400">Landmarks</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-3xl font-medium drop-shadow-md">
              A curated portfolio of delivered residential and farmhouse developments across Kota, Rajasthan, demonstrating DEEPPURA GROUP's standard of construction quality, structural integrity, and punctual handover.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-200 drop-shadow">
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-amber-400">COMPLETED PROJECTS</span>
              </nav>

              {/* Active Slide Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Showing: <strong className="text-amber-300">{headerSlides[currentHeaderSlide].title}</strong></span>
              </div>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-2 pt-2">
              {headerSlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrentHeaderSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentHeaderSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Slide to ${slide.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid of 4 Completed Projects */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Delivered Residential &amp; Farmhouse Communities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {completedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Detailed Project Cards with Image Switchers */}
          <div className="mt-20 space-y-12">
            {completedProjects.map((project, idx) => (
              <CompletedProjectDetailCard
                key={project.id}
                project={project}
                idx={idx}
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ isOpen: false, url: '', caption: '' })}
        images={allCompletedGallery}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />

    </div>
  );
};
