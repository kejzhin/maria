import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </div>
            <div className="text-xs text-teal-400 font-medium">
              Healthcare Virtual Assistant · ENT & Allergy Prior Authorization Specialist
            </div>
            <p className="text-[11px] text-slate-500 max-w-md pt-1">
              Providing HIPAA-compliant clinical administration, EHR mastery, and real-time insurance clearances for U.S. healthcare providers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenResume}
              className="text-slate-300 hover:text-teal-400 transition-colors"
            >
              Resume PDF
            </button>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-300 hover:text-teal-400 transition-colors"
            >
              Email Maria
            </a>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-teal-400 transition-colors p-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>HIPAA Compliant & PHI Confidentiality Adherent</span>
          </div>

          <div>
            © {new Date().getFullYear()} Maria Bernadette S. Angeles - Estrada. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
