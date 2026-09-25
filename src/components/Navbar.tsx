import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, UtensilsCrossed, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Pricing & Calculator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            <UtensilsCrossed className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="text-lg md:text-xl font-extrabold tracking-wider text-white font-cinzel block leading-none group-hover:text-amber-400 transition-colors">
              EAT LOVE REPEAT
            </span>
            <span className="text-[10px] tracking-widest text-amber-400/90 uppercase font-medium">
              Delhi Ka Special Swad
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-200 hover:text-white rounded-lg border border-neutral-700 hover:border-amber-500/60 bg-neutral-900/60 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Now (10% Off)</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-2.5 py-1.5 text-xs font-bold text-neutral-950 bg-amber-400 rounded-md"
          >
            10% Off
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-neutral-800 px-5 py-4 mt-3 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-amber-400 text-sm font-medium py-2 border-b border-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {BUSINESS_INFO.phone} (24/7)
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                'Namaste! I would like to inquire about catering services for my upcoming event. Please share sample menus and quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp {BUSINESS_INFO.whatsapp}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-sm font-bold text-black bg-amber-400 rounded-lg shadow-md shadow-amber-500/20"
            >
              Get Instant Quote with 10% Off
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
