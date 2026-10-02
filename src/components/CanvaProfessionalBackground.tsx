import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const CanvaProfessionalBackground: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Professional Background
          </h2>
          <p className="text-sm font-semibold text-teal-800">
            Over Four Years of Supporting Healthcare Providers
          </p>
        </div>

        {/* Practice & Company Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-left space-y-2">
              <div className="text-xs font-mono font-bold text-teal-700">{exp.period}</div>
              <div className="text-base font-bold text-slate-900">{exp.company}</div>
              <div className="text-xs font-semibold text-slate-600">{exp.role}</div>
              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
