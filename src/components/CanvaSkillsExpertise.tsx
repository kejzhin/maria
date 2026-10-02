import React from 'react';
import { 
  TOOLS_COMMUNICATION, 
  TOOLS_EHR, 
  TOOLS_PORTALS, 
  TOOLS_INSURANCE 
} from '../data/portfolioData';
import { Globe, MessageSquare, Database, Shield } from 'lucide-react';

export const CanvaSkillsExpertise: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-sm font-semibold text-teal-800">
            Advanced Proficiency in U.S. Healthcare Platforms & Portals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Insurance Portals */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <Globe className="w-4 h-4" />
              <span>Health Insurance Portals</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS_PORTALS.map((t) => (
                <span key={t.id} className="px-3 py-1.5 bg-teal-50 text-teal-900 text-xs font-semibold rounded-lg border border-teal-200/80">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Communication Tools */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <MessageSquare className="w-4 h-4" />
              <span>Communication Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS_COMMUNICATION.map((t) => (
                <span key={t.id} className="px-3 py-1.5 bg-blue-50 text-blue-900 text-xs font-semibold rounded-lg border border-blue-200/80">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Insurance Networks */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <Shield className="w-4 h-4" />
              <span>Insurance Networks</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS_INSURANCE.map((t) => (
                <span key={t.id} className="px-3 py-1.5 bg-amber-50 text-amber-900 text-xs font-semibold rounded-lg border border-amber-200/80">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* EHR / EMR Systems */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <Database className="w-4 h-4" />
              <span>EHR / EMR Systems</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS_EHR.map((t) => (
                <span key={t.id} className="px-3 py-1.5 bg-purple-50 text-purple-900 text-xs font-semibold rounded-lg border border-purple-200/80">
                  {t.name}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200">
                AdvancedMD
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
