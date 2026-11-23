import React from 'react';
import { LordGaneshaIcon, AntiqueCorner, KuthuVilakku } from './IndianMotifs';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * WelcomeCover Component
 * Opening royal gate inspired by luxury Indian wedding invitations.
 * Features antique gold borders, Lord Ganesha, and a glowing royal seal "TAP TO OPEN".
 */
export const WelcomeCover = ({ onOpen }) => {
  const handleOpen = () => {
    // Launch celebratory golden confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f4a261', '#2d6a4f', '#ffffff', '#e76f51']
      });
    } catch (e) {
      // safe fallback
    }
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#0a2315] text-[#fbf7ee] overflow-hidden select-none animate-fadeIn">
      {/* Background Indian Royal Pattern with subtle gold illumination */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #d4af37 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Radial soft glow behind seal */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Antique Gold Outer Framing Border */}
      <div className="absolute inset-4 md:inset-8 border-2 border-amber-500/40 pointer-events-none rounded-2xl">
        <div className="absolute inset-1 border border-amber-400/20 rounded-xl" />
      </div>

      {/* Antique Gold Filigree Corners */}
      <div className="absolute top-6 left-6 text-amber-400/80 pointer-events-none">
        <AntiqueCorner position="top-left" className="w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute top-6 right-6 text-amber-400/80 pointer-events-none">
        <AntiqueCorner position="top-right" className="w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute bottom-6 left-6 text-amber-400/80 pointer-events-none">
        <AntiqueCorner position="bottom-left" className="w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute bottom-6 right-6 text-amber-400/80 pointer-events-none">
        <AntiqueCorner position="bottom-right" className="w-16 h-16 md:w-24 md:h-24" />
      </div>

      {/* Decorative Traditional Brass Lamps on left and right */}
      <div className="hidden sm:block absolute left-12 top-1/2 -translate-y-1/2 text-amber-400/70 pointer-events-none">
        <KuthuVilakku className="w-10 h-32" />
      </div>
      <div className="hidden sm:block absolute right-12 top-1/2 -translate-y-1/2 text-amber-400/70 pointer-events-none">
        <KuthuVilakku className="w-10 h-32" />
      </div>

      {/* Content Center Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto px-6 py-8">
        
        {/* Auspicious Lord Ganesha Emblem */}
        <div className="text-amber-400 mb-3 animate-pulse">
          <LordGaneshaIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
        </div>
        
        <p className="text-[11px] md:text-xs font-serif tracking-[0.3em] uppercase text-amber-300/90 mb-1">
          || Shri Ganeshaya Namaha ||
        </p>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-3" />

        {/* Header Invitation Tagline */}
        <p className="font-serif text-xs md:text-sm tracking-[0.25em] text-amber-200/90 uppercase">
          With Joy We Invite You
        </p>
        <p className="font-script text-2xl md:text-3xl text-amber-300 mt-1 mb-8">
          to our wedding reception
        </p>

        {/* Royal Interactive Seal Button */}
        <button
          onClick={handleOpen}
          className="group relative flex flex-col items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_35px_rgba(212,175,55,0.3)]"
          aria-label="Open wedding reception invitation"
        >
          {/* Pulsing Outer Rings */}
          <div className="absolute inset-[-8px] rounded-full border border-amber-400/30 animate-ping opacity-40" />
          <div className="absolute inset-[-4px] rounded-full border-2 border-dashed border-amber-400/60 animate-spin-slow" />
          
          {/* Main Wax & Gold Royal Seal Disc */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-emerald-950 p-[3px] shadow-inner">
            <div className="w-full h-full rounded-full border-2 border-amber-300/80 bg-gradient-to-tr from-[#0e3b24] via-[#1a5334] to-[#0a2315] flex flex-col items-center justify-center p-3">
              
              {/* Couple Initials */}
              <div className="flex items-center justify-center gap-1 text-amber-300 font-serif font-bold text-3xl md:text-4xl tracking-wider drop-shadow-md">
                <span>A</span>
                <span className="font-script text-2xl text-amber-200 font-normal">&amp;</span>
                <span>B</span>
              </div>

              {/* Tap text */}
              <div className="flex items-center gap-1.5 mt-2 text-[10px] md:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-amber-200 group-hover:text-amber-100">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>TAP TO OPEN</span>
              </div>
            </div>
          </div>
        </button>

        {/* Couple Names Preview */}
        <div className="mt-8">
          <h2 className="font-serif text-lg md:text-xl text-stone-200 tracking-wide">
            V.N. Ashwanth &amp; N. Boomika
          </h2>
          <p className="text-xs font-sans tracking-[0.2em] text-amber-400/80 uppercase mt-1">
            Saturday, 12 December 2026
          </p>
        </div>

        {/* Small hint */}
        <p className="text-[11px] font-serif text-amber-300/60 mt-4 tracking-wider animate-pulse">
          Click the royal seal above to enter
        </p>
      </div>
    </div>
  );
};
