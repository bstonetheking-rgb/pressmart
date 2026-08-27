import React from 'react';
import { ShieldCheck, Compass, Home, Sparkles, CheckCircle2 } from 'lucide-react';
import heroHouseImg from '../assets/images/nexhomy_hero_house_1787813211072.jpg';
import nordicVillaImg from '../assets/images/villa_nordic_estate_1787813236358.jpg';

interface AboutSectionProps {
  onExploreProperties: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProperties }) => {
  return (
    <section id="about-us" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border-4 border-white aspect-[4/3]">
              <img
                src={heroHouseImg}
                alt="Pressmart Luxury Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-[#FDD835] text-neutral-950 rounded-full text-xs font-bold uppercase tracking-wider">
                  Established in Nigeria
                </span>
                <h3 className="text-xl font-bold mt-2">Pioneering Luxury Living in Nigeria</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Connecting prime residential and commercial assets with visionary investors across Lagos, Abuja, and the diaspora.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Metric Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#FDD835]/20 rounded-xl text-neutral-900">
                  <Sparkles className="w-6 h-6 text-[#bfa100]" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-neutral-950">99.6%</div>
                  <div className="text-xs font-medium text-neutral-500">Title Verification & Delivery Rate</div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Offset Image */}
            <div className="hidden md:block absolute -top-8 -left-8 -z-0 w-48 h-48 rounded-2xl overflow-hidden border-2 border-neutral-100 opacity-60">
              <img src={nordicVillaImg} alt="Villa" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#FDD835]" />
              About Pressmart
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Nigeria’s Premier Luxury Real Estate Brokerage
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              At Pressmart Real Estate Services, we recognize that acquiring property in Nigeria is both a personal lifestyle statement and an indispensable hedge for generational wealth preservation.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              From exclusive waterfront villas in Banana Island and smart duplexes in Lekki to prestigious diplomatic hilltops in Maitama and Asokoro, we curate only residences with unencumbered titles, world-class build quality, and verified documentation.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '100% Verified C of O & Governor’s Consent',
                'Discreet Off-Market Island Acquisitions',
                'LASRERA Registered & Compliant',
                'Independent 24/7 Power & Smart Tech Estates',
                'Diaspora Buyer Title Escrow & Advisory',
                'Dedicated Senior Real Estate Consultants'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950">₦450B+</div>
                <div className="text-xs text-neutral-500 mt-0.5">Properties Brokered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950">2,800+</div>
                <div className="text-xs text-neutral-500 mt-0.5">Satisfied Investors</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950">14+</div>
                <div className="text-xs text-neutral-500 mt-0.5">Industry Honors</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreProperties}
                className="px-7 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-md"
              >
                Browse Curated Residences
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
