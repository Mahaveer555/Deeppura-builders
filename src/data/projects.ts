export interface FloorPlanItem {
  id: string;
  nameEn: string;
  nameHi: string;
  category: '1BHK' | '1BHK-Deluxe' | '2BHK' | '3BHK' | '3BHK-Deluxe';
  titleEn: string;
  titleHi: string;
  tagEn: string;
  tagHi: string;
  areaSqFt?: string;
  featuresEn: string[];
  featuresHi: string[];
  image: string;
  brochureImage?: string;
  isoImage?: string;
}

export interface BankPartner {
  name: string;
  code: string;
  tagline: string;
  loanPercentage: string;
}

export const approvedBanks: BankPartner[] = [
  { name: 'State Bank of India', code: 'SBI', tagline: 'The Banker to Every Indian', loanPercentage: 'Up to 90%' },
  { name: 'ICICI Bank', code: 'ICICI', tagline: 'Hum Hai Na, Khayal Aapka', loanPercentage: 'Up to 90%' },
  { name: 'Axis Bank', code: 'AXIS', tagline: 'Badhti Ka Naam Zindagi', loanPercentage: 'Up to 90%' },
  { name: 'Bank of Baroda', code: 'BOB', tagline: "India's International Bank", loanPercentage: 'Up to 90%' },
  { name: 'Union Bank of India', code: 'UNION', tagline: 'Good People to Bank With', loanPercentage: 'Up to 90%' },
  { name: 'Kotak Mahindra Bank', code: 'KOTAK', tagline: "Let's Make Money Simple", loanPercentage: 'Up to 90%' },
];

export interface Project {
  id: string;
  slug: string;
  nameEn: string;
  nameHi: string;
  status: 'ongoing' | 'completed';
  developerEn: string;
  developerHi: string;
  locationEn: string;
  locationHi: string;
  taglineEn: string;
  taglineHi: string;
  descriptionEn: string;
  descriptionHi: string;
  heroImage: string;
  images: {
    url: string;
    captionEn: string;
    captionHi: string;
    category: 'exterior' | 'interior' | 'amenity' | 'floorPlan';
  }[];
  configurations?: string[];
  featuresEn: string[];
  featuresHi: string[];
  address: string;
  googleMapQuery: string;
}

export const floorPlansData: FloorPlanItem[] = [
  {
    id: 'unit-plan-1',
    category: '1BHK',
    nameEn: '1 BHK Type - A',
    nameHi: '1 BHK Type - A',
    titleEn: '1 BHK Type - A Unit Plan',
    titleHi: '1 BHK Type - A Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_1.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-2',
    category: '1BHK-Deluxe',
    nameEn: '1 BHK Type - B',
    nameHi: '1 BHK Type - B',
    titleEn: '1 BHK Type - B Unit Plan',
    titleHi: '1 BHK Type - B Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_2.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-3',
    category: '2BHK',
    nameEn: '2 BHK Type - A',
    nameHi: '2 BHK Type - A',
    titleEn: '2 BHK Type - A Unit Plan',
    titleHi: '2 BHK Type - A Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_3.jpg',
    isoImage: '/assets/floor-plans/mukundra-prime-2bhk-3d-plan.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-4',
    category: '2BHK',
    nameEn: '2 BHK Type - B',
    nameHi: '2 BHK Type - B',
    titleEn: '2 BHK Type - B Unit Plan',
    titleHi: '2 BHK Type - B Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_4.jpg',
    isoImage: '/assets/floor-plans/mukundra-prime-2bhk-3d-plan.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-5',
    category: '3BHK',
    nameEn: '3 BHK Type - A',
    nameHi: '3 BHK Type - A',
    titleEn: '3 BHK Type - A Unit Plan',
    titleHi: '3 BHK Type - A Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_5.jpg',
    isoImage: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-6',
    category: '3BHK',
    nameEn: '3 BHK Type - B',
    nameHi: '3 BHK Type - B',
    titleEn: '3 BHK Type - B Unit Plan',
    titleHi: '3 BHK Type - B Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_6.jpg',
    isoImage: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-7',
    category: '3BHK-Deluxe',
    nameEn: '3 BHK Type - C',
    nameHi: '3 BHK Type - C',
    titleEn: '3 BHK Type - C Unit Plan',
    titleHi: '3 BHK Type - C Unit Plan',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_7.jpg',
    isoImage: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-8',
    category: '3BHK-Deluxe',
    nameEn: 'Unit Plan Type - D',
    nameHi: 'Unit Plan Type - D',
    titleEn: 'Unit Plan Type - D',
    titleHi: 'Unit Plan Type - D',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_8.jpg',
    featuresEn: [],
    featuresHi: []
  },
  {
    id: 'unit-plan-9',
    category: '3BHK-Deluxe',
    nameEn: 'Unit Plan Type - E',
    nameHi: 'Unit Plan Type - E',
    titleEn: 'Unit Plan Type - E',
    titleHi: 'Unit Plan Type - E',
    tagEn: 'Unit Plan',
    tagHi: 'Unit Plan',
    image: '/assets/unit-plans/unit_plan_9.jpg',
    featuresEn: [],
    featuresHi: []
  }
];

