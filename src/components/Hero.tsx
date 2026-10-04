import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenServices: () => void;
  onOpenAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenServices, onOpenAbout }) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1a365d] tracking-tight leading-[1.2] text-balance"
            >
              Prior Authorization Specialist <br className="hidden sm:inline" />
              & Virtual Assistance for <br className="hidden sm:inline" />
              Healthcare Professionals
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              With over 4 years of experience and HIPAA Certification, I help Healthcare Providers streamline their practice by handling prior authorization, customer service and administrative tasks—so you can focus on patient care.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenServices}
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-[#0e6ba8] bg-white hover:bg-slate-50 border-2 border-[#0e6ba8] rounded-full shadow-sm transition-all"
              >
                View Services
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenAbout}
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-md transition-all"
              >
                Know More About Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center py-4">
              
              {/* Circular Photo Frame */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-slate-100 border-4 border-white"
              >
                <img
                  src="/profile.png"
                  alt="Maria Bernadette Estrada"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried1) {
                      target.dataset.tried1 = 'true';
                      target.src = 'profile.png';
                    } else if (!target.dataset.tried2) {
                      target.dataset.tried2 = 'true';
                      target.src = './profile.png';
                    } else {
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-avatar')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-avatar absolute inset-0 bg-gradient-to-br from-teal-800 to-slate-900 flex flex-col items-center justify-center text-white p-6 text-center rounded-full';
                        fallback.innerHTML = `
                          <div class="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-xl sm:text-2xl font-bold mb-2 shadow-inner">MB</div>
                          <div class="text-sm font-bold">Maria Bernadette</div>
                        `;
                        parent.appendChild(fallback);
                      }
                    }
                  }}
                />
              </motion.div>

              {/* HIPAA Badge Image (/badge.png) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
              >
                <div className="w-24 sm:w-32 md:w-36 drop-shadow-xl">
                  <img
                    src="/badge.png"
                    alt="HIPAA Compliant"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
