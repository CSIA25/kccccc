// src/components/ScrollIndicator.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Arrow should only be visible for the first two screen heights (Hero + MemorySection)
      setIsVisible(scrollPosition < heroHeight * 1.8);
      
      // Switch to 'up' arrow after scrolling past half the hero
      setShowUpArrow(scrollPosition > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToNextSection = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
        >
          {showUpArrow ? (
            <button onClick={scrollToTop} className="w-12 h-12" aria-label="Scroll to top">
              <ArrowUp className="w-12 h-12 text-charcoal/80" />
            </button>
          ) : (
            <button onClick={scrollToNextSection} className="w-12 h-12" aria-label="Scroll to next section">
              <ArrowDown className="w-12 h-12 text-white/80 animate-bounce" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;