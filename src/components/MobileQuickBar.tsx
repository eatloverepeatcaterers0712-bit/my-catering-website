import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0d12]/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2 shadow-2xl flex items-center justify-between gap-2 h-14">
      {/* Call button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-lg active:scale-95 transition-transform"
        aria-label="Call 24/7"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
          'Namaste Eat Love Repeat Caterers! I want to check catering packages and 10% first order discount.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-emerald-700 rounded-lg active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book with 10% Off */}
      <button
        onClick={onOpenBooking}
        className="flex-[1.4] flex items-center justify-center gap-1 py-2 px-2 text-xs font-extrabold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg active:scale-95 transition-transform shadow-md shadow-amber-500/20"
        aria-label="Book with 10% discount"
      >
        <Sparkles className="w-3 h-3 text-neutral-950" />
        <span className="truncate">10% Off Book</span>
      </button>
    </div>
  );
};
