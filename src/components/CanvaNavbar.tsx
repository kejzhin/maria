import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface CanvaNavbarProps {
  onOpenContact: () => void;
}

export const CanvaNavbar: React.FC<CanvaNavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 h-16 flex items-center transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* Logo Mark (Large logo with absolute overflow so header bar remains compact and thin) */}
        <a href="#home" className="flex items-center group relative w-16 sm:w-20 h-16">
          <div className="absolute -top-3 sm:-top-5 left-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-visible group-hover:scale-105 transition-transform">
            <img
              src="/heartbeat.png"
              alt="Logo"
              className="w-full h-full object-contain filter drop-shadow-md"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-logo')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'fallback-logo w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center shadow-md';
                  fallback.innerHTML = `
                    <svg class="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      <path d="M3.5 12h4l1.5-3 2.5 6 2-4 1.5 2h5.5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="hover:text-[#1a365d] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Book a Call Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-full shadow-sm transition-all hover:shadow hover:-translate-y-0.5 tracking-wider uppercase"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 text-[11px] font-bold text-slate-900 bg-white border border-slate-900 rounded-full"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-blue-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-slate-900 rounded-full uppercase tracking-wider"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
