import React, { useState } from 'react';
import { ShieldCheck, FileText, ZoomIn, X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft pastel blue container card */}
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
                <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#1a365d] flex items-center justify-between">
                  <span>OFFICIAL CERTIFICATION</span>
                  <span className="text-[11px] font-medium text-slate-600 lowercase tracking-normal">click to enlarge</span>
                </div>
                
                {/* Real Certificate Preview Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setCertModalOpen(true)}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-white flex flex-col sm:flex-row items-center gap-4 sm:gap-5 relative overflow-hidden group hover:shadow-2xl transition-all cursor-pointer"
                  title="Click to view full certificate"
                >
                  {/* Real Certificate Image Thumbnail */}
                  <div className="w-full sm:w-36 h-24 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 relative shadow-sm">
                    <img
                      src="/certificate.jpg"
                      alt="HIPAA Awareness Certificate of Completion - Maria Bernadette Santos Angeles"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow">
                        <ZoomIn className="w-4 h-4 text-[#0e6ba8]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      HIPAA Awareness for Healthcare Providers
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      HIPAATraining.com • Hello Rache
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                        1.5 Credit Hours
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        Texas HB 300 & CA CMIA
                      </span>
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

      {/* Real Certificate Full Lightbox Modal */}
      <AnimatePresence>
        {certModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-bold text-slate-900">
                    Official Certificate of Completion
                  </span>
                </div>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
                  aria-label="Close Certificate View"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Certificate Image */}
              <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center bg-slate-100/60">
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white max-w-3xl w-full bg-white">
                  <img
                    src="/certificate.jpg"
                    alt="HIPAA Awareness for Healthcare Providers - Maria Bernadette Santos Angeles"
                    className="w-full h-auto object-contain block"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center pt-4 text-xs text-slate-600">
                  Certified: <strong>Maria Bernadette Santos Angeles</strong> (Hello Rache) • Issued April 29, 2022
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
