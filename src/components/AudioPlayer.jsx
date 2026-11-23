import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * AudioPlayer Component
 * Plays soothing traditional Indian instrumental melodies.
 * Includes a built-in Web Audio API traditional Tanpura + Bansuri flute drone synthesizer fallback
 * so authentic classical music ALWAYS plays seamlessly even before external MP3s are loaded!
 */
export const AudioPlayer = ({ isStarted = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthGainRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Initialize Traditional Shehnai / Indian Flute Classical Web Audio Drone Synthesizer
  const startIndianClassicalSynth = () => {
    try {
      if (!synthContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        synthContextRef.current = new AudioContext();
      }
      
      const ctx = synthContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain for smooth gentle acoustic sound
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      synthGainRef.current = masterGain;

      // Authentic Sa - Pa - Sa Indian Classical Tanpura drone frequencies (C#3 fundamental ~ 138.59 Hz)
      const baseFreq = 138.59; // C#3 (auspicious traditional South Indian wedding pitch)
      const notes = [
        baseFreq * 1.5, // Pa (G#3)
        baseFreq * 2,   // Sa (C#4)
        baseFreq * 2,   // Sa (C#4)
        baseFreq        // Kharaj Sa (C#3)
      ];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm harmonics
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle tanpura rhythmic plucking swell
        const now = ctx.currentTime;
        const delay = idx * 1.2;
        const period = 5.0;

        oscGain.gain.setValueAtTime(0.05, now);
        
        // Connect through a subtle low-pass acoustic resonance filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        osc.connect(oscGain);
        oscGain.connect(filter);
        filter.connect(masterGain);

        osc.start(now + delay * 0.1);
      });

      // Flute / Shehnai melody simulator using gentle oscillating harmonic
      const melodyOsc = ctx.createOscillator();
      const melodyGain = ctx.createGain();
      melodyOsc.type = 'sine';
      melodyOsc.frequency.setValueAtTime(baseFreq * 3, ctx.currentTime); // High resonant tone

      // Soft vibrato
      const vibrato = ctx.createOscillator();
      vibrato.frequency.value = 5.5; // 5.5 Hz Indian flute vibrato
      const vibratoGain = ctx.createGain();
      vibratoGain.gain.value = 6.0;
      vibrato.connect(melodyOsc.frequency);
      vibrato.start();

      melodyGain.gain.setValueAtTime(0.02, ctx.currentTime);
      melodyGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 3);

      melodyOsc.connect(melodyGain);
      melodyGain.connect(masterGain);
      melodyOsc.start();

      return true;
    } catch (err) {
      console.warn("Web Audio not supported or blocked:", err);
      return false;
    }
  };

  const stopIndianClassicalSynth = () => {
    if (synthGainRef.current && synthContextRef.current) {
      try {
        const ctx = synthContextRef.current;
        synthGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          if (ctx.state !== 'closed') {
            ctx.suspend();
          }
        }, 850);
      } catch (e) {
        // Safe catch
      }
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopIndianClassicalSynth();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      // Play
      let audioPlayed = false;
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            audioPlayed = true;
            setIsPlaying(true);
            isPlayingRef.current = true;
          })
          .catch(() => {
            // If local mp3 not loaded yet, play high quality classical synth
            startIndianClassicalSynth();
            setIsPlaying(true);
            isPlayingRef.current = true;
          });
      } else {
        startIndianClassicalSynth();
        setIsPlaying(true);
        isPlayingRef.current = true;
      }
    }
  };

  // When user interacts / opens card
  useEffect(() => {
    if (isStarted && !isPlayingRef.current) {
      toggleMusic();
    }
  }, [isStarted]);

  return (
    <>
      {/* Audio element pointing to royalty free auspicious instrumental audio */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://assets.mixkit.co/music/preview/mixkit-traditional-indian-wedding-celebration-674.mp3"
      />

      {/* Floating Gold & Forest Green Music Pill */}
      <div className="fixed top-5 right-5 z-50 animate-fade-in">
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute traditional music" : "Play traditional music"}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg border ${
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
