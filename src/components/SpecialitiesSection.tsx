import React from 'react';
import { Leaf, Flame, Clock, HeartHandshake, ShieldCheck, IndianRupee } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

export const SpecialitiesSection: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Pure Vegetarian',
      subtitle: 'Shuddh Shakahari & Satvik Purity',
      description: 'Our commercial kitchens are strictly 100% vegetarian. We source daily fresh paneer, organic vegetables, and pure desi ghee. Dedicated Jain & Satvik (no onion, no garlic) catering available.'
    },
    {
      icon: Flame,
      title: 'Delhi Ka Special Swad',
      subtitle: 'Iconic North Indian Recipes',
      description: 'From slow-simmered 18-hour Dal Makhani and fragrant Shahi Paneer to crispy Chandni Chowk street chaat and live tawa jalebis, we bring authentic Delhi flavors to your guests.'
    },
    {
      icon: Clock,
      title: '24/7 Service Availability',
      subtitle: 'Covering Every Special Moment',
      description: 'Whether it is a 5:00 AM Brahma Muhurta Hawan, an afternoon corporate feast, or a 2:00 AM wedding Phera meal, our logistics and chefs operate around the clock without delays.'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic, Healthy & Fresh',
      subtitle: 'Founder’s Core Pledge',
      description: 'Hospital-grade sanitary food preparation, zero artificial coloring or harmful chemical additives, RO water cooking, and clean uniformed banquet staff.'
    },
    {
      icon: IndianRupee,
      title: '₹5,000 Onwards Pricing',
      subtitle: 'Affordable Luxury for Everyone',
      description: 'We believe good food should never be out of reach. Intimate home events start from ₹5,000 flat, with transparent cost breakdowns and no hidden surprises.'
    },
    {
      icon: HeartHandshake,
      title: 'Devoted Bhandara Catering',
      subtitle: 'Mahaprasad for Devotees',
      description: 'Mass scale langar, Jagran, and Mata Ki Chowki catering with sacred dedication. Bedmi Puri and Hing Dubki Aloo cooked with deep devotion and impeccable sanctity.'
    }
  ];

  return (
    <section className="py-20 bg-[#0b0c10] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            The Eat Love Repeat Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-cinzel">
            Why Delhi Celebrates With Us
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            {BUSINESS_INFO.mission}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12141c] border border-neutral-800/80 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5 font-cinzel">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
