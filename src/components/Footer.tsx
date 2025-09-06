// src/components/Footer.tsx
import React from 'react';
import { ArrowUp, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-pine text-cream/70 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Scroll to Top Button - Integrated into the top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={scrollToTop}
            className="h-16 w-16 rounded-full border border-slate-700 bg-pine hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-cream group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="text-center">
          {/* Main Statement */}
          <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-4xl mx-auto">
            Supporting Nepal's Mountain Workers & Sustaining Himalayan Heritage.
          </h2>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Khumbu Climbing Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/our-story" className="hover:text-white transition-colors">Our Story</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy (soon)</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;