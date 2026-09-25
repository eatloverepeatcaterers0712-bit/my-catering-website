import React from 'react';
import { BUSINESS_INFO } from '../data/cateringData';
import { Sparkles, ShieldCheck, Heart, Clock, Award, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0c10] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="/src/assets/images/hero_catering_buffet_1790364192298.jpg"
                alt="Eat Love Repeat culinary chefs and traditional Indian buffet presentation"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Delhi Ka Special Swad
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white font-cinzel">
                  Pure Vegetarian Delicacies with Soul & Sanity.
                </p>
              </div>
            </div>

            {/* Quick stats with quantitative rigor */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#12141c] border border-neutral-800/80 text-center">
                <span className="text-2xl font-black text-amber-400 font-cinzel block tabular-nums">
                  100%
                </span>
                <span className="text-xs text-neutral-400 font-medium">Pure Vegetarian</span>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-neutral-800/80 text-center">
                <span className="text-2xl font-black text-amber-400 font-cinzel block tabular-nums">
                  24/7
                </span>
                <span className="text-xs text-neutral-400 font-medium">Always Available</span>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-neutral-800/80 text-center">
                <span className="text-2xl font-black text-amber-400 font-cinzel block tabular-nums">
                  ₹5,000+
                </span>
                <span className="text-xs text-neutral-400 font-medium">Packs Starting At</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel">
                About Eat Love Repeat Caterers
              </h2>
            </div>

            {/* The verbatim mission statement from the user prompt */}
            <blockquote className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-100 text-sm sm:text-base font-medium italic leading-relaxed">
              "{BUSINESS_INFO.mission}"
            </blockquote>

            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Rooted in the gastronomic heart of Delhi, <strong>Eat Love Repeat Caterers</strong> was conceived with a clear vision: every family milestone, wedding feast, corporate gathering, or holy satsang deserves food that is not only rich and sumptuous, but also strictly pure, wholesome, and affordable.
              </p>
              <p>
                We specialize exclusively in authentic <strong>North Indian Pure Vegetarian Cuisine</strong>. From the iconic street chaats of Chandni Chowk to royal Awadhi gravies simmered with slow embers and pure cow desi ghee, our recipes celebrate the legendary taste of Delhi without exorbitant 5-star price markups.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12141c] border border-neutral-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Uncompromising Hygiene
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    RO water cooking, medical-grade sanitization, and spotless copper/stainless steel chafing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12141c] border border-neutral-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    24/7 Availability
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Ready around the clock for early morning hawans, wedding pheras, and midnight events.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12141c] border border-neutral-800">
                <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    100% Satvik Dedicated
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Sacred bhandara and pooja mahaprasad prepared with zero onion, garlic, or contamination.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12141c] border border-neutral-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Affordable Luxury
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Celebration packages starting at just ₹5,000 flat, tailored precisely to your guest count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
