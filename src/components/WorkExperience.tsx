import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const WorkExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(WORK_EXPERIENCE[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Clinical Practice & Healthcare Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A proven track record supporting surgical centers, clinical pharmacology, and high-volume healthcare administrative environments.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded ? 'border-teal-600 shadow-md' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Header Card Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {exp.role}
                      </span>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-md">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-teal-700">
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <span className="text-slate-300">·</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center">
                    <button
                      className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="px-6 pb-7 pt-2 sm:px-7 border-t border-slate-100 space-y-6 animate-fade-in">
                    
                    {/* Summary Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bulleted Core Responsibilities */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Key Responsibilities & Clinical Scope:
                      </div>
                      <div className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="bg-teal-50/70 rounded-xl p-4 border border-teal-100 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                          <span>Key Accomplishments & Impact:</span>
                        </div>
                        <div className="space-y-1.5">
                          {exp.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs text-teal-950 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills & Tools Tags */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Technologies & Domain Focus:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md border border-slate-200/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
