import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface CanvaProfessionalBackgroundProps {
  onOpenContact?: () => void;
}

export const CanvaProfessionalBackground: React.FC<CanvaProfessionalBackgroundProps> = ({ onOpenContact }) => {
  const partners = [
    {
      id: 1,
      content: (
        <div className="text-center">
          <div className="text-purple-700 font-extrabold text-lg tracking-wider">VISUAL</div>
          <div className="text-purple-900 font-bold text-xs tracking-widest uppercase">Processing</div>
          <div className="text-[9px] text-slate-500 tracking-wider mt-0.5">OPTOMETRY</div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="text-center">
          <div className="text-[#1a365d] font-black text-xl italic tracking-tight">Gunz</div>
          <div className="text-cyan-600 font-bold text-sm tracking-widest uppercase">dental</div>
          <div className="text-[8px] text-slate-400 mt-1">THE PEOPLE BEHIND THE PRODUCTS YOU TRUST</div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-600 flex items-center justify-center text-cyan-600 font-bold">Q</div>
          <div className="text-slate-900 font-bold text-lg tracking-tight">Quick<span className="text-cyan-600">MD</span></div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="text-center">
          <div className="text-teal-700 font-serif italic font-bold text-sm">A Step Above</div>
          <div className="text-[10px] text-slate-600 font-medium">Health Management</div>
          <div className="text-[7px] text-slate-400 mt-0.5">Pediatric Billing and Consulting</div>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div className="text-center">
          <div className="text-green-700 font-bold text-sm">Siyan Clinical Corporation</div>
        </div>
      )
    },
    {
      id: 6,
      content: (
        <div className="text-center">
          <div className="text-emerald-800 font-serif font-bold text-sm">FLOURISH MINDSET</div>
          <div className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">Marriage and Family Therapy</div>
        </div>
      )
    },
    {
      id: 7,
      content: (
        <div className="text-center">
          <div className="text-[#1a365d] font-black text-sm tracking-wider">MEDENS</div>
          <div className="text-amber-600 font-bold text-sm tracking-widest">HEALTH</div>
        </div>
      )
    },
    {
      id: 8,
      content: (
        <div className="text-center">
          <div className="text-teal-800 font-serif text-xs font-bold">LA Peace of Mind</div>
          <div className="text-[9px] text-slate-600 mt-0.5">Counseling Services, Inc.</div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Header with Heartbeat lines */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-[#0e6ba8]">
            {/* Left pulse line */}
            <svg className="w-10 sm:w-20 md:w-32 h-6 sm:h-8 text-[#0e6ba8]" viewBox="0 0 100 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M0 12h25l5-8 8 16 8-16 6 8h48" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0e6ba8] text-white flex items-center justify-center shadow">
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
            </div>
            {/* Right pulse line */}
            <svg className="w-10 sm:w-20 md:w-32 h-6 sm:h-8 text-[#0e6ba8]" viewBox="0 0 100 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M0 12h48l6 8 8-16 8 16 5-8h25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] tracking-tight">
            Professional Background
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            Over 4 Years of Supporting Healthcare Providers
          </p>
        </motion.div>

        {/* Clinics / Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center h-28 sm:h-32 hover:shadow-md transition-all cursor-default"
            >
              {partner.content}
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 sm:pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenContact}
            className="px-8 sm:px-9 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-lg transition-all"
          >
            LET'S WORK TOGETHER
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
