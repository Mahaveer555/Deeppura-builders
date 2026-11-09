import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, CheckCircle, ShieldCheck, Phone, 
  ChevronRight, Home, Building2, Eye, X, ChevronLeft, 
  Sparkles 
} from 'lucide-react';
import { allProjects, Project } from '../data/projects';
import { EnquiryForm } from '../components/EnquiryForm';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  // If user navigates to /projects/mukundra-prime, redirect to dedicated flagship page
  if (slug === 'mukundra-prime') {
    return <Navigate to="/projects/mukundra-prime" replace />;
  }

  const project: Project | undefined = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    'name': `${project.nameEn} Kota`,
    'description': project.descriptionEn,
    'url': `https://deppura.vercel.app/projects/${project.slug}`,
    'image': `https://deppura.vercel.app${project.heroImage}`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': project.address,
      'addressLocality': 'Kota',
      'addressRegion': 'Rajasthan',
      'addressCountry': 'IN'
    },
    'containedInPlace': {
      '@type': 'Place',
      'name': 'Kota, Rajasthan'
    }
  };

  const otherProjects = allProjects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800">
      
      {/* Dynamic Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(projectSchema)}
      </script>

      {/* Breadcrumbs */}
      <div className="bg-[#F5EEDB] border-b border-[#E8D8B3] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-600 flex-wrap">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#8A6632] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/projects" className="hover:text-[#8A6632] transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#8A6632]">{project.nameEn}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#18140E] via-[#241D14] to-[#18140E] text-white overflow-hidden border-b border-[#C5A46D]/30">
        <div className="absolute inset-0 opacity-15">
          <img
            src={project.heroImage}
            alt={`${project.nameEn} Kota Rajasthan by DEEPPURA GROUP`}
            className="w-full h-full object-cover filter blur-xs scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18140E] via-[#18140E]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Status & Developer Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{project.status === 'completed' ? 'Delivered & Occupied Landmark' : 'Ongoing Flagship'}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>By DEEPPURA GROUP</span>
              </span>
            </div>

            {/* Single H1 Title for the Page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              {project.nameEn}
              <span className="text-[#C5A46D] block text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1">
                {project.taglineEn}
              </span>
            </h1>

            {/* Address */}
            <div className="flex items-center gap-2 text-slate-300 text-sm sm:text-base font-medium mb-6">
              <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span>{project.address}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:7357690111"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A46D] to-[#8A6632] text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Enquire: 73576 90111</span>
              </a>

              <Link
                to="/completed-projects"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                All Delivered Landmarks
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Project Overview, Features, Gallery (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Description Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D8B3] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8A6632] mb-3">
                <Building2 className="w-4 h-4" />
                <span>Project Overview &amp; Location Significance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                About {project.nameEn}, Kota
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                {project.descriptionEn}
              </p>

              {/* Verified Specifications / Features List */}
              <div className="pt-6 border-t border-[#F5EEDB]">
                <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8A6632]" />
                  <span>Key Architectural &amp; Infrastructure Highlights</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.featuresEn.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F0] border border-[#E8D8B3]/60 text-xs text-slate-800"
                    >
                      <CheckCircle className="w-4 h-4 text-[#8A6632] shrink-0 mt-0.5" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D8B3] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#8A6632] mb-1">
                    Authentic Visual Record
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Real Photo Gallery
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {project.images.length} Verified Photos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className="group relative h-56 rounded-2xl overflow-hidden bg-slate-900 border border-[#E8D8B3] cursor-pointer shadow-xs hover:shadow-lg transition-all"
                  >
                    <img
                      src={img.url}
                      alt={`${img.captionEn} - ${project.nameEn} Kota`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                      <p className="text-xs font-medium leading-snug">{img.captionEn}</p>
                      <div className="inline-flex items-center gap-1 text-[11px] text-[#C5A46D] font-bold mt-1">
                        <Eye className="w-3 h-3" />
                        <span>Click to view larger</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Verified Location Map */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D8B3] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8A6632] mb-1">
                <MapPin className="w-4 h-4" />
                <span>Geographical Location in Kota</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Location &amp; Access Map
              </h2>
              <p className="text-xs text-slate-600 mb-4">
                Exact Address: <strong>{project.address}</strong>
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#E8D8B3] shadow-inner bg-slate-100">
                <iframe
                  title={`${project.nameEn} Location Map Kota`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(project.googleMapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-[320px] border-0"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Enquiry Card */}
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 border border-[#E8D8B3] shadow-lg">
                <div className="text-xs font-black uppercase tracking-wider text-[#8A6632] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#8A6632]" />
                  <span>Direct Builder Desk</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">
                  Enquire About {project.nameEn}
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Speak with DEEPPURA GROUP representatives regarding delivered units, historical appreciation, or our ongoing developments in Kota.
                </p>

                <EnquiryForm
                  defaultProject={project.nameEn}
                  title="Schedule a Discussion"
                  subtitle="Get detailed specifications and documentation directly from the developer."
                />
              </div>

              {/* Developer Office Box */}
              <div className="rounded-2xl bg-[#F5EEDB] border border-[#E8D8B3] p-5 text-xs text-slate-700 space-y-2.5">
                <div className="font-black text-slate-900 uppercase text-[11px] tracking-wider text-[#8A6632]">
                  Corporate Office:
                </div>
                <p className="leading-relaxed">
                  G-1-319 A, IPIA Road No. 6, Anantpura, Kota, Rajasthan
                </p>
                <div className="pt-2 border-t border-[#E8D8B3] space-y-1">
                  <div><strong>Booking Desk:</strong> +91 73576 90111 / +91 82399 99520</div>
                  <div><strong>Director Desk:</strong> +91 88750 00404 (Animesh Jain)</div>
                  <div><strong>Email:</strong> deeppura9@gmail.com</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Other Projects by DEEPPURA GROUP Strip */}
        <div className="mt-16 pt-12 border-t border-[#E8D8B3]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-slate-900">
              Explore More Landmarks by DEEPPURA GROUP
            </h3>
            <Link
              to="/projects"
              className="text-xs font-bold text-[#8A6632] hover:underline flex items-center gap-1"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((op) => (
              <Link
                key={op.id}
                to={op.slug === 'mukundra-prime' ? '/projects/mukundra-prime' : `/projects/${op.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-[#E8D8B3] hover:border-[#C5A46D] shadow-sm hover:shadow-lg transition-all p-4"
              >
                <div className="h-40 rounded-xl overflow-hidden bg-slate-900 mb-3">
                  <img
                    src={op.heroImage}
                    alt={`${op.nameEn} Kota`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#8A6632] uppercase tracking-wider block">
                  {op.status === 'completed' ? 'Delivered' : 'Ongoing Flagship'}
                </span>
                <h4 className="text-base font-black text-slate-900 group-hover:text-[#8A6632] transition-colors leading-tight mt-1">
                  {op.nameEn}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {op.locationEn}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image */}
            <button
              onClick={() => setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : project.images.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image & Caption */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={project.images[activeImageIndex].url}
                alt={project.images[activeImageIndex].captionEn}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-center text-sm text-slate-300 mt-4 font-medium px-4">
                {project.images[activeImageIndex].captionEn}
              </p>
            </div>

            {/* Next Image */}
            <button
              onClick={() => setActiveImageIndex((prev) => (prev! < project.images.length - 1 ? prev! + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-10 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
