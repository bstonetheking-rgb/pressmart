import React from 'react';
import { agentsData } from '../data/mockData';
import { Agent } from '../types';
import { Star, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppWidget';

interface AgentsSectionProps {
  onContactAgent: (agent: Agent) => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ onContactAgent }) => {
  return (
    <section id="our-agents" className="bg-neutral-100/60 py-20 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#FDD835]" />
            Certified Real Estate Specialists
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Meet Our Dedicated Agents
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            Guiding your property journey with deep architectural understanding, international market insights, and private representation.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agentsData.map((agent) => (
            <div
              key={agent.id}
              id={`agent-card-${agent.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Agent Image & Rating */}
                <div className="relative mb-6">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Rating Tag */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{agent.rating}</span>
                    <span className="text-neutral-400 font-normal">({agent.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Details */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-[#bfa100] uppercase tracking-wider mb-1">
                    {agent.experience}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950">
                    {agent.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-500 mb-3">
                    {agent.role}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {agent.bio}
                  </p>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-xs text-neutral-700 flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{agent.specialization}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-neutral-100">
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

                <div className="flex items-center justify-center gap-1 text-xs text-neutral-500 py-0.5 font-mono">
                  <Phone className="w-3 h-3 text-neutral-400" />
                  <span>+234 708 642 9976</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
