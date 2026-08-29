import React, { useState, useMemo } from 'react';
import { Property, SearchFilterState } from '../types';
import { Bed, Bath, Maximize2, MapPin, Heart, ArrowUpRight, Filter, SlidersHorizontal, Video } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  filters: SearchFilterState;
  onFilterChange: (filters: SearchFilterState) => void;
  onSelectProperty: (property: Property) => void;
  savedPropertyIds: string[];
  onToggleSave: (id: string) => void;
  onOpenMortgage: (property: Property) => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
  savedPropertyIds,
  onToggleSave,
  onOpenMortgage
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'sqft'>('featured');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('All');

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Status filter
      if (filters.status !== 'All' && prop.status !== filters.status) {
        return false;
      }

      // Location filter
      if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase()) && !prop.city.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Property type filter from hero
      if (filters.propertyType && prop.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
        return false;
      }

      // Property type filter from local pill
      if (selectedTypeFilter !== 'All' && prop.type !== selectedTypeFilter) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        if (filters.priceRange === 'Under ₦300 Million' && prop.price > 300000000) return false;
        if (filters.priceRange === '₦300M - ₦800 Million' && (prop.price < 300000000 || prop.price > 800000000)) return false;
        if (filters.priceRange === '₦800M - ₦1.8 Billion' && (prop.price < 800000000 || prop.price > 1800000000)) return false;
        if (filters.priceRange === '₦1.8 Billion+' && prop.price < 1800000000) return false;
      }

      // Keyword search
      if (filters.keyword) {
        const query = filters.keyword.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesLocation = prop.location.toLowerCase().includes(query) || prop.city.toLowerCase().includes(query);
        const matchesDesc = prop.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'sqft') return b.sqft - a.sqft;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [properties, filters, selectedTypeFilter, sortBy]);

  const propertyTypes = ['All', 'Commercial', 'Waterfront Villa', 'Mansion', 'Detached Duplex', 'Terrace Duplex', 'Penthouse'];

  const hasActiveFilters = Boolean(
    filters.location ||
    filters.propertyType ||
    filters.priceRange ||
    filters.status !== 'All' ||
    filters.keyword ||
    selectedTypeFilter !== 'All'
  );

  const clearAllFilters = () => {
    setSelectedTypeFilter('All');
    onFilterChange({
      location: '',
      propertyType: '',
      priceRange: '',
      status: 'All',
      keyword: ''
    });
  };

  return (
    <section id="property-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
            Prime Nigerian Real Estate Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Featured Luxury Properties
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
            Explore verified waterfront villas in Banana Island, diplomatic mansions in Maitama, and smart luxury duplexes in Lekki.
          </p>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-neutral-200 shadow-xs text-xs sm:text-sm">
            <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
            <span className="text-neutral-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sqft">Largest Living Area</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills & Quick Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
        {/* Type pills */}
        <div className="flex flex-wrap items-center gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedTypeFilter(type)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedTypeFilter === type
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              {type === 'All' ? 'All Architectural Types' : type}
            </button>
          ))}
        </div>

        {/* Quick Search & Clear */}
        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4 cursor-pointer"
            >
              Reset Filters ({filteredProperties.length} found)
            </button>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200 max-w-lg mx-auto my-8">
          <Filter className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No matching properties found</h3>
          <p className="text-neutral-500 text-sm mb-6">
            Try adjusting your search criteria or location filters to see our full catalogue.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 bg-neutral-950 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Show All Listings
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProperties.map((prop) => {
            const isSaved = savedPropertyIds.includes(prop.id);

            return (
              <div
                key={prop.id}
                id={`property-card-${prop.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Property Image Container */}
                <div
                  onClick={() => onSelectProperty(prop)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 items-center z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-xs ${
                      prop.status === 'Buy'
                        ? 'bg-neutral-950 text-white'
                        : 'bg-[#FDD835] text-neutral-950'
                    }`}>
                      {prop.status === 'Buy' ? 'For Sale' : 'For Rent'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-neutral-900 shadow-xs">
                      {prop.type}
                    </span>
                    {prop.videoUrl && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white backdrop-blur-md shadow-xs flex items-center gap-1">
                        <Video className="w-3 h-3 animate-pulse" />
                        <span>Video Tour</span>
                      </span>
                    )}
                  </div>

                  {/* Favorite Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(prop.id);
                    }}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer z-10 ${
                      isSaved
                        ? 'bg-rose-50 text-rose-500 fill-rose-500 shadow-md'
                        : 'bg-white/80 hover:bg-white text-neutral-700 hover:text-rose-500 shadow-xs'
                    }`}
                    aria-label="Save property"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
                  </button>

                  {/* Price Tag Overlay at Bottom Left */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="px-3.5 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md text-white font-extrabold text-base tracking-tight shadow-md">
                      {prop.priceFormatted}
                    </div>
                  </div>
                </div>

                {/* Property Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">{prop.address}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight group-hover:text-neutral-700 transition-colors line-clamp-1 mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 mb-4">
                      {prop.tagline}
                    </p>

                    {/* Property Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-neutral-50 rounded-2xl border border-neutral-100 mb-5 text-neutral-700 text-xs font-semibold">
                      <div className="flex items-center gap-1.5 justify-center">
                        <Bed className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{prop.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center border-x border-neutral-200">
                        <Bath className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{prop.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center">
                        <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{prop.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Card */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={prop.agent.avatar}
                        alt={prop.agent.name}
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                      />
                      <span className="text-xs font-medium text-neutral-700 truncate max-w-[100px]">
                        {prop.agent.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {prop.status === 'Buy' && (
                        <button
                          onClick={() => onOpenMortgage(prop)}
                          className="px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                        >
                          Calc
                        </button>
                      )}
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
