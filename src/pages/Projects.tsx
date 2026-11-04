import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Check, 
  BadgeCheck, 
  MessageSquare
} from 'lucide-react';
import { mukundraPrimeProject } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EAF3EC] text-slate-800 pt-20">
      
      {/* Page Header with High-Resolution Towers Background */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/hero/mukundra-prime-daylight-towers.jpg')`,
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
              <span>Current Developments</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ongoing Residential <span className="text-emerald-400">Developments in Kota</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              Explore ongoing residential landmarks by DEEPPURA GROUP, crafted with architectural excellence, wide arterial road connectivity, and community-centric living in Kota, Rajasthan.
            </p>
            <div className="pt-2">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300">
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-emerald-400">PROJECTS</span>
              </nav>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Featured Project Showcase */}
      <section className="py-16 sm:py-24 bg-[#DFECE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1">
                FLAGSHIP ONGOING RESIDENTIAL DEVELOPMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#8C6514]">
                Mukundra Prime – Raipura, Kota
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <BadgeCheck className="w-4 h-4 text-sky-600" />
                <span>RERA &amp; UIT Approved</span>
              </span>
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white border border-[#CCE2D2] overflow-hidden shadow-xl hover:border-emerald-400/80 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-8"
          >
            {/* Visual */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 relative border border-[#CCE2D2] group">
              <img
                src={mukundraPrimeProject.heroImage}
                alt="Mukundra Prime"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-md border border-[#CCE2D2]">
                Ongoing Development
              </span>
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs text-white font-medium flex items-center justify-between">
                <span>Developer: Mukundra Infra Project Pvt. Ltd.</span>
                <span className="text-emerald-400 font-bold">1, 2 &amp; 3 BHK</span>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs uppercase font-bold text-amber-800 tracking-wider block">
                  DEEPPURA GROUP RESIDENTIAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#8C6514] mt-1">
                  Mukundra Prime
                </h3>
                <div className="flex items-start gap-1.5 text-xs text-slate-500 mt-2">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{mukundraPrimeProject.address}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Mukundra Prime is a premium residential community thoughtfully situated on a 100 ft. wide road near Decent School, close to Allen Career Institute and Kota’s 200-Bigha Herbal Park. Featuring modern 1 BHK, 2 BHK (701.5 sq. ft.), and 3 BHK apartment layouts with complete gated society security.
              </p>

              {/* Key Value Points */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#CCE2D2]">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-[#CCE2D2]">
                  <span className="text-[11px] text-slate-500 block">Pricing &amp; Allotment</span>
                  <strong className="text-xs sm:text-sm text-[#8C6514] font-bold">Enquire for Details</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-[#CCE2D2]">
                  <span className="text-[11px] text-slate-500 block">Home Loan</span>
                  <strong className="text-xs sm:text-sm text-amber-800 font-bold">Up to 90% Loanable</strong>
                </div>
              </div>

              {/* Confirmed Amenities Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#CCE2D2]">
                <strong className="text-xs text-[#8C6514] uppercase font-bold block">
                  Project Highlights:
                </strong>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600" />
                    <span>100 Feet Wide Road</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600" />
                    <span>Temple &amp; Splash Pool</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600" />
                    <span>Kids Play Park &amp; Gym</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600" />
                    <span>24×7 Security &amp; CCTV</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects/mukundra-prime"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_4px_14px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
                >
                  <span>Explore Full Project</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>

                <Link
                  to="/unit-plan"
                  className="px-6 py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:text-amber-800 font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <span>View Floor Plans</span>
                </Link>

                <a
                  href="https://wa.me/917357690111?text=Hello%20DEEPPURA%20GROUP,%20I%20would%20like%20more%20details%20about%20Mukundra%20Prime%20residences."
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-full text-slate-600 hover:text-amber-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
