import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, UtensilsCrossed, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cateringData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-neutral-900 text-neutral-400 text-xs pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black">
                <UtensilsCrossed className="w-4 h-4 text-black" />
              </div>
              <span className="text-lg font-bold text-white font-cinzel tracking-wider">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-amber-400/90 font-medium tracking-wide">
              {BUSINESS_INFO.tagline} · {BUSINESS_INFO.hindiTagline}
            </p>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {BUSINESS_INFO.mission}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-300">
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
                100% Pure Vegetarian
              </span>
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
                North Indian Specialty
              </span>
              <span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
                24/7 Availability
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Catering Services
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Sample North Indian Menu
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Cost Estimator (10% Off)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Event Photo Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Catering Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-neutral-500">
                * Packages from ₹5,000 onwards
              </li>
            </ul>
          </div>

          {/* Contact Info & Working Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-mono">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                >
                  +91 {BUSINESS_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </li>
              <li className="flex items-start gap-2 text-[11px] text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Delhi NCR (Delhi, Noida, Gurugram, Ghaziabad, Faridabad)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Speciality: 100% Pure Vegetarian North Indian Catering.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