export const mukundraPrimeProject: Project = {
  id: 'mukundra-prime',
  slug: 'mukundra-prime',
  nameEn: 'Mukundra Prime',
  nameHi: 'Mukundra Prime',
  status: 'ongoing',
  developerEn: 'Mukundra Infra Project Private Limited',
  developerHi: 'Mukundra Infra Project Private Limited',
  locationEn: 'Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan',
  locationHi: 'Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan',
  taglineEn: 'Thoughtfully Planned Modern Residences in Kota',
  taglineHi: 'Thoughtfully Planned Modern Residences in Kota',
  descriptionEn: 'Mukundra Prime is an ongoing residential development by Mukundra Infra Project Private Limited, offering thoughtfully planned 1 BHK, 2 BHK, and 3 BHK residential configurations in Kota, Rajasthan. Located on a 100 ft. wide road near Decent School and in close proximity to Allen Career Institute, it features complete loanability up to 90%, boundary-wall gated security, on-premises temple, swimming pool, gym, supermarket, and kids play park.',
  descriptionHi: 'Mukundra Prime is an ongoing residential development by Mukundra Infra Project Private Limited, offering thoughtfully planned 1 BHK, 2 BHK, and 3 BHK residential configurations in Kota, Rajasthan. Located on a 100 ft. wide road near Decent School and in close proximity to Allen Career Institute, it features complete loanability up to 90%, boundary-wall gated security, on-premises temple, swimming pool, gym, supermarket, and kids play park.',
  heroImage: '/assets/projects/mukundra-prime/mukundra-prime-elevation-golden.jpg',
  address: 'Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan',
  googleMapQuery: 'Deoli Arab Road, Near Decent School, Rajnagar, Raipura, Kota, Rajasthan',
  configurations: ['1 BHK Deluxe', '2 BHK (700.15 sq. ft.)', '3 BHK (755 sq. ft.)', '3 BHK Deluxe'],
  featuresEn: [
    'Approved ongoing development by Mukundra Infra Project Private Limited',
    'Prices starting at just ₹15 Lakhs* with booking from ₹51,000/-',
    'PMAY Government Subsidy benefit up to ₹1,80,000/- per flat',
    'Dhamaka Offer: Fully Furnished Flat with Modular Kitchen at no extra cost',
    'Thoughtfully planned 1 BHK, 2 BHK, and 3 BHK apartment layouts',
    'Located on 100 Feet Wide Road with rapid city access',
    'Near to Allen Career Institute & Decent School',
    'Up to 90% Home Loan Facility Available with approved national banks',
    'Gated society with boundary wall & 24×7 security guards & CCTV',
    'Dedicated on-site society temple & community celebration hall',
    'Swimming pool, kids play area, open gym & supermarket'
  ],
  featuresHi: [
    'Approved ongoing development by Mukundra Infra Project Private Limited',
    'Prices starting at just ₹15 Lakhs* with booking from ₹51,000/-',
    'PMAY Government Subsidy benefit up to ₹1,80,000/- per flat',
    'Dhamaka Offer: Fully Furnished Flat with Modular Kitchen at no extra cost',
    'Thoughtfully planned 1 BHK, 2 BHK, and 3 BHK apartment layouts',
    'Located on 100 Feet Wide Road with rapid city access',
    'Near to Allen Career Institute & Decent School',
    'Up to 90% Home Loan Facility Available with approved national banks',
    'Gated society with boundary wall & 24×7 security guards & CCTV',
    'Dedicated on-site society temple & community celebration hall',
    'Swimming pool, kids play area, open gym & supermarket'
  ],
  images: [
    {
      url: '/assets/projects/mukundra-prime/mukundra-prime-elevation-golden.jpg',
      captionEn: 'Mukundra Prime Royal Architectural Gold Elevation on 100 Ft. Road (Daylight View)',
      captionHi: 'Mukundra Prime Royal Architectural Gold Elevation on 100 Ft. Road (Daylight View)',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/gate-daylight-closeup.jpg',
      captionEn: 'Mukundra Prime Grand Entrance Gate with 3D Golden Signage (Daylight View)',
      captionHi: 'Mukundra Prime Grand Entrance Gate with 3D Golden Signage (Daylight View)',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/official-pricing-offer-poster.jpg',
      captionEn: 'Mukundra Prime Official Pricing Poster - Starting ₹15 Lakhs*, Booking ₹51,000/-',
      captionHi: 'Mukundra Prime Official Pricing Poster - Starting ₹15 Lakhs*, Booking ₹51,000/-',
      category: 'floorPlan'
    },
    {
      url: '/assets/projects/mukundra-prime/facade-gate-twilight.jpg',
      captionEn: 'Mukundra Prime Grand Entrance Gate with 3D Signage & Facade (Twilight View)',
      captionHi: 'Mukundra Prime Grand Entrance Gate with 3D Signage & Facade (Twilight View)',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/site-progress-tower-angle3.jpg',
      captionEn: 'Mukundra Prime High-Rise Tower Real Site Construction (Angle 3)',
      captionHi: 'Mukundra Prime High-Rise Tower Real Site Construction (Angle 3)',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/elevation-daylight-crisp.jpg',
      captionEn: 'Mukundra Prime Daytime Multi-Tower Elevation from 100 Ft. Road',
      captionHi: 'Mukundra Prime Daytime Multi-Tower Elevation from 100 Ft. Road',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/aerial-masterplan-100ft.jpg',
      captionEn: 'Mukundra Prime 3D Masterplan Aerial Elevation on 100 Ft. Road',
      captionHi: 'Mukundra Prime 3D Masterplan Aerial Elevation on 100 Ft. Road',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/site-progress-tower.jpg',
      captionEn: 'Mukundra Prime On-Site High-Rise Tower Construction Progress',
      captionHi: 'Mukundra Prime On-Site High-Rise Tower Construction Progress',
      category: 'exterior'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-2bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 2 BHK 3D Isometric Furnished Cutaway Layout',
      captionHi: 'Mukundra Prime 2 BHK 3D Isometric Furnished Cutaway Layout',
      category: 'floorPlan'
    },
    {
      url: '/assets/floor-plans/mukundra-prime-3bhk-3d-plan.jpg',
      captionEn: 'Mukundra Prime 3 BHK 3D Isometric Furnished Cutaway Layout',
      captionHi: 'Mukundra Prime 3 BHK 3D Isometric Furnished Cutaway Layout',
      category: 'floorPlan'
    },
    {
      url: '/assets/hero/mukundra-prime-daylight-towers.jpg',
      captionEn: 'Mukundra Prime Multi-Wing Towers on 100 Ft. Road (Daylight View)',
      captionHi: 'Mukundra Prime Multi-Wing Towers on 100 Ft. Road (Daylight View)',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg',
      captionEn: 'Mukundra Prime Swimming Pool, Temple & Community Pavilion',
      captionHi: 'Mukundra Prime Swimming Pool, Temple & Community Pavilion',
      category: 'amenity'
    },
    {
      url: '/assets/hero/hero-building.jpg',
      captionEn: 'Mukundra Prime Masterplan Architectural Elevation - Raipura, Kota',
      captionHi: 'Mukundra Prime Masterplan Architectural Elevation - Raipura, Kota',
      category: 'exterior'
    },
    {
      url: '/assets/projects/mukundra-prime/interiors/living-room.jpg',
      captionEn: 'Mukundra Prime Contemporary Living & Modular Kitchen',
      captionHi: 'Mukundra Prime Contemporary Living & Modular Kitchen',
      category: 'interior'
    },
    {
      url: '/assets/projects/mukundra-prime/interiors/master-bedroom.jpg',
      captionEn: 'Mukundra Prime Master Bedroom with Ambient Lighting',
      captionHi: 'Mukundra Prime Master Bedroom with Ambient Lighting',
      category: 'interior'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/swimming-pool.jpg',
      captionEn: 'Recreation Swimming Pool & Splash Zone',
      captionHi: 'Recreation Swimming Pool & Splash Zone',
      category: 'amenity'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/temple.jpg',
      captionEn: 'Sanctified Society Temple within Township',
      captionHi: 'Sanctified Society Temple within Township',
      category: 'amenity'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/gym.jpg',
      captionEn: 'Fitness Center & Cardio Gymnasium',
      captionHi: 'Fitness Center & Cardio Gymnasium',
      category: 'amenity'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/supermarket.jpg',
      captionEn: 'On-Premises Supermarket & Grocery Store',
      captionHi: 'On-Premises Supermarket & Grocery Store',
      category: 'amenity'
    },
    {
      url: '/assets/projects/mukundra-prime/amenities/kids-park.jpg',
      captionEn: 'Children Play Park with Multi-Play Equipment',
      captionHi: 'Children Play Park with Multi-Play Equipment',
      category: 'amenity'
    },
    {
      url: '/assets/unit-plans/unit_plan_1.jpg',
      captionEn: '1 BHK Type - A Unit Plan',
      captionHi: '1 BHK Type - A Unit Plan',
      category: 'floorPlan'
    },
    {
      url: '/assets/unit-plans/unit_plan_2.jpg',
      captionEn: '1 BHK Type - B Unit Plan',
      captionHi: '1 BHK Type - B Unit Plan',
      category: 'floorPlan'
    },
    {
      url: '/assets/unit-plans/unit_plan_3.jpg',
      captionEn: '2 BHK Type - A Unit Plan',
      captionHi: '2 BHK Type - A Unit Plan',
      category: 'floorPlan'
    }
  ]
};

