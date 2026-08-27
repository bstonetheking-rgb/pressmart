import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { PropertyList } from '../components/PropertyList';
import { AboutSection } from '../components/AboutSection';
import { BlogsSection } from '../components/BlogsSection';
import { Property, SearchFilterState } from '../types';
import { ShieldCheck, Award, Building2, Globe, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

interface HomePageProps {
  properties: Property[];
  filters: SearchFilterState;
  onFilterChange: React.Dispatch<React.SetStateAction<SearchFilterState>>;
  onSelectProperty: (property: Property) => void;
  savedPropertyIds: string[];
  onToggleSave: (id: string) => void;
  onOpenMortgage: (property: Property) => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  properties,
  filters,
  onFilterChange,
  onSelectProperty,
  savedPropertyIds,
  onToggleSave,
  onOpenMortgage,
  onOpenContact
}) => {
  const navigate = useNavigate();

  const handleHeroSearch = (newFilters: SearchFilterState) => {
    onFilterChange(newFilters);
    navigate('/properties');
  };

  const handleExploreClick = () => {
    navigate('/properties');
  };

  return (
    <div className="space-y-0">
      {/* 1. Signature Hero Section */}
      <Hero
        onSearch={handleHeroSearch}
        onExploreClick={handleExploreClick}
      />

      {/* 2. Key Value Pillars Banner */}
      <section className="py-12 bg-white border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
              <div className="p-3 rounded-xl bg-neutral-950 text-[#FDD835] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-950">100% Title Verified</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Rigorous verification of C of O, Governor’s Consent, and gazetted land records.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
              <div className="p-3 rounded-xl bg-neutral-950 text-[#FDD835] shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-950">Diaspora Desk</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Secure remote inspections, video walk-throughs, and legal escrow for international investors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
              <div className="p-3 rounded-xl bg-neutral-950 text-[#FDD835] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-950">Prime Hub Focus</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Direct access to off-market properties across Banana Island, Ikoyi, Lekki, and Maitama.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
              <div className="p-3 rounded-xl bg-neutral-950 text-[#FDD835] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-950">LASRERA Certified</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Fully licensed real estate services brokerage compliant with state regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Property List Preview */}
      <PropertyList
        properties={properties}
        filters={filters}
        onFilterChange={onFilterChange}
        onSelectProperty={onSelectProperty}
        savedPropertyIds={savedPropertyIds}
        onToggleSave={onToggleSave}
        onOpenMortgage={onOpenMortgage}
      />

      {/* 4. Full Catalog CTA Banner */}
      <section className="py-12 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 bg-[#FDD835] text-neutral-950 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Explore 200+ Verified Assets
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-3">
              Looking for off-market luxury listings in Lagos or Abuja?
            </h3>
            <p className="text-sm text-neutral-400 max-w-2xl mt-1.5 leading-relaxed">
              Browse our comprehensive multi-parameter catalog or speak with a senior acquisitions advisor.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/properties"
              className="px-6 py-3.5 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/calculator"
              className="px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm rounded-xl transition-all border border-neutral-700 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#FDD835]" />
              <span>Mortgage Calculator</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Highlight */}
      <AboutSection onExploreProperties={() => navigate('/properties')} />

      {/* 7. Market Intelligence & Blogs */}
      <BlogsSection />

      {/* 8. Call to Action Banner */}
      <section className="py-16 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-neutral-200 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Direct Advisory Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Acquire Your Next Prime Property in Nigeria?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are expanding your high-yield portfolio, relocating to Ikoyi, or investing from the diaspora, Pressmart provides transparent, end-to-end transaction security.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/2347086429976?text=Hello%20Pressmart%20Real%20Estate%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20regarding%20property%20acquisitions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp +234 708 642 9976</span>
            </a>
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Schedule Private Viewing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
