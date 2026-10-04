import React, { useRef } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, TOOLS_COMMUNICATION, TOOLS_EHR, TOOLS_PORTALS, TOOLS_INSURANCE } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">
              Curriculum Vitae / Resume Preview
            </span>
            <span className="text-xs text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-medium">
              Verified U.S. Healthcare VA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible font-sans" ref={resumeRef}>
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              {PERSONAL_INFO.fullName}
            </h1>
            <div className="text-sm font-bold text-teal-700 tracking-wide uppercase mt-1">
              {PERSONAL_INFO.title}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-slate-400" />
                <a 
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700 transition-colors"
                >
                  linkedin.com/in/mariabernadetteae
                </a>
              </div>
            </div>
          </div>

          {/* Executive Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Work Experience
            </h2>

            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-sm font-bold text-slate-900">
                    {exp.company}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 font-mono">
                    {exp.period}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-teal-800 font-medium">
                  <span className="italic">{exp.role}</span>
                  <span className="text-slate-500">{exp.location}</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 pt-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical & Software Ecosystem */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Tools, EHR & Insurance Portals
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Communication & Telehealth:</span>
                Doxy.me, Nextiva (VoIP), Google Meet, Microsoft Teams, Zoom, Discord
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">EHR & Clinical Suites:</span>
                AdvancedMD (Scheduling, Chart Tagging, Charge Capture, E-Faxing)
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Health Insurance Portals:</span>
                Medpoint, Preferred IPA, Optum Provider Portal, Astrana Health, Regal / Lakeside, Availity Essentials
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Insurance Network Knowledge:</span>
                Medicare (Part A/B/Advantage), Blue Shield of California / BCBS, Medi-Cal, Commercial Payers
              </div>
            </div>
          </div>

          {/* Core Competencies & Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Core Competencies & Technical Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• Prior Authorization Specialist</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• ICD-10-CM / CPT / HCPCS</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• HIPAA Certified & PHI Security</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• Insurance Eligibility (270/271)</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• Inbound & Outbound Calling</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• COVID-19 Proctoring (Doxy)</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• VA Mentorship & SOP Training</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-200 font-medium">• Detail-Oriented & Reliable</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Certifications & Accreditations
            </h2>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-xs font-bold text-slate-900">HIPAA Awareness for Healthcare Providers</span>
              <span className="text-xs font-mono text-slate-500">April 2022</span>
            </div>
            <div className="text-xs text-teal-800 font-medium">
              HIPAATraining.com (Hello Rache) • 1.5 Credit Hours (Texas HB 300 & California CMIA)
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-xs font-bold text-slate-900">{PERSONAL_INFO.education.institution}</span>
              <span className="text-xs font-mono text-slate-500">{PERSONAL_INFO.education.period}</span>
            </div>
            <div className="text-xs text-teal-800 font-medium italic">
              {PERSONAL_INFO.education.degree}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
