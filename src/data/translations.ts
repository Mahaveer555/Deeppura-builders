export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    projects: string;
    completedProjects: string;
    amenities: string;
    floorPlans: string;
    gallery: string;
    contact: string;
    enquireNow: string;
    mukundraPrime: string;
    menu: string;
    close: string;
  };
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    exploreBtn: string;
    enquireBtn: string;
    featuredBadge: string;
    locationBadge: string;
    quickStatsConfig: string;
    quickStatsLocation: string;
    quickStatsRoad: string;
  };
  offers: {
    tickerText: string;
    startingPriceTitle: string;
    startingPriceVal: string;
    startingPriceDesc: string;
    bookingTitle: string;
    bookingVal: string;
    bookingDesc: string;
    pmayTitle: string;
    pmayVal: string;
    pmayDesc: string;
    kitchenTitle: string;
    kitchenDesc: string;
    loanTitle: string;
    loanVal: string;
    loanDesc: string;
    parkTitle: string;
    parkDesc: string;
    reraBadge: string;
    uitBadge: string;
    bankPartnersTitle: string;
  };
  about: {
    badge: string;
    headline: string;
    subheading: string;
    p1: string;
    p2: string;
    p3: string;
    statsAreaInHand: string;
    statsLandSpan: string;
    statsDelivered: string;
    statsFounded: string;
    founderTitle: string;
    founderName: string;
    directorTitle: string;
    directorName: string;
    directorQuote: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    learnMoreBtn: string;
  };
  featuredProject: {
    badge: string;
    title: string;
    developerLabel: string;
    developerName: string;
    statusLabel: string;
    statusVal: string;
    locationLabel: string;
    locationVal: string;
    description: string;
    btnExplore: string;
    btnFloorPlans: string;
    btnBrochure: string;
    btnEnquire: string;
    configurations: string;
    keyFeaturesTitle: string;
  };
  highlights: {
    badge: string;
    title: string;
    subtitle: string;
    bhk1Title: string;
    bhk1Desc: string;
    bhk2Title: string;
    bhk2Desc: string;
    bhk3Title: string;
    bhk3Desc: string;
    bhk3DeluxeTitle: string;
    bhk3DeluxeDesc: string;
    requestPricingBtn: string;
  };
  amenities: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllBtn: string;
  };
  completed: {
    badge: string;
    title: string;
    subtitle: string;
    status: string;
    viewPortfolioBtn: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    exterior: string;
    interior: string;
    floorPlans: string;
    amenities: string;
    completedProjects: string;
    viewFullBtn: string;
  };
  enquiry: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    interestedIn: string;
    selectConfig: string;
    opt1Bhk: string;
    opt2Bhk: string;
    opt3Bhk: string;
    optNotDecided: string;
    message: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    whatsappNote: string;
    privacyNote: string;
    scheduleVisit: string;
  };
  footer: {
    companyDesc: string;
    quickLinks: string;
    projectLinks: string;
    contactInfo: string;
    corpOffice: string;
    siteOffice: string;
    phone: string;
    email: string;
    privacyPolicy: string;
    rightsReserved: string;
    craftedWith: string;
    disclaimer: string;
  };
  projectDetail: {
    overview: string;
    configurations: string;
    amenities: string;
    location: string;
    floorPlans: string;
    gallery: string;
    downloadBrochure: string;
    scheduleVisit: string;
    requestQuote: string;
    developerInfo: string;
    verifiedInfoNote: string;
  };
}

