import React from 'react';
import { Sparkles, MessageCircle, Phone, Clock, ShieldCheck, ChevronRight, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_catering_buffet_1790364192298.jpg"
          alt="Opulent Indian catering buffet setup with traditional copper and brass chafing dishes"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        {/* Layered dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/85 to-[#0b0c10]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-3xl space-y-6">
          {/* Tagline & Trust Callout */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_INFO.tagline}</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span className="text-neutral-300">{BUSINESS_INFO.hindiTagline}</span>
          </div>

          {/* Primary Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance font-cinzel">
            Royal Catering For Every Precious Celebration.
          </h1>

          {/* Mission & Value Proposition */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
            Crafting memorable feasts across Delhi NCR with <span className="text-amber-300 font-semibold">100% Pure Vegetarian</span> authenticity, pure desi ghee, and uncompromising kitchen hygiene. Available round-the-clock for your special moments.
          </p>

          {/* Special First Order Discount Banner Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-950/70 via-neutral-900/90 to-amber-950/40 border border-amber-500/40 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-neutral-950 uppercase tracking-wider">
                  Exclusive Offer
                </span>
                <span className="text-xs text-amber-300/90 font-medium">Use Code: <strong>{BUSINESS_INFO.discountCode}</strong></span>
              </div>
              <p className="text-sm font-semibold text-white">
                {BUSINESS_INFO.discountOffer}
              </p>
              <p className="text-xs text-neutral-400">
                Packs starting from <strong className="text-neutral-200">₹5,000 onwards</strong> · Tailored guest menus
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap self-stretch sm:self-auto text-center"
            >
              Claim 10% Discount
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Catering (10% Off)</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                'Namaste Eat Love Repeat Caterers! I want to inquire about catering services for my upcoming event in Delhi NCR. Please share details and my 10% discount.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-700/90 hover:bg-emerald-600 rounded-xl border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>

            <button
              onClick={onExploreMenu}
              className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-xl border border-neutral-700 transition-colors"
            >
              <span>Explore Sample Menu</span>
            </button>
          </div>

          {/* Unboxed Metadata with Typographic Separators */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-neutral-400 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Pure Vegetarian</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Availability</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Starting from ₹5,000</span>
            </div>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Covering All Delhi NCR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
