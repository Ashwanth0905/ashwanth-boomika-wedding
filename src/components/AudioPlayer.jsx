import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../config/invitation';

/**
 * AudioPlayer Component
 * Plays traditional Tamil wedding instrumental music (Mangala Isai / Nadaswaram).
 * Floating toggle button with sound wave animation.
 */
export const AudioPlayer = ({ isStarted = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play blocked by browser:", err));
    }
  };

  // Autoplay when user opens the invitation cover or scratches card
  useEffect(() => {
    if (isStarted && !hasInteractedRef.current && audioRef.current) {
      hasInteractedRef.current = true;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // In case browser autoplay policy requires explicit button press
          setIsPlaying(false);
        });
    }
  }, [isStarted]);

  return (
    <>
      {/* Traditional Tamil Wedding Instrumental Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src={weddingData.musicUrl}
      />

      {/* Floating Gold & Forest Green Music Pill */}
      <div className="fixed top-5 right-5 z-50 animate-fadeIn">
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute Tamil wedding music" : "Play Tamil wedding music"}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg border cursor-pointer ${
            isPlaying 
              ? 'bg-emerald-950/90 text-amber-300 border-amber-500/60 shadow-amber-500/20 ring-2 ring-amber-400/30' 
              : 'bg-stone-900/80 text-stone-300 border-stone-600/50 hover:bg-stone-900'
          }`}
        >
          {isPlaying ? (
            <>
              <div className="relative flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
              </div>
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-full bg-amber-400 animate-pulse" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-2 bg-amber-400 animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-full bg-amber-400 animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse" style={{ animationDelay: '450ms' }} />
              </div>
              <span className="text-xs font-serif tracking-widest uppercase hidden sm:inline text-amber-200">
                Music ON
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-400" />
              <span className="text-xs font-serif tracking-widest uppercase text-stone-300">
                Music
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
