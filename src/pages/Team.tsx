// src/pages/Team.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import the single placeholder image
import teamPlaceholder from '@/assets/team.png';

// This array defines the entire grid structure.
// 'text' cells will display a word, 'image' cells will display a person.
const gridItems = [
  // Row 1
  { type: 'image', src: teamPlaceholder, name: "Phunuru Sherpa" },
  { type: 'text', content: 'Guided' },
  { type: 'image', src: teamPlaceholder, name: "Cheppal Sherpa" },
  { type: 'image', src: teamPlaceholder, name: "Lakpha Nuru Sherpa" },

  // Row 2
  { type: 'image', src: teamPlaceholder, name: "Pemba Gyalzen Sherpa" },
  { type: 'image', src: teamPlaceholder, name: "Dawa Yangjum Sherpa" },
  { type: 'text', content: 'by' },
  { type: 'image', src: teamPlaceholder, name: "Conrad Anker" },
  
  // Row 3
  { type: 'image', src: teamPlaceholder, name: "Amrit Ale" },
  { type: 'text', content: 'Legends' },
  { type: 'image', src: teamPlaceholder, name: "Danu Sherpa" },
  { type: 'image', src: teamPlaceholder, name: "Kunsal Sherpa" },
  
  // Row 4
  { type: 'text', content: 'Since' },
  { type: 'image', src: teamPlaceholder, name: "Pemba Tshering Sherpa" },
  { type: 'text', content: '2003' },
  // Adding an extra image to complete the 4x4 grid for this row
  { type: 'image', src: teamPlaceholder, name: "KCC Team" },
];

const Team = () => {
  return (
    <div className="bg-cream">
      <Navigation />
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {gridItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {item.type === 'text' ? (
                  <div className="w-full h-full flex items-center justify-center bg-cream">
                    <h2 className="font-sans text-6xl md:text-8xl font-bold text-charcoal">{item.content}</h2>
                  </div>
                ) : (
                  <div className="group w-full h-full">
                    <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold">{item.name}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;