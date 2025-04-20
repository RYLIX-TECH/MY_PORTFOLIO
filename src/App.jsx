import React, { useState, useEffect, lazy, Suspense, useCallback, useMemo } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Service from "./Components/Services/Service";
import Qualification from "./Components/Qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import CustomCursor from './Components/CustomCursor/CustomCursor';
import LoadingSpinner from './Components/Common/LoadinSpinner';
import ScrollProgress from './Components/Common/ScrollProgress';
import BackToTop from './Components/Common/BackToTop';
import SectionNav from './Components/Common/SectionNav';
import ErrorBoundary from './Components/Common/ErrorBoundary';
import { isMobileDevice } from './utils/sanitize';
// import { sanitizeInput } from './utils/sanitize';

const Testimonial = lazy(() => import("./Components/Testimonial/Testimonial"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));

function App() {
  const [isNotified, setIsNotified] = useState(false);
  const [review, setReview] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    try {
      const existingReview = localStorage.getItem("websiteReviews");
      if (!existingReview) {
        const timeout = setTimeout(() => setIsNotified(true), 30000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const handleReviewSubmit = useCallback(() => {
    if (review.trim()) {
      try {
        const sanitizedReview = review.replace(/[^a-zA-Z0-9\s]/g, "");
        localStorage.setItem("websiteReviews", sanitizedReview);
        setIsNotified(false);
      } catch (error) {
        console.error("Error saving review to localStorage:", error);
      }
    }
  }, [review]);

  const mainContent = useMemo(() => (
    <main>
      <Hero />
      <About />
      <Skills />
      <Service />
      <Suspense fallback={<LoadingSpinner className="load" />}>
        <Portfolio />
      </Suspense>
      <Qualification />
      <Suspense fallback={<LoadingSpinner className="load" />}>
        <Testimonial />
      </Suspense>
      <Contact />
    </main>
  ), []);

  return (
    <ErrorBoundary>
      <CustomCursor />
      {!isMobile && <LoadingScreen />}
      <Header />
      {mainContent}
      <ScrollProgress />
      <BackToTop />
      <SectionNav />
      {/* Notification and review logic can be extracted to a separate component if needed */}
    </ErrorBoundary>
  );
}

export default App;