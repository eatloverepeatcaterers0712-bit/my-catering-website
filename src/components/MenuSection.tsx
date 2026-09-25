import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/cateringData';
import { Sparkles, Utensils, Search, MessageCircle, Check } from 'lucide-react';

interface MenuSectionProps {
  onOpenBooking: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'chaat', label: 'Delhi 6 Chaat' },
    { id: 'starters', label: 'Tandoori Starters' },
    { id: 'mains', label: 'Shahi Curries' },
    { id: 'breads_rice', label: 'Breads & Rice' },
    { id: 'desserts', label: 'Desi Ghee Sweets' },
    { id: 'bhandara', label: 'Bhandara Special' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = MENU_ITEMS.filter((item: MenuItem) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hindiName && item.hindiName.includes(searchQuery)) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-[#0e1017] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              Authentic North Indian Pure Veg Gastronomy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-cinzel">
              Sample Menu: Everything You Need
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Curated recipes steeped in Chandni Chowk and Awadhi traditions. Prepared fresh with pure cow desi ghee, hand-ground spices, and 100% vegetarian ingredients.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/919971659254?text=${encodeURIComponent(
                'Namaste! Please send me the complete PDF menu and catering rates of Eat Love Repeat Caterers.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-700 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Get Menu on WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors whitespace-nowrap"
            >
              Custom Menu Inquiry
            </button>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g., Dal Makhani, Golgappe, Bedmi Puri, Jalebi)..."
              className="w-full bg-[#14161f] border border-neutral-800 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Segmented Controls (Functional buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-[#14161f] text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#14161f] border border-neutral-800/90 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-cinzel">
                      {item.name}
                    </h3>
                    {item.hindiName && (
                      <span className="text-xs text-amber-400/80 font-medium block mt-0.5">
                        {item.hindiName}
                      </span>
                    )}
                  </div>
                  <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center p-0.5 shrink-0" title="100% Pure Vegetarian">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Dish Badges */}
              <div className="pt-2 border-t border-neutral-800/60 flex flex-wrap items-center gap-2">
                {item.isChefSpecial && (
                  <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2 py-0.5 rounded">
                    ★ Chef’s Signature
                  </span>
                )}
                {item.isDesiGhee && (
                  <span className="text-[10px] font-semibold text-orange-300 bg-orange-950/60 border border-orange-600/40 px-2 py-0.5 rounded">
                    Pure Desi Ghee
                  </span>
                )}
                {item.isSatvik && (
                  <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/40 px-2 py-0.5 rounded">
                    Satvik (No Onion/Garlic)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#14161f] rounded-2xl border border-neutral-800">
            <Utensils className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
            <p className="text-base font-semibold text-white">No dishes found matching "{searchQuery}"</p>
            <p className="text-xs text-neutral-400 mt-1">
              Looking for something custom? We prepare all regional North Indian dishes on request.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-black bg-amber-400 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 to-[#161822] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white font-cinzel">
              Have specific regional cravings or family recipe requests?
            </h4>
            <p className="text-xs text-neutral-300">
              We offer full live tasting sessions before major weddings and custom spice level calibration.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors"
          >
            Design Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
};
