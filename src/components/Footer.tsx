import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18140E] text-slate-300 border-t border-[#C5A46D]/30 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        
        {/* 4-Column Clean Enterprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-[#382C1D]">
          
          {/* Column 1: Brand Info & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="max-w-[240px]">
              <Logo variant="dark" size="md" layout="horizontal" />
            </div>
            
            <p className="text-sm leading-relaxed text-slate-300/90 pr-4">
              Trusted corporate real estate developer in Kota, Rajasthan. Crafting thoughtfully planned residential spaces, landmark developments, and modern lifestyle conveniences.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] shadow-sm flex items-center justify-center text-slate-200 hover:text-[#C5A46D] hover:border-[#C5A46D] transition-all cursor-pointer hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/deeppura_group/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] shadow-sm flex items-center justify-center text-slate-200 hover:text-[#C5A46D] hover:border-[#C5A46D] transition-all cursor-pointer hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] shadow-sm flex items-center justify-center text-slate-200 hover:text-[#C5A46D] hover:border-[#C5A46D] transition-all cursor-pointer hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://wa.me/917357690111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] shadow-sm flex items-center justify-center text-slate-200 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all cursor-pointer hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg font-black text-[#C5A46D] mb-5 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/projects', label: 'Projects' },
                { to: '/completed-projects', label: 'Completed Projects' },
                { to: '/unit-plan', label: 'Unit Plan' },
                { to: '/amenities', label: 'Amenities' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-[#C5A46D] transition-colors group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-lg font-black text-[#C5A46D] mb-5 tracking-tight">
              Our Projects
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/projects/mukundra-prime" className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#C5A46D] transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-[#C5A46D] shrink-0 group-hover:scale-125 transition-transform shadow-xs" />
                  <span className="text-white font-medium">Mukundra Prime (Ongoing)</span>
                </Link>
              </li>
              <li>
                <Link to="/completed-projects" className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#C5A46D] transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>Mukundra Heights (R.K. Puram)</span>
                </Link>
              </li>
              <li>
                <Link to="/completed-projects" className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#C5A46D] transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>Ashiyana Homes (Thekra)</span>
                </Link>
              </li>
              <li>
                <Link to="/completed-projects" className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#C5A46D] transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>Mahalaxmi Apartment (Chawani)</span>
                </Link>
              </li>
              <li>
                <Link to="/completed-projects" className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#C5A46D] transition-colors group">
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 group-hover:scale-125 transition-transform" />
                  <span>Royal Heritage Farm House (Alaniya)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-lg font-black text-[#C5A46D] mb-5 tracking-tight">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] flex items-center justify-center shrink-0 text-[#C5A46D] shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Call Us</div>
                  <a href="tel:7357690111" className="text-white hover:text-[#C5A46D] font-bold transition-colors block">
                    +91 73576 90111
                  </a>
                  <a href="tel:8239999520" className="text-slate-300 hover:text-[#C5A46D] text-xs transition-colors block">
                    +91 82399 99520
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] flex items-center justify-center shrink-0 text-[#C5A46D] shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Address</div>
                  <a href="mailto:deeppura9@gmail.com" className="text-white hover:text-[#C5A46D] transition-colors break-all font-semibold">
                    deeppura9@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#241D14] border border-[#453623] flex items-center justify-center shrink-0 text-[#C5A46D] shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Corporate Office</div>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    G-1-319 A, IPIA Road No. 6, Anantpura, Kota (Rajasthan)
                  </p>
                  <div className="text-xs text-slate-400 font-medium mt-2">Site Address</div>
                  <p className="text-[#C5A46D] font-semibold text-xs leading-relaxed">
                    Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota (Rajasthan)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Official Approvals & Government Compliance Trust Bar */}
        <div className="py-6 my-6 border-y border-[#382C1D] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/badges/rera-approved.png" 
              alt="RERA Approved" 
              className="w-12 h-12 object-contain" 
            />
            <div>
              <div className="text-xs font-black uppercase text-[#C5A46D] tracking-wider">
                Rajasthan RERA Registered
              </div>
              <div className="text-xs text-slate-300">
                Mukundra Prime Reg. No: <strong className="text-white font-bold">RAJ/P/2025/3532</strong> • 100% Legally Compliant
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="/assets/badges/uit-approved.png" 
              alt="UIT Kota Approved" 
              className="w-12 h-12 object-contain" 
            />
            <div>
              <div className="text-xs font-black uppercase text-[#C5A46D] tracking-wider">
                UIT Kota Sanctioned
              </div>
              <div className="text-xs text-slate-300">
                Urban Improvement Trust Kota Masterplan Approved Township
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#241D14] border border-[#C5A46D]/40 text-[#FAF7F0] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
            <span>Pre-Approved Bank Loans (SBI, HDFC, ICICI, BOB, Axis, Kotak)</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} DEEPPURA BUILDERS. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#C5A46D] transition-colors">
              Privacy Policy
            </Link>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#C5A46D] transition-colors cursor-pointer text-slate-300"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A46D]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
