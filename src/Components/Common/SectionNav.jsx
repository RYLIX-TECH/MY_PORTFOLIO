import { useState, useEffect, useCallback } from "react";
const SECTION_IDS = [
  'home', 'About', 'Skills', 'services', 'portfolio', 'qualification', 'testimonial', 'contact'
];
const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <nav className="section-nav">
      {SECTION_IDS.map(section => (
        <button
          key={section}
          className={`nav-dot ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          aria-label={`${section} section`}
        />
      ))}
    </nav>
  );
};
export default SectionNav;