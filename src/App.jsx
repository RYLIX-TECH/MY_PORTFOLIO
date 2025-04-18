/** @format */

import Header from "./Components/Header/Header";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Service from "./Components/Services/Service";
// import Wave from "";
import Qualification from "./Components/Qualification/Qualification";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

import { useState, useEffect } from "react";

function App() {
  const [isNotified, setIsNotified] = useState(false);
  const [review, setReview] = useState("");

  useEffect(() => {
    try {
      const existingReview = localStorage.getItem("websiteReviews");
      if (!existingReview) {
        const timeout = setTimeout(() => {
          setIsNotified(true);
        }, 30000);

        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const handleReviewSubmit = () => {
    if (review.trim()) {
      try {
        const sanitizedReview = review.replace(/[^a-zA-Z0-9\s]/g, ""); // Sanitize input
        localStorage.setItem("websiteReviews", sanitizedReview);
        setIsNotified(false);
      } catch (error) {
        console.error("Error saving review to localStorage:", error);
      }
    }
  };

  return (
    <div className="body">
      {isNotified && (
        <div className="review-notification">
          <div className="notification-card">
            <h3 className="notification-title">
              How did you like my portfolio
            </h3>
            <div className="rating-options">
              {[" Nice", " Good", " Wonderful"].map((option, index) => (
                <button
                  key={index}
                  onClick={() => setReview(option.split(" ")[1])}
                  className="rating-option"
                >
                  <span className="emoji">{option.split(" ")[0]}</span>
                  <span className="label">{option.split(" ")[1]}</span>
                </button>
              ))}
            </div>
            <div className="notification-actions">
              <button
                onClick={handleReviewSubmit}
                className="submit-btn"
                disabled={!review}
              >
                Submit
              </button>
              <button
                onClick={() => setIsNotified(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Header />
      <main className="main">
        <Hero />
        <About />
        
        <Skills />
        {/* <Wave/> */}
        <Service />
        <Portfolio />
        <Qualification />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}

export default App;
