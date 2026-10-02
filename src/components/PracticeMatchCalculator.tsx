import React, { useState } from 'react';
import { Calculator, Check, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface TaskOption {
  id: string;
  name: string;
  category: string;
  hoursPerWeek: number;
  description: string;
}

const TASKS: TaskOption[] = [
  { id: 'auth', name: 'Prior Authorization & Treatment Clearance', category: 'Clinical Admin', hoursPerWeek: 12, description: 'Portal submissions (Availity, Optum, Medpoint, Astrana, BSC), clinical attachment, follow-ups.' },
  { id: 'eligibility', name: 'Real-Time Eligibility & Benefits Verification', category: 'Billing Support', hoursPerWeek: 8, description: '270/271 queries, deductible/copay breakdown, out-of-pocket tracking.' },
  { id: 'calls', name: 'Inbound / Outbound Nextiva Phone Calls', category: 'Patient Communication', hoursPerWeek: 10, description: 'Appointment scheduling, patient triage, payer escalation phone trees.' },
  { id: 'ehr', name: 'AdvancedMD Chart Tagging & Fax Management', category: 'EHR Management', hoursPerWeek: 6, description: 'Document indexing, electronic fax dispatch to hospital facilities, chart preparation.' },
  { id: 'telehealth', name: 'Doxy.me Telehealth & Proctoring Support', category: 'Clinical Support', hoursPerWeek: 4, description: 'Patient virtual room check-in, consent collection, test certificate issuance.' },
];

export const PracticeMatchCalculator: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [practiceType, setPracticeType] = useState<string>('ENT & Allergy Surgical Practice');
  const [selectedTasks, setSelectedTasks] = useState<string[]>(['auth', 'eligibility', 'ehr']);
  const [urgency, setUrgency] = useState<'immediate' | '1-2weeks' | 'nextMonth'>('immediate');

  const toggleTask = (taskId: string) => {
    if (selectedTasks.includes(taskId)) {
      if (selectedTasks.length > 1) {
        setSelectedTasks(selectedTasks.filter(id => id !== taskId));
      }
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const calculatedHours = selectedTasks.reduce((sum, id) => {
    const task = TASKS.find(t => t.id === id);
    return sum + (task ? task.hoursPerWeek : 0);
  }, 0);

  const isFullTime = calculatedHours >= 30;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Practice Workload Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Customize Maria's Support for Your Practice
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Select your clinical requirements below to calculate recommended coverage hours and view an instant onboarding schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Step 1: Practice Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Your Practice Specialty
              </label>
              <select
                value={practiceType}
                onChange={(e) => setPracticeType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 font-medium text-slate-800"
              >
                <option value="ENT & Allergy Surgical Practice">ENT & Allergy Surgical Practice (Direct Specialty Fit)</option>
                <option value="Ear, Nose & Throat (Otolaryngology) Solo / Group">Ear, Nose & Throat (Otolaryngology) Solo / Group</option>
                <option value="Allergy, Asthma & Immunology Clinic">Allergy, Asthma & Immunology Clinic</option>
                <option value="Multi-Specialty Ambulatory Center">Multi-Specialty Ambulatory Center</option>
                <option value="Internal Medicine / Family Practice">Internal Medicine / Family Practice</option>
              </select>
            </div>

            {/* Step 2: Task Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Select Required Delegation Tasks
              </label>
              <div className="space-y-2.5">
                {TASKS.map((task) => {
                  const isChecked = selectedTasks.includes(task.id);
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-teal-50/50 border-teal-500/80 ring-1 ring-teal-500/20'
                          : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">{task.name}</span>
                          <span className="text-xs font-mono font-semibold text-teal-700">~{task.hoursPerWeek} hrs/wk</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{task.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Desired Start Timeline */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Placement Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'immediate', label: 'Immediate Start' },
                  { id: '1-2weeks', label: 'Within 1-2 Weeks' },
                  { id: 'nextMonth', label: 'Future Pipeline' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                      urgency === item.id
                        ? 'bg-teal-700 text-white border-teal-700'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 lg:sticky lg:top-24">
            
            <div className="space-y-1 pb-4 border-b border-slate-700/80">
              <div className="text-xs uppercase tracking-wider text-teal-400 font-mono font-semibold">
                Recommended Allocation Summary
              </div>
              <div className="text-xl font-bold text-white">
                {practiceType}
              </div>
            </div>

            {/* Calculated Hours Metric */}
            <div className="flex items-baseline justify-between bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <div>
                <div className="text-xs text-slate-400">Recommended Allocation</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-mono">
                  {calculatedHours} Hours / Week
                </div>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-teal-500/20 text-teal-300 font-mono border border-teal-500/30">
                  {isFullTime ? 'Full-Time (40h)' : 'Part-Time Flex'}
                </span>
              </div>
            </div>

            {/* Quick Readiness Indicators */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero Onboarding Curve for AdvancedMD & Major Portals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Full HIPAA Security & Encrypted Equipment Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>PST, MST, CST, or EST Shift Alignment</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenContact}
                className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request Discovery Interview with Maria</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400">
                Direct engagement · passthrough communication
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
