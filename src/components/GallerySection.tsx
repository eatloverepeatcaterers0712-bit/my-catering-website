import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/cateringData';
import { Camera, Maximize2, X, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'wedding', label: '1. Wedding Party' },
    { id: 'birthday', label: '2. Birthday Party' },
    { id: 'outdoor', label: '3. Outdoor Catering' },
    { id: 'bhandara', label: '4. Bhandara Catering' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => activeFilter === 'all' || photo.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 bg-[#0e1017] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Event Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-cinzel">
              Event Gallery & Setups
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Explore authentic glimpses of our birthday party live counters, grand wedding banquets, open-air farmhouse buffets, and traditional Delhi bhandaras.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  activeFilter === f.id
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-[#14161f] text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {photo.categoryLabel}
                </span>
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/60 text-white">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-amber-300/90 mt-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{photo.location}</span>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12141c] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-amber-400 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {selectedPhoto.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {selectedPhoto.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-cinzel">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
