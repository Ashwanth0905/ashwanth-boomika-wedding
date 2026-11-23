import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Eye } from 'lucide-react';
import { LordGaneshaIcon, KuthuVilakku, AntiqueCorner, RoyalMandalaDivider } from './IndianMotifs';
import { weddingData } from '../config/invitation';

/**
 * ScratchCard Component
 * High-performance HTML5 Canvas scratch-to-reveal card.
 * Works seamlessly on Android, iOS, and Desktop.
 * Features an alternative "Reveal Invitation" button.
 */
export const ScratchCard = ({ onRevealed, isRevealed, onUserInteract }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [percentScratched, setPercentScratched] = useState(0);
  const isDrawingRef = useRef(false);
  const hasRevealedRef = useRef(false);

  // Trigger celebration and reveal
  const triggerReveal = useCallback(() => {
    if (hasRevealedRef.current) return;
    hasRevealedRef.current = true;
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#c59b27', '#1b4d3e', '#e63946', '#ffffff', '#ffd166']
      });
    } catch (e) {
      // safe fallback
    }

    if (onRevealed) onRevealed();
    if (onUserInteract) onUserInteract();
  }, [onRevealed, onUserInteract]);

  // Draw initial canvas scratch surface
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Rich Royal Emerald Green & Antique Gold metallic gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#0d2818');
    grad.addColorStop(0.35, '#134e2c');
    grad.addColorStop(0.7, '#1b5e36');
    grad.addColorStop(1, '#0b2315');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Gold dust stardust glitter
    for (let i = 0; i < 90; i++) {
      ctx.beginPath();
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 2 + 0.5;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(212, 175, 55, 0.45)' : 'rgba(255, 255, 255, 0.35)';
      ctx.fill();
    }

    // Antique Gold Ornate Border on Canvas
    ctx.strokeStyle = '#c59b27';
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, w - 24, h - 24);

    // Inner dashed gold border
    ctx.strokeStyle = 'rgba(230, 195, 100, 0.6)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.setLineDash([]);

    // Decorative center emblem / text
    ctx.textAlign = 'center';
    
    // Top auspicious symbol
    ctx.fillStyle = '#e6c86e';
    ctx.font = '600 13px Cinzel, Georgia, serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('A SPECIAL INVITATION AWAITS YOU', w / 2, h / 2 - 45);

    // Main scratch prompt text
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 19px Cinzel, Georgia, serif';
    ctx.fillText('SCRATCH HERE TO REVEAL', w / 2, h / 2 - 12);

    ctx.fillStyle = '#ffd166';
    ctx.font = 'italic 34px "Great Vibes", cursive';
    ctx.fillText('Our Wedding Reception', w / 2, h / 2 + 32);

    // Subtle finger / mouse hint
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.font = '500 11px Montserrat, sans-serif';
    ctx.fillText('✨ Use finger or mouse to scratch ✨', w / 2, h / 2 + 65);
  }, []);

  // Calculate scratched area percentage
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || hasRevealedRef.current) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width;
    const h = canvas.height;

    // Sample every 40th pixel for smooth 60fps performance
    try {
      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      let clearPixels = 0;
      let totalSampled = 0;

      for (let i = 3; i < pixels.length; i += 40 * 4) {
        totalSampled++;
        if (pixels[i] === 0) {
          clearPixels++;
        }
      }

      const percent = (clearPixels / totalSampled) * 100;
      setPercentScratched(Math.round(percent));

      // If more than 35% is cleared, automatically reveal completely!
      if (percent > 35) {
        triggerReveal();
      }
    } catch (e) {
      // In case of any context error
    }
  }, [triggerReveal]);

  // Scratch action
  const scratch = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || hasRevealedRef.current) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 32 * dpr, 0, Math.PI * 2);
    ctx.fill();

    if (onUserInteract) onUserInteract();
  }, [onUserInteract]);

  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      if (!hasRevealedRef.current) {
        initCanvas();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  // Pointer / Touch / Mouse handlers
  const handlePointerDown = (e) => {
    isDrawingRef.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current) return;
    scratch(e.clientX, e.clientY);
    checkScratchPercentage();
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    checkScratchPercentage();
  };

  // Touch handlers with passive: false to prevent scrolling while scratching
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onTouchStart = (e) => {
      isDrawingRef.current = true;
      if (e.touches && e.touches[0]) {
        scratch(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchMove = (e) => {
      if (!isDrawingRef.current) return;
      e.preventDefault(); // Stop page from scrolling while scratching!
      if (e.touches && e.touches[0]) {
        scratch(e.touches[0].clientX, e.touches[0].clientY);
        checkScratchPercentage();
      }
    };

    const onTouchEnd = () => {
      isDrawingRef.current = false;
      checkScratchPercentage();
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    return () => {
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [scratch, checkScratchPercentage]);

  return (
    <div className="w-full max-w-lg mx-auto my-6 px-4">
      {/* Interactive Card Frame */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] min-h-[460px] md:min-h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,35,21,0.25)] border-2 border-amber-500/50 bg-[#fffdf9]"
      >
        {/* UNDERNEATH: The Wedding Reception Invitation Card */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-between text-center select-none bg-gradient-to-b from-[#fdfbf6] via-[#faf5e8] to-[#f5eedb] overflow-hidden">
          
          {/* Traditional Antique Gold Filigree Corners */}
          <div className="absolute top-2 left-2 text-amber-600/70 pointer-events-none">
            <AntiqueCorner position="top-left" className="w-12 h-12" />
          </div>
          <div className="absolute top-2 right-2 text-amber-600/70 pointer-events-none">
            <AntiqueCorner position="top-right" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-2 left-2 text-amber-600/70 pointer-events-none">
            <AntiqueCorner position="bottom-left" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-2 right-2 text-amber-600/70 pointer-events-none">
            <AntiqueCorner position="bottom-right" className="w-12 h-12" />
          </div>

          {/* Hanging Traditional Brass Lamps on Sides */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600/60 pointer-events-none hidden xs:block">
            <KuthuVilakku className="w-6 h-20" />
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600/60 pointer-events-none hidden xs:block">
            <KuthuVilakku className="w-6 h-20" />
          </div>

          {/* Card Top: Lord Ganesha & Invocation */}
          <div className="pt-2 z-10 flex flex-col items-center">
            <LordGaneshaIcon className="w-12 h-12 text-amber-600 mb-1 drop-shadow-sm" />
            <p className="text-[10px] md:text-xs font-serif tracking-[0.25em] text-emerald-900 uppercase font-semibold">
              || Shri Ganeshaya Namaha ||
            </p>
            <div className="w-16 h-px bg-amber-500/60 my-2" />
            <p className="text-xs md:text-sm font-serif tracking-widest uppercase text-emerald-900/90 font-medium">
              We Cordially Invite You To The
            </p>
          </div>

          {/* Event Heading */}
          <div className="my-2 z-10">
            <div className="inline-block px-4 py-1 rounded-full border border-amber-600/40 bg-amber-500/10 mb-2">
              <span className="font-serif text-xs md:text-sm tracking-[0.25em] font-bold text-emerald-950 uppercase">
                {weddingData.event}
              </span>
            </div>

            {/* Couple's Names in Royal Dark Green Typography */}
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#0c3821] tracking-wide leading-tight">
              {weddingData.groom}
            </h1>
            <div className="flex items-center justify-center gap-3 my-1">
              <span className="w-10 h-px bg-amber-500/50" />
              <span className="font-script text-3xl md:text-4xl text-amber-600 font-normal">&amp;</span>
              <span className="w-10 h-px bg-amber-500/50" />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#0c3821] tracking-wide leading-tight">
              {weddingData.bride}
            </h1>
          </div>

          {/* Date, Timing, & Venue */}
          <div className="z-10 bg-white/60 backdrop-blur-xs py-2.5 px-4 rounded-xl border border-amber-400/40 shadow-xs max-w-xs mx-auto">
            <p className="font-serif text-sm md:text-base font-semibold text-emerald-950">
              {weddingData.dateText}
            </p>
            <p className="font-sans text-xs md:text-sm font-medium text-amber-800 my-0.5">
              {weddingData.timeText}
            </p>
            <div className="w-12 h-px bg-amber-400/60 mx-auto my-1" />
            <p className="font-serif text-xs md:text-sm font-bold text-emerald-900 uppercase tracking-wider">
              {weddingData.venue}
            </p>
            <p className="font-sans text-[11px] text-stone-600">
              {weddingData.address}
            </p>
          </div>

          {/* Warm Joyful Quote */}
          <div className="pb-2 z-10 max-w-xs">
            <p className="font-serif italic text-xs md:text-[13px] text-emerald-950/80 leading-relaxed">
              "{weddingData.invitationQuote}"
            </p>
          </div>
        </div>

        {/* OVERLAY: Interactive HTML5 Scratch Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none transition-opacity duration-700 ease-out z-20 ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            touchAction: 'none'
          }}
        />
      </div>

      {/* Alternative "Reveal Invitation" Button & Scratch Progress */}
      <div className="flex flex-col items-center justify-center mt-4 gap-2">
        {!isRevealed ? (
          <>
            <button
              onClick={triggerReveal}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-amber-200 border border-amber-400/60 font-serif text-xs md:text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Reveal Invitation Directly</span>
            </button>
            <p className="text-[11px] font-sans text-stone-500 tracking-wide">
              {percentScratched > 0 ? `Scratched ${percentScratched}%` : 'Or scratch above with your finger / mouse'}
            </p>
          </>
        ) : (
          <div className="flex items-center gap-2 text-xs font-serif text-emerald-900 bg-amber-100/80 px-4 py-1.5 rounded-full border border-amber-300 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-semibold uppercase tracking-wider">Invitation Revealed</span>
          </div>
        )}
      </div>
    </div>
  );
};
