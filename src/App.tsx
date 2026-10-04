import React, { useState } from 'react';
import { CanvaNavbar } from './components/CanvaNavbar';
import { CanvaHero } from './components/CanvaHero';
import { CanvaAbout } from './components/CanvaAbout';
import { CanvaHowIWork } from './components/CanvaHowIWork';
import { CanvaProfessionalBackground } from './components/CanvaProfessionalBackground';
import { CanvaSkillsExpertise } from './components/CanvaSkillsExpertise';
import { CanvaServices } from './components/CanvaServices';
import { CanvaCTA } from './components/CanvaCTA';
import { CanvaFooter } from './components/CanvaFooter';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAbout = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* Exact Canva Navbar */}
      <CanvaNavbar onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <CanvaHero 
          onOpenServices={handleOpenServices} 
          onOpenAbout={handleOpenAbout} 
        />

        {/* About Me Section */}
        <CanvaAbout onOpenResume={handleOpenResume} />

        {/* How I Work Section */}
        <CanvaHowIWork />

        {/* Professional Background Section */}
        <CanvaProfessionalBackground onOpenContact={handleOpenContact} />

        {/* Skills & Expertise Section (Portals, Comm tools, Insurance, EHR) */}
        <CanvaSkillsExpertise />

        {/* Services I Provide Grid */}
        <CanvaServices />

        {/* Ready to Streamline Your Practice? CTA */}
        <CanvaCTA onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <CanvaFooter 
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
