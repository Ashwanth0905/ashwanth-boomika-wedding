import React, { useState } from 'react';
import { Share2, Heart, Check, MessageCircle } from 'lucide-react';
import { weddingData } from '../config/invitation';
import { RoyalMandalaDivider } from './IndianMotifs';

/**
 * FooterSection Component
 * Warm blessings, WhatsApp sharing trigger, and royal sign-off.
 */
export const FooterSection = () => {
  const [copied, setCopied] = useState(false);

  // WhatsApp share link
  const shareText = `With great joy, you are cordially invited to the Wedding Reception of V.N. Ashwanth & N. Boomika on Saturday, 12 December 2026 (5:30 PM – 9:00 PM) at PSK Mahal, Pattlur Nall Road!\n\nView our interactive invitation:\nhttps://ashwanth-bhoomika-wedding.vercel.app/`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("https://ashwanth-bhoomika-wedding.vercel.app/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="mt-12 pt-10 pb-16 px-4 bg-gradient-to-b from-[#0e3b24] via-[#092215] to-[#04110a] text-white text-center relative overflow-hidden">
      
      {/* Decorative Golden Ambient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        
        {/* Couple Initials Sign-off */}
        <p className="font-script text-4xl sm:text-5xl text-amber-300 mb-1">
          Ashwanth &amp; Boomika
        </p>

        <p className="font-serif text-xs md:text-sm tracking-[0.25em] text-amber-200/80 uppercase">
          With Love &amp; Gratitude
        </p>

        <div className="w-20 h-px bg-amber-400/40 mx-auto my-4" />

        <p className="font-serif italic text-sm text-stone-300 leading-relaxed px-4">
          "Your presence, love, and heartfelt blessings are the greatest gifts we could ever receive as we celebrate our new beginning."
        </p>

        {/* WhatsApp & Social Sharing Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-sans text-xs font-semibold tracking-wider hover:bg-[#20ba59] transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Share on WhatsApp</span>
          </a>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/40 font-sans text-xs font-semibold tracking-wider transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>

        {/* Footer credits */}
        <div className="mt-10 pt-6 border-t border-amber-400/20 text-[10px] text-stone-400 font-sans tracking-widest uppercase">
          <p>Saturday, 12 December 2026 • PSK Mahal</p>
          <p className="text-amber-400/50 mt-1">
            Ashwanth &amp; Boomika Wedding Reception
          </p>
        </div>

      </div>
    </footer>
  );
};
