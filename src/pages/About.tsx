import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Compass, 
  Award 
} from 'lucide-react';
import { MarqueeBanner } from '../components/MarqueeBanner';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      
      {/* Hero Header with High-Resolution Aerial Masterplan Background */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/hero/mukundra-prime-aerial-masterplan.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full inline-block">
              About DEEPPURA GROUP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Building Trust Through <span className="text-amber-400">Thoughtful Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A dedicated corporate real estate developer delivering enduring architectural quality, structured engineering, and thoughtful residential living in Kota, Rajasthan.
            </p>
            <div className="pt-2">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300">
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-amber-400">ABOUT US</span>
              </nav>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner on About Page */}
      <MarqueeBanner variant="light" />

      {/* Main Narrative & Director Profile */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image & Leadership Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <img
                  src="/assets/projects/mukundra-prime/interiors/living-room.jpg"
                  alt="DEEPPURA GROUP Architectural Living Space"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Leadership Spotlight Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Founder &amp; Director</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Animesh Jain
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-amber-500 pl-3">
                  "Our mission is simple: to build with integrity, design with purpose, and create homes that stand as testaments of trust for the families of Kota."
                </p>
                <div className="pt-2">
                  <a
                    href="tel:8875000404"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                    <span>Director Helpline: +91 88750 00404</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Company Story */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block">
                Company Overview
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Crafting Dreams, Creating <span className="text-amber-600">Landmarks in Kota</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  DEEPPURA GROUP is an established real estate developer headquartered in Talwandi, Kota, Rajasthan. Under the leadership of Founder &amp; Director Animesh Jain, the group is committed to developing thoughtfully planned residential spaces that combine modern living comfort, high-grade structural engineering, and verified legal approvals.
                </p>
                <p>
                  Our flagship ongoing development, <strong className="text-slate-900">Mukundra Prime</strong>, developed by Mukundra Infra Project Private Limited, represents the pinnacle of modern multi-storey living in the rapidly flourishing Raipura corridor. Situated directly on a 100-foot wide masterplan road near Decent School and Allen Career Institute, it features complete loanability up to 90%, boundary-wall gated security, an on-premises temple, swimming pool, gymnasium, supermarket, and landscaped green parks.
                </p>
                <p>
                  Our completed portfolio includes distinguished residential landmarks such as Mukundra Heights in R.K. Puram, Ashiyana Homes in Thekra, Mahalaxmi Apartment in Chawani, and the expansive Royal Heritage Farm House in Alaniya, Kota.
                </p>
              </div>

              {/* 3 Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
                    Quality &amp; Safety
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Earthquake-resistant RCC structures engineered with certified materials and ISI standards.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
                    Prime Road Frontage
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Developments on 100 ft. wide arterial roads ensuring immediate transit across Kota.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1">
                    Transparent Conduct
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    Complete UIT and RERA documentation with zero hidden charges or unverified promises.
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:text-amber-700 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm hover:-translate-y-0.5"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Offices & Operations */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-2.5"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Operations &amp; Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Our Kota <span className="text-amber-600">Headquarters</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Corporate Headquarters</span>
              <h3 className="text-xl font-black text-slate-900">Corporate Office</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                G-1-319 A, IPIA Road No. 6, Anantpura, Kota, Rajasthan
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <strong className="text-slate-900">Email:</strong> deeppura9@gmail.com
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Project Site Office</span>
              <h3 className="text-xl font-black text-slate-900">Mukundra Prime Site Office</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan
              </p>
              <div className="pt-2 text-xs text-slate-500">
                <strong className="text-slate-900">Booking Desk:</strong> 7357690111 / 8239999520
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
