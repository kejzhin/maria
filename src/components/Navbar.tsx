import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
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
    <header id="home" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-16 flex items-center justify-between relative">
        
        {/* Logo Mark */}
        <a href="#home" className="flex items-center relative h-16 w-16 sm:w-20 z-10">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img
              src="/heartbeat.png"
              alt="Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-logo')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'fallback-logo w-12 h-12 rounded-full bg-[#1a365d] text-white flex items-center justify-center shadow-md';
                  fallback.innerHTML = `
                    <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
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

        {/* Desktop Nav Links - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold text-slate-700 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="hover:text-[#0e6ba8] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0e6ba8] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Action */}
        <div className="hidden md:flex items-center z-10 ml-auto">
          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow-sm hover:shadow transition-all"
          >
            LET'S WORK TOGETHER
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="w-full text-center py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0e6ba8] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0e6ba8] hover:bg-[#0c5d90] rounded-full shadow text-center"
            >
              LET'S WORK TOGETHER
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
