// src/components/CircularText.tsx
import React from 'react';
import { ArrowUp } from 'lucide-react';

const CircularText = () => {
  // Relevant text for the KCC
  const text = "• K H U M B U • C L I M B I N G • C E N T E R • ";
  const characters = text.split('');
  const radius = 90;

  return (
    <div className="relative w-48 h-48 flex items-center justify-center animate-spin-slow">
      <div className="absolute w-full h-full">
        {characters.map((char, i) => {
          const angle = (i / characters.length) * 360;
          return (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full origin-[0_100%]"
              style={{
                transform: `rotate(${angle}deg)`,
                fontSize: '10px',
              }}
            >
              <span
                className="inline-block text-white/60 uppercase"
                style={{
                  transform: `translateY(-${radius}px) rotate(90deg)`,
                }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </div>
      {/* Using the Lucide ArrowUp icon as requested */}
      <ArrowUp className="w-8 h-8 text-white" />
    </div>
  );
};

export default CircularText;