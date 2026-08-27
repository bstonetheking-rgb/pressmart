import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Heart, Calculator } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenContact: () => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  savedCount,
  onOpenSaved
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Properties', path: '/properties' },
    { label: 'About Us', path: '/about' },
    { label: 'Market Insights', path: '/blogs' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100/90'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            id="brand-logo-btn"
            to="/"
            className="flex items-center group cursor-pointer text-left focus:outline-none transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Pressmart Associates Home"
          >
            <Logo variant="horizontal" theme="light" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[14px] font-semibold transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-neutral-950 after:w-full'
                      : 'text-neutral-700 hover:text-neutral-950 after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-neutral-950 hover:after:w-full after:transition-all after:duration-200`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Saved Properties Pill */}
            {savedCount > 0 && (
              <button
                id="saved-properties-btn"
                onClick={onOpenSaved}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                title="View saved properties"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>{savedCount} Saved</span>
              </button>
            )}

            {/* Inquire / Contact Pill Button */}
            <button
              id="header-contact-btn"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all cursor-pointer"
            >
              Inquire
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-base font-semibold text-neutral-800 hover:text-neutral-950 py-2 border-b border-neutral-100"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left text-base font-semibold py-2 border-b border-neutral-100 ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-700 hover:text-neutral-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-3 rounded-xl bg-neutral-950 text-white text-center font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Our Advisors</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
