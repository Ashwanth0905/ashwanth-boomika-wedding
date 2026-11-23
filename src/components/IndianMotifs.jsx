import React from 'react';

// Antique Gold Lord Ganesha Motif
export const LordGaneshaIcon = ({ className = "w-16 h-16" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="currentColor"
    aria-label="Lord Ganesha"
  >
    {/* Stylized traditional Lord Ganesha silhouette with crown and tusk */}
    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Crown / Mukut */}
      <path d="M50 10 L55 22 L62 16 L58 26 L65 24 L56 34 L50 32 L44 34 L35 24 L42 26 L38 16 L45 22 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="50" cy="18" r="2.5" fill="currentColor" />
      
      {/* Forehead Tilak */}
      <path d="M47 38 Q50 35 53 38 L51 45 L49 45 Z" fill="currentColor" />
      <path d="M44 40 Q50 42 56 40" />
      
      {/* Ears */}
      <path d="M40 37 C26 36 24 50 34 58 C38 61 41 57 41 54" strokeWidth="2.5" />
      <path d="M60 37 C74 36 76 50 66 58 C62 61 59 57 59 54" strokeWidth="2.5" />
      
      {/* Trunk (Vakra-Tunda) curling auspiciously to the left/right */}
      <path d="M48 46 C48 55 53 60 54 68 C55 76 46 82 40 80 C35 78 35 72 40 70 C43 68 46 72 44 74" strokeWidth="3" />
      
      {/* Single Auspicious Tusk */}
      <path d="M58 58 L63 60" strokeWidth="3.5" />
      <path d="M42 58 L40 59" strokeWidth="2" />
      
      {/* Modak in trunk hand / blessing symbol */}
      <circle cx="37" cy="74" r="3" fill="currentColor" />
      <path d="M50 30 L50 34" />
    </g>
    {/* Aura ring */}
    <circle cx="50" cy="48" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
  </svg>
);

// Traditional Brass Lamp (Kuthu Vilakku)
export const KuthuVilakku = ({ className = "w-8 h-24" }) => (
  <svg viewBox="0 0 40 120" className={className} fill="currentColor">
    {/* Flame */}
    <path 
      d="M20 5 C17 12 15 16 17 21 C19 24 21 24 23 21 C25 16 23 12 20 5 Z" 
      fill="#ffb703" 
      filter="drop-shadow(0 0 4px #fb8500)"
    />
    <ellipse cx="20" cy="18" rx="2" ry="4" fill="#fff" />
    
    {/* Lamp Top Peak & Bird/Floral finial */}
    <path d="M19 21 H21 V26 H19 Z" fill="currentColor" />
    <path d="M16 26 C16 24 24 24 24 26 L23 29 H17 Z" fill="currentColor" />
    
    {/* Oil Basin (Bowl with wicks) */}
    <path d="M10 32 C10 37 30 37 30 32 L33 30 C33 39 7 39 7 30 Z" fill="currentColor" />
    
    {/* Pillars and ornate rings */}
    <ellipse cx="20" cy="42" rx="4" ry="2" fill="currentColor" />
    <path d="M18 42 H22 V58 H18 Z" fill="currentColor" />
    <ellipse cx="20" cy="58" rx="6" ry="2.5" fill="currentColor" />
    <path d="M18 58 H22 V76 H18 Z" fill="currentColor" />
    <ellipse cx="20" cy="76" rx="5" ry="2" fill="currentColor" />
    <path d="M18 76 H22 V94 H18 Z" fill="currentColor" />
    <ellipse cx="20" cy="94" rx="7" ry="3" fill="currentColor" />
    <path d="M17 94 H23 V105 H17 Z" fill="currentColor" />
    
    {/* Heavy Ornate Base */}
    <path d="M8 114 C8 107 32 107 32 114 L36 117 C36 120 4 120 4 117 Z" fill="currentColor" />
  </svg>
);

// Traditional Mango Leaf & Jasmine Toran Garland
export const ToranGarland = ({ className = "w-full h-8" }) => (
  <svg viewBox="0 0 600 36" preserveAspectRatio="none" className={className} fill="none">
    {/* Hanging rope string */}
    <path d="M0 6 Q75 18 150 6 Q225 18 300 6 Q375 18 450 6 Q525 18 600 6" stroke="#b8860b" strokeWidth="2" />
    
    {/* Marigold and Mango Leaves repetition across 4 segments */}
    {[75, 225, 375, 525].map((cx, idx) => (
      <g key={idx}>
        {/* Yellow Marigold Flower */}
        <circle cx={cx} cy="18" r="6" fill="#f7b731" />
        <circle cx={cx} cy="18" r="4" fill="#fa8231" />
        
        {/* Mango Leaves hanging */}
        <path d={`M${cx - 16} 12 C${cx - 20} 24 ${cx - 16} 34 ${cx - 14} 34 C${cx - 12} 34 ${cx - 12} 24 ${cx - 12} 12 Z`} fill="#1e5128" />
        <path d={`M${cx + 12} 12 C${cx + 12} 24 ${cx + 12} 34 ${cx + 14} 34 C${cx + 16} 34 ${cx + 20} 24 ${cx + 16} 12 Z`} fill="#1e5128" />
        <path d={`M${cx - 2} 22 C${cx - 4} 30 ${cx - 2} 36 ${cx} 36 C${cx + 2} 36 ${cx + 4} 30 ${cx + 2} 22 Z`} fill="#2d6a4f" />
      </g>
    ))}
  </svg>
);

// Antique Gold Corner Filigree
export const AntiqueCorner = ({ position = "top-left", className = "w-16 h-16" }) => {
  let rotation = "0";
  if (position === "top-right") rotation = "90";
  if (position === "bottom-right") rotation = "180";
  if (position === "bottom-left") rotation = "270";

  return (
    <svg 
      viewBox="0 0 80 80" 
      className={className} 
      style={{ transform: `rotate(${rotation}deg)` }}
      fill="currentColor"
    >
      <path d="M5 5 H40 C20 5 5 20 5 40 Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M5 5 H75 C55 5 15 25 5 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12 H60 C42 16 18 36 12 60 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M8 8 Q30 8 30 30 Q8 30 8 8" fill="currentColor" fillOpacity="0.4" />
      <path d="M30 8 Q45 15 52 28 Q40 35 30 30 Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" />
    </svg>
  );
};

// Royal Indian Mandala Divider
export const RoyalMandalaDivider = ({ className = "w-full max-w-xs h-8" }) => (
  <div className={`flex items-center justify-center gap-3 mx-auto ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-amber-700 opacity-60" />
    <svg viewBox="0 0 32 32" className="w-6 h-6 text-amber-600 shrink-0" fill="currentColor">
      <circle cx="16" cy="16" r="3" />
      <path d="M16 2 C16 9 23 16 30 16 C23 16 16 23 16 30 C16 23 9 16 2 16 C9 16 16 9 16 2 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-600 to-amber-700 opacity-60" />
  </div>
);
