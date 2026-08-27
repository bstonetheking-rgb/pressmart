import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppWidget';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="text-left focus:outline-none cursor-pointer inline-block"
            >
              <Logo variant="horizontal" theme="dark" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Buy, rent, and invest in premier luxury real estate across Banana Island, Ikoyi, Victoria Island, Lekki, and Abuja.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>LASRERA Registered & Certified Real Estate Services Brokerage</span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/2347086429976?text=Hello%20Pressmart%20Real%20Estate%2C%20I%20would%20like%20to%20inquire%20about%20your%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +234 708 642 9976</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link
                  to="/properties"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Properties Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  About Pressmart
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FDD835] transition-colors cursor-pointer block"
                >
                  Contact & Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Prime Locations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Prime Corridors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>Banana Island, Ikoyi</li>
              <li>Maitama Diplomatic Zone</li>
              <li>Lekki Phase 1 Corridor</li>
              <li>Eko Atlantic City</li>
              <li>Guzape Hills, Abuja</li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Private Property Alerts
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Receive confidential off-market Nigerian real estate listings and investment reports.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FDD835]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FDD835] hover:bg-[#FBC02D] text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to private alerts.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Pressmart Real Estate Services Nigeria. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-neutral-400 transition-colors">Trust & Certification</Link>
            <Link to="/contact" className="hover:text-neutral-400 transition-colors">Offices</Link>
            <Link to="/calculator" className="hover:text-neutral-400 transition-colors">Financing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