export const completedProjects: Project[] = [
  {
    id: 'mukundra-heights',
    slug: 'mukundra-heights',
    nameEn: 'Mukundra Heights',
    nameHi: 'Mukundra Heights',
    status: 'completed',
    developerEn: 'DEEPPURA GROUP',
    developerHi: 'DEEPPURA GROUP',
    locationEn: 'R.K. Puram, Sector B, Kota, Rajasthan',
    locationHi: 'R.K. Puram, Sector B, Kota, Rajasthan',
    taglineEn: 'Contemporary Multi-Storey Living in R.K. Puram',
    taglineHi: 'Contemporary Multi-Storey Living in R.K. Puram',
    descriptionEn: 'A prime completed multi-storey residential landmark in Sector B, R.K. Puram, Kota, offering thoughtfully built apartments, dedicated parking, and peaceful residential ambience.',
    descriptionHi: 'A prime completed multi-storey residential landmark in Sector B, R.K. Puram, Kota, offering thoughtfully built apartments, dedicated parking, and peaceful residential ambience.',
    heroImage: '/assets/completed-projects/mukundra-heights.jpg',
    address: 'Sector B, R.K. Puram, Kota, Rajasthan',
    googleMapQuery: 'Sector B, R.K. Puram, Kota, Rajasthan',
    featuresEn: ['Completed Residential Landmark', 'Prime Sector B Location', 'Covered Stilt Parking', 'Lift & Water Infrastructure'],
    featuresHi: ['Completed Residential Landmark', 'Prime Sector B Location', 'Covered Stilt Parking', 'Lift & Water Infrastructure'],
    images: [
      {
        url: '/assets/completed-projects/mukundra-heights.jpg',
        captionEn: 'Mukundra Heights Building Exterior Elevation (R.K. Puram, Kota)',
        captionHi: 'Mukundra Heights Building Exterior Elevation (R.K. Puram, Kota)',
        category: 'exterior'
      },
      {
        url: '/assets/completed-projects/mukundra-heights-perspective.jpg',
        captionEn: 'Mukundra Heights Modern Architecture & Street Perspective',
        captionHi: 'Mukundra Heights Modern Architecture & Street Perspective',
        category: 'exterior'
      },
      {
        url: '/assets/completed-projects/mukundra-heights-aerial.jpg',
        captionEn: 'Mukundra Heights 3D Aerial View with Stilt Parking & Rooftop Terrace',
        captionHi: 'Mukundra Heights 3D Aerial View with Stilt Parking & Rooftop Terrace',
        category: 'exterior'
      }
    ]
  },
  {
    id: 'ashiyana-homes',
    slug: 'ashiyana-homes',
    nameEn: 'Ashiyana Homes',
    nameHi: 'Ashiyana Homes',
    status: 'completed',
    developerEn: 'DEEPPURA GROUP',
    developerHi: 'DEEPPURA GROUP',
    locationEn: 'Behind Career Point Gurukul, Thekra, Kota, Rajasthan',
    locationHi: 'Behind Career Point Gurukul, Thekra, Kota, Rajasthan',
    taglineEn: 'Tranquil Residential Enclave in Thekra',
    taglineHi: 'Tranquil Residential Enclave in Thekra',
    descriptionEn: 'A completed residential development strategically located behind Career Point Gurukul in Thekra, Kota, designed for serene family living with modern row-house architecture and private balconies.',
    descriptionHi: 'A completed residential development strategically located behind Career Point Gurukul in Thekra, Kota, designed for serene family living with modern row-house architecture and private balconies.',
    heroImage: '/assets/completed-projects/ashiyana-homes.jpg',
    address: 'Behind Career Point Gurukul, Thekra, Kota, Rajasthan',
    googleMapQuery: 'Behind Career Point Gurukul, Thekra, Kota, Rajasthan',
    featuresEn: ['Delivered Residential Project', 'Near Major Educational Hubs', 'Secured Gated Community', 'Well-Lit Wide Internal Roads'],
    featuresHi: ['Delivered Residential Project', 'Near Major Educational Hubs', 'Secured Gated Community', 'Well-Lit Wide Internal Roads'],
    images: [
      {
        url: '/assets/completed-projects/ashiyana-homes.jpg',
        captionEn: 'Ashiyana Homes Luxury Gated Row Villas (Thekra, Kota)',
        captionHi: 'Ashiyana Homes Luxury Gated Row Villas (Thekra, Kota)',
        category: 'exterior'
      },
      {
        url: '/assets/completed-projects/ashiyana-homes-street.jpg',
        captionEn: 'Ashiyana Homes Wide Avenue & Landscaped Driveway',
        captionHi: 'Ashiyana Homes Wide Avenue & Landscaped Driveway',
        category: 'exterior'
      },
      {
        url: '/assets/completed-projects/ashiyana-homes-wide.jpg',
        captionEn: 'Ashiyana Homes Panoramic Residential Street View',
        captionHi: 'Ashiyana Homes Panoramic Residential Street View',
        category: 'exterior'
      }
    ]
  },
  {
    id: 'mahalaxmi-apartment',
    slug: 'mahalaxmi-apartment',
    nameEn: 'Mahalaxmi Apartment',
    nameHi: 'Mahalaxmi Apartment',
    status: 'completed',
    developerEn: 'DEEPPURA GROUP',
    developerHi: 'DEEPPURA GROUP',
    locationEn: 'Chawani, Kota, Rajasthan',
    locationHi: 'Chawani, Kota, Rajasthan',
    taglineEn: 'Heart-of-City Residential Living in Chawani',
    taglineHi: 'Heart-of-City Residential Living in Chawani',
    descriptionEn: 'A successfully completed urban multi-storey residential project in central Chawani, Kota, offering superior commercial connectivity, nearby markets, and well-designed private residences.',
    descriptionHi: 'A successfully completed urban multi-storey residential project in central Chawani, Kota, offering superior commercial connectivity, nearby markets, and well-designed private residences.',
    heroImage: '/assets/completed-projects/mahalaxmi-apartment.jpg',
    address: 'Chawani, Kota, Rajasthan',
    googleMapQuery: 'Chawani, Kota, Rajasthan',
    featuresEn: ['Prime Central Kota Location', 'Walkable to City Markets', 'Quality Structural Construction', 'Peaceful Neighborhood'],
    featuresHi: ['Prime Central Kota Location', 'Walkable to City Markets', 'Quality Structural Construction', 'Peaceful Neighborhood'],
    images: [
      {
        url: '/assets/completed-projects/mahalaxmi-apartment.jpg',
        captionEn: 'Mahalaxmi Apartment Multi-Storey Facade (Chawani, Kota)',
        captionHi: 'Mahalaxmi Apartment Multi-Storey Facade (Chawani, Kota)',
        category: 'exterior'
      },
      {
        url: '/assets/completed-projects/mahalaxmi-apartment-tower.jpg',
        captionEn: 'Mahalaxmi Apartment High-Rise Residential Tower View',
        captionHi: 'Mahalaxmi Apartment High-Rise Residential Tower View',
        category: 'exterior'
      }
    ]
  },
  {
    id: 'royal-heritage-farm-house',
    slug: 'royal-heritage-farm-house',
    nameEn: 'Royal Heritage Farm House',
    nameHi: 'Royal Heritage Farm House',
    status: 'completed',
    developerEn: 'DEEPPURA GROUP',
    developerHi: 'DEEPPURA GROUP',
    locationEn: 'Alaniya, Kota, Rajasthan',
    locationHi: 'Alaniya, Kota, Rajasthan',
    taglineEn: 'Luxury Farmhouse Retreat & Sprawling Greens',
    taglineHi: 'Luxury Farmhouse Retreat & Sprawling Greens',
    descriptionEn: 'A magnificent completed farmhouse estate located in Alaniya, Kota, combining heritage-inspired architecture, swimming pool, sprawling manicured acreage, and serene open landscapes.',
    descriptionHi: 'A magnificent completed farmhouse estate located in Alaniya, Kota, combining heritage-inspired architecture, swimming pool, sprawling manicured acreage, and serene open landscapes.',
    heroImage: '/assets/completed-projects/royal-heritage-farmhouse.jpg',
    address: 'Alaniya, Kota, Rajasthan',
    googleMapQuery: 'Alaniya, Kota, Rajasthan',
    featuresEn: ['Expansive Green Acreage', 'Private Swimming Pool', 'Heritage Architectural Styling', 'Private Event & Leisure Destination'],
    featuresHi: ['Expansive Green Acreage', 'Private Swimming Pool', 'Heritage Architectural Styling', 'Private Event & Leisure Destination'],
    images: [
      {
        url: '/assets/completed-projects/royal-heritage-farmhouse.jpg',
        captionEn: 'Royal Heritage Farm House Aerial Estate View (Alaniya, Kota)',
        captionHi: 'Royal Heritage Farm House Aerial Estate View (Alaniya, Kota)',
        category: 'exterior'
      }
    ]
  }
];

export const allProjects: Project[] = [mukundraPrimeProject, ...completedProjects];
