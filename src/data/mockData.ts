import { Property, Agent, BlogPost } from '../types';
import heroHouseImg from '../assets/images/nexhomy_hero_house_1787813211072.jpg';
import nordicVillaImg from '../assets/images/villa_nordic_estate_1787813236358.jpg';
import glassLoftImg from '../assets/images/modern_glass_loft_1787813249441.jpg';

export const propertiesData: Property[] = [
  {
    id: 'prop-1',
    title: 'Functional Operational University Campus – Sagamu-Ijebu Ode Expressway',
    tagline: '305-Acre Fully Operational University with NUC Accreditation, C of O & Active Student Body',
    type: 'Commercial',
    status: 'Buy',
    price: 25000000000,
    priceFormatted: '₦25,000,000,000',
    location: 'Sagamu-Ijebu Ode Expressway, Ogun State',
    city: 'Ogun State',
    country: 'Nigeria',
    address: 'Sagamu-Ijebu Ode Expressway Corridor, Ogun State, Nigeria',
    beds: 24,
    baths: 20,
    sqft: 13285800,
    landSize: '305 Acres',
    yearBuilt: 2012,
    videoUrl: 'https://drive.google.com/file/d/13HlyvmwpdU-OjVukF83H58vzQFP_7746/view?usp=drivesdk',
    image: 'https://i.ibb.co/CK4jNSBV/IMG-20260827-WA0009.jpg',
    gallery: [
      'https://i.ibb.co/CK4jNSBV/IMG-20260827-WA0009.jpg',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 RUSH NOW: Functional and operational existing University for sale along Sagamu-Ijebu Ode Expressway, Ogun State. Fully functional university with active students on board and full NUC-accredited degree courses running across two active faculties. Sited on a colossal 305 Acres of prime institutional land. Began operations in 2012 with NUC accreditation done in 2018. Owner retiring due to age with family abroad. Required Procedure: Letter of Intent (LOI) / Offer Letter, Verifiable Proof of Funds (POF), and Company Profile. Ref: Tunde.',
    features: [
      'Total Land Size: 305 Acres on Sagamu-Ijebu Ode Expressway',
      'Full NUC Accreditation & CAC Registered (Began Ops in 2012)',
      'Title Documents: Certificate of Occupancy (C of O), CAC, NUC Approvals',
      'Faculty of Arts, Social & Management Science (8 Key Departments)',
      'Faculty of Pure & Applied Sciences (9 Key Departments)',
      'Active Student Body, Lecture Theatres, Labs & Administrative Blocks',
      'Procedure: LOI/Offer Letter + Verifiable POF + Company Profile',
      'Direct Acquisition Desk (Ref: Tunde) — ₦25 Billion Asking'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Institutional Desk',
      role: 'Commercial & Institutional Assets Lead (Ref: Tunde)',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-2',
    title: 'Prime Residential Property – Olodi Apapa',
    tagline: 'Well Located in a Peaceful Corner of Olodi Apapa, Lagos',
    type: 'Detached Duplex',
    status: 'Buy',
    price: 250000000,
    priceFormatted: '₦250,000,000',
    location: 'Olodi Apapa, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Peaceful Corner Enclave, Olodi Apapa, Lagos, Nigeria',
    beds: 5,
    baths: 5,
    sqft: 4500,
    yearBuilt: 2023,
    image: 'https://cdn.imageurlgenerator.com/uploads/4162a6a6-c79b-4c38-89a8-5a065f760ae5.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/4162a6a6-c79b-4c38-89a8-5a065f760ae5.gif',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 NOW FOR SALE: Prime property for sale in Olodi Apapa, Lagos, Nigeria. Excellently positioned in a peaceful and serene corner with solid accessibility, secure neighborhood environment, and strong residential/commercial investment upside. DM or call for complete information and inspection schedule.',
    features: [
      'Well Located in a Peaceful & Serene Corner',
      'Prime Olodi Apapa Accessibility & Neighborhood Security',
      'Solid Structural Build & Ample Compound Space',
      'High Value Appreciation & Rental Yield Potential',
      'Clean Documentation & Verifiable Title',
      'Asking Price: ₦250 Million Naira',
      'Direct Inquiries & DM: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Lead Apapa & Mainland Broker',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-3',
    title: '4-Bed Fully Detached House with Pool – Walton Gate',
    tagline: 'Ready for Sale at Walton Gate Estate, Sangotedo (Beside Landwey)',
    type: 'Detached Duplex',
    status: 'Buy',
    price: 210000000,
    priceFormatted: '₦210,000,000',
    location: 'Sangotedo, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Walton Gate Estate, Beside Landwey, Sangotedo, Lagos, Nigeria',
    beds: 4,
    baths: 5,
    sqft: 4200,
    yearBuilt: 2024,
    videoUrl: 'https://jumpshare.com/share/1dRycRyP5NdLNvyrTflG',
    image: 'https://cdn.imageurlgenerator.com/uploads/42733e55-65dc-4e8b-a800-d414550e2c2b.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/42733e55-65dc-4e8b-a800-d414550e2c2b.gif',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 READY FOR SALE: Premium 4-Bedroom Fully Detached House with a private Swimming Pool at Walton Gate Estate, Sangotedo, beside Landwey. Impeccably finished with modern architectural aesthetics, spacious stamped-concrete parking area, fully fitted gourmet kitchen, family lounge, and round-the-clock estate security. Direct mandate with pristine documentation.',
    features: [
      '4 En-Suite Bedrooms with Luxury Bath Fixtures',
      'Private Swimming Pool & Sun Deck',
      'Secure Gated Community (Walton Gate Estate, Sangotedo)',
      'Beside Landwey Development Corridor',
      'Fully Fitted Kitchen with Heat Extractor & Microwave',
      'Direct Mandate – Clean Title & Verified Documentation',
      'Price: ₦210 Million Naira',
      'Direct Inquiries & DM: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Lead Luxury & Residential Broker',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-4',
    title: 'Reputable Primary & Secondary School Complex – Ogijo',
    tagline: 'Operational School on Over 3 Plots with WAEC & NECO Approval (300+ Students)',
    type: 'Commercial',
    status: 'Buy',
    price: 200000000,
    priceFormatted: '₦200,000,000',
    location: 'Ogijo, Ogun State',
    city: 'Ogijo',
    country: 'Nigeria',
    address: 'Prime Institutional Belt, Ogijo, Ogun State, Nigeria',
    beds: 18,
    baths: 14,
    sqft: 18500,
    landSize: '3+ Plots',
    yearBuilt: 2016,
    image: 'https://i.ibb.co/N6hfGw3J/IMG-20260827-WA0010.jpg',
    gallery: [
      'https://i.ibb.co/N6hfGw3J/IMG-20260827-WA0010.jpg',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 FOR SALE: A reputable, fully functional, and operational school sitting on more than 3 plots of prime land in Ogijo. Holds valid WAEC and NECO government approvals/accreditations. The school comprises both primary and secondary educational divisions with an active student and pupil population exceeding 300 students. Features complete classroom blocks, science/computer laboratories, administrative wings, staff rooms, and recreation grounds.',
    features: [
      'Land Size: Sits on More Than 3 Plots of Land in Ogijo',
      'Accreditation: Full WAEC & NECO Official Approvals',
      'Active Student Body: 300+ Primary Pupils & Secondary Students',
      'Comprises Both Primary & Secondary Educational Sections',
      'Classroom Blocks, Science/Computer Labs & Administrative Offices',
      'Secure Fenced & Gated Compound with Assembly Grounds',
      'Asking Price: ₦200 Million Naira',
      'Direct Mandate & Inquiries: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Institutional & Commercial Asset Broker',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-5',
    title: 'Fully Functional School Complex – Alimosho',
    tagline: 'Fully Operational School on 594sqm with C of O & Survey Plan in Prime Alimosho',
    type: 'Commercial',
    status: 'Buy',
    price: 250000000,
    priceFormatted: '₦250,000,000',
    location: 'Alimosho, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Prime High-Demand Enclave, Alimosho, Lagos, Nigeria',
    beds: 12,
    baths: 8,
    sqft: 6400,
    landSize: '594 sqm',
    yearBuilt: 2020,
    image: 'https://cdn.imageurlgenerator.com/uploads/d5b6a71e-1fd6-4195-9bbe-bb955837ea70.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/d5b6a71e-1fd6-4195-9bbe-bb955837ea70.gif',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 HOT PROPERTY ALERT: Fully functional, operational school sitting on 594sqm in a prime, high-demand commercial and residential area of Alimosho, Lagos. Equipped with modern classrooms, administrative offices, and verified title documentation (Certificate of Occupancy & Registered Survey Plan). Excellent turnkey high-yield investment ready for immediate continuation.',
    features: [
      'Land Size: 594 sqm in Prime High-Demand Alimosho',
      'Title: Certificate of Occupancy (C of O) & Registered Survey Plan',
      'Fully Operational with Equipped Classrooms & Offices',
      'Modern Educational Facilities – Ready for Immediate Use',
      'High-Yield Educational Investment Asset',
      'Asking Price: ₦250 Million Naira',
      'Video Available on Request: 07086429976',
      'Enquiries & Inspection: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Commercial & Institutional Asset Broker',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-6',
    title: 'Functional Operational Gas Plant – Ilupeju Industrial Estate',
    tagline: 'Outright Sale of 1-Acre Gas Plant with 150MT Storage, 5 Trucks, 12 Offices & 13,000+ Customer Base',
    type: 'Commercial',
    status: 'Buy',
    price: 4500000000,
    priceFormatted: '₦4,500,000,000',
    location: 'Ilupeju, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Industrial Estate Corridor, Ilupeju, Lagos State, Nigeria',
    beds: 12,
    baths: 8,
    sqft: 43560,
    landSize: '1 Acre',
    yearBuilt: 2018,
    videoUrl: 'https://cdn.imageurlgenerator.com/uploads/7f558f6d-d661-46d4-a8d5-de84d445dd29.gif',
    image: 'https://cdn.imageurlgenerator.com/uploads/7f558f6d-d661-46d4-a8d5-de84d445dd29.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/7f558f6d-d661-46d4-a8d5-de84d445dd29.gif',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 FUNCTIONAL AVAILABLE GAS PLANT FOR SALE: Outright sale of all operational assets and established customer base in prime Industrial Estate, Ilupeju, Lagos State. Features 1 full acre of heavy-duty industrial land, double 75MT gas storage tanks (150MT total capacity), 5 dedicated distribution/loading trucks (3 heavy-duty and 2 light-duty trucks), an administrative complex comprising 12 offices and a large executive boardroom, expansive industrial warehouse, and an active retail and commercial client base of over 13,000 loyal customers. Clean Certificate of Occupancy (C of O). Price: ₦4.5 Billion Net. Protocol: Buyer pays logistics before inspection meeting point is arranged to verify financial capability.',
    features: [
      'Land Size: 1 Full Acre in Prime Industrial Estate, Ilupeju',
      'Storage: Double 75MT Gas Storage Tanks (150MT Total Capacity)',
      'Fleet: 5 Loading Distribution Trucks (3 Big, 2 Small)',
      'Admin Complex: 12 Fully Fitted Offices & Executive Boardroom',
      'Large Industrial Storage Warehouse & Gated Perimeter Security',
      'Turnkey Customer Base: Over 13,000 Active Loyal Customers',
      'Title: Clean Certificate of Occupancy (C of O)',
      'Price: ₦4.5 Billion Net (Logistics Required for Inspection Protocol)',
      'Direct Mandate & Enquiries: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Industrial & Energy Desk',
      role: 'Commercial & Industrial Asset Broker',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-7',
    title: 'Well-Built 6-Bedroom Luxury Mansion + 2 BQs',
    tagline: 'Automated 6-Bedroom Smart Mansion with Private Elevator, Cinema, Pool & Gym in Lekki Phase 1',
    type: 'Mansion',
    status: 'Buy',
    price: 1600000000,
    priceFormatted: '₦1,600,000,000',
    location: 'Lekki Phase 1, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Prime Residential Enclave, Lekki Phase 1, Lagos, Nigeria',
    beds: 6,
    baths: 7,
    sqft: 7500,
    landSize: '650 sqm',
    yearBuilt: 2024,
    videoUrl: 'https://cdn.imageurlgenerator.com/uploads/1bec1d60-1174-410e-9c22-15a0c94c990e.gif',
    image: 'https://cdn.imageurlgenerator.com/uploads/1bec1d60-1174-410e-9c22-15a0c94c990e.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/1bec1d60-1174-410e-9c22-15a0c94c990e.gif',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 FOR SALE: A masterpiece well-built 6 Bedroom contemporary mansion with 2 Boys Quarters (BQs) located in a prestigious, high-security gated estate in Lekki Phase 1, Lagos. Features all ensuite bedrooms, double-volume living areas with family lounge, private elevator, dedicated cinema room, fully equipped gym, private swimming pool, smart automation (fingerprint access door, automated curtains, built-in Bluetooth speakers, motion sensor lighting), fully fitted gourmet kitchen with pantry & kitchenette, study room, walk-in closets, outdoor relaxation sit-out, stamped concrete compound, and lush natural & artificial landscaping. Title: Clean Governor’s Consent. Price: ₦1.6 Billion.',
    features: [
      '6 All Ensuite Luxury Bedrooms + 2 Staff Quarters (BQs)',
      '2 Spacious Living Areas & Executive Family Lounge',
      'Private Multi-Floor Elevator & Double Volume Ceilings',
      'Private Cinema Room & Fully Equipped Fitness Gym',
      'Private Swimming Pool, Outdoor Sit-out & Relaxation Lounge',
      'Smart Home: Fingerprint Access Door, Automated Curtains & Bluetooth Speakers',
      'Fully Fitted Gourmet Kitchen, Pantry & Secondary Kitchenette',
      'Dedicated Study / Home Office & Walk-In Wardrobes',
      'LED & Motion Sensor Lighting with Elegant POP Ceilings',
      'Premium Stamped Concrete Flooring with Lush Landscaping',
      'Floor-to-Ceiling Windows & Modern Shower Systems with Bathtub',
      '24/7 Security in a Well-Secured Gated Estate',
      'Title: Clean Governor’s Consent',
      'Price: ₦1.6 Billion | Direct Mandate & Enquiries: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Adeola Balogun',
      role: 'Lead Luxury Broker - Island Specialist',
      phone: '07086429976',
      email: 'adeola.b@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-8',
    title: 'Block of Flats on 3 Floors + 6 Shops – Ago Palace Way, Okota',
    tagline: 'High-Yield Asset: 5 Nos 3-Bed Flats, 1 Mini Flat, 1 Room Self-Con & 6 Shops on 800m² Land',
    type: 'Commercial',
    status: 'Buy',
    price: 430000000,
    priceFormatted: '₦430,000,000 (Neg)',
    location: 'Ago Palace Way, Okota, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Directly off Ago Palace Way, Okota, Lagos State, Nigeria',
    beds: 17,
    baths: 12,
    sqft: 8600,
    landSize: '800 sqm',
    yearBuilt: 2019,
    image: 'https://i.ibb.co/rGJmnHfz/IMG-20260828-WA0000.jpg',
    gallery: [
      'https://i.ibb.co/rGJmnHfz/IMG-20260828-WA0000.jpg',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 AVAILABLE FOR SALE: A solid, high-yield multi-unit block of flats on 3 floors strategically located directly off Ago Palace Way, Okota, Lagos. Sitting on a prime 800m² land parcel with 4 separate staircases for seamless tenant and customer circulation. The property comprises 5 units of 3-Bedroom flats, 1 unit of Mini flat, 1 Room Self-Contained unit, and 6 active street-facing commercial shops. Verified title with Certificate of Occupancy (C of O). Price: ₦430 Million (Negotiable). Immediate multi-stream passive rental income generator.',
    features: [
      'Land Size: 800m² of Prime Commercial & Residential Land',
      '5 Nos 3-Bedroom Flats with Spacious Living Areas',
      '1 Nos 1-Bedroom Mini Flat',
      '1 Nos Room Self-Contained Apartment',
      '6 Nos Commercial Street-Facing Shops with High Foot Traffic',
      '4 Nos Dedicated Concrete Access Staircases on 3 Solid Floors',
      'Strategic Location Directly Off Ago Palace Way, Okota',
      'Title: Clean Certificate of Occupancy (C of O)',
      'Price: ₦430 Million (Negotiable)',
      'Direct Mandate & Inquiries: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Commercial & Multi-Unit Investment Specialist',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-9',
    title: '2 Plots of Prime Commercial Land – Okoko',
    tagline: 'Strategic Commercial Land Directly Facing Badagry Expressway with Clean C of O',
    type: 'Commercial',
    status: 'Buy',
    price: 350000000,
    priceFormatted: '₦350,000,000',
    location: 'Okoko, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Directly Facing Badagry Expressway, Okoko, Lagos State, Nigeria',
    beds: 0,
    baths: 0,
    sqft: 13000,
    landSize: '2 Plots',
    yearBuilt: 2024,
    videoUrl: 'https://cdn.imageurlgenerator.com/uploads/8777f206-ee9e-4f8f-8b5b-0548d99168f4.gif',
    image: 'https://cdn.imageurlgenerator.com/uploads/8777f206-ee9e-4f8f-8b5b-0548d99168f4.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/8777f206-ee9e-4f8f-8b5b-0548d99168f4.gif',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🏡 2 PLOTS OF PRIME COMMERCIAL LAND FOR SALE — OKOKO: Rare prime commercial land opportunity strategically located at Okoko, directly facing the high-traffic Badagry Expressway. Measuring 2 full plots of dry land with verified Certificate of Occupancy (C of O). Supreme commercial visibility and accessibility, making it perfectly suited for commercial plazas, filling stations, corporate offices, logistics hubs, or long-term high-yield capital banking. Asking Price: ₦350 Million.',
    features: [
      'Land Size: 2 Full Plots of Prime Commercial Land',
      'Prime Expressway Frontage: Directly Facing Badagry Expressway',
      'High-Density Commercial Corridor with High Foot & Vehicular Traffic',
      'Ideal for Commercial Plaza, Filling Station, Warehouse or Logistics Hub',
      'Title: Clean Certificate of Occupancy (C of O)',
      'Asking Price: ₦350 Million Naira',
      'High Capital Appreciation & Immediate Commercial Feasibility',
      'Direct Mandate & Inspection Bookings: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Commercial & Prime Land Banking Specialist',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'prop-10',
    title: '1.5 Acres Prime Commercial Land – Apapa-Oshodi Expressway',
    tagline: '1.5 Acres of Strategic Industrial/Commercial Land with C of O Opposite Warehouse Bus Stop',
    type: 'Land',
    status: 'Buy',
    price: 1500000000,
    priceFormatted: '₦1,500,000,000',
    location: 'Apapa-Oshodi Expressway, Lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Opposite Warehouse Bus Stop, Apapa-Oshodi Expressway, Lagos State, Nigeria',
    beds: 0,
    baths: 0,
    sqft: 65340,
    landSize: '1.5 Acres',
    yearBuilt: 2024,
    videoUrl: 'https://cdn.imageurlgenerator.com/uploads/5b035f4b-2dd7-4804-8d39-66149f8a8335.gif',
    image: 'https://cdn.imageurlgenerator.com/uploads/5b035f4b-2dd7-4804-8d39-66149f8a8335.gif',
    gallery: [
      'https://cdn.imageurlgenerator.com/uploads/5b035f4b-2dd7-4804-8d39-66149f8a8335.gif',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1200&q=80'
    ],
    description: '🔥 PRIME COMMERCIAL & LOGISTICS LAND FOR SALE: One and a half (1.5) Acres of prime dry commercial land with verified Certificate of Occupancy (C of O) strategically positioned along the high-traffic Apapa-Oshodi Expressway, directly opposite Warehouse Bus Stop. An exceptional strategic logistics hub asset with wide expressway frontage and unhindered articulated heavy truck access, perfectly suited for container terminals, bonded warehouses, logistics distribution centers, trailer parks, petroleum depots, or manufacturing plants. Price: ₦1.5 Billion.',
    features: [
      'Land Size: 1.5 Acres (Approx. 6,070 sqm) of Prime Dry Commercial Land',
      'Prime Expressway Location: Directly Opposite Warehouse Bus Stop, Apapa-Oshodi Expressway',
      'Wide Road Frontage with Heavy Articulated Container Truck Access & Turnaround',
      'Ideal for Container Terminal, Bonded Logistics Depot, Warehouse, or Industrial Complex',
      'Direct Gateway to Port Logistics Arteries & Industrial Hubs',
      'Title: Clean Certificate of Occupancy (C of O)',
      'Price: ₦1.5 Billion',
      'Direct Mandate & Enquiries: 07086429976'
    ],
    isFeatured: true,
    agent: {
      name: 'Pressmart Direct Sales',
      role: 'Industrial & Port Corridor Specialist',
      phone: '07086429976',
      email: 'enquiries@pressmart.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
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
  'Sagamu-Ijebu Ode Expressway, Ogun State',
  'Olodi Apapa, Lagos',
  'Apapa-Oshodi Expressway, Lagos',
  'Sangotedo, Lagos',
  'Ogijo, Ogun State',
  'Alimosho, Lagos',
  'Ilupeju, Lagos',
  'Ago Palace Way, Okota, Lagos',
  'Okoko, Lagos',
  'Banana Island, Ikoyi',
  'Lekki Phase 1, Lagos',
  'Maitama Diplomatic Zone, Abuja',
  'Eko Atlantic City, Lagos',
  'Guzape Hills, Abuja',
  'Victoria Island, Lagos'
];

export const propertyTypesList = [
  'All Types',
  'Commercial',
  'Land',
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

