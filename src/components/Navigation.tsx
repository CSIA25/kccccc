// src/components/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal/80 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <input
            type="text"
            placeholder="Search expeditions, stories, and more..."
            className="w-full bg-transparent border-b border-white/50 py-4 px-2 text-2xl text-white placeholder:text-white/50 focus:outline-none focus:border-white"
            autoFocus
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const getLink = (hash: string) => (isHomePage ? hash : `/${hash}`);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[150] bg-pine flex flex-col items-center justify-center"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="flex flex-col items-center gap-10 text-3xl font-serif text-cream">
            <a href="/our-story" onClick={onClose} className="hover:opacity-75 transition-opacity">About us</a>
            <a href="/team" onClick={onClose} className="hover:opacity-75 transition-opacity">Our Team</a>
            <a href={getLink('#services')} onClick={onClose} className="hover:opacity-75 transition-opacity">Our Impact</a>
            <a href={getLink('#contact')} onClick={onClose} className="hover:opacity-75 transition-opacity">Get Involved</a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const getLink = (hash: string) => (isHomePage ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSearchOpen, isMenuOpen]);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] font-sans transition-colors duration-300",
          scrolled || isMenuOpen ? "text-charcoal" : "text-white"
        )}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundColor: scrolled || isMenuOpen ? 'rgba(248, 245, 242, 0.8)' : 'rgba(248, 245, 242, 0)',
            backdropFilter: scrolled || isMenuOpen ? 'blur(8px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <div className="container relative mx-auto px-4 py-6 flex items-center justify-center h-20">
          <a href="/" className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center gap-2 group">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-80 transition-opacity">
              <path d="M10 0L0 18H20L10 0Z" fill="currentColor"/>
            </svg>
            <span className="font-medium tracking-widest text-sm group-hover:opacity-80 transition-opacity">KCC</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/our-story" className="hover:opacity-75 transition-opacity">About us</a>
            <a href="/team" className="hover:opacity-75 transition-opacity">Our Team</a>
            <a href={getLink('#services')} className="hover:opacity-75 transition-opacity">Our Impact</a>
            <a href={getLink('#contact')} className="hover:opacity-75 transition-opacity">Get Involved</a>
          </nav>

          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center gap-6">
            <button onClick={() => setSearchOpen(true)} aria-label="Open search">
              <Search className="w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity" />
            </button>
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden" aria-label="Open menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navigation;