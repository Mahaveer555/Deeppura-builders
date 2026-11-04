import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MapPin, ShieldCheck, Download, FileText, Maximize2 } from 'lucide-react';
import { Logo } from './Logo';
import { BrochureModal } from './BrochureModal';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [brochureDropdownOpen, setBrochureDropdownOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    setBrochureDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { 
      to: '/projects', 
      label: 'Projects',
      hasDropdown: true,
      subItems: [
        { to: '/projects/mukundra-prime', label: 'Mukundra Prime (Ongoing Flagship)' },
        { to: '/completed-projects', label: 'Completed Delivered Landmarks' },
        { to: '/projects', label: 'All Projects Overview' },
      ]
    },
    { to: '/completed-projects', label: 'Completed Projects' },
    { to: '/amenities', label: 'Amenities' },
    { to: '/unit-plan', label: 'Unit Plan' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Corporate Strip (Clean Luxury Light Theme) */}
      <div className={`hidden lg:block bg-slate-50 border-b border-slate-200 text-xs transition-all duration-300 ${
        isScrolled ? 'h-0 py-0 overflow-hidden border-none opacity-0' : 'py-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-slate-600">
          
          {/* Left: Office Locations & Approvals */}
          <div className="flex items-center gap-5 text-[11.5px] font-medium whitespace-nowrap shrink-0">
            <div className="flex items-center gap-1.5 text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-bold text-slate-900">Kota, Rajasthan:</span>
              <span className="text-slate-600">Talwandi (Corporate) • Raipura (Site)</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-700">UIT &amp; RERA Approved Projects</span>
            </div>
          </div>

          {/* Right: Booking Desk & Director Contact */}
          <div className="flex items-center gap-4 text-[11.5px] font-medium whitespace-nowrap shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-slate-800 font-bold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Booking Desk:
              </span>
              <a 
                href="tel:7357690111" 
                className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                7357690111
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="tel:8239999520" 
                className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                8239999520
              </a>
            </div>

            <span className="text-slate-300">•</span>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Director:</span>
              <a 
                href="tel:8875000404" 
                className="font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
              >
                +91 88750 00404
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 border-b ${
        isScrolled ? 'border-slate-200/90 shadow-md py-2.5' : 'border-slate-200/60 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo on Left (Light variant for crisp dark typography) */}
            <div className="shrink-0">
              <Logo size={isScrolled ? 'sm' : 'md'} variant="light" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 2xl:gap-3 shrink-0">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div 
                      key={item.to}
                      className="relative shrink-0"
                      onMouseEnter={() => setProjectsDropdownOpen(true)}
                      onMouseLeave={() => setProjectsDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => `whitespace-nowrap flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-heading font-bold transition-all ${
                          isActive || location.pathname.startsWith('/projects')
                            ? 'text-emerald-700 bg-emerald-50 border-b-2 border-emerald-500' 
                            : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 shrink-0" />
                      </NavLink>

                      {projectsDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 rounded-xl bg-white border border-slate-200 shadow-2xl py-2 animate-fadeIn z-50">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="block px-4 py-2.5 text-xs font-heading font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `whitespace-nowrap px-3 py-2 rounded-lg text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-heading font-bold transition-all ${
                      isActive 
                        ? 'text-emerald-700 bg-emerald-50 border-b-2 border-emerald-500' 
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action: BROCHURE Dropdown (Replaces Enquire Now) */}
            <div 
              className="relative hidden sm:flex items-center shrink-0"
              onMouseEnter={() => setBrochureDropdownOpen(true)}
              onMouseLeave={() => setBrochureDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setBrochureModalOpen(true)}
                className="whitespace-nowrap flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/70 text-slate-800 hover:text-emerald-700 font-heading font-black text-xs xl:text-sm tracking-wider uppercase transition-all cursor-pointer group shadow-sm"
              >
                <span>BROCHURE</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-600 transition-transform duration-200 ${brochureDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {brochureDropdownOpen && (
                <div className="absolute top-full right-0 w-80 mt-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2.5 animate-fadeIn z-50">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Official Publications
                    </span>
                    <span className="text-xs font-bold text-slate-900 block">
                      Mukundra Prime &amp; Projects
                    </span>
                  </div>

                  <a
                    href="/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf"
                    download="Mukundra-Prime-Official-Brochure.pdf"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700">
                        Mukundra Prime Brochure (PDF)
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Download verified floor plans &amp; amenities
                      </div>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setBrochureDropdownOpen(false);
                      setBrochureModalOpen(true);
                    }}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors text-left group/item cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-100 group-hover/item:text-emerald-800">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700">
                        Interactive Brochure Viewer
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Preview specifications &amp; layout online
                      </div>
                    </div>
                  </button>

                  <Link
                    to="/unit-plan"
                    onClick={() => setBrochureDropdownOpen(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-100 group-hover/item:text-emerald-800">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700">
                        Unit Plans &amp; Layouts
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Explore 2D and 3D architectural floor plans
                      </div>
                    </div>
                  </Link>

                  <a
                    href="https://wa.me/917357690111?text=Hello%2C%20please%20send%20the%20official%20Mukundra%20Prime%20Brochure%20PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors border-t border-slate-100 mt-1 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-800 group-hover/item:text-emerald-900">
                        Get Brochure via WhatsApp
                      </div>
                      <div className="text-[11px] text-emerald-600">
                        Direct delivery on your phone (+91 7357690111)
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-600" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-slideDown shadow-2xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-heading font-bold transition-colors ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBrochureModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-heading font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-emerald-100 transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-700" />
                <span>BROCHURE (VIEW / DOWNLOAD PDF)</span>
              </button>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                <a href="tel:7357690111" className="flex items-center gap-1.5 font-bold text-emerald-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>7357690111</span>
                </a>
                <span>•</span>
                <a href="tel:8239999520" className="flex items-center gap-1.5 font-bold text-emerald-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>8239999520</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Brochure Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </>
  );
};
