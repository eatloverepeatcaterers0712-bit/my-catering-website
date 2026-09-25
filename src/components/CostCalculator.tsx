import React, { useState, useId } from 'react';
import { PRICING_PACKAGES, BUSINESS_INFO } from '../data/cateringData';
import { Calculator, Check, MessageCircle, Sparkles, Tag, ArrowRight } from 'lucide-react';

interface CostCalculatorProps {
  onOpenBookingWithDetails: (details: {
    packageName: string;
    guestCount: number;
    estimatedPrice: number;
    discountAmount: number;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenBookingWithDetails }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('mini_pack');
  const [guestCount, setGuestCount] = useState<number>(30);
  const [applyFirstOrderDiscount, setApplyFirstOrderDiscount] = useState<boolean>(true);
  const [includeLiveChaat, setIncludeLiveChaat] = useState<boolean>(false);
  const [includeLiveJalebi, setIncludeLiveJalebi] = useState<boolean>(false);
  const [includeUniformedStaff, setIncludeUniformedStaff] = useState<boolean>(true);

  const guestsInputId = useId();
  const liveChaatInputId = useId();
  const liveJalebiInputId = useId();
  const staffInputId = useId();

  const currentPlan = PRICING_PACKAGES.find((p) => p.id === selectedPlanId) || PRICING_PACKAGES[0];

  // Price calculations
  const baseFoodCost = guestCount * currentPlan.pricePerPlate;
  const chaatAddon = includeLiveChaat ? 2500 : 0;
  const jalebiAddon = includeLiveJalebi ? 3500 : 0;
  const staffAddon = includeUniformedStaff ? 2000 : 0;

  const rawSubtotal = baseFoodCost + chaatAddon + jalebiAddon + staffAddon;
  // Ensure minimum order of ₹5,000 as stated in prompt
  const subtotalBeforeDiscount = Math.max(rawSubtotal, currentPlan.minimumOrder, 5000);

  const discountAmount = applyFirstOrderDiscount ? Math.round(subtotalBeforeDiscount * 0.10) : 0;
  const finalEstimate = subtotalBeforeDiscount - discountAmount;

  // Format WhatsApp message
  const generateWhatsAppLink = () => {
    const addonsList: string[] = [];
    if (includeLiveChaat) addonsList.push('Live Golgappa/Chaat Station');
    if (includeLiveJalebi) addonsList.push('Live Jalebi Rabri Tawa');
    if (includeUniformedStaff) addonsList.push('Uniformed Banquet Staff');

    const message = `Namaste Eat Love Repeat Caterers!
I calculated an estimate on your website:
• Event Type: ${currentPlan.name} (${currentPlan.eventType})
• Guest Count: ${guestCount} guests
• Add-ons: ${addonsList.length > 0 ? addonsList.join(', ') : 'None'}
• Subtotal: ₹${subtotalBeforeDiscount.toLocaleString('en-IN')}
• First Order Promo (FIRST10 - 10% OFF): -₹${discountAmount.toLocaleString('en-IN')}
• Estimated Final: ₹${finalEstimate.toLocaleString('en-IN')}

Please confirm menu options and availability for my event in Delhi NCR.`;

    return `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="py-20 bg-[#0b0c10] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator & Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-cinzel">
            Transparent Pricing Starting From ₹5,000
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {BUSINESS_INFO.pricingNote}. Build your package below and automatically unlock your <span className="text-amber-400 font-semibold">Flat 10% First Order Discount</span>!
          </p>
        </div>

        {/* Pricing Plan Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PRICING_PACKAGES.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181a25] border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400'
                    : 'bg-[#12141c] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 right-4 text-[10px] font-bold bg-amber-400 text-neutral-950 px-2 py-0.5 rounded shadow">
                    Most Popular
                  </span>
                )}

                <div>
                  <span className="text-[11px] font-semibold text-amber-400 uppercase block tracking-wider">
                    {plan.eventType}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 font-cinzel">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-white tabular-nums">
                      ₹{plan.pricePerPlate}
                    </span>
                    <span className="text-xs text-neutral-400">/ plate</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400">
                  Min. order: <strong className="text-neutral-200">₹{plan.minimumOrder.toLocaleString('en-IN')}</strong>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Estimator Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#14161f] border border-neutral-800 rounded-2xl p-6 sm:p-8">
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={guestsInputId} className="text-sm font-semibold text-white">
                  Expected Guests
                </label>
                <span className="text-base font-bold text-amber-400 font-mono tabular-nums">
                  {guestCount} Guests
                </span>
              </div>
              <input
                id={guestsInputId}
                type="range"
                min="15"
                max="1000"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>15 Guests (Mini Gathering)</span>
                <span>200 Guests</span>
                <span>1000+ (Grand Banquet)</span>
              </div>
            </div>

            {/* Inclusions of the selected plan */}
            <div className="p-4 rounded-xl bg-[#0e1017] border border-neutral-800/80 space-y-2">
              <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                {currentPlan.name} Inclusions:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPlan.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Add-ons */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Optional Live Stations & Add-ons
              </div>

              <div className="space-y-2">
                <label htmlFor={liveChaatInputId} className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <input
                      id={liveChaatInputId}
                      type="checkbox"
                      checked={includeLiveChaat}
                      onChange={(e) => setIncludeLiveChaat(e.target.checked)}
                      className="w-4 h-4 rounded border-neutral-700 text-amber-500 focus:ring-amber-500 bg-neutral-800"
                    />
                    <span className="text-neutral-200">Live Delhi 6 Golgappa & Chaat Counter</span>
                  </div>
                  <span className="text-amber-400 font-mono font-semibold">+₹2,500</span>
                </label>

                <label htmlFor={liveJalebiInputId} className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <input
                      id={liveJalebiInputId}
                      type="checkbox"
                      checked={includeLiveJalebi}
                      onChange={(e) => setIncludeLiveJalebi(e.target.checked)}
                      className="w-4 h-4 rounded border-neutral-700 text-amber-500 focus:ring-amber-500 bg-neutral-800"
                    />
                    <span className="text-neutral-200">Live Tawa Jalebi with Thick Desi Ghee Rabri</span>
                  </div>
                  <span className="text-amber-400 font-mono font-semibold">+₹3,500</span>
                </label>

                <label htmlFor={staffInputId} className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <input
                      id={staffInputId}
                      type="checkbox"
                      checked={includeUniformedStaff}
                      onChange={(e) => setIncludeUniformedStaff(e.target.checked)}
                      className="w-4 h-4 rounded border-neutral-700 text-amber-500 focus:ring-amber-500 bg-neutral-800"
                    />
                    <span className="text-neutral-200">Uniformed Banquet Stewards & Sanitized Cutlery</span>
                  </div>
                  <span className="text-amber-400 font-mono font-semibold">+₹2,000</span>
                </label>
              </div>
            </div>
          </div>

          {/* Quotation Summary Card: Right 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#0d0e14] border border-amber-500/30 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Live Quotation Breakdown
                </span>
                <span className="text-xs font-mono text-amber-400">
                  {guestCount} Plates
                </span>
              </div>

              {/* Price Details */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Food Base ({guestCount} × ₹{currentPlan.pricePerPlate})</span>
                  <span className="font-mono tabular-nums">₹{baseFoodCost.toLocaleString('en-IN')}</span>
                </div>

                {(includeLiveChaat || includeLiveJalebi || includeUniformedStaff) && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Selected Add-ons</span>
                    <span className="font-mono tabular-nums">
                      ₹{(chaatAddon + jalebiAddon + staffAddon).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-neutral-400 text-xs pt-1 border-t border-neutral-800/80">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">₹{subtotalBeforeDiscount.toLocaleString('en-IN')}</span>
                </div>

                {/* 10% Discount Toggle */}
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="text-xs font-bold text-amber-300">
                        First Catering Flat 10% OFF
                      </p>
                      <p className="text-[10px] text-amber-400/80 font-mono">
                        Code: {BUSINESS_INFO.discountCode}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplyFirstOrderDiscount(!applyFirstOrderDiscount)}
                    className="text-xs font-semibold text-amber-300 underline focus:outline-none"
                  >
                    {applyFirstOrderDiscount ? 'Remove' : 'Apply'}
                  </button>
                </div>

                {applyFirstOrderDiscount && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount (10% OFF)</span>
                    <span className="font-mono tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Final Amount */}
              <div className="pt-3 border-t border-neutral-800">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 block">Estimated Net Total</span>
                    <span className="text-[10px] text-neutral-500">(Includes food, transport & setup)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-amber-400 font-mono tabular-nums">
                      ₹{finalEstimate.toLocaleString('en-IN')}
                    </span>
                    {applyFirstOrderDiscount && (
                      <span className="block text-[11px] text-emerald-400">
                        You save ₹{discountAmount.toLocaleString('en-IN')}!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quotation CTA Actions */}
            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Send Estimate to WhatsApp (9971659254)</span>
              </a>

              <button
                onClick={() =>
                  onOpenBookingWithDetails({
                    packageName: currentPlan.name,
                    guestCount,
                    estimatedPrice: finalEstimate,
                    discountAmount,
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
              >
                <span>Book This Package (Lock 10% Off)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-neutral-500">
                *Approximate estimate. Exact price depends on custom dish choices and Delhi NCR location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
