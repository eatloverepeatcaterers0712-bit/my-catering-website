import React from 'react';
import { SERVICES, ServiceItem } from '../data/cateringData';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#0e1017] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Tailored Hospitality Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-cinzel">
            Services We Specialize In
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            From intimate birthday gatherings starting at ₹5,000 to royal multi-day weddings and grand sacred bhandaras, we deliver pristine pure vegetarian hospitality across Delhi NCR.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const indexStr = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#14161f] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50"
              >
                <div>
                  {/* Service Image with Subtle Zoom */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={service.image}
                      alt={`${service.title} catering setup by Eat Love Repeat`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/40 to-transparent" />
                    
                    {/* Index & Price indicator */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-amber-400 bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/20">
                        {indexStr} · {service.title}
                      </span>
                      <span className="text-xs font-semibold text-white bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-neutral-700">
                        {service.startingPrice}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-amber-300 font-medium tracking-wide uppercase">
                        {service.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-white font-cinzel">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                      <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Key Inclusions & Highlights
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                            <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For note */}
                    <div className="pt-3 text-xs text-neutral-400">
                      <strong className="text-neutral-300">Ideal For:</strong> {service.idealFor}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-neutral-800/50 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/919971659254?text=${encodeURIComponent(
                      `Namaste! I am interested in booking your ${service.title} catering service in Delhi NCR. Please share menu options and packages.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-700 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
