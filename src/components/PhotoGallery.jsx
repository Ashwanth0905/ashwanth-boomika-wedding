import React, { useState } from 'react';
import { Camera, X, ZoomIn, Image as ImageIcon, Heart } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider } from './IndianMotifs';

/**
 * PhotoGallery Component
 * Provides a responsive royal photo gallery with full-screen Lightbox viewing.
 * Specially designed so the user's uploaded photographs can be seamlessly displayed.
 */
export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Checks if user has added personal photos or is waiting for uploads
  const photos = weddingData.gallery || [];

  return (
    <section className="py-12 px-4 relative z-10 text-center">
      <div className="max-w-md md:max-w-2xl mx-auto bg-gradient-to-b from-[#fffdf9] to-[#faf5e8] p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 shadow-[0_12px_40px_rgba(11,35,21,0.08)]">
        
        <p className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-900 font-semibold mb-1">
          Moments Of Joy
        </p>
        
        <h3 className="font-script text-3xl md:text-4xl text-amber-700 my-1">
          Photo Gallery
        </h3>

        <p className="text-xs text-stone-600 font-sans mb-4">
          Celebrating the journey of Ashwanth &amp; Boomika
        </p>

        <RoyalMandalaDivider className="mb-6" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setSelectedPhoto(item)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-500/30 bg-[#f4ecd8] shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.alt || `Ashwanth & Boomika photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  // Fallback styling if image url not found yet
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback placeholder when waiting for user's upload */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center p-4 text-center bg-[#f7f1e1]">
                <Camera className="w-8 h-8 text-amber-600/60 mb-2" />
                <span className="font-serif text-xs text-emerald-950 font-bold">
                  Ashwanth &amp; Boomika
                </span>
                <span className="text-[10px] text-stone-500 font-sans mt-1">
                  Photograph {idx + 1}
                </span>
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <div className="flex items-center gap-1.5 text-amber-200 text-xs font-serif">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Note for the Host */}
        <div className="mt-6 pt-4 border-t border-amber-400/30">
          <p className="text-[11px] font-sans text-stone-500 italic">
            Tap on any photo to view in high resolution
          </p>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div 
            className="relative max-w-3xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt || "Reception Gallery Photo"}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border-2 border-amber-400/60 shadow-2xl"
            />
            {selectedPhoto.caption && (
              <p className="mt-3 text-amber-200 font-serif text-sm tracking-wide text-center">
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
