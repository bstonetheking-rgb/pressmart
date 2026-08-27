export type PropertyCategory = 
  | 'Waterfront Villa'
  | 'Mansion'
  | 'Detached Duplex'
  | 'Terrace Duplex'
  | 'Penthouse'
  | 'Apartment'
  | 'House'
  | 'Villa'
  | 'Cottage';

export interface Property {
  id: string;
  title: string;
  tagline: string;
  type: PropertyCategory;
  status: 'Buy' | 'Rent' | 'Sold';
  price: number;
  priceFormatted: string;
  pricePerMonth?: string;
  location: string;
  city: string;
  country: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    avatar: string;
  };
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  propertiesCount: number;
  image: string;
  email: string;
  phone: string;
  specialization: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string;
}

export interface SearchFilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  status: 'All' | 'Buy' | 'Rent';
  keyword: string;
}
