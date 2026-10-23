
import { useState } from 'react';
import { useTheme } from './hooks/useTheme';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div
      className="portfolio-page min-h-screen transition-colors duration-300"
      data-theme={resolvedTheme}
    >
      {/* Premium sticky navigation */}
      <Navbar
        themeMode={themeMode}
        resolvedTheme={resolvedTheme}
        setThemeMode={setThemeMode}
        onOpenResume={openResume}
      />

      {/* Main portfolio content */}
      <main id="main-content" className="relative">
        <Hero onOpenResume={openResume} />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />

        <SkillsSection />

        <EducationSection />

        <CertificationsSection />

        <EventsSection />

        <ContactSection />
      </main>

      {/* Portfolio footer */}
      <Footer />

      {/* Interactive resume modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
      />
    </div>
  );
}

export default App;
