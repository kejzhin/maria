import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface CanvaAboutProps {
  onOpenResume: () => void;
}

export const CanvaAbout: React.FC<CanvaAboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft pastel blue container card matching the reference image layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#a8d3ee] rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Photo Card with Badge on Top-Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center">
                
                {/* Vertical Photo Card */}
                <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:w-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white group">
                  <img
                    src="/profile.png"
                    alt="Maria Bernadette Estrada"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
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
                        if (parent && !parent.querySelector('.fallback-avatar-about')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-avatar-about absolute inset-0 bg-gradient-to-br from-teal-800 to-slate-900 flex flex-col items-center justify-center text-white p-6 text-center';
                          fallback.innerHTML = `
                            <div class="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-xl font-bold mb-2 shadow-inner">MB</div>
                            <div class="text-sm font-bold">Maria Bernadette</div>
                            <div class="text-[10px] text-teal-200 mt-1">Upload profile.png</div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                  />
                </div>

                {/* HIPAA Badge on Top-Left of Photo */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 220 }}
                  className="absolute -top-3 sm:-top-5 -left-2 sm:-left-5 z-20 pointer-events-none drop-shadow-xl"
                >
                  <div className="w-24 sm:w-32 md:w-36">
                    <img
                      src="/badge.png"
                      alt="HIPAA Compliant"
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-seal-about')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-seal-about w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-blue-900 text-white flex flex-col items-center justify-center text-[10px] font-bold text-center shadow-lg pointer-events-auto';
                          fallback.innerText = 'HIPAA Badge';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* Right Bio & Certificate Card Layout */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1a365d] tracking-tight">
                Hi, I'm Maria Bernadette
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-normal">
                A dedicated Healthcare Virtual Assistant and Prior Authorization Specialist with over 4 years of experience supporting U.S. healthcare practices, particularly in ENT (Ear, Nose, & Throat) and Allergy.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-normal">
                My mission is simple: to give you peace of mind knowing that the back-end operations of your practice are managed accurately, confidentially, and efficiently.
              </p>

              {/* Certification Section */}
              <div className="space-y-3 pt-2 text-left">
                <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#1a365d]">
                  CERTIFICATION
                </div>
                
                {/* Certificate Preview Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white flex flex-col sm:flex-row items-center gap-4 sm:gap-5 relative overflow-hidden group hover:shadow-2xl transition-all"
                >
                  <div className="w-full sm:w-32 h-16 sm:h-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center p-2 sm:p-3 border border-blue-100 flex-shrink-0 shadow-inner">
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-blue-900 uppercase">PENN</div>
                      <div className="text-[9px] text-slate-600">Privacy & HIPAA</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="text-sm sm:text-base font-bold text-slate-900 truncate">Privacy Law and HIPAA</div>
                    <div className="text-xs text-slate-600">University of Pennsylvania / Coursera</div>
                    <div className="text-xs text-teal-700 font-semibold mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Verified Credential
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* View CV Button */}
              <div className="pt-2 flex justify-center sm:justify-start">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenResume}
                  className="px-8 sm:px-9 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-lg transition-all flex items-center gap-2.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW CV</span>
                </motion.button>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
