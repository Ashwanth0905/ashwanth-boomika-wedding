import React, { useMemo } from 'react';

/**
 * FallingPetals - Rose petals and golden sparklers drifting softly
 * Highly optimized with CSS animations.
 */
export const FallingPetals = () => {
  const petals = useMemo(() => {
    const items = [];
    const colors = [
      '#e63946', // Rose Red
      '#f4a261', // Marigold Amber
      '#ffd166', // Golden Yellow
      '#ffffff', // Jasmine White
      '#d4af37'  // Antique Gold shimmer
    ];

    for (let i = 0; i < 18; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 8,
        size: 10 + Math.random() * 14,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        isJasmine: i % 3 === 0
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal-particle absolute top-[-30px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.isJasmine ? p.size * 0.7 : p.size * 1.3}px`,
            backgroundColor: p.color,
            borderRadius: p.isJasmine ? '50% 50% 10% 50%' : '50% 0 50% 50%',
            opacity: 0.75,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            animation: `petalFall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
};
