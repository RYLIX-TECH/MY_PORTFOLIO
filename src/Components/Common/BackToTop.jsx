import { useState, useEffect, useCallback } from "react";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
  if (!isVisible) return null;
  return (
    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      <i className="bx bx-up-arrow-alt"></i>
    </button>
  );
};
export default BackToTop;