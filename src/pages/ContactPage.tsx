import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Building,
  Globe,
  Award,
  ZoomIn,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';
import { CertificateModal, OFFICIAL_CERTIFICATE_URL } from '../components/CertificateModal';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Buying Property',
    budget: '₦500M - ₦1 Billion',
    preferredLocation: 'Banana Island / Ikoyi',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const offices = [
    {
      city: 'Lagos Headquarters',
      area: 'Ikoyi & Island Prime Desk',
      address: '12 Bourdillon Road, Ikoyi, Lagos State, Nigeria',
      phone: '+234 708 642 9976',
      email: 'lagos@pressmart.ng',
      hours: 'Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 4:00 PM'
    },
    {
      city: 'Abuja Regional Office',
      area: 'Maitama Diplomatic Desk',
      address: '4th Floor, Transcorp Hilton Commercial Wing, Maitama, Abuja FCT',
      phone: '+234 708 642 9976',
      email: 'abuja@pressmart.ng',
      hours: 'Mon – Fri: 8:30 AM – 5:30 PM | Sat: By Appointment'
    }
  ];

  const faqs = [
    {
      q: 'How does Pressmart guarantee that land titles are genuine and encumbrance-free?',
      a: 'Every property represented by Pressmart undergoes a multi-layer legal verification process. Our conveyancing legal team conducts physical root-of-title searches at the Lagos State Lands Bureau (Alausa) or the Federal Capital Development Authority (FCDA) in Abuja, cross-verifying Survey Plans, Gazette records, Governor’s Consent approvals, and Certificates of Occupancy (C of O) before listing.'
    },
    {
      q: 'Can Nigerians in the diaspora safely acquire real estate through Pressmart remotely?',
      a: 'Yes. Over 40% of our transactions are executed for diaspora clients across the United Kingdom, United States, Canada, and Europe. We provide live high-definition 4K video walk-throughs, certified independent structural survey reports, and escrow-backed legal transaction channels. Title deeds can be signed via secure international legal notarization and dispatched via tracked diplomatic courier.'
    },
    {
      q: 'What are the statutory transaction closing costs when buying luxury real estate in Nigeria?',
      a: 'Closing costs typically encompass: (1) Legal documentation & Conveyancing fee (5%), (2) Agency / Brokerage commission (5%), and (3) Lagos State or FCDA statutory Governor’s Consent and Stamp Duty assessment fees (approx. 3–5%). Pressmart provides an itemized closing breakdown upfront with zero hidden charges.'
    },
    {
      q: 'Do you facilitate flexible milestone developer installment payment plans?',
      a: 'Yes. For off-plan and newly constructed luxury developments across Ikoyi, Lekki Phase 1, Eko Atlantic, and Maitama, we negotiate tailored milestone payment structures — typically starting from a 20% to 30% initial commitment with the balance spread across construction milestones over 12 to 24 months.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835]">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">Contact & Private Advisory</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FDD835] text-neutral-950 text-xs font-extrabold uppercase tracking-wider inline-block">
              Confidential Advisory & Inquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Connect with Pressmart Real Estate Services
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Schedule a private consultation, request confidential off-market portfolio access, or visit our flagship advisory offices in Lagos and Abuja.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Direct Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Official WhatsApp Desk</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Connect instantly with a senior property advisor for instant brochures, video walk-throughs, and pricing.
              </p>
            </div>
            <a
              href="https://wa.me/2347086429976?text=Hello%20Pressmart%20Real%20Estate%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20listings."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>+234 708 642 9976</span>
            </a>
          </div>

          {/* Direct Phone Lines Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-950 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Telephone Advisory</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Speak directly with our acquisitions partners for confidential institutional or private transactions.
              </p>
            </div>
            <a
              href="tel:+2347086429976"
              className="py-3 px-4 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+234 708 642 9976</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-950 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Email Mandates</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Send formal developer portfolios, title verification requests, and acquisition briefs.
              </p>
            </div>
            <a
              href="mailto:advisory@pressmart.ng"
              className="py-3 px-4 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <span>advisory@pressmart.ng</span>
            </a>
          </div>
        </div>

        {/* Main Section: Form (Left) & Physical Offices (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                Confidential Inquiry
              </span>
              <h2 className="text-2xl font-extrabold text-neutral-950 mt-1">
                Schedule a Consultation or Request a Valuation
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                Fill in your details below. An assigned area specialist will contact you within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Inquiry Dispatched Successfully!</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. A Pressmart Senior Real Estate Advisor has received your brief and will connect with you via {formData.phone || formData.email}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Babatunde Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="babatunde@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Service Required</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    >
                      <option value="Buying Property">Acquiring / Buying Property</option>
                      <option value="Selling Mandate">Selling / Developer Mandate</option>
                      <option value="Diaspora Advisory">Diaspora Real Estate Escrow</option>
                      <option value="Title Verification">Land Title Due Diligence</option>
                      <option value="Private Viewing">Schedule a Private Inspection</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Estimated Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    >
                      <option value="Under ₦300M">Under ₦300 Million</option>
                      <option value="₦300M - ₦800M">₦300 Million – ₦800 Million</option>
                      <option value="₦800M - ₦1.8B">₦800 Million – ₦1.8 Billion</option>
                      <option value="₦1.8 Billion+">₦1.8 Billion+ Ultra-Luxury</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">Preferred Location</label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                    >
                      <option value="Banana Island / Ikoyi">Banana Island & Ikoyi, Lagos</option>
                      <option value="Lekki Phase 1 / Eko Atlantic">Lekki Phase 1 & Eko Atlantic, Lagos</option>
                      <option value="Victoria Island">Victoria Island, Lagos</option>
                      <option value="Maitama / Asokoro">Maitama & Asokoro, Abuja</option>
                      <option value="Guzape / Wuse">Guzape & Wuse 2, Abuja</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">Brief Description / Specific Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific property features, inspection dates, or title questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-neutral-900 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Physical Offices (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-7 border border-neutral-800 shadow-xl space-y-5">
              <span className="text-xs uppercase font-bold text-[#FDD835] tracking-wider">
                Flagship Offices
              </span>
              <h3 className="text-xl font-extrabold">Visit Our Advisory Suites</h3>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{office.city}</h4>
                      <span className="text-[10px] bg-[#FDD835]/15 text-[#FDD835] px-2 py-0.5 rounded font-bold">
                        {office.area}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-neutral-300">
                      <MapPin className="w-4 h-4 text-[#FDD835] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                      <Phone className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{office.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-neutral-400">
                LASRERA License No: <strong className="text-white">LASRERA/BRK/2024/092</strong>
              </div>
            </div>

            {/* Official Certification Trust Card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">Verified Professional Accreditation</h4>
                  <p className="text-[11px] text-neutral-500">Official legal credentials & compliance</p>
                </div>
              </div>

              <div
                onClick={() => setIsCertModalOpen(true)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-[#FDD835] bg-neutral-950 p-2 transition-all"
                title="Click to view full certificate"
              >
                <img
                  src={OFFICIAL_CERTIFICATE_URL}
                  alt="Pressmart Certificate of Accreditation"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 bg-neutral-950/90 text-[#FDD835] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#FDD835]/40 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    <span>Inspect Certificate</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Authenticated Credential</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(true)}
                  className="text-neutral-900 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Full View</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate FAQ Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
              Legal & Investment Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-neutral-950 hover:bg-neutral-50 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-neutral-950' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3 bg-neutral-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />
    </div>
  );
};
