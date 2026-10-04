import React from 'react';
import { 
  TOOLS_COMMUNICATION, 
  TOOLS_EHR, 
  TOOLS_PORTALS, 
  TOOLS_INSURANCE 
} from '../data/portfolioData';
import { Globe, MessageSquare, Database, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsExpertise: React.FC = () => {
  const categories = [
    {
      title: "Health Insurance Portals",
      icon: Globe,
      tools: TOOLS_PORTALS,
      colorClass: "bg-teal-50 text-teal-900 border-teal-200/80"
    },
    {
      title: "Communication Tools",
      icon: MessageSquare,
      tools: TOOLS_COMMUNICATION,
      colorClass: "bg-blue-50 text-blue-900 border-blue-200/80"
    },
    {
      title: "Insurance Networks",
      icon: Shield,
      tools: TOOLS_INSURANCE,
      colorClass: "bg-emerald-50 text-emerald-900 border-emerald-200/80"
    },
    {
      title: "EHR & Practice Management",
      icon: Database,
      tools: TOOLS_EHR,
      colorClass: "bg-indigo-50 text-indigo-900 border-indigo-200/80"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-sm font-semibold text-teal-800">
            Advanced Proficiency in U.S. Healthcare Platforms & Portals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <Icon className="w-4 h-4" />
                  <span>{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span key={t.id} className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${cat.colorClass}`}>
                      {t.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
