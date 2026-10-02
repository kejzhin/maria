import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface CanvaHeroProps {
  onOpenServices: () => void;
  onOpenAbout: () => void;
}

export const CanvaHero: React.FC<CanvaHeroProps> = ({ onOpenServices, onOpenAbout }) => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] tracking-tight leading-[1.15] text-balance">
              Prior Authorization Specialist <br className="hidden sm:inline" />
              & Virtual Assistance for <br className="hidden sm:inline" />
              Healthcare Professional
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
              With over 12 years of experience and HIPAA Certification, I help Healthcare Providers streamline their practice by handling billing and administrative tasks—so you can focus on patient care.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenServices}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0e6ba8] bg-white hover:bg-slate-50 border border-[#0e6ba8] rounded-full shadow-sm transition-all hover:-translate-y-0.5"
              >
                View Services
              </button>

              <button
                onClick={onOpenAbout}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-md transition-all hover:-translate-y-0.5"
              >
                Know More About Me
              </button>
            </div>
          </div>

          {/* Right Image Column (Bigger Circular Frame Style with badge.png Seal on Right, No Cursive Name) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md flex items-center justify-center py-6">
              
              {/* Bigger Circular Photo Frame */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
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
                      if (parent && !parent.querySelector('.fallback-avatar')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-avatar absolute inset-0 bg-gradient-to-br from-teal-800 to-slate-900 flex flex-col items-center justify-center text-white p-6 text-center rounded-full';
                        fallback.innerHTML = `
                          <div class="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-2xl font-bold mb-2 shadow-inner">MB</div>
                          <div class="text-sm font-bold">Maria Bernadette</div>
                          <div class="text-[10px] text-teal-200 mt-1">Upload profile.png</div>
                        `;
                        parent.appendChild(fallback);
                      }
                    }
                  }}
                />
              </div>

              {/* HIPAA Badge Image (/badge.png) on RIGHT side, transparent background */}
              <div className="absolute right-0 sm:-right-8 top-1/2 transform -translate-y-1/2 z-35 pointer-events-none">
                <div className="w-32 sm:w-38 drop-shadow-xl">
                  <img
                    src="/badge.png"
                    alt="HIPAA Compliant"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-seal')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-seal w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-white flex flex-col items-center justify-center p-2 text-center shadow-inner pointer-events-auto';
                        fallback.innerHTML = `
                          <span class="text-[11px] font-black tracking-wider leading-tight">HIPAA</span>
                          <span class="text-[9px] font-medium tracking-tighter text-blue-100">COMPLIANT</span>
                          <span class="text-[7px] text-blue-200 mt-1">Upload badge.png</span>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
