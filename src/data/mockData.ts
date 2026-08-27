import { Property, Agent, BlogPost } from '../types';
import heroHouseImg from '../assets/images/nexhomy_hero_house_1787813211072.jpg';
import nordicVillaImg from '../assets/images/villa_nordic_estate_1787813236358.jpg';
import glassLoftImg from '../assets/images/modern_glass_loft_1787813249441.jpg';

export const propertiesData: Property[] = [
  {
    id: 'prop-1',
    title: 'The Lagoon Crest Waterfront Villa',
    tagline: 'Ultra-Modern Architectural Haven with Private Jetty & Lagoon Panorama',
    type: 'Waterfront Villa',
    status: 'Buy',
    price: 1850000000,
    priceFormatted: '₦1,850,000,000',
    location: 'Banana Island, Ikoyi',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Zone A, Close 4, Banana Island, Ikoyi, Lagos',
    beds: 5,
    baths: 6,
    sqft: 6200,
    yearBuilt: 2024,
    image: heroHouseImg,
    gallery: [
      heroHouseImg,
      nordicVillaImg,
      glassLoftImg,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An exceptional contemporary masterpiece in the most prestigious private enclave in West Africa. Features Italian marble flooring, double-height living spaces, floor-to-ceiling soundproof thermal glazing, fully integrated solar inverter backup, 2-room BQ, and a private boat jetty on the Lagos Lagoon.',
    features: [
      'Private Boat Jetty & Lagoon Frontage',
      'Certificate of Occupancy (C of O) & Governor’s Consent',
      '24/7 Uninterrupted Independent Power Supply',
      'Double-Volume Living Room with Smart Automation',
      'Infinity Pool Overlooking the Lagoon',
      'Industrial Water Filtration Plant & 2-Room BQ'
    ],
    isFeatured: true,
    agent: {
      name: 'Adeola Balogun',
      role: 'Lead Luxury Broker - Island Specialist',
      phone: '+234 803 245 8890',
      email: 'adeola.b@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-2',
    title: 'The Diplomatic Glass Manor',
    tagline: 'Magnificent Contemporary Hilltop Estate with Panoramic City Skyline',
    type: 'Mansion',
    status: 'Buy',
    price: 2600000000,
    priceFormatted: '₦2,600,000,000',
    location: 'Maitama Diplomatic Zone, Abuja',
    city: 'Abuja',
    country: 'Nigeria',
    address: '14 Ibrahim Babangida Boulevard, Maitama, Abuja',
    beds: 6,
    baths: 7,
    sqft: 8500,
    yearBuilt: 2024,
    image: nordicVillaImg,
    gallery: [
      nordicVillaImg,
      heroHouseImg,
      glassLoftImg,
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Commanding an elevated position in Abuja’s prime diplomatic corridor, this architect-designed residence combines bespoke cantilevered glass balconies, a climate-controlled 12-seater private cinema, heated pool, 8-car subterranean garage, and state-of-the-art multi-tier biometric security.',
    features: [
      'Federal C of O with Clean Title Record',
      'Dedicated 12-Seat Dolby Atmos Cinema',
      'Commercial Otis Elevator Across All 3 Levels',
      'Chef’s Show Kitchen & Industrial Wet Kitchen',
      'Heated Olympic-Grade Lap Pool & Rooftop Terrace',
      'Bullet-Resistant Armored Glazing & MOPOL Guard House'
    ],
    isFeatured: true,
    agent: {
      name: 'Zainab Abubakar',
      role: 'Head of Diplomatic & Northern Estates',
      phone: '+234 809 555 3120',
      email: 'zainab.a@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-3',
    title: 'The Aurelia Contemporary Duplex',
    tagline: 'Modern 5-Bedroom Fully Detached Duplex with Swimming Pool & Cinema',
    type: 'Detached Duplex',
    status: 'Buy',
    price: 780000000,
    priceFormatted: '₦780,000,000',
    location: 'Lekki Phase 1, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Admiralty Way Enclave, Lekki Phase 1, Lagos',
    beds: 5,
    baths: 5,
    sqft: 4800,
    yearBuilt: 2023,
    image: glassLoftImg,
    gallery: [
      glassLoftImg,
      nordicVillaImg,
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed for effortless coastal living in Lekki Phase 1, this brand-new smart detached duplex offers premium Turkish finishings, open-concept chef kitchen with Bosch appliances, rooftop lounge, private elevator, swimming pool, and fully automated lighting and climate control.',
    features: [
      'Lagos State Governor’s Consent Title',
      'Integrated Control4 Smart Home Automation',
      'Private Swimming Pool with Water Cascade',
      'Spacious Stamped Concrete Compound (6 Cars)',
      'Ensuite Penthouse Master Suite with Jacuzzi',
      'Dedicated Transformer & Synchronized Generator Set'
    ],
    isFeatured: true,
    agent: {
      name: 'Adeola Balogun',
      role: 'Lead Luxury Broker - Island Specialist',
      phone: '+234 803 245 8890',
      email: 'adeola.b@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-4',
    title: 'Oceanview Atlantic Triplex Penthouse',
    tagline: 'Signature Sky Mansion with 360-Degree Views of the Atlantic Ocean',
    type: 'Penthouse',
    status: 'Rent',
    price: 45000000,
    priceFormatted: '₦45,000,000/yr',
    pricePerMonth: '₦3,750,000 / month',
    location: 'Eko Atlantic City, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Marina District Tower 1, Eko Atlantic, Victoria Island Extension',
    beds: 4,
    baths: 4.5,
    sqft: 5400,
    yearBuilt: 2024,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience Africa’s most ambitious shoreline in this ultra-exclusive triplex penthouse. Direct keyed elevators, double-volume glass walls overlooking the Atlantic Ocean, private rooftop sky pool, bespoke German cabinetry, and 24/7 world-class city infrastructure.',
    features: [
      'Direct Keyed Private Elevator',
      'Rooftop Sky Jacuzzi & Sunset Deck',
      'Independent Eko Atlantic City Power Grid',
      '24/7 Concierge & Helipad Access'
    ],
    isFeatured: false,
    agent: {
      name: 'Emeka Nnamdi',
      role: 'Director of Prime Capital & Coastal Assets',
      phone: '+234 812 770 1944',
      email: 'emeka.n@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-5',
    title: 'The Parkview Luxury Terraces',
    tagline: 'Modern 4-Bedroom Serviced Terrace in Serene Gated Estate',
    type: 'Terrace Duplex',
    status: 'Rent',
    price: 25000000,
    priceFormatted: '₦25,000,000/yr',
    pricePerMonth: '₦2,080,000 / month',
    location: 'Victoria Island, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Kofo Abayomi Street, Victoria Island, Lagos',
    beds: 4,
    baths: 4,
    sqft: 3200,
    yearBuilt: 2023,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Prime executive residence situated in the heart of Victoria Island’s commercial and cultural hub. Fully serviced with 24-hour electricity, high-speed fiber internet, clubhouse gym, communal swimming pool, and tight gated security.',
    features: [
      'Fully Serviced with 24/7 Power Guaranteed',
      'Communal Swimming Pool & Fitness Gym',
      'Dedicated 2-Car Parking per Unit',
      'Close Proximity to Prime Embassies & Financial HQs'
    ],
    isFeatured: false,
    agent: {
      name: 'Adeola Balogun',
      role: 'Lead Luxury Broker - Island Specialist',
      phone: '+234 803 245 8890',
      email: 'adeola.b@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-6',
    title: 'Guzape Hilltop Architectural Sanctuary',
    tagline: 'Terraced Modern Villa with Infinity Pool & Valley Views',
    type: 'Mansion',
    status: 'Buy',
    price: 1450000000,
    priceFormatted: '₦1,450,000,000',
    location: 'Guzape Hills, Abuja',
    city: 'Abuja',
    country: 'Nigeria',
    address: 'Guzape Diplomatic Crest, Asokoro Extension, Abuja',
    beds: 5,
    baths: 6,
    sqft: 6100,
    yearBuilt: 2024,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched upon the hills of Guzape overlooking the Federal Capital Territory, this dramatic architectural residence incorporates cantilevered steel structures, native stone accents, infinity edge swimming pool, expansive barbecue terrace, and integrated smart solar energy.',
    features: [
      'Federal Capital Territory Clean C of O',
      'Panoramic 270-Degree Abuja Valley Vistas',
      'Cantilevered Infinity Edge Pool & Sun Deck',
      'Independent 30kVA Solar Hybrid Microgrid',
      '2-Room Staff Quarters & Gatehouse Security Post'
    ],
    isFeatured: true,
    agent: {
      name: 'Zainab Abubakar',
      role: 'Head of Diplomatic & Northern Estates',
      phone: '+234 809 555 3120',
      email: 'zainab.a@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  }
];

export const agentsData: Agent[] = [
  {
    id: 'agent-1',
    name: 'Adeola Balogun',
    role: 'Lead Luxury Broker - Island Specialist',
    experience: '11+ Years Experience',
    rating: 4.98,
    reviewsCount: 174,
    propertiesCount: 42,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    email: 'adeola.b@pressmart.ng',
    phone: '+234 803 245 8890',
    specialization: 'Banana Island, Ikoyi & Lekki Waterfronts',
    bio: 'Adeola specializes in high-net-worth acquisitions across Banana Island, Ikoyi, and Lekki Phase 1, with unmatched expertise in Governor’s Consent verification and private off-market waterfront deals.'
  },
  {
    id: 'agent-2',
    name: 'Emeka Nnamdi',
    role: 'Director of Prime Capital & Coastal Assets',
    experience: '15+ Years Experience',
    rating: 4.97,
    reviewsCount: 236,
    propertiesCount: 68,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    email: 'emeka.n@pressmart.ng',
    phone: '+234 812 770 1944',
    specialization: 'Eko Atlantic City, Commercial & Off-Plan Assets',
    bio: 'Renowned for advising institutional investors, diaspora buyers, and family offices in prime commercial land banking, Eko Atlantic towers, and large-scale residential developments.'
  },
  {
    id: 'agent-3',
    name: 'Zainab Abubakar',
    role: 'Head of Diplomatic & Northern Estates',
    experience: '12+ Years Experience',
    rating: 4.99,
    reviewsCount: 198,
    propertiesCount: 51,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    email: 'zainab.a@pressmart.ng',
    phone: '+234 809 555 3120',
    specialization: 'Maitama, Guzape & Asokoro Luxury Mansions',
    bio: 'Zainab guides diplomatic missions, corporate executives, and private buyers in securing Abuja’s most prestigious hilltops, diplomatic residences, and luxury residential estates.'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Governor’s Consent vs C of O: Crucial Land Title Verification in Nigerian Real Estate',
    category: 'Title & Legal Guide',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    author: {
      name: 'Adeola Balogun',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: nordicVillaImg,
    excerpt: 'Understand the legal distinctions between a Certificate of Occupancy (C of O), Governor’s Consent, and Gazette when acquiring prime land and homes in Lagos.',
    content: `Title verification remains the single most critical step in securing Nigerian real estate investments. While a Certificate of Occupancy (C of O) grants first-instance state leasehold rights, any subsequent transfer requires formal Governor’s Consent under the Land Use Act.

At Pressmart Real Estate Services, our specialized legal registry search protocol ensures every property in our portfolio has an unencumbered, verifiable root of title at Alausa or Abuja GIS before being listed.`
  },
  {
    id: 'blog-2',
    title: 'Why Banana Island & Eko Atlantic City Remain West Africa’s Top Wealth Preservers',
    category: 'Market Trends',
    date: 'Feb 02, 2026',
    readTime: '5 min read',
    author: {
      name: 'Emeka Nnamdi',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    },
    image: glassLoftImg,
    excerpt: 'An analysis of dollarized rental yields, independent utility grids, and long-term capital appreciation in Lagos’s prime coastal enclaves.',
    content: `As discerning Nigerian and diaspora investors seek reliable hedges against inflation, luxury property in Banana Island and Eko Atlantic City continues to generate high capital appreciation and double-digit rental yields.

With dedicated 24/7 power, private water reclamation, integrated security, and beachfront zoning, these master-planned enclaves offer world-standard living with exceptional liquidity.`
  },
  {
    id: 'blog-3',
    title: 'Off-Plan Luxury Purchases in Lekki & Ikoyi: How to Secure the Best Entry Prices',
    category: 'Investment Strategy',
    date: 'Feb 18, 2026',
    readTime: '4 min read',
    author: {
      name: 'Zainab Abubakar',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: heroHouseImg,
    excerpt: 'How milestone-based payment plans and vetting Tier-1 developers can yield 30-45% equity appreciation upon building delivery in Lagos and Abuja.',
    content: `Investing during the foundation or off-plan phase allows astute buyers to lock in below-market pricing with flexible 12 to 24-month payment milestones.

Learn our 5-point due diligence checklist for vetting developer track records, construction escrow protections, and architectural delivery standards.`
  }
];

export const locationsList = [
  'All Locations',
  'Banana Island, Ikoyi',
  'Lekki Phase 1, Lagos',
  'Maitama Diplomatic Zone, Abuja',
  'Eko Atlantic City, Lagos',
  'Guzape Hills, Abuja',
  'Victoria Island, Lagos'
];

export const propertyTypesList = [
  'All Types',
  'Waterfront Villa',
  'Mansion',
  'Detached Duplex',
  'Terrace Duplex',
  'Penthouse'
];

export const priceRangesList = [
  'All Prices',
  'Under ₦300 Million',
  '₦300M - ₦800 Million',
  '₦800M - ₦1.8 Billion',
  '₦1.8 Billion+'
];

