import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider } from './IndianMotifs';

/**
 * Countdown Component
 * Real-time live countdown to Saturday, 12 December 2026, 5:30 PM IST.
 */
export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  useEffect(() => {
    const target = new Date(weddingData.targetDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="py-12 px-4 relative z-10 text-center">
      <div className="max-w-md mx-auto bg-gradient-to-b from-[#fffdf9] to-[#faf5e8] p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 shadow-[0_12px_40px_rgba(11,35,21,0.08)] relative overflow-hidden">
        
        {/* Subtle decorative gold corner notches */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-600/60" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-600/60" />
        <div className="absolute bottom-2 left-2 w-3 h-2 border-b-2 border-l-2 border-amber-600/60" />
        <div className="absolute bottom-2 right-2 w-3 h-2 border-b-2 border-r-2 border-amber-600/60" />

        <p className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-900 font-semibold mb-1">
          Counting Down To The Celebration
        </p>

        <h3 className="font-script text-3xl md:text-4xl text-amber-700 my-1">
          Saturday, 12 December 2026
        </h3>

        <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 font-medium mb-5">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>Reception Begins at 5:30 PM IST</span>
        </div>

        <RoyalMandalaDivider className="mb-6" />

        {timeLeft.isComplete ? (
          <div className="py-6">
            <h4 className="font-script text-4xl text-amber-700 animate-bounce">
              Today We Celebrate!
            </h4>
            <p className="font-serif text-emerald-950 mt-2">
              Welcome to Ashwanth &amp; Boomika's Wedding Reception!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 max-w-sm mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 border border-amber-400/50 shadow-xs">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0c3821] tracking-tight">
                {timeLeft.days}
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-amber-800 font-semibold mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 border border-amber-400/50 shadow-xs">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0c3821] tracking-tight">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-amber-800 font-semibold mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 border border-amber-400/50 shadow-xs">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0c3821] tracking-tight">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-amber-800 font-semibold mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 border border-amber-400/50 shadow-xs">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-700 tracking-tight">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-amber-800 font-semibold mt-1">
                Secs
              </span>
            </div>
          </div>
        )}

        {/* Add to Calendar Button */}
        <div className="mt-6">
          <a
            href={weddingData.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-600/40 bg-amber-500/10 text-emerald-950 hover:bg-amber-500/20 text-xs font-serif tracking-wider uppercase transition-all duration-200"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
};
