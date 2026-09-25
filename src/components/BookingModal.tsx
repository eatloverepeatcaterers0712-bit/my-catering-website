import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cateringData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  prefillDetails?: {
    packageName?: string;
    guestCount?: number;
    estimatedPrice?: number;
    discountAmount?: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  prefillDetails,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    preselectedServiceId
      ? SERVICES.find((s) => s.id === preselectedServiceId)?.title || "Wedding Party's"
      : "Wedding Party's"
  );
  const [guestCount, setGuestCount] = useState<number>(
    prefillDetails?.guestCount || 50
  );
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES.find((s) => s.id === preselectedServiceId);
      if (match) setService(match.title);
    }
    if (prefillDetails?.guestCount) {
      setGuestCount(prefillDetails.guestCount);
    }
  }, [preselectedServiceId, prefillDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `Namaste Eat Love Repeat Caterers!
I am requesting a catering booking:
• Name: ${name}
• Phone: ${phone}
• Service: ${service}
• Guest Count: ${guestCount}
• Date: ${eventDate || 'To be decided'}
• Venue: ${location || 'Delhi NCR'}
• Promo: ${BUSINESS_INFO.discountCode} (Flat 10% Discount)
• Notes: ${notes || 'None'}
${prefillDetails?.estimatedPrice ? `• Estimated Budget: ₹${prefillDetails.estimatedPrice}` : ''}`;

    window.open(
      `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(waText)}`,
      '_blank'
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#12141c] border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white font-cinzel">
              Booking Inquiry Confirmed!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Your inquiry with{' '}
              <strong className="text-amber-400">Flat 10% OFF</strong> has been locked. We will contact you at{' '}
              <strong className="text-white font-mono">{phone}</strong> within 15 minutes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Eat Love Repeat Caterers
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Delhi NCR 24/7
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-cinzel">
              Book Your Catering Event
            </h3>

            {/* Promo banner */}
            <div className="my-4 p-3 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-amber-300 block">
                    {BUSINESS_INFO.discountOffer}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    Coupon: {BUSINESS_INFO.discountCode} (Applied)
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400">10% SAVINGS</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amit Kapoor"
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 7982486086"
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Service Type *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Estimated Guests *
                  </label>
                  <input
                    type="number"
                    min="15"
                    required
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Venue Area in Delhi NCR
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. South Ex / Rohini / Noida"
                    className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Menu Requests / Dietary Preferences
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Pure Satvik (No onion/garlic), live street chaat counter, desi ghee halwa..."
                  className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Booking & Claim 10% Discount</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Pure Vegetarian · Pure Desi Ghee · 24/7 Support</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
