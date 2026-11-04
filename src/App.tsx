import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { EnquiryForm } from './components/EnquiryForm';
import { X } from 'lucide-react';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { MukundraPrime } from './pages/MukundraPrime';
import { CompletedProjects } from './pages/CompletedProjects';
import { Amenities } from './pages/Amenities';
import { FloorPlans } from './pages/FloorPlans';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

// SEO & Scroll to top handler on route change
const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'DEEPPURA GROUP | Best Builders & Developers in Kota, Rajasthan | Mukundra Prime Luxury Flats',
    description: "DEEPPURA GROUP is Kota's premier real estate developer led by Director Animesh Jain. Explore Mukundra Prime luxury 1, 2 & 3 BHK flats on 100 Ft. Road, Raipura, Kota. RERA (RAJ/P/2025/3532) & UIT approved with 14+ amenities."
  },
  '/projects/mukundra-prime': {
    title: 'Mukundra Prime Kota | Luxury 1, 2 & 3 BHK Flats on 100 Ft. Road, Raipura | RERA Approved',
    description: 'Mukundra Prime by DEEPPURA GROUP: Ultra-modern 1, 2 & 3 BHK residences on 100 Ft. Road, Raipura, Kota. Adjacent to 200 Bigha Herbal Park & Allen Institute. 14+ amenities, pre-approved bank loans.'
  },
  '/completed-projects': {
    title: 'Completed Projects in Kota | Mahalaxmi Apartment, Royal Heritage Farmhouse, Mukundra Heights | DEEPPURA GROUP',
    description: 'Explore delivered landmark developments across Kota, Rajasthan by DEEPPURA GROUP: Mahalaxmi Apartment (Chawani), Royal Heritage Farmhouse (Ranpur), Mukundra Heights (Kunhari), and Ashiyana Homes (Thekra).'
  },
  '/amenities': {
    title: '14+ Verified Resort Amenities | Swimming Pool, Temple, Gym, Club House | Mukundra Prime Kota',
    description: 'Enjoy 14 verified resort amenities at Mukundra Prime, Raipura, Kota: freshwater swimming pool, on-site stone temple, kids outdoor play park, open calisthenics gym, landscaped green parks, and 24x7 security.'
  },
  '/floor-plans': {
    title: 'Floor Plans & 3D Unit Layouts (1, 2 & 3 BHK) | RERA Reg. RAJ/P/2025/3532 | Mukundra Prime Kota',
    description: 'View verified architectural floor plans and 3D isometric layout designs for 1 BHK Standard, 1 BHK Deluxe, 2 BHK (701.5 sq. ft.), and 3 BHK Deluxe (960 sq. ft.) flats at Mukundra Prime, Kota.'
  },
  '/unit-plan': {
    title: 'Floor Plans & 3D Unit Layouts (1, 2 & 3 BHK) | RERA Reg. RAJ/P/2025/3532 | Mukundra Prime Kota',
    description: 'View verified architectural floor plans and 3D isometric layout designs for 1 BHK Standard, 1 BHK Deluxe, 2 BHK (701.5 sq. ft.), and 3 BHK Deluxe (960 sq. ft.) flats at Mukundra Prime, Kota.'
  },
  '/gallery': {
    title: 'Photo Gallery | Real Towers, Elevation, Amenities & Interior Views | DEEPPURA GROUP Kota',
    description: 'Explore high-definition photo gallery of DEEPPURA GROUP projects in Kota: daylight towers, contemporary living rooms, swimming pool, landscape gardens, master bedrooms, and completed landmarks.'
  },
  '/about': {
    title: 'About DEEPPURA GROUP | Director Animesh Jain | Trusted Real Estate Developers in Kota, Rajasthan',
    description: 'Learn about DEEPPURA GROUP, founded by Director Animesh Jain. Dedicated to architectural integrity, clear title documentation, and delivering superior residential developments in Kota, Rajasthan.'
  },
  '/projects': {
    title: 'Residential Projects in Kota, Rajasthan | Ongoing & Completed Developments | DEEPPURA GROUP',
    description: 'Browse premier residential properties and farmhouses in Kota by DEEPPURA GROUP. Featuring ongoing Mukundra Prime on 100 Ft. Road and delivered projects in Chawani, Kunhari, and Thekra.'
  },
  '/contact': {
    title: 'Contact DEEPPURA GROUP Kota | Site Visits & Flat Bookings | Talwandi Corporate & Raipura Site Desk',
    description: 'Connect with DEEPPURA GROUP sales team for Mukundra Prime site visits and bookings in Kota. Call +91 73576 90111 / +91 82399 99520 or Director Desk +91 88750 00404. Corporate Office: Talwandi, Kota.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | DEEPPURA GROUP Kota, Rajasthan',
    description: 'Privacy Policy and commitment to buyer data security at DEEPPURA GROUP, Kota, Rajasthan.'
  }
};

function SEOAndScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 2. Set dynamic SEO Title and Meta Description for Kota, Rajasthan
    const meta = routeMeta[pathname] || routeMeta['/'];
    if (meta) {
      document.title = meta.title;
      let descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute('content', meta.description);
      }
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', meta.title);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', meta.description);
      }
    }
  }, [pathname]);

  return null;
}

export function App() {
  const [globalEnquiryOpen, setGlobalEnquiryOpen] = useState(false);

  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <SEOAndScrollHandler />
        <div className="flex flex-col min-h-screen bg-white text-slate-800">
          {/* Global Header */}
          <Header onOpenEnquiry={() => setGlobalEnquiryOpen(true)} />

          {/* Main Routing Container */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/mukundra-prime" element={<MukundraPrime />} />
              <Route path="/completed-projects" element={<CompletedProjects />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/floor-plans" element={<FloorPlans />} />
              <Route path="/unit-plan" element={<FloorPlans />} />
              <Route path="/unit_plan.html" element={<FloorPlans />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Fixed Floating Contact Options: Call, WhatsApp, Instagram */}
          <FloatingContact />

          {/* Global Enquiry Modal */}
          {globalEnquiryOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                onClick={() => setGlobalEnquiryOpen(false)}
              />
              <div className="relative w-full max-w-2xl z-10 animate-scaleUp">
                <button
                  onClick={() => setGlobalEnquiryOpen(false)}
                  className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-slate-800 border border-slate-200 flex items-center justify-center shadow-2xl hover:text-amber-600 hover:border-amber-600 transition-all z-20 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <EnquiryForm
                  defaultProject="Mukundra Prime"
                  title="Direct Booking &amp; Pricing Enquiry"
                  subtitle="Submit your requirements to connect directly with the official DEEPPURA GROUP sales desk via WhatsApp."
                />
              </div>
            </div>
          )}
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
