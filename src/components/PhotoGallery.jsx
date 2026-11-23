import React, { useState, useEffect } from 'react';
import { Camera, X, ZoomIn, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider, AntiqueCorner } from './IndianMotifs';

/**
 * PhotoGallery Component ("Cherished Moments")
 * Displays all 4 photographs:
 * 1. Couple Heart photo (Ashwanth & Boomika)
 * 2. Groom portrait (V.N. Ashwanth)
 * 3. Bride portrait (N. Boomika)
 * 4. Hand in Hand photo
 * Includes full-screen Lightbox viewing with prominent Close (X) button.
 */
export const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = weddingData.gallery || [];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Keyboard controls: Escape to close, arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, photos.length]);

  return (
    <section className="py-12 px-4 relative z-10 text-center animate-fadeIn">
      <div className="max-w-md sm:max-w-xl mx-auto bg-gradient-to-b from-[#fffdf9] via-[#faf5e8] to-[#f6eedb] p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 shadow-[0_15px_45px_rgba(11,35,21,0.08)] relative overflow-hidden">
        
        {/* Antique Gold Corners */}
        <div className="absolute top-2 left-2 text-amber-600/60 pointer-events-none">
          <AntiqueCorner position="top-left" className="w-10 h-10" />
        </div>
        <div className="absolute top-2 right-2 text-amber-600/60 pointer-events-none">
          <AntiqueCorner position="top-right" className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 left-2 text-amber-600/60 pointer-events-none">
          <AntiqueCorner position="bottom-left" className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 right-2 text-amber-600/60 pointer-events-none">
          <AntiqueCorner position="bottom-right" className="w-10 h-10" />
        </div>

        <p className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-900 font-semibold mb-1">
          Cherished Moments
        </p>
        
        {/* Explicit Capital A for Ashwanth */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-800 my-1 tracking-wide">
          Ashwanth &amp; Boomika
        </h3>

        <p className="text-xs text-stone-600 font-sans mb-4">
          Celebrating our journey of love &amp; togetherness
        </p>

        <RoyalMandalaDivider className="mb-6" />

        {/* 1. FEATURED: BRIDE & GROOM COUPLE PICTURE */}
        {photos[0] && (
          <div 
            onClick={() => setSelectedIndex(0)}
            className="group relative w-full aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-500/50 shadow-md mb-4 bg-stone-900"
          >
            <img
              src={photos[0].url}
              alt={photos[0].alt}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-black/20 flex flex-col justify-between p-4 text-left">
              <span className="self-end px-3 py-1 rounded-full bg-black/50 backdrop-blur-xs text-amber-300 text-[10px] font-serif tracking-widest uppercase border border-amber-400/40">
                Tap to Expand
              </span>
              <div>
                <p className="text-white font-serif font-bold text-base sm:text-lg drop-shadow-md">
                  Ashwanth &amp; Boomika
                </p>
                <p className="text-amber-200 text-xs font-sans tracking-wide">
                  {photos[0].caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2 & 3. DUO: GROOM & BRIDE INDIVIDUAL PORTRAITS */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          {/* Groom Portrait */}
          {photos[1] && (
            <div
              onClick={() => setSelectedIndex(1)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-500/40 bg-stone-900 shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300"
            >
              <img
                src={photos[1].url}
                alt={photos[1].alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                <span className="text-[10px] font-sans tracking-[0.2em] text-amber-300 font-semibold uppercase">
                  Groom
                </span>
                <p className="text-white font-serif font-bold text-sm">
                  V.N. Ashwanth
                </p>
              </div>
            </div>
          )}

          {/* Bride Portrait */}
          {photos[2] && (
            <div
              onClick={() => setSelectedIndex(2)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-500/40 bg-stone-900 shadow-sm hover:shadow-md hover:border-amber-500 transition-all duration-300"
            >
              <img
                src={photos[2].url}
                alt={photos[2].alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                <span className="text-[10px] font-sans tracking-[0.2em] text-amber-300 font-semibold uppercase">
                  Bride
                </span>
                <p className="text-white font-serif font-bold text-sm">
                  N. Boomika
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. HAND IN HAND PICTURE */}
        {photos[3] && (
          <div
            onClick={() => setSelectedIndex(3)}
            className="group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-500/40 bg-stone-900 shadow-md hover:shadow-lg hover:border-amber-500 transition-all duration-300"
          >
            <img
              src={photos[3].url}
              alt={photos[3].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-transparent flex items-end justify-between p-4 text-left">
              <div>
                <p className="text-white font-serif font-bold text-base">
                  Hand in Hand
                </p>
                <p className="text-amber-200 text-xs font-sans">
                  {photos[3].caption}
                </p>
              </div>
              <ZoomIn className="w-4 h-4 text-amber-300 self-end" />
            </div>
          </div>
        )}

        <div className="mt-6 pt-3 border-t border-amber-400/30">
          <p className="text-[11px] font-sans text-stone-500 italic">
            Tap on any photograph to view in full resolution
          </p>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fadeIn select-none"
          onClick={() => setSelectedIndex(null)}
        >
          {/* PROMINENT HIGH-VISIBILITY CLOSE BUTTON (Top-Left to avoid music button overlap) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-[100000] flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950 text-amber-300 border-2 border-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-emerald-900 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-5 h-5 text-amber-300 stroke-[2.5]" />
            <span className="text-xs font-serif font-bold tracking-wider uppercase">Close (✕)</span>
          </button>

          {/* Navigation Controls */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-amber-400/50 text-amber-300 transition-all z-[100000] cursor-pointer active:scale-95 shadow-xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-amber-400/50 text-amber-300 transition-all z-[100000] cursor-pointer active:scale-95 shadow-xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image & Caption Container */}
          <div 
            className="relative max-w-4xl max-h-[82vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].url}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl border-2 border-amber-400/70 shadow-2xl"
            />

            {photos[selectedIndex].caption && (
              <div className="mt-3 px-4 py-1.5 rounded-full bg-black/70 border border-amber-400/40 text-amber-200 font-serif text-xs sm:text-sm tracking-wide text-center max-w-lg">
                {photos[selectedIndex].caption}
              </div>
            )}

            {/* Bottom Secondary Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="mt-3 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-stone-500/50 text-stone-300 hover:text-white text-xs font-serif uppercase tracking-widest transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Back to Invitation</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
