import React from 'react';
import { Heart } from 'lucide-react';

interface CanvaProfessionalBackgroundProps {
  onOpenContact?: () => void;
}

export const CanvaProfessionalBackground: React.FC<CanvaProfessionalBackgroundProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Header with Heartbeat lines */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="flex items-center gap-3 text-[#0e6ba8]">
            {/* Left pulse line */}
            <svg className="w-20 sm:w-32 h-8 text-[#0e6ba8]" viewBox="0 0 100 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M0 12h25l5-8 8 16 8-16 6 8h48" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="w-6 h-6 rounded-full bg-[#0e6ba8] text-white flex items-center justify-center shadow">
              <Heart className="w-3.5 h-3.5 fill-white" />
            </div>
            {/* Right pulse line */}
            <svg className="w-20 sm:w-32 h-8 text-[#0e6ba8]" viewBox="0 0 100 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M0 12h48l6 8 8-16 8 16 5-8h25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1a365d] tracking-tight">
            Professional Background
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            Over a Decade of Supporting Healthcare Providers
          </p>
        </div>

        {/* Clinics / Partner Logos Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
          
          {/* 1. Visual Processing Optometry */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-purple-700 font-extrabold text-lg tracking-wider">VISUAL</div>
              <div className="text-purple-900 font-bold text-xs tracking-widest uppercase">Processing</div>
              <div className="text-[9px] text-slate-500 tracking-wider mt-0.5">OPTOMETRY</div>
            </div>
          </div>

          {/* 2. Gunz Dental */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-[#1a365d] font-black text-xl italic tracking-tight">Gunz</div>
              <div className="text-cyan-600 font-bold text-sm tracking-widest uppercase">dental</div>
              <div className="text-[8px] text-slate-400 mt-1">THE PEOPLE BEHIND THE PRODUCTS YOU TRUST</div>
            </div>
          </div>

          {/* 3. QuickMD */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-cyan-600 flex items-center justify-center text-cyan-600 font-bold">Q</div>
              <div className="text-slate-900 font-bold text-lg tracking-tight">Quick<span className="text-cyan-600">MD</span></div>
            </div>
          </div>

          {/* 4. A Step Above Health Management */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-teal-700 font-serif italic font-bold text-sm">A Step Above</div>
              <div className="text-[10px] text-slate-600 font-medium">Health Management</div>
              <div className="text-[7px] text-slate-400 mt-0.5">Pediatric Billing and Consulting</div>
            </div>
          </div>

          {/* 5. Siyan Clinical Corporation */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-green-700 font-bold text-sm">Siyan Clinical Corporation</div>
            </div>
          </div>

          {/* 6. Flourish Mindset */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-emerald-800 font-serif font-bold text-sm">FLOURISH MINDSET</div>
              <div className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Marriage and Family Therapy</div>
            </div>
          </div>

          {/* 7. Medens Health */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-[#1a365d] font-black text-sm tracking-wider">MEDENS</div>
              <div className="text-amber-600 font-bold text-sm tracking-widest">HEALTH</div>
            </div>
          </div>

          {/* 8. LA Peace of Mind Counseling Services */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="text-teal-800 font-serif text-xs font-bold">LA Peace of Mind</div>
              <div className="text-[9px] text-slate-600 mt-0.5">Counseling Services, Inc.</div>
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="pt-6">
          <button
            onClick={onOpenContact}
            className="px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-lg transition-all hover:-translate-y-0.5"
          >
            LET'S WORK TOGETHER
          </button>
        </div>

      </div>
    </section>
  );
};
