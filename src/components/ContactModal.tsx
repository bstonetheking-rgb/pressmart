import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, Send, Building, Calendar } from 'lucide-react';
import { Property, Agent } from '../types';
import { WhatsAppIcon } from './WhatsAppWidget';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetProperty?: Property | null;
  targetAgent?: Agent | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  targetProperty,
  targetAgent
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState<string>(
    targetProperty ? `Schedule tour for ${targetProperty.title}` : 'Buying a Property'
  );
  const [message, setMessage] = useState(
    targetProperty
      ? `Hello, I am interested in scheduling a private architectural tour for "${targetProperty.title}" (${targetProperty.address}). Please contact me.`
      : ''
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#bfa100]">
              Private Consultation
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950">
              {targetProperty ? 'Schedule a Private Viewing' : 'Contact Pressmart Real Estate Services'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-950">
                Inquiry Received!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-neutral-900">{fullName}</span>. One of our senior real estate advisors {targetAgent ? `(${targetAgent.name})` : ''} will review your request and connect with you within 2 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-neutral-950 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Context banner if inquiry is for specific property or agent */}
              {targetProperty && (
                <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 flex items-center gap-3">
                  <img
                    src={targetProperty.image}
                    alt={targetProperty.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-neutral-900 truncate">
                      {targetProperty.title}
                    </div>
                    <div className="text-xs text-neutral-500 truncate">
                      {targetProperty.address}
                    </div>
                    <div className="text-xs font-bold text-neutral-950 mt-0.5">
                      {targetProperty.priceFormatted}
                    </div>
                  </div>
                </div>
              )}

              {targetAgent && !targetProperty && (
                <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 flex items-center gap-3">
                  <img
                    src={targetAgent.image}
                    alt={targetAgent.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900">{targetAgent.name}</div>
                    <div className="text-xs text-neutral-500">{targetAgent.role}</div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adebayo Adeleke"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="adebayo@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 (0) 803 123 4567"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Inquiry Category
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                  >
                    <option value="Buying a Property">Buying a Property</option>
                    <option value="Selling a Property">Listing / Selling a Property</option>
                    <option value="Renting / Leasing">Luxury Rental / Lease</option>
                    <option value="Valuation & Advisory">Architectural Valuation</option>
                    <option value="Off-Market Representation">Off-Market Representation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Viewing Date (Optional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your ideal timeline, property preferences, or specific inquiries..."
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confidential Request</span>
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-neutral-200"></div>
                  <span className="flex-shrink mx-3 text-neutral-400 text-xs font-semibold uppercase">Or Chat Directly</span>
                  <div className="flex-grow border-t border-neutral-200"></div>
                </div>

                <a
                  href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I'm reaching out regarding: ${inquiryType}. My name is ${fullName || 'a prospective client'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp (+234 708 642 9976)</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
