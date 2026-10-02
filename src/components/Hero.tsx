import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Notification Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-900 text-xs font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
          <span>Available for Immediate Full-Time & Part-Time Placement (U.S. Timezones)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Healthcare Virtual Assistant · Clinical Administrator · Prior Auth Specialist
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                Maria Bernadette <br className="hidden sm:inline" />
                <span className="text-teal-700">Angeles - Estrada</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed pt-2">
                Delivering high-precision clinical and administrative support to U.S. healthcare practices, with deep specialization in <strong className="text-slate-900 font-semibold">Ear, Nose & Throat (ENT)</strong> and <strong className="text-slate-900 font-semibold">Allergy</strong> clinics.
              </p>
            </div>

            {/* Quick Badges Array (Zero-Pill Clean Unboxed Metadata) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 border-y border-slate-200/80 py-3">
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>HIPAA Certified</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>4+ Years U.S. Practice Support</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>B.S. in Biology</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Pasig City, PH (US Hours)</span>
              </div>
            </div>

            {/* Executive Bio Snippet */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Expert in navigating complex U.S. insurance portals (<span className="font-medium text-slate-800">Availity, Optum, Medpoint, Astrana Health, Regal/Lakeside, Preferred IPA</span>), executing prior authorization approvals, verifying real-time benefits, coding CPT/HCPCS/ICD-10, proctoring telehealth (Doxy.me), and mastering EHR workflows inside <strong className="text-slate-800">AdvancedMD</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Hire / Schedule Interview</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-all hover:border-slate-400"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Contact Quick Access Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-teal-700 transition-colors bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-md"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-slate-600" />
                <span className="font-mono text-slate-800">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-teal-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 hover:text-teal-700 transition-colors bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-md"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span className="font-mono text-slate-800">{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-teal-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: High-Fidelity Client Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-sky-400/20 rounded-3xl blur-xl opacity-70" />
              
              <div className="relative bg-white p-3 rounded-2xl border border-slate-200 shadow-xl">
                
                {/* Photo Container */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[3/4] flex items-center justify-center">
                  <img
                    src="/profile.png"
                    alt="Maria Bernadette S. Angeles - Estrada"
                    className={`w-full h-full object-cover object-top transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-95'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedProfile) {
                        target.dataset.triedProfile = 'true';
                        target.src = 'profile.png';
                      } else if (!target.dataset.triedMaria) {
                        target.dataset.triedMaria = 'true';
                        target.src = '/maria.jpeg';
                      } else if (!target.dataset.triedMariaRel) {
                        target.dataset.triedMariaRel = 'true';
                        target.src = 'maria.jpeg';
                      } else {
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.avatar-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'avatar-fallback absolute inset-0 bg-gradient-to-br from-teal-700 to-slate-800 flex flex-col items-center justify-center text-white p-6 text-center';
                          fallback.innerHTML = `
                            <div class="w-24 h-24 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-3xl font-bold mb-3 shadow-inner">MB</div>
                            <div class="text-lg font-bold">Maria Bernadette Estrada</div>
                            <div class="text-xs text-teal-200 mt-1">Healthcare Virtual Assistant</div>
                            <div class="text-[10px] bg-white/20 px-2.5 py-1 rounded-full mt-3">ENT & Allergy Specialist</div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                  />
                  
                  {/* Overlay Verification Pill at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between z-10">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Maria Bernadette Estrada</div>
                      <div className="text-[11px] text-teal-700 font-medium">Healthcare Virtual Assistant</div>
                    </div>
                    <div className="flex items-center gap-1 bg-teal-50 px-2 py-1 rounded-md text-[11px] font-semibold text-teal-800 border border-teal-200">
                      <CheckCircle2 className="w-3 h-3 text-teal-600" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Micro Highlights Below Photo */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-center">
                  <div className="p-1.5 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-slate-900 font-mono">4+ Yrs</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-tight">Experience</div>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-teal-700 font-mono">99%+</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-tight">Auth Accuracy</div>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded-lg">
                    <div className="text-xs font-bold text-slate-900 font-mono">100%</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-tight">HIPAA Compliant</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
