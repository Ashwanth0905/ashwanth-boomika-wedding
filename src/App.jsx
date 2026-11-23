import React, { useState } from 'react';
import { WelcomeCover } from './components/WelcomeCover';
import { ScratchCard } from './components/ScratchCard';
import { InvitationDetailsSection } from './components/InvitationDetailsSection';
import { Countdown } from './components/Countdown';
import { LocationSection } from './components/LocationSection';
import { TimelineSection } from './components/TimelineSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FooterSection } from './components/FooterSection';
import { AudioPlayer } from './components/AudioPlayer';
import { FallingPetals } from './components/FallingPetals';
import { LordGaneshaIcon } from './components/IndianMotifs';
import { weddingData } from './config/invitation';
import { Sparkles, Heart } from 'lucide-react';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  // When guest clicks "TAP TO OPEN" on initial royal cover
  const handleOpenCover = () => {
    setHasOpened(true);
    setAudioStarted(true);
  };

  // When guest scratches card or clicks alternative reveal button
  const handleCardRevealed = () => {
    setIsRevealed(true);
    setAudioStarted(true);
  };

  const handleUserInteract = () => {
    if (!audioStarted) {
      setAudioStarted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f0] relative text-stone-900 selection:bg-amber-300 selection:text-emerald-950">
      
      {/* Floating Gentle Petals */}
      <FallingPetals />

      {/* Background Indian Classical Music Control */}
      {hasOpened && <AudioPlayer isStarted={audioStarted} />}

      {/* Opening Royal Cover (Reference UX Step 1) */}
      {!hasOpened && (
        <WelcomeCover onOpen={handleOpenCover} />
      )}

      {/* Main Content Area */}
      {hasOpened && (
        <main className="royal-page-container relative z-10 transition-opacity duration-1000 animate-fadeIn">
          
          {/* Top Auspicious Header Banner */}
          <header className="pt-8 pb-4 text-center px-4">
            <div className="inline-flex flex-col items-center">
              <LordGaneshaIcon className="w-12 h-12 text-amber-600 mb-1" />
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.3em] uppercase text-emerald-900 font-bold">
                || Shri Ganeshaya Namaha ||
              </p>
              <div className="w-20 h-px bg-amber-500/50 my-2" />
              <h1 className="font-script text-3xl sm:text-4xl text-amber-700">
                Ashwanth &amp; Boomika
              </h1>
              <p className="font-serif text-xs tracking-[0.25em] uppercase text-emerald-950 font-semibold mt-1">
                Wedding Reception Invitation
              </p>
            </div>
          </header>

          {/* Section 1: Scratch to Reveal Invitation (Highlight Feature) */}
          <section id="scratch-section" className="py-2 text-center">
            <div className="px-4 mb-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-emerald-950 tracking-wide uppercase">
                A Special Invitation Awaits You
              </h2>
              <p className="font-script text-2xl text-amber-600 mt-0.5">
                Scratch Here to Reveal Our Invitation
              </p>
            </div>

            <ScratchCard
              isRevealed={isRevealed}
              onRevealed={handleCardRevealed}
              onUserInteract={handleUserInteract}
            />
          </section>

          {/* Section 2: Revealed Grand Reception Invitation Card */}
          {isRevealed && (
            <div className="animate-fadeIn transition-all duration-700">
              <InvitationDetailsSection />
            </div>
          )}

          {/* Section 3: Live Wedding Countdown */}
          <Countdown />

          {/* Section 4: Venue & "SHOW DIRECTIONS" Navigation (NO QR CODE!) */}
          <LocationSection />

          {/* Section 5: Reception Schedule Timeline */}
          <TimelineSection />

          {/* Section 6: Photo Gallery (Ready for bride & groom photographs) */}
          <PhotoGallery />

          {/* Section 7: Footer with WhatsApp sharing & blessings */}
          <FooterSection />

        </main>
      )}

    </div>
  );
}

export default App;
