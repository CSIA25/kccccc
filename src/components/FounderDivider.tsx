// src/components/FounderDivider.tsx
import React from 'react';
import { cn } from '@/lib/utils';

const FounderDivider = ({ className, height = '100px' }: { className?: string; height?: string }) => {
  return (
    <div 
      className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-px"
      style={{ height }}
    >
      <svg
        // The viewBox is now CORRECT for this specific SVG shape
        viewBox="0 0 1440 100" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn("relative block w-full h-full", className)}
      >
        <path 
          d="M1440,100H0V9.4C266,33.4,554.7,33.4,824,9.4S1322-14.6,1440,9.4V100z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default FounderDivider; 