import React from 'react';
import { motion } from 'motion/react';

interface CanvaCTAProps {
  onOpenContact: () => void;
}

export const CanvaCTA: React.FC<CanvaCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-950/40 via-slate-900 to-slate-950" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Ready to Streamline Your Practice?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Let's talk about how I can support your billing and admin needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-full shadow-lg transition-all"
          >
            Book a Call
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-full transition-all"
          >
            Send a Message
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
};
