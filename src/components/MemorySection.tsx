import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import memory1 from "/src/assets/memory-1.jpg";
import memory2 from "/src/assets/memory-2.jpg";
import memory3 from "/src/assets/memory-3.jpg";

// The SVG divider component (UNCHANGED)
const TornDivider = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -mb-px">
      <svg
        viewBox="0 0 1440 135"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[135px] fill-cream"
      >
        <path d="M1440,89.2V135H0V1.5c205.4,83.2,408.8,116.3,613.8,83.2c222.1-35.9,425.4-83.2,617.8-83.2C1288.3,1.5,1364.2,34.6,1440,89.2z"></path>
      </svg>
    </div>
);

const MemorySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animations (UNCHANGED)
  const image1Y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const image1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const image1Rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  
  const image2Y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const image2Scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const image2Rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const image3Y = useTransform(scrollYProgress, [0, 1], ['-35%', '35%']);
  const image3Scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const image3Rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[120vh] bg-pine"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-10">
          <motion.div
            className="absolute w-[22%] h-auto top-[20%] left-[10%]"
            style={{ y: image1Y, scale: image1Scale, rotate: image1Rotate }}
          >
            <img src={memory1} alt="Trekking in sand" className="w-full h-full object-cover rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            className="absolute w-[24%] h-auto top-[15%] right-[12%]"
            style={{ y: image2Y, scale: image2Scale, rotate: image2Rotate }}
          >
            <img src={memory2} alt="Hiking through grass" className="w-full h-full object-cover rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            className="absolute w-[18%] h-auto bottom-[25%] left-1/2 -translate-x-1/2"
            style={{ y: image3Y, scale: image3Scale, rotate: image3Rotate }}
          >
            <img src={memory3} alt="Climber on a snowy peak" className="w-full h-full object-cover rounded-lg shadow-xl" />
          </motion.div>
        </div>

        <div className="relative z-20 max-w-4xl text-center pointer-events-none">
          {/* --- TEXT COLOR CHANGED HERE --- */}
          <p className="font-sans text-4xl md:text-5xl text-white/75 leading-tight">
            Sometimes you will never know the value of a moment until it becomes a memory. Nature is pleasure from simplicity— and so is the human mind.
          </p>
        </div>
        
        <TornDivider />
      </div>
    </section>
  );
};

export default MemorySection;