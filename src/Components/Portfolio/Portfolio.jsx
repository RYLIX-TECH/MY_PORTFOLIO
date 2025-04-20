import React, { useMemo } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

// Example project images (replace with your actual image imports)
import project1Image from "../../assets/Admin-Dashboard.png";
import project2Image from "../../assets/Portfolio-pic.png";
import project3Image from "../../assets/web-hosting.png";
import project4Image from "../../assets/financer-pic.png";
import devFinder from "../../assets/devFinder.png"
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
      },
      {
        id: 2,
        className: "contai",
        delay: 0.3,
        image: project2Image,
        link: "https://website2-eosin.vercel.app/",
        title: "PORTFOLIO",
      },
      {
        id: 3,
        className: "contai",
        delay: 0.4,
        image: project3Image,
        link: "https://vite-project-mu-two.vercel.app/",
        title: "ECO HOSTING",
      },
      {
        id: 4,
        className: "contai",
        delay: 0.5,
        image: project4Image,
        link: "https://company-lime-gamma.vercel.app/",
        title: "FINANCER",
      },
      {
        id: 4,
        className: "contai dev",
        delay: 0.5,
        image: devFinder,
        link: "https://dev-finder-five-murex.vercel.app/",
        title: "DEV-FINDER",
      },
    ],
    []
  );

  const animationSettings = useMemo(
    () =>
      projects.map((project, index) => ({
        initial: { opacity: 0, y: 100 },
        transition: {
          duration: 1 + index * 0.2,
          delay: project.delay,
          type: "tween",
        },
        whileInView: { opacity: 1, y: 0 },
      })),
    [projects]
  );
  // const skills = stack.split(" ");

  return (
    <div>
      <section className="portfolio__container" id="portfolio">
        <h1 className="section__title">Top Projects</h1>
        <small>still under development</small>
        <div className="portfolio__content">
          <div className="content__items">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                {...animationSettings[index]}
                className="container__item"
              >
                <div className={project.className}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project__image"
                  />
                </div>
                <div
                  className="visit__site"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
