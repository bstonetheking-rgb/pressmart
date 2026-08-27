import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Building2,
  Users,
  Target,
  CheckCircle2,
  TrendingUp,
  Globe,
  Lock,
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const milestones = [
    { number: '₦450B+', label: 'Transaction Volume Brokered across Lagos & Abuja' },
    { number: '100%', label: 'Clean Title Guarantee on Every Single Listing' },
    { number: '2,800+', label: 'High-Net-Worth & Diaspora Clients Served' },
    { number: '15+ Yrs', label: 'Continuous Real Estate Advisory Leadership' }
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FDD835]" />,
      title: 'Uncompromised Legal Diligence',
      description:
        'Every asset on Pressmart undergoes rigorous physical search, survey coordinate validation, and verification with the Lagos State Lands Bureau and Federal Capital Development Authority (FCDA).'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#FDD835]" />,
      title: 'High-Net-Worth Discretion',
      description:
        'We represent top business leaders, diplomats, and international investors who require confidential acquisition mandates, NDA-backed private viewings, and off-market portfolio sourcing.'
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FDD835]" />,
      title: 'Dedicated Diaspora Desk',
      description:
        'Empowering Nigerians abroad with transparent remote acquisitions, live video surveys, verified title deeds, and escrow-backed milestone transactions without family intermediaries.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FDD835]" />,
      title: 'Capital Growth & Yield Engineering',
      description:
        'We match clients with premium properties positioned in Nigeria’s highest-appreciation corridors, including Banana Island, Eko Atlantic, Ikoyi, Lekki Phase 1, and Maitama.'
    }
  ];

  const services = [
    {
      title: 'Prime Property Acquisitions',
      desc: 'Assisting buyers with targeted selection, structural due diligence, price negotiation, and secure title transfers.'
    },
    {
      title: 'Seller & Developer Mandates',
      desc: 'Exclusive marketing strategies, high-definition architectural media, and qualified buyer matchmaking for luxury developers.'
    },
    {
      title: 'Diaspora Real Estate Escrow',
      desc: 'Structured legal channels and third-party solicitor oversight to guarantee safe, zero-fraud investments from overseas.'
    },
    {
      title: 'Off-Market Portfolio Sourcing',
      desc: 'Private access to ultra-exclusive properties not advertised on public portals or social media channels.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Hero Header */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835]">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">About Pressmart</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FDD835] text-neutral-950 text-xs font-extrabold uppercase tracking-wider inline-block">
              About Pressmart Real Estate Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Setting the Gold Standard for Luxury Real Estate in Nigeria.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Pressmart Real Estate Services is Nigeria’s premier luxury real estate advisory and brokerage firm. We provide discerning buyers, visionary developers, and diaspora investors with verified titles, institutional transparency, and access to the country's most prestigious residences.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="py-12 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                  {item.number}
                </div>
                <div className="text-xs text-neutral-600 font-medium leading-relaxed">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-neutral-950" />
              Our Purpose & Story
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              Re-engineering Trust in the Nigerian Real Estate Sector
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Founded to eliminate the pervasive friction, opaque documentation, and title risks in the Nigerian property market, Pressmart was established with a singular mandate: to provide institutional-grade brokerage where every property listed is 100% verified, legal titles are clear, and client interests are vigorously protected.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              From waterfront sanctuaries in Banana Island to architectural masterpieces in Maitama and high-yield mixed-use developments along the Lekki corridor, we bridge the gap between capital and prime real estate with unmatched market intelligence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Browse Our Verified Portfolio
              </Link>
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-950 border border-neutral-300 rounded-xl text-xs font-bold transition-all"
              >
                Consult Our Advisory Team
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-2">
                <h3 className="text-base font-bold text-neutral-950">Our Vision</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To be the most trusted, innovative, and prestigious real estate gateway in Africa, empowering generational wealth creation.
                </p>
              </div>
              <div className="p-6 bg-neutral-950 text-white rounded-2xl border border-neutral-800 shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#FDD835]">Our Mission</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Deliver seamless property acquisitions through rigorous legal due diligence, cutting-edge technology, and client advocacy.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-6 bg-[#0B2545] text-white rounded-2xl border border-blue-900 shadow-xs space-y-2">
                <h3 className="text-base font-bold text-emerald-400">Title Escrow</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Complete protection through certified solicitors and formal escrow mechanisms prior to title deed handover.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-2">
                <h3 className="text-base font-bold text-neutral-950">LASRERA Certified</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Accredited by the Lagos State Real Estate Regulatory Authority and Real Estate Developers Association of Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              The Pressmart Advisory Pillars
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              The foundational principles that govern every transaction and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
                <div className="p-3 w-fit rounded-xl bg-neutral-950">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-950">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-xs space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
              Comprehensive Brokerage Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Our Core Advisory Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((svc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                <h4 className="text-base font-bold text-neutral-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{svc.title}</span>
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed pl-6">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Connect */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Partner with Nigeria’s Leading Luxury Brokerage</h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with our senior acquisitions partners in Lagos or Abuja for tailored real estate advisory.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20would%20like%20to%20speak%20with%20a%20senior%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us (+234 708 642 9976)</span>
            </a>
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 rounded-xl text-xs font-bold cursor-pointer"
            >
              Schedule an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
