import React from 'react';
import { HeartHandshake, Eye, CheckCircle2, Zap } from 'lucide-react';

export const CanvaHowIWork: React.FC = () => {
  const qualities = [
    {
      title: "Empathy in Patient Communication",
      desc: "Warm, professional triage and patient care coordination.",
      icon: HeartHandshake
    },
    {
      title: "Attention to Details",
      desc: "Meticulous verification of ICD-10, CPT codes and claim forms.",
      icon: Eye
    },
    {
      title: "Proactive & Organized",
      desc: "Anticipating practice bottlenecks before appointments occur.",
      icon: CheckCircle2
    },
    {
      title: "Remote Work Efficiency",
      desc: "High-speed fiber connectivity, dual monitors, and secure setup.",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-sm text-teal-400 font-medium mt-1">
            The Qualities That Set Me Apart
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((q, idx) => {
            const Icon = q.icon;
            return (
              <div key={idx} className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-teal-500/60 transition-colors text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">{q.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{q.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
