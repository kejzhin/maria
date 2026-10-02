import React from 'react';
import { FileCheck, Calendar, Mail, DollarSign, Stethoscope, PhoneCall, Users, Binary } from 'lucide-react';

export const CanvaServices: React.FC = () => {
  const services = [
    { title: "Insurance Verification & Claims", icon: FileCheck, desc: "Real-time 270/271 eligibility and prior auth processing." },
    { title: "Patient Intake & Scheduling", icon: Calendar, desc: "Managing appointments and calendar coordination." },
    { title: "Small Inbox Management", icon: Mail, desc: "Handling secure patient portal messages and e-faxes." },
    { title: "Payment Reconciliation", icon: DollarSign, desc: "OptumPay remittance reviews and statement balancing." },
    { title: "Medical Reception", icon: Stethoscope, desc: "Front desk virtual phone triage and greeting." },
    { title: "Inbound & Outbound Communication", icon: PhoneCall, desc: "Nextiva VoIP calling with patients and insurance payers." },
    { title: "Virtual Support for Providers", icon: Users, desc: "Dedicated administrative support for ENT & allergy." },
    { title: "Medical Billing & Account Receivables", icon: Binary, desc: "CPT, ICD-10 coding accuracy and follow-ups." },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Services I Provide
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From billing to scheduling, I offer reliable, comprehensive support for clinics and practitioners.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-md hover:bg-slate-800 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
