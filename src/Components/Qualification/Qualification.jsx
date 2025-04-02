/** @format */

import React, { useState } from "react";
import "./Qualification.css";
import { motion } from "motion/react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <motion.section
      initial={{opacity: 0,  y:100}} 
      whileInView={{opacity:1, y:0}}
      transition={{type:'spring',stiffness:"120",damping:"20" ,duration:1,delay:0.2}}
      className="qualification section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: "120",
          damping: "20",
          duration: 1,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="section__title"
      >
        Qualification
      </motion.h2>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: "120",
          damping: "20",
          duration: 1,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="section__subtitle"
      >
        My personal journey
      </motion.span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "120",
              damping: "20",
              duration: 1,
              delay: 0.6,
            }}
            // viewport={{once:true}}
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Nigeria - institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Directory</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Nigeria - institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2023 -2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Nigeria - institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Nigeria - institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2024 - present
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "120",
              damping: "20",
              duration: 1,
              delay: 0.6,
            }}
            // viewport={{once:true}}
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">product Designer</h3>
                <span className="qualification__subtitle">
                  microsoft.com - Nigeria
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple inc - Nigeria
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2023 -2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web Designer</h3>
                <span className="qualification__subtitle">Figma - Nigeria</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualification;
