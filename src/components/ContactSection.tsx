// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-pine text-cream py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-base font-semibold tracking-wider text-alpenglow uppercase">
            Get Involved
          </h2>
          <p className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight">
            Be Part of the Legacy
          </p>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Your support is vital for sustaining our programs and empowering the next generation of Nepali mountain workers. Reach out to discuss partnerships or make a contribution.
          </p>
          <Button size="lg" className="mt-8 bg-cream text-charcoal hover:bg-white">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;