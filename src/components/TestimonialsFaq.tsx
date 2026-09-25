import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/cateringData';
import { Star, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const TestimonialsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0e1017] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              Verified Delhi NCR Hosts
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel">
              Words From Our Happy Hosts
            </h2>
            <p className="mt-3 text-sm text-neutral-300">
              Real reviews from families, couples, and organizers who trusted Eat Love Repeat Caterers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14161f] border border-neutral-800/90 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-amber-300/90 italic">
                    "{t.highlight}"
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <h4 className="text-sm font-bold text-white font-cinzel">{t.name}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{t.event}</p>
                  <p className="text-[11px] text-amber-400/80 font-mono mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-10 border-t border-neutral-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-neutral-300">
              Clear answers regarding pricing, hygiene, custom menus, and 24/7 event scheduling.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#14161f] border border-neutral-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ml-3 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-neutral-400">
            Still have questions? Chat directly with our catering manager 24/7 on WhatsApp at{' '}
            <a
              href="https://wa.me/919971659254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold underline"
            >
              +91 9971659254
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
