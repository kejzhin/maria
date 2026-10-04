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
    <section id="skills" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a365d] tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0e6ba8]">
            Hands-on mastery with U.S. Healthcare Portals, Telehealth, EHR & Insurance Networks
          </p>
        </motion.div>

        {/* 2x2 Spacious Grid - Never cramped, never cut off */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Health Insurance Portals */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header with plenty of horizontal space */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      Health Insurance Portals
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Prior authorization & eligibility submissions
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 shrink-0">
                  {portalTools.length} Portals
                </span>
              </div>

              {/* 2-Column Subgrid of Portals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portalTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/60 hover:border-teal-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
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
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0"></span>
              <span>Daily electronic auth submission & TAR tracking workflows</span>
            </div>
          </motion.div>

          {/* Card 2: Communication Tools */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header with plenty of horizontal space */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      Communication & Telehealth
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Cloud VoIP triage & HIPAA virtual visits
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shrink-0">
                  {commTools.length} Platforms
                </span>
              </div>

              {/* 2-Column Subgrid of Communication Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/60 hover:border-blue-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
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
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
              <span>Nextiva high-volume call queue & Doxy.me proctoring</span>
            </div>
          </motion.div>

          {/* Card 3: Insurance Networks */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header with plenty of horizontal space */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      Insurance Networks
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Payer guidelines & medical policy verification
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shrink-0">
                  {insuranceTools.length} Networks
                </span>
              </div>

              {/* 2-Column Subgrid of Networks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {insuranceTools.map((tool) => (
                  <div 
                    key={tool.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/60 hover:border-emerald-300 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/80 shadow-xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
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
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {tool.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Fluent in HMO, PPO, EPO, Medi-Cal & Medicare Advantage criteria</span>
            </div>
          </motion.div>

          {/* Card 4: EHR & Practice Management (AdvancedMD) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top color bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-[#0e6ba8] to-teal-400" />

            <div>
              {/* Header with plenty of horizontal space */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      EHR & Practice Management
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Core clinical software operations
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shrink-0">
                  Primary EHR
                </span>
              </div>

              {/* AdvancedMD Banner */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50/70 border border-indigo-100/90 mb-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-indigo-100 shadow-xs flex items-center justify-center p-1.5 shrink-0">
                  <img 
                    src={primaryEHR.logoUrl} 
                    alt="AdvancedMD Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 leading-tight">
                    {primaryEHR.name}
                  </div>
                  <div className="text-xs font-semibold text-indigo-700">
                    4+ Years Daily Operational Experience
                  </div>
                </div>
              </div>

              {/* 2-Column Checklist of Daily Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ehrCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span className="leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span>Fully certified in HIPAA compliance & protected health information</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
