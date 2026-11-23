import React, { useState } from 'react';
import { WelcomeCover } from './components/WelcomeCover';
import { ScratchCard } from './components/ScratchCard';
import { Countdown } from './components/Countdown';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationSection } from './components/LocationSection';
import { TimelineSection } from './components/TimelineSection';
import { FooterSection } from './components/FooterSection';
import { FallingPetals } from './components/FallingPetals';
import { LordGaneshaIcon } from './components/IndianMotifs';
import { weddingData } from './config/invitation';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // When guest clicks "TAP TO OPEN" on initial royal cover
  const handleOpenCover = () => {
    setHasOpened(true);
  };

  // When guest scratches card (even once) or clicks reveal button
  const handleCardRevealed = () => {
    setIsRevealed(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf8f0] relative text-stone-900 selection:bg-amber-300 selection:text-emerald-950">
      
      {/* Floating Gentle Petals */}
      <FallingPetals />

      {/* Opening Royal Cover Screen */}
      {!hasOpened && (
        <WelcomeCover onOpen={handleOpenCover} />
      )}

      {/* Main Content Area */}
      {hasOpened && (
        <main className="royal-page-container relative z-10 transition-opacity duration-1000 animate-fadeIn">
          
          {/* Top Auspicious Header Banner */}
          <header className="pt-8 pb-3 text-center px-4">
            <div className="inline-flex flex-col items-center">
              <LordGaneshaIcon className="w-12 h-12 text-amber-600 mb-1" />
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.3em] uppercase text-emerald-900 font-bold">
                || Shri Ganeshaya Namaha ||
              </p>
              <div className="w-20 h-px bg-amber-500/50 my-2" />
              
              {/* Capital A for Ashwanth in classic royal serif font */}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-amber-800 tracking-wider">
                Ashwanth &amp; Boomika
              </h1>
              
              <p className="font-serif text-xs tracking-[0.25em] uppercase text-emerald-950 font-semibold mt-1">
                Wedding Reception Invitation
              </p>
            </div>
          </header>

          {/* Section 1: Scratch to Reveal Invitation Card */}
          <section id="scratch-section" className="py-2 text-center">
            {!isRevealed && (
              <div className="px-4 mb-2 animate-fadeIn">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-emerald-950 tracking-wide uppercase">
                  A Special Invitation Awaits You
                </h2>
                <p className="font-serif text-sm text-amber-700 mt-0.5 tracking-wide">
                  Swipe once to reveal our invitation
                </p>
              </div>
            )}

            <ScratchCard
              isRevealed={isRevealed}
              onRevealed={handleCardRevealed}
            />
          </section>

          {/* Sections revealed down below once the invitation is scratched */}
          {isRevealed && (
            <div className="transition-all duration-700 animate-fadeIn">
              
              {/* 1. Live Wedding Countdown ("Counting Down To The Celebration") */}
              <Countdown />

              {/* 2. Cherished Moments Photo Gallery (Directly below Countdown) */}
              <PhotoGallery />

              {/* 3. Venue & "SHOW DIRECTIONS" Google Maps Navigation */}
              <LocationSection />

              {/* 4. Reception Schedule Timeline */}
              <TimelineSection />

              {/* 5. Footer with WhatsApp sharing & blessings */}
              <FooterSection />
            </div>
          )}

        </main>
      )}

    </div>
  );
}

export default App;
