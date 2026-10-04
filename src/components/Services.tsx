import React from 'react';
import { FileCheck, Calendar, Mail, Stethoscope, PhoneCall, Users, Binary } from 'lucide-react';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  const services = [
    { 
      title: "Insurance Verification & Claims", 
      icon: FileCheck, 
      desc: "Real-time 270/271 eligibility and prior auth processing." 
    },
    { 
      title: "Patient Intake & Scheduling", 
      icon: Calendar, 
      desc: "Managing appointments and calendar coordination." 
    },
    { 
      title: "Small Inbox Management", 
      icon: Mail, 
      desc: "Handling secure patient portal messages and e-faxes." 
    },
    { 
      title: "Medical Reception", 
      icon: Stethoscope, 
      desc: "Front desk virtual phone triage and greeting." 
    },
    { 
      title: "Inbound & Outbound Communication", 
      icon: PhoneCall, 
      desc: "Nextiva VoIP calling with patients and insurance payers." 
    },
    { 
      title: "Virtual Support for Providers", 
      icon: Users, 
      desc: "Dedicated administrative support for ENT & allergy." 
    },
    { 
      title: "Medical Coding & Account Receivables", 
      icon: Binary, 
      desc: "CPT, ICD-10 coding accuracy and follow-ups." 
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a365d] tracking-tight">
            Services I Provide
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From billing and coding to scheduling, I offer reliable, comprehensive support for clinics and practitioners.
          </p>
        </motion.div>

        {/* 7 Services Grid with Light Blue Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#e8f4fc] text-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center space-y-4 shadow-sm border border-[#c5e4f8] hover:border-[#98ceef] hover:bg-[#ddf0fb] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0e6ba8]/15 text-[#0e6ba8] flex items-center justify-center border border-[#0e6ba8]/25 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h3 className="text-base font-bold text-[#1a365d] leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
