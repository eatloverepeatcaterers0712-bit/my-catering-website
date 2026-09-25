import React, { useState } from 'react';
import { Tag, Check, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

interface DiscountBannerProps {
  onClaim: () => void;
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ onClaim }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-neutral-950 py-3.5 px-4 shadow-lg border-y border-amber-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-950/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-neutral-950" />
          </div>
          <div>
            <p className="text-sm md:text-base font-extrabold uppercase tracking-wide">
              {BUSINESS_INFO.discountOffer}
            </p>
            <p className="text-xs text-neutral-900/80 font-medium">
              Applicable on all wedding, birthday, outdoor, and bhandara events across Delhi NCR.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-neutral-950 text-amber-300 hover:bg-neutral-900 rounded-md transition-colors"
            title="Click to copy code"
          >
            <Tag className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.discountCode}</span>
            {copied ? (
              <span className="flex items-center text-[10px] text-emerald-400 font-sans font-semibold">
                <Check className="w-3 h-3 ml-1" /> Copied!
              </span>
            ) : (
              <span className="text-[10px] text-neutral-400 font-sans font-normal">(Copy)</span>
            )}
          </button>

          <button
            onClick={onClaim}
            className="flex items-center gap-1 px-4 py-1.5 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-100 rounded-md shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>Book With 10% Off</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
