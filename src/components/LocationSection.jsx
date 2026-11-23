import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider, AntiqueCorner } from './IndianMotifs';

/**
 * LocationSection Component
 * Dedicated Reception Venue & Direction details.
 * NOTE: Strictly NO QR CODE displayed.
 * "SHOW DIRECTIONS" button linking to: https://maps.app.goo.gl/ynhQ85xUwPMgvwg9A
 */
export const LocationSection = () => {
  const handleOpenMap = (e) => {
    // Fallback ensure mobile / webview navigation opens smoothly
    window.open(weddingData.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 px-4 relative z-10 text-center animate-fadeIn">
      <div className="max-w-md mx-auto bg-gradient-to-b from-[#fffdf9] via-[#faf5e8] to-[#f6eedb] p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 shadow-[0_15px_45px_rgba(11,35,21,0.08)] relative overflow-hidden">
        
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

        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-amber-600" />
          <span className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-900 font-semibold">
            Reception Venue
          </span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0c3821] tracking-wide mt-2">
          {weddingData.venue}
        </h3>

        <p className="font-sans text-sm text-stone-700 font-medium mt-1">
          {weddingData.address}
        </p>

        <RoyalMandalaDivider className="my-5" />

        {/* Stylized Venue Card */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 mb-6 bg-emerald-950 text-white p-5 shadow-inner">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #ffd166 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <Compass className="w-10 h-10 text-amber-400 mb-2 animate-spin-slow" />
            <span className="text-xs font-serif tracking-widest text-amber-300 uppercase">
              PSK Mahal • Reception Hall
            </span>
            <p className="text-stone-300 text-xs font-sans mt-1">
              Pattlur Nall Road
            </p>
            <div className="w-20 h-px bg-amber-400/40 my-3" />
            {/* Clear Capital A for Ashwanth */}
            <p className="text-[11px] text-amber-200/90 italic font-serif">
              Join us to bless the couple V.N. Ashwanth &amp; N. Boomika
            </p>
          </div>
        </div>

        {/* PROMINENT "SHOW DIRECTIONS" BUTTON (Direct Google Maps navigation) */}
        <div>
          <a
            href={weddingData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenMap}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0c3821] via-[#155432] to-[#0a2817] text-amber-200 hover:text-white border-2 border-amber-400/70 font-serif font-bold text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>SHOW DIRECTIONS</span>
          </a>

          <p className="text-[11px] font-sans text-stone-500 mt-2.5">
            Opens Google Maps directly for live navigation
          </p>
        </div>

      </div>
    </section>
  );
};
