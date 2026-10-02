import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

interface CanvaCTAProps {
  onOpenContact: () => void;
}

export const CanvaCTA: React.FC<CanvaCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-950/40 via-slate-900 to-slate-950" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Ready to Streamline Your Practice?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Let's talk about how I can support your billing and admin needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Book a Call
          </button>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-full transition-all"
          >
            Send a Message
          </button>
        </div>

      </div>
    </section>
  );
};
