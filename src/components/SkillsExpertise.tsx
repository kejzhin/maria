import React from 'react';
import { 
  TOOLS_COMMUNICATION, 
  TOOLS_EHR, 
  TOOLS_PORTALS, 
  TOOLS_INSURANCE 
} from '../data/portfolioData';
import { Globe, MessageSquare, Database, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsExpertise: React.FC = () => {
  const portalTools = TOOLS_PORTALS;
  const commTools = TOOLS_COMMUNICATION;
  const insuranceTools = TOOLS_INSURANCE;
  const primaryEHR = TOOLS_EHR[0];

  const ehrCapabilities = [
    "Patient Demographics & Charting",
    "Prior Auth Letter Attachment",
    "Clinical Notes & Chart Tagging",
    "Multi-Provider Scheduling",
    "HIPAA Electronic Fax Dispatch",
    "Encounter Charge Review"
  ];

  return (
    <section id="skills" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0e6ba8]">
            Hands-on mastery with U.S. Healthcare Portals, Telehealth, EHR & Insurance Networks
          </p>
        </motion.div>

        {/* 2x2 Grid - Fully optimized for mobile & desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Health Insurance Portals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Clean Header - No badges, perfect mobile alignment */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100 mb-4">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100/80 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-tight">
                  Health Insurance Portals
                </h3>
              </div>

              {/* 2-Column Responsive Tool Subgrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {portalTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/60 hover:border-teal-300 transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                      {tool.logoUrl ? (
                        <img 
                          src={tool.logoUrl} 
                          alt={`${tool.name} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <Globe className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Communication Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Clean Header - No badges, perfect mobile alignment */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100/80 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-tight">
                  Communication Tools
                </h3>
              </div>

              {/* 2-Column Responsive Tool Subgrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {commTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/60 hover:border-blue-300 transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                      {tool.logoUrl ? (
                        <img 
                          src={tool.logoUrl} 
                          alt={`${tool.name} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Insurance Networks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Clean Header - No badges, perfect mobile alignment */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100/80 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-tight">
                  Insurance Networks
                </h3>
              </div>

              {/* 2-Column Responsive Tool Subgrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {insuranceTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/60 hover:border-emerald-300 transition-all group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                      {tool.logoUrl ? (
                        <img 
                          src={tool.logoUrl} 
                          alt={`${tool.name} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <Shield className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: EHR & Practice Management (No badges) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Clean Header - No badges, perfect mobile alignment */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100/80 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-tight">
                  EHR & Practice Management
                </h3>
              </div>

              {/* AdvancedMD Main Feature Box */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100/90 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-indigo-100 shadow-2xs flex items-center justify-center p-1.5 shrink-0">
                  <img 
                    src={primaryEHR.logoUrl} 
                    alt="AdvancedMD Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    {primaryEHR.name}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-indigo-700 leading-tight mt-0.5">
                    Electronic Health Records & Practice Management
                  </div>
                </div>
              </div>

              {/* 2-Column Responsive Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {ehrCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium py-0.5 text-left">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
