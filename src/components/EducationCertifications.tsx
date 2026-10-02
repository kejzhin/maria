import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Education, Certifications & Core Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A solid scientific foundation in biological sciences paired with rigorous U.S. clinical compliance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degree Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-teal-700 uppercase tracking-wide">
                  {PERSONAL_INFO.education.period} · Tertiary Degree
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <div className="text-sm font-semibold text-slate-700 mt-0.5">
                  {PERSONAL_INFO.education.institution}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {PERSONAL_INFO.education.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-200">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Academic Focus:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Human Anatomy & Physiology', 'Microbiology', 'Medical Terminology', 'Scientific Research Methodology', 'Pharmacology Fundamentals'].map((sub, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-white text-slate-700 rounded-md border border-slate-200">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Core Traits */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* HIPAA Certification Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">Privacy & Compliance (HIPAA Certified)</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-100 text-teal-800 rounded">Verified</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict adherence to Protected Health Information (PHI) safeguarding, encrypted communication channels, secure electronic document dispatch, and zero disclosure breaches.
                </p>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Core Professional Competencies</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  'Medical Terminologies Familiarization',
                  'Prior Authorization Specialist',
                  'Tech and Computer Literacy',
                  'Proactive Initiative & Reliability',
                  'Detail-Oriented Approach',
                  'Cross-Cultural Team Coordination',
                  'Inbound & Outbound Phone Triage',
                  'EHR (AdvancedMD) Proficiency'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
