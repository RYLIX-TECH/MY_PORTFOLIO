import React, { useMemo } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Example project images (replace with your actual image imports)
import project1Image from "../../assets/Admin-Dashboard.png";
import project2Image from "../../assets/Portfolio-pic.png";
import project3Image from "../../assets/web-hosting.png";
import project4Image from "../../assets/financer-pic.png";
import devFinder from "../../assets/devFinder.png"
import movieSite from "../../assets/movie-site.png"
// import { stack } from "three/tsl";

const Portfolio = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        className: "contai",
        delay: 0.2,
        image: project1Image,
        link: "https://admin-dashboard-sigma-sable-16.vercel.app/",
        title: "ADMIN-DASHBOARD",
        width: 800,
        height: 450
      },
      {
        id: 2,
        className: "contai",
        delay: 0.3,
        image: project2Image,
        link: "https://website2-eosin.vercel.app/",
        title: "PORTFOLIO",
        width: 800,
        height: 450
      },
      {
        id: 3,
        className: "contai",
        delay: 0.4,
        image: project3Image,
        link: "https://vite-project-mu-two.vercel.app/",
        title: "ECO HOSTING",
        width: 800,
        height: 450
      },
      {
        id: 4,
        className: "contai",
        delay: 0.5,
        image: project4Image,
        link: "https://company-lime-gamma.vercel.app/",
        title: "FINANCER",
        width: 800,
        height: 450
      },
      {
        id: 5,
        className: "contai dev",
        delay: 0.5,
        image: devFinder,
        link: "https://dev-finder-five-murex.vercel.app/",
        title: "DEV-FINDER",
        width: 800,
        height: 450
      },
      {
        id: 6,
        className: "contai dev",
        delay: 0.5,
        image: movieSite,
        link: "https://fullstack-movie-app-master.vercel.app/",
        title: "TVFLIX",
        width: 800,
        height: 450
      },
    ],
    []
  );

  return (
    <div>
      <section className="portfolio__container" id="portfolio">
        <h1 className="section__title">Top Projects</h1>
        <small>still under development</small>
        <div className="portfolio__content">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="portfolio-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="swiper-slide-custom">
                <div className="project-card">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      width={project.width}
                      height={project.height}
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <h3>{project.title}</h3>
                      <button 
                        className="view-project-btn"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Visit Site <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;