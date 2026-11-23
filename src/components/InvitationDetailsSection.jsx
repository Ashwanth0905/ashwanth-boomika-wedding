import React from 'react';
import { LordGaneshaIcon, KuthuVilakku, AntiqueCorner, ToranGarland, RoyalMandalaDivider } from './IndianMotifs';
import { weddingData } from '../config/invitation';
import { Calendar, Clock, MapPin } from 'lucide-react';

/**
 * InvitationDetailsSection Component
 * The grand unveiled digital reception invitation.
 * Replicates the printed luxury card aesthetic:
 * - Cream and ivory background
 * - Dark green typography
 * - Antique gold borders & accents
 * - Hanging brass lamps (kuthu vilakku) & floral toran garland
 * - Exclusively reception details
 */
export const InvitationDetailsSection = () => {
  return (
    <section className="py-12 px-4 relative z-10 text-center">
      {/* Grand Royal Card Wrapper */}
      <div className="max-w-md md:max-w-xl mx-auto bg-gradient-to-b from-[#fffefc] via-[#fbf7ee] to-[#f4eedc] p-6 sm:p-10 rounded-3xl border-2 border-amber-500/50 shadow-[0_20px_50px_rgba(11,35,21,0.12)] relative overflow-hidden">
        
        {/* Hanging Floral Garland Toran at the very top */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-90">
          <ToranGarland className="w-full h-8" />
        </div>

        {/* Antique Gold Filigree Corners */}
        <div className="absolute top-3 left-3 text-amber-600/70 pointer-events-none">
          <AntiqueCorner position="top-left" className="w-12 h-12" />
        </div>
        <div className="absolute top-3 right-3 text-amber-600/70 pointer-events-none">
          <AntiqueCorner position="top-right" className="w-12 h-12" />
        </div>
        <div className="absolute bottom-3 left-3 text-amber-600/70 pointer-events-none">
          <AntiqueCorner position="bottom-left" className="w-12 h-12" />
        </div>
        <div className="absolute bottom-3 right-3 text-amber-600/70 pointer-events-none">
          <AntiqueCorner position="bottom-right" className="w-12 h-12" />
        </div>

        {/* Hanging Brass Lamps on both sides */}
        <div className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 text-amber-600/70 pointer-events-none">
          <KuthuVilakku className="w-8 h-28" />
        </div>
        <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-amber-600/70 pointer-events-none">
          <KuthuVilakku className="w-8 h-28" />
        </div>

        {/* Lord Ganesha Invocation */}
        <div className="pt-6 flex flex-col items-center">
          <div className="text-amber-600 mb-1">
            <LordGaneshaIcon className="w-14 h-14 md:w-16 md:h-16 mx-auto drop-shadow-sm" />
          </div>
          <p className="text-[11px] md:text-xs font-serif tracking-[0.25em] text-emerald-900 font-bold uppercase">
            || Om Shri Ganeshaya Namaha ||
          </p>
        </div>

        <RoyalMandalaDivider className="my-4" />

        {/* Invocation Blessing Statement */}
        <div className="max-w-sm mx-auto px-2">
          <p className="font-serif text-xs md:text-sm text-stone-700 leading-relaxed">
            {weddingData.blessingText}
          </p>
        </div>

        {/* Event Header Pill */}
        <div className="my-4">
          <span className="inline-block px-5 py-1.5 rounded-full border border-amber-600/50 bg-amber-500/10 text-emerald-950 font-serif font-extrabold text-xs md:text-sm tracking-[0.25em] uppercase shadow-xs">
            {weddingData.event}
          </span>
        </div>

        {/* Couple Names in Rich Royal Dark Green */}
        <div className="my-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c3821] tracking-wide">
            {weddingData.groom}
          </h2>

          <div className="flex items-center justify-center gap-3 my-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="font-script text-4xl sm:text-5xl text-amber-600 font-normal">
              &amp;
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c3821] tracking-wide">
            {weddingData.bride}
          </h2>
        </div>

        {/* Elegant Date & Timing Card */}
        <div className="my-6 max-w-sm mx-auto p-4 rounded-2xl bg-white/70 border border-amber-400/50 shadow-sm backdrop-blur-xs">
          <div className="flex items-center justify-center gap-2 text-emerald-950 font-serif font-bold text-base sm:text-lg">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>{weddingData.dateText}</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-amber-800 font-sans font-semibold text-xs sm:text-sm mt-1">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>{weddingData.timeText}</span>
          </div>

          <div className="w-16 h-px bg-amber-400/50 mx-auto my-2.5" />

          <div className="flex items-center justify-center gap-1.5 text-emerald-950 font-serif font-bold text-sm sm:text-base uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>{weddingData.venue}</span>
          </div>
          <p className="font-sans text-xs text-stone-600 mt-0.5">
            {weddingData.address}
          </p>
        </div>

        {/* Closing Warm Cordial Invite */}
        <div className="max-w-sm mx-auto">
          <p className="font-serif italic text-sm md:text-base text-emerald-950/90 leading-relaxed font-medium">
            "{weddingData.invitationQuote}"
          </p>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6" />

      </div>
    </section>
  );
};
