import React, { useState } from 'react';
import { ShieldCheck, Compass, Sparkles, CheckCircle2, Award, ZoomIn, ExternalLink } from 'lucide-react';
import heroHouseImg from '../assets/images/nexhomy_hero_house_1787813211072.jpg';
import { CertificateModal, OFFICIAL_CERTIFICATE_URL } from './CertificateModal';

interface AboutSectionProps {
  onExploreProperties: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProperties }) => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <section id="about-us" className="py-20 sm:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery & Certificate Showcase */}
          <div className="lg:col-span-6 relative space-y-6">
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

            {/* Official Certification Card for Trust */}
            <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Certificate Thumbnail with Zoom */}
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(true)}
                  className="relative group shrink-0 w-24 sm:w-28 h-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#FDD835]/60 shadow-md bg-neutral-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FDD835]"
                  title="Click to view full certificate"
                >
                  <img
                    src={OFFICIAL_CERTIFICATE_URL}
                    alt="Official Accreditation Certificate"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn className="w-6 h-6 text-[#FDD835]" />
                  </div>
                  <span className="absolute bottom-1 right-1 bg-neutral-950/85 text-[#FDD835] text-[9px] font-bold px-1.5 py-0.5 rounded">
                    Zoom
                  </span>
                </button>

                {/* Certificate Details */}
                <div className="flex-1 text-left space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified & Certified Brokerage
                  </div>
                  <h4 className="text-sm font-bold text-neutral-950">
                    Official Professional Accreditation
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Legally licensed and compliant real estate practice ensuring guaranteed title verification, escrow security, and transparent documentation for all clients.
                  </p>
                  <div className="pt-1 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCertModalOpen(true)}
                      className="text-xs font-bold text-neutral-900 hover:text-amber-600 underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inspect Official Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
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
                'Certified Professional Accreditation',
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

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <button
                onClick={onExploreProperties}
                className="px-7 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-md"
              >
                Browse Curated Residences
              </button>
              <button
                type="button"
                onClick={() => setIsCertModalOpen(true)}
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer border border-neutral-300 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-[#bfa100]" />
                <span>View Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />
    </section>
  );
};

