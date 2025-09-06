// src/pages/OurStory.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import all necessary images for the page
import storyHeroBg from '@/assets/story-hero-bg.jpg';
import storyCollage1 from '@/assets/conrad-bg.jpg'; // Conrad's photo
import storyCollage2 from '@/assets/kcc-group-photo.jpeg'; // Group photo
import storyFooterBg from '@/assets/parallax-mid.jpg'; // The new panoramic image

const OurStory = () => {
  return (
    <div className="bg-cream">
      <Navigation />
      <main>
        {/* ======================================================================= */}
        {/* HERO SECTION (Already approved, no changes) */}
        {/* ======================================================================= */}
        <section 
          className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" 
          style={{ backgroundImage: `url(${storyHeroBg})`}}
        >
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="relative z-10 text-center">
            <motion.h1 
              className="font-serif text-8xl md:text-[150px] font-bold tracking-tighter"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              STORY
            </motion.h1>
            <motion.div 
              className="flex items-center gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="h-px w-10 bg-white/50"></div>
              <span className="text-sm uppercase tracking-widest">Khumbu Climbing Center</span>
              <div className="h-px w-10 bg-white/50"></div>
            </motion.div>
          </div>
        </section>
        
        <WaveDivider />
        
        {/* ======================================================================= */}
        {/* MAIN CONTENT SECTION */}
        {/* ======================================================================= */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 space-y-32">

            {/* --- Story Block 01: The Beginning --- */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="absolute top-0 left-0 text-9xl font-bold font-serif text-charcoal/5 pointer-events-none -translate-y-1/4">
                01
              </div>
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-alpenglow">THE BEGINNING</p>
                <h2 className="mt-4 font-serif text-4xl font-medium text-charcoal">
                  The Spark of an Idea
                </h2>
                <p className="mt-6 text-lg text-slate leading-relaxed max-w-prose">
                  In 1999, on an expedition to Everest, American climber Conrad Anker saw firsthand the immense skill of the local Sherpa guides. He also saw a critical need for formal safety training to protect the people who are the backbone of Himalayan mountaineering.
                </p>
              </motion.div>
              <motion.div 
                className="relative h-[500px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="absolute bottom-0 right-0 w-[80%] z-10"
                  initial={{ x: 30, y: 30 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img src={storyCollage1} alt="Conrad Anker" className="w-full h-auto object-cover rounded-lg shadow-2xl" />
                </motion.div>
                <motion.div 
                  className="absolute top-0 left-0 w-[60%]"
                  initial={{ x: -30, y: -30 }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img src={storyCollage2} alt="Khumbu Climbing Center Team" className="w-full h-auto object-cover rounded-lg shadow-xl" />
                </motion.div>
              </motion.div>
            </div>

            {/* --- Story Block 02: Our Mission --- */}
            <div className="relative max-w-3xl mx-auto text-center">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 text-9xl font-bold font-serif text-charcoal/5 pointer-events-none -translate-y-1/2">
                02
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-alpenglow">OUR PURPOSE</p>
                <h2 className="mt-4 font-serif text-4xl font-medium text-charcoal">
                  A Hub of Excellence and Safety
                </h2>
                <p className="mt-6 text-lg text-slate leading-relaxed">
                  Founded in 2003, the KCC is now a world-renowned institution. We provide elite training in advanced climbing, rescue, first aid, and English language skills, empowering a new generation of mountain professionals and building sustainable livelihoods.
                </p>
              </motion.div>
            </div>

          </div>
        </section>
        
        {/* ======================================================================= */}
        {/* FINAL CTA SECTION */}
        {/* ======================================================================= */}
        <section 
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-center"
          style={{ backgroundImage: `url(${storyFooterBg})`}}
        >
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="relative z-10 text-white">
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              Become Part of Our Story
            </h2>
            <Button size="lg" className="mt-8 bg-cream text-charcoal hover:bg-white">
              Get Involved <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default OurStory;