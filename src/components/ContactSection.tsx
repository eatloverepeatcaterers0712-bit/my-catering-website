import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, Send, CheckCircle2, Sparkles, Tag } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cateringData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: "Wedding Party's",
    guestCount: '100',
    eventDate: '',
    location: '',
    notes: '',
    promoCode: BUSINESS_INFO.discountCode,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Also construct WhatsApp deep link for instantaneous follow-up
      const waText = `Namaste Eat Love Repeat Caterers!
New Catering Inquiry:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Event: ${formData.eventType}
• Guests: ${formData.guestCount}
• Date: ${formData.eventDate || 'To be decided'}
• Location: ${formData.location || 'Delhi NCR'}
• Applied Promo: ${formData.promoCode} (10% OFF)
• Notes: ${formData.notes || 'None'}`;

      window.open(
        `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(waText)}`,
        '_blank'
      );
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0c10] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Overview & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                24/7 Booking & Inquiries
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel">
                Get In Touch
              </h2>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Planning a birthday, wedding, outdoor feast, or sacred bhandara? Reach out directly. Our team is available 24/7 to craft your personalized catering experience.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#14161f] border border-neutral-800 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider block">
                    Phone Calling (24/7)
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-mono">
                    +91 {BUSINESS_INFO.phone}
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Direct line to our senior catering manager
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  'Namaste Eat Love Repeat Caterers! I would like to check catering availability and receive menu options.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-[#14161f] border border-neutral-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider block">
                    Official WhatsApp
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                    +91 {BUSINESS_INFO.whatsapp}
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Fast quotes, custom plate building & menu PDFs
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#14161f] border border-neutral-800 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider block">
                    Email Inquiries
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-mono">
                    {BUSINESS_INFO.email}
                  </span>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Secondary: {BUSINESS_INFO.secondaryEmail}
                  </p>
                </div>
              </a>

              {/* Working Hours & Service Area */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#14161f] border border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase font-semibold tracking-wider block">
                    Working Hours
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {BUSINESS_INFO.workingHours}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Serving entire Delhi NCR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture & 10% Discount Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14161f] border border-amber-500/30 shadow-2xl relative">
              <div className="mb-6 border-b border-neutral-800 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-white font-cinzel">
                    Request Catering Proposal
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-400 text-neutral-950 px-2.5 py-0.5 rounded shadow">
                    <Tag className="w-3 h-3" />
                    10% OFF APPLIED
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill your requirements below and receive an itemized proposal within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white font-cinzel">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your catering request with <strong className="text-amber-400">FLAT 10% OFF</strong> has been received! Our senior event coordinator is reaching out to you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9811XXXXXX"
                        className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Service / Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
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
                        Guest Count (approx) *
                      </label>
                      <input
                        type="number"
                        min="15"
                        required
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        placeholder="e.g. 50"
                        className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Event Date (approx)
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Event Location in Delhi NCR
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Chattarpur Farmhouse, Rohini, South Ex, Noida Sec 50..."
                      className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Special Dietary / Menu Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Require separate Satvik counter without onion/garlic, Live Golgappa station, pure desi ghee sweets..."
                      className="w-full bg-[#0d0e14] border border-neutral-800 focus:border-amber-400 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none resize-none"
                    />
                  </div>

                  {/* Promo Code Lock */}
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-amber-200">
                        Promo Code: <strong>{BUSINESS_INFO.discountCode}</strong> (Flat 10% Discount applied)
                      </span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold">ACTIVE</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry & Claim 10% Off'}</span>
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    Your details are completely confidential. We reply within minutes 24/7.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
