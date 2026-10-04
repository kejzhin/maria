import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfessionalBackgroundProps {
  onOpenContact?: () => void;
}

export const ProfessionalBackground: React.FC<ProfessionalBackgroundProps> = ({ onOpenContact }) => {
  const organizations = [
    {
      id: "laent",
      name: "Los Angeles Center for Ear, Nose, Throat and Allergy",
      shortName: "LA ENT & Allergy",
      role: "Healthcare Virtual Assistant",
      period: "2022 – Present",
      location: "Remote (Supporting U.S. Practice)",
      description: "Prior authorization, insurance verification, AdvancedMD EHR management, and clinical back-end coordination.",
      logoUrl: "/organizations/laent_seal.svg",
      tagColor: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      id: "tts",
      name: "Total Testing Solutions",
      shortName: "TTS Medical",
      role: "Virtual Telehealth Proctor",
      period: "Clinical Telehealth",
      location: "Remote",
      description: "Proctored COVID-19 testing protocols, issued test certificates, and managed patient queues via Doxy.me.",
      logoUrl: "/organizations/tts_card.svg",
      tagColor: "bg-teal-50 text-teal-800 border-teal-200"
    },
    {
      id: "zydus",
      name: "Zydus Healthcare Phils, Inc.",
      shortName: "Zydus Lifesciences",
      role: "Licensed Professional Medical Representative",
      period: "2019 – 2022",
      location: "BGC Taguig, Philippines",
      description: "Promoted cardio-metabolic pharmaceuticals to medical specialists and secured tertiary hospital formulary adoption.",
      logoUrl: "/organizations/zydus.png",
      tagColor: "bg-purple-50 text-purple-800 border-purple-200"
    },
    {
      id: "rmerk",
      name: "R-Merk Drug, Inc.",
      shortName: "R-Merk Drug",
      role: "Medical Clinician",
      period: "2018 – 2019",
      location: "Quezon City, Philippines",
      description: "Coordinated institutional partnerships and formulary inclusion for vital injectable and specialty medicines.",
      logoUrl: "/organizations/rmerk.svg",
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-12">
        
        {/* Header with Pulse ECG Lines */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600">
            Over 4 Years of Clinical & Healthcare Experience
          </p>
        </motion.div>

        {/* 4 Real Organizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Logo Area */}
                <div className="h-28 sm:h-32 w-full bg-slate-50/70 rounded-xl border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover:bg-slate-50 transition-colors">
                  <img
                    src={org.logoUrl}
                    alt={`${org.name} Logo`}
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xs group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Organization Title */}
                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0e6ba8] transition-colors line-clamp-2 min-h-[2.5rem]">
                  {org.name}
                </h3>

                {/* Role Pill */}
                <div className="mt-2.5 inline-block">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${org.tagColor} block leading-tight`}>
                    {org.role}
                  </span>
                </div>

                {/* Brief Summary */}
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {org.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2 sm:pt-4"
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
