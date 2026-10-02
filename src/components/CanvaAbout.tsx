import React from 'react';
import { ShieldCheck, FileText, Award } from 'lucide-react';

interface CanvaAboutProps {
  onOpenResume: () => void;
}

export const CanvaAbout: React.FC<CanvaAboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft pastel blue container card matching the reference image */}
        <div className="bg-[#a8d3ee] rounded-3xl p-6 sm:p-12 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo Card with Badge on Top-Left */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-sm flex items-center justify-center py-4">
                
                {/* Rectangular Photo Card */}
                <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <img
                    src="/profile.png"
                    alt="Maria Bernadette Estrada"
                    className="w-full h-full object-cover object-top"
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
                <div className="absolute -top-4 -left-4 sm:-left-6 z-30 pointer-events-none drop-shadow-xl">
                  <div className="w-28 sm:w-32">
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
                          fallback.className = 'fallback-seal-about w-20 h-20 rounded-full bg-blue-900 text-white flex flex-col items-center justify-center text-[10px] font-bold text-center shadow-lg pointer-events-auto';
                          fallback.innerText = 'HIPAA Badge';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Bio & Certification Card */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a365d] tracking-tight">
                Hi, I'm Maria Bernadette
              </h2>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                A Medical Receptionist and Biller turned Virtual Assistant. For more than a decade, I've supported healthcare providers with billing, claims processing, scheduling, and administrative management.
              </p>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                My mission is simple: to give you peace of mind knowing that the back-end operations of your practice are managed accurately, confidentially, and efficiently.
              </p>

              {/* Certification Box matching reference image */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-black uppercase tracking-widest text-[#1a365d]">
                  CERTIFICATION
                </div>
                
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/80 flex items-center gap-4 relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="w-24 sm:w-28 h-16 sm:h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center p-2 border border-blue-100 flex-shrink-0 shadow-inner">
                    <div className="text-center">
                      <div className="text-[10px] font-bold text-blue-900 uppercase">Penn</div>
                      <div className="text-[8px] text-slate-600">Privacy & HIPAA</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">Privacy Law and HIPAA</div>
                    <div className="text-[11px] text-slate-600">University of Pennsylvania / Coursera</div>
                    <div className="text-[10px] text-teal-700 font-semibold mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                    </div>
                  </div>
                </div>
              </div>

              {/* View CV Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW CV</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
