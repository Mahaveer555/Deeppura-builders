export interface BrochureSpread {
  id: number;
  spreadNum: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  thumb: string;
  leftPageImage: string;
  rightPageImage: string;
  highlights: string[];
}

export const brochureSpreads: BrochureSpread[] = [
  {
    id: 1,
    spreadNum: 1,
    title: 'Cover & Project Overview',
    subtitle: '100 Ft. Road, Raipura, Kota (Rajasthan)',
    category: 'Project Overview',
    image: '/assets/brochure/page-1.jpg',
    thumb: '/assets/brochure/page-1-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-1-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-1-right.jpg',
    highlights: [
      'Prime 100 Ft. Road Frontage in Rajnagar Raipura',
      'UIT Kota Sanctioned & Rajasthan RERA Approved',
      'Corporate & Site Office Contact Information',
      'Bank Loan Approvals up to 90%'
    ]
  },
  {
    id: 2,
    spreadNum: 2,
    title: 'About Deeppura Group & Elevation',
    subtitle: 'Legacy of Trust since 2011 • 6.5+ Lakh Sq.Ft. Delivered',
    category: 'Group Profile',
    image: '/assets/brochure/page-2.jpg',
    thumb: '/assets/brochure/page-2-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-2-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-2-right.jpg',
    highlights: [
      'Promoted by Shri Prakash Chand Jain (Deeppura)',
      'Delivered 6.5+ Lakh Sq.Ft. of Quality Construction',
      'Daylight Architectural Elevation with Gated Security',
      'Earthquake-resistant RCC Engineered Structure'
    ]
  },
  {
    id: 3,
    spreadNum: 3,
    title: '3 BHK Deluxe Unit Plan',
    subtitle: 'Super Built-Up Area: 960 Sq.Ft.',
    category: '3 BHK Deluxe',
    image: '/assets/brochure/page-3.jpg',
    thumb: '/assets/brochure/page-3-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-3-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-3-right.jpg',
    highlights: [
      'Expansive 960 Sq.Ft. Luxury Layout',
      'Master Bedroom Suite + 2 Bedrooms',
      '3D Isometric Furnished Cutaway Layout',
      'Dual Balconies & Modern Modular Kitchen'
    ]
  },
  {
    id: 4,
    spreadNum: 4,
    title: '3 BHK Standard Unit Plan',
    subtitle: 'Super Built-Up Area: 755 Sq.Ft.',
    category: '3 BHK Standard',
    image: '/assets/brochure/page-4.jpg',
    thumb: '/assets/brochure/page-4-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-4-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-4-right.jpg',
    highlights: [
      '3 Bedrooms: 10×11 ft, 10×10 ft, 9.25×9 ft',
      'Spacious Living Hall: 9×14 ft',
      'Open Kitchen: 7×5.5 ft with Utility Balcony 3.75×7.5 ft',
      '2 Toilets with cooler ledges and fresh air ventilation'
    ]
  },
  {
    id: 5,
    spreadNum: 5,
    title: '2 BHK Standard Unit Plan',
    subtitle: 'Super Built-Up Area: 700.15 Sq.Ft.',
    category: '2 BHK Standard',
    image: '/assets/brochure/page-5.jpg',
    thumb: '/assets/brochure/page-5-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-5-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-5-right.jpg',
    highlights: [
      'Master Bed Room: 10×10.5 ft & Bed Room: 10×10 ft',
      'Living Area: 9×14 ft with Scenic Balcony 3.5×6.5 ft',
      'Kitchen: 7.5×5.5 ft & 2 Toilets: 4×6 ft',
      'Approved for PMAY Subsidy of ₹1,80,000/-*'
    ]
  },
  {
    id: 6,
    spreadNum: 6,
    title: '1 BHK Deluxe Unit Plan',
    subtitle: 'Spacious Deluxe 1 BHK with Large Living Room',
    category: '1 BHK Deluxe',
    image: '/assets/brochure/page-6.jpg',
    thumb: '/assets/brochure/page-6-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-6-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-6-right.jpg',
    highlights: [
      'Master Bedroom: 9.5×10 ft',
      'Living Room: 9×11 ft',
      'Kitchen: 5.5×10.5 ft',
      'Balcony: 6.5×3 ft with 3.5 ft Wide Passage'
    ]
  },
  {
    id: 7,
    spreadNum: 7,
    title: '1 BHK Standard Unit Plan',
    subtitle: 'Smart Affordable Living for Couples & Students',
    category: '1 BHK Standard',
    image: '/assets/brochure/page-7.jpg',
    thumb: '/assets/brochure/page-7-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-7-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-7-right.jpg',
    highlights: [
      'Optimized 1 BHK Compact Layout',
      'Natural Sunlight & Cross Ventilation',
      'Dedicated Kitchen Counter & Storage Space',
      'High Rental Yield Opportunity in Kota'
    ]
  },
  {
    id: 8,
    spreadNum: 8,
    title: 'Verified Amenities & Completed Projects',
    subtitle: 'World-Class Facilities + Track Record Across Kota',
    category: 'Amenities & Landmarks',
    image: '/assets/brochure/page-8.jpg',
    thumb: '/assets/brochure/page-8-thumb.jpg',
    leftPageImage: '/assets/brochure/pages/page-8-left.jpg',
    rightPageImage: '/assets/brochure/pages/page-8-right.jpg',
    highlights: [
      'Temple / Mandir, Kids Play Area, Fully Equipped Gym',
      'Splash Pool, Super Market / Daily Needs Store',
      'Mukundra Heights (R.K. Puram, Kota)',
      'Ashiyana Homes (Thekra), Mahalaxmi Apt (Chawani), Royal Heritage'
    ]
  }
];