export const translations: Record<'en' | 'hi', TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Ongoing Projects",
      completedProjects: "Completed Projects",
      amenities: "Amenities",
      floorPlans: "Floor Plans",
      gallery: "Gallery",
      contact: "Contact Us",
      enquireNow: "Enquire Now",
      mukundraPrime: "Mukundra Prime",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      tagline: "BUILDERS & DEVELOPERS • KOTA",
      titleLine1: "Building Spaces.",
      titleLine2: "Creating Legacies.",
      subtitle: "Thoughtfully designed spaces. Trusted development. A better way to experience modern living in Kota, Rajasthan.",
      exploreBtn: "Explore Our Projects",
      enquireBtn: "Enquire Now",
      featuredBadge: "FEATURED PROJECT – MUKUNDRA PRIME",
      locationBadge: "RAIPURA, KOTA, RAJASTHAN",
      quickStatsConfig: "1, 2 & 3 BHK Luxury Residences",
      quickStatsLocation: "Prime Raipura Enclave",
      quickStatsRoad: "100 Feet Wide Access Road",
    },
    offers: {
      tickerText: "🔥 OWN YOUR DREAM HOME STARTING AT JUST ₹15 LAKHS* • BOOKING FROM ONLY ₹51,000/- • SAVE UP TO ₹1,80,000/- WITH PMAY SUBSIDY • BUMPER OFFER: FULLY FURNISHED APARTMENT WITH MODULAR KITCHEN AT ZERO EXTRA COST • 90% HOME LOAN AVAILABLE • RERA & UIT APPROVED • LOCATED ON 100 FT. ROAD NEAR 200 BIGHA HERBAL PARK & ALLEN CAREER INSTITUTE",
      startingPriceTitle: "Affordable Luxury",
      startingPriceVal: "Starting at ₹15 Lakhs*",
      startingPriceDesc: "Smart city living at an affordable price in Kota's fastest-developing growth corridor.",
      bookingTitle: "Easy Booking",
      bookingVal: "Booking at Just ₹51,000/-",
      bookingDesc: "Reserve your chosen residential unit today with minimal upfront capital.",
      pmayTitle: "PMAY Govt. Subsidy",
      pmayVal: "Save up to ₹1,80,000/-",
      pmayDesc: "Substantial interest subsidy benefits under the Pradhan Mantri Awas Yojana scheme.",
      kitchenTitle: "Bumper Inaugural Offer",
      kitchenDesc: "Fully furnished apartment with designer modular kitchen at no additional cost (limited period offer).",
      loanTitle: "Home Loan Assistance",
      loanVal: "Up to 90% Loan Available",
      loanDesc: "Hassle-free loan approvals from SBI, ICICI Bank, Axis Bank, Bank of Baroda, Union Bank & Kotak.",
      parkTitle: "200 Bigha Herbal Park",
      parkDesc: "Direct proximity to Rajasthan's largest 200-Bigha botanical and herbal reserve for pristine wellness.",
      reraBadge: "RERA APPROVED",
      uitBadge: "UIT APPROVED",
      bankPartnersTitle: "Approved Banking Partners (Up to 90% Loan)",
    },
    about: {
      badge: "ABOUT DEEPPURA GROUP",
      headline: "Building Trust Through Thoughtful Development",
      subheading: "A dedicated real estate brand delivering enduring quality and architectural excellence in Kota.",
      p1: "DEEPPURA GROUP stands as a cornerstone of reliability and architectural vision in the real estate landscape of Kota, Rajasthan. Under the esteemed leadership of Founder & Director Prakash Jain (Deeppura), the group focuses on creating thoughtfully planned residential spaces that harmonize modern lifestyle conveniences with lasting structural integrity.",
      p2: "Every project undertaken by DEEPPURA GROUP embodies our uncompromising commitment to honest construction practices, clear client communication, and meticulous attention to living comfort. By choosing prime locations with broad infrastructural connectivity, we ensure that every home we craft becomes a valued family asset for generations.",
      p3: "Mukundra Infra Projects Pvt. Ltd. was incorporated in the year 2011 by Mr. Prakash Jain (Deeppura), a first-generation visionary entrepreneur & Director. Over the past decade, the company has grown into one of Hadoti region's premier developers with over 6.5 lakh sq.ft of executable projects across 78 bigha of land, and over 5.1 lakh sq.ft of delivered residential and farmhouse developments.",
      statsAreaInHand: "6,50,000+ sq.ft",
      statsLandSpan: "78 Bigha",
      statsDelivered: "5,10,000+ sq.ft",
      statsFounded: "Est. 2011",
      founderTitle: "Founder & Chairman",
      founderName: "Mr. Prakash Jain (Deeppura)",
      directorTitle: "Founder & Director",
      directorName: "Prakash Jain (Deeppura)",
      directorQuote: "Our mission is simple: to build with integrity, design with purpose, and create homes that stand as testaments of trust for the families of Kota.",
      pillar1Title: "Architectural Integrity",
      pillar1Desc: "Every residence is engineered with superior spatial planning, abundant natural light, and cross-ventilation.",
      pillar2Title: "Prime Strategic Locations",
      pillar2Desc: "Selected on wide arterial corridors with immediate proximity to Kota's premier schools, hospitals, and transit hubs.",
      pillar3Title: "Transparent Relationships",
      pillar3Desc: "Open dialogue, accurate technical documentation, and long-term commitment to client satisfaction at every phase.",
      learnMoreBtn: "Learn More About Our Vision",
    },
    featuredProject: {
      badge: "FLAGSHIP RESIDENTIAL DEVELOPMENT",
      title: "Mukundra Prime",
      developerLabel: "Project Developer",
      developerName: "Mukundra Infra Project Private Limited",
      statusLabel: "Project Status",
      statusVal: "Ongoing Development",
      locationLabel: "Location",
      locationVal: "Raipura, Kota, Rajasthan",
      description: "Mukundra Prime is an ongoing residential development by Mukundra Infra Project Private Limited, offering thoughtfully planned 1 BHK, 2 BHK and 3 BHK residential configurations in Kota, Rajasthan. Situated along a wide 100-feet road near Decent School, it redefines comfortable family living with world-class community amenities.",
      btnExplore: "Explore Project Details",
      btnFloorPlans: "View Floor Plans",
      btnBrochure: "Download Brochure",
      btnEnquire: "Request Pricing",
      configurations: "1 BHK, 2 BHK, 3 BHK & 3 BHK Deluxe Residences",
      keyFeaturesTitle: "Project Highlights & Specifications",
    },
    highlights: {
      badge: "RESIDENTIAL CONFIGURATIONS",
      title: "Designed For Modern Living",
      subtitle: "Select from our range of meticulously planned apartment layouts tailored to your family's needs.",
      bhk1Title: "1 BHK Standard Residences",
      bhk1Desc: "Smart, efficient living with a bright master bedroom, expansive living-dining hall, modular kitchen utility, and dedicated private balcony.",
      bhk2Title: "2 BHK Standard Residences",
      bhk2Desc: "The ideal balance of personal privacy and family gathering space, featuring two spacious bedrooms, dual bathrooms, and twin balconies.",
      bhk3Title: "3 BHK Standard Residences",
      bhk3Desc: "Generous multi-generational floor plans featuring three comfortable bedrooms, multiple balconies, open living hall, and dedicated foyer.",
      bhk3DeluxeTitle: "3 BHK Deluxe Residences",
      bhk3DeluxeDesc: "Exclusive corner-facing suites boasting three-side ventilation, expansive sun terraces, master en-suite bath, and royal entrance foyer.",
      requestPricingBtn: "Request Pricing & Details",
    },
    amenities: {
      badge: "LIFESTYLE & RECREATION",
      title: "Comprehensive Community Amenities",
      subtitle: "Carefully curated amenities confirmed in the official project brochure to enrich daily family life.",
      viewAllBtn: "View All Amenities",
    },
    completed: {
      badge: "PORTFOLIO OF EXCELLENCE",
      title: "Completed Projects",
      subtitle: "A testament to our established track record of delivered residential landmarks across Kota, Rajasthan.",
      status: "Completed Landmark",
      viewPortfolioBtn: "Explore Our Portfolio",
    },
    gallery: {
      badge: "VISUAL SHOWCASE",
      title: "Architectural & Lifestyle Gallery",
      subtitle: "Immerse yourself in the exterior elevations, interior spaces, lifestyle amenities, and floor plans.",
      all: "All Visuals",
      exterior: "Exterior Renders",
      interior: "Interiors",
      floorPlans: "Floor Plans",
      amenities: "Amenities",
      completedProjects: "Completed Works",
      viewFullBtn: "View Full Gallery",
    },
    enquiry: {
      badge: "CONNECT WITH OUR SALES DESK",
      title: "Find Your Space at Mukundra Prime",
      subtitle: "Share your requirements to receive confirmed floor plans, pricing estimates, and schedule a private site visit.",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      phone: "Mobile Number",
      phonePlaceholder: "10-digit mobile number",
      email: "Email Address",
      emailPlaceholder: "yourname@example.com",
      interestedIn: "Interested In",
      selectConfig: "Select Configuration",
      opt1Bhk: "1 BHK Residence",
      opt2Bhk: "2 BHK Residence",
      opt3Bhk: "3 BHK Residence",
      optNotDecided: "Not Decided / General Enquiry",
      message: "Your Message / Query",
      messagePlaceholder: "Tell us about your requirements, preferred floor or visit timing...",
      submitBtn: "Send Enquiry via WhatsApp",
      submitting: "Opening WhatsApp...",
      whatsappNote: "Your enquiry connects directly with our official booking team via WhatsApp for instant response.",
      privacyNote: "We value your privacy. Your information is securely handled and never shared.",
      scheduleVisit: "Schedule a Site Visit",
    },
    footer: {
      companyDesc: "DEEPPURA GROUP is a distinguished real estate development brand in Kota, Rajasthan, dedicated to creating premium residential environments with uncompromising standards of trust, design, and longevity.",
      quickLinks: "Quick Navigation",
      projectLinks: "Our Projects",
      contactInfo: "Get in Touch",
      corpOffice: "Corporate Office",
      siteOffice: "Site Office",
      phone: "Booking Hotline",
      email: "Official Email",
      privacyPolicy: "Privacy Policy",
      rightsReserved: "All Rights Reserved",
      craftedWith: "DEEPPURA GROUP • Built with Architectural Excellence",
      disclaimer: "Disclaimer: All information, elevations, floor plans, and amenities displayed are as per project approvals and brochure documentation. Prices are provided on official inquiry.",
    },
    projectDetail: {
      overview: "Project Overview",
      configurations: "Apartment Configurations",
      amenities: "Community Amenities",
      location: "Location & Connectivity",
      floorPlans: "Detailed Floor Plans",
      gallery: "Project Gallery",
      downloadBrochure: "Download Official Brochure",
      scheduleVisit: "Schedule Site Visit",
      requestQuote: "Enquire for Price",
      developerInfo: "Developer Credentials",
      verifiedInfoNote: "All project details verified per Mukundra Infra Project Private Limited brochure specifications.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      projects: "जारी परियोजनाएं",
      completedProjects: "पूर्ण परियोजनाएं",
      amenities: "सुविधाएं",
      floorPlans: "फ्लोर प्लान",
      gallery: "गैलरी",
      contact: "संपर्क करें",
      enquireNow: "पूछताछ करें",
      mukundraPrime: "मुकुंदरा प्राइम",
      menu: "मेनू",
      close: "बंद करें",
    },
    hero: {
      tagline: "बिल्डर्स एवं डेवलपर्स • कोटा",
      titleLine1: "सपनों का निर्माण।",
      titleLine2: "विश्वास की पहचान।",
      subtitle: "विचारशीलता से तैयार किए गए घर। भरोसेमंद विकास। कोटा, राजस्थान में आधुनिक आवासीय जीवन का श्रेष्ठ अनुभव।",
      exploreBtn: "परियोजनाएं देखें",
      enquireBtn: "पूछताछ करें",
      featuredBadge: "प्रमुख परियोजना – मुकुंदरा प्राइम",
      locationBadge: "रायपुरा, कोटा, राजस्थान",
      quickStatsConfig: "1, 2 एवं 3 BHK प्रीमियम आवास",
      quickStatsLocation: "रायपुरा मुख्य क्षेत्र",
      quickStatsRoad: "100 फीट चौड़ा संपर्क मार्ग",
    },
    offers: {
      tickerText: "🔥 मात्र ₹15 लाख रुपये में पायें अपने सपनों का घर • बुकिंग मात्र ₹51,000/- से शुरू • सरकारी योजना PMAY के तहत हर फ्लैट पर ₹1,80,000/- तक की छूट! • धमाका ऑफर: फुली फर्निश्ड फ्लैट मॉड्यूलर किचन के साथ बिना किसी अतिरिक्त खर्च • 90% तक लोन सुविधा उपलब्ध • RERA एवं UIT अप्रूव्ड • 100 फीट सड़क, 200 बीघा हर्बल पार्क एवं एलन इंस्टीट्यूट के नजदीक",
      startingPriceTitle: "किफायती विलासिता",
      startingPriceVal: "मात्र ₹15 लाख से शुरू*",
      startingPriceDesc: "स्मार्ट सिटी कोटा के तेजी से डेवलप होते क्षेत्र में लीजिए अपना घर, वो भी अफोर्डेबल दाम में।",
      bookingTitle: "आसान बुकिंग",
      bookingVal: "बुकिंग मात्र ₹51,000/- से",
      bookingDesc: "न्यूनतम टोकन राशि के साथ आज ही अपना पसंदीदा फ्लैट आरक्षित करें।",
      pmayTitle: "सरकारी PMAY छूट",
      pmayVal: "₹1,80,000/- तक की बचत",
      pmayDesc: "प्रधानमंत्री आवास योजना के तहत प्रत्येक फ्लैट पर ₹1,80,000/- तक की सीधी छूट।",
      kitchenTitle: "धमाका ऑफर",
      kitchenDesc: "फुली फर्निश्ड फ्लैट मॉड्यूलर किचन के साथ बिना किसी अतिरिक्त खर्च (सीमित समय के लिए)।",
      loanTitle: "होम लोन सुविधा",
      loanVal: "90% तक लोन उपलब्ध",
      loanDesc: "SBI, ICICI Bank, Axis Bank, Bank of Baroda, Union Bank और Kotak Mahindra Bank से त्वरित स्वीकृति।",
      parkTitle: "200 बीघा हर्बल पार्क",
      parkDesc: "राजस्थान के सबसे बड़े 200 बीघा में स्थित हर्बल पार्क के ठीक नजदीक शुद्ध प्राकृतिक वातावरण।",
      reraBadge: "RERA APPROVED",
      uitBadge: "UIT APPROVED",
      bankPartnersTitle: "ऋण स्वीकृत बैंक पार्टनर्स (90% तक लोन सुविधा)",
    },
    about: {
      badge: "दीपपुरा ग्रुप के बारे में",
      headline: "विचारशील विकास के माध्यम से विश्वास का निर्माण",
      subheading: "कोटा में स्थायी गुणवत्ता और वास्तुशिल्प उत्कृष्टता प्रदान करने वाला एक समर्पित रियल एस्टेट ब्रांड।",
      p1: "दीपपुरा ग्रुप (DEEPPURA GROUP) कोटा, राजस्थान के रियल एस्टेट परिदृश्य में विश्वसनीयता और स्थापत्य दृष्टिकोण का एक मजबूत स्तंभ है। संस्थापक एवं निदेशक अनिमेष जैन के प्रतिष्ठित नेतृत्व में, यह समूह ऐसे आवासीय स्थानों के निर्माण पर केंद्रित है जो स्थायी संरचनात्मक मजबूती के साथ आधुनिक जीवनशैली की सुविधाओं का समन्वय करते हैं।",
      p2: "दीपपुरा ग्रुप द्वारा शुरू की गई प्रत्येक परियोजना ईमानदार निर्माण पद्धतियों, स्पष्ट ग्राहक संचार और रहने के आराम पर हमारे अटूट संकल्प को दर्शाती है। विस्तृत ढांचागत संपर्क वाले प्रमुख स्थानों का चयन करके, हम यह सुनिश्चित करते हैं कि हमारा प्रत्येक घर आने वाली पीढ़ियों के लिए एक बहुमूल्य पारिवारिक संपत्ति बने।",
      p3: "मुकुंदरा इंफ्रा प्रोजेक्ट्स प्राइवेट लिमिटेड की स्थापना वर्ष 2011 में प्रथम पीढ़ी के उद्यमी श्री प्रकाश चंद जैन द्वारा निदेशक अनिमेष जैन के साथ की गई थी। आज यह समूह हाड़ौती क्षेत्र के सबसे प्रतिष्ठित डेवलपर्स में से एक है, जिसके पास 78 बीघा भूमि पर 6.5 लाख वर्ग फीट से अधिक की निष्पादन परियोजनाएं हैं तथा 5.1 लाख वर्ग फीट से अधिक आवासीय, ग्रुप हाउसिंग और फार्महाउस सफलतापूर्वक वितरित किए जा चुके हैं।",
      statsAreaInHand: "6,50,000+ वर्ग फीट",
      statsLandSpan: "78 बीघा",
      statsDelivered: "5,10,000+ वर्ग फीट",
      statsFounded: "स्थापना 2011",
      founderTitle: "संस्थापक एवं चेयरमैन",
      founderName: "श्री प्रकाश चंद जैन",
      directorTitle: "संस्थापक एवं निदेशक",
      directorName: "अनिमेष जैन",
      directorQuote: "हमारा उद्देश्य स्पष्ट है: सत्यनिष्ठा के साथ निर्माण करना, उद्देश्यपूर्ण डिजाइन बनाना और कोटा के परिवारों के लिए विश्वास के प्रतीक घर बनाना।",
      pillar1Title: "वास्तुशिल्प अखंडता",
      pillar1Desc: "प्रत्येक आवास बेहतर स्थानिक योजना, प्रचुर प्राकृतिक रोशनी और क्रॉस-वेंटिलेशन के साथ इंजीनियर किया गया है।",
      pillar2Title: "प्रमुख रणनीतिक स्थान",
      pillar2Desc: "कोटा के प्रमुख स्कूलों, अस्पतालों और मुख्य मार्गों से तत्काल निकटता वाले चौड़े मार्गों पर स्थित।",
      pillar3Title: "पारदर्शी संबंध",
      pillar3Desc: "हर चरण में खुला संवाद, सटीक तकनीकी दस्तावेज और ग्राहक संतुष्टि के प्रति दीर्घकालिक प्रतिबद्धता।",
      learnMoreBtn: "हमारे दृष्टिकोण के बारे में और जानें",
    },
    featuredProject: {
      badge: "प्रमुख आवासीय विकास",
      title: "मुकुंदरा प्राइम",
      developerLabel: "प्रोजेक्ट डेवलपर",
      developerName: "मुकुंदरा इंफ्रा प्रोजेक्ट प्राइवेट लिमिटेड",
      statusLabel: "प्रोजेक्ट स्थिति",
      statusVal: "जारी विकास (Ongoing)",
      locationLabel: "स्थान",
      locationVal: "रायपुरा, कोटा, राजस्थान",
      description: "मुकुंदरा प्राइम, मुकुंदरा इंफ्रा प्रोजेक्ट प्राइवेट लिमिटेड द्वारा विकसित की जा रही एक प्रमुख आवासीय परियोजना है, जो कोटा, राजस्थान में विचारपूर्वक नियोजित 1 BHK, 2 BHK और 3 BHK आवास विकल्प प्रदान करती है। डीसेंट स्कूल के पास 100 फीट चौड़ी सड़क पर स्थित, यह विश्व स्तरीय सामुदायिक सुविधाओं के साथ सुखद पारिवारिक जीवन को परिभाषित करती है।",
      btnExplore: "प्रोजेक्ट विवरण देखें",
      btnFloorPlans: "फ्लोर प्लान देखें",
      btnBrochure: "ब्रोशर डाउनलोड करें",
      btnEnquire: "मूल्य पूछताछ करें",
      configurations: "1 BHK, 2 BHK, 3 BHK एवं 3 BHK डीलक्स आवास",
      keyFeaturesTitle: "प्रोजेक्ट की मुख्य विशेषताएं",
    },
    highlights: {
      badge: "आवासीय विन्यास",
      title: "आधुनिक जीवनशैली के लिए डिज़ाइन",
      subtitle: "अपने परिवार की आवश्यकताओं के अनुसार सावधानीपूर्वक नियोजित अपार्टमेंट लेआउट में से चुनें।",
      bhk1Title: "1 BHK स्टैंडर्ड आवास",
      bhk1Desc: "उज्ज्वल मास्टर बेडरूम, विशाल लिविंग-डाइनिंग हॉल, मॉड्यूलर किचन यूटिलिटी और निजी बालकनी के साथ कुशल जीवन।",
      bhk2Title: "2 BHK स्टैंडर्ड आवास",
      bhk2Desc: "व्यक्तिगत गोपनीयता और पारिवारिक जुड़ाव का आदर्श संतुलन, दो विशाल बेडरूम, दो बाथरूम और दो बालकनियों के साथ।",
      bhk3Title: "3 BHK स्टैंडर्ड आवास",
      bhk3Desc: "विशाल फ्लोर प्लान जिसमें तीन आरामदायक बेडरूम, कई बालकनियां, खुला लिविंग हॉल और समर्पित प्रवेश फ़ोयर शामिल हैं।",
      bhk3DeluxeTitle: "3 BHK डीलक्स आवास",
      bhk3DeluxeDesc: "तीन तरफ हवादार लेआउट, बड़े सन टेरेस, मास्टर एन-सूट बाथ और शानदार प्रवेश फ़ोयर वाले विशेष कॉर्नर सुइट्स।",
      requestPricingBtn: "मूल्य एवं विवरण का अनुरोध करें",
    },
    amenities: {
      badge: "जीवनशैली एवं मनोरंजन",
      title: "समग्र सामुदायिक सुविधाएं",
      subtitle: "दैनिक पारिवारिक जीवन को समृद्ध बनाने के लिए आधिकारिक प्रोजेक्ट ब्रोशर में पुष्ट सुविधाएं।",
      viewAllBtn: "सभी सुविधाएं देखें",
    },
    completed: {
      badge: "उत्कृष्टता का प्रमाण",
      title: "पूर्ण परियोजनाएं",
      subtitle: "कोटा, राजस्थान में सफलतापूर्वक वितरित किए गए आवासीय स्थलों का हमारा स्थापित ट्रैक रिकॉर्ड।",
      status: "सफलतापूर्वक पूर्ण",
      viewPortfolioBtn: "हमारा पोर्टफोलियो देखें",
    },
    gallery: {
      badge: "विजुअल शोकेस",
      title: "वास्तुशिल्प एवं जीवनशैली गैलरी",
      subtitle: "एक्सटीरियर एलिवेशन, इंटीरियर स्पेस, लाइफस्टाइल सुविधाओं और फ्लोर प्लान का अनुभव करें।",
      all: "सभी दृश्य",
      exterior: "एक्सटीरियर रेंडर",
      interior: "इंटीरियर्स",
      floorPlans: "फ्लोर प्लान",
      amenities: "सुविधाएं",
      completedProjects: "पूर्ण कार्य",
      viewFullBtn: "पूरी गैलरी देखें",
    },
    enquiry: {
      badge: "हमारे बिक्री डेस्क से संपर्क करें",
      title: "मुकुंदरा प्राइम में अपना आशियाना चुनें",
      subtitle: "सत्यापित फ्लोर प्लान, मूल्य अनुमान प्राप्त करने और साइट विजिट का समय निर्धारित करने के लिए विवरण साझा करें।",
      fullName: "पूरा नाम",
      fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
      phone: "मोबाइल नंबर",
      phonePlaceholder: "10-अंकीय मोबाइल नंबर",
      email: "ईमेल पता",
      emailPlaceholder: "yourname@example.com",
      interestedIn: "रुचि का विन्यास",
      selectConfig: "विन्यास चुनें",
      opt1Bhk: "1 BHK आवास",
      opt2Bhk: "2 BHK आवास",
      opt3Bhk: "3 BHK आवास",
      optNotDecided: "अनिर्णित / सामान्य पूछताछ",
      message: "आपका संदेश / प्रश्न",
      messagePlaceholder: "अपनी आवश्यकता, पसंदीदा मंजिल या विजिट का समय बताएं...",
      submitBtn: "व्हाट्सएप द्वारा पूछताछ भेजें",
      submitting: "व्हाट्सएप खोला जा रहा है...",
      whatsappNote: "त्वरित प्रतिक्रिया के लिए आपकी पूछताछ व्हाट्सएप के माध्यम से सीधे हमारी आधिकारिक बुकिंग टीम से जुड़ती है।",
      privacyNote: "हम आपकी गोपनीयता का सम्मान करते हैं। आपकी जानकारी सुरक्षित रखी जाती है।",
      scheduleVisit: "साइट विजिट शेड्यूल करें",
    },
    footer: {
      companyDesc: "दीपपुरा ग्रुप (DEEPPURA GROUP) कोटा, राजस्थान का एक प्रतिष्ठित रियल एस्टेट ब्रांड है, जो विश्वास, डिजाइन और दीर्घायु के असंगत मानकों के साथ प्रीमियम आवासीय वातावरण बनाने के लिए समर्पित है।",
      quickLinks: "त्वरित नेविगेशन",
      projectLinks: "हमारी परियोजनाएं",
      contactInfo: "संपर्क विवरण",
      corpOffice: "कॉर्पोरेट कार्यालय",
      siteOffice: "साइट कार्यालय",
      phone: "बुकिंग हेल्पलाइन",
      email: "आधिकारिक ईमेल",
      privacyPolicy: "गोपनीयता नीति",
      rightsReserved: "सर्वाधिकार सुरक्षित",
      craftedWith: "दीपपुरा ग्रुप • वास्तुशिल्प उत्कृष्टता के साथ निर्मित",
      disclaimer: "अस्वीकरण: प्रदर्शित सभी जानकारी, एलिवेशन, फ्लोर प्लान और सुविधाएं प्रोजेक्ट अनुमोदन और ब्रोशर दस्तावेजों के अनुसार हैं। आधिकारिक पूछताछ पर मूल्य उपलब्ध कराया जाता है।",
    },
    projectDetail: {
      overview: "प्रोजेक्ट अवलोकन",
      configurations: "अपार्टमेंट विन्यास",
      amenities: "सामुदायिक सुविधाएं",
      location: "स्थान एवं कनेक्टिविटी",
      floorPlans: "विस्तृत फ्लोर प्लान",
      gallery: "प्रोजेक्ट गैलरी",
      downloadBrochure: "आधिकारिक ब्रोशर डाउनलोड करें",
      scheduleVisit: "साइट विजिट शेड्यूल करें",
      requestQuote: "मूल्य पूछताछ करें",
      developerInfo: "डेवलपर साख",
      verifiedInfoNote: "सभी प्रोजेक्ट विवरण मुकुंदरा इंफ्रा प्रोजेक्ट प्राइवेट लिमिटेड ब्रोशर विनिर्देशों के अनुसार सत्यापित हैं।",
    },
  },
};

