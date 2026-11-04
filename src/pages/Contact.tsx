import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  UserCheck,
  PhoneCall
} from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';

export const Contact: React.FC = () => {
  const corpOfficeAddress = "G-1-319 A, IPIA Road No. 6, Anantpura, Kota, Rajasthan";
  const siteOfficeAddress = "Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan";

  return (
    <div className="min-h-screen bg-[#EAF3EC] text-slate-800 pt-20">
      
      {/* Header with High-Resolution Aerial Masterplan Background */}
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Connect with <span className="text-emerald-400">DEEPPURA GROUP</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              Connect directly with our corporate headquarters in Talwandi, our project site sales office in Raipura, or speak directly with Director Prakash Jain (Deeppura).
            </p>
            <div className="pt-2">
              <nav className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-300">
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  HOME
                </Link>
                <span>/</span>
                <span className="text-emerald-400">CONTACT</span>
              </nav>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Offices & Contact Grid */}
      <section className="py-16 sm:py-24 bg-[#DFECE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Booking Info (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>Official Booking Desk</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8C6514] leading-tight">
                Find Your Ideal Space at <span className="text-sky-600">Mukundra Prime</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our team for unit availability, floor plan consultations, and site visits.
              </p>

              {/* Direct Booking Desk Contacts */}
              <div className="p-6 rounded-2xl bg-white border border-[#CCE2D2] space-y-4 shadow-xl">
                <div className="text-xs uppercase font-bold tracking-wider text-amber-800 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-sky-600" />
                  <span>Direct Booking Lines</span>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="tel:8875000404"
                    className="p-4 rounded-xl bg-slate-50 border border-[#CCE2D2] text-[#8C6514] hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase">Director Desk</div>
                      <div className="font-bold text-sm text-[#8C6514]">+91 88750 00404</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                      Prakash Jain (Deeppura)
                    </span>
                  </a>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="tel:7357690111"
                      className="p-3.5 rounded-xl bg-slate-50 border border-[#CCE2D2] text-[#8C6514] hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors"
                    >
                      <div className="text-[10px] text-slate-500">Booking Desk 1</div>
                      <div className="font-bold text-xs text-[#8C6514]">7357690111</div>
                    </a>

                    <a
                      href="tel:8239999520"
                      className="p-3.5 rounded-xl bg-slate-50 border border-[#CCE2D2] text-[#8C6514] hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors"
                    >
                      <div className="text-[10px] text-slate-500">Booking Desk 2</div>
                      <div className="font-bold text-xs text-[#8C6514]">8239999520</div>
                    </a>
                  </div>
                </div>

                <div className="pt-3 text-[11px] text-slate-600 space-y-1.5 border-t border-[#CCE2D2]">
                  <div><strong className="text-[#8C6514]">Corporate Office:</strong> {corpOfficeAddress}</div>
                  <div><strong className="text-[#8C6514]">Site Office:</strong> {siteOfficeAddress}</div>
                  <div><strong className="text-[#8C6514]">Email:</strong> deeppura9@gmail.com</div>
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
                title="Find Your Ideal Space at Mukundra Prime"
                subtitle="Connect with our team for unit availability, verified floor plans, and site visits."
              />
            </motion.div>

          </div>

          {/* Interactive Google Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-12 border-t border-[#CCE2D2]"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                PROJECT LOCATION MAP
              </span>
              <h2 className="text-2xl font-black text-[#8C6514]">
                Visit Mukundra Prime Site Office
              </h2>
              <p className="text-xs text-slate-600">
                Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#CCE2D2] shadow-xl bg-white p-2">
              <iframe
                title="DEEPPURA GROUP Mukundra Prime Location Map"
                src="https://maps.google.com/maps?q=Deoli%20Arab%20Road,%20Near%20Decent%20School,%20Raipura,%20Kota,%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[400px] rounded-xl border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
