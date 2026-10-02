import React from 'react';
import { PERSONAL_INFO, PRACTICE_BENEFITS } from '../data/portfolioData';
import { Award, Zap, CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-slate-800">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-100">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Why Clinics Trust Maria: 4 Key Value Drivers */}
        <div className="pt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-6">
            Clinical Practice Advantages
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_BENEFITS.map((benefit, i) => (
              <div key={i} className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/60 hover:border-teal-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h2 className="text-sm font-bold text-white mb-1.5">
                  {benefit.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
