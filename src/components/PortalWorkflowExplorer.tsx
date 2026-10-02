import React, { useState } from 'react';
import { PRIOR_AUTH_STEPS } from '../data/portfolioData';
import { FileCheck, ShieldAlert, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const PortalWorkflowExplorer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="prior-auth-workflow" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80 mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Standard Operating Procedure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            High-Accuracy Prior Authorization Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            How Maria prevents denials, accelerates medical clearances, and keeps patient schedules full with zero unexpected delays.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {PRIOR_AUTH_STEPS.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-900/40 border-teal-500 shadow-md text-white'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-teal-400">
                    Step {item.step}
                  </span>
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                </div>
                <div className="text-xs font-semibold line-clamp-1">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-mono font-bold">
                  STAGE {PRIOR_AUTH_STEPS[activeStep].step} OF 05
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-teal-400 font-medium">Turnaround Target: &lt; 24-48 Hours</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {PRIOR_AUTH_STEPS[activeStep].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PRIOR_AUTH_STEPS[activeStep].description}
              </p>
            </div>

            {/* Micro Flow Summary */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-700/80 shrink-0 w-full lg:w-80 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Tools Used In This Step:
              </div>
              <div className="text-xs text-slate-200 font-mono space-y-1">
                {activeStep === 0 && <div>• AdvancedMD Chart Documentation<br/>• Diagnostic Scans & Audiograms</div>}
                {activeStep === 1 && <div>• Availity Essentials (270/271)<br/>• Payer Benefit Verification</div>}
                {activeStep === 2 && <div>• Optum / Medpoint / Preferred IPA<br/>• Astrana / Regal / BSC Portals</div>}
                {activeStep === 3 && <div>• Nextiva Outbound Phone Calls<br/>• Turnaround Ticket Log</div>}
                {activeStep === 4 && <div>• AdvancedMD Document Tagging<br/>• Patient Clearance Alert</div>}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex items-center justify-between">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous Step
            </button>
            <div className="text-xs text-slate-400 font-mono">
              Step {activeStep + 1} of 5
            </div>
            <button
              onClick={() => setActiveStep((prev) => Math.min(PRIOR_AUTH_STEPS.length - 1, prev + 1))}
              disabled={activeStep === PRIOR_AUTH_STEPS.length - 1}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
