import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowIWork } from './components/HowIWork';
import { ProfessionalBackground } from './components/ProfessionalBackground';
import { SkillsExpertise } from './components/SkillsExpertise';
import { Services } from './components/Services';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

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
      {/* Top Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenServices={handleOpenServices} 
          onOpenAbout={handleOpenAbout} 
        />

        {/* About Me Section with Verified Certificate */}
        <About onOpenResume={handleOpenResume} />

        {/* How I Work Section */}
        <HowIWork />

        {/* Professional Background Section */}
        <ProfessionalBackground onOpenContact={handleOpenContact} />

        {/* Skills & Expertise Section */}
        <SkillsExpertise />

        {/* Services I Provide Grid */}
        <Services />

        {/* Call to Action */}
        <CallToAction onOpenContact={handleOpenContact} />
      </main>

      {/* Redesigned Footer */}
      <Footer 
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Resume / CV Modal */}
      <ResumeModal 
        isOpen={resumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
