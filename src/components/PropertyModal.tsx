import React, { useState } from 'react';
import { Property } from '../types';
import { X, Bed, Bath, Maximize2, Calendar, MapPin, CheckCircle2, Phone, Mail, Share2, Heart, Calculator } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppWidget';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenMortgage: (property: Property) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onBookTour: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onOpenMortgage,
  isSaved,
  onToggleSave,
  onBookTour
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              property.status === 'Buy' ? 'bg-neutral-950 text-white' : 'bg-[#FDD835] text-neutral-950'
            }`}>
              {property.status === 'Buy' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="text-xs font-semibold text-neutral-600 px-2.5 py-1 bg-neutral-100 rounded-full">
              {property.type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copied && <span className="text-xs font-semibold text-emerald-600">Copied!</span>}

            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isSaved ? 'bg-rose-50 text-rose-500' : 'hover:bg-neutral-100 text-neutral-700'
              }`}
              title="Save"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
              <img
                src={images[activeImageIndex]}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-neutral-950 ring-2 ring-neutral-950/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Price Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{property.address}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                {property.title}
              </h2>
              <p className="text-neutral-500 text-sm mt-0.5">{property.tagline}</p>
            </div>

            <div className="sm:text-right">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                {property.priceFormatted}
              </div>
              {property.status === 'Buy' && (
                <button
                  onClick={() => onOpenMortgage(property)}
                  className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 hover:text-neutral-950 underline underline-offset-4 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Estimate Mortgage</span>
                </button>
              )}
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-center">
              <Bed className="w-5 h-5 text-neutral-500 mx-auto mb-1" />
              <div className="text-base font-bold text-neutral-900">{property.beds} Bedrooms</div>
              <div className="text-xs text-neutral-500">Suites & Guest rooms</div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-center">
              <Bath className="w-5 h-5 text-neutral-500 mx-auto mb-1" />
              <div className="text-base font-bold text-neutral-900">{property.baths} Bathrooms</div>
              <div className="text-xs text-neutral-500">Designer fixtures</div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-center">
              <Maximize2 className="w-5 h-5 text-neutral-500 mx-auto mb-1" />
              <div className="text-base font-bold text-neutral-900">{property.sqft.toLocaleString()} sqft</div>
              <div className="text-xs text-neutral-500">Living space</div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-center">
              <Calendar className="w-5 h-5 text-neutral-500 mx-auto mb-1" />
              <div className="text-base font-bold text-neutral-900">{property.yearBuilt}</div>
              <div className="text-xs text-neutral-500">Year built</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-bold text-neutral-950 mb-2">Architectural Description</h3>
            <p className="text-sm leading-relaxed text-neutral-600 whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features & Amenities Checklist */}
          <div>
            <h3 className="text-base font-bold text-neutral-950 mb-3">Key Features & Finishes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-700 bg-neutral-50/70 px-3.5 py-2 rounded-xl border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assigned Agent & Contact Action */}
          <div className="p-5 rounded-2xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={property.agent.avatar}
                alt={property.agent.name}
                referrerPolicy="no-referrer"
                className="w-13 h-13 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <div className="text-sm font-bold">{property.agent.name}</div>
                <div className="text-xs text-neutral-400">{property.agent.role}</div>
                <div className="flex items-center gap-3 mt-1 text-xs text-neutral-300">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {property.agent.phone}</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {property.agent.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I would like to inquire about ${property.title} in ${property.location} priced at ${property.priceFormatted}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onBookTour(property)}
                className="w-full sm:w-auto px-5 py-3 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer shrink-0 text-center"
              >
                Schedule Private Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
