import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Property, Agent } from '../types';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Heart,
  Phone,
  Mail,
  Calculator,
  ArrowLeft,
  Building,
  Sparkles,
  Check,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

interface PropertyDetailPageProps {
  properties: Property[];
  savedPropertyIds: string[];
  onToggleSave: (id: string) => void;
  onBookTour: (property: Property) => void;
  onOpenMortgage: (property: Property) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  properties,
  savedPropertyIds,
  onToggleSave,
  onBookTour,
  onOpenMortgage
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const property = properties.find((p) => p.id === id) || properties[0];
  const [selectedImage, setSelectedImage] = useState<string>(property?.image || '');
  const [copied, setCopied] = useState(false);

  // Mortgage Calculator state inside property detail
  const defaultPrice = property ? property.price : 650000000;
  const [calcPrice, setCalcPrice] = useState<number>(defaultPrice);
  const [downPercent, setDownPercent] = useState<number>(25);
  const [mortgageRate, setMortgageRate] = useState<number>(18.5);
  const [tenureYears, setTenureYears] = useState<number>(15);

  if (!property) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Link to="/properties" className="mt-4 inline-block px-5 py-2.5 bg-neutral-950 text-white rounded-xl text-xs font-bold">
          Return to Properties
        </Link>
      </div>
    );
  }

  const isSaved = savedPropertyIds.includes(property.id);
  const gallery = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  // Calculations
  const downPayment = (calcPrice * downPercent) / 100;
  const loanPrincipal = Math.max(0, calcPrice - downPayment);
  const monthlyRate = mortgageRate / 100 / 12;
  const totalMonths = tenureYears * 12;
  const monthlyPI =
    monthlyRate === 0
      ? loanPrincipal / totalMonths
      : (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const monthlyInsuranceAndService = (calcPrice * 0.002) / 12;
  const totalMonthly = monthlyPI + monthlyInsuranceAndService;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this luxury property on Pressmart Real Estate: ${property.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Nearby related properties
  const relatedProperties = properties
    .filter((p) => p.id !== property.id && (p.city === property.city || p.type === property.type))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Top Breadcrumbs Bar */}
      <div className="bg-white border-b border-neutral-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <Link to="/" className="hover:text-neutral-950">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/properties" className="hover:text-neutral-950">Properties</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neutral-950 truncate max-w-xs">{property.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isSaved ? 'Saved in Wishlist' : 'Save Property'}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-8">
        {/* Main Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-neutral-950 text-[#FDD835] text-xs font-extrabold rounded-full uppercase tracking-wider">
                {property.status === 'Buy' ? 'For Sale' : 'For Rent'}
              </span>
              <span className="px-2.5 py-1 bg-neutral-200 text-neutral-800 text-xs font-bold rounded-full">
                {property.type}
              </span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Title (C of O)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 font-medium">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>{property.address || property.location}</span>
            </div>
          </div>

          <div className="bg-neutral-950 text-white p-4 sm:p-5 rounded-2xl md:text-right shrink-0 border border-neutral-800 shadow-md">
            <div className="text-xs text-neutral-400 uppercase font-semibold tracking-wider">
              Asking Price
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FDD835] mt-0.5 tracking-tight">
              {property.priceFormatted}
              {property.status === 'Rent' && <span className="text-sm text-neutral-300 font-normal"> / year</span>}
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">
              Title: Certificate of Occupancy / Governor’s Consent
            </div>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-3">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 shadow-lg border border-neutral-200/80">
            <img
              src={selectedImage || property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    (selectedImage || property.image) === img
                      ? 'border-[#FDD835] scale-105 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Property Key Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-xs text-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Bedrooms</div>
              <div className="text-base font-extrabold">{property.beds} En-Suite Beds</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900">
              <Bath className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Bathrooms</div>
              <div className="text-base font-extrabold">{property.baths} Luxury Baths</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Built Area</div>
              <div className="text-base font-extrabold">{property.sqft.toLocaleString()} Sq Ft</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Completion</div>
              <div className="text-base font-extrabold">{property.yearBuilt || 2024} (Brand New)</div>
            </div>
          </div>
        </div>

        {/* Content Layout: Left Column (Details, Features, Legal, Calc) + Right Column (Broker & Actions) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4">
              <h2 className="text-xl font-extrabold text-neutral-950">
                Architectural & Lifestyle Overview
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {property.description}
              </p>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 text-xs text-neutral-600 leading-relaxed">
                <span className="font-bold text-neutral-900">Diaspora Buyer Notice:</span> This listing is supported by our dedicated Pressmart Diaspora Title Verification & Escrow framework. You can schedule private live video walk-throughs and execute closing documents securely with registered Nigerian conveyancing solicitors.
              </div>
            </div>

            {/* Key Features & Amenities Checklist */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4">
              <h2 className="text-xl font-extrabold text-neutral-950">
                Key Features & Luxuries
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs sm:text-sm font-semibold text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title & Documentation Verification Breakdown */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-extrabold text-neutral-950">
                  Legal & Title Verification Status
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-900">Certificate of Occupancy</div>
                  <div className="text-emerald-700 mt-1">Verified at Lands Bureau</div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-900">Governor’s Consent</div>
                  <div className="text-emerald-700 mt-1">Clean title / No encumbrances</div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-900">LASRERA Registered</div>
                  <div className="text-emerald-700 mt-1">Brokerage License Compliant</div>
                </div>
              </div>
            </div>

            {/* In-Page Interactive Mortgage & Amortization Calculator */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#FDD835] text-neutral-950">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-neutral-950">
                      Financing & Mortgage Estimator
                    </h2>
                    <p className="text-xs text-neutral-500">Calculate monthly loan repayments for this residence</p>
                  </div>
                </div>
              </div>

              {/* Monthly Repayment Box */}
              <div className="p-5 rounded-2xl bg-neutral-950 text-white text-center">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Estimated Monthly Repayment
                </div>
                <div className="text-3xl font-extrabold text-[#FDD835] mt-1">
                  ₦{Math.round(totalMonthly).toLocaleString()}{' '}
                  <span className="text-sm text-neutral-300 font-normal">/ mo</span>
                </div>
                <div className="text-xs text-neutral-400 mt-2 flex items-center justify-center gap-4">
                  <span>P&I: ₦{Math.round(monthlyPI).toLocaleString()}</span>
                  <span>•</span>
                  <span>Equity Down: ₦{Math.round(downPayment).toLocaleString()} ({downPercent}%)</span>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                    <span>Down Payment ({downPercent}%)</span>
                    <span>₦{Math.round(downPayment).toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={60}
                    step={5}
                    value={downPercent}
                    onChange={(e) => setDownPercent(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Mortgage Rate (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      min="5"
                      max="35"
                      value={mortgageRate}
                      onChange={(e) => setMortgageRate(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Tenure</label>
                    <select
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-xs font-semibold bg-white"
                    >
                      <option value={5}>5 Years Milestone</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years Standard</option>
                      <option value={20}>20 Years Bank</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Broker Card & Booking Box) */}
          <div className="space-y-6">
            {/* Direct Inquiry & WhatsApp Booking Card */}
            <div className="bg-neutral-950 text-white p-6 rounded-2xl border border-neutral-800 shadow-xl space-y-5 sticky top-28">
              <div>
                <span className="text-xs uppercase font-bold text-[#FDD835] tracking-wider">
                  Direct Acquisition Desk
                </span>
                <h3 className="text-xl font-bold mt-1">Connect with Listing Advisor</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Get instant documentation verification, title searches, or schedule an inspection.
                </p>
              </div>

              {/* Agent Profile */}
              <div className="flex items-center gap-3.5 p-3.5 bg-neutral-900 rounded-xl border border-neutral-800">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FDD835]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{property.agent.name}</h4>
                  <p className="text-xs text-neutral-400">{property.agent.role}</p>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I'm interested in viewing ${property.title} in ${property.location} priced at ${property.priceFormatted}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Advisor (+234 708 642 9976)</span>
              </a>

              {/* Book Private Tour Button */}
              <button
                onClick={() => onBookTour(property)}
                className="w-full py-3.5 px-4 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Schedule Private Viewing
              </button>

              <div className="pt-2 text-center text-[11px] text-neutral-400 space-y-1">
                <div>Direct Phone: +234 708 642 9976</div>
                <div>Email: advisory@pressmart.ng</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="pt-12 border-t border-neutral-200/80 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-950">Similar Luxury Listings</h3>
                <p className="text-xs sm:text-sm text-neutral-500">Explore comparable premier residences in Nigeria</p>
              </div>
              <Link to="/properties" className="text-xs font-bold text-neutral-950 hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProperties.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    navigate(`/properties/${rel.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-neutral-950/90 text-[#FDD835] text-xs font-extrabold rounded-lg">
                      {rel.priceFormatted}
                    </span>
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="text-xs text-neutral-500">{rel.location}</div>
                    <h4 className="text-sm font-bold text-neutral-950 line-clamp-1">{rel.title}</h4>
                    <div className="text-xs font-semibold text-neutral-700 pt-1">
                      {rel.beds} Beds • {rel.baths} Baths • {rel.sqft.toLocaleString()} sqft
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
