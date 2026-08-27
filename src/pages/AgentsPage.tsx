import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { agentsData } from '../data/mockData';
import { Agent } from '../types';
import {
  Star,
  Phone,
  Mail,
  Award,
  CheckCircle,
  ShieldCheck,
  Building,
  MapPin,
  Briefcase,
  Users
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

interface AgentsPageProps {
  onContactAgent: (agent: Agent) => void;
}

export const AgentsPage: React.FC<AgentsPageProps> = ({ onContactAgent }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All');

  const specializations = [
    'All',
    'Banana Island & Ikoyi',
    'Abuja Diplomatic & Maitama',
    'Lekki & Eko Atlantic',
    'Diaspora Investment'
  ];

  const filteredAgents = agentsData.filter((agent) => {
    if (selectedSpecialization === 'All') return true;
    return agent.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase().split(' ')[0]);
  });

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Top Hero Banner */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835]">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">Our Advisors & Brokers</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#FDD835]">
              <Award className="w-3.5 h-3.5" />
              LASRERA Certified Real Estate Advisors
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Meet Nigeria’s Top Luxury Real Estate Specialists
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Our seasoned brokers bring deep institutional expertise, confidential transaction handling, and unmatched access to prime residential and commercial corridors in Lagos and Abuja.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Specialization Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
          <span className="text-xs font-bold text-neutral-500 px-3">Filter Specialist:</span>
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialization(spec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSpecialization === spec
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              id={`agent-card-${agent.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Agent Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-white text-xs font-bold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#FDD835] text-[#FDD835]" />
                  <span>{agent.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-neutral-900 text-[11px] font-extrabold shadow-xs">
                  {agent.experience} Experience
                </div>
              </div>

              {/* Agent Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 font-medium mb-1">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{agent.specialization}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-neutral-950">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium mt-0.5">
                    {agent.role}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 py-2.5 px-3 bg-neutral-50 rounded-xl border border-neutral-100 text-center">
                  <div>
                    <div className="text-xs text-neutral-500">Active Listings</div>
                    <div className="text-sm font-extrabold text-neutral-900">{agent.propertiesCount}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Reviews</div>
                    <div className="text-sm font-extrabold text-neutral-900">{agent.reviewsCount}+</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I would like to connect with ${agent.name} (${agent.role}) regarding properties in ${agent.specialization}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onContactAgent(agent)}
                      className="py-2.5 px-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-500 py-0.5 font-mono">
                    <Phone className="w-3 h-3 text-neutral-400" />
                    <span>+234 708 642 9976</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Standards Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-xs space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
              Professional Code of Conduct
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-950">
              Why Deal with a Pressmart Certified Advisor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero Double-Representation</span>
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Clear fiduciary representation guaranteeing that our advisors negotiate strictly in your financial interest without conflicts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Legal & Technical Oversight</span>
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every advisor works alongside in-house conveyancing lawyers and land surveyors to vet survey plans and encumbrances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Direct Developer Access</span>
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Preferred pre-launch pricing, customized milestone payment terms, and early unit allocation on premier developments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
