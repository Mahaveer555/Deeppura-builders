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
import { ProjectDetail } from './pages/ProjectDetail';
import { CompletedProjects } from './pages/CompletedProjects';
import { Amenities } from './pages/Amenities';
import { FloorPlans } from './pages/FloorPlans';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

// SEO & Scroll to top handler on route change
export const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'DEEPPURA GROUP | Trusted Builders & Developers in Kota, Rajasthan',
    description: 'Explore premium residential projects and luxury 1, 2 & 3 BHK apartments in Kota, Rajasthan. Discover DEEPPURA GROUP projects and find your dream home.'
  },
  '/projects/mukundra-prime': {
    title: 'Mukundra Prime Kota | Luxury 1, 2 & 3 BHK Flats on 100 Ft. Road, Raipura | RERA Approved',
    description: 'Mukundra Prime by DEEPPURA GROUP: Ultra-modern 1, 2 & 3 BHK residences on 100 Ft. Road, Raipura, Kota. Adjacent to 200 Bigha Herbal Park & Allen Institute. 14+ amenities, pre-approved bank loans.'
  },
  '/projects/mukundra-heights': {
    title: 'Mukundra Heights Kota | Delivered Multi-Storey Apartments in Sector B, R.K. Puram | DEEPPURA GROUP',
    description: 'Explore Mukundra Heights in Sector B, R.K. Puram, Kota by DEEPPURA GROUP. A completed residential landmark featuring stilt parking, elevator, and peaceful family living.'
  },
  '/projects/ashiyana-homes': {
    title: 'Ashiyana Homes Kota | Delivered Gated Row Villas in Thekra | DEEPPURA GROUP',
    description: 'Explore Ashiyana Homes located behind Career Point Gurukul, Thekra, Kota by DEEPPURA GROUP. A completed gated residential enclave of row houses with private balconies and wide avenues.'
  },
  '/projects/mahalaxmi-apartment': {
    title: 'Mahalaxmi Apartment Kota | Delivered Residential Project in Chawani | DEEPPURA GROUP',
    description: 'Explore Mahalaxmi Apartment in central Chawani, Kota by DEEPPURA GROUP. Completed urban multi-storey residences with prime market connectivity and quality construction.'
  },
  '/projects/royal-heritage-farm-house': {
    title: 'Royal Heritage Farm House Kota | Luxury Estate Retreat in Alaniya | DEEPPURA GROUP',
    description: 'Explore Royal Heritage Farm House in Alaniya, Kota by DEEPPURA GROUP. A magnificent completed estate featuring heritage architecture, swimming pool, and sprawling greenery.'
  },
  '/completed-projects': {
    title: 'Completed Projects in Kota | Mahalaxmi Apartment, Royal Heritage Farmhouse, Mukundra Heights | DEEPPURA GROUP',
    description: 'Explore delivered landmark developments across Kota, Rajasthan by DEEPPURA GROUP: Mahalaxmi Apartment (Chawani), Royal Heritage Farmhouse (Alaniya), Mukundra Heights (R.K. Puram), and Ashiyana Homes (Thekra).'
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
    title: 'About DEEPPURA GROUP | Founder Prakash Jain (Deeppura) & Director Animesh Jain | Trusted Real Estate Developers in Kota, Rajasthan',
    description: 'Learn about DEEPPURA GROUP, founded by Prakash Jain (Deeppura) and directed by Animesh Jain. Dedicated to architectural integrity, clear title documentation, and delivering superior residential developments in Kota, Rajasthan.'
  },
  '/projects': {
    title: 'Residential Projects in Kota, Rajasthan | Ongoing & Completed Developments | DEEPPURA GROUP',
    description: 'Browse premier residential properties and farmhouses in Kota by DEEPPURA GROUP. Featuring ongoing Mukundra Prime on 100 Ft. Road and delivered projects in Chawani, R.K. Puram, Thekra, and Alaniya.'
  },
  '/blog': {
    title: 'Kota Real Estate Blog & Property Guides | Home Buying Advice | DEEPPURA GROUP',
    description: 'Explore expert guides on buying flats in Kota, checking RERA approvals, comparing 1, 2 & 3 BHK configurations, and finding the best residential areas in Kota, Rajasthan.'
  },
  '/blog/best-areas-to-buy-home-in-kota-rajasthan': {
    title: 'Best Areas to Buy a Home in Kota Rajasthan | Top Localities & Property Guide 2026',
    description: 'Discover the top areas to buy a flat or residential property in Kota, Rajasthan. Explore emerging hotspots like Raipura (100 Ft Road), Talwandi, R.K. Puram, and Kunhari with price trends and connectivity.'
  },
  '/blog/things-to-check-before-buying-flat-in-kota': {
    title: 'Things to Check Before Buying a Flat in Kota | Legal & Buyer Checklist',
    description: 'Essential 10-point checklist for buying a flat in Kota, Rajasthan. Learn how to verify RERA approval, UIT sanction, title deeds, carpet area, bank loans, and builder track record.'
  },
  '/blog/1-bhk-vs-2-bhk-vs-3-bhk-apartment-guide-kota': {
    title: '1 BHK vs 2 BHK vs 3 BHK Flats in Kota | Which Apartment Size to Choose?',
    description: 'Confused between 1 BHK, 2 BHK, and 3 BHK flats in Kota, Rajasthan? Compare prices, rental returns, family space, and resale value to make the smartest real estate choice.'
  },
  '/blog/benefits-of-buying-residential-property-in-kota': {
    title: 'Benefits of Buying Residential Property in Kota | Real Estate Investment 2026',
    description: 'Discover why investing in Kota residential real estate offers exceptional returns. Explore Kota coaching economy, infrastructure projects, high rental yields, and quality of life.'
  },
  '/blog/guide-to-choosing-the-right-builder-in-kota': {
    title: 'Guide to Choosing the Right Builder in Kota Rajasthan | Top Builders Checklist',
    description: 'How to select the best real estate developer in Kota, Rajasthan. Learn how to evaluate builder reputation, delivered projects, legal transparency, and construction quality.'
  },
  '/contact': {
    title: 'Contact DEEPPURA GROUP Kota | Site Visits & Flat Bookings | Talwandi Corporate & Raipura Site Desk',
    description: 'Connect with DEEPPURA GROUP sales team for Mukundra Prime site visits and bookings in Kota. Call +91 73576 90111 / +91 82399 99520 or Director Desk (Animesh Jain) +91 88750 00404. Corporate Office: Talwandi, Kota.'
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
    const canonicalBase = 'https://deppura.vercel.app';
    const canonicalUrl = `${canonicalBase}${pathname === '/' ? '' : pathname}`;

    if (meta) {
      document.title = meta.title;

      // Update or create meta description
      let descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute('content', meta.description);
      }

      // Canonical link
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonicalUrl);
        document.head.appendChild(link);
      }

      // Open Graph
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.title);
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.description);
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

      // Twitter Cards
      let twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', meta.title);
      let twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', meta.description);
      let twUrl = document.querySelector('meta[name="twitter:url"]');
      if (twUrl) twUrl.setAttribute('content', canonicalUrl);

      // Dynamic Breadcrumbs Schema Injection
      const breadcrumbsSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': canonicalBase
          },
          ...(pathname !== '/' ? [{
            '@type': 'ListItem',
            'position': 2,
            'name': meta.title.split('|')[0].trim(),
            'item': canonicalUrl
          }] : [])
        ]
      };

      let existingBreadcrumbsScript = document.getElementById('dynamic-breadcrumbs-schema');
      if (!existingBreadcrumbsScript) {
        existingBreadcrumbsScript = document.createElement('script');
        existingBreadcrumbsScript.id = 'dynamic-breadcrumbs-schema';
        existingBreadcrumbsScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(existingBreadcrumbsScript);
      }
      existingBreadcrumbsScript.textContent = JSON.stringify(breadcrumbsSchema);
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
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/completed-projects" element={<CompletedProjects />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/floor-plans" element={<FloorPlans />} />
              <Route path="/unit-plan" element={<FloorPlans />} />
              <Route path="/unit_plan.html" element={<FloorPlans />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
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
            <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
                <button
                  onClick={() => setGlobalEnquiryOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <EnquiryForm
                  defaultProject="Mukundra Prime"
                  onSuccess={() => setGlobalEnquiryOpen(false)}
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
