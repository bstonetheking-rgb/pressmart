import React, { useState } from 'react';
import { MapPin, Home, Tag, Search, ChevronDown, Sparkles } from 'lucide-react';
import { locationsList, propertyTypesList, priceRangesList } from '../data/mockData';
import { SearchFilterState } from '../types';
interface HeroProps {
  onSearch: (filters: SearchFilterState) => void;
  onExploreClick: () => void;
}

const HERO_HOUSE_IMAGE = "https://african.land/oc-content/plugins/blog/img/blog/1598.jpg";

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Location');
  const [selectedType, setSelectedType] = useState<string>('Apartment name');
  const [selectedPrice, setSelectedPrice] = useState<string>('Price');
  const [activeTab, setActiveTab] = useState<'All' | 'Buy' | 'Rent'>('All');

  // Open state for custom dropdowns
  const [openDropdown, setOpenDropdown] = useState<'location' | 'type' | 'price' | null>(null);

  const handleSearchClick = () => {
    onSearch({
      location: selectedLocation === 'Location' || selectedLocation === 'All Locations' ? '' : selectedLocation,
      propertyType: selectedType === 'Apartment name' || selectedType === 'All Types' ? '' : selectedType,
      priceRange: selectedPrice === 'Price' || selectedPrice === 'All Prices' ? '' : selectedPrice,
      status: activeTab,
      keyword: ''
    });
  };

  const toggleDropdown = (dropdown: 'location' | 'type' | 'price') => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section id="hero" className="relative w-full pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-visible">
      {/* Hero Visual Container */}
      <div className="max-w-[1340px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative w-full h-[480px] sm:h-[540px] md:h-[620px] lg:h-[680px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl bg-neutral-900">
          {/* Main Hero Background House Image */}
          <img
            src={HERO_HOUSE_IMAGE}
            alt="Pressmart Luxury Architectural Villa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          />

          {/* Atmospheric Birds in the Sky (SVG matching reference) */}
          <div className="absolute top-12 sm:top-16 right-1/4 sm:right-1/3 pointer-events-none opacity-85 z-10">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-neutral-800">
              <path d="M10 20 Q 18 10 26 20 Q 34 10 42 20" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M50 12 Q 56 4 62 12 Q 68 4 74 12" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M85 24 Q 91 16 97 24 Q 103 16 109 24" stroke="#333333" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Subtle Contrast Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Hero Content - Exact Headline & Yellow CTA Button from Reference */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 pb-16 sm:pb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-md max-w-3xl">
              Buy, Rent or Sell <br className="hidden sm:inline" />
              <span className="block mt-1">Property</span>
            </h1>

            {/* Explore Property Yellow Button - 100% exact styling from reference */}
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="mt-6 sm:mt-8 px-7 sm:px-9 py-3 sm:py-3.5 bg-[#FDD835] hover:bg-[#FBC02D] active:scale-[0.98] text-neutral-950 font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore Property</span>
              <Sparkles className="w-4 h-4 opacity-70 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Search Card - Exactly matching the reference image layout */}
        <div className="relative -mt-16 sm:-mt-20 md:-mt-24 z-30 max-w-4xl lg:max-w-5xl mx-auto px-3 sm:px-0">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-100/80">
            {/* Card Header & Status Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Find your perfect place!
              </h2>

              {/* Status pills (All, Buy, Rent) */}
              <div className="inline-flex p-1 bg-neutral-100 rounded-xl self-start sm:self-auto">
                {(['All', 'Buy', 'Rent'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-white text-neutral-900 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {tab === 'All' ? 'All Status' : tab === 'Buy' ? 'For Sale' : 'For Rent'}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-end">
              {/* Location Input Dropdown */}
              <div className="relative md:col-span-4">
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">
                  Location
                </label>
                <button
                  type="button"
                  id="search-location-trigger"
                  onClick={() => toggleDropdown('location')}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl sm:rounded-2xl bg-neutral-100/90 hover:bg-neutral-100 text-left text-sm text-neutral-800 transition-colors border border-transparent focus:border-neutral-300 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span className="truncate text-neutral-700 font-medium">
                      {selectedLocation}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
                </button>

                {/* Location Dropdown Menu */}
                {openDropdown === 'location' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 z-40 max-h-56 overflow-y-auto">
                    {locationsList.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(loc === 'All Locations' ? 'Location' : loc);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 text-neutral-800 flex items-center justify-between"
                      >
                        <span>{loc}</span>
                        {selectedLocation === loc && <span className="text-[#FDD835] font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Type Dropdown */}
              <div className="relative md:col-span-4">
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">
                  Property type
                </label>
                <button
                  type="button"
                  id="search-type-trigger"
                  onClick={() => toggleDropdown('type')}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl sm:rounded-2xl bg-neutral-100/90 hover:bg-neutral-100 text-left text-sm text-neutral-800 transition-colors border border-transparent focus:border-neutral-300 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Home className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span className="truncate text-neutral-700 font-medium">
                      {selectedType}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
                </button>

                {/* Type Dropdown Menu */}
                {openDropdown === 'type' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 z-40 max-h-56 overflow-y-auto">
                    {propertyTypesList.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setSelectedType(t === 'All Types' ? 'Apartment name' : t);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 text-neutral-800 flex items-center justify-between"
                      >
                        <span>{t}</span>
                        {selectedType === t && <span className="text-[#FDD835] font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range Dropdown */}
              <div className="relative md:col-span-3">
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5 ml-1">
                  Price
                </label>
                <button
                  type="button"
                  id="search-price-trigger"
                  onClick={() => toggleDropdown('price')}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl sm:rounded-2xl bg-neutral-100/90 hover:bg-neutral-100 text-left text-sm text-neutral-800 transition-colors border border-transparent focus:border-neutral-300 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Tag className="w-4 h-4 text-neutral-500 shrink-0" />
                    <span className="truncate text-neutral-700 font-medium">
                      {selectedPrice}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
                </button>

                {/* Price Dropdown Menu */}
                {openDropdown === 'price' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-100 py-1.5 z-40 max-h-56 overflow-y-auto">
                    {priceRangesList.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setSelectedPrice(p === 'All Prices' ? 'Price' : p);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-neutral-50 text-neutral-800 flex items-center justify-between"
                      >
                        <span>{p}</span>
                        {selectedPrice === p && <span className="text-[#FDD835] font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button - Exact black rounded button from reference */}
              <div className="md:col-span-1 flex items-end">
                <button
                  id="hero-search-btn"
                  onClick={handleSearchClick}
                  className="w-full h-[46px] rounded-xl sm:rounded-2xl bg-neutral-950 hover:bg-neutral-800 active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Search className="w-4 h-4 md:hidden lg:inline" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
