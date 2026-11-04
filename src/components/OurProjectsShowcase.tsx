import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ShowcaseProject {
  id: string;
  name: string;
  location: string;
  status: 'ongoing' | 'completed';
  statusLabel: string;
  tagline: string;
  image: string;
  link: string;
  configurations?: string[];
}

export const showcaseProjectsData: ShowcaseProject[] = [
  {
    id: 'mukundra-prime',
    name: 'Mukundra Prime',
    location: 'Deoli Arab Road, Raipura, Kota',
    status: 'ongoing',
    statusLabel: 'Ongoing Development',
    tagline: '1, 2 & 3 BHK Thoughtfully Planned Homes on 100 Ft. Road',
    image: '/assets/hero/mukundra-prime-daylight-towers.jpg',
    link: '/projects/mukundra-prime',
    configurations: ['1 BHK', '2 BHK (701.5 sq. ft.)', '3 BHK Deluxe (960 sq. ft.)'],
  },
  {
    id: 'mukundra-heights',
    name: 'Mukundra Heights',
    location: 'Sector B, R.K. Puram, Kota',
    status: 'completed',
    statusLabel: 'Delivered Landmark',
    tagline: 'Multi-Storey Residential Landmark in Prime R.K. Puram',
    image: '/assets/completed-projects/mukundra-heights.jpg',
    link: '/completed-projects',
    configurations: ['Delivered Multi-Storey', 'Stilt Parking', 'Lift Facility'],
  },
  {
    id: 'ashiyana-homes',
    name: 'Ashiyana Homes',
    location: 'Behind Career Point Gurukul, Thekra, Kota',
    status: 'completed',
    statusLabel: 'Delivered Landmark',
    tagline: 'Serene Gated Residential Enclave with Wide Internal Roads',
    image: '/assets/completed-projects/ashiyana-homes.jpg',
    link: '/completed-projects',
    configurations: ['Gated Township', 'Near Major Hubs', 'Delivered Project'],
  },
  {
    id: 'mahalaxmi-apartment',
    name: 'Mahalaxmi Apartment',
    location: 'Chawani, Kota',
    status: 'completed',
    statusLabel: 'Delivered Landmark',
    tagline: 'Heart-of-City Multi-Storey Residential Living in Central Chawani',
    image: '/assets/completed-projects/mahalaxmi-apartment.jpg',
    link: '/completed-projects',
    configurations: ['City Center', 'Walkable Markets', 'Completed Landmark'],
  },
  {
    id: 'royal-heritage-farmhouse',
    name: 'Royal Heritage Farm House',
    location: 'Alaniya, Kota',
    status: 'completed',
    statusLabel: 'Delivered Landmark',
    tagline: 'Magnificent Luxury Farmhouse Retreat with Sprawling Greens',
    image: '/assets/completed-projects/royal-heritage-farmhouse.jpg',
    link: '/completed-projects',
    configurations: ['Luxury Farmhouse', 'Swimming Pool', 'Manicured Acreage'],
  },
];

interface OurProjectsShowcaseProps {
  onImageClick?: (imageUrl: string, caption: string) => void;
}

export const OurProjectsShowcase: React.FC<OurProjectsShowcaseProps> = ({ onImageClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const totalProjects = showcaseProjectsData.length;

  // Window of 3 cards on desktop
  const visibleCount = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Get visible slice with wrap-around
  const getVisibleProjects = () => {
    const list: ShowcaseProject[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (startIndex + i) % totalProjects;
      list.push(showcaseProjectsData[idx]);
    }
    return list;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle (Clean Light Theme) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              DEEPPURA GROUP Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            OUR <span className="text-amber-600">PROJECTS</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Trust &bull; Quality &bull; Innovation &bull; Customer First &mdash; These are the pillars that turn our projects into landmarks that re-define the way people live and work in Kota.
          </p>
        </motion.div>

        {/* Carousel Container with Side Controls */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Projects"
            className="absolute -left-3 sm:-left-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-amber-400 text-slate-800 hover:text-slate-950 border border-slate-200 hover:border-amber-400 shadow-xl flex items-center justify-center transition-all cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Projects"
            className="absolute -right-3 sm:-right-5 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-amber-400 text-slate-800 hover:text-slate-950 border border-slate-200 hover:border-amber-400 shadow-xl flex items-center justify-center transition-all cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400/70 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Building Exterior Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                      onClick={() => onImageClick?.(project.image, `${project.name} - ${project.location}`)}
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 backdrop-blur-md border ${
                        project.status === 'ongoing'
                          ? 'bg-white/95 text-amber-800 border-amber-300'
                          : 'bg-white/95 text-amber-800 border-amber-300'
                      }`}>
                        {project.status === 'ongoing' ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            {project.statusLabel}
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                            {project.statusLabel}
                          </>
                        )}
                      </span>
                    </div>

                    {/* Official RERA & UIT Badges for Mukundra Prime */}
                    {project.id === 'mukundra-prime' && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200 shadow-md">
                        <img 
                          src="/assets/badges/rera-approved.png" 
                          alt="RERA Approved" 
                          className="w-4 h-4 object-contain" 
                          title="RERA Approved: RAJ/P/2025/3532" 
                        />
                        <img 
                          src="/assets/badges/uit-approved.png" 
                          alt="UIT Approved" 
                          className="w-4 h-4 object-contain" 
                          title="UIT Kota Approved" 
                        />
                        <span className="text-[10px] font-black text-slate-800 tracking-wider">VERIFIED</span>
                      </div>
                    )}

                    {/* Subtle Overlay Action on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 pointer-events-none">
                      <span className="text-slate-900 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 bg-white/95 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-slate-200 shadow-md">
                        <span>Click to Enlarge / Details</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                      </span>
                    </div>
                  </div>

                  {/* Clean Attached White Plate Title Bar */}
                  <div className="p-6 text-center bg-white border-t border-slate-100 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-black text-xl sm:text-2xl text-slate-900 group-hover:text-amber-700 transition-colors tracking-tight">
                        {project.name}
                      </h3>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100">
                      <Link
                        to={project.link}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_2px_15px_rgba(212,175,55,0.35)] transition-all hover:-translate-y-0.5"
                      >
                        <span>{project.status === 'ongoing' ? 'Explore Mukundra Prime' : 'View Completed Details'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Centered Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {showcaseProjectsData.map((_, dotIdx) => {
              const isActive = dotIdx === startIndex;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setStartIndex(dotIdx)}
                  aria-label={`Go to project slide ${dotIdx + 1}`}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(212,175,55,0.7)]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

        </div>

        {/* View All Projects Action Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/completed-projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
          >
            <span>Explore All DEEPPURA GROUP Completed Landmarks</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
