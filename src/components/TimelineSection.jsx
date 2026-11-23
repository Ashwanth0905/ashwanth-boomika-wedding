import React from 'react';
import { Clock } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider } from './IndianMotifs';

/**
 * TimelineSection Component
 * Exclusively the Wedding Reception evening flow.
 * Note: Muhurtham / morning wedding rituals are strictly excluded per user instructions.
 * "Welcome drinks" removed from 5:30 PM.
 */
export const TimelineSection = () => {
  return (
    <section className="py-12 px-4 relative z-10 text-center animate-fadeIn">
      <div className="max-w-md mx-auto bg-gradient-to-b from-[#fffdf9] to-[#faf5e8] p-6 md:p-8 rounded-3xl border-2 border-amber-500/40 shadow-[0_12px_40px_rgba(11,35,21,0.08)]">
        
        <p className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-900 font-semibold mb-1">
          Evening Celebration
        </p>
        
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-amber-800 my-1 tracking-wide">
          Reception Schedule
        </h3>

        <p className="text-xs text-stone-600 font-sans mb-4">
          Saturday, 12 December 2026 • 5:30 PM – 9:00 PM
        </p>

        <RoyalMandalaDivider className="mb-6" />

        {/* Reception Timeline Nodes */}
        <div className="relative pl-6 pr-2 text-left space-y-6">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-500 via-emerald-800 to-amber-600" />

          {weddingData.timeline.map((item, index) => (
            <div key={index} className="relative flex items-start group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[23px] top-1.5 w-4 h-4 rounded-full bg-[#0c3821] border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              </div>

              {/* Event Content Box */}
              <div className="pl-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 font-sans text-xs font-bold tracking-wider mb-1">
                  <Clock className="w-3 h-3 text-amber-700" />
                  <span>{item.time}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#0c3821]">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-stone-600 leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-amber-400/30">
          <p className="font-serif italic text-xs text-emerald-950/80">
            "Your gracious presence will make our reception truly blessed and memorable."
          </p>
        </div>

      </div>
    </section>
  );
};
