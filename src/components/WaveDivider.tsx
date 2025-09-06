// src/components/WaveDivider.tsx
import React from 'react';

const WaveDivider = () => {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path
          d="M1440,100H0V20.4C266,43.2,554.7,43.2,824,20.4S1322-25.2,1440,20.4V100z"
          fill="#f8f5f2" // This is our 'cream' color
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;