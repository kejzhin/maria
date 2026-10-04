import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';

interface CanvaFooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const CanvaFooter: React.FC<CanvaFooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Your patients deserve your full attention—let me handle the rest.
            </h3>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-teal-800 text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-teal-800 text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Get in Touch */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Pasig City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button onClick={() => scrollToSection('#home')} className="text-left hover:text-teal-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('#about')} className="text-left hover:text-teal-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('#services')} className="text-left hover:text-teal-400 transition-colors">Services</button>
              <button onClick={onOpenContact} className="text-left hover:text-teal-400 transition-colors">Contact</button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Maria Bernadette. Confidential & HIPAA Secure.
          </div>
          <div>
            Designed with Canva Portfolio Style
          </div>
        </div>

      </div>
    </footer>
  );
};
