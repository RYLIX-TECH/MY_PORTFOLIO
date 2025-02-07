/** @format */

import React from "react";
import { motion } from "motion/react";

const Frontend = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: "300",
        damping: "20",
      }}
      viewport={{ once: true }}
      className="skills__content"
    >
      <h3 className="skills__title"> Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
