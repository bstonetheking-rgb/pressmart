import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Property, SearchFilterState, PropertyCategory } from '../types';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Heart,
  Calculator,
  ArrowUpDown,
  Grid,
  List as ListIcon,
  X,
  Check,
  Building2,
  ShieldCheck,
  Eye,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

interface PropertiesPageProps {
  properties: Property[];
  filters: SearchFilterState;
  onFilterChange: React.Dispatch<React.SetStateAction<SearchFilterState>>;
  onSelectProperty: (property: Property) => void;
  savedPropertyIds: string[];
  onToggleSave: (id: string) => void;
  onOpenMortgage: (property: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
  savedPropertyIds,
  onToggleSave,
  onOpenMortgage
}) => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'beds'>('featured');
  const [selectedBeds, setSelectedBeds] = useState<number | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>(filters.location || 'All');
  const [selectedType, setSelectedType] = useState<string>(filters.propertyType || 'All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Buy' | 'Rent'>(filters.status || 'All');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>(filters.priceRange || 'All');
  const [searchTerm, setSearchTerm] = useState<string>(filters.keyword || '');

  const locations = [
    'All',
    'Banana Island, Ikoyi',
    'Ikoyi, Lagos',
    'Victoria Island, Lagos',
    'Lekki Phase 1, Lagos',
    'Eko Atlantic City, Lagos',
    'Maitama Diplomatic Zone, Abuja',
    'Guzape Hills, Abuja',
    'Asokoro, Abuja'
  ];

  const propertyTypes: (string | PropertyCategory)[] = [
    'All',
    'Waterfront Villa',
    'Mansion',
    'Detached Duplex',
    'Terrace Duplex',
    'Penthouse',
    'Apartment'
  ];

  const priceTiers = [
    'All',
    'Under ₦300 Million',
    '₦300M - ₦800 Million',
    '₦800M - ₦1.8 Billion',
    '₦1.8 Billion+'
  ];

  // Filter and sort logic
  const filteredProperties = useMemo(() => {
    return properties
      .filter((prop) => {
        // Status filter
        if (selectedStatus !== 'All' && prop.status !== selectedStatus) return false;

        // Location filter
        if (selectedLocation !== 'All') {
          if (!prop.location.toLowerCase().includes(selectedLocation.toLowerCase().split(',')[0].trim())) {
            return false;
          }
        }

        // Type filter
        if (selectedType !== 'All' && prop.type !== selectedType) return false;

        // Bedrooms filter
        if (selectedBeds !== 'all' && prop.beds < selectedBeds) return false;

        // Price range filter
        if (selectedPriceTier !== 'All') {
          if (selectedPriceTier === 'Under ₦300 Million' && prop.price > 300000000) return false;
          if (selectedPriceTier === '₦300M - ₦800 Million' && (prop.price < 300000000 || prop.price > 800000000)) return false;
          if (selectedPriceTier === '₦800M - ₦1.8 Billion' && (prop.price < 800000000 || prop.price > 1800000000)) return false;
          if (selectedPriceTier === '₦1.8 Billion+' && prop.price < 1800000000) return false;
        }

        // Search Term
        if (searchTerm.trim()) {
          const query = searchTerm.toLowerCase();
          const matchesTitle = prop.title.toLowerCase().includes(query);
          const matchesLocation = prop.location.toLowerCase().includes(query);
          const matchesDesc = prop.description.toLowerCase().includes(query);
          const matchesCity = prop.city.toLowerCase().includes(query);
          if (!matchesTitle && !matchesLocation && !matchesDesc && !matchesCity) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'beds') return b.beds - a.beds;
        // Default featured
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [properties, selectedStatus, selectedLocation, selectedType, selectedBeds, selectedPriceTier, searchTerm, sortBy]);

  const handleResetFilters = () => {
    setSelectedLocation('All');
    setSelectedType('All');
    setSelectedStatus('All');
    setSelectedPriceTier('All');
    setSelectedBeds('all');
    setSearchTerm('');
    onFilterChange({
      location: '',
      propertyType: '',
      priceRange: '',
      status: 'All',
      keyword: ''
    });
  };

  const hasActiveFilters =
    selectedLocation !== 'All' ||
    selectedType !== 'All' ||
    selectedStatus !== 'All' ||
    selectedPriceTier !== 'All' ||
    selectedBeds !== 'all' ||
    searchTerm.trim() !== '';

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Top Header & Breadcrumbs */}
      <div className="bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">Properties Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#FDD835] mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Nigerian Titles (C of O / Governor’s Consent)
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Luxury Real Estate Portfolio
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mt-1.5 leading-relaxed">
                Discover bespoke waterfront villas, diplomatic hilltop estates, smart duplexes, and oceanfront penthouses across Lagos and Abuja.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20am%20browsing%20your%20properties%20catalog%20and%20would%20like%20to%20request%20off-market%20listings."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Request Off-Market Listings</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Comprehensive Filter Control Center */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-neutral-200/80 space-y-5">
          {/* Row 1: Search, Buy/Rent status, and Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by neighborhood, keywords, development name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status Pills (All, Buy, Rent) */}
            <div className="md:col-span-3 flex bg-neutral-100 p-1 rounded-xl">
              {(['All', 'Buy', 'Rent'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedStatus === status
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {status === 'Buy' ? 'For Sale' : status === 'Rent' ? 'For Rent' : 'All Listings'}
                </button>
              ))}
            </div>

            {/* Sort Dropdown & View Mode */}
            <div className="md:col-span-3 flex items-center gap-2">
              <div className="relative flex-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full py-2.5 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold text-neutral-800 focus:ring-2 focus:ring-neutral-900 focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="featured">Sort: Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="beds">Bedrooms: Most First</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="flex bg-neutral-100 p-1 rounded-xl shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white shadow-xs text-neutral-950' : 'text-neutral-500'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'list' ? 'bg-white shadow-xs text-neutral-950' : 'text-neutral-500'
                  }`}
                  title="List View"
                >
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Location and Price Dropdowns & Bedroom Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-neutral-100">
            {/* Location Select */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Property Type Select */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none cursor-pointer"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Price Tier */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                Price Budget (NGN)
              </label>
              <select
                value={selectedPriceTier}
                onChange={(e) => setSelectedPriceTier(e.target.value)}
                className="w-full py-2 px-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none cursor-pointer"
              >
                {priceTiers.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Minimum Bedrooms */}
            <div>
              <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                Min. Bedrooms
              </label>
              <div className="flex gap-1">
                {(['all', 3, 4, 5, 6] as const).map((beds) => (
                  <button
                    key={beds}
                    onClick={() => setSelectedBeds(beds)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      selectedBeds === beds
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {beds === 'all' ? 'Any' : `${beds}+`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-neutral-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-500 font-medium">Active Filters:</span>
                {selectedLocation !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>{selectedLocation}</span>
                    <button onClick={() => setSelectedLocation('All')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
                {selectedType !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>{selectedType}</span>
                    <button onClick={() => setSelectedType('All')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
                {selectedStatus !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>{selectedStatus === 'Buy' ? 'For Sale' : 'For Rent'}</span>
                    <button onClick={() => setSelectedStatus('All')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
                {selectedPriceTier !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>{selectedPriceTier}</span>
                    <button onClick={() => setSelectedPriceTier('All')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
                {selectedBeds !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>{selectedBeds}+ Beds</span>
                    <button onClick={() => setSelectedBeds('all')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    <span>"{searchTerm}"</span>
                    <button onClick={() => setSearchTerm('')}><X className="w-3 h-3 hover:text-black" /></button>
                  </span>
                )}
              </div>

              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-neutral-900 hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Results Header Count */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-600">
          <div>
            Showing <span className="font-extrabold text-neutral-950">{filteredProperties.length}</span> luxury residences
          </div>
          <div className="text-xs text-neutral-400">
            All listings backed by Pressmart Verified Title Guarantee
          </div>
        </div>

        {/* Property Grid or List View */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200/80 space-y-4">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950">No matching luxury properties found</h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
              Try broadening your location or budget filters, or contact our private acquisitions desk to source an unlisted property.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-neutral-950 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Clear All Filters
              </button>
              <a
                href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20am%20looking%20for%20a%20custom%20luxury%20property%20specification."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Acquisitions Desk</span>
              </a>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => {
              const isSaved = savedPropertyIds.includes(property.id);
              return (
                <div
                  key={property.id}
                  id={`prop-card-${property.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image and Badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Status Pill */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                      <span className="px-3 py-1 bg-neutral-950/85 backdrop-blur-md text-white text-[11px] font-extrabold rounded-full tracking-wide uppercase">
                        {property.status === 'Buy' ? 'For Sale' : 'For Rent'}
                      </span>
                      <span className="px-2.5 py-1 bg-[#FDD835] text-neutral-950 text-[11px] font-bold rounded-full">
                        {property.type}
                      </span>
                    </div>

                    {/* Save Heart Action */}
                    <button
                      onClick={() => onToggleSave(property.id)}
                      className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-md transition-all z-10 cursor-pointer shadow-sm active:scale-90"
                      title={isSaved ? 'Remove from saved' : 'Save property'}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isSaved ? 'text-rose-500 fill-rose-500' : 'text-neutral-700'
                        }`}
                      />
                    </button>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3.5 left-3.5 z-10">
                      <span className="px-3.5 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md text-[#FDD835] text-sm sm:text-base font-extrabold tracking-tight">
                        {property.priceFormatted}
                        {property.status === 'Rent' && <span className="text-xs text-neutral-300 font-normal"> / yr</span>}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      <h3
                        onClick={() => navigate(`/properties/${property.id}`)}
                        className="text-base sm:text-lg font-extrabold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer line-clamp-1"
                      >
                        {property.title}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2 mt-1.5 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    {/* Specs Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-100 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-neutral-400" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-neutral-400" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-neutral-400" />
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onSelectProperty(property)}
                        className="flex-1 py-2.5 px-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>

                      <Link
                        to={`/properties/${property.id}`}
                        className="py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl text-xs font-bold transition-colors text-center"
                      >
                        Details
                      </Link>

                      <a
                        href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I would like to inquire about ${property.title} (${property.priceFormatted}) in ${property.location}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl transition-all shadow-xs"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onOpenMortgage(property)}
                        className="p-2.5 rounded-xl border border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                        title="Mortgage Calculator"
                      >
                        <Calculator className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredProperties.map((property) => {
              const isSaved = savedPropertyIds.includes(property.id);
              return (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-center"
                >
                  <div className="relative w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0 bg-neutral-100">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 bg-neutral-950/80 text-white text-[10px] font-bold rounded-full">
                      {property.type}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2.5 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{property.location}</span>
                      </div>
                      <div className="text-lg font-extrabold text-neutral-950">
                        {property.priceFormatted}
                        {property.status === 'Rent' && <span className="text-xs text-neutral-500 font-normal"> / yr</span>}
                      </div>
                    </div>

                    <h3
                      onClick={() => navigate(`/properties/${property.id}`)}
                      className="text-lg font-bold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer"
                    >
                      {property.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {property.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-700 pt-1">
                      <span>{property.beds} Bedrooms</span>
                      <span>•</span>
                      <span>{property.baths} Bathrooms</span>
                      <span>•</span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                      <span>•</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        C of O Verified
                      </span>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100">
                    <Link
                      to={`/properties/${property.id}`}
                      className="flex-1 md:w-36 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold text-center transition-colors"
                    >
                      Full Details
                    </Link>
                    <a
                      href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I'm inquiring about ${property.title} (${property.priceFormatted}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:w-36 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
