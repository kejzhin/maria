import React, { useState } from 'react';
import { 
  FileCheck, 
  ShieldCheck, 
  Binary, 
  Database, 
  PhoneCall, 
  Users, 
  Check, 
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="w-6 h-6 text-teal-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-600" />,
  Binary: <Binary className="w-6 h-6 text-teal-600" />,
  Database: <Database className="w-6 h-6 text-teal-600" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-teal-600" />,
  Users: <Users className="w-6 h-6 text-teal-600" />,
};

export const CoreSpecializations: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string | null>(CORE_COMPETENCIES[0].id);

  return (
    <section id="specializations" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Clinical & Administrative Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Specialized Skills Tailored for U.S. Surgical & Specialty Clinics
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Over four years of deep domain experience supporting busy ENT and Allergy practices with high-accuracy authorizations, clinical coding, and patient care workflows.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_COMPETENCIES.map((comp, idx) => {
            const isSelected = selectedComp === comp.id;
            return (
              <div
                key={comp.id}
                onClick={() => setSelectedComp(comp.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white border-teal-600 shadow-md ring-1 ring-teal-600/20'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {iconMap[comp.icon] || <FileCheck className="w-6 h-6 text-teal-600" />}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {comp.title}
                </h3>

                <p className="text-xs text-teal-800 font-medium mb-3 leading-relaxed">
                  {comp.summary}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {comp.description}
                </p>

                {/* Key Sub-Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-tight">
                    Key Execution Areas:
                  </div>
                  {comp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
