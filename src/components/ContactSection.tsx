import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  UserPlus, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    roleNeeded: 'Full-Time Healthcare Virtual Assistant (40h/wk)',
    specialty: 'ENT / Allergy Practice',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Angeles - Estrada;Maria Bernadette;;;
FN:Maria Bernadette S. Angeles - Estrada
ORG:Healthcare Virtual Assistant Services
TITLE:Healthcare Virtual Assistant & Prior Authorization Specialist
EMAIL;TYPE=INTERNET,WORK:${PERSONAL_INFO.email}
TEL;TYPE=CELL,VOICE:${PERSONAL_INFO.phone}
ADR;TYPE=WORK:;;Pasig City;Metro Manila;;Philippines
URL:https://linkedin.com/in/maria-bernadette-estrada
NOTE:Specialized in ENT, Allergy, AdvancedMD, Prior Authorization, Availity, Optum, Medpoint, Astrana, Regal/Lakeside, Medicare & Blue Shield.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Maria_Bernadette_Estrada.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email) return;

    // Trigger mailto with prefilled information
    const subject = encodeURIComponent(`Inquiry from ${formData.contactName} (${formData.practiceName || 'Medical Practice'}) - VA Placement`);
    const body = encodeURIComponent(
      `Hello Maria,\n\nI am reaching out regarding a ${formData.roleNeeded} position for our ${formData.specialty}.\n\nPractice / Clinic: ${formData.practiceName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage / Requirements:\n${formData.message}\n\nLooking forward to speaking with you!`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            Let's Discuss Support for Your Medical Practice
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Available for immediate full-time or part-time placement aligned with US Pacific, Mountain, Central, or Eastern timezones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-4">
              <h3 className="text-base font-bold text-white">
                Direct Contact Information
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono font-medium text-white hover:text-teal-400 transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-teal-400 rounded transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Phone / WhatsApp</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono font-medium text-white hover:text-teal-400 transition-colors">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-400 hover:text-teal-400 rounded transition-colors"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">LinkedIn Profile</div>
                      <a
                        href={PERSONAL_INFO.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-400 hover:underline"
                      >
                        linkedin.com/in/maria-bernadette-estrada
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* vCard download button */}
              <button
                onClick={handleDownloadVCard}
                className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded-xl border border-slate-600 transition-colors flex items-center justify-center gap-2"
              >
                <UserPlus className="w-3.5 h-3.5 text-teal-400" />
                <span>Save Contact to Phone (vCard .vcf)</span>
              </button>
            </div>

            {/* Timezone & Security Card */}
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Seamless U.S. Shift Alignment</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Equipped with high-speed fiber internet backup, noise-cancelling telephony headsets, secure encrypted Windows workstation, and dual monitors for multitasking between AdvancedMD and insurance portals.
              </p>
            </div>

          </div>

          {/* Contact Inquiry Form Column */}
          <div className="lg:col-span-7 bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl">
            
            <h3 className="text-lg font-bold text-white mb-2">
              Send an Interview Invitation or Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your clinic requirements to initiate contact directly with Maria.
            </p>

            {isSubmitted ? (
              <div className="bg-teal-950/60 border border-teal-600 rounded-xl p-6 text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
                <div className="text-base font-bold text-white">Thank You for Reaching Out!</div>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your email client has opened with your inquiry details. Maria will review your practice requirements and reply promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs text-teal-400 hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Robert Miller / Clinic Manager"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Practice / Clinic Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. West Coast ENT & Sinus Institute"
                      value={formData.practiceName}
                      onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rmiller@westcoastent.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(310) 555-0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Engagement Scope
                    </label>
                    <select
                      value={formData.roleNeeded}
                      onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="Full-Time Healthcare Virtual Assistant (40h/wk)">Full-Time (40 hrs/week)</option>
                      <option value="Part-Time Prior Auth & Billing Specialist (20h/wk)">Part-Time (20 hrs/week)</option>
                      <option value="Dedicated ENT / Allergy Specialty Support">Dedicated ENT / Allergy Specialty Support</option>
                      <option value="Project-Based / Turnaround Clearance">Project-Based / Turnaround Clearance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Practice Specialty
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="ENT & Allergy Practice">ENT & Allergy Practice</option>
                      <option value="Ear, Nose & Throat (Otolaryngology)">Ear, Nose & Throat (Otolaryngology)</option>
                      <option value="Allergy & Immunology">Allergy & Immunology</option>
                      <option value="Multi-Specialty Clinic">Multi-Specialty Clinic</option>
                      <option value="Primary Care / Internal Medicine">Primary Care / Internal Medicine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message / Current Practice Needs
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current portal requirements, weekly volume, or interview availability..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry & Schedule Discovery Call</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
