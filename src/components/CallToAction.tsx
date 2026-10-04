import React from 'react';
import { motion } from 'motion/react';

interface CallToActionProps {
  onOpenContact: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 sm:py-28 bg-slate-950 text-white relative overflow-hidden flex items-center justify-center min-h-[460px]">
      {/* Moving Video Background with camera angle: Desk, coffee cup, woman's hands typing on laptop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/desk-typing-coffee-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90 brightness-90 contrast-105"
      >
        <source src="/typing-desk-coffee.mp4" type="video/mp4" />
        <source src="/woman-typing-working.mp4" type="video/mp4" />
      </video>

      {/* Minimal transparent vignette to ensure high video visibility while keeping text crisp */}
      <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/65 pointer-events-none" />
      
      {/* Centered Content with exact preserved font, text, and styles */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
          Ready to Streamline Your Practice?
        </h2>

        <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Let's talk about how I can support your billing, prior authorization, and practice administrative needs.
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
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900/60 hover:bg-white/20 border-2 border-white rounded-full backdrop-blur-xs transition-all shadow-md"
          >
            Send a Message
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
};
