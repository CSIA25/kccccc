// src/components/FounderSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import conradBg from "/src/assets/conrad-bg.jpg"; 
import conradFg from "/src/assets/conrad-fg.jpg"; 

const FounderSection = () => {
  return (
    <div className="relative">
      {/* 🌊 Wave SVG at the top (matches bg-cream below it) */}
      <div className="absolute top-0 left-0 w-full -translate-y-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="w-full h-32"
        >
          <path 
            className="fill-cream"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* ✅ Founder Section */}
      <section className="relative bg-pine text-cream pt-20 pb-24 sm:pt-28 sm:pb-32 -mt-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-base font-semibold tracking-wider text-alpenglow uppercase">
              The Vision
            </h2>
            <p className="mt-2 font-serif text-4xl lg:text-5xl font-medium tracking-tight">
              Meet the Founder
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 👤 Images */}
            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-[65%] h-[70%]"
                initial={{ x: -20, y: -20 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src={conradBg} 
                  alt="Conrad Anker at a climbing gym" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-[70%] h-auto z-10"
                initial={{ x: 20, y: 20 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={conradFg} 
                  alt="Portrait of Conrad Anker in the mountains" 
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* 📝 Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-medium leading-tight">
                "Climbers who not only know what they are doing, but <span className="text-alpenglow">enjoy doing it</span>, are more engaged—and that makes them safer in the mountains."
              </h2>
              <p className="mt-6 text-lg font-semibold text-slate-300">
                — Conrad Anker, Co-Founder
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderSection;
