import React, { useState } from 'react';
import { 
  TOOLS_COMMUNICATION, 
  TOOLS_EHR, 
  TOOLS_PORTALS, 
  TOOLS_INSURANCE, 
  ToolItem 
} from '../data/portfolioData';
import { 
  Check, 
  ExternalLink, 
  Layers, 
  MessageSquare, 
  Database, 
  Globe, 
  Shield, 
  Info,
  ChevronRight,
  Zap,
  Lock
} from 'lucide-react';

export const ToolsAndTech: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'communication' | 'ehr' | 'portals' | 'insurance'>('all');
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Tools & Networks', count: TOOLS_COMMUNICATION.length + TOOLS_EHR.length + TOOLS_PORTALS.length + TOOLS_INSURANCE.length },
    { id: 'communication', label: 'Communication & Telehealth', count: TOOLS_COMMUNICATION.length, icon: MessageSquare },
    { id: 'ehr', label: 'EHR / EMR Software', count: TOOLS_EHR.length, icon: Database },
    { id: 'portals', label: 'Insurance Portals Expertise', count: TOOLS_PORTALS.length, icon: Globe },
    { id: 'insurance', label: 'Insurance Network Familiarity', count: TOOLS_INSURANCE.length, icon: Shield },
  ];

  const getFilteredTools = () => {
    switch (activeTab) {
      case 'communication':
        return TOOLS_COMMUNICATION;
      case 'ehr':
        return TOOLS_EHR;
      case 'portals':
        return TOOLS_PORTALS;
      case 'insurance':
        return TOOLS_INSURANCE;
      case 'all':
      default:
        return [...TOOLS_PORTALS, ...TOOLS_INSURANCE, ...TOOLS_EHR, ...TOOLS_COMMUNICATION];
    }
  };

  const renderCustomLogo = (toolId: string) => {
    switch (toolId) {
      case 'blue-shield':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#006699] flex items-center justify-center text-white shadow-sm p-2">
            <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
              <path d="M50 5 L85 20 V50 C85 75 50 95 50 95 C50 95 15 75 15 50 V20 Z" fill="none" stroke="white" strokeWidth="6" />
              <path d="M50 18 L75 29 V50 C75 68 50 82 50 82 C50 82 25 68 25 50 V29 Z" fill="white" />
              <path d="M42 48 L48 54 L62 40" fill="none" stroke="#006699" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );
      case 'medicare':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#991b1b] flex items-center justify-center text-white shadow-sm">
            <div className="text-center font-bold">
              <span className="text-[11px] block leading-none tracking-tighter">CMS</span>
              <span className="text-[9px] block uppercase font-mono tracking-widest text-red-200">MEDICARE</span>
            </div>
          </div>
        );
      case 'advanced-md':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#0369A1] flex items-center justify-center text-white font-black text-base shadow-sm">
            <div className="text-center leading-none">
              <span className="text-xs font-bold block">Adv</span>
              <span className="text-[10px] text-sky-200 block font-normal">MD</span>
            </div>
          </div>
        );
      case 'availity':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white shadow-sm font-bold text-sm tracking-wider">
            <div className="flex items-center gap-0.5">
              <span className="text-amber-400 text-lg">✦</span>
              <span className="text-xs">AVAILITY</span>
            </div>
          </div>
        );
      case 'optum':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#EA580C] flex items-center justify-center text-white shadow-sm font-bold text-xs tracking-wider">
            OPTUM
          </div>
        );
      case 'medpoint':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0EA5E9] flex items-center justify-center text-white shadow-sm font-bold text-[11px] text-center leading-tight">
            MED<br/>POINT
          </div>
        );
      case 'preferred-ipa':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] flex items-center justify-center text-white shadow-sm font-bold text-[10px] text-center leading-tight">
            PREFERRED<br/>IPA
          </div>
        );
      case 'astrana-health':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#7C3AED] flex items-center justify-center text-white shadow-sm font-bold text-[10px] text-center leading-tight">
            ASTRANA<br/>HEALTH
          </div>
        );
      case 'regal-lakeside':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#059669] flex items-center justify-center text-white shadow-sm font-bold text-[9px] text-center leading-tight">
            REGAL /<br/>LAKESIDE
          </div>
        );
      case 'doxy':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0D9488] flex items-center justify-center text-white shadow-sm font-bold text-xs">
            doxy.me
          </div>
        );
      case 'nextiva':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-sm font-bold text-xs">
            nextiva
          </div>
        );
      case 'google-meet':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#059669] flex items-center justify-center text-white shadow-sm font-bold text-[11px] text-center">
            Google<br/>Meet
          </div>
        );
      case 'ms-teams':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-sm font-bold text-xs">
            Teams
          </div>
        );
      case 'zoom':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0284C7] flex items-center justify-center text-white shadow-sm font-bold text-xs">
            zoom
          </div>
        );
      case 'discord':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center text-white shadow-sm font-bold text-xs">
            discord
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white shadow-sm font-bold text-xs">
            {toolId.slice(0, 3).toUpperCase()}
          </div>
        );
    }
  };

  return (
    <section id="tools-and-portals" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology & Insurance Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Tools, EHR, Insurance Portals & Networks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Proficient in high-stakes clinical software, California and national HMO/IPA health insurance portals, and HIPAA-compliant communication systems.
            </p>
          </div>

          {/* Security & HIPAA Assurance Stamp */}
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium shrink-0">
            <Lock className="w-4 h-4 text-teal-600" />
            <span>Encrypted & HIPAA Compliant Access</span>
          </div>
        </div>

        {/* Category Tabs (Segmented Control - Interactive buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/80 mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 text-[10px] rounded-full font-mono ${
                activeTab === cat.id ? 'bg-teal-50 text-teal-700 font-bold' : 'bg-slate-200 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredTools().map((tool) => (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool)}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  {renderCustomLogo(tool.id)}
                  
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {tool.category}
                    </span>
                    {tool.badge && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 rounded-md">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-xs font-medium text-teal-700 mb-2">
                  {tool.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-semibold text-slate-500 mb-2">
                  Key Workflow Capabilities:
                </div>
                <div className="space-y-1">
                  {tool.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Check className="w-3 h-3 text-teal-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details & Workflows</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payer Highlights Bar (Blue Shield & Medicare spotlight) */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Payer Authority & Verification
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Blue Shield & Medicare Network Specialization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Expert in California & National health insurance benefit designs, Local Coverage Determinations (LCDs), and Treatment Authorization Requests (TAR).
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Blue Shield Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#006699] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
                    <path d="M50 5 L85 20 V50 C85 75 50 95 50 95 C50 95 15 75 15 50 V20 Z" fill="none" stroke="white" strokeWidth="6" />
                    <path d="M50 18 L75 29 V50 C75 68 50 82 50 82 C50 82 25 68 25 50 V29 Z" fill="white" />
                    <path d="M42 48 L48 54 L62 40" fill="none" stroke="#006699" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">Blue Shield of California</div>
                  <p className="text-xs text-slate-600">
                    HMO, PPO, Covered CA prior authorizations for in-office sinus surgeries, allergy immunotherapy & biologics.
                  </p>
                  <div className="text-[11px] font-mono text-teal-700 font-semibold">
                    BSC Provider Portal · Real-time Auth
                  </div>
                </div>
              </div>

              {/* Medicare Card */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#991b1b] flex items-center justify-center text-white shrink-0 shadow-sm font-black text-xs">
                  CMS
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">Medicare (CMS) & Part C</div>
                  <p className="text-xs text-slate-600">
                    Traditional Medicare Part B fee schedules, Advance Beneficiary Notices (ABN), and Medicare Advantage HMO auth routing.
                  </p>
                  <div className="text-[11px] font-mono text-red-700 font-semibold">
                    LCD / NCD Criteria · MSP Compliance
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Deep-Dive Modal for Selected Tool */}
      {selectedTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              {renderCustomLogo(selectedTool.id)}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {selectedTool.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{selectedTool.name}</h3>
                <div className="text-xs text-slate-500">{selectedTool.subtitle}</div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedTool.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Detailed Workflow Capabilities:
              </div>
              <div className="space-y-2">
                {selectedTool.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedTool(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
