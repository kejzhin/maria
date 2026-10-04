import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Clock } from 'lucide-react';

interface FooterProps {
  onOpenResume?: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0b1728] text-slate-300 border-t border-slate-800/80 pt-12 pb-10 selection:bg-teal-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Healthcare Practice Partner
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                Your patients deserve your full attention—let me handle the rest.
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Providing precision prior authorization, seamless clinical administrative workflows, and reliable insurance verification for U.S. healthcare providers.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 hover:bg-[#0e6ba8] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-[#0e6ba8] shadow-sm hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900/90 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-teal-500 shadow-sm hover:scale-105"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-10 h-10 rounded-xl bg-slate-900/90 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800 hover:border-teal-500 shadow-sm hover:scale-105"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Get in Touch
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="group flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-950/50 border border-teal-800/40 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5 group-hover:bg-teal-900/80 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Email</div>
                  <div className="font-semibold text-slate-200 group-hover:text-teal-300 break-all">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                className="group flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-950/50 border border-teal-800/40 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5 group-hover:bg-teal-900/80 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Direct Contact</div>
                  <div className="font-semibold text-slate-200 group-hover:text-teal-300">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-teal-950/50 border border-teal-800/40 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-400" />
                    <span>Serving US PST, MST, CST, EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Quick Links
            </h4>
            
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <button 
                onClick={() => scrollToSection('#home')} 
                className="text-left text-slate-300 hover:text-teal-300 transition-colors flex items-center justify-between group py-1"
              >
                <span>Home</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => scrollToSection('#about')} 
                className="text-left text-slate-300 hover:text-teal-300 transition-colors flex items-center justify-between group py-1"
              >
                <span>About Maria</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => scrollToSection('#services')} 
                className="text-left text-slate-300 hover:text-teal-300 transition-colors flex items-center justify-between group py-1"
              >
                <span>Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={onOpenContact} 
                className="text-left text-slate-300 hover:text-teal-300 transition-colors flex items-center justify-between group py-1"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </nav>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Maria Bernadette S. Angeles - Estrada. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
