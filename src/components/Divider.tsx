// src/components/Divider.tsx
import React from 'react';
import { cn } from '@/lib/utils';

const shapes = {
  // THIS IS YOUR NEW SVG
  wave: (
    <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  ),
  // This is the shape for the MemorySection
  torn: (
    <path d="M1440,89.2V135H0V1.5c205.4,83.2,408.8,116.3,613.8,83.2c222.1-35.9,425.4-83.2,617.8-83.2C1288.3,1.5,1364.2,34.6,1440,89.2z"></path>
  )
};

type DividerProps = {
  shape: keyof typeof shapes;
  position?: 'top' | 'bottom';
  className?: string;
  height?: string;
};

const Divider = ({ shape, position = 'bottom', className, height = '150px' }: DividerProps) => {
  const pathData = shapes[shape]?.props.d;
  if (!pathData) return null;

  return (
    <div 
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-none",
        position === 'top' ? 'top-0 -mt-px' : 'bottom-0 -mb-px'
      )}
      style={{ height }}
    >
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("relative block w-full h-full", position === 'top' && "transform scale-y-[-1]")}
      >
        <path fill="currentColor" d={pathData}></path>
      </svg>
    </div>
  );
};

export default Divider;