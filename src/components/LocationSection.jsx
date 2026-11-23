import React from 'react';
import { Navigation, MapPin } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider, AntiqueCorner } from './IndianMotifs';

/**
 * LocationSection Component
 * Replicates the reference website's exact Venue card:
 * - "Venue" header in script font
 * - "PSK MAHAL, ANTHIYUR BHAVANI" subtitle
 * - Live interactive Google Map embed iframe showing PSK Mahal A/C
 * - "VIEW ON GOOGLE MAPS" button working 100% on laptops & mobile
 */
export const LocationSection = () => {
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

        {/* Section Heading matching reference image */}
        <h3 className="font-script text-4xl sm:text-5xl text-amber-800 my-1">
          Venue
        </h3>

        <RoyalMandalaDivider className="my-3 max-w-[200px]" />

        {/* Venue Title as shown in reference */}
        <p className="font-serif text-sm sm:text-base font-bold text-[#0c3821] tracking-[0.2em] uppercase mt-2">
          {weddingData.venueSub}
        </p>

        <p className="font-sans text-xs sm:text-sm text-stone-600 font-medium mt-1 mb-5">
          {weddingData.address}
        </p>

        {/* LIVE GOOGLE MAPS EMBED IFRAME (As in reference image) */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-md mb-6 bg-stone-200">
          <iframe
            title="PSK Mahal Venue Map"
            src={weddingData.mapEmbedUrl}
            className="w-full h-[280px] sm:h-[320px] border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* PROMINENT "VIEW ON GOOGLE MAPS" BUTTON */}
        <div>
          <a
            href={weddingData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0c3821] via-[#165a34] to-[#0a2817] text-amber-200 hover:text-white border-2 border-amber-400/70 font-serif font-bold text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>VIEW ON GOOGLE MAPS</span>
          </a>

          <p className="text-[11px] font-sans text-stone-500 mt-2.5">
            Click to navigate directly on Google Maps (Laptop &amp; Mobile)
          </p>
        </div>

      </div>
    </section>
  );
};
