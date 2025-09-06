// src/components/TripSelection.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Divider from "./Divider";
import trip1 from "/src/assets/trip-1.jpg";
import trip2 from "/src/assets/trip-2.jpg";
import trip3 from "/src/assets/trip-3.jpg";
import trip4 from "/src/assets/trip-4.jpg";
import trip5 from "/src/assets/trip-5.jpg";

const trips = [
  {
    id: 1,
    src: trip1,
    alt: "Everest Base Camp Trek",
    desc: "Trek to the base of the world's highest peak. Immerse yourself in Sherpa culture, dramatic landscapes, and breathtaking Himalayan views. This multi-day trek includes acclimatization days, expert guides, local teahouse stays, and memorable vistas along the route.",
  },
  {
    id: 2,
    src: trip2,
    alt: "Island Peak Climbing",
    desc: "A challenging climb for aspiring mountaineers. Technical yet rewarding, Island Peak offers a true high-altitude experience with unforgettable panoramas. Includes glacier travel training and summit push planning.",
  },
  {
    id: 3,
    src: trip3,
    alt: "Cultural Immersion",
    desc: "Discover the heart of Nepal through its vibrant traditions, cuisine, and welcoming people. A journey blending adventure with meaningful cultural encounters, homestays, and local-guided experiences.",
  },
  {
    id: 4,
    src: trip4,
    alt: "Advanced Ice Climbing",
    desc: "Push your technical skills with advanced ice climbing routes, guided by seasoned professionals. Perfect for climbers seeking the next level, includes focused coaching and safety briefings.",
  },
  {
    id: 5,
    src: trip5,
    alt: "High Passes Challenge",
    desc: "Cross multiple high-altitude passes above 5,000m. A rugged, demanding trek that rewards you with pristine alpine scenery and an unmatched sense of achievement. Recommended for fit, experienced trekkers.",
  },
];

const TripSelection: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);

  const closeModal = () => setSelectedTrip(null);

  useEffect(() => {
    if (selectedTrip !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", onKey);

      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [selectedTrip]);

  return (
    <section className="relative bg-cream pt-24 pb-48">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="font-serif text-4xl lg:text-5xl text-charcoal tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          CHOOSE YOUR TRIP
        </motion.h2>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {trips.map((trip) => (
            <motion.div
              key={trip.id}
              onClick={() => setSelectedTrip(trip.id)}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.3)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <img
                src={trip.src}
                alt={trip.alt}
                className="w-full h-[450px] object-cover filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold">{trip.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-stretch justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Close button */}
            <button
              aria-label="Close trip details"
              onClick={closeModal}
              className="fixed top-6 right-6 z-[60] bg-white/95 backdrop-blur-md rounded-full p-2 shadow-lg hover:bg-white focus:outline-none"
              style={{ pointerEvents: "auto" }}
            >
              <X size={20} />
            </button>

            {/* Content */}
            <motion.div
              className="relative z-50 w-full max-w-[1200px] h-full overflow-auto bg-white rounded-lg lg:my-8 lg:flex lg:flex-row"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Image */}
              <motion.img
                src={trips.find((t) => t.id === selectedTrip)?.src}
                alt={trips.find((t) => t.id === selectedTrip)?.alt}
                className="w-full lg:w-1/2 h-72 lg:h-auto object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Text */}
              <motion.div
                className="p-6 lg:p-12 flex-1 flex flex-col justify-center"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
                  {trips.find((t) => t.id === selectedTrip)?.alt}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-6">
                  {trips.find((t) => t.id === selectedTrip)?.desc}
                </p>

                <div className="mt-4 flex gap-4">
                  <a
                    href="#book"
                    className="inline-block bg-pine text-cream px-6 py-3 rounded-md font-semibold shadow"
                  >
                    Book this trip
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-block border border-gray-300 px-6 py-3 rounded-md text-charcoal"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <Divider shape="wave" position="bottom" className="text-pine" />

      {/* Extra SVG wave at bottom */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            fill="#F8F5F2"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default TripSelection;
